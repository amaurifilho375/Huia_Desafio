module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('clientes', {
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

    cpf: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    data_nascimento: {
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
  down: queryInterface => queryInterface.dropTable('clientes'),
};