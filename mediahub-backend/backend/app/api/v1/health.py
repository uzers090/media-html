from fastapi import APIRouter, Depends, HTTPException
from backend.app.common.response.response_schema import response_base
from backend.app.common.response.response_code import CustomCodeBase , CustomResponse

router = APIRouter(
    tags=["Health"]  , 
    responses={404 : {"Description" : "Failed to run"}}
) 

@router.get("/")
async def check_health():
    data = {"health" : "Active and running"}
    return await response_base.success(data=data)