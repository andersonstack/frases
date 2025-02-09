(async () => {
  const fraseApi = new FraseApi();
  const resultado = await fraseApi.obterFrase();
  console.log(resultado);

  // Controller
  const fraseController = new FraseController(fraseApi);
})();
