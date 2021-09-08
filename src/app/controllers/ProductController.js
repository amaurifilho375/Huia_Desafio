const { Produto } = require('../models');
const { Lote } = require('../models');

class ProductController {
  async index(req, res) {
    try {
     
      const {lote_id} = req.params

      const lote = await Lote.findByPk(lote_id, {
        include: {association: 'father'}

      });

      return res.json(lote);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const product = await Product.findByPk(req.params.id);

      return res.json(product);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
    
        
    
      console.log('entrou no store:')
       const {lote_id} = req.params;
       const {nome, cor, valor, descricao} = req.body;
       console.log(lote_id);
       console.log(nome);

       const lote = await Lote.findByPk(lote_id);

        if(!lote){
           return res.status(400).json({error: 'lote não encontrado'})

        }

        const product = await Produto.create({
               nome,
               cor,
               valor,
               descricao,
               lote_id

        }); 

        
      //const product = await Product.create(req.body);
      
      console.log('SALVOU PRODUTO:'); 
      console.log(product.nome); 
      console.log(product.descricao);
      console.log(product.lote_id);     

      return res.json(product);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const product = await Product.findByPk(req.params.id);

      await product.update(req.body);

      return res.json({ product });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const product = await Product.findByPk(req.params.id);
      

      await product.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new ProductController();