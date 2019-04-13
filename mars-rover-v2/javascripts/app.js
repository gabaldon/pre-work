
var rovers = {
    ox: {
      name: 'OX',
      direction: 'N', 
      x: 0, 
      y: 0, 
      travelLog: []
    }, 
  };

// GRID
var gridSize = {
  x: 10,
  y: 10
};
var grid = [];
function generateGrid(grid, gridSize) {
  for (var i = 0; i < gridSize.x; i++) {
    grid[i] = [];
    for (var j = 0; j < gridSize.y; j++) {
      grid[i][j] = '';
    }
  }
};


console.log('%cMars Rover Kata (Pre-work)', 'font-size: 16pt; font-weight: 500');


/*
 TURN LEFT
 */
function turnLeft(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  }

  console.log('%cTurned left! New direction: ' + rover.direction, 'font-weight: 500; color: green');
}

/*
 TURN RIGHT
 */
function turnRight(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }

  console.log('%cTurned right! New direction: ' + rover.direction, 'font-weight: 500; color: green');
}

/*
 MOVE FORWARD
 */

function moveForward(rover, grid){
  
  var prevX = rover.x;
  var prevY = rover.y;

  switch (rover.direction) {
    case 'N':
      rover.y--;
      break;
    case 'S':
      rover.y++;
      break;
    case 'E':
      rover.x++;
      break;
    case 'W':
      rover.x--;
      break;
  }

  // IF OUT OF GRID - OUT OF GRID FUNCTION

  if (outOfGrid(grid, rover)) {
    rover.x = prevX;
    rover.y = prevY;
  } else {

    
    rover.travelLog.push([prevX, prevY]);
    grid[rover.y][rover.x] += rover.name;

    console.log('%cMoved forward! Position: [' + rover.x + ',' + rover.y + ']',
                'font-weight: 500; color: red');
  }
}


/*
 OUT OF GRID FUNCTION
 */

function outOfGrid(grid, rover) {
  
  if (typeof grid[rover.x] === 'undefined' || typeof grid[rover.x][rover.y] === 'undefined') {
    console.log('%cOut of the grid!', 'font-weight: 500; color: red');
    return true;
  } 
  
  return false;
}

/**
 * COMMANDS
 */
function commands(str, rover) {
  

  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'f':
        moveForward(rover, grid);
        break;
      case 'b':
        moveBackward(rover, grid);
        break;
      case 'r':
        turnRight(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      default: // If the command isn't valid
        console.log('%cThe command "' + str[i] + '" is not valid! ' + 
                    'It can only be "f", "b", "r", or "l"', 'font-weight: 500; color: red');
        break;
    }
  }

  

  // SHOW TRAVEL-LOG
  var log = '';
  rover.travelLog.forEach(function(position) {
    log += '[' + position[0] + ',' + position[1] + '] ';
  });
  console.log('%c\tTravel log: ' + log, 'font-weight: 500');

  // SHOW POSITION
  console.log('%c\tActual position: [' + rover.x + ',' + rover.y + ']', 'font-weight: 500');

  
}




  


