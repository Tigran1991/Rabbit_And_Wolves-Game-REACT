export const generateCurrentId = () => Math.floor(Math.random() * 100000);

export const FREE_CELL = 0;
const RABBIT = 1;
const WOLF = 2;
const HOUSE = 3;
const FENCE = 4;

const X = 0, Y = 1;

const MOVE_DIRECTION = {
  'move-right': [0, 1],
  'move-bottom': [1, 0],
  'move-left': [0, -1],
  'move-top': [-1, 0]
}

const DIRECTION_MOVEMENT = Object.values(MOVE_DIRECTION);
const DIRECTION_SIDES = Object.keys(MOVE_DIRECTION);

export const makeGame = (size) => {

  const compose = (...fns) => (x) => fns.reduceRight((res, fn) => fn(res), x);
      
  const add = (summableA, sumableB) => summableA + sumableB;
      
  const determineAdjacentPosition = (position, direction) => {
      const STEP_ON_X = add(position[X], direction[X]);
      const STEP_ON_Y = add(position[Y], direction[Y]);
      return Array.of(STEP_ON_X, STEP_ON_Y);
  };
      
  const calculateDistance = (wolfNewPosition, rabbitNewPosition) => {
    const [POSITION_X, POSITION_Y] = rabbitNewPosition;
    return Math.sqrt((wolfNewPosition[X] - POSITION_X)**2 + (wolfNewPosition[Y] - POSITION_Y)**2);
  };
      
  const determineNearestPosition = ({DISTANCES, POSITIONS}) => POSITIONS[DISTANCES.indexOf(Math.min(...DISTANCES))];

  const CHARACTERS = {
    [RABBIT]: {
      name: 'RABBIT',
      characterCount : 1,
      canMove: [FREE_CELL, WOLF, HOUSE],
      id: 'rabbit'
    },
    [WOLF]: {
      name: 'WOLF',
      characterCount: (size * 40) /100,
      canMove: [FREE_CELL, RABBIT],
      id: 'wolf'
    },
    [HOUSE]: {
      characterCount : 1,
      id: 'house'
    },
    [FENCE]: {
      characterCount: (size * 40) /100,
      id: 'fence'
    },
  };

  const CHARACTERS_KEYS = Object.keys(CHARACTERS);

  const createInitialMatrix = (size) => {
    const MATRIX = new Array(size)
      .fill(0)
      .map(() => new Array(size).fill(0));
    return MATRIX;
  };

  const getRandomPositionsForCharacter = (matrix) => {
    const x = Math.floor(Math.random() * size);
    const y = Math.floor(Math.random() * size);
    if (matrix[x][y] == FREE_CELL) {
      return [x, y];
    } else {
      return getRandomPositionsForCharacter(matrix);
    }
  }
  
  const setCharacterOnPlayfield = (matrix) => {
    CHARACTERS_KEYS.forEach(character => {
      for(let i = 0; i < CHARACTERS[character].characterCount; i++){
        const[m, n] = getRandomPositionsForCharacter(matrix);
        matrix[m][n] = Number(character);
      }
    })
    return matrix;
  }

  const createCurrentMatrix = compose(setCharacterOnPlayfield, createInitialMatrix);
  const CURRENT_MATRIX = createCurrentMatrix(size);

  const getCharactersCurrentPosition = (character) => {
    const CHARACTER_POSITION = new Array(0);
    CURRENT_MATRIX.forEach(elem => {
      if(elem.includes(character)){
        elem.filter((item, index) => {
          if(item == character){
            const elemIndex = CURRENT_MATRIX.indexOf(elem);
            CHARACTER_POSITION.push(Array.of(elemIndex, index));
          }
        })
      }
    })
    return CHARACTER_POSITION;
  }

  const moveCharacter = (character, positions) => {
    const [CURRENT_X, CURRENT_Y] = positions.currentPosition;
    const [POSITION_X, POSITION_Y] = positions.newPosition;
    CURRENT_MATRIX[CURRENT_X].splice(CURRENT_Y, 1, FREE_CELL);
    CURRENT_MATRIX[POSITION_X].splice(POSITION_Y, 1, character);
  }

  const determineNextPositionCharacter = (position) => {
    return CURRENT_MATRIX[position[X]][position[Y]];
  }

  const isRabbitCanMove = (position) => {
    const NEXT_POSITION_CHARACTER = determineNextPositionCharacter(position);
    if(CHARACTERS[RABBIT].canMove.includes(NEXT_POSITION_CHARACTER)){
      return true;
    }
  }

  const getNewPosition = (step) => {
    const NEW_X = add(size, step[X]) % size;
    const NEW_Y = add(size, step[Y]) % size;
    return Array.of(NEW_X, NEW_Y);
  };

  const calculateRabbitNewPosition = (position, direction) => {
    const STEP = determineAdjacentPosition(position, MOVE_DIRECTION[direction]);
    const NEW_POSITION = getNewPosition(STEP);
    return NEW_POSITION;
  }

  const getRabbitPositions = (event) => {
    const DIRECTION = event.target.className;
    let currentPosition = getCharactersCurrentPosition(RABBIT)[X];
    let newPosition = calculateRabbitNewPosition(currentPosition, DIRECTION);
    if(isRabbitCanMove(newPosition) && isInRange(newPosition)){
      return {
        currentPosition,
        newPosition
      }
    }
  }

  const updateRabbitPosition = (position) => {
    if(position){
      moveCharacter(RABBIT, position);                               
    }
  }

  const getRabbitNewPosition = (event) => {
    const RABBIT_POSITIONS = getRabbitPositions(event);
    if(RABBIT_POSITIONS){
      updateRabbitPosition(RABBIT_POSITIONS);
      const RABBIT_NEW_POSITION = RABBIT_POSITIONS.newPosition;
      return RABBIT_NEW_POSITION;
    } 
  }

  const getPlayfieldRange = () => {
    return [...Array(size).keys()];
  }

  const isInRange = (position) => {
    const RANGE = getPlayfieldRange();
    if(RANGE.includes(position[X]) && RANGE.includes(position[Y])){
      return true;
    }
  }
  
  const isWolfCanMove = (position) => {
    const NEXT_POSITION_CHARACTER = determineNextPositionCharacter(position);
    if(CHARACTERS[WOLF].canMove.includes(NEXT_POSITION_CHARACTER)){
      return true;
    }
  }

  const getDistancesAndPositions = (wolfPosition, rabbitPosition) => {
    const DISTANCES = new Array(0);
    const POSITIONS = new Array(0);
    DIRECTION_MOVEMENT.forEach(direction => {
      const POSITION = determineAdjacentPosition(wolfPosition, direction);
      if(isInRange(POSITION) && isWolfCanMove(POSITION) && rabbitPosition){
        const DISTANCE = calculateDistance(POSITION, rabbitPosition);
        DISTANCES.push(DISTANCE);
        POSITIONS.push(POSITION);
      }
    })
    return {
      DISTANCES,
      POSITIONS
    }
  }

  const getPositions = (wolfPosition, rabbitPosition) => {
    let currentPosition = wolfPosition;
    const DISTANCES_AND_POSITIONS = getDistancesAndPositions(wolfPosition, rabbitPosition);
    let newPosition = determineNearestPosition(DISTANCES_AND_POSITIONS);
    return {
      currentPosition,
      newPosition
    }
  }

  const updateWolfPosition = (rabbitPosition) => (position) =>{
    const WOLF_POSITIONS = getPositions(position, rabbitPosition);
    if(!WOLF_POSITIONS.newPosition){
      WOLF_POSITIONS.newPosition = WOLF_POSITIONS.currentPosition;
    }else if(rabbitPosition && getCharactersCurrentPosition(HOUSE)[X]){
      moveCharacter(WOLF, WOLF_POSITIONS);
    }
  }

  const updateWolvesPositions = (charactersPositions) => {
    charactersPositions.wolvesCurrentPositions.map(updateWolfPosition(charactersPositions.rabbitNewPosition));
  }

  const getCharactersPositions = (event) => {
    let wolvesCurrentPositions = getCharactersCurrentPosition(WOLF);
    let rabbitNewPosition = getRabbitNewPosition(event);
    return {
      wolvesCurrentPositions,
      rabbitNewPosition
    }
  }

  const makeCharactersMovement = compose(updateWolvesPositions, getCharactersPositions);
}


      
