const Notice = require('./index');

it('notice.add', () => {
  const n = new Notice();
  const mock = jest.fn();

  n.listen('n', mock);
  n.publish('n');

  expect(mock.mock.calls.length).toBe(1);
});
