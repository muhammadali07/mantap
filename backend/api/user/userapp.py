from config import LogActivity
from flask_restful import Resource

class Login(Resource):
    def get(self):
        LogActivity.logactivity()
        return {'login' : 'page'}