from pydantic import BaseModel, ConfigDict
from typing import Optional

# Consultation DTOs
class ConsultationCreate(BaseModel):
    name: str
    email: str
    phone: str
    case_type: str

class ConsultationResponse(BaseModel):
    id: int
    name: str
    email: str
    phone: str
    case_type: str

    class Config:
        orm_mode = True  # Enable ORM mode for SQLAlchemy compatibility

# Contact DTOs
class ContactCreate(BaseModel):
    first_name: str
    last_name: str
    email: str
    phone: str
    law_firm: str
    case_types: str
    lead_volume: str
    additional_info: str

class ContactResponse(BaseModel):
    id: int
    first_name: str
    last_name: str
    email: str
    phone: str
    law_firm: str
    case_types: str
    lead_volume: str
    additional_info: str

    class Config:
        orm_mode = True

# Quote DTOs
class QuoteCreate(BaseModel):
    first_name: str
    last_name: str
    email: str
    phone: str
    order_details: str
    quote_type: str

class QuoteResponse(BaseModel):
    id: int
    first_name: str
    last_name: str
    email: str
    phone: str
    order_details: str
    quote_type: str

    class Config:
        orm_mode = True