// Importando as bibliotecas
import Sequelize from 'sequelize';
import mongoose from 'mongoose';

// Importando os models
import User from '../app/models/UserModel';
import Recipient from '../app/models/RecipientModel';
import Deliverer from '../app/models/DelivererModel';
import File from '../app/models/FileModel';
import Order from '../app/models/OrderModel';
import Problem from '../app/models/ProblemModel';

// Importando as configuraçõs da DB
import databaseConfig from '../config/database';
import mongoConfig from '../config/mongo';

const models = [User, Recipient, Deliverer, File, Order, Problem];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(model => model.associate && model.associate(this.connection.models));
    console.log("Base de dados conectada com sucesso");
  }

  async mongo() {
    await mongoose.connect(mongoConfig.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });

    // .catch(err => {
    //   console.log('error connecting to the database');
    //   process.exit(); // Usando a try catch captura-se o erro (caso exista)
    // });

    console.log("MongoDB conectado com sucesso");
  }
}

export default new Database();
