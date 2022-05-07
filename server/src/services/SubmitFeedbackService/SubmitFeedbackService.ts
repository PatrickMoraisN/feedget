import { FeedbacksRepository } from '../../repositories/feedbacks-repository';
import { SubmitFeedbackServiceRequest } from './SubmitFeedbackServiceRequest';

export class SubmitFeedbackService {
  constructor(private feedbackRepository: FeedbacksRepository) {}

  async execute(request: SubmitFeedbackServiceRequest) {
    const { type, comment, screenshot } = request;

    await this.feedbackRepository.create({
      type,
      comment,
      screenshot,
    });
  }
}
