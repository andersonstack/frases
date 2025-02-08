class TradutorFrase {
  constructor() {
    throw new Error("A classe TradutorFrase não pode ser instanciada.");
  }

  static async obterTraducao(frase) {
    const apiGoogleTranslate = `https://translation.googleapis.com/language/translate/v2?key=AIzaSyC49W9VxHaxiPJ2m7GLrpMC0eO8d8Vhe8I`;

    try {
      const response = await fetch(apiGoogleTranslate, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: frase,
          target: "pt",
        }),
      });

      const data = await response.json();
      return data.data.translations[0].translatedText;
    } catch (error) {
      console.error("Erro ao traduzir a frase:", error);
      return frase; // Retorna a frase original em caso de erro
    }
  }
}
