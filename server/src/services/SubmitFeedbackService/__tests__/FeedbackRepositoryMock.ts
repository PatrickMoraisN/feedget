import {
  FeedbackCreateData,
  FeedbacksRepository,
} from '../../../repositories/feedbacks-repository';

export class FeedbackRepositoryMock implements FeedbacksRepository {
  async create(data: FeedbackCreateData) {
    const { type, comment, screenshot } = data;

    await Promise.resolve();
  }
}
