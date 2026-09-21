/* =====================================================
   MASTERCOMMERCE
   Local Knowledge System
   No OpenAI required
===================================================== */


/* -----------------------------
   ELEMENTS
----------------------------- */

const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");
const newChatButton = document.getElementById("newChatButton");
const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");


/* -----------------------------
   CONVERSATION
----------------------------- */

let conversationHistory = [];


/* -----------------------------
   SUBJECT DETECTION
----------------------------- */

function detectSubject(question) {

    const text = question.toLowerCase();

    const accountingWords = [
        "accounting",
        "asset",
        "liability",
        "equity",
        "depreciation",
        "inventory",
        "vat",
        "tax",
        "audit",
        "auditing",
        "ledger",
        "journal",
        "balance sheet",
        "income statement",
        "financial statements",
        "profit",
        "loss",
        "debtors",
        "creditors",
        "cash flow",
        "ifrs",
        "ias",
        "cost accounting",
        "managerial accounting"
    ];


    const economicsWords = [
        "economics",
        "inflation",
        "unemployment",
        "economic growth",
        "gdp",
        "aggregate demand",
        "aggregate supply",
        "market",
        "demand",
        "supply",
        "elasticity",
        "monopoly",
        "oligopoly",
        "perfect competition",
        "fiscal policy",
        "monetary policy",
        "interest rate",
        "exchange rate",
        "economic cycle",
        "national income",
        "production",
        "consumer",
        "producer",
        "scarcity",
        "opportunity cost"
    ];


    const mathematicsWords = [
        "mathematics",
        "maths",
        "math",
        "equation",
        "algebra",
        "quadratic",
        "factorise",
        "factorize",
        "derivative",
        "differentiate",
        "integration",
        "integrate",
        "probability",
        "statistics",
        "geometry",
        "trigonometry",
        "sin",
        "cos",
        "tan",
        "function",
        "graph",
        "gradient",
        "sequence",
        "series",
        "logarithm",
        "log",
        "calculus",
        "matrix"
    ];


    let accountingScore = 0;
    let economicsScore = 0;
    let mathematicsScore = 0;


    accountingWords.forEach(word => {
        if (text.includes(word)) {
            accountingScore++;
        }
    });


    economicsWords.forEach(word => {
        if (text.includes(word)) {
            economicsScore++;
        }
    });


    mathematicsWords.forEach(word => {
        if (text.includes(word)) {
            mathematicsScore++;
        }
    });


    const scores = [
        {
            subject: "Accounting",
            score: accountingScore
        },

        {
            subject: "Economics",
            score: economicsScore
        },

        {
            subject: "Mathematics",
            score: mathematicsScore
        }
    ];


    scores.sort((a, b) => b.score - a.score);


    if (scores[0].score === 0) {
        return null;
    }


    return scores[0].subject;
}


/* -----------------------------
   SEARCH ECONOMICS
----------------------------- */

function searchEconomics(question) {

    const text = question.toLowerCase();

    let bestMatch = null;
    let highestScore = 0;


    economicsKnowledge.forEach(item => {

        let score = 0;


        item.keywords.forEach(keyword => {

            if (text.includes(keyword.toLowerCase())) {
                score++;
            }

        });


        if (text.includes(item.topic.toLowerCase())) {
            score += 3;
        }


        if (score > highestScore) {

            highestScore = score;
            bestMatch = item;

        }

    });


    return bestMatch;
}


/* -----------------------------
   CREATE MESSAGE
----------------------------- */

function createMessage(role, content, subject = null) {

    const message = document.createElement("div");

    message.className = `message ${role}`;


    const messageContent = document.createElement("div");

    messageContent.className = "message-content";


    if (subject && role === "assistant") {

        const badge = document.createElement("div");

        badge.className = "subject-badge";

        badge.textContent = subject;

        messageContent.appendChild(badge);

    }


    const text = document.createElement("div");

    text.textContent = content;

    messageContent.appendChild(text);

    message.appendChild(messageContent);

    chatMessages.appendChild(message);


    chatMessages.scrollTop = chatMessages.scrollHeight;


    return message;
}


/* -----------------------------
   TYPING MESSAGE
----------------------------- */

