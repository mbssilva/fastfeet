import { setSeconds, setMinutes, setHours, setMilliseconds } from 'date-fns';
import Order from '../../../models/OrderModel';

export default async (req, res) => {
  const order = await Order.findByPk(req.params.id);

  if (!order) {
    return res.status(400).json({ error: 'This order does not exist' });
  }

  const { product } = req.body;

  if (product) order.product = product;

  await order.save();

  return res.json(order);
}
