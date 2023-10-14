from flask import Flask, render_template
from flask_bootstrap import Bootstrap5

app = Flask(__name__)
Bootstrap5(app)

links = [
    {
        "name": "blm-2521", "url": 'https://etro.gg/gearset/1d113f03-16e3-4a47-83a9-c3366a0fff84'
    }
]


@app.route("/")
def index():
    return render_template('index.html', links=links)


if __name__ == '__main__':
    app.run(debug=True)