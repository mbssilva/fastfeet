import * as Yup from 'yup';

import indexFunction from './functions/indexFunction';
import storeFunction from './functions/storeFunction';
import updateFunction from './functions/updateFunction';
import deleteFunction from './functions/deleteFunction';

class OrderController {
  async index(req, res) {

    return indexFunction(req, res);
  }

  async store (req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) return res.status(400).json({
      error: 'Validation failed'
    });

    return storeFunction(req, res);
  }

  async update (req, res) {
    const schema = Yup.object().shape({
      product: Yup.string()
    });

    if (!(await schema.isValid(req.body))) return res.status(400).json({
      error: 'Validation failed'
    });

    return updateFunction(req, res);
  }

  async delete (req, res) {

    return deleteFunction(req, res);
  }
}

export default new OrderController();
