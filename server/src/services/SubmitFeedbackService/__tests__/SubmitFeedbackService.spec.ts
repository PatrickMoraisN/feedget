import { SubmitFeedbackService } from '../SubmitFeedbackService';
import { FeedbackRepositoryMock } from './FeedbackRepositoryMock';
import { MailAdapterMock } from './MailAdapterMock';
import * as MockData from './SubmitFeedbackService.mock';
import * as ErrorMsg from '../../../helpers/errorMessages';

describe('Submit Feedback', () => {
  const feedbackRepositoryMock = new FeedbackRepositoryMock();
  const mailAdapterMock = new MailAdapterMock();

  const submitFeedbackService = new SubmitFeedbackService(
    feedbackRepositoryMock,
    mailAdapterMock
  );

  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeedbackService.execute(MockData.validData)
    ).resolves.not.toThrow();
  });

  it('should throw an Error when we pass a invalid "type"', async () => {
    await expect(
      submitFeedbackService.execute(MockData.dataWithoutType)
    ).rejects.toThrow(ErrorMsg.invalidType);
  });

  it('should throw an Error when we pass a invalid "comment"', async () => {
    await expect(
      submitFeedbackService.execute(MockData.dataWithoutComment)
    ).rejects.toThrow(ErrorMsg.invalidComment);
  });

  it('should throw an Error when we pass a invalid screenshot', async () => {
    await expect(
      submitFeedbackService.execute(MockData.dataWithInvalidScreenshot)
    ).rejects.toThrow(ErrorMsg.invalidScreenshot);
  });
});
