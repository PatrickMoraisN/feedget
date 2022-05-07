import { prisma } from '../../prisma';
import {
  FeedbackCreateData,
  FeedbacksRepository,
} from '../feedbacks-repository';

export class PrismaFeedbackRepository implements FeedbacksRepository {
  async create(data: FeedbackCreateData) {
    const { type, comment, screenshot } = data;
    await prisma.feedBack.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
