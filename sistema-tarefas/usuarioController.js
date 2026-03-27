const { criarUsuario } = require('./usuario');

let usuarios = [];
let id = 1;

exports.criar = (req, res) => {
    const { nome, email } = req.body;
    const usuario = criarUsuario(id++, nome, email);
    usuarios.push(usuario);
    res.json(usuario);
};

exports.listar = (req, res) => {
    res.json(usuarios);
};

exports.atualizar = (req, res) => {
    const usuario = usuarios.find(u => u.id == req.params.id);
    if (usuario) {
        usuario.nome = req.body.nome;
        usuario.email = req.body.email;
        res.json(usuario);
    } else {
        res.status(404).send("Não encontrado");
    }
};

exports.deletar = (req, res) => {
    usuarios = usuarios.filter(u => u.id != req.params.id);
    res.send("Removido");
};