from sqlalchemy import func
from sqlalchemy.orm import Session

import models as _models


def get_season(db: Session, season_id: int):
    return db.query(_models.Season).filter(_models.Season.season_id == season_id).first()

def get_episode(db: Session, episode_id: int):
    return db.query(_models.Episode).filter(_models.Episode.episode_id == episode_id).first()

def get_actor(db: Session, actor_id: int):
    return db.query(_models.Actor).filter(_models.Actor.actor_id == actor_id).first()

def get_character(db: Session, character_id: int):
    return db.query(_models.Character).filter(_models.Character.character_id == character_id).first()

def get_character_names(db: Session, firstname: str, lastname: str):
    query = db.query(_models.Character)
    if firstname:
        query = db.query(_models.Character).filter(_models.Character.firstname.contains(firstname))
    if lastname:
       query = db.query(_models.Character).filter(_models.Character.lastname.contains(lastname))
    return query.all()

def get_seasons(db: Session, skip: int = 0, limit: int = 100):
    return db.query(_models.Season).offset(skip).limit(limit).all()

def get_actors_chars(db: Session, skip: int = 0, limit: int = 100):
    return db.query(_models.Actor).offset(skip).limit(limit).all()

def get_actors(db: Session, skip: int = 0, limit: int = 100):
    return db.query(_models.Actor).offset(skip).limit(limit).all()

def get_characters(db: Session, skip: int = 0, limit: int = 100):
    return db.query(_models.Character).offset(skip).limit(limit).all()

def get_episodes(db: Session, skip: int = 0, limit: int = 100):
    return db.query(_models.Episode).offset(skip).limit(limit).all()

def get_families(db: Session, skip: int = 0, limit: int = 100):
    return db.query(_models.Family).offset(skip).limit(limit).all()
