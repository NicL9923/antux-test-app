from flask import Flask
from markupsafe import escape

@app.route('/')
def index():
    return 'Index Page'

@app.route('/hello')
def hello():
    return 'Hello, World'

@app.route("/<name>")
def hello(name):
    return f"Hello, {escape(name)}!"