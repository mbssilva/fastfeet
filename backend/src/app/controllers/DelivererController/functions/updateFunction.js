// Importando models
import Deliverer from '../../../models/DelivererModel';

export default async (req, res) => {
  const deliverer = await Deliverer.findByPk(req.userId);

  if (!deliverer) {
    return res.status(400).json({ error: 'This deliverer does not exist' });
  }

  const { oldEmail, newEmail, oldName, newName, avatar_id } = req.body;

  if (oldName) {
    if (oldName !== deliverer.name) {
      return res.status(400).json({ error: 'The old name doesn\'t match' });
    }

    deliverer.name = newName;
  }

  if (oldEmail) {
    if ( await Deliverer.findOne({ where: { email: newEmail }}) ) {
      return res.status(400).json({ error: 'There is already a deliverer with this e-mail' });
    }

    if (oldEmail !== deliverer.email) {
      return res.status(400).json({ error: 'The old e-mail doesn\'t match' });
    }

    deliverer.email = newEmail;
  }

  if (avatar_id) {
    deliverer.avatar_id = avatar_id;
  }

  await deliverer.save();

  return res.json(deliverer);
}
