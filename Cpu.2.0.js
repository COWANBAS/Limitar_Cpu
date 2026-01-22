// ==UserScript==
// @name            Folga na cpu
// @description     Verifica se a guia do navegador esta sendo usada, se nao estiver limita o uso da cpu na guia
// @namespace       CowanCPU
// @license         GPL-3.0
// @version         2.0
// @author          Cowanbas
// @match           *://*/*
// @run-at          document-start
// ==/UserScript==

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    // Limitar o uso da CPU
    if (window.requestIdleCallback) {
      requestIdleCallback(function () {
        // Reduzir uso da cpu quando a guia esta oculta
      });
    } else {
      setTimeout(function () {
        // Para navegadores que não suportam requestIdleCallback
      }, 1000);
    }
  }
  else {

  }

});

