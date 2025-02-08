class FraseApi {
  constructor() {
    this._frase = null;
    this._id = 0;
  }

  async obterFrase() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();

      this._id = data.slip.id;
      this._frase = await TradutorFrase.obterTraducao(data.slip.advice);

      return this.informacoes;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  get informacoes() {
    return {
      frase: this._frase,
      id: this._id,
    };
  }
}
