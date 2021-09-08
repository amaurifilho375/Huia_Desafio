module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('vendedores', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
   
    nome: {
      allowNull: false,
      type: Sequelize.STRING,
    },

    email: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    senha: {
      allowNull: false,
      type: Sequelize.STRING,
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
  down: queryInterface => queryInterface.dropTable('vendedores'),
};