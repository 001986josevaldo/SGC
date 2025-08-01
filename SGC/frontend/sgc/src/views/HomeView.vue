<template>
  <div>
    <h1>Bem-vindo ao Sistema de Gerenciamento de Contatos</h1>
    <img :src="logo" alt="Logo" class="logo" />

  </div>
</template>


<script setup>
import logo from '../assets/image.png' // @ representa src/
</script>

<style>
.logo {
  max-width: 900px;
  display: block;
  margin: 20px auto;
  border-radius: 5rem;
}
</style>
