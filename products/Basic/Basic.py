from flask import Flask, jsonify, request
from flask_restful import Resource

class Basic(Resource):
    def get(self):
        return jsonify('Running the Products API')