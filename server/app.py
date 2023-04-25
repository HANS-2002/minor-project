from transformers import pipeline
from flask_cors import CORS
from flask import Flask, request, jsonify
import tensorflow as tf
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

SentimentClassifier = pipeline('sentiment-analysis', model="finiteautomata/bertweet-base-sentiment-analysis")

app = Flask(__name__)
CORS(app)


def getPrediction(inpText):
    return (SentimentClassifier(inpText)[0]['label'])


@app.route('/', methods=['GET'])
def index():
    response = jsonify({"App Status": "All fine here, checkout POST"})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/', methods=['POST'])
def predict():
    print('request received')
    data = request.get_json()
    response = jsonify({'prediction': f"{getPrediction(data['text'])}"})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == '__main__':
    app.run(debug=True, port=os.getenv("PORT", default=5000))
