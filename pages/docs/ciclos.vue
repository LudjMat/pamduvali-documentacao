<template>
  <div class="text-[#f5f5f5]">
    <h1 class="text-4xl font-bold mb-6 text-[#3abbf5]">
      Ciclos e Estruturas de Repetição
    </h1>

    <p class="mb-6">
      A linguagem SeteAO permite executar um bloco de código
      várias vezes através de estruturas de repetição:
      ENQUANTO, PARA e FACA ... ENQUANTO.
    </p>

    <!-- ENQUANTO -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      ENQUANTO
    </h2>

    <pre class="bg-black p-4 rounded mb-4">
i = 1 : INTEIRO.

ENQUANTO ( i &lt;= 5 ) {
  EXIBIR("Valor:", i).
  i = i + 1.
}
    </pre>

    <!-- PARA -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      PARA
    </h2>

    <pre class="bg-black p-4 rounded mb-4">
PARA ( i = 1 ; i &lt;= 10 ; i = i + 1 ) {
  EXIBIR("Tabuada do 5:", 5 * i).
}
    </pre>

    <!-- FACA ENQUANTO -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      FACA ... ENQUANTO
    </h2>

    <pre class="bg-black p-4 rounded mb-4">
i = 1 : INTEIRO.

FACA {
  EXIBIR("Executando:", i).
  i = i + 1.
}
ENQUANTO ( i &lt;= 3 ).
    </pre>

    <!-- CONTINUAR / PARAR -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      CONTINUAR e PARAR
    </h2>

    <pre class="bg-black p-4 rounded mb-4">
PARA ( i = 1 ; i &lt;= 10 ; i = i + 1 ) {
  SE ( i == 5 ) {
    CONTINUAR.
  }

  SE ( i == 8 ) {
    PARAR.
  }

  EXIBIR("Valor:", i).
}
    </pre>

    <!-- Exemplo completo -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Exemplo: Tabuada
    </h2>

    <pre class="bg-black p-4 rounded">
numero = 7 : INTEIRO.

PARA ( i = 1 ; i &lt;= 10 ; i = i + 1 ) {
  resultado = numero * i : INTEIRO.
  EXIBIR(numero, "x", i, "=", resultado).
}
    </pre>
  </div>
</template>
