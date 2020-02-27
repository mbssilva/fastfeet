import * as Yup from 'yup';

import storeFunction from './functions/storeFunction';
import indexFunction from './functions/indexFunctions';
import showFunction from './functions/showFunction';
import deleteFunction from './functions/deleteFunction';

class ProblemController {
  async index(req, res) {

    return indexFunction(req, res);
  }

  async show(req, res) {

    return showFunction(req, res);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      delivery_id: Yup.number().required(),
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    return storeFunction(req, res);
  }

  async delete(req, res) {

    return deleteFunction(req, res);
  }
}

export default new ProblemController();
