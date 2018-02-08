document.getElementById("findButton").onclick = function() {
    // your code will go here ...
    var typedText = document.getElementById("input").value;
    typedText = typedText.toLowerCase().split("").sort().join("").trim();
    var testWord = '';
    var output = [];

    function alphabetize(a) {
        return a.toLowerCase().split("").sort().join("").trim();
    }
        for (let i=0; i<words.length; i++){
            testWord = alphabetize(words[i]);
            if (testWord === typedText){
                output.push(words[i]);
            }
        }

        for (let o=0; o<output.length; o++) {
        var span = document.createElement("div");
        span.id = "anaOut"
        var textContent = document.createTextNode(o + "." + " "+ output[o]);
        span.appendChild(textContent);
        document.getElementById("wordsDiv").appendChild(span);
        }
    }
    
    


