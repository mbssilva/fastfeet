import { setSeconds, setMinutes, setHours, setMilliseconds } from 'date-fns';
import Order from '../../../models/OrderModel';

export default async (req, res) => {
  const order = await Order.findByPk(req.params.id);

  if (!order) {
    return res.status(400).json({ error: 'This order does not exist' });
  }

  const { product, signature_id, start_date, end_date } = req.body;

  const beginHour = setMilliseconds(setSeconds(setMinutes(setHours(new Date(), 8), 0), 0), 0);
  const endHour = setMilliseconds(setSeconds(setMinutes(setHours(new Date(), 18), 0), 0), 0);

  if (!(beginHour < new Date() < endHour)) {
    return res.status(400).json({
      error: 'You can take products away just between 08:00h and 18:00h'
    });
  }

  if (product) order.product = product;
  if (start_date) order.start_date = start_date;
  if (end_date) order.end_date = end_date;
  if (signature_id) order.signature_id = signature_id;

  await order.save();

  return res.json(order);
}
