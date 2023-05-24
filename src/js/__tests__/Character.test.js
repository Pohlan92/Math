import Daemon from '../Daemon';
import Character from '../Character';
import Bowerman from '../Bowerman';

test('creat new right player', () => {
  const player = new Daemon('leo');
  expect(player).toEqual({
    name: 'leo',
    type: 'Daemon',
    health: 100,
    level: 1,
    defence: 40,
  });
});

test('creat new player with a short name', () => {
  function createPlayer() {
    return new Daemon('l');
  }
  expect(createPlayer).toThrow(new Error('Игрок не создан. Формат имени персонажа - строка, min 2 символа, max 10.'));
});

test('creat new player with a long name', () => {
  function createPlayer() {
    return new Daemon('leonardo2023');
  }
  expect(createPlayer).toThrow(new Error('Игрок не создан. Формат имени персонажа - строка, min 2 символа, max 10.'));
});

test('creat new player with a not correct type', () => {
  function createPlayer() {
    return new Character('leo', 'Daem');
  }
  expect(createPlayer).toThrow(new Error('Игрок не создан. Тип персонажа неопределен. Требуется один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie.'));
});

test('тестирование метода levelUp', () => {
  const player = new Bowerman('leo');
  player.levelUp();
  expect(player).toEqual({
    name: 'leo',
    type: 'Bowerman',
    health: 100,
    level: 2,
    defence: 30,
    attack: 30,
  });
});

test('тестирование метода levelUp умершего персонажа', () => {
  function levelUpPlayer() {
    const player = new Bowerman('leo');
    player.health = 0;
    return player.levelUp();
  }
  expect(levelUpPlayer).toThrow(new Error('Здоровье персонажа <=0. Нельзя повысить уровень умершего персонажа.'));
});
