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
      signature_id: null,
    },
    attributes: ['id', 'product', 'start_date', 'end_date'],
    include: [
      {
        model: Recipient,
        as: 'recipient',
        attributes: [
          'name',
          'street',
          'number',
          'complement',
          'city',
          'state',
          'cep',
        ],
      },
      {
        model: Deliverer,
        as: 'deliverer',
        attributes: ['id', 'name', 'email', 'avatar_id'],
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['name', 'path', 'url'],
          },
        ],
      },
      {
        model: File,
        as: 'signature',
        attributes: ['id', 'name', 'path'],
      },
    ],
  });

  // Filtragem pelas encomendas já entregues
  const filteredOrders = orders.rows.filter(order => !!order.signature);

  if (page > Math.round(filteredOrders.length / 5)) {
    return res.status(400).json({
      error: `You exceeded the current maximum number of pages: ${Math.round(
        filteredOrders.length / 5)}`,
    });
  }

  // Paginação
  const limit = 5;
  const offset = (page - 1)*limit;
  const offsetOrders = filteredOrders.filter( (value, index) => {
    if ( index >= offset && index < page*limit ) return true;
    return false;
  });

  return res.json(offsetOrders);
};
