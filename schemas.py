import datetime as _dt
from typing import List, Optional
from enum import auto
from fastapi_restful.enums import StrEnum
import pydantic as _pydantic

class CharacterStatus(StrEnum):
    lebend = auto()
    gestorben = auto()
    unbekannt = auto()

assert CharacterStatus.lebend.name == CharacterStatus.lebend.value == "lebend"
assert CharacterStatus.gestorben.name == CharacterStatus.gestorben.value == "gestorben"
assert CharacterStatus.unbekannt.name == CharacterStatus.unbekannt.value == "unbekannt"

class _EpisodeBase(_pydantic.BaseModel):
    episode_id: int

class EpisodeList(_EpisodeBase):
    episode_id: int
    title: str
    plot: Optional[str] = None
    image: Optional[str] = None
    seasonepisode: int

    class Config:
        orm_mode = True

class Episode(_EpisodeBase):
    episode_id: int
    season_id: int

    class Config:
        orm_mode = True

class _SeasonBase(_pydantic.BaseModel):
    season_id: int

class SeasonList(_SeasonBase):
    season_id: int
    title: str
    plot: str
    image: str
    year: str

    class Config:
        orm_mode = True
class Season(_SeasonBase):
    season_id: int
    title: str
    plot: str
    image: str
    year: str
    episodes: List[EpisodeList] = []

    class Config:
        orm_mode = True

class _StatusBase(_pydantic.BaseModel):
    status_id: int

class Status(_StatusBase):
    status_id: int
    status_name: str

    class Config:
        orm_mode = True

class _FamilyBase(_pydantic.BaseModel):
    family_id: int

class Family(_FamilyBase):
    family_name: Optional[str] = None

    class Config:
        orm_mode = True

class _JobBase(_pydantic.BaseModel):
    job_id: int

class Job(_JobBase):
    jobname: Optional[str] = None
    jobdesc: Optional[str] = None

    class Config:
        orm_mode = True

class _CharacterBase(_pydantic.BaseModel):
    character_id: int

class Character(_CharacterBase):
    character_id: int
    firstname: str
    lastname: str
    aliasname: str
    info: Optional[str] = None
    image: Optional[str] = None
    status: Optional[Status] = None
    families: List[Family] = []
    jobs: List[Job] = []

    class Config:
        orm_mode = True

class CharacterName(_CharacterBase):
    character_id: int
    firstname: Optional[str] = None
    lastname: Optional[str] = None
    aliasname: Optional[str] = None
    image: Optional[str] = None
    info: Optional[str] = None
    status: Optional[Status] = None
    families: List[Family] = []
    jobs: List[Job] = []

    class Config:
        orm_mode = True

class CharacterStatus(_CharacterBase):
    character_id: int
    firstname: str
    lastname: str
    # actor_id: int
    # status_id: int
    # job_id: int
    # families: List[Family] = []
    # jobs: List[Job] = []
    status: Optional[Status] = None

    class Config:
        orm_mode = True

class _ActorBase(_pydantic.BaseModel):
    actor_id: int

class Actor(_ActorBase):
    actor_id: int
    firstname: str
    lastname: str
    birthday: _dt.date
    image: str
    url: str
    class Config:
        orm_mode = True

class ActorChar(_ActorBase):
    actor_id: int
    firstname: str
    lastname: str
    birthday: _dt.date
    image: str
    url: str

    characters: List[Character] = []

    class Config:
        orm_mode = True

class ActorSingle(_ActorBase):
    actor_id: int
    firstname: str
    lastname: str
    birthday: _dt.date
    image: str
    url: str
    class Config:
        orm_mode = True
