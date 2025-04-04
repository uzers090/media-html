from backend.app.modules.lead.repo import LeadRepository , get_form_repo
from fastapi import HTTPException , Depends
from fastapi.responses import FileResponse  
from backend.app.utils.excel_converter import ExcelConverter
from backend.app.utils.mail_service import MailGun
import dotenv
### Todo : 
# 1. Add logging to all methods
# 2. Create a Mail Service Util
# 3. Afte each lead send the lead to client 
# 4. Create a Execel Creater Util 
# 5. Send an Excel of created leads and the mail of the lead to the client 

class LeadService:
    def __init__(self, lead_repo: LeadRepository):
        self.lead_repo = lead_repo
        self.converter = ExcelConverter()
        self.mail_service = MailGun()


    def _send_email_update(self , category:str):
        try:
            email = "email.com"
            subject = "New Lead Created"
            self.mail_service.send_email(
                from_name=""  ,
                to_email=email,
                subject=subject,
                html_content=f"A new lead has been created.  {category}"
            )
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error sending email")

    def save_consultation(self, data):
        try:
            return self.lead_repo.save_consultation(data)
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error saving consultation")

    def save_contact(self, data):
        try:
            return self.lead_repo.save_contact(data)
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error saving contact")

    def save_quote(self, data):
        try:
            return self.lead_repo.save_quote(data)
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error saving quote")

    def get_all_contacts(self):
        try:
            return self.lead_repo.get_all_contacts()
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error fetching contacts")
    
    def get_all_consultation(self):
        try:
            return self.lead_repo.get_all_consultations()
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error fetching consultations")
        
    def download_consultation(self):
        try:
            consultations = self.lead_repo.get_all_consultations()
            if not consultations:
                raise HTTPException(status_code=404, detail="No consultations found")
            
            # Convert the list of consultations to an Excel file
            filename = self.converter.convert(consultations)
            return filename
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error downloading consultations")
    
    def download_contact(self):
        try:
            contacts = self.lead_repo.get_all_contacts()
            if not contacts:
                raise HTTPException(status_code=404, detail="No contacts found")
            
            # Convert the list of contacts to an Excel file
            filename = self.converter.convert(contacts)
            return filename
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error downloading contacts")
    
    def download_quote(self):
        try:
            quotes = self.lead_repo.get_all_quotes()
            if not quotes:
                raise HTTPException(status_code=404, detail="No quotes found")
            
            # Convert the list of quotes to an Excel file
            filename = self.converter.convert(quotes)
            return filename
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error downloading quotes")
    
    def get_all_leads(self):
        try:
            consultations = self.lead_repo.get_all_consultations()
            contacts = self.lead_repo.get_all_contacts()
            quotes = self.lead_repo.get_all_quotes()
            all_leads = {
                "consultations": consultations,
                "contacts": contacts,
                "quotes": quotes
            }
            print(f"Fetched leads {all_leads}")
            # if not all_leads:
            #     raise HTTPException(status_code=404, detail="No leads found")
            # Convert the list of leads to an Excel file
            filename = self.converter.convert_all(all_leads)
            return filename
        except Exception as e:
            raise HTTPException(status_code=500, detail="Error fetching all leads")

def get_lead_service(lead_repo: LeadRepository = Depends(get_form_repo)):
    return LeadService(lead_repo)