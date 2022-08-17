import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

test('Input', () => {
  const value = '나는 바보다';
  const handleClick = jest.fn(() => value);
  function handleChange(e) {
    return e.target.value;
  }
  //   const handleChange = jest.fn((e) => console.log(e));
  //   handleChange.mockReturnValue(value);

  //   console.log(handleChange());
  const { container, getByText, getByRole } = render((
    <Input
      value={value}
      onChange={handleChange}
      onClick={handleChange}
    />
  ));

  expect(container).toHaveTextContent('할 일추가');
  expect(handleChange).not.toBeCalled();

  fireEvent.keyDown(getByRole('textbox'), { key: 'A' });
  expect(handleChange).toBeCalledWith('A');
//   fireEvent.click(getByText('추가'));
});
