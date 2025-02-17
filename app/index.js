(async () => {
  // Services
  const fraseApi = new FraseApi();
  const resultado = await fraseApi.obterFrase();

  // Elementos do service
  const frase = resultado.frase;
  const id = resultado.id;

  // Controller
  const fraseController = new FraseController(frase, id);
})();

let $ = document.querySelector.bind(document);

// let btn = $("#reload").addEventListener("click", async () => {
//   await ReloadController.recarregar();
// });

$("#about").addEventListener("click", function () {
  const aboutMobile = document.querySelector(".about-mobile");
  aboutMobile.classList.toggle("expanded");
});

$("#contacts").addEventListener("click", function () {
  const aboutMobile = document.querySelector(".contact-mobile");
  aboutMobile.classList.toggle("expanded");
});
