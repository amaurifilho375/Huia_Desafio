module.exports = {
  
    dialect: 'sqlite',
    host: '127.0.0.1',
    //port: 3306,
    username: 'amauri',
    password: 'amauri',
    storage: './database.sqlite',
    database: 'api',
    //operatorAliases: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  
};