<template>
<v-list>
    <v-list-item
      v-for="item in items"
      :key="item.to"
      :to="item.to"
      @click="emit('navigate')"
      link
      color="primary"
    >
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script setup>
const emit = defineEmits(['navigate'])

const items = [
  { title: 'Home', to: '/' },
  { title: 'Introdução', to: '/docs/introducao' },
  { title: 'Léxica', to: '/docs/lexica' },
  { title: 'Sintaxe', to: '/docs/sintaxe' },
  { title: 'Cores', to: '/docs/cores' },
  { title: 'Tipos', to: '/docs/tipos' },
  { title: 'Operadores', to: '/docs/operadores' },
  { title: 'Condicionais', to: '/docs/condicionais' },
  { title: 'Ciclos', to: '/docs/ciclos' },
  { title: 'Entrada e Saída', to: '/docs/entrada-saida' },
  { title: 'Funções Matemáticas', to: '/docs/funcoes-matematicas' },
  { title: 'Exemplos', to: '/docs/exemplos' },
  { title: 'Erros', to: '/docs/erros' },
  { title: 'Arquitetura', to: '/docs/arquitetura' },
  { title: 'Conclusão', to: '/docs/conclusao' },
]
</script>
