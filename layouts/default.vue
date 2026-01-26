<template>
  <div class="flex min-h-screen bg-[#0f172a]" style="background-color: #0f172a">
    <Sidebar />
    <main class="p-6 flex-1 overflow-y-auto  ">
      <slot />
    </main>
  </div>
  <hr>
  <v-footer class="p-0">
    <v-col class="text-center" cols="12" style="background-color: #0f172a; color: #f5f5f5;">
      © {{ new Date().getFullYear() }} SeteAO. Todos os direitos reservados.
    </v-col>
  </v-footer>
</template>
<style>

*{
  margin:0;
  padding: 0;
  color: #f5f5f5;
}
</style>