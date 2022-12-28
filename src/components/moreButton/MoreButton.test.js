import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import MoreButton from '.';

afterEach(cleanup);

const defaultProps = {
  onClick: jest.fn(),
};
describe('button tests', () => {
  test('should render a disabled button', () => {
    render(<MoreButton disabled={true} />);
    const disabledButton = screen.getByText(/More/i);
    expect(disabledButton).toHaveAttribute('disabled');
    expect(disabledButton).toBeDisabled();
  });

  test('calls correct function on click', () => {
    const onClick = jest.fn();
    render(<MoreButton {...defaultProps} onClick={onClick} />);
    fireEvent.click(screen.getByText(/More/i));
    expect(onClick).toHaveBeenCalled();
  });
});
