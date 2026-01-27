<template>
<v-list>
    <v-list-item
      v-for="item in items"
      :key="item.to"
      :to="item.to"
      link
      color="primary"
    >
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(true)

const items = [
  { title: 'Home', to: '/' },
  { title: 'Introdução', to: '/docs/introducao' },
  { title: 'Léxica', to: '/docs/lexica' },
  { title: 'Sintaxe', to: '/docs/sintaxe' },
  { title: 'Tipos', to: '/docs/tipos' },
  { title: 'Operadores', to: '/docs/operadores' },
  { title: 'Condicionais', to: '/docs/condicionais' },
  { title: 'Ciclos', to: '/docs/ciclos' },
  { title: 'Exemplos', to: '/docs/exemplos' },
  { title: 'Erros', to: '/docs/erros' },
  { title: 'Arquitetura', to: '/docs/arquitetura' },
  { title: 'Conclusão', to: '/docs/conclusao' },
]
</script>
