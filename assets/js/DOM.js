
document.addEventListener('DOMContentLoaded', init)

function init () {
  console.log('DOM script init()')

  restart()

  var $container = $('.container')
  var $playerNumber = $('#playerNumber')
  var status

  $container.css('opacity', '1')

  $container.on('click', '.gridbox', function (e) {
    var $grid = e.target
    var gridIndex = $grid.id[$grid.id.length - 1]
    playTurn(gridIndex)
    setGridDOM(grid)
    status = whoWon()

    if (status === 1 || status === 2) {
      console.log('Player ' + player + ' wins!')
      setTimeout(function () {
        alert('Player ' + player + ' wins!')
        restart()
        setGridDOM(grid)
        $playerNumber.text(player)
      }, 100)
    } else if (status === 3) {
      console.log('Draw!')
      setTimeout(function () {
        alert('Draw')
        restart()
        setGridDOM(grid)
        $playerNumber.text(player)
      }, 100)
    } else {
      $playerNumber.text(player)
    }
  })
}

function setGridDOM (grid) {
  console.log('setGridDOM')
  console.log(grid)
  for (var i = 0; i < grid.length; i++) {
    var $grid = $('#gridbox' + i + ' span')
    if (grid[i] !== 'X' && grid[i] !== 'O') {
      // console.log('if')
      $grid.text('')
    } else {
      var text = grid[i]
      $grid.text(grid[i])
      if (text === 'X') {
        $grid.css('color', '#118AB2')
      } else {
        $grid.css('color', '#EF476F')
      }
    }
  }
}
