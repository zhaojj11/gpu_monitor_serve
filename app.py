from flask import Flask, render_template, url_for
import socketio
from eventlet import wsgi
import eventlet
from flask import request
from core import Container, GPU

flask_app = Flask(__name__)
sio = socketio.Server(cors_allowed_origins='*')
container = Container()


@flask_app.route('/')
def index():
    return render_template('index.html')


@flask_app.route('/gpu_state/init', methods=['POST'])
def gpu_state_init():
    gpu_info = request.json
    host_id = container.add(gpu_info)
    return {'message': 'ok', 'id': host_id}


@flask_app.route('/gpu_state/update', methods=['POST'])
def gpu_state_update():
    states = request.json
    container.update(states)
    sio.emit('gpu_state_update', states)
    return {'message': 'ok'}


@sio.event
def connect(sid, env):
    # sio.enter_room(sid, 'gpu_update')
    sio.emit('gpu_state_initialize', container.__json__())


if __name__ == '__main__':
    app = socketio.WSGIApp(sio, flask_app)
    wsgi.server(eventlet.listen(('', 5000)), app)

# sio = socketio.Server()
# app = socketio.WSGIApp(sio,app)
