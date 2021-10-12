from datetime import date
from typing import List, Optional

from pydantic import BaseModel


class EpisodeBase(BaseModel):
    episode_id: int
    title: str
    plot: Optional[str] = None
    image: Optional[str] = None

class Episode(EpisodeBase):
    episode_id: int
    season_id: int

    class Config:
        orm_mode = True

class SeasonBase(BaseModel):
    season_id: int

class SeasonList(SeasonBase):
    season_id: int
    title: str
    plot: str
    image: str
    year: str

    class Config:
        orm_mode = True
class Season(SeasonBase):
    season_id: int
    title: str
    plot: str
    image: str
    year: str
    episodes: List[Episode] = []

    class Config:
        orm_mode = True

class StatusBase(BaseModel):
    status_id: int

class Status(StatusBase):
    status_id: int
    status_name: str

    class Config:
        orm_mode = True

class JobBase(BaseModel):
    job_id: int

class Job(JobBase):
    jobname: Optional[str] = None
    jobdesc: Optional[str] = None

    class Config:
        orm_mode = True

class CharacterBase(BaseModel):
    character_id: int
    firstname: str
    lastname: str
    aliasname: str
    image: Optional[str] = None
    status: Optional[Status] = None

class Character(CharacterBase):
    character_id: int
    # actor_id: int
    # status_id: int
    # job_id: int
    jobs: List[Job] = []

    class Config:
        orm_mode = True

class ActorBase(BaseModel):
    actor_id: int

class Actor(ActorBase):
    actor_id: int
    firstname: str
    lastname: str
    # birthday: date
    image: str
    url: str
    class Config:
        orm_mode = True

class ActorChar(ActorBase):
    actor_id: int
    firstname: str
    lastname: str
    image: str
    url: str
    characters: List[Character] = []

    class Config:
        orm_mode = True

class ActorSingle(ActorBase):
    actor_id: int
    firstname: str
    lastname: str
    image: str
    url: str
    class Config:
        orm_mode = True
