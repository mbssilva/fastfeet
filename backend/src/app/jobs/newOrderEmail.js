import Mail from '../../lib/Mail';

class newOrderEmail {
  get key() {
    return 'newOrderEmail';
  }

  async handle(info) {
    const { deliverer, recipient } = info.data;

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
      }
    });
  }


}

export default new newOrderEmail();
