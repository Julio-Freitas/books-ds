import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DsButton } from '..';

describe('<DsButton />', () => {
  it('Should be render correctly', async () => {
    const fnClick = jest.fn();
    const { getByRole } = render(<DsButton onClick={fnClick} text="Button Name" />);
    const button = screen.getByRole('button', { name: /Button Name/gi });

    userEvent.click(getByRole('button'));
    expect(fnClick).toBeCalledTimes(0);
    expect(button).toBeInTheDocument();
  });
});
