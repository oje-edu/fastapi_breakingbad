from dotenv import load_dotenv
import uvicorn
import os
from typing import List

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

import crud as _crud
import models as _models
import schemas as _schemas
from database import SessionLocal, engine

load_dotenv()

_models._database.Base.metadata.create_all(bind=engine)

description = """
This is a german Breaking Bad API. 🚀
## In development
Coming soon:
* **Read **.
* **Read**.
* **Read**.
"""

tags_metadata = [
    {
        "name": "Seasons",
        "description": "Shows the Seasons.",
    },
    {
        "name": "Episodes",
        "description": "Shows the Episodes.",
    },
    {
        "name": "Characters",
        "description": "Shows the characters and Actors.",
        # "externalDocs": {
        #     "description": "Items external docs",
        #     "url": "https://fastapi.tiangolo.com/",
        # },
    },
]

app = FastAPI(
    title="Breaking Bad API in german Language",
    description=description,
    openapi_tags=tags_metadata,
    version="0.0.1",
    contact={
        "name": "The Noconcept Dev",
        "url": "https://the.noconcept.dev",
        "email": "the@noconcept.dev",
    },
    license_info={
        "name": "Apache 2.0",
        "url": "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/seasons/", response_model=List[_schemas.Season], tags=["Seasons"])
def get_seasons(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    seasons = _crud.get_seasons(db, skip=skip, limit=limit)
    return seasons


@app.get("/seasons/{season_id}", response_model=_schemas.Season,tags=["Seasons"])
def get_season(season_id: int, db: Session = Depends(get_db)):
    db_season = _crud.get_season(db, season_id=season_id)
    if db_season is None:
        raise HTTPException(status_code=404, detail="Season not found")
    return db_season


@app.get("/episodes/", response_model=List[_schemas.Episode],tags=["Episodes"])
def get_episodes(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    episodes = _crud.get_episodes(db, skip=skip, limit=limit)
    return episodes

if __name__ == "__main__":
    uvicorn.run("main:app", host=os.environ.get("UV_HOST", "localhost"),  port=os.environ.get("UV_PORT", 8003),)