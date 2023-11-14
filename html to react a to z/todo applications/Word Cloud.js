let addButton = document.getElementById("addButton");
let wordInput = document.getElementById("wordInput");
let wordCloud = document.getElementById("wordCloud");



let words = [
    "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", 
    "adipisicing", "elit", "sed", "do", "eiusmod", "tempor", 
    "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua"
    // Add more words here
];

function createWordCloud() {
    words.forEach(word => {
        let wordElement = document.createElement("span");
        wordElement.textContent = word;
        
        let fontSize = Math.floor(Math.random() * 30) + 12; // Random font size between 12 and 41
        wordElement.style.fontSize = `${fontSize}px`;
        wordCloud.appendChild(wordElement);
    });
}

createWordCloud();



addButton.addEventListener("click", () => {
    let word = wordInput.value.trim();
    if (word !== "") {
        let wordElement = document.createElement("div");
        wordElement.classList.add("word");
        wordElement.textContent = word;
        wordCloud.appendChild(wordElement);
        wordInput.value = "";
    }
});
