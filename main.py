from flask import Flask, render_template
from flask_bootstrap import Bootstrap5
from dotenv import load_dotenv
import os

app = Flask(__name__)
Bootstrap5(app)

load_dotenv()

app.config["SECRET_KEY"] = os.getenv('SECRET_KEY')

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
    'mch-250': 'https://etro.gg/gearset/0001cd0d-ee54-4b85-8bb6-8ed79e9e7745',

    'ast-234': 'https://etro.gg/gearset/83845599-bb32-4539-b829-971501856d7e',
    'ast-233': 'https://etro.gg/gearset/4da0c670-21b4-4f5e-8594-bb9cc311074e',
    'ast-243': 'https://etro.gg/gearset/60d1fcc9-8a2e-4e68-8205-f8b25a9de39a',

    'sch-240': 'https://etro.gg/gearset/d7b63d98-5c7f-4b3a-bc0c-f99eb049a8d4',
    'sch-231': 'https://etro.gg/gearset/4c241674-2c6e-42aa-a390-5e5ac29b9ab5',

    'sge-245': 'https://etro.gg/gearset/efc239cb-6371-4d1e-b645-8dd7600575b5',

    'whm-245': 'https://etro.gg/gearset/a581634a-6def-4150-903f-2d91026471b6',
    'whm-238': 'https://etro.gg/gearset/aee5c1f4-5e59-47fb-88ff-3eeffbef6231',
    'whm-234': 'https://etro.gg/gearset/020093de-e69a-458f-8278-c3406eaa8eb7',

    'drg-250': 'https://etro.gg/gearset/8a907f52-75a4-4085-9deb-6a63ffa2abd8',
    'drg-246': 'https://etro.gg/gearset/ba65b9ee-ec73-4b80-86c1-66a71849a5c8',

    'mnk-194': 'https://etro.gg/gearset/cc22e1aa-6d78-4ffe-bc53-e8466373b6bc',
    'mnk-193': 'https://etro.gg/gearset/aacac26e-56b3-4341-95ff-2ae0cc97e233',

    'nin-212': 'https://etro.gg/gearset/6556da3a-4514-439e-b4f4-07e0ccc85e93',

    'rpr-249': 'https://etro.gg/gearset/3c8ec7ad-ccfc-42ce-a129-13bd032e2220',
    'rpr-250': 'https://etro.gg/gearset/dbedcbfc-21d0-420c-9c91-ed2e946adbe4',

    'sam-215': 'https://etro.gg/gearset/d4b6bfc6-a82f-4732-8e55-7c13e094fc1d',
    'sam-208': 'https://etro.gg/gearset/b25e8d82-3dcc-4656-aa62-07dce32f2976',
    'sam-200': 'https://etro.gg/gearset/b0db96d2-564d-4850-971e-54a4436d63bd'
}


@app.route("/")
def index():
    return render_template('index.html', links=links)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
