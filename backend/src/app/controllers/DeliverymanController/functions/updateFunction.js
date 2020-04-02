import {
  setSeconds,
  setMinutes,
  setHours,
  setMilliseconds,
  toDate
} from 'date-fns';
import { Op } from 'sequelize';

import Order from '../../../models/OrderModel';

export default async (req, res) => {
  const order = await Order.findByPk(req.params.id);

  if (!order) {
    return res.status(400).json({ error: 'This order does not exist' });
  }

  const { signature_id, start_date, end_date } = req.body;

  const beginHour = setMilliseconds(
    setSeconds(setMinutes(setHours(toDate(parseInt(start_date, 10)), 8), 0), 0), 0);
  const endHour = setMilliseconds(
    setSeconds(setMinutes(setHours(toDate(parseInt(start_date, 10)), 18), 0), 0), 0);

  if (start_date) {
    if (order.start_date) {
      return res.status(400).json({
        error: 'You have already taken this product',
      });
    }

    if (!(beginHour <= toDate(parseInt(start_date, 10)) &&
      toDate(parseInt(start_date, 10)) <= endHour))
    {
      return res.status(400).json({
        error: 'You can take products away just between 08:00h and 18:00h',
      });
    }

    const todayOrders = await Order.findAndCountAll({
      where: {
        deliveryman_id: order.deliveryman_id,
        canceled_at: null,
        start_date: {
          [Op.between]: [beginHour, endHour],
        },
      },
    });

    if (todayOrders.count >= 5) {
      return res.status(400).json({
        error: 'You can just take 5 products away during a day',
      });
    }

    order.start_date = toDate(parseInt(start_date, 10));

    return res.json(todayOrders);
  }

  if (end_date) order.end_date = toDate(parseInt(end_date, 10));
  if (signature_id) order.signature_id = signature_id;

  await order.save();

  return res.json(order);
};
