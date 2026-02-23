// ==UserScript==
// @name            Folga na cpu
// @description     Verifica se a guia do navegador está sendo usada, se não estiver, limita o uso da cpu na guia
// @license         GPL-3.0
// @version         1.0
// @author          Cowanbas
// @match           *://*/*
// @run-at          document-start
// ==/UserScript==

/// Verifica se a página está oculta
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    // Oculta o conteúdo da página
    document.documentElement.style.display = "none";
  } else {
    // Mostra o conteúdo da página
    document.documentElement.style.display = "block";
  }
});
