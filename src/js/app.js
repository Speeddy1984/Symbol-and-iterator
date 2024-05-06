export default class Team {
  constructor() {
    this.characters = [];
  }

  add(character) {
    this.characters.push(character);
  }

  [Symbol.iterator]() {
    let index = 0;
    const characters = this.characters;

    return {
      next() {
        if (index < characters.length) {
          const value = characters[index];
          index++;
          return {
            value,
            done: false,
          };
        } else {
          return { done: true };
        }
      },
    };
  }
}
