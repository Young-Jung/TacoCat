function reverseString() {

    //Get the user's word
    let userWord = document.getElementById("tacoCat").value;
    let output = document.getElementById("tacoOutput");
    let cleanedWord = "";
    if (userWord.length > 1) {
        // 0_0 (: /-\ :) 0–0
        // 0–0 (: /-\ :) 0–0
        // 0&0 (: /-/:( 0&0
        if (document.getElementById("chkSymbol").checked) {
            cleanedWord = userWord.toLowerCase().replace(/[^A-Z0-9]/ig, '');
        } else {
            cleanedWord = userWord.toLowerCase().replace(/ /g, '');
        }
        //let cleanedWord = userWord.toLowerCase().replace(/[\W_]/g, '');
        //let cleanedWord = userWord.toLowerCase().replace(/[\W]/gi, '');

        let start = cleanedWord.length - 1;
        let reverseWord = "";
        //Do something here with it
        for (let i = start; i >= 0; i--) {
            reverseWord += cleanedWord[i];
        }

        if (reverseWord === cleanedWord) {
            output.innerText = "Yes! " + reverseWord + " is a Palindrome!";
        } else {
            output.innerText = "Sorry! " + reverseWord + " is Not a Palindrome!";
        }
    } else {
        output.innerText = " Palindrome should not be empty nor one character!";
        document.getElementById("tacoCat").focus();
    }
}