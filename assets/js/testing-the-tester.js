
var grid = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
var player = 1

function restart () {
  grid = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
  player = 1
}

function isGameOver () {
  if ((grid[0] === grid[1]) && (grid[1] === grid[2]) && (grid[0] !== undefined)) {
    return true
  } else if ((grid[3] === grid[4]) && (grid[4] === grid[5]) && (grid[3] !== undefined)) {
    return true
  } else if ((grid[6] === grid[7]) && (grid[7] === grid[8]) && (grid[6] !== undefined)) {
    return true
  } else if ((grid[0] === grid[3]) && (grid[3] === grid[6]) && (grid[0] !== undefined)) {
    return true
  } else if ((grid[1] === grid[4]) && (grid[4] === grid[7]) && (grid[1] !== undefined)) {
    return true
  } else if ((grid[2] === grid[5]) && (grid[5] === grid[8]) && (grid[2] !== undefined)) {
    return true
  } else if ((grid[0] === grid[4]) && (grid[4] === grid[8]) && (grid[0] !== undefined)) {
    return true
  } else if ((grid[2] === grid[4]) && (grid[4] === grid[6]) && (grid[2] !== undefined)) {
    return true
  } else if ((grid[0] !== undefined) && (grid[1] !== undefined) && (grid[2] !== undefined)
            && (grid[3] !== undefined) && (grid[4] !== undefined) && (grid[5] !== undefined)
            && (grid[6] !== undefined) && (grid[7] !== undefined) && (grid[8] !== undefined)) {
    player = 3
    return true
  } else {
    return false
  }
}

function whoWon () {
  if (isGameOver()) {
    return player
  } else {
    if (player === 1) {
      player = 2
    } else {
      player = 1
    }
  }
  return 0
}

function playTurn (index) {
  if (isGameOver()) {
    return false
  }
  if (grid[index] === undefined) {
    if (player === 1) {
      grid[index] = 'O'
    } else if (player === 2) {
      grid[index] = 'X'
    }
    return true
  } else {
    return false
  }
}
