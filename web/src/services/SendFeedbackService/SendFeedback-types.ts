import { FeedbackTypeProps } from '../../helpers';

export interface FeedbackDataProps {
  type: 'BUG' | 'IDEA' | 'OTHER';
  comment: string;
  screenshot?: string | null;
}
