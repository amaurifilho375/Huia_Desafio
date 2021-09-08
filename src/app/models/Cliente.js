module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
      nome: DataTypes.STRING,
     // cor: {
       // type: DataTypes.STRING,
       // allowNull: false,
       // validate: {
         // notNull: {
           // msg: 'Por favor digite uma data'
          //}
        //},
     // },
       cpf: DataTypes.STRING,
       data_nascimento: DataTypes.DATE,
       pedido_id: DataTypes.INTEGER,

  //  static associate(models){
      //  this.belongsTo(model.Lote, {foreignKey: 'lote_id', as: 'lote' });

   // }

   

    });
  
    Cliente.associate = function(models){
        
         Cliente.belongsTo(models.Pedido, {foreignKey: 'pedido_id', as: 'child'})
     }


    return Cliente;
  };