<template>
  <div>
    <h1>Todos os Contatos</h1>

    <div v-if="contatos.length === 0">
      Nenhum contato encontrado.
    </div>

    <ul v-else>
      <li v-for="contato in contatos" :key="contato.id">
        <strong>{{ contato.nome }}</strong><br />
        Telefone: {{ contato.telefone }}<br />
        Email: {{ contato.email }}<br />

        <!-- Botões -->
        <button @click="editarContato(contato.id)">Editar</button>
        <button @click="excluirContato(contato.id)">Excluir</button>

        <hr />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const contatos = ref([])
const router = useRouter()

// Carregar contatos
async function carregarContatos() {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/contatos')
    if (!response.ok) throw new Error('Erro ao buscar contatos')
    contatos.value = (await response.json()).sort((a, b) => a.nome.localeCompare(b.nome))
  } catch (error) {
    console.error('Erro ao buscar contatos:', error)
  }
}

onMounted(carregarContatos)

// Editar contato
function editarContato(id) {
  router.push(`/contatos/editar/${id}`)
}

// Excluir contato
async function excluirContato(id) {
  if (!confirm('Tem certeza que deseja excluir este contato?')) return

  try {
    const response = await fetch(`http://127.0.0.1:8000/api/contatos/${id}`, {
      method: 'DELETE'
    })

    if (!response.ok) throw new Error('Erro ao excluir contato')

    // Atualiza a lista após excluir
    contatos.value = contatos.value.filter(c => c.id !== id)
  } catch (error) {
    console.error('Erro ao excluir contato:', error)
  }
}
</script>
