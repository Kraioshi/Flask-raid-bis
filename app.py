from flask import Flask, render_template
from flask_bootstrap import Bootstrap5

app = Flask(__name__)
Bootstrap5(app)

links = {
    "blm-2521": 'https://etro.gg/gearset/1d113f03-16e3-4a47-83a9-c3366a0fff84',
    "blm-1292": 'https://etro.gg/gearset/29cc921f-570a-4069-926f-427fc95b3acb',
    "blm-824": 'https://etro.gg/gearset/46e5dde8-3d11-418f-948b-f6452fb0c7e3'
}


@app.route("/")
def index():
    return render_template('index.html', links=links)


if __name__ == '__main__':
    app.run(debug=True)