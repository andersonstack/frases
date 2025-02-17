class ListaView {
  constructor(lista) {
    this._lista = lista;
  }

  _template(frase, id) {
    return `
      <li class="frase-lista" id="${id}">
        <h2 class="frase-principal">${frase}</h2> 
        <div class="acoes">
          <button class="apagar" id="${id}">
            <img src="../../assets/delete.svg" />
            <p>Apagar</p>
          </button>
          <button class="visualizar" id="${id}">
            <img src="../../assets/view.png" />
            <p>Visualizar</p>
          </button>
        </div>
      </li>`;
  }

  update(frase, id) {
    this._lista.innerHTML += this._template(frase, id);
  }
}
