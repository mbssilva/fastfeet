import * as Yup from 'yup';

import indexFunction from './functions/indexFunction';
import storeFunction from './functions/storeFunction';
import updateFunction from './functions/updateFunction';
import deleteFunction from './functions/deleteFunction';

class DelivererController {
  async index(req, res) {
    return indexFunction(req ,res);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
    });

    const { name, email } = req.body;

    if (!(await schema.isValid({ name, email }))) return res.status(400).json({
        error: 'Validation failed'
      });

    return storeFunction(req, res);
  }

  async update(req, res) {
    return updateFunction(req, res);
  }

  async delete(req, res) {
    return deleteFunction(req, res);
  }
}

export default new DelivererController();
