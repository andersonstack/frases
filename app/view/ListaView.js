class ListaView {
  constructor(lista) {
    this._lista = lista;
  }

  _template(frase, id) {
    return `<li class="frase" id="${id}">${frase}</li>`;
  }

  update(frase, id) {
    this._lista.innerHTML += this._template(frase, id);
  }
}
