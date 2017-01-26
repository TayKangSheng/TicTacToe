# Tic-Tac-Tester.js
This script will test the game logic of your tic tac toe game. To use it you will need to include it in your html file _after_ your main tic-tac-toe script. 

Do not open test-the-tester.js file. It contains one implementation of Tic Tac Toe and is just there to ensure that the tests work. Ignore it and write your own code!

You will need to declare the following functions in the global scope: 

### playTurn(index)
It should take one parameter which is a zero-based index to your grid, indicating where the current player's token should be played. 
It should return a boolean value to indicate whether the move was allowed or not - true if it was successful, false otherwise e.g. if the square is already taken or the game is over.

### isGameOver()
It should return a true or false if the game is over.

### whoWon()
It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player one. It should return 3 if the game is a draw.

### restart()
It should restart the game so it can be played again.

It is assumed that the turns of the player will be automatically changed after an allowed move.

The application will console log all the passed or failed test.

## General tips
Create a new .js file that contains your functions, and replace the `<script src="./testing-the-tester.js"></script>` tag with the path to your new file.

You might want to create a few variables to store information about the current state of the game. Eg. an array to represent the tic tac toe grid (eg. `var grid = [...]`), and a variable to track who the current player is (1 or 2), etc.

There is no need to, but you can, look at the code in the tic-tac-tester.js file. This file contains code that will make use of the 4 functions you define (ie. it will call these functions) and check whether they return answers that they are supposed to. In other words, it will run all your functions multiple times to check that they work. 

So for example if playTurn(0) is called by the code in tic-tac-tester.js, and your grid array indicates that it was previously already clicked, then whoWon() should return 0 (because whoWon() is supposed to do that, according to the specification above). 
