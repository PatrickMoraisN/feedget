import { waitFor } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from '../../App';

describe('<FeedbackSuccessStep />', () => {
  it('Change step to success correclty', async () => {
    render(<App />);
    const widgetButton = document.querySelector(
      '.widget-button'
    ) as HTMLElement;

    userEvent.click(widgetButton);

    await waitFor(() => {
      const bugButton = document.querySelector(
        'button[title="Problema"]'
      ) as HTMLElement;

      expect(bugButton).toBeInTheDocument();

      userEvent.click(bugButton);
    });

    await waitFor(async () => {
      const textarea = document.querySelector(
        '.textarea-widget'
      ) as HTMLInputElement;

      await userEvent.type(textarea, 'A');
      expect(textarea.value).toBe('A');
    });

    await waitFor(() => {
      const submitButton = document.querySelector(
        'button[type="submit"]'
      ) as HTMLButtonElement;

      userEvent.click(submitButton);
    });

    await waitFor(() => {
      const feedbackSentMessage = document.querySelector(
        'span[title="feedback-sent"]'
      ) as HTMLSpanElement;

      expect(feedbackSentMessage).toBeInTheDocument();
    });
  });
});
