<template>
  <div class="text-[#f5f5f5]">
    <h1 class="text-4xl font-bold mb-6 text-[#3abbf5]">
      Erros e Mensagens do Compilador
    </h1>

    <p class="mb-6">
      Durante o processo de compilação, o compilador Pandu-Vali
      realiza três fases principais de validação:
      análise léxica, sintática e semântica.
      Cada fase pode gerar mensagens de erro específicas.
    </p>

    <!-- Léxicos -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Erros Léxicos
    </h2>

    <p class="mb-2">
      Ocorrem quando caracteres inválidos ou tokens mal formados
      são encontrados.
    </p>

    <pre class="bg-black p-4 rounded mb-4">
@valor = 10 : INTEIRO.
Erro: Caractere inválido '@'
    </pre>

    <pre class="bg-black p-4 rounded mb-4">
10idade = 5 : INTEIRO.
Erro: Identificador inválido
    </pre>

    <!-- Sintáticos -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Erros Sintáticos
    </h2>

    <p class="mb-2">
      Ocorrem quando a estrutura do código não segue a gramática
      definida.
    </p>

    <pre class="bg-black p-4 rounded mb-4">
idade = 20 : INTEIRO
Erro: Esperado '.'
    </pre>

    <pre class="bg-black p-4 rounded mb-4">
SE idade > 18 {
Erro: Esperado '('
    </pre>

    <!-- Semânticos -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Erros Semânticos
    </h2>

    <p class="mb-2">
      Ocorrem quando o código é estruturalmente válido,
      mas não faz sentido lógico.
    </p>

    <pre class="bg-black p-4 rounded mb-4">
x = "Texto" : INTEIRO.
Erro: Tipo incompatível
    </pre>

    <pre class="bg-black p-4 rounded mb-4">
EXIBIR(y).
Erro: Variável não declarada
    </pre>

    <pre class="bg-black p-4 rounded mb-4">
a = 10 : INTEIRO.
b = 0 : INTEIRO.
c = a / b : REAL.
Erro: Divisão por zero
    </pre>

    <!-- Benefícios -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Benefícios das Mensagens de Erro
    </h2>

    <ul class="list-disc ml-6">
      <li>Facilitam a depuração do código.</li>
      <li>Ajudam o programador a aprender a linguagem.</li>
      <li>Simulam o comportamento de compiladores reais.</li>
      <li>São geradas automaticamente pelo Pandu-Vali.</li>
    </ul>
  </div>
</template>
