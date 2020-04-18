import Order from '../../../models/OrderModel';
import Recipient from '../../../models/RecipientModel';
import Deliverer from '../../../models/DelivererModel';
import File from '../../../models/FileModel';

export default async (req, res) => {
  const { page = 1 } = req.query;
  const { id } = req.params;

  const orders = await Order.findAndCountAll({
    order: [['updatedAt', 'DESC']],
    where: {
      deliveryman_id: id,
      canceled_at: null,
      signature_id: null
    },
    limit: 5,
    offset: (page - 1)*5,
    attributes: ['id', 'product', 'start_date', 'end_date', 'created_at'],
    include: [
      {
        model: Recipient,
        as: 'recipient',
        attributes: ['name', 'street', 'number', 'complement', 'city', 'state', 'cep']
      },
      {
        model: Deliverer,
        as: 'deliverer',
        attributes: ['id', 'name', 'email', 'avatar_id'],
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['name', 'path', 'url']
          }
        ]
      }
    ],
  });

  if (page > Math.ceil((orders.count + 1)/5)) {
    return res
      .status(400)
      .json({
        error: `You exceeded the current maximum number of pages: ${Math.ceil(orders.count/5)}`
      });
  }

  return res.json(orders.rows);
}
