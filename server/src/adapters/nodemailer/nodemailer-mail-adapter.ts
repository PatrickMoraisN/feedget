import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

console.log(process.env.MAILTRAP_USER);

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail(data: SendMailData) {
    const { subject, body } = data;
    transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Patrick Morais <ppternunes@gmail.com>',
      subject,
      html: body,
    });
  }
}
