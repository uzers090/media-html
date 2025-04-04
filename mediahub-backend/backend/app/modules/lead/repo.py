from sqlalchemy.orm import Session
from fastapi import Depends
from backend.app.modules.lead.entity import Consultation, Contact, Quote
from  backend.app.modules.lead.dto import ConsultationCreate, ContactCreate, QuoteCreate
from backend.app.core.db import get_db

class LeadRepository:
    def __init__(self, db: Session):
        self.db = db
    
    def save_consultation(self, data: ConsultationCreate) -> Consultation:
        consultation = Consultation(
            name=data.name,
            email=data.email,
            phone=data.phone,
            case_type=data.case_type
        )
        self.db.add(consultation)
        self.db.commit()
        self.db.refresh(consultation)
        return consultation  # Return the ORM object, not the session
    
    def get_all_consultations(self) -> list[Consultation]:
        try:
            consultations = self.db.query(Consultation).all()
            return consultations
        except Exception as e:
            print(f"Error fetching consultations: {e}")
            return []
    
    def save_contact(self, data: ContactCreate) -> Contact:
        contact = Contact(
            first_name=data.first_name,
            last_name=data.last_name,
            email=data.email,
            phone=data.phone,
            law_firm=data.law_firm,
            case_types=data.case_types,
            lead_volume=data.lead_volume,
            additional_info=data.additional_info
        )
        self.db.add(contact)
        self.db.commit()
        self.db.refresh(contact)
        return contact  # Return the ORM object, not the session
    
    def get_all_contacts(self) -> list[Contact]:
        try:
            contacts = self.db.query(Contact).all()
            print(f"Fetched Contacts {contacts}")
            return contacts
        except Exception as e:
            print(f"Error fetching contacts: {e}")
            return []
    
    def save_quote(self, data: QuoteCreate) -> Quote:
        quote = Quote(
            first_name=data.first_name,
            last_name=data.last_name,
            email=data.email,
            phone=data.phone,
            order_details=data.order_details,
            quote_type=data.quote_type
        )
        self.db.add(quote)
        self.db.commit()
        self.db.refresh(quote)
        return quote  # Return the ORM object, not the session
    
    def get_all_quotes(self) -> list[Quote]:
        try:
            quotes = self.db.query(Quote).all()
            return quotes
        except Exception as e:
            print(f"Error fetching quotes: {e}")
            return []
        
def get_form_repo(db: Session = Depends(get_db)):
    return LeadRepository(db)