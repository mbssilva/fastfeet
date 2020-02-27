import { toDate } from 'date-fns';

import Order from '../../../models/OrderModel';
import Problem from '../../../models/ProblemModel';
import Deliverer from '../../../models/DelivererModel';

// Importando a fila de execução de background jobs
import Queue from '../../../../lib/Queue';

// Importando o modelo do job
import cancellationMail from '../../../jobs/cancellationMail';

export default async (req, res) => {
  const { id } = req.params;

  const problem = await Problem.findByPk(id);

  if (!problem) {
    return res.status(400).json({ error: 'This problem does not exist' });
  }

  const order = await Order.findByPk(problem.delivery_id, {
    include: [
      {
        model: Deliverer,
        as: 'deliverer',
        attributes: ['name', 'email']
      }
    ]
  });

  order.canceled_at = toDate(new Date().getTime());

  await order.save();

  await Problem.destroy({ where: { id } });

  Queue.add(cancellationMail.key, {
    deliverer: order.deliverer,
    product: order.product,
    hour: order.canceled_at
  });

  return res.json({ deleted_problem: problem, deleted_order: order });
}
