import Problem from '../../../models/ProblemModel';
import Recipient from '../../../models/RecipientModel';
import Deliverer from '../../../models/DelivererModel';
import Order from '../../../models/OrderModel';
import File from '../../../models/FileModel';

export default async (req, res) => {
  const { id } = req.params;
  const { page = 1 }  = req.query;

  const problems = await Problem.findByPk(id, {
    limit: 5,
    offset: 5*(page-1),
    attributes: ['id', 'description'],
    include: [
      {
        model: Order,
        as: 'delivery',
        attributes: ['id', 'product'],
        include: [
          {
            model: Recipient,
            as: 'recipient',
            attributes: ['id', 'name']
          },
          {
            model: Deliverer,
            as: 'deliverer',
            attributes: ['id', 'name', 'email'],
            include: [
              {
                model: File,
                as: 'avatar',
                attributes: ['id', 'name', 'path', 'url']
              }
            ]
          }
        ]
      }
    ]
  });

  if (!problems) {
    return res.status(400).json({ error: 'This delivery problem does not exist' });
  }

  if (page > Math.ceil(problems.count/5)) {
    return res
      .status(400)
      .json({
        error: `You exceeded the current maximum number of pages: ${Math.ceil(problems.count/5)}`
      });
  }

  return res.json(problems);
}
