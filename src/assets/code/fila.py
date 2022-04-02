class Fila:
    def __init__(self):
        self.fila = []

    def push(self, valor):
        self.fila.append(valor)

    def pop(self):
        self.fila.pop(0)

    def show(self):
        print(self.fila)

    def clear(self):
        self.fila = []

    def runOperation(self, operation, value=None):
        match operation:
            case 1:
                self.push(value)
            case 2:
                self.pop()
            case 3:
                self.show()
            case 4:
                self.clear()
            case 5:
                return None