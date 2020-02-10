import * as Yup from 'yup';

import storeFunction from './functions/storeFunction';

class SessionController {
  async store (req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required()
    });

    const { email, password } = req.body;

    if (!(await schema.isValid({ email, password }))) {
      return res.status(400).json({error: 'Validation failed'});
    }

    const dataStored = storeFunction(req, res);

    return dataStored;
  }
}

export default new SessionController();
