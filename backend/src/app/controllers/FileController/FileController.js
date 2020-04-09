import * as Yup from 'yup';

import storeFunction from './functions/storeFunction';

class DelivererController {
  async store(req, res) {
    return storeFunction(req, res);
  }
}

export default new DelivererController();
