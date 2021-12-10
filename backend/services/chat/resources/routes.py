from services.chat.api.crud import (
    BusesApi,
    BusApi,
    User
)

def initiliazed_routes(api):
    api.add_resource(BusesApi, '/api/buses')
    api.add_resource(BusApi, '/api/buses/<id>')
    api.add_resource(User, '/api/registeruser')
    api.add_resource(User, '/api/get_data_user')