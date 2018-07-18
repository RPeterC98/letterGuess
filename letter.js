function Letter(letter) {
    this.letter = letter;

    this.shown = false;

    this.display = function(){
        if(this.shown == true)
        {
            return this.letter
        }
        else{
            return " * ";
        }
    }
}

exports.letter = letter;