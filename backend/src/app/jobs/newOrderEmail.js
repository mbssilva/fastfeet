import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class NewOrderEmail {
  get key() {
    return 'newOrderEmail';
  }

  async handle(info) {
    const { deliverer, recipient, product, date } = info.data;

    const hour = format(parseISO(date), "dd 'de' MMMM' às ' HH:mm", {
      locale: pt, // Português
    });

    await Mail.sendMail({
      to: `${deliverer.name} <${deliverer.email}>`,
      subject: 'Nova encomenda cadastrada no sistema',
      template: 'newOrder',
      context: {
        delivererName: deliverer.name,
        recipientName: recipient.name,
        recipientStreet: recipient.street,
        recipientNumber: recipient.number ? recipient.number : 'Sem número',
        recipientComplement: recipient.complement ? recipient.complement : 'Sem complemento',
        recipientCep: recipient.cep,
        recipientCity: recipient.city,
        recipientState: recipient.state,
        product,
        hour
      }
    });
  }


}

export default new NewOrderEmail();
