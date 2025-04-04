import requests
import logging

class MailGun:
    def __init__(self, api_key: str, domain: str):
        self.api_key = api_key
        self.domain = domain
        self.base_url = f"https://api.mailgun.net/v3/{domain}/messages"
        self.logger = logging.getLogger(__name__)
    
    def send_email(self, from_name: str, to_email: str, subject: str, html_content: str):
        """Simple function to send email using Mailgun free tier"""
        
        from_email = f"{from_name} <{from_name}@{self.domain}>"
        
        data = {
            "from": from_email,
            "to": to_email,
            "subject": subject,
            "html": html_content
        }
        
        try:
            response = requests.post(
                self.base_url,
                auth=("api", self.api_key),
                data=data
            )
            response.raise_for_status()
            return {"success": True, "message_id": response.json().get('id')}
        except Exception as e:
            self.logger.error(f"Failed to send email: {str(e)}")
            return {"success": False, "error": str(e)}