var prompt = require("prompt");
var Word = require("word.js")
var wordBank = ["computer", "coding", "baseball", "dracula", "peter", "bruges"]

prompt.start();

game = {
    wins: 0,
    guesses: 10,
    currentWord,

    startGame: function (word) {
        guesses = 10;
        this.lettersGuessed = "";
        this.currentWord = new Word.Word(wordBank[Math.random() * 5].toLowerCase())
    }, keepPromptingUser: function () {

        prompt.get(['guess'], function (err, result) {
            clear();
            var input = result.guess.toUpperCase();

            if (result.guess.length > 1 || this.lettersGuessed.includes(input)) {
                console.log('Please enter one letter only and only a letter that has not been used already');
                console.log('Letter Guessed: ' + input);
                console.log('Letters Already Guessed: ' + this.lettersGuessed);
                console.log('\nGuesses Remaining: ', this.guesses);
                console.log(this.currentWord.showWord());
                console.log('here are the letters you guessed already: ');
                console.log(this.lettersGuessed);
                this.keepPromptingUser();
            }
            else {

                console.log('Letter Guessed: ' + input);

                this.lettersGuessed += input;

                var lettersMatched = this.currentWord.letterCheck(input);

                if (lettersMatched == 0) {
                    console.log('You guessed wrong!');
                    this.guesses--;
                }
                else {
                    console.log('You guessed right!');

                    if (this.currentWord.wordFound()) {
                        console.log(this.currentWord.showWord());
                        console.log('You Won!!!');
                        return;
                    }
                }

                console.log('Guesses remaining: ', this.guesses);
                console.log(this.currentWord.showWord());
                console.log('Letters Guessed: ');
                console.log(this.lettersGuessed);

                if ((this.guesses > 0) && (this.currentWord.found == false)) {
                    this.keepPromptingUser();
                }
                else if (this.guesses == 0) {
                    clear();
                    console.log('Game Over', this.currentWord.word);
                }
                else {
                    console.log(this.currentWord.showWord());
                }
            }
        });

    }


};

game.startGame();

