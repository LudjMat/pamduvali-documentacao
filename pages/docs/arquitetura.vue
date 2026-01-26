<template>
  <v-container class="pa-6" fluid style="background-color: #0f172a; min-height: 100vh;">
    <v-row>
      <v-col cols="12">
        <v-sheet color="#0f172a" elevation="0">
          <h1 class="text-h3 font-weight-bold mb-6" style="color: #3abbf5;">
            Arquitetura do Compilador Pandu-Vali
          </h1>

          <p style="color: #f5f5f5;" class="mb-6">
            O compilador Pandu-Vali segue uma arquitetura clássica de compiladores, dividida em fases bem definidas. 
            Cada fase transforma e valida o código fonte, garantindo que o programa seja executável e correto.
          </p>
        </v-sheet>
      </v-col>
    </v-row>

    <!-- Cards das Fases -->
    <v-row dense>
      <v-col cols="12" md="6" lg="3" v-for="fase in fases" :key="fase.nome">
        <v-card color="#1e293b" class="pa-4 mb-4" elevation="2">
          <v-card-title class="font-weight-bold" style="color: #3abbf5;">
            {{ fase.nome }}
          </v-card-title>
          <v-card-text style="color: #f5f5f5;">
            {{ fase.descricao }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Diagrama do fluxo -->
    <v-row class="mt-8">
      <v-col cols="12">
        <v-sheet color="#1e293b" class="pa-4 rounded">
          <h2 class="text-h5 font-weight-bold mb-4" style="color: #3abbf5;">Fluxo do Compilador</h2>
          <p style="color: #f5f5f5;">
            O código fonte passa por todas as fases do compilador antes de ser executado:
          </p>
          <v-list dense>
            <v-list-item>
              <v-list-item-content style="color: #f5f5f5;">
                Código Fonte → <strong>Léxico</strong> → <strong>Sintaxe</strong> → <strong>Semântica</strong> → <strong>Execução</strong>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>
    </v-row>

    <!-- Observações -->
    <v-row class="mt-8">
      <v-col cols="12">
        <v-sheet color="#1e293b" class="pa-4 rounded">
          <h2 class="text-h5 font-weight-bold mb-4" style="color: #3abbf5;">Observações</h2>
          <v-list dense>
            <v-list-item>
              <v-list-item-content style="color: #f5f5f5;">
                • Cada fase tem mensagens de erro específicas para facilitar a depuração.
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content style="color: #f5f5f5;">
                • A arquitetura modular permite adicionar futuras funções e tipos de dados.
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content style="color: #f5f5f5;">
                • O compilador Pandu-Vali é projetado para ser educativo e funcional ao mesmo tempo.
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const fases = [
  {
    nome: "Análise Léxica",
    descricao:
      "Converte o código fonte em tokens, identificando palavras reservadas, identificadores, operadores e símbolos especiais."
  },
  {
    nome: "Análise Sintática",
    descricao:
      "Verifica se os tokens formam estruturas válidas de acordo com a gramática da linguagem SeteAO."
  },
  {
    nome: "Análise Semântica",
    descricao:
      "Valida tipos, coerência de variáveis, existência de identificadores e lógica do código."
  },
  {
    nome: "Geração / Interpretação",
    descricao:
      "Executa ou traduz o código para um formato executável, gerando resultados e mensagens de erro apropriadas."
  }
];
</script>

<style scoped>
/* Ajustes extras */
</style>
