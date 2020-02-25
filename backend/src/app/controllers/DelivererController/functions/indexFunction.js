// Importando models
import Deliverer from '../../../models/DelivererModel';
import File from '../../../models/FileModel';


export default async (req, res) => {
  const { page = 1 } = req.query;

  const deliverers = await Deliverer.findAndCountAll({
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

  if (page > Math.trunc(1 + deliverers.count/5)) {
    return res
      .status(400)
      .json({
        error: `You exceeded the current maximum number of pages: ${Math.trunc(1 + deliverers.count/5)}`
      });
  }

  return res.json(deliverers.rows);
}
