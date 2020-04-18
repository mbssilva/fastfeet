import Deliverer from '../../../models/DelivererModel';
import File from '../../../models/FileModel';

export default async (req, res) => {
  const { id } = req.params;

  const deliverer = await Deliverer.findByPk(id, {
    attributes: ['id', 'name', 'email', 'avatar_id', 'createdAt'],
    include: [
      {
        model: File,
        as: 'avatar',
        attributes: ['name', 'path', 'url']
      }
    ]
  });

  if (!deliverer)
    return res.status(400).json({ error: 'This id is not valid' });

  return res.json(deliverer);
};