function createTypingMessage() {

    const message = document.createElement("div");

    message.className = "message assistant";


    const content = document.createElement("div");

    content.className = "typing";

    content.textContent = "Mastercommerce is thinking...";


    message.appendChild(content);

    chatMessages.appendChild(message);


    chatMessages.scrollTop = chatMessages.scrollHeight;


    return message;
}


/* -----------------------------
   ANSWER QUESTION
----------------------------- */

async function answerQuestion(question) {

    const subject = detectSubject(question);


    /* No subject detected */

    if (!subject) {

        return {
            subject: null,

            answer:
                "I'm not sure which subject your question belongs to. Try asking about Accounting, Economics or Mathematics."
        };

    }


    /* ECONOMICS */

    if (subject === "Economics") {

        const result = searchEconomics(question);


        if (result) {

            return {
                subject: "Economics",

                answer:
                    `Here is what I found about ${result.topic}:\n\n${result.content.trim()}`
            };

        }


        return {
            subject: "Economics",

            answer:
                "I know this is an Economics question, but I don't have information about this topic yet. You can add the topic and its information to economics.js."
        };

    }


    /* ACCOUNTING */

    if (subject === "Accounting") {

        return {
            subject: "Accounting",

            answer:
                "I detected this as an Accounting question. The Accounting knowledge base has not been added yet."
        };

    }


    /* MATHEMATICS */

    if (subject === "Mathematics") {

        return {
            subject: "Mathematics",

            answer:
                "I detected this as a Mathematics question. The Mathematics knowledge base has not been added yet."
        };

    }

}


/* -----------------------------
   SEND MESSAGE
----------------------------- */

async function sendMessage() {

    const question = chatInput.value.trim();


    if (!question) {
        return;
    }


    /* Remove welcome screen */

    const welcome = document.querySelector(".welcome");

    if (welcome) {
        welcome.remove();
    }


    createMessage(
        "user",
        question
    );


    chatInput.value = "";

    chatInput.style.height = "auto";

    sendButton.disabled = true;


    const typingMessage = createTypingMessage();


    try {

        await new Promise(resolve =>
            setTimeout(resolve, 500)
        );


        const result = await answerQuestion(question);


        typingMessage.remove();


        createMessage(
            "assistant",
            result.answer,
            result.subject
        );


        conversationHistory.push({
            role: "user",
            content: question
        });


        conversationHistory.push({
            role: "assistant",
            content: result.answer
        });


    } catch (error) {

        typingMessage.remove();


        createMessage(
            "assistant",
            "Something went wrong. Please try again."
        );


        console.error(error);

    }


    sendButton.disabled = false;

    chatInput.focus();

}


/* -----------------------------
   ENTER TO SEND
----------------------------- */

chatInput.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            sendMessage();

        }

    }
);


/* -----------------------------
   AUTO RESIZE TEXTAREA
----------------------------- */

chatInput.addEventListener(
    "input",
    function() {

        this.style.height = "auto";

        this.style.height =
            Math.min(
                this.scrollHeight,
                150
            ) + "px";

    }
);


/* -----------------------------
   SEND BUTTON
----------------------------- */

sendButton.addEventListener(
    "click",
    sendMessage
);


/* -----------------------------
   NEW CHAT
----------------------------- */

newChatButton.addEventListener(
    "click",
    function() {

        conversationHistory = [];

        chatMessages.innerHTML = `
            <div class="welcome">

                <div class="welcome-logo">
                    M
                </div>

                <h1>What would you like to learn?</h1>

                <p>
                    Ask a question about Accounting,
                    Economics or Mathematics.
                </p>

            </div>
        `;

        chatInput.value = "";

        chatInput.focus();

    }
);


/* -----------------------------
   MOBILE MENU
----------------------------- */

menuButton.addEventListener(
    "click",
    function() {

        sidebar.classList.toggle("open");

    }
);


/* -----------------------------
   CLOSE MOBILE MENU
----------------------------- */

document.addEventListener(
    "click",
    function(event) {

        if (
            window.innerWidth <= 700 &&
            sidebar.classList.contains("open") &&
            !sidebar.contains(event.target) &&
            event.target !== menuButton
        ) {

            sidebar.classList.remove("open");

        }

    }
);
