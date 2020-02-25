import Order from '../../../models/OrderModel';
import Notification from '../../../schemas/NotificationSchema';
import Recipient from '../../../models/RecipientModel';
import Deliverer from '../../../models/DelivererModel';

// Importando a fila de execução de background jobs
import Queue from '../../../../lib/Queue';

// Importando o modelo do job
import newOrderMail from '../../../jobs/newOrderEmail';
import newOrderEmail from '../../../jobs/newOrderEmail';

export default async (req, res) => {
  const { recipient_id, deliveryman_id, product } = req.body;

  const orderExist = await Order.findOne({ where: {
    recipient_id,
    deliveryman_id,
    product,
    canceled_at: null
  }});

  if (orderExist) {
    return res.status(400).json({ error: 'This order has already been storaged', orderExist });
  }

  const order = await Order.create({
    recipient_id,
    deliveryman_id,
    product
  });

  const recipient = await Recipient.findByPk(
    recipient_id,
    {
      attributes: ['name', 'street', 'number', 'complement', 'city', 'state', 'cep'],
    }
  );

  const notification = await Notification.create({
    product,
    deliverer: deliveryman_id
  });

  notification.recipient = {
    name: recipient.name,
    street: recipient.street,
    number: recipient.number,
    complement: recipient.complement,
    city: recipient.city,
    state: recipient.state,
    cep: recipient.cep
  };

  await notification.save();

  const deliverer = await Deliverer.findByPk(deliveryman_id,{
    attributes: ['name', 'email']
  });

  Queue.add(newOrderEmail.key, {
    deliverer,
    recipient
  });

  return res.json(order);
}
