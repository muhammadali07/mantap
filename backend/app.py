from logging import debug
from flask import Flask

from config import LogActivity

app = Flask(__name__)

@app.route('/')
def index():
    LogActivity.logactivity()
    return 'Hello World'


if __name__ == '__main__':
    app.run(debug=True)