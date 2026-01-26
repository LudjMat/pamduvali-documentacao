<template>
  <div class="text-[#f5f5f5]">
    <h1 class="text-4xl font-bold mb-6 text-[#3abbf5]">
      Estruturas Condicionais
    </h1>

    <p class="mb-6">
      As estruturas condicionais permitem executar blocos de código
      com base em condições lógicas. A linguagem SeteAO suporta:
      SE, SENAO e SENAO SE.
    </p>

    <!-- SE -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Estrutura SE
    </h2>

    <pre class="bg-black p-4 rounded mb-4">
SE ( idade &gt;= 18 ) {
  EXIBIR("Maior de idade").
}
    </pre>

    <!-- SE SENAO -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      SE ... SENAO
    </h2>

    <pre class="bg-black p-4 rounded mb-4">
SE ( idade &gt;= 18 ) {
  EXIBIR("Maior de idade").
}
SENAO {
  EXIBIR("Menor de idade").
}
    </pre>

    <!-- SENAO SE -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      SE ... SENAO SE ... SENAO
    </h2>

    <pre class="bg-black p-4 rounded mb-4">
SE ( nota &gt;= 16 ) {
  EXIBIR("Excelente").
}
SENAO SE ( nota &gt;= 10 ) {
  EXIBIR("Aprovado").
}
SENAO {
  EXIBIR("Reprovado").
}
    </pre>

    <!-- Observações -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Observações Importantes
    </h2>

    <ul class="list-disc ml-6">
      <li>Todas as condições devem resultar em um valor do tipo LOGICO.</li>
      <li>Os blocos são delimitados por chaves { }.</li>
      <li>O SENAO é opcional.</li>
      <li>É permitido aninhar estruturas SE dentro de outras.</li>
    </ul>

    <!-- Exemplo completo -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Exemplo Completo
    </h2>

    <pre class="bg-black p-4 rounded">
nota = 14 : INTEIRO.

SE ( nota &gt;= 16 ) {
  EXIBIR("Excelente").
}
SENAO SE ( nota &gt;= 10 ) {
  EXIBIR("Aprovado").
}
SENAO {
  EXIBIR("Reprovado").
}
    </pre>
  </div>
</template>
