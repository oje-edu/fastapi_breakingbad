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