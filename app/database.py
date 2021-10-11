from dotenv import load_dotenv
import os
import pymysql
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

load_dotenv()

# SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"
# SQLALCHEMY_DATABASE_URL = "postgresql://user:password@postgresserver/db"

# host=os.environ.get("DB_HOST", "localhost")
# user=os.environ.get("DB_USER", "root")
# password=os.environ.get("DB_PASSWORD", "")
# database=os.environ.get("DB_DATABASE", "breakingbad")

SQLALCHEMY_DATABASE_URL = 'mysql+pymysql://root:@localhost/breakingbad'

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()