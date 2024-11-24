const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Basic responses from the bot
const botResponses = {
    'hello': 'Hi! How can I assist you today?',
    'fever': 'It looks like you have a fever. Please rest and drink fluids. If it persists, consult a doctor.',
    'headache': 'For a headache, try resting and staying hydrated. If it’s severe, consider taking medication or consulting a healthcare provider.',
    'help': 'I am here to help with healthcare-related queries. Please describe your symptoms or ask a question.'
};

// Function to send message and get response
function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    // Display user message
    const userMessage = document.createElement('p');
    userMessage.classList.add('user-message');
    userMessage.textContent = message;
    chatBox.appendChild(userMessage);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Get bot response
    const botResponse = botResponses[message.toLowerCase()] || 'Sorry, I didn’t understand that. Please try asking another question.';
    setTimeout(() => {
        const botMessage = document.createElement('p');
        botMessage.classList.add('bot-message');
        botMessage.textContent = botResponse;
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500); // Bot replies after 0.5 seconds

    // Clear input field
    userInput.value = '';
}
