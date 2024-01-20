const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNum: DataTypes.STRING,
    });
    (async () => {
      await sequelize.sync({ force: true });
      // As funções vão aqui
      console.log('Chamada da função assincrona do Sequelize');
  })();
    return User;
  };
  
  module.exports = UserModel;