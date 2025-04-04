from contextlib import asynccontextmanager
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.app.core.conf import setting
from backend.app.api.routers import v1
from backend.app.core.db import Base
from backend.app.core.db import engine

def register_app():
    app = FastAPI(
        title=setting.TITLE , 
        version=setting.VERSION ,  
        description=setting.VERSION
    )
    Base.metadata.create_all(bind=engine)
    app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
    regitser_router(app=app)
    return app


def regitser_router(app:FastAPI):
    app.include_router(v1)