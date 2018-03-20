var anagramSets = {

};

document.getElementById("findButton").onclick = function () {
    // your code will go here ...
    var testWord = '';
    var output = [];

    function alphabetize(a) {
        return a.toLowerCase().split("").sort().join("").trim();
    }

    for (let i = 0; i < words.length; i++) {
        testWord = alphabetize(words[i]);
        if (!anagramSets[testWord]) {
            anagramSets[testWord] = [];
        }
        anagramSets[testWord].push(words[i]);
    }

    for (testWord in anagramSets) {
        let length = anagramSets[testWord].length;
        let output = anagramSets[testWord];
        let wordsDiv = document.getElementById('wordsDiv');
        let newDiv = document.createElement('div');

        if (length >= 5) {
            wordsDiv.appendChild(newDiv);
            newDiv.innerHTML = (output.toString());
        }
    }
}