const jokeIndex = 0;

const jokes = [
    ["If the internet is a boat, where would they park it?", "Google doc."],
    ["What did the zero say to the eight?", "Nice belt!"]
];

const chatContent = document.querySelector(".chat-content");

function appendBotMessage(messageText) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message bot-message";
    
    const avatar = document.createElement("i");
    avatar.className = "fas fa-robot message-avatar";

    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.textContent = messageText;

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentDiv);
    chatContent.appendChild(messageDiv);
    scrollToBottom();
}

function appendUserMessage(messageText) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message user-message";
    
    const avatar = document.createElement("i");
    avatar.className = "fas fa-smile message-avatar";

    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.textContent = messageText;

    messageDiv.appendChild(contentDiv);
    messageDiv.appendChild(avatar);
    chatContent.appendChild(messageDiv);
    scrollToBottom();
}

function scrollToBottom() {
    chatContent.scrollTop = chatContent.scrollHeight;
}

function requestJoke() {
    const userMessage = "Tell me a joke!";
    appendUserMessage(userMessage);

    setTimeout(() => {
        appendBotMessage("Ok, got one.");
    }, 1000);

    setTimeout(() => {
        appendBotMessage(jokes[jokeIndex][0]);
    }, 1500);

    setTimeout(() => {
        appendBotMessage(jokes[jokeIndex][1]);
    }, 2000);

    // Avanzar al siguiente chiste (ciclo)
    jokeIndex = (jokeIndex + 1) % jokes.length;
}

// Mensaje inicial del bot
appendBotMessage("Hello! I am Comedian Bot, here to make you laugh. Let me think of a joke.");