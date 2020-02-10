// Importando models
import Recipient from '../../../models/RecipientModel';

export default async (req, res) => {
  const { name, street, number, without_number, complement, state, city, cep } = req.body;

  const recipient = await Recipient.findOne({ where: {
    name,
    cep,
    street,
    number,
    city,
    state
  }});

  if (recipient) return res.status(400).json({
    error: 'Recipient already exists'
  });

  const { id } = await Recipient.create({
    name,
    street,
    complement,
    without_number,
    number,
    city,
    state,
    cep
  });

  return res.json({
    id,
    name,
    street,
    complement,
    number: (without_number ? null : number),
    city,
    state,
    cep
  });
}
