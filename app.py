from flask import Flask, send_file
from requests import get

app = Flask(__name__)

# base route for index file
@app.route("/")
def index():
    return send_file("index.html")

# route to get flickr data
@app.route("/flickr")
def getFlickr():
    # get the data from flickr and send back to the client
    return get('https://api.flickr.com/services/feeds/photos_public.gne?format=json').content


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8001, debug=True)
