FROM python:3.8

# Copy folder app
COPY . /app

RUN pip install structlog

COPY ./start.sh /start.sh
RUN chmod +x /start.sh

COPY ./start-reload.sh /start-reload.sh
RUN chmod +x /start-reload.sh

COPY ./prestart.sh /prestart.sh
RUN chmod +x /prestart.sh

EXPOSE 80

CMD ["/start.sh"]
