// Importando as bibliotecas
import Sequelize from 'sequelize';

// Importando os models
import User from '../app/models/UserModel';
import Recipient from '../app/models/RecipientModel';
import Deliverer from '../app/models/DelivererModel';
import File from '../app/models/FileModel';
import Order from '../app/models/OrderModel';

// Importando as configuraçõs da DB
import databaseConfig from '../config/database';

const models = [User, Recipient, Deliverer, File, Order];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
