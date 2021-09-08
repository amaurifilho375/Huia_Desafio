const { Produto } = require('../models');

const { Vendedor } = require('../models');

const { Pedido } = require('../models');

const jwt = require('jsonwebtoken');
const chave = require('../hash/md5.json')


class LoginController {
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

  async store(req, res) {
    try {
    
       
       
       const { email, senha} = req.body;
      
       const Existe_vendedor = await Vendedor.findOne({where: {email}});

       if(!Existe_vendedor){
        return res.status(400).json({error: 'email não cadastrado!'})

     }

       if(Existe_vendedor.senha == senha ){
        
        const token = jwt.sign({id: Existe_vendedor.id}, chave.secret,{
            expiresIn: 86400
           
        })
      
        return res.json({token})

     }

       return res.status(401).end();

     
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
  async painel(req, res) {
      
    try {
           
      return res.json({acesso: 'permitido'});
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async lista(req, res) {
   
  try {
   
  
    Pedido.findAll({order: [['valor_total', 'DESC' ]]}).then(function (pedidos) { 
        
        const amplitude = 5
        const {pag} = req.query
        const ini = (pag *amplitude ) -(amplitude )
        const fim = amplitude * pag

        let paginas = pedidos
        const devolve = paginas.slice(ini,fim)
       
        return res.json(devolve)
         
     })

   
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

 
}

module.exports = new LoginController();