import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { saveConsultationForm, saveContactForm, saveQuoteForm } from '../../api/form';

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
  quoteForm: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    orderDetails: string;
    quoteType: string;
  };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: FormState = {
  consultationForm: { name: '', email: '', phone: '', caseType: '' },
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
  quoteForm: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    orderDetails: '',
    quoteType: '',
  },
  status: 'idle',
  error: null,
};

export const submitConsultationForm = createAsyncThunk(
  'form/submitConsultationForm',
  async (formData: FormState['consultationForm'], { rejectWithValue }) => {
    try {
      const response = await saveConsultationForm(formData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to submit consultation form');
    }
  }
);

export const submitContactForm = createAsyncThunk(
  'form/submitContactForm',
  async (formData: FormState['contactForm'], { rejectWithValue }) => {
    try {
      const response = await saveContactForm(formData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to submit contact form');
    }
  }
);

export const submitQuoteForm = createAsyncThunk(
  'form/submitQuoteForm',
  async (formData: FormState['quoteForm'], { rejectWithValue }) => {
    try {
      const response = await saveQuoteForm(formData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Failed to submit quote form');
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
    updateQuoteForm: (state, action: PayloadAction<Partial<FormState['quoteForm']>>) => {
      state.quoteForm = { ...state.quoteForm, ...action.payload };
    },
    resetConsultationForm: (state) => {
      state.consultationForm = initialState.consultationForm;
    },
    resetContactForm: (state) => {
      state.contactForm = initialState.contactForm;
    },
    resetQuoteForm: (state) => {
      state.quoteForm = initialState.quoteForm;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitConsultationForm.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(submitConsultationForm.fulfilled, (state) => {
        state.status = 'succeeded';
        state.consultationForm = initialState.consultationForm;
      })
      .addCase(submitConsultationForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(submitContactForm.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.status = 'succeeded';
        state.contactForm = initialState.contactForm;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(submitQuoteForm.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(submitQuoteForm.fulfilled, (state) => {
        state.status = 'succeeded';
        state.quoteForm = initialState.quoteForm;
      })
      .addCase(submitQuoteForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const {
  updateConsultationForm,
  updateContactForm,
  updateQuoteForm,
  resetConsultationForm,
  resetContactForm,
  resetQuoteForm,
} = formSlice.actions;

export default formSlice.reducer;