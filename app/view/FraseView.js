class FraseView {
  constructor(elemento, frase, id) {
    this._elemento = elemento;
    this._frase = frase;
    this._id = id;
  }

  _template() {
    let texto = "";

    let fraseElemento = `<p class="frase" id=${this._id}></p>`;

    this._elemento.innterHTML += fraseElemento;

    this._frase.split("").forEach((l, i) =>
      setTimeout(() => {
        texto += l;
        document.getElementById(this._id).textContent = texto;
      }, i * 50)
    );

    return fraseElemento;
  }

  update() {
    this._elemento.innerHTML += this._template();
  }
}
