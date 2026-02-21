O objetivo desse script e minimizar o uso de recursos da CPU enquanto a aba do navegador está "oculta", ocultando items da pagina porém a pagina continua funcionado mesmo ociosa com audio e video rodanndo etc. Quando a página fica visível novamente, ela é restaurada. Isso pode ajudar a reduzir o consumo de CPU e energia enquanto a aba não está sendo usada, mas o script não limita diretamente o uso da CPU, e sim "oculta" a página para ajudar a reduzir o consumo.

*Evento de visibilidade*

Document.addEventListener: Este comando adiciona um ouvinte de evento que aguarda uma mudança específica no estado do documento.
"visibilitychange": O evento visibilitychange é acionado quando a visibilidade da página muda, ou seja, quando a aba ou a janela do navegador se torna ativa ou não.
Função anônima: A função que é executada quando o evento visibilitychange é disparado. Dentro dessa função, a lógica será executada para verificar se a aba está visível ou não.

<img width="598" height="27" alt="image" src="https://github.com/user-attachments/assets/ee3500ef-a7cf-439d-b223-541fd727e960" />

*Verificação do estado de visibilidade*

Document.visibilityState: Esse comando acessa o estado de visibilidade do documento. Ele pode ter dois valores:
"visible": Significa que a aba está visível (o usuário está interagindo com a página).
"hidden": Significa que a aba não está visível (o usuário não está interagindo com a página, pode ter mudado para outra aba).
if (document.visibilityState == "hidden"): O if verifica se a página está em estado "oculto", ou seja, a aba não está sendo visualizada.

<img width="458" height="45" alt="image" src="https://github.com/user-attachments/assets/16cfd98c-ba5c-42cb-bdec-64d04e6ff9ea" />

*Ocultar a página*

Document.documentElement: Acessa o elemento <html> da página (o nó raiz do documento).
style.display = "none": Essa linha altera a propriedade CSS display do elemento <html> para "none", fazendo com que todo o conteúdo da página seja ocultado. Esse comando basicamente esconde a página inteira da vista do usuário, o que, em teoria, ajuda a reduzir o consumo de recursos enquanto a aba não está sendo usada.

<img width="502" height="42" alt="image" src="https://github.com/user-attachments/assets/41c8bd7c-3e2b-4048-be1c-8c1944e3e066" />

*Restaurar a página quando a aba e aberta*

Se o estado da visibilidade mudar para "visible", o código dentro do else será executado:
document.documentElement.style.display = "block": Essa linha reverte o estilo da página, definindo a propriedade display do <html> para "block", o que faz com que a página seja exibida novamente quando o usuário voltar a visualizar a aba.

![image](https://github.com/user-attachments/assets/03f2e386-c872-4f32-a4b6-3ec59aecb5cd)
