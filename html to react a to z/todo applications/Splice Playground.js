let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInputElement = document.getElementById("startIndexInput");
let deleteCountInputElement = document.getElementById("deleteCountInput");
let itemToAddInputElement = document.getElementById("itemToAddInput");
let updatedArrayElement = document.getElementById("updatedArray");
let spliceBtnElement = document.getElementById("spliceBtn");

function convertArrtoJSONStringAndAppend() {
    const stringifiedArr = JSON.stringify(arr);
    updatedArrayElement.textContent = stringifiedArr;
}

convertArrtoJSONStringAndAppend();

spliceBtnElement.onclick = function spliceArray() {
    let startIndex = startIndexInputElement.value;
    let deleteCount = deleteCountInputElement.value;
    let itemToAdd = itemToAddInputElement.value;

    if (startIndex === "") {
        alert("Please enter start Index");
        return;
    }

    if (deleteCount === "") {
        deleteCount = 0;
    }

    if (itemToAdd === "") {
        arr.splice(parseInt(startIndex), parseInt(deleteCount));
    } else {
        arr.splice(parseInt(startIndex), parseInt(deleteCount), itemToAdd);
    }

    startIndexInputElement.value = "";
    deleteCountInputElement.value = "";
    itemToAddInputElement.value = "";
    convertArrtoJSONStringAndAppend();
};