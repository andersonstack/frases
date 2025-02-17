class ListaView {
  constructor(lista) {
    this._lista = lista;
  }

  _template(frase, id) {
    const li = document.createElement("li");
    li.classList.add("frase-lista");
    li.id = id;

    li.innerHTML = `
      <h2 class="frase-principal">${frase}</h2> 
      <div class="acoes">
        <button class="apagar" id="${id}">
          <img src="../../assets/delete.svg" />
          <p>Apagar</p>
        </button>
      </div>
    `;

    return li;
  }

  update(frase, id) {
    const novoItem = this._template(frase, id);
    this._lista.appendChild(novoItem); // Adiciona o novo item como filho da lista
  }
}
