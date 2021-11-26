from flask import Flask
from flask_restful import  Api

from api.user.userapp import (
    Login as login
    )

app = Flask(__name__)
api = Api(app)

api.add_resource(login, '/login')


if __name__ == '__main__':
    app.run(debug=True, port=1234)