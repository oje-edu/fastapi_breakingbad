import uvicorn
import os
from typing import List

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/seasons/", response_model=List[schemas.Season])
def get_seasons(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    seasons = crud.get_seasons(db, skip=skip, limit=limit)
    return seasons


@app.get("/seasons/{season_id}", response_model=schemas.Season)
def get_season(season_id: int, db: Session = Depends(get_db)):
    db_season = crud.get_season(db, season_id=season_id)
    if db_season is None:
        raise HTTPException(status_code=404, detail="Season not found")
    return db_season


@app.get("/episodes/", response_model=List[schemas.Episode])
def get_episodes(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    episodes = crud.get_episodes(db, skip=skip, limit=limit)
    return episodes

if __name__ == "__main__":
    uvicorn.run("main:app",
                host=os.environ.get("UV_HOST", "localhost"),
                port=os.environ.get("UV_PORT", 8003),
                )
