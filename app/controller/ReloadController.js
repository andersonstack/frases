class ReloadController {
  static async recarregar() {
    // Services
    const fraseApi = new FraseApi();
    const resultado = await fraseApi.obterFrase();

    // Verifica se obteve a frase com sucesso
    if (resultado) {
      // Elementos do service
      const frase = resultado.frase;
      const id = resultado.id;

      // Controller
      const fraseController = new FraseController(frase, id);
    } else {
      console.log("Erro ao obter frase");
    }
  }
}
