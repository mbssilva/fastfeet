// Importando as bibliotecas
import Sequelize from 'sequelize';

// Importando os models
import User from '../app/models/UserModel';
import Recipient from '../app/models/RecipientModel';

// Importando as configuraçõs da DB
import databaseConfig from '../config/database';

const models = [User, Recipient];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
