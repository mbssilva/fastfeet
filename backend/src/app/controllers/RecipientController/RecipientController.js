import * as Yup from 'yup';

import storeFunction from './functions/storeFunction';

class RecipientController {
  async store (req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      without_number: Yup.boolean(),
      number: Yup.string().when('without_number', (without_number, option) => {
        return without_number ? option : option.required().min(4).max(4);
      }),
      complement: Yup.string().when('without_number', (without_number, option) => {
        return !without_number ? option : option.required();
      }),
      state: Yup.string().required(),
      city: Yup.string().required(),
      cep: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) return res.status(400).json({
        error: 'Validation failed'
    });

    return storeFunction(req, res);
  }
}

export default new RecipientController();
