class ListaView {
  constructor(lista) {
    this._lista = lista;
  }

  _template(frase, id) {
    return `
      <li class="frase" id="${id}">${frase} 
        <div class="acoes">
          <button class="apagar" id="${id}">Apagar</button>
          <button class="visualizar" id="${id}">Visualizar</button>
        </div>
      </li>`;
  }

  update(frase, id) {
    this._lista.innerHTML += this._template(frase, id);
  }
}
