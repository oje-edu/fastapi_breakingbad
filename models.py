from sqlalchemy import Column, ForeignKey, Integer, String, Text
from sqlalchemy.types import Date
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

class Actor(_database.Base):
    __tablename__ = "actors"

    actor_id = Column(Integer, primary_key=True)
    firstname = Column(String)
    lastname = Column(String)
    birthday = Column(Date)
    image = Column(String)
    url = Column(String)

    characters = relationship("Character", back_populates="actor")

class Status(_database.Base):
    __tablename__ = "statuses"

    status_id = Column(Integer, primary_key=True)
    status_name = Column(String)

    characters = relationship("Character", back_populates="status")

class Family(_database.Base):
    __tablename__ = "families"

    family_id = Column(Integer, primary_key=True)
    family_name = Column(String)

    characters = relationship("Character", secondary="characters_families", back_populates="families")

class Job(_database.Base):
    __tablename__ = "jobs"

    job_id = Column(Integer, primary_key=True)
    jobname = Column(String)
    jobdesc = Column(Text)

    characters = relationship("Character", secondary="characters_jobs", back_populates="jobs")

class Character(_database.Base):
    __tablename__ = "characters"

    character_id = Column(Integer, primary_key=True)
    firstname = Column(String)
    lastname = Column(String)
    aliasname = Column(String)
    image = Column(String)

    status_id=Column(Integer,ForeignKey("statuses.status_id"))
    status = relationship("Status", back_populates="characters")

    actor_id = Column(Integer, ForeignKey("actors.actor_id"))
    actor = relationship("Actor", back_populates="characters")

    families = relationship('Family', secondary="characters_families", back_populates="characters")
    jobs = relationship('Job', secondary="characters_jobs", back_populates="characters")

class CharFamily(_database.Base):
    __tablename__ = "characters_families"

    cf_id = Column(Integer, primary_key=True, index=True)
    cf_character = Column(Integer, ForeignKey('characters.character_id'), primary_key=True)
    cf_family = Column(Integer, ForeignKey('families.family_id'), primary_key=True)
class CharJob(_database.Base):
    __tablename__ = "characters_jobs"

    cj_id = Column(Integer, primary_key=True, index=True)
    cj_character = Column(Integer, ForeignKey('characters.character_id'), primary_key=True)
    cj_job = Column(Integer, ForeignKey('jobs.job_id'), primary_key=True)
