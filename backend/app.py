from flask import Flask
from flask_restful import  Api
from database.db_mongo import initialize_db
from mantap.resources.routes import initiliazed_routes

app = Flask(__name__)
api = Api(app)
app.config['MONGODB_SETTING']={
    'host' :'mongodb://localhost/mantap'
}

initialize_db(app)
initiliazed_routes(api)
    


if __name__ == '__main__':
    app.run(debug=True, port=1234)
