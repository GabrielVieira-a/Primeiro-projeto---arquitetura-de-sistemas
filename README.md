# 📌 Sistema de Gerenciamento de Tarefas e Usuários

## 📖 Descrição

Este projeto consiste em uma aplicação simples desenvolvida em Node.js com o objetivo de gerenciar tarefas e usuários. O sistema permite realizar operações básicas de CRUD (Create, Read, Update e Delete), atendendo aos requisitos da disciplina de Projeto e Arquitetura de Sistemas.

---

## 🎯 Objetivo

O sistema foi desenvolvido para aplicar na prática conceitos de arquitetura de software, utilizando:

* Padrões GRASP
* Padrões GoF
* Estrutura baseada em orientação a objetos

---

## 👥 Integrantes

* Gabriel (adicione o nome da dupla aqui)

---

## ⚙️ Tecnologias utilizadas

* Node.js
* Express
* JavaScript

---

## 🧩 Funcionalidades

### 🔹 Tarefas

* Criar tarefa
* Listar tarefas
* Atualizar tarefa
* Deletar tarefa

### 🔹 Usuários

* Criar usuário
* Listar usuários
* Atualizar usuário
* Deletar usuário

---

## 🏗️ Padrões Utilizados

### ✅ GRASP

* **Controller:** Responsável por gerenciar as requisições (Controllers)
* **Information Expert:** Classes responsáveis por seus próprios dados

### ✅ GoF

* **Singleton:** Utilizado para manter uma única instância das listas de dados
* **Factory Method:** Utilizado na criação dos objetos (tarefas e usuários)

---

## 🚀 Como executar o projeto

### 1. Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Acessar a pasta do projeto

```bash
cd sistema-tarefas
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar o servidor

```bash
node server.js
```

O servidor será iniciado em:

```
http://localhost:3000
```

---

## 🧪 Endpoints da API

### 📌 Tarefas

* **POST** `/tarefas` → Criar tarefa
* **GET** `/tarefas` → Listar tarefas
* **PUT** `/tarefas/:id` → Atualizar tarefa
* **DELETE** `/tarefas/:id` → Remover tarefa

---

### 📌 Usuários

* **POST** `/usuarios` → Criar usuário
* **GET** `/usuarios` → Listar usuários
* **PUT** `/usuarios/:id` → Atualizar usuário
* **DELETE** `/usuarios/:id` → Remover usuário

---

## 📸 Evidências

As evidências de execução (prints do sistema) foram geradas utilizando ferramentas como Postman, demonstrando o funcionamento completo das operações CRUD.

---

## 📌 Considerações Finais

Este projeto demonstra a aplicação prática de conceitos fundamentais de desenvolvimento de software, com foco em organização, reutilização de código e boas práticas de arquitetura.

---
