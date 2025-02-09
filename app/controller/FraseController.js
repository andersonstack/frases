const _dadosPrivados = new WeakMap();

class FraseController {
  constructor(frase, id) {
    _dadosPrivados.set(this, { frase, id });

    // Informações
    this._frase = frase;
    this._id = id;

    // Document
    let $ = document.querySelector.bind(document);

    // Elementos do DOM
    this._fraseHtml = $("#frase");
    this._fraseLista = $("#lista");
    this._btnSalvar = $("#salvar");

    // Instância da View - frase principal
    this._fraseView = new FraseView(this._fraseHtml, this._frase, this._id);
    this._fraseView.update(this._frase);

    // Instância da View - lista de frases
    this._listaView = new ListaView(this._fraseLista);

    // Garante que o botão está no DOM antes de adicionar o evento
    this._adicionarEvento();
  }

  _adicionarEvento() {
    if (this._btnSalvar) {
      document.querySelector("#frase").addEventListener("click", (event) => {
        if (event.target.id === "salvar") {
          this._salvar();
        }
      });
    } else {
      console.error("Botão 'Salvar' não encontrado no DOM!");
    }
  }

  _salvar() {
    this._listaView.update(this._frase, this._id);
  }
}
