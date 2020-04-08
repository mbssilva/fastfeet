// Importando models
import Deliverer from '../../../models/DelivererModel';

export default async (req, res) => {
  const { name, email, avatar_id } = req.body;

  const deliverer = await Deliverer.findOne({ where: { email }});

  if (deliverer) return res.status(400).json({
    error: 'Deliverer already exists'
  });

  const { id } = await Deliverer.create({
    name,
    email,
    avatar_id
  });

  return res.json({ id, name, email, avatar_id });
}
