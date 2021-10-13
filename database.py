from dotenv import load_dotenv
import os
from pathlib import Path
import pymysql
import sqlalchemy as _sql
import sqlalchemy.ext.declarative as _declarative
import sqlalchemy.orm as _orm

# load_dotenv()
env_path = Path(".") / ".env"
load_dotenv(dotenv_path=env_path)

DB_USER=os.environ.get("DB_USER", "root")
DB_HOST=os.environ.get("DB_HOST", "localhost")
DB_PASSWORD=os.environ.get("DB_PASSWORD", "")
DB_DATABASE=os.environ.get("DB_DATABASE", "breakingbad")

SQLALCHEMY_DATABASE_URL = f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_DATABASE}"

engine = _sql.create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = _orm.sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = _declarative.declarative_base()
