from flask import Flask
from flask_restful import Resource, Api
from flask import jsonify

from Basic.Basic import Basic

app = Flask(__name__)
api = Api(app)

api.add_resource(Basic, '/')

if __name__== "__main__":
    app.run(debug=True, host="0.0.0.0", port=8080)
