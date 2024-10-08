from typing import Union

from pydantic import BaseModel


class ExternalLink(BaseModel):
    url: str
    img_url: str


class GameStats(BaseModel):
    ratings: list[int]
    likes: int


class GameCommonMeta(BaseModel):
    genres: str
    platforms: str
    releaseYear: str
    developer: str
    publisher: str


class GameModel(BaseModel):
    id: str
    title: str
    image: str
    description: str
    externalLinks: list[ExternalLink]
    stats: GameStats
    meta: Union[GameCommonMeta, dict]


class UserModel(BaseModel):
    username: str
    profile_pic: str
    games_liked: list[str]
    games_rated: dict[str, int]
    games_played: list[str]
