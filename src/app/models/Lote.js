module.exports = (sequelize, DataTypes) => {
    const Lote = sequelize.define('Lote', {
      quantidade_produto: DataTypes.INTEGER,
      data_fabricacao: {
        type: DataTypes.DATE,
       // allowNull: false,
       // validate: {
         // notNull: {
           // msg: 'Por favor digite uma data'
          //}
        //},
      },
    
    });
  
    Lote.associate = function(models) {
      
      Lote.hasMany(models.Produto, { as: 'father'})
    };



    return Lote;
  };