from dotenv import load_dotenv
import os
from pathlib import Path
import pymysql
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# load_dotenv()
env_path = Path(".") / ".env"
load_dotenv(dotenv_path=env_path)

# SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"
# SQLALCHEMY_DATABASE_URL = "postgresql://user:password@postgresserver/db"

DB_USER=os.environ.get("DB_USER", "root")
DB_HOST=os.environ.get("DB_HOST", "localhost")
DB_PASSWORD=os.environ.get("DB_PASSWORD", "")
DB_DATABASE=os.environ.get("DB_DATABASE", "breakingbad")

SQLALCHEMY_DATABASE_URL = f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_DATABASE}"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
