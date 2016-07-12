from flask import Flask, send_file, request
from requests import get

app = Flask(__name__)

# base route for index file
@app.route("/")
def index():
    return send_file("index.html")

# route to get flickr data
@app.route("/flickr")
def getFlickr():
    # need to replace function call with what angular gives us
    # the function name flickr returns
    replace  = 'jsonFlickrFeed'
    # the function name angular wants
    callback = request.args.get('callback')
    flickr   = get('https://api.flickr.com/services/feeds/photos_public.gne?format=json').content
    # decode is necessary for prevent exceptions
    flickr   = flickr.decode('utf8')
    # remove flickrs function
    flickr   = flickr[len(replace):]
    return callback + flickr


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8001, debug=True)
