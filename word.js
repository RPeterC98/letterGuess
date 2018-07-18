var letter = require("letter.js");

var Word = function(word){
    this.word = word

    this.lettersArray = [];

    this.letterObjArray = [];

    this.found = false;

    this.fillArray = function(){
        for(i=0; i < this.word.length; i++)
        {
            this.letterObjArray.push(new letter.Letter(this.word[i].toLowerCase()));
        }
    }

    this.wordFound = function(){
        var counter = 0;

        for(i = 0; i < this.letterObjArray.length;i++)
        {
            if(this.letterObjArray[i].found == false)
            {
                return false;
            }
            else if(this.letterObjArray[i].found == true)
            {
                return counter++;
            }
        }
        if(counter == this.letterObjArray.length)
        {
            return true
        }
        else
        {
            return false;
        }
    }

    this.letterCheck = function(guess)
    {
        var returnNum = 0;

        for(i = 0; i < this.letterObjArray.length; i++)
        {
            if(this.letterObjArray[i].letter.toLowerCase() == guess)
            {
                this.letterObjArray[i].shown = true
                returnNum++;
            }
        }

        return returnNum;
    }

    this.showWord = function()
    {
        var word = ""
        for(i = 0; i < this.letterObjArray.length; i++)
        {
            word += this.letterObjArray[i].display();
        }

        return word;
    }

    exports.Word = Word;

}
