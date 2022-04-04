export class FilaCircularGameModel {
  filaCircular: Array<string | number> = [];
  inicio: number;
  fim: number;
  tamanho: number;

  constructor(tamanho: number) {
    for (let i = 0; i < tamanho; i++) {
      this.filaCircular.push('');
    }
    this.inicio = 0;
    this.fim = tamanho;
    this.tamanho = tamanho;
  }

  push = (item: string | number) => {
    if (this.inicio == this.fim && this.filaCircular[this.inicio - 1] != '') {
      return 'Fila cheia';
    } else {
      this.filaCircular[this.inicio] = item;
      this.inicio += 1;
      return true;
    }
  };

  pop = () => {
    if (this.inicio == 0 && this.filaCircular[this.inicio] != '') {
      return 'Fila vazia';
    } else {
      this.filaCircular[this.inicio - 1] = '';
      this.inicio -= 1;
      return true;
    }
  };

  clear = () => {
    this.filaCircular = [];
    for (let i = 0; i < this.tamanho; i++) {
      this.filaCircular.push('');
    }
  };
}
