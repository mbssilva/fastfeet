import Order from '../../../models/OrderModel';
import Recipient from '../../../models/RecipientModel';
import Deliverer from '../../../models/DelivererModel';
import File from '../../../models/FileModel';

export default async (req, res) => {
  const { page = 1 } = req.query;

  const orders = await Order.findAndCountAll({
    order: [['id', 'ASC']],
    where: { canceled_at: null },
    limit: 5,
    offset: (page - 1)*5,
    attributes: ['id', 'product', 'start_date', 'end_date'],
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
      },
      {
        model: File,
        as: 'signature',
        attributes: ['id', 'name', 'path']
      }
    ],
  });

  if (page > Math.trunc(1 + orders.count/5)) {
    return res
      .status(400)
      .json({
        error: `You exceeded the current maximum number of pages: ${Math.trunc(1 + orders.count/5)}`
      });
  }

  return res.json(orders.rows);
}
