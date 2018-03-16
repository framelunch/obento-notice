const Notice = require('./index');

it('notice basic', () => {
  const n = new Notice();
  const mock1 = jest.fn();
  const mock2 = jest.fn();

  n.listen('n', mock1);
  n.listen('n', mock2);
  n.publish('n', [10]);

  n.clear('n', mock1);
  n.publish('n', [11]);

  n.clearAll('n');
  n.publish('n');

  expect(mock1.mock.calls.length).toBe(1);
  expect(mock1.mock.calls[0][0]).toBe(10);
  expect(mock2.mock.calls.length).toBe(2);
  expect(mock2.mock.calls[0][0]).toBe(10);
  expect(mock2.mock.calls[1][0]).toBe(11);
});
