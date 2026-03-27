const express = require('express');
const app = express();
app.use(express.json());

const tarefaController = require('./tarefaController');
const usuarioController = require('./usuarioController');

// ROTAS TAREFAS
app.post('/tarefas', tarefaController.criar);
app.get('/tarefas', tarefaController.listar);
app.put('/tarefas/:id', tarefaController.atualizar);
app.delete('/tarefas/:id', tarefaController.deletar);

// ROTAS USUÁRIOS
app.post('/usuarios', usuarioController.criar);
app.get('/usuarios', usuarioController.listar);
app.put('/usuarios/:id', usuarioController.atualizar);
app.delete('/usuarios/:id', usuarioController.deletar);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});