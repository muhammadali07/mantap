from logging import debug
from flask import Flask
from loguru import logger
# from db import db_mongo
app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello World'
    logger.debug("That's it, beautiful and simple logging!")
    logger.add("log/log_data.log", enqueue=True)



if __name__ == '__main__':
    app.run(debug=True)