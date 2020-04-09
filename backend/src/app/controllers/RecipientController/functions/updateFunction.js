// Importando models
import Recipient from '../../../models/RecipientModel';

export default async (req, res) => {
  const {
    id,
    name,
    street,
    number,
    complement,
    city,
    state,
    cep } = req.body;

  const recipient = await Recipient.findByPk(id);

  if (!recipient) return res.status(400).json({
    error: 'Recipient does not exist',
  });

  if (name) recipient.name = name;
  if (street) recipient.street = street;
  if (number) recipient.number = number;
  if (city) recipient.city = city;
  if (state) recipient.state = state;
  if (cep) recipient.cep = cep;
  if (complement) recipient.complement = complement;

  await recipient.save();

  return res.json({
    id,
    name,
    street,
    complement,
    number,
    city,
    state,
    cep
  });
}
