import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class Cancellation {
  get key() {
    return 'cancellationMail';
  }

  async handle(info) {
    const { deliverer, product, hour: canceled_at } = info.data;

    const hour = format(parseISO(canceled_at), "dd 'de' MMMM' às ' HH:mm", {
      locale: pt, // Português
    });

    await Mail.sendMail({
      to: `${deliverer.name} <${deliverer.email}>`,
      subject: 'Novo cancelamento no sistema',
      template: 'cancellation',
      context: {
        delivererName: deliverer.name,
        product,
        hour
      }
    });
  }


}

export default new Cancellation();
