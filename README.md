# To Do List (Laravel com Sail Docker + React)

## Sobre o Projeto

Aplicação **To Do List** desenvolvida com **Laravel**, **Sail (Docker)** e **React (Vite)**.  
O objetivo deste projeto é gerenciar tarefas de forma simples e intuitiva, permitindo criar, listar, atualizar e excluir tarefas.

## 🚀 Tecnologias Utilizadas

**Backend**
- [Laravel 12+](https://laravel.com/)
- [Laravel Sail](https://laravel.com/docs/sail) — ambiente Docker pronto para desenvolvimento
- PostgreSQL (via container)
- Eloquent ORM

**Frontend**
- [React 19+](https://react.dev/)
- [Vite](https://vitejs.dev/) — build rápido de front-end
- [Tailwind CSS](https://tailwindcss.com/) — estilização moderna e responsiva

**Infraestrutura**
- Docker + WSL2 (para melhor desempenho no Windows)
---

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- (Opcional) PHP e Composer, se quiser rodar comandos fora do Docker

---

## ⚙️ Subindo o Projeto com Laravel Sail

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto
```

### 2. Copiar o arquivo .env.example para .env
```bash
cp .env.example .env
```

Caso o projeto clonado não possua a pasta vendor, instale as dependências com:
```
composer install
```

### 3. Criar atalho (apelido) para o ./vendor/bin/sail
```bash
alias sail='sh $([ -f sail ] && echo sail || echo vendor/bin/sail)'
```
Para esse atalho de alias funcionar, você deve utilizar um terminal Linux na sua IDE.

### 4. Subir os containers com Docker
```bash
sail up -d
```
Se o comando acima falhar porque sail ainda não foi instalado, execute:
```bash
php artisan sail:install
```

### 5. Gerar a chave da aplicação
```bash
sail artisan key:generate
```

### 6. Rodar as migrations (e seeders, se necessário)
```bash
sail artisan migrate -seed
```

### 7. Instale as dependências do Node
```bash
sail npm install
```

### 8. Rode o Vite em modo desenvolvimento (hot reload)
``` bash
sail npm run dev
```

### 9. Acesse no navegador:
```
http://localhost
```
