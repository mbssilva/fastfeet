import Problem from '../../../models/ProblemModel';
import Order from '../../../models/OrderModel';

export default async (req, res) => {
  const { delivery_id, description } = req.body;

  const order = await Order.findByPk(delivery_id);
  const issue = await Problem.findOne({ where: {delivery_id} });

  if (issue) {
    return res.status(400).json({ error: 'This problem has already been storage' });
  }

  if (!order) {
    return res.status(400).json({ error: 'This order does not exist' });
  }

  if (order.canceled_at) {
    return res.status(400).json({ error: 'This order has already been canceled' });
  }

  if (order.signature_id) {
    return res.status(400).json({ error: 'This order has already been delivered' });
  }

  const problem = await Problem.create({
    delivery_id,
    description
  });

  return res.json(problem);
}
