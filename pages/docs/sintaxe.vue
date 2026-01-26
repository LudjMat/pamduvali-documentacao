<template>
  <div class="text-[#f5f5f5]">
    <h1 class="text-4xl font-bold mb-6 text-[#3abbf5]">
      Sintaxe da Linguagem
    </h1>

    <p class="mb-4">
      A análise sintática é responsável por verificar se a sequência de tokens
      produzida pelo analisador léxico segue a <strong>gramática da linguagem</strong>.
      Nesta fase, o compilador valida a estrutura das instruções.
    </p>

    <p class="mb-6">
      A SeteAO utiliza o <strong>ponto final (.)</strong> como delimitador
      obrigatório de instruções.
    </p>

    <!-- Estrutura geral -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Estrutura Geral do Programa
    </h2>

    <pre class="bg-black p-4 rounded mb-6">
&lt;programa&gt; ::= { &lt;instrucao&gt; }
    </pre>

    <!-- Declaração -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Declaração de Variáveis
    </h2>

    <p class="mb-2">Forma geral:</p>

    <pre class="bg-black p-4 rounded mb-4">
&lt;declaracao&gt; ::= &lt;id&gt; [ "=" &lt;expressao&gt; ] ":" &lt;tipo&gt; "."
    </pre>

    <p class="mb-2">Exemplo:</p>

    <pre class="bg-black p-4 rounded mb-6">
idade = 20 : INTEIRO.
nome : TEXTO.
    </pre>

    <!-- Atribuição -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Atribuição
    </h2>

    <pre class="bg-black p-4 rounded mb-4">
&lt;atribuicao&gt; ::= &lt;id&gt; "=" &lt;expressao&gt; "."
    </pre>

    <pre class="bg-black p-4 rounded mb-6">
idade = idade + 1.
    </pre>

    <!-- Entrada e Saída -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Entrada e Saída de Dados
    </h2>

    <p class="mb-2">Entrada:</p>
    <pre class="bg-black p-4 rounded mb-4">
INSERIR ( &lt;id&gt; ) .
INSERIR ( &lt;string&gt; , &lt;id&gt; ) .
    </pre>

    <p class="mb-2">Saída:</p>
    <pre class="bg-black p-4 rounded mb-6">
EXIBIR ( &lt;expressao&gt; ) .
EXIBIR ( &lt;string&gt; , &lt;expressao&gt; ) .
    </pre>

    <!-- Expressões -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Expressões
    </h2>

    <pre class="bg-black p-4 rounded mb-6">
&lt;expressao&gt; ::= 
&lt;termo&gt; { ("+" | "-") &lt;termo&gt; }

&lt;termo&gt; ::= 
&lt;fator&gt; { ("*" | "/") &lt;fator&gt; }

&lt;fator&gt; ::= 
&lt;numero&gt; | &lt;id&gt; | "(" &lt;expressao&gt; ")"
    </pre>

    <!-- Erros Sintáticos -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Erros Sintáticos
    </h2>

    <ul class="list-disc ml-6 mb-4">
      <li>Instruções sem ponto final</li>
      <li>Parênteses não fechados</li>
      <li>Tipos inexistentes</li>
    </ul>

    <pre class="bg-black p-4 rounded">
x = 10
# Erro: esperado '.'
    </pre>
  </div>
</template>
