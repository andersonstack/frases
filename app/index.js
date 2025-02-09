(async () => {
  const fraseApi = new FraseApi();
  const resultado = await fraseApi.obterFrase();
  console.log(resultado);
})();
