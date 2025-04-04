from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import FileResponse  
from backend.app.common.response.response_schema import response_base, ResponseModel
from backend.app.modules.lead.dto import (
    ConsultationCreate,
    ContactCreate,
    QuoteCreate,
    ConsultationResponse,
    ContactResponse,
    QuoteResponse,
)
from backend.app.modules.lead.service import get_lead_service, LeadService
import os

router = APIRouter(
    tags=["Lead"],
    responses={404: {"Description": "Failed to run"}},
)

@router.post("/consultation", response_model=ConsultationResponse)
def create_consultation(data: ConsultationCreate, lead_service: LeadService = Depends(get_lead_service)):
    try:
        result = lead_service.save_consultation(data)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error saving consultation")

@router.post("/contact", response_model=ContactResponse)
def create_contact(data: ContactCreate, lead_service: LeadService = Depends(get_lead_service)):
    try:
        result = lead_service.save_contact(data)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error saving contact")

@router.post("/quote", response_model=QuoteResponse)
def create_quote(data: QuoteCreate, lead_service: LeadService = Depends(get_lead_service)):
    try:
        result = lead_service.save_quote(data)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error saving quote")


@router.get("/contacts", response_model=list[ContactResponse])
def get_all_contacts(lead_service: LeadService = Depends(get_lead_service)):
    try:
        result = lead_service.get_all_contacts()
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error fetching contacts")

@router.get("/consultations", response_model=list[ConsultationResponse])
def get_all_consultations(lead_service: LeadService = Depends(get_lead_service)):
    try:
        result = lead_service.get_all_consultation()
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error fetching consultations")
    
    
@router.get("/download-leads" )
def download_Excel(lead_service: LeadService = Depends(get_lead_service)):  
    try:
        file_path =  lead_service.get_all_leads()
        def cleanup():
            os.path.exists(file_path) and os.remove(file_path)
        return FileResponse(
            path=file_path,
            filename="leads.xlsx",
            media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            background=cleanup  # FastAPI will run this after the response is sent
        )
    except Exception as e:
        raise e
