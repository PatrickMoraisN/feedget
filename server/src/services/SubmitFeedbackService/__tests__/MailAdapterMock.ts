import { MailAdapter, SendMailData } from '../../../adapters/mail-adapter';

export class MailAdapterMock implements MailAdapter {
  async sendMail(data: SendMailData) {
    const { body, subject } = data;

    await Promise.resolve();
  }
}
