class Pilha:
    def __init__(self):
        self.pilha = []

    def push(self, valor):
        self.pilha.append(valor)

    def pop(self):
        if len(self.pilha) > 0:
            return self.pilha.pop()
        else:
            return None

    def clear(self):
        self.pilha = []

    def __str__(self):
        return str(self.pilha)

    def runOperation(self, operation, value=None):
        match operation:
            case 1:
                self.push(value)
            case 2:
                self.pop()
            case 3:
                print(self.__str__())
            case 4:
                self.clear()
            case 5:
                return None