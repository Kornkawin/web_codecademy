const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const pathCharacter = '░';
const playerCharacter = '*';

class Field {
  constructor(arr2dim) {
    this._field = arr2dim;
    this._playerPos = [];
    this._playerPos['row'] = 0;
    this._playerPos['col'] = 0;
  }

  get field() {
    return this._field;
  }
  get playerPos() {
    return this._playerPos;
  }

  updateField(row, col, char) {
    try {
      this._field[row][col] = char;
    } catch(e) { };
  }

  print() {
    this.field.forEach(row => {
      console.log(row.join(''));
    });
  }

  // input player position
  isEndGame() {
    let isEnd = false;
    const field = this.field;
    const updated_row = this.playerPos['row']; 
    const updated_col = this.playerPos['col'];

    let pos;
    try {
      pos = field[updated_row][updated_col]  
    } catch(e) {
      console.log('Player LOSE !! [Out of Field]');
      isEnd = true;
      return isEnd
    };

    switch(pos) {
      case hat:
        // stop
        console.log('Player WIN !! [HAT]');
        isEnd = true;
        break;
      case hole:
        // stop
        console.log('Player LOSE !! [HOLE]');
        isEnd = true;
        break;
      case playerCharacter:
        // continue
        isEnd = true;
        break;
      case pathCharacter:
        // continue
        isEnd = false;
        break;
      default:
        // stop
        console.log('Player LOSE !! [Out of Field]');
        isEnd = true;
        break;
    };
    return isEnd;
  }

  userInterface() {
    this.print();
    const current_pos = this.playerPos;
    let direction = prompt('Which way?: ');

    switch(direction) {
      case 'w':
        current_pos['row'] -= 1;
        break;
      case 's':
        current_pos['row'] += 1;
        break;
      case 'a':
        current_pos['col'] -= 1;
        break;
      case 'd':
        current_pos['col'] += 1;
        break;
      default:
        throw Error('Wrong direction input !');
    };
    console.log(`player at: (${current_pos['row']}, ${current_pos['col']})`);
  }

  updatePositionInField() {
    const updated_row = this.playerPos['row']; 
    const updated_col = this.playerPos['col'];
    this.updateField(updated_row, updated_col, playerCharacter);
  }

  playGame() {
    while(true) {
      // input direction
      this.userInterface();
      // check end game
      if (this.isEndGame()) {
        this.updatePositionInField()
        this.print();
        break;
      };
      // update postion in field
      this.updatePositionInField()
    };
  }

  static generateHoles(n_row, n_col, hole_ratio) {
    hole_ratio = Math.min(hole_ratio, 0.3);
    const size = n_row * n_col;
    const n_hole = Math.floor(size * hole_ratio);
    const holes = [];
    for(let i=0; i<n_hole; i++) {
      holes.push(hole);
    };
    return holes;
  }

  static generateBlankField(height, width){
    let newField = [];
    for (let i = 0; i < height; i++) {
      newField.push([]);
      for (let j = 0; j < height; j++) {
          newField[i].push(pathCharacter)
      };
    };
    newField[0][0] = playerCharacter;
    return newField;
  }

  static generateField(height, width, hole_ratio){
    // gen black field
    const fieldArray = this.generateBlankField(height, width);
    // gen assets
    const assets = this.generateHoles(height, width, hole_ratio);
    assets.push(hat);
    // assign asset to field
    while(assets.length != 0) {
      let row_rand = Math.floor(Math.random() * height);
      let col_rand = Math.floor(Math.random() * width);
      if(fieldArray[row_rand][col_rand] == pathCharacter) {
        fieldArray[row_rand][col_rand] = assets.pop();
      };
    };
    return fieldArray;
  }
};


//const f = new Field([
//  ['*', '░', 'O'],
//  ['░', 'O', '░'],
//  ['░', '^', '░'],
//]);

const fieldArray = Field.generateField(3, 3, 0.4);
const f = new Field(fieldArray);
f.playGame();




