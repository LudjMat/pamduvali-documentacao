<template>
  <div class="text-[#f5f5f5]">
    <h1 class="text-4xl font-bold mb-6 text-[#3abbf5]">
      Análise Léxica
    </h1>

    <p class="mb-4">
      A análise léxica é a primeira fase do compilador. Nesta fase, o código
      fonte é transformado em uma sequência de <strong>tokens</strong>,
      que representam os elementos básicos da linguagem.
    </p>

    <!-- Identificadores -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Identificadores
    </h2>

    <p class="mb-4">
      Identificadores são usados para nomear variáveis e devem seguir o padrão
      <strong>snake_case</strong>.
    </p>

    <ul class="list-disc ml-6 mb-4">
      <li>Devem começar com letra minúscula</li>
      <li>Podem conter letras, números e _</li>
      <li>Não podem conter acentos ou símbolos especiais</li>
    </ul>

    <p class="mb-2">Expressão regular:</p>
    <pre class="bg-black p-4 rounded mb-6">
[a-z][a-z0-9_]*
    </pre>

    <!-- Comentários -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Comentários
    </h2>

    <p class="mb-2">A SeteAO suporta dois tipos de comentários:</p>

    <ul class="list-disc ml-6 mb-4">
      <li>Comentário simples: começa com <code>#</code></li>
      <li>Comentário de bloco: começa e termina com <code>##</code></li>
    </ul>

    <pre class="bg-black p-4 rounded mb-6">
# Isto é um comentário simples

##
Isto é um comentário
de múltiplas linhas
##
    </pre>

    <!-- Palavras Reservadas -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Palavras Reservadas
    </h2>

    <p class="mb-4">
      As seguintes palavras são reservadas e não podem ser usadas como
      identificadores:
    </p>

    <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
      <span>VAR</span>
      <span>INTEIRO</span>
      <span>REAL</span>
      <span>NATURAL</span>
      <span>TEXTO</span>
      <span>LOGICO</span>
      <span>VERDADEIRO</span>
      <span>FALSO</span>
      <span>EXIBIR</span>
      <span>INSERIR</span>
      <span>SE</span>
      <span>SENAO</span>
      <span>E</span>
      <span>OU</span>
      <span>NAO</span>
      <span>RAIZ</span>
      <span>EXPOENTE</span>
      <span>ENQUANTO</span>
      <span>FACA</span>
      <span>PARA</span>
      <span>CONTINUAR</span>
      <span>PARAR</span>
    </div>

    <!-- Erros Léxicos -->
    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Erros Léxicos
    </h2>

    <p class="mb-4">
      O compilador deve rejeitar os seguintes casos:
    </p>

    <ul class="list-disc ml-6 mb-4">
      <li>Símbolos inválidos: @, $, !</li>
      <li>Identificadores iniciados por número</li>
      <li>Strings não terminadas</li>
    </ul>

    <pre class="bg-black p-4 rounded">
10valor : INTEIRO.
# Erro: identificador inválido
    </pre>
  </div>
</template>
