*Adicionando um ouvinte de evento visibilitychange*

O script começa adicionando um ouvinte de evento ao "document" para detectar mudanças no estado de visibilidade da página. O evento "visibilitychange" é disparado sempre que a visibilidade da guia do navegador muda, ou seja, quando o usuário alterna entre guias ou minimiza a janela.

![image](https://github.com/user-attachments/assets/16584ea7-d6c6-4214-8f5f-f5519a85e020)

Quando a visibilidade muda, o código dentro da função é executado.

*Verificando o estado de visibilidade*

Dentro do ouvinte de evento, o script verifica o valor de "document.visibilityState", que pode ser "visible" ou "hidden". Isso indica se a guia está visível para o usuário ou se está em segundo plano (oculta).

![image](https://github.com/user-attachments/assets/273ae2e4-a2e6-46c4-9a34-9189afbf040c)

*Se a guia estiver oculta*

O script pode executar ações específicas para reduzir o uso de CPU, já que a guia não está sendo visualizada e o navegador pode economizar recursos. Quando a guia está oculta, o script tenta usar a função "requestIdleCallback", se disponível, para adiar operações pesadas até que o navegador esteja ocioso. Isso ajuda a evitar sobrecarregar o processador quando a guia não está em uso.

![image](https://github.com/user-attachments/assets/f11b7b88-c600-4b64-a925-cda2279087aa)

*Fallback com setTimeout*
Para navegadores que não suportam "requestIdleCallback", o script utiliza o "setTimeout", que permite adiar a execução de tarefas. Isso também ajuda a reduzir o impacto no desempenho da CPU enquanto a guia está oculta.

![image](https://github.com/user-attachments/assets/cfdbe6ab-5568-4d23-888a-d77bc2bf0148)

*Se a guia estiver visível*

Quando a guia é trazida de volta à vista, o script pode restaurar o comportamento normal, reativando operações que foram temporariamente desativadas ou adiadas.

*BENEFICIOS DO SCRIPT*

*Economia de recursos*: 
O script ajuda a reduzir o uso de recursos (como CPU e memória) quando a guia não está sendo usada, permitindo que o navegador dedique mais poder de processamento a outras tarefas.

*Melhoria na performance*: 
A limitação do uso da CPU durante períodos de inatividade pode melhorar a performance geral do sistema, especialmente em dispositivos com menos recursos.

*Compatibilidade com navegadores modernos e antigos*: 
O script verifica se o método requestIdleCallback está disponível no navegador, oferecendo uma abordagem mais moderna e eficiente para reduzir o uso de recursos. Caso contrário, recorre ao setTimeout como uma alternativa mais simples.
