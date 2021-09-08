const { Cliente } = require('../models');


class ClienteController {
  async index(req, res) {
    try {
        const clientes = await Cliente.findAll();
  
        return res.json(clientes);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
  }

  async show(req, res) {
    try {
      const cliente = await Cliente.findByPk(req.params.id);

      return res.json(cliente);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
    
       const { nome, cpf, data_nascimento} = req.body;
     
       const Existe_cliente = await Cliente.findOne({where: {cpf}});

        if(Existe_cliente){
           
           return res.json({error: 'cadastro ja existe'});

        }

        const cliente = await Cliente.create({
               nome,
               cpf,
               data_nascimento,
            }); 
    

      return res.json(cliente);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const cliente = await Cliente.findByPk(req.params.id);

      await cliente.update(req.body);

      return res.json({ cliente });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const cliente = await Cliente.findByPk(req.params.id);
      

      await cliente.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new ClienteController();