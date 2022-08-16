import Input from './Input';

test('Input', () => {
  const onChange = jest.fn();
  const onClick = jest.fn();
  const x = Input({ value: '할 일', onChange, onClick });

  expect(x).
});
