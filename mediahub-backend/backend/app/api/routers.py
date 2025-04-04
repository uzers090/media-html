from fastapi import APIRouter
from backend.app.core.conf import setting
from backend.app.api.v1.health import router as health
from backend.app.api.v1.leads import router as lead_router
v1 = APIRouter(
    prefix=setting.API_V1_STR,
)
v1.include_router(health , prefix="/health" , responses={404: {"description": "Failed to run"}})
v1.include_router(lead_router , prefix="/leads"  , responses={404: {"description": "Failed to run"}})