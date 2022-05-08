import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from '../../App';

describe('<App />', () => {
  it('Render correctly Widget', () => {
    render(<App />);
    const widgetButton = document.querySelector(
      '.widget-button'
    ) as HTMLElement;

    expect(widgetButton).toBeInTheDocument();
  });
});
