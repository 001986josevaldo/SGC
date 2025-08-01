<template>
  <header>
    <h1>SGC</h1>
    <nav>
      <RouterLink to="/">Início</RouterLink>
      <RouterLink to="/contatos">Contatos</RouterLink>
      <RouterLink to="/contatos/novo">Novo</RouterLink>
      <RouterLink to="/contatos/pesquisar">Pesquisar</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
header {
  background-color: #000;
  color: white;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

h1 {
  margin: 0;
  text-align: right;
}

nav {
  display: flex;
  gap: 1rem;

}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>
