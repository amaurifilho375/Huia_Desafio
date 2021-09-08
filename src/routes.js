const { Router } = require('express');
const UserController = require('./app/controllers/UserController.js');

const LoteController = require('./app/controllers/LoteController.js');


const ProductController = require('./app/controllers/ProductController.js');

const ClienteController = require('./app/controllers/ClienteController.js');


const VendedorController = require('./app/controllers/VendedorController.js');


const PedidoController = require('./app/controllers/PedidoController.js');


const LoginController = require('./app/controllers/LoginController.js');


const jwt = require('jsonwebtoken');
const SECRET = require('./app/hash/md5.json')



const routes = Router();

console.log('oiii')
routes.get('/users', UserController.index);

routes.get('/users/:id', UserController.show);

routes.post('/users', UserController.store);

routes.put('/users/:id', UserController.update);

routes.delete('/users/:id', UserController.destroy);



routes.get('/lotes', LoteController.index);

routes.get('/lotes/:id', LoteController.show);

routes.post('/lotes', LoteController.store);

routes.put('/lotes/:id', LoteController.update);

routes.delete('/lotes/:id', LoteController.destroy);


routes.post('/lotes/:lote_id/products', ProductController.store);
routes.get('/lotes/:lote_id/products', ProductController.index);

routes.get('/produtos/:id', PedidoController.show);
routes.put('/produtos/:id', PedidoController.update);
routes.delete('/produtos/:id', PedidoController.destroy);



routes.post('/clientes', ClienteController.store);

routes.get('/clientes', ClienteController.index);



routes.post('/vendedores', VendedorController.store);

routes.get('/vendedores', VendedorController.index);



routes.post('/produtos/pedidos', PedidoController.store);
routes.get('/produtos/:produto_id/pedidos', PedidoController.index);
routes.get('/pedidos/:id', PedidoController.show);
routes.put('/pedidos/:id', PedidoController.update);
routes.delete('/pedidos/:id', PedidoController.destroy);



function verifyJWT(req, res, next) {

    const token = req.headers['x-access-token'];
   // const index = blacklist.findIndex(item => item ===token);

   // if (index !== -1) return res.status(401).send({error: 'efetue o Login!'});

    jwt.verify(token, SECRET.secret, (err, decoded)=>{
          //if(err) return res.status(401).end();
          
        if(err) return res.status(401).send({error: 'você não tem autorização!'});
          
          req.userIddd = decoded.id;
          next();
          
    })
    

  }

routes.post('/login', LoginController.store);


routes.get('/painel',verifyJWT, LoginController.painel);

//const blacklist = [];
//routes.get('/logout', function(req, res){
    //  blacklist.push(req.headers['x-access-token']) 
  //    res.end();              

//});




routes.get('/lista', LoginController.lista);


module.exports = routes;