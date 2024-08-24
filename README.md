# supresa para minha namorada #

objetivo aperter usar a linguagem HTML e fazer uma supresa par minha amada (:


    Te Amo vida, to com saudade de você


Resumo do Projeto

O projeto consiste em uma página web interativa que apresenta:

Tela Inicial: Uma mensagem de boas-vindas com um botão para começar.
Verificação de Senha: Uma tela onde o usuário deve inserir a senha correta para prosseguir.
Quiz Interativo: Uma série de perguntas com opções de resposta, incluindo algumas perguntas "troll" para diversão adicional.
Surpresa Final: Uma mensagem especial e uma imagem comemorativa ao concluir o quiz.

1. Transição da Tela de Senha para o Quiz
Erro:

Descrição: Após inserir a senha correta, a tela ficava travada e o quiz não iniciava conforme esperado.
Causa Provável: Funções JavaScript responsáveis por manipular a exibição das telas não estavam funcionando corretamente. Possíveis referências a funções inexistentes ou manipulação incorreta de classes CSS.
Soluções Tentadas:

Revisão das Funções: Ajustes nas funções checkPassword() e showNextQuestion() para garantir que as classes CSS sejam adicionadas e removidas corretamente.
Correção de Referências: Remoção de chamadas para funções inexistentes, como showQuestion(0);, que causavam erros e interrompiam a execução do script.
Aprendizado:

Importância da Verificação de Funções e Seletores: Garantir que todas as funções chamadas realmente existam e que os seletores utilizados correspondam aos elementos corretos no DOM.
Uso do Console do Navegador para Debugging: Utilizar o console do navegador para identificar erros de execução e obter mensagens de erro detalhadas.
2. Exibição e Transição das Perguntas do Quiz
Erro:

Descrição: As perguntas do quiz não apareciam na ordem correta ou não eram exibidas conforme as respostas selecionadas.
Causa Provável: Lógica incorreta na função responsável por avançar para a próxima pergunta, possivelmente não considerando corretamente o índice atual da pergunta ou não manipulando as classes de exibição de forma adequada.
Soluções Tentadas:

Reestruturação da Função showNextQuestion(): Revisão da lógica para identificar a pergunta atual e exibir a próxima corretamente.
Controle de Respostas Corretas e Incorretas: Implementação de verificações para determinar se a resposta selecionada é correta e definir o fluxo adequado (prosseguir ou reiniciar o quiz).
Aprendizado:

Estruturação Clara da Lógica de Navegação: É fundamental ter uma lógica bem definida para a navegação entre perguntas, considerando todos os possíveis cenários de interação do usuário.
Testes Iterativos: Realizar testes após cada alteração para verificar se o comportamento do quiz corresponde ao esperado.
3. Comportamento das Perguntas "Troll"
Erro:

Descrição: As perguntas "troll" não avançavam automaticamente após o tempo previsto ou não eram exibidas corretamente.
Causa Provável: Configuração inadequada do temporizador (`set

