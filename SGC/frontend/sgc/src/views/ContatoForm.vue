<!-- src/views/ContatoForm.vue -->
<template>
  <div>
    <h1>{{ isEdit ? 'Editar' : 'Novo' }} Contato</h1>
    <form @submit.prevent="salvarContato">
      <input v-model="contato.nome" placeholder="Nome" required />
      <input v-model="contato.telefone" placeholder="Telefone" required />
      <input v-model="contato.email" placeholder="Email" required />
      <button type="submit">Salvar</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const id = route.params.id
const isEdit = id !== undefined
const contato = ref({ nome: '', telefone: '', email: '' })

// Carrega o contato existente (modo edição)
onMounted(async () => {
  if (isEdit) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/contatos/${id}`)
      if (!response.ok) throw new Error('Erro ao buscar contato')
      contato.value = await response.json()
    } catch (error) {
      console.error('Erro ao carregar contato:', error)
    }
  }
})

// ✅ 
async function salvarContato() {
  try {
    const url = `http://127.0.0.1:8000/api/contatos${isEdit ? '/' + id : ''}`
    const method = isEdit ? 'PUT' : 'POST'

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contato.value)
    })

    if (!response.ok) {
      const erro = await response.json()
      throw new Error(erro.message || 'Erro ao salvar')
    }

    const data = await response.json()
    console.log('Contato salvo:', data)
    router.push('/contatos')
  } catch (error) {
    console.error('Erro ao salvar contato:', error)
  }
}
</script>


