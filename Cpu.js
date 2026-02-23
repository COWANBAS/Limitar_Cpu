// ==UserScript==
// @name            Folga na cpu
// @description     Verifica se a guia do navegador está sendo usada, se não estiver, limita o uso da cpu na guia
// @license         GPL-3.0
// @version         1.0
// @author          Cowanbas
// @match           *://*/*
// @run-at          document-start
// ==/UserScript==

// Verifica se a página esta oculta
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    // Oculta o conteúdo da página 
    document.documentElement.style.display = "none";
    // Executa novamente
    if (window.requestIdleCallback) {
      window.requestIdleCallback(function () {
    document.documentElement.style.display = "none";
      });
    // Para navegadores que não suportam requestIdleCallback
    } else {
      setTimeout(function () {
    document.documentElement.style.display = "none";
      }, 1000);
    }
  } else {
    // Mostrar o conteúdo da página quando a guia for aberta Novamente
    document.documentElement.style.display = "block";
  }
});
