class FilaCircular:
    def __init__(self, tamanho):
        self.tamanho = tamanho
        self.lista = [None] * tamanho
        self.inicio = 0
        self.fim = tamanho

    def inserir(self, value):
        if self.inicio == self.fim and self.lista[self.inicio - 1] is not None:
            print("Fila cheia")
        else:
            self.lista[self.inicio] = value
            self.inicio += 1

    def retirar(self):
        if self.inicio == 0 and self.lista[self.inicio] is None:
            print("Fila vazia")
        else:
            self.lista[self.inicio - 1] = None
            self.inicio -= 1

    def limpar(self):
        del self

    def runOperation(self, operation, value):
        if operation == 1:
            self.inserir(value)
        elif operation == 2:
            self.retirar()
        elif operation == 3:
            print(self.lista)
        elif operation == 4:
            self.limpar()
        elif operation == 5:
            return