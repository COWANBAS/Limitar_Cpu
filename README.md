*CPU 1.0*

O objetivo desse script e minimizar o uso de recursos da CPU enquanto a aba do navegador está "oculta", ocultando items da pagina porém a pagina continua funcionado mesmo ociosa com audio e video rodanndo etc. Quando a página fica visível novamente, ela é restaurada. Isso pode ajudar a reduzir o consumo de CPU e energia enquanto a aba não está sendo usada, mas o script não limita diretamente o uso da CPU, e sim "oculta" a página para ajudar a reduzir o consumo.

*Evento de visibilidade*

Document.addEventListener: Este comando adiciona um ouvinte de evento que aguarda uma mudança específica no estado do documento.
"visibilitychange": O evento visibilitychange é acionado quando a visibilidade da página muda, ou seja, quando a aba ou a janela do navegador se torna ativa ou não.
Função anônima: A função que é executada quando o evento visibilitychange é disparado. Dentro dessa função, a lógica será executada para verificar se a aba está visível ou não.

![image](https://github.com/user-attachments/assets/a6ca70d3-4c88-403e-8106-e440d753e5e4)

*Verificação do estado de visibilidade*

Document.visibilityState: Esse comando acessa o estado de visibilidade do documento. Ele pode ter dois valores:
"visible": Significa que a aba está visível (o usuário está interagindo com a página).
"hidden": Significa que a aba não está visível (o usuário não está interagindo com a página, pode ter mudado para outra aba).
if (document.visibilityState == "hidden"): O if verifica se a página está em estado "oculto", ou seja, a aba não está sendo visualizada.

![image](https://github.com/user-attachments/assets/1b26c2ec-ab32-4daa-b6fe-6de80c6e314f)

*Ocultar a página*

Document.documentElement: Acessa o elemento <html> da página (o nó raiz do documento).
style.display = "none": Essa linha altera a propriedade CSS display do elemento <html> para "none", fazendo com que todo o conteúdo da página seja ocultado. Esse comando basicamente esconde a página inteira da vista do usuário, o que, em teoria, ajuda a reduzir o consumo de recursos enquanto a aba não está sendo usada.

![image](https://github.com/user-attachments/assets/7c9d7bf9-c97d-4e07-9c45-eb3973b21bb8)

*Restaurar a página quando a aba e aberta*

Se o estado da visibilidade mudar para "visible", o código dentro do else será executado:
document.documentElement.style.display = "block": Essa linha reverte o estilo da página, definindo a propriedade display do <html> para "block", o que faz com que a página seja exibida novamente quando o usuário voltar a visualizar a aba.

![image](https://github.com/user-attachments/assets/03f2e386-c872-4f32-a4b6-3ec59aecb5cd)

*CPU 2.0*

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
