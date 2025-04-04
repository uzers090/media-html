from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

### Later down the line update this with actual DB 
DATABASE_URL = "sqlite:///./app.db"  # Example SQLite database URL
engine  = create_engine(DATABASE_URL , connect_args={"check_same_thread": False})
session_local = sessionmaker(autoflush=False , bind=engine)
Base = declarative_base()

def get_db():
    db = session_local()
    try:
        yield db
    finally:
        db.close()  
