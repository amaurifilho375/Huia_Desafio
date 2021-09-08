module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
      nome: DataTypes.STRING,
      cor: {
        type: DataTypes.STRING,
       
      },
       valor: DataTypes.DOUBLE,
       descricao: DataTypes.TEXT,
       lote_id: DataTypes.INTEGER,

    });
  
    Produto.associate = function(models){
        //  this.belongsTo(model.Lote, {foreignKey: 'lote_id', as: 'lote' });
         Produto.belongsTo(models.Lote, {foreignKey: 'lote_id', as: 'child'})
    }

    Produto.associate = function(models){
      //  this.belongsTo(model.Lote, {foreignKey: 'lote_id', as: 'lote' });
      Produto.hasMany(models.Pedido, { as: 'pedidos'})
    }



    return Produto;
  };