// Importando bibliotecas
import * as Yup from 'yup';

// Importando as funções do controller
import storeFunction from './functions/storeFunction';

class UserController {
  async store (req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(5)
    });

    const { name, email, password } = req.body;

    if (!(await schema.isValid({ name, email, password })))return res.status(400).json({
      error: 'Validation failed'
    });

    const dataStored = storeFunction(req, res);

    return dataStored;
  }
}

export default new UserController();
