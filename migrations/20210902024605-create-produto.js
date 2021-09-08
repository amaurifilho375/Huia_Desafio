module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('produtos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    lote_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {model: 'lotes', key: 'id'},
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    nome: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    cor: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    valor: {
      allowNull: false,
      type: Sequelize.DOUBLE,
    },
    descricao: {
      allowNull: false,
      type: Sequelize.TEXT,
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
  down: queryInterface => queryInterface.dropTable('produtos'),
};