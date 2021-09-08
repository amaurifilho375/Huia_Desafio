module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn("clientes", "pedido_id", {
    type: Sequelize.INTEGER,
    references: { model: 'pedidos', key: 'id'},
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull:true
  }),
 
  down: (queryInterface) => queryInterface.removeColumn('clientes', 'pedido_id')
};