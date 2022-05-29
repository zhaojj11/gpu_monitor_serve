import socketio

sio = socketio.Client()


@sio.event
def connect():
    print('connection established')


@sio.event
def gpu_state_update(data):
    print(data)


@sio.event
def gpu_state_initialize(data):
    print(data)


if __name__ == '__main__':
    sio.connect('http://localhost:5000')
    sio.emit('test', {'foo': 'bar'})
    sio.wait()
