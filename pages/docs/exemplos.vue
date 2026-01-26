<template>
  <div class="text-[#f5f5f5]">
    <h1 class="text-4xl font-bold mb-6 text-[#3abbf5]">
      Exemplos Completos de Programas
    </h1>

    <p class="mb-6">
      Nesta página mostramos programas completos que combinam todos os conceitos da linguagem SeteAO:
      tipos, operadores, condicionais, loops, funções matemáticas e entrada/saída.
    </p>

    <!-- Cálculo de Média -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Exemplo 1: Cálculo de Média
    </h2>

    <pre class="bg-black p-4 rounded mb-4">
nota1 = 15 : INTEIRO.
nota2 = 18 : INTEIRO.
nota3 = 12 : INTEIRO.

media = (nota1 + nota2 + nota3) / 3 : REAL.

SE ( media &gt;= 16 ) {
  EXIBIR("Excelente, média:", media).
}
SENAO SE ( media &gt;= 10 ) {
  EXIBIR("Aprovado, média:", media).
}
SENAO {
  EXIBIR("Reprovado, média:", media).
}
    </pre>

    <!-- Tabuada -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Exemplo 2: Tabuada
    </h2>

    <pre class="bg-black p-4 rounded mb-4">
numero = 7 : INTEIRO.

PARA ( i = 1 ; i &lt;= 10 ; i = i + 1 ) {
  resultado = numero * i : INTEIRO.
  EXIBIR(numero, "x", i, "=", resultado).
}
    </pre>

    <!-- Sistema Interativo -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Exemplo 3: Sistema Interativo
    </h2>

    <pre class="bg-black p-4 rounded mb-4">
nome = "" : TEXTO.
idade = 0 : INTEIRO.

INSERIR("Digite seu nome:", nome).
INSERIR("Digite sua idade:", idade).

EXIBIR("Olá", nome, "sua idade é", idade).

SE ( idade &gt;= 18 ) {
  EXIBIR("Você é maior de idade.").
}
SENAO {
  EXIBIR("Você é menor de idade.").
}
    </pre>

    <!-- Funções Matemáticas -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Exemplo 4: Funções Matemáticas
    </h2>

    <pre class="bg-black p-4 rounded mb-4">
a = 9 : INTEIRO.
b = 2 : INTEIRO.

raizA = RAIZ(a) : REAL.
potAB = EXPOENTE(a, b) : REAL.

EXIBIR("Raiz de a:", raizA).
EXIBIR("a elevado a b:", potAB).
    </pre>

    <!-- Observações Finais -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Observações Finais
    </h2>

    <ul class="list-disc ml-6">
      <li>Todos os programas terminam cada instrução com <code>.</code>.</li>
      <li>As variáveis devem ser declaradas antes de serem usadas.</li>
      <li>Os exemplos combinam entradas, saídas, loops, condicionais e funções matemáticas.</li>
      <li>Podem servir como base para programas maiores e mais complexos.</li>
    </ul>
  </div>
</template>
