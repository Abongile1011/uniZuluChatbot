// script.js
function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatLog = document.getElementById("chat-log");

    // Clear the input field
    document.getElementById("user-input").value = "";

    // Get the current time
    const currentTime = new Date().toLocaleTimeString();

    // Display the user's message with a timestamp
    chatLog.innerHTML += `
        <div class="message user">
            <div class="message-content">${userInput}</div>
            <div class="message-time">${currentTime}</div>
        </div>
    `;

    // Simulate a bot response (replace this with your actual bot logic)
    const botResponse = generateResponse(userInput);

    // Display the bot's response with a timestamp
    chatLog.innerHTML += `
        <div class="message bot">
            <div class="message-content">${botResponse}</div>
            <div class="message-time">${currentTime}</div>
        </div>
    `;

    // Scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;
}

function generateResponse(userInput) {
    // Define responses with associated keywords
    const responses = {
        "hello": "Hello! How can I help you?",
        "where registration":"Registration can be made online",
        "how registration":"Registration can be done in two of the ways",
        "how are you": "I'm just a chatbot, but thanks for asking!",
        "bye": "Goodbye! Have a great day!",
        "weather": "I can provide weather information. Please specify a location.",
        "time": "I can tell you the current time. What time zone are you interested in?",
        
    };

    // Convert user input to lowercase for case-insensitive matching
    const inputLower = userInput.toLowerCase();

    // Check if any keywords are present in the user input
    for (const keyword in responses) {
        if (inputLower.includes(keyword)) {
            return responses[keyword];
        }
    }

    // Default response for unrecognized input
    return "I don't understand that question. Please ask something else.";
}
