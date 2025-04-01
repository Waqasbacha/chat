// DOM Elements
const chatBtn = document.getElementById('chat-btn');
const chatbotContainer = document.getElementById('chatbot-container');
const minimizeBtn = document.getElementById('minimize-btn');
const chatArea = document.getElementById('chat-area');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Toggle Chat Window
chatBtn.addEventListener('click', () => {
  if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
    chatbotContainer.style.display = 'flex';
  } else {
    chatbotContainer.style.display = 'none';
  }
});

// Minimize Chat Window
minimizeBtn.addEventListener('click', () => {
  chatbotContainer.style.display = 'none';
});

// Send Message
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

// Send Message Function
function sendMessage() {
  const userMessage = userInput.value.trim();
  if (userMessage === '') return;

  // Display User Message
  chatArea.innerHTML += `<div class="message user">${userMessage}</div>`;

  // Display Bot Response
  let botResponse = `I'm sorry, I don't have information on that. Please check our website for more help.`;
  
  chatArea.innerHTML += `<div class="message bot">${botResponse}</div>`;

  // Clear Input and Scroll to Bottom
  userInput.value = '';
  chatArea.scrollTop = chatArea.scrollHeight;
}
