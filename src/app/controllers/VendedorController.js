const { Vendedor } = require('../models');


class VendedorController {
  async index(req, res) {
    try {
        const vendedores = await Vendedor.findAll();
  
        return res.json(vendedores);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
  }

  async show(req, res) {
    try {
      const vendedor = await Vendedor.findByPk(req.params.id);

      return res.json(vendedor);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
    
       const { nome, email, senha} = req.body;
       
       const Existe_vendedor = await Vendedor.findOne({where: {email}});

        if(Existe_vendedor){
           return res.json({error: 'cadastro ja existe'});

        }

        const vendedor = await Vendedor.create({
               nome,
               email,
               senha,
            }); 


      return res.json(vendedor);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const vendedor = await Vendedor.findByPk(req.params.id);

      await vendedor.update(req.body);

      return res.json({ vendedor });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const vendedor = await Vendedor.findByPk(req.params.id);
      

      await vendedor.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new VendedorController();