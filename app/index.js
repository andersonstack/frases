(async () => {
  const fraseApi = new FraseApi();
  const resultado = await fraseApi.obterFrase();
  const frase = resultado.frase;
  const id = resultado.id;
  // Controller
  const fraseController = new FraseController(frase, id);
})();
