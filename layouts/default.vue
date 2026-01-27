<template>
  <v-app>
    <v-app-bar color="surface" flat style="border-bottom: 3px solid white;">
      <v-app-bar-nav-icon 
        class="text-grey-lighten-4" 
        @click="drawer = !drawer" 
      />
      <v-toolbar-title>SeteAO Docs</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      color="surface"
      width="250"
    >
      <Sidebar />
    </v-navigation-drawer>

    <v-main class="pa-6" style="margin-top: 3.5rem">
      <slot />
    </v-main>

    </v-app>
</template>

<script setup>
import { ref } from 'vue'
const drawer = ref(true)
</script>