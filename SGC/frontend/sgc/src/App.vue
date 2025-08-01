<template>
  <div id="app">
    <Header />

    <main>
      <RouterView />

    </main>
    <Footer />
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


const router = useRouter()
const route = useRoute()
console.log('Rota atual:', route.path)

const [entry] = performance.getEntriesByType("navigation")
// Redireciona para home se recarregar a página
if (entry?.type === "reload") {
  // Atualização detectada
  router.replace('/')
}
</script>




<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  overflow-x: hidden;
  font-family: sans-serif;
}

main {
  padding: 2rem;
  min-height: 80vh;
}



</style>
