import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { wait } from '@testing-library/user-event/dist/types/utils';
import { App } from '../../App';

describe('<App />', () => {
  it('Open correctly Widget', async () => {
    render(<App />);
    const widgetButton = document.querySelector(
      '.widget-button'
    ) as HTMLElement;

    userEvent.click(widgetButton);

    await waitFor(() => {
      const feedbackTextHeader = document.querySelector(
        '.widget-header-feedback1'
      ) as HTMLElement;

      const footerWidgetText = document.querySelector('footer') as HTMLElement;
      expect(feedbackTextHeader).toBeInTheDocument();
      expect(footerWidgetText).toHaveTextContent('Feito com ❤ por Patrick');
    });
  });

  it('Change step when click on bug', async () => {
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

    await waitFor(() => {
      const textarea = document.querySelector(
        '.textarea-widget'
      ) as HTMLElement;

      const typeOfFeedback = document.querySelector(
        '.feedback-type-widget'
      ) as HTMLSpanElement;

      expect(textarea).toBeInTheDocument();
      expect(typeOfFeedback).toBeInTheDocument();
      expect(typeOfFeedback.title).toBe('Problema');
    });
  });

  it('Change step when click on idea', async () => {
    render(<App />);
    const widgetButton = document.querySelector(
      '.widget-button'
    ) as HTMLElement;

    userEvent.click(widgetButton);

    await waitFor(() => {
      const bugButton = document.querySelector(
        'button[title="Ideia"]'
      ) as HTMLElement;

      expect(bugButton).toBeInTheDocument();

      userEvent.click(bugButton);
    });

    await waitFor(() => {
      const textarea = document.querySelector(
        '.textarea-widget'
      ) as HTMLElement;

      const typeOfFeedback = document.querySelector(
        '.feedback-type-widget'
      ) as HTMLSpanElement;

      expect(textarea).toBeInTheDocument();
      expect(typeOfFeedback).toBeInTheDocument();
      expect(typeOfFeedback.title).toBe('Ideia');
    });
  });

  it('Change step when click on other', async () => {
    render(<App />);
    const widgetButton = document.querySelector(
      '.widget-button'
    ) as HTMLElement;

    userEvent.click(widgetButton);

    await waitFor(() => {
      const bugButton = document.querySelector(
        'button[title="Outro"]'
      ) as HTMLElement;

      expect(bugButton).toBeInTheDocument();

      userEvent.click(bugButton);
    });

    await waitFor(() => {
      const textarea = document.querySelector(
        '.textarea-widget'
      ) as HTMLElement;

      const typeOfFeedback = document.querySelector(
        '.feedback-type-widget'
      ) as HTMLSpanElement;

      expect(textarea).toBeInTheDocument();
      expect(typeOfFeedback).toBeInTheDocument();
      expect(typeOfFeedback.title).toBe('Outro');
    });
  });
});
