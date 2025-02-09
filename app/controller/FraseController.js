class FraseController {
  constructor(frase, id) {
    // document
    let $ = document.querySelector.bind(document);

    this._frase = frase;
    this._id = id;

    this._fraseHtml = $("#frase");
    this._fraseView = new FraseView(this._fraseHtml, this._frase, this._id);
    this._fraseView.update(this._frase);
  }
}
