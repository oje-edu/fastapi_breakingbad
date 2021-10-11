from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship

import database  as _database


class Season(_database.Base):
    __tablename__ = "seasons"

    season_id = Column(Integer, primary_key=True)
    title = Column(String)
    plot = Column(String)
    image = Column(String)
    year = Column(String)

    episodes = relationship("Episode", back_populates="season")


class Episode(_database.Base):
    __tablename__ = "episodes"

    episode_id = Column(Integer, primary_key=True)
    title = Column(String)
    plot = Column(Text)
    image = Column(String)

    season_id = Column(Integer, ForeignKey("seasons.season_id"))

    season = relationship("Season", back_populates="episodes")