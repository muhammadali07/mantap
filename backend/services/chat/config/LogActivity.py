import logging
import logging.handlers
import os
import socket
import datetime

from loguru import logger

def logactivity():
    h_name = socket.gethostname()
    ip_address = socket.gethostbyname(h_name)
    current_date = datetime.datetime.now()

    
