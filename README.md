*Adicionando um ouvinte de evento visibilitychange*

O script começa adicionando um ouvinte de evento ao "document" para detectar mudanças no estado de visibilidade da página. O evento "visibilitychange" é disparado sempre que a visibilidade da guia do navegador muda, ou seja, quando o usuário alterna entre guias ou minimiza a janela.

![image](https://github.com/user-attachments/assets/16584ea7-d6c6-4214-8f5f-f5519a85e020)

Quando a visibilidade muda, o código dentro da função é executado.

*Verificando o estado de visibilidade*

Dentro do ouvinte de evento, o script verifica o valor de document.visibilityState, que pode ser "visible" ou "hidden". Isso indica se a guia está visível para o usuário ou se está em segundo plano (oculta).
