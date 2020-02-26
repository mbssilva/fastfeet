import indexFunction from './functions/indexFunction';
import showFunction from './functions/showFunction';

class OrderController {
  async index(req, res) {
    return indexFunction(req, res);
  }

  async show(req, res) {
    return showFunction(req, res);
  }
}

export default new OrderController();
