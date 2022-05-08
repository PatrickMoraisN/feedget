import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { App } from '../../App';

describe('<CloseButton />', () => {
  it('Close correctly Widget', async () => {
    render(<App />);

    const widgetButton = document.querySelector(
      '.widget-button'
    ) as HTMLElement;

    userEvent.click(widgetButton);

    await waitFor(() => {
      const feedbackTextHeader = document.querySelector(
        '.widget-header-feedback1'
      ) as HTMLElement;

      expect(feedbackTextHeader).toBeInTheDocument();
    });

    const closeWidgetButton = document.querySelector(
      'button[title="Fechar formulário de Feedback"]'
    ) as HTMLElement;

    userEvent.click(closeWidgetButton);

    await waitFor(() => {
      const feedbackTextHeader = document.querySelector(
        '.widget-header-feedback1'
      ) as HTMLElement;

      expect(feedbackTextHeader).not.toBeInTheDocument();
    });
  });
});
