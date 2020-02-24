import * as Yup from 'yup';

// import deleteFunction from './functions/deleteFunction';

class DelivererController {
  async store(req, res) {
    return res.json({ok: true});
  }

  async delete(req, res) {
    return res.json({ok: true});
  }
}

export default new DelivererController();
