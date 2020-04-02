import { Op } from 'sequelize';

// Importando models
import Deliverer from '../../../models/DelivererModel';
import File from '../../../models/FileModel';

export default async (req, res) => {
  const { page = 1 } = req.query;

  const { deliverer } = req.query;

  let deliverers;

  if (deliverer) {
    for (let i = 0; i < deliverer.length; i += 1) {
      if (deliverer[i] === 'ç' || deliverer[i] === 'Ç') deliverer[i] = 'c';
    }

    deliverers = await Deliverer.findAndCountAll({
      order: [['id', 'ASC']],
      where: {
        name: {
          [Op.iLike]: `%${deliverer}%`,
        },
      },
      limit: 5,
      offset: (page - 1)*5,
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url']
        }
      ]
    });
  } else {
    deliverers = await Deliverer.findAndCountAll({
      order: [['id', 'ASC']],
      limit: 5,
      offset: (page - 1)*5,
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url']
        }
      ]
    });
  }

  if (page > Math.ceil(deliverers.count/5)) {
    return res
      .status(400)
      .json({
        error: `You exceeded the current maximum number of pages: ${Math.ceil(deliverers.count/5)}`
      });
  }

  return res.json(deliverers.rows);
}
