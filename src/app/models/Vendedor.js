module.exports = (sequelize, DataTypes) => {
    const Vendedor = sequelize.define('Vendedor', {
      nome: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
       // allowNull: false,
       // validate: {
         // notNull: {
           // msg: 'Por favor digite uma data'
          //}
        //},
      },

      
      senha: {
        type: DataTypes.STRING,
       // allowNull: false,
       // validate: {
         // notNull: {
           // msg: 'Por favor digite uma data'
          //}
        //},
      },
      
      
     // tableName: 'Vendedores',
     
       //pedido_id: DataTypes.INTEGER,

  //  static associate(models){
      //  this.belongsTo(model.Lote, {foreignKey: 'lote_id', as: 'lote' });

   // }

    
   

    },
     {
      //freezeTableName: true
      tableName: 'vendedores'
      }
    
    );
  
    Vendedor.associate = function(models){
        //  this.belongsTo(model.Lote, {foreignKey: 'lote_id', as: 'lote' });
         Vendedor.hasMany(models.Pedido, { as: 'father'})
    }


    return Vendedor;
  };