from sqlalchemy.orm import Session

import models as _models
import schemas as _schemas


def get_season(db: Session, season_id: int):
    return db.query(_models.Season).filter(_models.Season.season_id == season_id).first()

def get_episode(db: Session, episode_id: int):
    return db.query(_models.Episode).filter(_models.Episode.episode_id == episode_id).first()

def get_actor(db: Session, actor_id: int):
    return db.query(_models.Actor).filter(_models.Actor.actor_id == actor_id).first()


# def get_user_by_email(db: Session, email: str):
#     return db.query(models.User).filter(models.User.email == email).first()


def get_seasons(db: Session, skip: int = 0, limit: int = 100):
    return db.query(_models.Season).offset(skip).limit(limit).all()

def get_actors(db: Session, skip: int = 0, limit: int = 100):
    return db.query(_models.Actor).offset(skip).limit(limit).all()


# def create_user(db: Session, user: schemas.UserCreate):
#     fake_hashed_password = user.password + "notreallyhashed"
#     db_user = models.User(email=user.email, hashed_password=fake_hashed_password)
#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return db_user


def get_episodes(db: Session, skip: int = 0, limit: int = 100):
    return db.query(_models.Episode).offset(skip).limit(limit).all()


# def create_user_item(db: Session, item: schemas.ItemCreate, user_id: int):
#     db_item = models.Item(**item.dict(), owner_id=user_id)
#     db.add(db_item)
#     db.commit()
#     db.refresh(db_item)
#     return db_item