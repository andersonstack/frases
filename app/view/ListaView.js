class ListaView {
  constructor(lista) {
    this._lista = lista;

    // Delegação de evento para capturar cliques no botão apagar
    this._lista.addEventListener("click", (event) => {
      const botao = event.target.closest(".apagar"); // Verifica se o clique foi no botão apagar
      if (botao) {
        const li = botao.closest("li"); // Garante que estamos pegando um <li>
        if (li && this._lista.contains(li)) {
          // Certifica-se de que está dentro da UL correta
          li.remove(); // Remove apenas o <li>, sem afetar outras divs
        }
      }
    });
  }

  _template(frase, id) {
    const li = document.createElement("li");
    li.classList.add("frase-lista");
    li.id = `item-${id}`; // Garante um ID único que não conflita com outros elementos

    li.innerHTML = `
      <h2 class="frase-principal">${frase}</h2> 
      <div class="acoes">
        <button class="apagar">
          <img src="../../assets/delete.svg" />
          <p>Apagar</p>
        </button>
      </div>
    `;

    return li;
  }

  update(frase, id) {
    const novoItem = this._template(frase, id);
    this._lista.appendChild(novoItem); // Adiciona a nova frase na lista
  }
}
