from flask import Flask, jsonify, request
from flask_restful import Resource

# from flask_mysqldb import MySQL

class MySqlDB(Resource):
    dbName = ""

    def connect(self):
        pass
