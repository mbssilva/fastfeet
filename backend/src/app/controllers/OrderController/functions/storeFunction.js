import Order from '../../../models/OrderModel';

export default async (req, res) => {
  const { recipient_id, deliveryman_id, product } = req.body;

  const orderExist = await Order.findOne({ where: {
    recipient_id,
    deliveryman_id,
    product
  }});

  if (orderExist) {
    return res.status(400).json({ error: 'This order has already been storaged' });
  }

  const order = await Order.create({
    recipient_id,
    deliveryman_id,
    product
  });

  return res.json(order);
}
