<template>
  <div class="text-[#f5f5f5]">
    <h1 class="text-4xl font-bold mb-6 text-[#3abbf5]">
      Entrada e Saída de Dados
    </h1>

    <p class="mb-6">
      A linguagem SeteAO fornece comandos específicos para interação
      com o utilizador através do teclado e do ecrã.
      Estes comandos são INSERIR e EXIBIR.
    </p>

    <!-- EXIBIR -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      EXIBIR
    </h2>

    <p class="mb-2">
      O comando EXIBIR é utilizado para mostrar informações ao utilizador.
      Pode imprimir textos, variáveis ou combinações de ambos.
    </p>

    <pre class="bg-black p-4 rounded mb-4">
EXIBIR("Olá Mundo").
EXIBIR("A soma é:", soma).
EXIBIR("Nome:", nome, "Idade:", idade).
    </pre>

    <!-- INSERIR -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      INSERIR
    </h2>

    <p class="mb-2">
      O comando INSERIR é utilizado para ler dados introduzidos pelo utilizador.
      Pode receber apenas a variável ou uma mensagem e a variável.
    </p>

    <pre class="bg-black p-4 rounded mb-4">
INSERIR(nome).
INSERIR("Digite a sua idade:", idade).
    </pre>

    <!-- Regras -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Regras Importantes
    </h2>

    <ul class="list-disc ml-6">
      <li>A variável deve estar previamente declarada.</li>
      <li>O tipo da variável define o tipo de dado esperado.</li>
      <li>Strings devem estar entre aspas " ".</li>
      <li>É permitido passar múltiplos parâmetros no EXIBIR.</li>
    </ul>

    <!-- Exemplo completo -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Exemplo Completo
    </h2>

    <pre class="bg-black p-4 rounded">
nome = "" : TEXTO.
idade = 0 : INTEIRO.

INSERIR("Digite o seu nome:", nome).
INSERIR("Digite a sua idade:", idade).

EXIBIR("Olá", nome).
EXIBIR("Você tem", idade, "anos").
    </pre>
  </div>
</template>
