<template>
  <div>
    <h1>Pesquisar Contatos</h1>
    <input v-model="termo" @input="filtrar" placeholder="Digite um nome, telefone ou email..." />

    <ul v-if="resultados.length">
      <li v-for="contato in resultados" :key="contato.id">
        <strong>{{ contato.nome }}</strong><br />
        Telefone: {{ contato.telefone }}<br />
        Email: {{ contato.email }}<br />

        <!-- Botões -->
        <button @click="editarContato(contato.id)">Editar</button>
        <button @click="excluirContato(contato.id)">Excluir</button>
        <hr />
      </li>
    </ul>

    <div v-else>
      Nenhum resultado.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const termo = ref('')
const resultados = ref([])
let todos = []
const router = useRouter()

// Carrega todos os contatos
onMounted(async () => {
  const response = await fetch('http://127.0.0.1:8000/api/contatos')
  if (!response.ok) return
  todos = await response.json()
})

// Filtra localmente os resultados
function filtrar() {
  const t = termo.value.trim().toLowerCase()

  if (t === '') {
    resultados.value = [] // Campo vazio: esconde tudo
    return
  }

  resultados.value = todos.filter(c =>
    c.nome.toLowerCase().includes(t) ||
    c.email.toLowerCase().includes(t) ||
    c.telefone.toLowerCase().includes(t)
  )
}

// Redireciona para editar
function editarContato(id) {
  router.push(`/contatos/editar/${id}`)
}

// Exclui o contato e atualiza a lista
async function excluirContato(id) {
  if (!confirm('Deseja realmente excluir este contato?')) return

  try {
    const response = await fetch(`http://127.0.0.1:8000/api/contatos/${id}`, {
      method: 'DELETE'
    })
    if (!response.ok) throw new Error('Erro ao excluir')

    // Atualiza a lista original e os resultados
    todos = todos.filter(c => c.id !== id)
    filtrar() // re-filtra os resultados com base no termo atual
  } catch (error) {
    console.error('Erro ao excluir:', error)
  }
}
</script>
