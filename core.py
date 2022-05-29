import uuid


class GPU:
    def __init__(self, id, power, memory):
        self.id = id
        self.power = power
        self.memory = memory
        self.temperature = 0.0
        self.utilization = 0

    def update(self, gpu_state):
        self.__dict__.update(gpu_state)

    def __json__(self):
        return self.__dict__.copy()


class Host:
    def __init__(self, host_id):
        self.id = host_id
        self.gpus = {}

    def add(self, gpu):
        self.gpus[gpu.id] = gpu

    def update(self, new_gpus):
        for gpu in new_gpus:
            self.gpus[gpu['id']].update(gpu)

    # def scan(self):
    # self.add(GPU(id='12451414', power=250.0, memory=11264))

    def __json__(self):
        _gpus = {}
        for k, v in self.gpus.items():
            _gpus[k] = v.__json__()
        return {'id': self.id, 'gpus': _gpus}


class Container:
    def __init__(self):
        self.hosts = {}

    def generate(self, ip):
        return uuid.uuid5(uuid.NAMESPACE_URL, ip).hex

    def add(self, host):
        host_ip = host['ip']
        host_id = self.generate(host_ip)
        gpu_infos = host['gpu_states']
        host = Host(host_id)

        for info in gpu_infos:
            host.add(gpu=GPU(info['id'], power=info['power'], memory=info['memory']))
        self.hosts[host_id] = host
        return host_id

    def update(self, host_):
        host_id = host_['id']
        gpu_states = host_['gpu_states']
        host = self.hosts[host_id]
        host.update(gpu_states)

    def __json__(self):
        _hosts = []
        for k, v in self.hosts.items():
            _hosts.append(v.__json__())
        return _hosts
