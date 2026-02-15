<template>
  <div class="text-[#f5f5f5]">
    <h1 class="text-4xl font-bold mb-6 text-[#3abbf5]">
      Cores
    </h1>

    <p class="mb-6">
      A SeteAO permite usar nomes de cores em <strong>snake_case</strong>.
      Internamente, esses nomes são convertidos para valores CSS (hex ou nome).
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Exemplos
    </h2>

    <pre class="bg-black p-4 rounded mb-6">
EXIBIR ( "Olá" ) .

cor = azul_claro : TEXTO.
EXIBIR ( cor ) .

cor = #FFAA00 : TEXTO.
EXIBIR ( cor ) .
    </pre>

    <h2 class="text-2xl font-semibold mt-8 mb-4 text-[#3abbf5]">
      Lista de cores suportadas
    </h2>

    <div class="mb-4">
      <v-text-field
        v-model="query"
        label="Pesquisar (ex.: azul, _escuro, #...)"
        variant="outlined"
        density="comfortable"
        hide-details
      />
    </div>

    <v-table density="comfortable">
      <thead>
        <tr>
          <th class="text-left">Pré-visualização</th>
          <th class="text-left">Nome (SeteAO)</th>
          <th class="text-left">Valor CSS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filtered" :key="item.name">
          <td style="width: 140px;">
            <div
              style="width: 96px; height: 28px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.25);"
              :style="{ backgroundColor: item.css }"
            />
          </td>
          <td>
            <code>{{ item.name }}</code>
          </td>
          <td>
            <code>{{ item.css }}</code>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { cssColor, seteaoColors } from '~/utils/seteaoColors'

const query = ref('')

const items = computed(() => {
  return Object.keys(seteaoColors)
    .sort((a, b) => a.localeCompare(b))
    .map((name) => ({ name, css: cssColor(name) }))
})

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return items.value

  return items.value.filter((x) => {
    return x.name.toLowerCase().includes(q) || x.css.toLowerCase().includes(q)
  })
})
</script>
