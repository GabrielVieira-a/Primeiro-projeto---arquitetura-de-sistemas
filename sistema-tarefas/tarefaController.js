const { criarTarefa } = require('./tarefa');

let tarefas = [];
let id = 1;

exports.criar = (req, res) => {
    const { titulo, descricao, status } = req.body;
    const tarefa = criarTarefa(id++, titulo, descricao, status);
    tarefas.push(tarefa);
    res.json(tarefa);
};

exports.listar = (req, res) => {
    res.json(tarefas);
};

exports.atualizar = (req, res) => {
    const tarefa = tarefas.find(t => t.id == req.params.id);
    if (tarefa) {
        tarefa.titulo = req.body.titulo;
        tarefa.descricao = req.body.descricao;
        tarefa.status = req.body.status;
        res.json(tarefa);
    } else {
        res.status(404).send("Não encontrada");
    }
};

exports.deletar = (req, res) => {
    tarefas = tarefas.filter(t => t.id != req.params.id);
    res.send("Removida");
};