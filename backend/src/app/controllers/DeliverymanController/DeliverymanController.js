import * as Yup from 'yup';

import indexFunction from './functions/indexFunction';
import showFunction from './functions/showFunction';
import updateFunction from './functions/updateFunction';

class OrderController {
  async index(req, res) {
    return indexFunction(req, res);
  }

  async show(req, res) {
    return showFunction(req, res);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      start_date: Yup.string(),
      end_date: Yup.string(),
      signature_id: Yup.number().when('end_date', (end_date, option) => {
        return end_date ? option.required() : option;
      }),
    });

    if (!(await schema.isValid(req.body))) return res.status(400).json({
      error: 'Validation failed'
    });

    return updateFunction(req, res);
  }
}

export default new OrderController();
