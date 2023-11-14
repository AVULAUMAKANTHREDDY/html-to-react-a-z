let chatBox = document.getElementById("chat-box");
let userInput = document.getElementById("user-input");
let sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", sendMessage);

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  appendMessage("sent", message);
  // Replace the following line with actual chatbot logic
  let reply = "I'm a simple chatbot. How can I assist you?";
 


  appendMessage("received", reply);

  userInput.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function appendMessage(type, text) {
  let messageDiv = document.createElement("div");
  messageDiv.classList.add("message", type);
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
}