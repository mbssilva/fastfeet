// Importando bibliotecas
import jwt from 'jsonwebtoken';

// Importando models
import User from '../../../models/UserModel';

// Importando arquivo de configuração
import authConfig from '../../../../config/authJwt';

export default async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) return res.status(400).json({
    error: 'Email not valid'
  });

  if (!( await user.checkPassword(password) )) return res.status(401).json({
    error: 'Password does not match'
  });

  const { id, name } = user;

  return res.json({
    user: {
      id,
      name,
      email
    },
    token: jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn
    }),
  });
}
