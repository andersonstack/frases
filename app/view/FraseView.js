class FraseView {
  constructor(elemento, frase, id) {
    this._elemento = elemento;
    this._frase = frase;
    this._id = id;
  }

  _template() {
    return `<p class="frase" id="${this._id}">${this._frase}</p>`;
  }

  update(model) {
    this._elemento.innerHTML = this._template();
  }
}
