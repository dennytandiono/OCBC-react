from flask import Flask
from flask_cors import CORS
from flask import jsonify
import time

app = Flask(__name__)
CORS(app)

@app.route('/hello')
def hello_python():
    return{'message': 'Hello From Python'}

@app.route('/time')
def get_curr_time():
    return jsonify({'time': time.time()})

if __name__ == '__main__':
    app.run(debug=True)