module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn("pedidos", "vendedor_id", {
    type: Sequelize.INTEGER,
    references: { model: 'vendedores', key: 'id'},
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull:true
  }),
 
  down: (queryInterface) => queryInterface.removeColumn('pedidos', 'vendedor_id')
};