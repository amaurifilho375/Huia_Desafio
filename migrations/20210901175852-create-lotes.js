module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('lotes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    quantidade_produto: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    data_fabricacao: {
      allowNull: false,
      type: Sequelize.DATE,
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
  down: queryInterface => queryInterface.dropTable('lotes'),
};