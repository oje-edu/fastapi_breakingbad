import sqlalchemy as _sql
import sqlalchemy.orm as _orm

import database  as _database


class Season(_database.Base):
    __tablename__ = "seasons"

    season_id = _sql.Column(_sql.Integer, primary_key=True)
    title = _sql.Column(_sql.String)
    plot = _sql.Column(_sql.String)
    image = _sql.Column(_sql.String)
    year = _sql.Column(_sql.String)

    episodes = _orm.relationship("Episode", back_populates="season")

class Episode(_database.Base):
    __tablename__ = "episodes"

    episode_id = _sql.Column(_sql.Integer, primary_key=True)
    title = _sql.Column(_sql.String)
    plot = _sql.Column(_sql.Text)
    image = _sql.Column(_sql.String)

    season_id = _sql.Column(_sql.Integer, _sql.ForeignKey("seasons.season_id"))

    season = _orm.relationship("Season", back_populates="episodes")

class Actor(_database.Base):
    __tablename__ = "actors"

    actor_id = _sql.Column(_sql.Integer, primary_key=True)
    firstname = _sql.Column(_sql.String)
    lastname = _sql.Column(_sql.String)
    birthday = _sql.Column(_sql.Date, default=1000-00-00)
    image = _sql.Column(_sql.String)
    url = _sql.Column(_sql.String)

    characters = _orm.relationship("Character", back_populates="actor")

class Status(_database.Base):
    __tablename__ = "statuses"

    status_id = _sql.Column(_sql.Integer, primary_key=True)
    status_name = _sql.Column(_sql.String)

    characters = _orm.relationship("Character", back_populates="status")

class Family(_database.Base):
    __tablename__ = "families"

    family_id = _sql.Column(_sql.Integer, primary_key=True)
    family_name = _sql.Column(_sql.String)

    characters = _orm.relationship("Character", secondary="characters_families", back_populates="families")

class Job(_database.Base):
    __tablename__ = "jobs"

    job_id = _sql.Column(_sql.Integer, primary_key=True)
    jobname = _sql.Column(_sql.String)
    jobdesc = _sql.Column(_sql.Text)

    characters = _orm.relationship("Character", secondary="characters_jobs", back_populates="jobs")

class Character(_database.Base):
    __tablename__ = "characters"

    character_id = _sql.Column(_sql.Integer, primary_key=True)
    firstname = _sql.Column(_sql.String)
    lastname = _sql.Column(_sql.String)
    aliasname = _sql.Column(_sql.String)
    image = _sql.Column(_sql.String)

    status_id=_sql.Column(_sql.Integer,_sql.ForeignKey("statuses.status_id"))
    status = _orm.relationship("Status", back_populates="characters")

    actor_id = _sql.Column(_sql.Integer, _sql.ForeignKey("actors.actor_id"))
    actor = _orm.relationship("Actor", back_populates="characters")

    families = _orm.relationship('Family', secondary="characters_families", back_populates="characters")
    jobs = _orm.relationship('Job', secondary="characters_jobs", back_populates="characters")

class CharFamily(_database.Base):
    __tablename__ = "characters_families"

    cf_id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    cf_character = _sql.Column(_sql.Integer, _sql.ForeignKey('characters.character_id'), primary_key=True)
    cf_family = _sql.Column(_sql.Integer, _sql.ForeignKey('families.family_id'), primary_key=True)
class CharJob(_database.Base):
    __tablename__ = "characters_jobs"

    cj_id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    cj_character = _sql.Column(_sql.Integer, _sql.ForeignKey('characters.character_id'), primary_key=True)
    cj_job = _sql.Column(_sql.Integer, _sql.ForeignKey('jobs.job_id'), primary_key=True)
