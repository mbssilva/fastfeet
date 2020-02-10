import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        street: Sequelize.STRING,
        without_number: Sequelize.VIRTUAL,
        number: Sequelize.STRING,
        complement: Sequelize.STRING,
        state: Sequelize.STRING,
        city: Sequelize.STRING,
        cep: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', (recipient) => {
      if (recipient.without_number) recipient.number = null;
    });

    return this;
  }


}

export default Recipient;
