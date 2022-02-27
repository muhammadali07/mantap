FROM python:3.8

# Copy folder app
COPY . /app

# COPY ./requirements.txt /app/requirements.txt


RUN pip install structlog
RUN pip freeze > /app/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

COPY ./start.sh /start.sh
RUN chmod +x /start.sh

COPY ./start-reload.sh /start-reload.sh
RUN chmod +x /start-reload.sh

COPY ./prestart.sh /prestart.sh
RUN chmod +x /prestart.sh

EXPOSE 80

CMD ["/start.sh"]
