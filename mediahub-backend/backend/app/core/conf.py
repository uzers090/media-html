from pydantic_settings import BaseSettings
from typing import Union

class Settings(BaseSettings):
    model_config: dict = {
        'env_file': '.env',
        'env_file_encoding': 'utf-8',
    }

    ENVIRONMENT: Union[str, None] = "dev" 
    API_V1_STR: str = '/api/v1'
    TITLE: str = 'FastAPI'
    VERSION: str = '0.0.1'
    DESCRIPTION: str = 'FastAPI Best Architecture'

    UVICORN_HOST: str = '0.0.0.0'
    UVICORN_PORT: int = 8000
    UVICORN_RELOAD: bool = True

    WEBHOOK: str = "https://fcaapi.v500.com/api/v1/webhook"  # By default, Dev

    # @validator('WEBHOOK', pre=True, always=True)
    # def validate_webhook(cls, value):
    #     if cls.ENVIRONMENT == 'pro':
    #         # Update the webhook endpoint for production
    #         # Update the rabbit mq config here
    #         pass
    #     return value

def get_setting():
    return Settings()

setting = get_setting()
