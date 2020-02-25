import * as Yup from 'yup';

import storeFunction from './functions/storeFunction';
import deleteFunction from './functions/deleteFunction';

class DelivererController {
  async store(req, res) {
    return storeFunction(req, res);
  }

  async delete(req, res) {
    return res.json({ok: true});
  }
}

export default new DelivererController();
