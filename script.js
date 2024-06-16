let dictionary = {};

function addWord() {
    let word = document.getElementById("add-word").value.trim();
    if (word === "") {
        alert("Please enter a word.");
        return;
    }
    dictionary[word.toLowerCase()] = true;
    document.getElementById("add-word").value = "";
    document.getElementById("message").textContent = "Word saved successfully!";
}

function searchWord() {
    let word = document.getElementById("search-word").value.trim();
    if (word === "") {
        alert("Please enter a word.");
        return;
    }
    if (dictionary[word.toLowerCase()]) {
        document.getElementById("message").textContent = "The word is in the dictionary.";
    } else {
        document.getElementById("message").textContent = "The word is not in the dictionary.";
    }
}