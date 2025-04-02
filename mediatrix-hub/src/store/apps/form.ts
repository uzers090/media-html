import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { saveConsultationForm, saveContactForm } from '../../api/form';

interface FormState {
  consultationForm: {
    name: string;
    email: string;
    phone: string;
    caseType: string;
  };
  contactForm: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    lawFirm: string;
    caseTypes: string;
    leadVolume: string;
    additionalInfo: string;
  };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: FormState = {
  consultationForm: {
    name: '',
    email: '',
    phone: '',
    caseType: '',
  },
  contactForm: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    lawFirm: '',
    caseTypes: '',
    leadVolume: '',
    additionalInfo: '',
  },
  status: 'idle',
  error: null,
};

// Async thunks for API calls
export const submitConsultationForm = createAsyncThunk(
  'form/submitConsultationForm',
  async (formData: FormState['consultationForm'], { rejectWithValue }) => {
    try {
      const response = await saveConsultationForm(formData);
      return response;
    } catch (error:unknown) {
      return rejectWithValue('Failed to submit consultation form');
    }
  }
);

export const submitContactForm = createAsyncThunk(
  'form/submitContactForm',
  async (formData: FormState['contactForm'], { rejectWithValue }) => {
    try {
      const response = await saveContactForm(formData);
      return response;
    } catch (error:unknown) {
      return rejectWithValue('Failed to submit contact form');
    }
  }
);

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateConsultationForm: (state, action: PayloadAction<Partial<FormState['consultationForm']>>) => {
      state.consultationForm = { ...state.consultationForm, ...action.payload };
    },
    updateContactForm: (state, action: PayloadAction<Partial<FormState['contactForm']>>) => {
      state.contactForm = { ...state.contactForm, ...action.payload };
    },
    resetConsultationForm: (state) => {
      state.consultationForm = initialState.consultationForm;
    },
    resetContactForm: (state) => {
      state.contactForm = initialState.contactForm;
    },
  },
  extraReducers: (builder) => {
    // Consultation Form
    builder
      .addCase(submitConsultationForm.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(submitConsultationForm.fulfilled, (state) => {
        state.status = 'succeeded';
        state.consultationForm = initialState.consultationForm; // Reset form on success
      })
      .addCase(submitConsultationForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      // Contact Form
      .addCase(submitContactForm.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.status = 'succeeded';
        state.contactForm = initialState.contactForm; // Reset form on success
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const {
  updateConsultationForm,
  updateContactForm,
  resetConsultationForm,
  resetContactForm,
} = formSlice.actions;

export default formSlice.reducer;