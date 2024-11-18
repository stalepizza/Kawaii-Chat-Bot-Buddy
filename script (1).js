// script.js
const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");

// Kawaii bot's cheerful responses
const responses = [
  "✨ You're doing amazing, sweetie! ✨",
  "🌸 Keep smiling! The world needs your light 🌈",
  "🍩 Did someone say snacks? You're the sweetest! 💖",
  "🌟 Don't forget to take breaks. You're a star! 🌟",
  "💌 Sending you hugs and good vibes! 💕",
];

// Add a message to the chat
function addMessage(message, sender) {
  const messageBubble = document.createElement("div");
  messageBubble.classList.add("chat-bubble");
  messageBubble.classList.add(sender === "user" ? "user-message" : "bot-message");
  messageBubble.textContent = message;
  chatBody.appendChild(messageBubble);
  chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the latest message
}

// Handle user input
sendButton.addEventListener("click", () => {
  const userMessage = userInput.value.trim();
  if (userMessage === "") return;

  // Display user message
  addMessage(userMessage, "user");

  // Clear input field
  userInput.value = "";

  // Bot response with a slight delay
  setTimeout(() => {
    const botMessage = responses[Math.floor(Math.random() * responses.length)];
    addMessage(botMessage, "bot");
  }, 1000);
});

// Allow "Enter" key to send messages
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendButton.click();
  }
});

