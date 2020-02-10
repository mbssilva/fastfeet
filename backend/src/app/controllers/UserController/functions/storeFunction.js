// Importando o model
import User from '../../../models/UserModel';

export default async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (user) return res.status(400).json({ error: 'Email already used' });

  const { id } = await User.create({ name, email, password });

  return res.json({ id, name, email });
}
