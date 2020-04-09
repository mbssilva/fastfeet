import Order from '../../../models/OrderModel';

export default async (req, res) => {
  const { id } = req.body;

  const order = await Order.findByPk(id);

  if (!order) {
    return res.status(400).json({ error: 'This order does not exist' });
  }

  const { product } = req.body;

  if (product) order.product = product;

  await order.save();

  return res.json(order);
}
