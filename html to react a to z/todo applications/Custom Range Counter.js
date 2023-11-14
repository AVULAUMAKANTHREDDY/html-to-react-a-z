const valueInput = document.getElementById("valueInput");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const counterValue = document.getElementById("counterValue");

let currentValue = 0;

function updateCounter() {
  counterValue.textContent = currentValue;
}

function increaseCounter() {
  currentValue++;
  updateCounter();
}

function decreaseCounter() {
  if (currentValue > 0) {
    currentValue--;
    updateCounter();
  }
}

increaseBtn.addEventListener("click", increaseCounter);
decreaseBtn.addEventListener("click", decreaseCounter);

valueInput.addEventListener("input", function () {
  currentValue = parseInt(valueInput.value) || 0;
  updateCounter();
});

// Initial call to set counter value
updateCounter();
