import { MailAdapter } from '../../adapters/mail-adapter';
import { FeedbacksRepository } from '../../repositories/feedbacks-repository';
import { SubmitFeedbackServiceRequest } from './SubmitFeedbackServiceRequest';

export class SubmitFeedbackService {
  constructor(
    private feedbackRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackServiceRequest) {
    const { type, comment, screenshot } = request;

    await this.feedbackRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: 'Novo Feedback',
      body: [
        '<div style="font-family: sans-serif; font-size: 16px; color: #222;">',
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        '</div>',
      ].join('\n'),
    });
  }
}
