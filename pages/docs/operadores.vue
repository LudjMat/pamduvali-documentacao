<template>
  <div class="text-[#f5f5f5]">
    <h1 class="text-4xl font-bold mb-6 text-[#3abbf5]">
      Operadores e Expressões
    </h1>

    <p class="mb-6">
      Os operadores permitem realizar cálculos, comparações e operações lógicas
      entre valores e variáveis na linguagem SeteAO.
    </p>

    <!-- Operadores Aritméticos -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Operadores Aritméticos
    </h2>

    <table class="w-full border border-gray-700 mb-6">
      <thead>
        <tr class="bg-gray-800">
          <th class="p-2 border">Operador</th>
          <th class="p-2 border">Descrição</th>
          <th class="p-2 border">Exemplo</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="p-2 border">+</td><td class="p-2 border">Adição</td><td class="p-2 border">soma = a + b : INTEIRO.</td></tr>
        <tr><td class="p-2 border">-</td><td class="p-2 border">Subtração</td><td class="p-2 border">dif = a - b : INTEIRO.</td></tr>
        <tr><td class="p-2 border">*</td><td class="p-2 border">Multiplicação</td><td class="p-2 border">prod = a * b : INTEIRO.</td></tr>
        <tr><td class="p-2 border">/</td><td class="p-2 border">Divisão</td><td class="p-2 border">media = soma / 2 : REAL.</td></tr>
        <tr><td class="p-2 border">RAIZ</td><td class="p-2 border">Raiz quadrada</td><td class="p-2 border">r = RAIZ(16) : REAL.</td></tr>
        <tr><td class="p-2 border">EXPOENTE</td><td class="p-2 border">Potência</td><td class="p-2 border">p = EXPOENTE(2,3) : INTEIRO.</td></tr>
      </tbody>
    </table>

    <!-- Operadores de Comparação -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Operadores de Comparação
    </h2>

    <table class="w-full border border-gray-700 mb-6">
      <thead>
        <tr class="bg-gray-800">
          <th class="p-2 border">Operador</th>
          <th class="p-2 border">Significado</th>
          <th class="p-2 border">Resultado</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="p-2 border">&gt;</td><td class="p-2 border">Maior que</td><td class="p-2 border">LOGICO</td></tr>
        <tr><td class="p-2 border">&lt;</td><td class="p-2 border">Menor que</td><td class="p-2 border">LOGICO</td></tr>
        <tr><td class="p-2 border">&gt;=</td><td class="p-2 border">Maior ou igual</td><td class="p-2 border">LOGICO</td></tr>
        <tr><td class="p-2 border">&lt;=</td><td class="p-2 border">Menor ou igual</td><td class="p-2 border">LOGICO</td></tr>
        <tr><td class="p-2 border">==</td><td class="p-2 border">Igual</td><td class="p-2 border">LOGICO</td></tr>
        <tr><td class="p-2 border">!=</td><td class="p-2 border">Diferente</td><td class="p-2 border">LOGICO</td></tr>
      </tbody>
    </table>

    <!-- Operadores Lógicos -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Operadores Lógicos
    </h2>

    <table class="w-full border border-gray-700 mb-6">
      <thead>
        <tr class="bg-gray-800">
          <th class="p-2 border">Operador</th>
          <th class="p-2 border">Descrição</th>
          <th class="p-2 border">Exemplo</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="p-2 border">E</td><td class="p-2 border">Conjunção lógica</td><td class="p-2 border">a &gt; 5 E b &lt; 10</td></tr>
        <tr><td class="p-2 border">OU</td><td class="p-2 border">Disjunção lógica</td><td class="p-2 border">a &gt; 5 OU b &lt; 10</td></tr>
        <tr><td class="p-2 border">NAO</td><td class="p-2 border">Negação lógica</td><td class="p-2 border">NAO(a &gt; 5)</td></tr>
      </tbody>
    </table>

    <!-- Exemplo -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Exemplo Completo
    </h2>

    <pre class="bg-black p-4 rounded">
a = 10 : INTEIRO.
b = 5 : INTEIRO.

resultado = (a &gt; b) E (b &gt; 0) : LOGICO.

EXIBIR("Resultado:", resultado).
    </pre>
  </div>
</template>
