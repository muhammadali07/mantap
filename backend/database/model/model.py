from enum import unique
from database.db_mongo import db

class Bus(db.Document):
    number_plate = db.StringField(required=True, unique=True)
    manufacturer = db.StringField(required=True)


class UserApp(db.Document):
    username = db.StringField(required=True, unique=True)
    password = db.StringField(required=True)
    email = db.StringField(requied=True)