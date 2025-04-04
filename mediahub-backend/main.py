import uvicorn
from backend.app.core.register import register_app
from backend.app.core.conf import setting
from path import Path


app  = register_app()

if __name__ == "__main__":
    uvicorn.run(
        app=f'{Path(__file__).stem}:app', 
        host = setting.UVICORN_HOST , 
        port = setting.UVICORN_PORT ,
        reload = setting.UVICORN_RELOAD ,
    )