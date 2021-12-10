from mantap.api.crud import BusApi, BusesApi

def initiliazed_routes(api):
    api.add_resource(BusesApi, '/api/buses')
    api.add_resource(BusApi, '/api/buses/<id>')