import socket
import datetime

h_name = socket.gethostname()
ip_address = socket.gethostbyname(h_name)
current_date = datetime.datetime.now()