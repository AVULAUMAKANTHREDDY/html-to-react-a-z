let userInputEl = document.getElementById("userInput");
let saveButtonEl = document.getElementById("saveButton");
let clearButtonEl = document.getElementById("clearButton");

let storageKey = "inputOfUser";

saveButtonEl.onclick = function(){
  let userInput = userInputEl.value;
  
  if (userInput === ""){
    alert("Please Enter Valid Input")
    return;
  }
  else {
    localStorage.setItem(storageKey, userInput);
  }
}
userInputEl.value = localStorage.getItem(storageKey);


clearButtonEl.onclick = function(){
  localStorage.removeItem(storageKey);
  userInputEl.value = "";
}



