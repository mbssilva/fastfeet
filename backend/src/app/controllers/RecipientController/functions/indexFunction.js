import { Op } from 'sequelize';

// Importando models
import Recipient from '../../../models/RecipientModel';

export default async (req, res) => {
  const { street, city, state } = req.body;
  const { name } = req.query;

  let recipient;

  if (name) {
    recipient = await Recipient.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
        street: {
          [Op.iLike]: `${street || '%'}`,
        },
        city: {
          [Op.iLike]: `${city || '%'}`,
        },
        state: {
          [Op.iLike]: `${state || '%'}`,
        },
      },
    });
  } else {
    recipient = await Recipient.findAll({});
  }

  return res.json(recipient);
};
