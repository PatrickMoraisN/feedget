import { MailAdapter } from '../../adapters/mail-adapter';
import { FeedbacksRepository } from '../../repositories/feedbacks-repository';
import { SubmitFeedbackServiceRequest } from './SubmitFeedbackServiceRequest';
import * as ErrorMsg from '../../helpers/errorMessages';
import { imageStartFormat } from '../../helpers/imageStartFormat';

export class SubmitFeedbackService {
  constructor(
    private feedbackRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackServiceRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error(ErrorMsg.invalidType);
    }
    if (!comment) {
      throw new Error(ErrorMsg.invalidComment);
    }

    if (screenshot && !screenshot.startsWith(imageStartFormat)) {
      throw new Error(ErrorMsg.invalidScreenshot);
    }

    await this.feedbackRepository.create({
      type,
      comment,
      screenshot,
    });

    this.mailAdapter.sendMail({
      subject: 'Novo Feedback',
      body: [
        '<div style="font-family: sans-serif; font-size: 16px; color: #222;">',
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}" />` : '',
        '</div>',
      ].join('\n'),
    });
  }
}
