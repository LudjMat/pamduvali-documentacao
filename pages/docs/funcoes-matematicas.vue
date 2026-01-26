<template>
  <div class="text-[#f5f5f5]">
    <h1 class="text-4xl font-bold mb-6 text-[#3abbf5]">
      Funções Matemáticas
    </h1>

    <p class="mb-6">
      A linguagem SeteAO disponibiliza funções matemáticas nativas
      que permitem realizar cálculos avançados sem a necessidade
      de implementação manual.
    </p>

    <!-- RAIZ -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      RAIZ
    </h2>

    <p class="mb-2">
      A função RAIZ calcula a raiz quadrada de um número.
    </p>

    <pre class="bg-black p-4 rounded mb-4">
resultado = RAIZ(25) : REAL.
EXIBIR("Resultado:", resultado).
    </pre>

    <!-- EXPOENTE -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      EXPOENTE
    </h2>

    <p class="mb-2">
      A função EXPOENTE calcula a potência de um número.
    </p>

    <pre class="bg-black p-4 rounded mb-4">
pot = EXPOENTE(2, 3) : INTEIRO.
EXIBIR("2 elevado a 3 =", pot).
    </pre>

    <!-- Regras -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Regras Importantes
    </h2>

    <ul class="list-disc ml-6">
      <li>As funções retornam valores numéricos.</li>
      <li>Os parâmetros devem ser valores ou expressões.</li>
      <li>RAIZ retorna sempre REAL.</li>
      <li>EXPOENTE pode retornar INTEIRO ou REAL.</li>
    </ul>

    <!-- Exemplo completo -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Exemplo Completo
    </h2>

    <pre class="bg-black p-4 rounded">
a = 9 : INTEIRO.
b = 2 : INTEIRO.

raizA = RAIZ(a) : REAL.
potAB = EXPOENTE(a, b) : REAL.

EXIBIR("Raiz de a:", raizA).
EXIBIR("a elevado a b:", potAB).
    </pre>
  </div>
</template>
