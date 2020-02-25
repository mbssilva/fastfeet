import Order from '../../../models/OrderModel';

export default async (req, res) => {
  const order = await Order.findByPk(req.params.id);

  if (!order) {
    return res.status(400).json({ error: 'This order does not exist' });
  }

  if (order.signature_id) {
    return res.status(400).json({ error: 'This order has already been delivered' });
  }

  order.canceled_at = new Date();

  await order.save();

  return res.json(order);
}
