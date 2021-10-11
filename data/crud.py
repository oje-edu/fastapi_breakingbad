from sqlalchemy.orm import Session

from . import models, schemas


def get_season(db: Session, season_id: int):
    return db.query(models.Season).filter(models.Season.season_id == season_id).first()


# def get_user_by_email(db: Session, email: str):
#     return db.query(models.User).filter(models.User.email == email).first()


def get_seasons(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Season).offset(skip).limit(limit).all()


# def create_user(db: Session, user: schemas.UserCreate):
#     fake_hashed_password = user.password + "notreallyhashed"
#     db_user = models.User(email=user.email, hashed_password=fake_hashed_password)
#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return db_user


def get_episodes(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Episode).offset(skip).limit(limit).all()


# def create_user_item(db: Session, item: schemas.ItemCreate, user_id: int):
#     db_item = models.Item(**item.dict(), owner_id=user_id)
#     db.add(db_item)
#     db.commit()
#     db.refresh(db_item)
#     return db_item