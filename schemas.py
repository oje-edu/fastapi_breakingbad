from datetime import date
from typing import List, Optional

from pydantic import BaseModel


class EpisodeBase(BaseModel):
    episode_id: int
    title: str
    plot: Optional[str] = None
    image: Optional[str] = None


class EpisodeCreate(EpisodeBase):
    pass


class Episode(EpisodeBase):
    episode_id: int
    season_id: int

    class Config:
        orm_mode = True


class SeasonBase(BaseModel):
    season_id: int


class SeasonCreate(SeasonBase):
    pass


class Season(SeasonBase):
    season_id: int
    title: str
    plot: str
    image: str
    year: str
    episodes: List[Episode] = []

    class Config:
        orm_mode = True

# class StatusBase(BaseModel):
#     status_id: int
#     status_name: str


# class Status(StatusBase):
#     status_id: int

#     class Config:
#         orm_mode = True

class CharacterBase(BaseModel):
    character_id: int
    firstname: str
    lastname: str
    aliasname: str
    image: Optional[str] = None

class Character(CharacterBase):
    character_id: int
    actor_id: int

    class Config:
        orm_mode = True

class ActorBase(BaseModel):
    actor_id: int

class Actor(ActorBase):
    actor_id: int
    firstname: str
    lastname: str
    birthday: date
    image: str
    url: str
    characters: List[Character] = []
class Actor_Wob(ActorBase):
    actor_id: int
    firstname: str
    lastname: str
    image: str
    url: str
    characters: List[Character] = []

    class Config:
        orm_mode = True