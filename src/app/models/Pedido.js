module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('Pedido', {
     
       valor_total: DataTypes.DOUBLE,
        

    });
  
    Pedido.associate = function(models){
         
        Pedido.hasOne(models.Cliente, {foreignKey: 'pedido_id', as: 'father'})
    }

   
    Pedido.associate = function(models){
       
         Pedido.belongsTo(models.Vendedor, {foreignKey: 'vendedor_id', as: 'child'})
    }

    Pedido.associate = function(models){
       
         Pedido.belongsTo(models.Produto, {foreignKey: 'produto_id', as: 'child'})
    }


    return Pedido;
  };