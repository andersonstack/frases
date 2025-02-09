class ListaView {
  constructor(lista, frase, id) {
    this._lista = lista;
    this._frase = frase;
    this._id = id;
  }

  _template() {
    return `<li class="frase" id="${this._id}">${this._frase}</li>`;
  }

  update(model) {
    this._lista.innerHTML += this._template();
  }
}
