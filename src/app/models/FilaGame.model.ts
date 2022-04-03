export class FilaGameModel {
  fila: Array<string | number> = [];

  constructor() {
    this.fila = [];
  }

  push = (item: string | number) => {
    this.fila.push(item);
  };

  pop = () => {
    return this.fila.splice(this.fila.length - 1, this.fila.length);
  };

  clear = () => {
    this.fila = [];
  };
}
