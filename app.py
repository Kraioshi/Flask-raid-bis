from flask import Flask, render_template
from flask_bootstrap import Bootstrap5

app = Flask(__name__)
Bootstrap5(app)

links = {
    'drk-250': 'https://etro.gg/gearset/dcd2eb34-7c43-4840-a17b-2eb790f19cf4',
    'drk-245': 'https://etro.gg/gearset/7bf649c3-9cca-4c9d-8050-84ab406a9088',
    'gnb-250': 'https://etro.gg/gearset/1dee5389-9906-4690-88b7-55419a342932',
    'gnb-246': 'https://etro.gg/gearset/f5d14a05-593c-454d-8614-077974c0b98c',
    'gnb-245': 'https://cdn.discordapp.com/attachments/889729119867265095/1131371457335803995/image.png',
    'gnb-241': 'https://etro.gg/gearset/b0552aae-c8e8-4beb-bd42-f77637a4b254',
    'war-250': 'https://etro.gg/gearset/1103c082-1c80-4bf3-bb56-83734971d5ea',
    'war-245': 'https://etro.gg/gearset/ccabf244-3ea0-4a33-a817-da4cebe6efc6',
    'war-240': 'https://etro.gg/gearset/9343cf54-e21f-4343-ba9d-c4030eb25dd0',
    'pld-250': 'https://etro.gg/gearset/3a2d77ff-57e1-434d-b1da-72a7d4f44944',

    "blm-2521": 'https://etro.gg/gearset/1d113f03-16e3-4a47-83a9-c3366a0fff84',
    "blm-1292": 'https://etro.gg/gearset/29cc921f-570a-4069-926f-427fc95b3acb',
    "blm-824": 'https://etro.gg/gearset/46e5dde8-3d11-418f-948b-f6452fb0c7e3',

    'rdm-248': 'https://etro.gg/gearset/6d7a091d-52f5-49ec-9b2e-d7b1d4c45733',
    'smn-248': 'https://etro.gg/gearset/66f5ec54-c062-467f-811f-5e77a90c7aba',
    'smn-247': 'https://etro.gg/gearset/53a01c1e-a167-481b-bcfd-1428815d4b55',
    'smn-246': 'https://etro.gg/gearset/b42339b3-8fca-4a4f-ad67-85343e84a4f3',

    'dnc-249': 'https://etro.gg/gearset/50746158-5be1-4972-82f4-84a577f4bcce',
    'brd-248': 'https://etro.gg/gearset/f2426d1e-2da8-4151-bf52-74ca67b5f4a2',
    'mch-250': 'https://etro.gg/gearset/0001cd0d-ee54-4b85-8bb6-8ed79e9e7745'

}


@app.route("/")
def index():
    return render_template('index.html', links=links)


if __name__ == '__main__':
    app.run(debug=True)