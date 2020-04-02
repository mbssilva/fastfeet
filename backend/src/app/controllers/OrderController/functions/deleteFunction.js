import { toDate } from 'date-fns';

import Order from '../../../models/OrderModel';
import Deliverer from '../../../models/DelivererModel';

// Importando a fila de execução de background jobs
import Queue from '../../../../lib/Queue';

// Importando o modelo do job
import cancellationMail from '../../../jobs/cancellationMail';

export default async (req, res) => {
  const order = await Order.findByPk(req.userId, {
    include: [
      {
        model: Deliverer,
        as: 'deliverer',
        attributes: ['name', 'email']
      }
    ]
  });

  if (!order) {
    return res.status(400).json({ error: 'This order does not exist' });
  }

  if (order.canceled_at) {
    return res.status(400).json({ error: 'This order has already been canceled' });
  }

  if (order.signature_id) {
    return res.status(400).json({ error: 'This order has already been delivered' });
  }

  order.canceled_at = toDate(new Date().getTime());

  await order.save();

  Queue.add(cancellationMail.key, {
    deliverer: order.deliverer,
    product: order.product,
    hour: order.canceled_at
  });

  return res.json(order);
}
