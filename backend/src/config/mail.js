export default {
  host: process.env.MAIL_TRAP_HOST, // Host para envio através de SMTP
  port: process.env.MAIL_TRAP_PORT, // Porta do host
  secure: false, // Se está utilizando SSL (segurança)
  auth: {
    // Autenticação para o envio através do Mailtrap
    user: process.env.MAIL_TRAP_USER,
    pass: process.env.MAIL_TRAP_PASSWORD,
  },
  default: {
    // Confirações padrão de todos os e-mails
    from: 'Transportadora Fast Feet <noreplay@fastfeet.com>',
  },
};
