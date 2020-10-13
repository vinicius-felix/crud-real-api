const db = require('../config/database');

// Add
exports.createRegister = async (req, res) => {
  try {
  const { tx_nome, tx_cpf } = req.body;
  const response = await db.query(
    'INSERT INTO teste_vinicius (tx_nome, tx_cpf) VALUES ($1, $2)', [tx_nome, tx_cpf],
  );

  res.status(200).send({
    message: 'Cadastro adicionado com sucesso',
    body: {
      tx_nome,
      tx_cpf
    }
  });
  } catch(err) {
    return res.status(400).send({ error: 'Erro ao registrar novo cadastro!', err});
  }
};


// Lista
exports.listAllRegisters = async (req, res) => {
  const response = await db.query(
    'SELECT * FROM teste_vinicius ORDER BY id DESC',
  );
  res.status(200).send(response.rows);
};


// Seleciona
exports.findRegisterById = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await db.query(
    'SELECT * FROM teste_vinicius WHERE id = $1', [id],
  );
  res.status(200).send(response.rows);
};


// Atualiza
exports.updateRegisterById = async (req, res) => {
  const { id, tx_nome, tx_cpf } = req.body;
  const response = await db.query(
    'UPDATE teste_vinicius SET tx_nome = $1, tx_cpf = $2 WHERE id = $3', [tx_nome, tx_cpf, id],
  );
  res.status(200).send({ message: 'Cadastro atualizado com sucesso!' });
};


// Remove
exports.deleteRegisterById = async (req, res) => {
  let { id } = req.params.id;
  id = parseInt(req.params.id);
  await db.query(
    'DELETE FROM teste_vinicius WHERE id = $1', [id],
  );
  res.status(200).send({ message: 'Cadastro removido com sucesso!' });
};