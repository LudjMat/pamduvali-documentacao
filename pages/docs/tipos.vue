<template>
  <div class="text-[#f5f5f5]">
    <h1 class="text-4xl font-bold mb-6 text-[#3abbf5]">
      Tipos de Dados
    </h1>

    <p class="mb-4">
      Os tipos de dados definem a natureza dos valores que podem ser armazenados
      em variáveis na linguagem SeteAO. Cada variável deve possuir um tipo
      explícito.
    </p>

    <p class="mb-6">
      A declaração de uma variável segue a estrutura:
    </p>

    <pre class="bg-black p-4 rounded mb-6">
&lt;id&gt; : &lt;tipo&gt; .
    </pre>

    <!-- Tipos Primitivos -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Tipos Primitivos
    </h2>

    <table class="w-full border border-gray-700 mb-6">
      <thead>
        <tr class="bg-gray-800">
          <th class="p-2 border">Tipo</th>
          <th class="p-2 border">Descrição</th>
          <th class="p-2 border">Exemplo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="p-2 border">INTEIRO</td>
          <td class="p-2 border">Números inteiros</td>
          <td class="p-2 border">idade = 20 : INTEIRO.</td>
        </tr>
        <tr>
          <td class="p-2 border">REAL</td>
          <td class="p-2 border">Números reais</td>
          <td class="p-2 border">altura = 1.75 : REAL.</td>
        </tr>
        <tr>
          <td class="p-2 border">NATURAL</td>
          <td class="p-2 border">Inteiros positivos</td>
          <td class="p-2 border">alunos = 30 : NATURAL.</td>
        </tr>
        <tr>
          <td class="p-2 border">TEXTO</td>
          <td class="p-2 border">Cadeias de caracteres</td>
          <td class="p-2 border">nome = "Ana" : TEXTO.</td>
        </tr>
        <tr>
          <td class="p-2 border">LOGICO</td>
          <td class="p-2 border">Valores booleanos</td>
          <td class="p-2 border">ativo = VERDADEIRO : LOGICO.</td>
        </tr>
      </tbody>
    </table>

    <!-- Valores Lógicos -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Valores Lógicos
    </h2>

    <pre class="bg-black p-4 rounded mb-6">
VERDADEIRO
FALSO
    </pre>

    <!-- Regras de Tipagem -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Regras de Tipagem
    </h2>

    <ul class="list-disc ml-6 mb-6">
      <li>Uma variável não pode mudar de tipo.</li>
      <li>Operações aritméticas só são permitidas entre números.</li>
      <li>Não é permitido atribuir TEXTO a INTEIRO.</li>
      <li>LOGICO só aceita VERDADEIRO ou FALSO.</li>
    </ul>

    <pre class="bg-black p-4 rounded">
idade = "vinte" : INTEIRO.
# Erro semântico de tipo
    </pre>
  </div>
</template>
