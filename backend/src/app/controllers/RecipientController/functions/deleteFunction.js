// Importando models
import Recipient from '../../../models/RecipientModel';

export default async (req, res) => {
  const { id } = req.body;

  const recipient = await Recipient.findByPk(id);

  if (!recipient) {
    return res.status(400).json({ error: 'This deliverer does not exist' });
  }


  await Recipient.destroy({
    where: {
      id
    }
  });

  return res.json({ deleted: recipient });
}
