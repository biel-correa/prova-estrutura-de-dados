export class PilhaGameModel {
  pilha: Array<string | number> = [];

  constructor() {
    this.pilha = [];
  }

  push = (item: string | number) => {
    this.pilha.push(item);
  };

  pop = () => {
    return this.pilha.pop();
  };

  clear = () => {
    this.pilha = [];
  };
}
