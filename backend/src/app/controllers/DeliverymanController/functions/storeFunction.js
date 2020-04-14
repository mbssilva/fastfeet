import Deliverer from '../../../models/DelivererModel';

export default async (req, res) => {
  const { id } = req.params;

  const deliverer = await Deliverer.findByPk(id);

  if (!deliverer)
    return res.status(400).json({ error: 'This id is not valid' });

  return res.json(deliverer);
};
