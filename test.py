from core import Container

if __name__ == '__main__':
    container = Container()
    host = {"ip": "192.168.0.201", "gpu_states": [{
        "id": "11111111",
        "power": 115.3,
        "temperature": 70,
        "ultilization": 55,
        "memory": 7555
    }]}
    container.add(host)
    print(container.__json__())
