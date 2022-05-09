import { FeedbackDataProps } from '.';
import { api } from '../../httpClient';

export class SendFeedbackService {
  async execute({ type, comment, screenshot }: FeedbackDataProps) {
    await api.post('/feedback', {
      type,
      comment,
      screenshot,
    });
  }
}
