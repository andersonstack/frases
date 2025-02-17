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
