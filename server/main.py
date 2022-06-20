from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

TOKEN = "799945fb-0363-4ff4-8c67-86720f3325d3"

@app.route("/")
def index():
    return "Hello world!"

@app.route("/login", methods=['POST'])
def login():
    content = request.json
    
    if content["username"] == "pablito" and content["password"] == "pablito123":
        return jsonify({ 'success': True, 'token': TOKEN })

    return jsonify({ 'success': False })

@app.route("/content", methods=['POST'])
def content():
    content = request.json
    
    if content["token"] == TOKEN:
        return jsonify({ 'success': True, 'datos': [
            { 'prop': "pepito" },
            { 'prop': "juancito" },
            { 'prop': "pablito" }
        ] })
    
    return jsonify({ 'success': False })

app.run()