import Daemon from '../Daemon';

test('creating new player with only name', () => {
  const player = new Daemon('leo');
  expect(player).toEqual({
    name: 'leo',
    type: 'Daemon',
    health: 100,
    level: 1,
    defence: 40,
  });
});
