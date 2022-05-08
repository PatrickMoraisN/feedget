import { render } from '@testing-library/react';
import { Widget } from '../Widget';

describe('teste', () => {
  it('teste', () => {
    const { getByText } = render(<Widget />);

    expect(2 + 2).toBe(4);
  });
});
