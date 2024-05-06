import Team from '../app'

test('Iterator works correct', () => {
  const character1 = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  };
  
  const character2 = {
    name: 'Маг',
    type: 'Magician',
    health: 20,
    level: 2,
    attack: 45,
    defence: 5
  };
  
  const character3 = {
    name: 'Демон',
    type: 'Daemon',
    health: 70,
    level: 3,
    attack: 60,
    defence: 20
  };
  
  const team = new Team();
  team.add(character1);
  team.add(character2);
  team.add(character3);
  
  const result = [];

  for (const character of team) {
    result.push(character);
  }

  const expected = [character1, character2, character3];

  expect(result).toEqual(expected);
});