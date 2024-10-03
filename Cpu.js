// ==UserScript==
// @name            Folga na cpu
// @description     Verifica se a guia do navegador esta sendo usada, se nao estiver limita o uso da cpu na guia
// @version         1.0
// @author          Cowanbas
// @run-at          document-start
// ==/UserScript==

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState == "hidden") {
        document.documentElement.style.display = "none";
    }
    else {
        document.documentElement.style.display = "block";
    }
});
