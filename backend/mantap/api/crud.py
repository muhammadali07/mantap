from flask import Response, request
from flask_restful import Resource
from database.model.model import Bus

class Login(Resource):
    def get(self):
        # savedlog()
        return {
            'status' : 'saved login user success'
        }

    def post(self):
        return{'This api for register user'}

class BusesApi(Resource):
    def get(self):
        buses = Bus.objects().to_json()
        return Response(buses, mimetype="application/json", status=200)

    def post(self):
        body = request.get_json()
        bus = Bus(**body).save()
        id = bus.id
        return {'id': str(id)}, 200


class BusApi(Resource):
    def get(self, id):
        bus = Bus.objects.get(id=id).to_json()
        return Response(bus, mimetype="application/json", status=200)

    def put(self, id):
        body = request.get_json()
        Bus.objects.get(id=id).update(**body)
        return '', 200

    def delete(self, id):
        Bus.objects.get(id=id).delete()
        return '', 200