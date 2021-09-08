const { Cliente } = require('../models');
const { Pedido } = require('../models');
const { Vendedor } = require('../models');
const { Produto } = require('../models');

class PedidoController {
  async index(req, res) {
    try {
     
      const {produto_id} = req.params

      const produto = await Produto.findByPk(produto_id, {
        include: {association: 'pedidos'}

      });

      
      return res.json(produto);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const pedido = await Pedido.findByPk(req.params.id);

      return res.json(pedido);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
    
        
        const {codigo_vendedor} = req.query
        const {codigo_produto} = req.query
            
        const { nome, cpf,valor_total} = req.body;
        const Existe_vendedor = await Vendedor.findByPk(codigo_vendedor);

        if(!Existe_vendedor){
           return res.status(400).json({error: 'codigo do vendedor estar errado!'})
        }

       const vendedor_id = Existe_vendedor.id
       const Existe_cliente = await Cliente.findOne({where: {cpf}});
       

        if(!Existe_cliente){
           return res.status(400).json({error: 'por favor faça seu cadastro!'})

        }
     
       const Existe_produto = await Produto.findByPk(codigo_produto);

       if(!Existe_produto){
        return res.status(400).json({error: 'codigo do produto estar errado!'})

     }

        const produto_id = Existe_produto.id

        const pedido = await Pedido.create({
               
            valor_total,
            produto_id,
            VendedorId: vendedor_id,

         }); 
              
        
        const pedido_id = pedido.id

        const cliente = await Existe_cliente.update({
               
              pedido_id
        }); 
    

      return res.json(cliente);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const pedido = await Pedido.findByPk(req.params.id);

      await pedido.update(req.body);

      return res.json({ pedido });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const pedido = await Pedido.findByPk(req.params.id);
      
      await pedido.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new PedidoController();