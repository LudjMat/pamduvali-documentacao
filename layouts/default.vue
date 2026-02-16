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
      temporary
      scrim
    >
      <Sidebar @navigate="onNavigate" />
    </v-navigation-drawer>

    <v-main class="pa-6" style="margin-top: 3.5rem;  background-image: url('./white_background.svg'); background-position:right">
      <div class="docs-content">
        <slot style="background-image: url('./white_background.svg'); background-position:right" />
      </div>
    </v-main>

    </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()
const drawer = ref(mdAndUp.value)

function onNavigate() {
  drawer.value = false
}
</script>

<style>
.docs-content p,
.docs-content li {
  text-align: justify;
  text-justify: inter-word;
}

.docs-content pre {
  max-width: 100%;
  overflow-x: auto;
  display: flex;
 
  vertical-align: center;
  align-items: center;
  min-height: 3.5rem;
  padding-top:1rem;
  padding-left:1rem;
}

.docs-content table {
  width: 100%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
}

.docs-content .v-table {
  max-width: 100%;
  width: 100%;
  overflow-x: auto;
  display: table;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .docs-content table {
    max-width: 100%;
    overflow-x: auto;
    display: table;
    width: 100%;
    min-width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>