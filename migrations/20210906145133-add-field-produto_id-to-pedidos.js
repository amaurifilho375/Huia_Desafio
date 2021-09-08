module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn("pedidos", "produto_id", {
    type: Sequelize.INTEGER,
    references: { model: 'vendedores', key: 'id'},
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull:true
  }),
 
  down: (queryInterface) => queryInterface.removeColumn('pedidos', 'produto_id')
};