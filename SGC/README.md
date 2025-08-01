
# Sistema de Gerenciamento de Contatos

Projeto completo com frontend em Vue 3 e backend em Laravel 10, implementando um CRUD de contatos via API REST.

## 📦 Tecnologias Utilizadas

- **Frontend:** Vue.js 3, JavaScript, Vite
- **Backend:** Laravel 10, PHP 8+, MySQL
- **Comunicação:** API RESTfull

---

## ⚙️ Requisitos

| Tecnologia  | Versão Recomendável |
|-------------|----------------------|
| PHP         | >= 8.1               |
| Composer    | >= 2.x               |
| Node.js     | >= 18.x              |
| MySQL       | >= 5.7               |
| Laravel     | >= 10                |
| Vue.js      | >= 3                 |

---

## 🚀 Como rodar o projeto localmente

### 🔧 Clonando o projeto

```bash
git clone https://github.com/001986josevaldo/SGC.git
cd SGC
```

### 📂 Backend (Laravel)

```bash
cd backend/contatos-api

# Instalar dependências PHP
composer install

# Copiar .env e gerar chave
cp .env.example .env
php artisan key:generate

# Configurar conexão com banco no .env
# DB_DATABASE=contatos_db
# DB_USERNAME=root
# DB_PASSWORD=

Crie o banco no MySQL:

CREATE DATABASE contatos_db;

# Rodar as migrações
php artisan migrate

# Iniciar o servidor backend
php artisan serve
```

### 🎨 Frontend (Vue.js)

```bash
cd frontend

# Instalar dependências
npm install

# Iniciar o servidor frontend
npm run dev
```

---

## 🔗 Endpoints da API

| Método | Rota                  | Ação                 |
|--------|------------------------|----------------------|
| GET    | /api/contatos         | Listar contatos      |
| POST   | /api/contatos         | Criar novo contato   |
| PUT    | /api/contatos/{id}    | Atualizar contato    |
| DELETE | /api/contatos/{id}    | Excluir contato      |

---

## 📝 Observações

- Certifique-se de que o backend esteja rodando em `http://127.0.0.1:8000`
- O frontend deve estar configurado para consumir a API nesse mesmo endereço
- Ajuste o CORS no Laravel, se necessário, no arquivo `app/Http/Middleware/HandleCors.php` ou usando o pacote `barryvdh/laravel-cors`

---

## 📫 Contato

Desenvolvido por **Josevaldo Moreira**  
GitHub: [@001986josevaldo](https://github.com/001986josevaldo)

email: josevaldomr@gmail.com / josevaldo.m@unemat.br
