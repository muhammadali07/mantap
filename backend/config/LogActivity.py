from loguru import logger


from .ProfileUser import h_name, ip_address, current_date

def logactivity():
    host_name = h_name
    ip = ip_address
    # date = ProfileUser.current_date
    logger.add("../log/log_data.log", format="{extra[ip]} {extra[user]} {message}")
    context_logger = logger.bind(ip=f"{ip}", user=f"{host_name}")
    context_logger.info("Contextualize your logger easily")
    context_logger.bind(user=f"{host_name}").info("Inline binding of extra attribute")
    context_logger.info("Use kwargs to add context during formatting: {user}", user="anybody")
    

logactivity()
