import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '0ba5ea66b6f0e2',
    pass: '039da0d7bcefa5',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail(data: SendMailData) {
    const { subject, body } = data;
    transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Patrick Morais <patrick.nunes@remessaonline.com.br>',
      subject,
      html: body,
    });
  }
}

// [
//   '<div style="font-family: sans-serif; font-size: 16px; color: #222;">',
//   `<p>Tipo do feedback: ${type}</p>`,
//   `<p>Comentário: ${comment}</p>`,
//   '</div>',
// ].join('\n'),
