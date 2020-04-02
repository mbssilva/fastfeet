// Importando models
import Deliverer from '../../../models/DelivererModel';
import File from '../../../models/FileModel';

export default async (req, res) => {
  const id = req.userId;

  const deliverer = await Deliverer.findByPk(id);

  if (!deliverer) {
    return res.status(400).json({ error: 'This deliverer does not exist' });
  }

  if (deliverer.avatar_id) {
    const avatarFile = await File.findByPk(deliverer.avatar_id);

    if (avatarFile) {
      await avatarFile.destroy({ where: { id: deliverer.avatar_id } });
    }
  }

  await Deliverer.destroy({
    where: {
      id
    }
  });

  return res.json({ deleted: deliverer });
}
