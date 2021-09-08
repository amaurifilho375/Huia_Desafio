module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('pedidos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
   
    valor_total: {
      allowNull: false,
      type: Sequelize.DOUBLE,
    },

    
    
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('pedidos'),
};