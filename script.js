// ===============================
// MASTERCOMMERCE
// PD DEVELOPERS
// ===============================

// ---------- DOM ELEMENTS ----------

const sidebar = document.getElementById("sidebar");
const menuButton = document.getElementById("menuButton");
const closeSidebarButton = document.getElementById("closeSidebar");

const navItems = document.querySelectorAll(".nav-item");
const subjectCards = document.querySelectorAll(".subject-card");

const pages = document.querySelectorAll(".page");

const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");
const chatMessages = document.getElementById("chatMessages");

const newChatButton = document.getElementById("newChatButton");


// ---------- CHAT HISTORY ----------

let conversationHistory = [];


// ---------- PAGE NAVIGATION ----------

function showPage(pageName) {

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(`${pageName}Page`);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    navItems.forEach(item => {
        item.classList.remove("active");

        if (item.dataset.page === pageName) {
            item.classList.add("active");
        }
    });

    if (sidebar) {
        sidebar.classList.remove("open");
    }
}


// ---------- NAVIGATION ----------

navItems.forEach(item => {

    item.addEventListener("click", () => {

        const page = item.dataset.page;

        if (page) {
            showPage(page);
        }

    });

});


// ---------- MOBILE SIDEBAR ----------

if (menuButton) {

    menuButton.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });

}

if (closeSidebarButton) {

    closeSidebarButton.addEventListener("click", () => {
        sidebar.classList.remove("open");
    });

}


// ---------- SUBJECT CARDS ----------

subjectCards.forEach(card => {

    card.addEventListener("click", () => {

        const subject = card.dataset.subject;

        if (subject) {
            showPage(subject);
        }

    });

});


// ---------- TEXTAREA ----------

if (chatInput) {

    chatInput.addEventListener("input", () => {

        chatInput.style.height = "auto";

        chatInput.style.height =
            Math.min(chatInput.scrollHeight, 200) + "px";

    });


    chatInput.addEventListener("keydown", event => {

        if (event.key === "Enter" && !event.shiftKey) {

            event.preventDefault();

            sendMessage();

        }

    });

}


// ---------- HTML SAFETY ----------

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


// ---------- ADD MESSAGE ----------

function createMessage(role, text) {

    if (!chatMessages) return;

    const message = document.createElement("div");

    message.className = `message ${role}`;

    if (role === "user") {

        message.innerHTML = `
            <div class="message-content">
                ${escapeHTML(text)}
            </div>
        `;

    } else {

        message.innerHTML = `
            <div class="assistant-avatar">M</div>

            <div class="message-content">
                ${escapeHTML(text).replace(/\n/g, "<br>")}
            </div>
        `;

    }

    chatMessages.appendChild(message);

    chatMessages.scrollTop = chatMessages.scrollHeight;

    return message;
}


// ---------- TYPING MESSAGE ----------

function createTypingMessage() {

    if (!chatMessages) return null;

    const message = document.createElement("div");

    message.className = "message assistant";

    message.innerHTML = `
        <div class="assistant-avatar">M</div>

        <div class="message-content typing">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;

    chatMessages.appendChild(message);

    chatMessages.scrollTop = chatMessages.scrollHeight;

    return message;
}


// ---------- SEND MESSAGE ----------

async function sendMessage() {

    const question = chatInput.value.trim();

    if (!question) return;

    createMessage("user", question);

    chatInput.value = "";

    chatInput.style.height = "auto";

    sendButton.disabled = true;

    const typingMessage = createTypingMessage();


    try {

        const response = await fetch("http://localhost:3000/api/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                message: question,

                history: conversationHistory

            })

        });


        const data = await response.json();


        if (typingMessage) {
            typingMessage.remove();
        }


        if (!response.ok) {

            throw new Error(
                data.error || "Something went wrong."
            );

        }


        createMessage("assistant", data.answer);


        // Save conversation

        conversationHistory.push({

            role: "user",

            content: question

        });


        conversationHistory.push({

            role: "assistant",

            content: data.answer

        });


    } catch (error) {

        console.error(error);

        if (typingMessage) {
            typingMessage.remove();
        }

        createMessage(
            "assistant",
            "Sorry, I couldn't connect to Mastercommerce AI. Make sure the server is running."
        );

    }


    sendButton.disabled = false;

    chatInput.focus();

}


// ---------- SEND BUTTON ----------

if (sendButton) {

    sendButton.addEventListener("click", sendMessage);

}


// ---------- NEW CHAT ----------

if (newChatButton) {

    newChatButton.addEventListener("click", () => {

        conversationHistory = [];

        if (chatMessages) {
            chatMessages.innerHTML = "";
        }

        createMessage(
            "assistant",
            "Hi! I'm Mastercommerce AI. 👋\n\nI can help you learn Accounting, Economics and Mathematics.\n\nWhat would you like to learn today?"
        );

        showPage("home");

        chatInput.focus();

    });

}


// ---------- TOPIC BUTTONS ----------

const topicButtons = document.querySelectorAll(".topic-button");

topicButtons.forEach(button => {

    button.addEventListener("click", () => {

        const topic = button.dataset.topic;

        showPage("home");

        chatInput.value =
            `Teach me ${topic} in the easiest way possible.`;

        chatInput.focus();

        chatInput.dispatchEvent(new Event("input"));

    });

});


// ---------- PAST PAPERS ----------

const pastPapers = [

    {
        subject: "accounting",
        year: "2025",
        title: "Accounting Grade 12 Final Examination Paper 1",
        type: "Question Paper",
        file: "#"
    },

    {
        subject: "accounting",
        year: "2025",
        title: "Accounting Grade 12 Final Examination Paper 1",
        type: "Memo",
        file: "#"
    },

    {
        subject: "economics",
        year: "2025",
        title: "Economics Grade 12 Final Examination Paper 1",
        type: "Question Paper",
        file: "#"
    },

    {
        subject: "economics",
        year: "2025",
        title: "Economics Grade 12 Final Examination Paper 1",
        type: "Memo",
        file: "#"
    },

    {
        subject: "mathematics",
        year: "2025",
        title: "Mathematics Grade 12 Final Examination Paper 1",
        type: "Question Paper",
        file: "#"
    },

    {
        subject: "mathematics",
        year: "2025",
        title: "Mathematics Grade 12 Final Examination Paper 1",
        type: "Memo",
        file: "#"
    }

];


const paperSearch = document.getElementById("paperSearch");
const paperCount = document.getElementById("paperCount");
const papersContainer = document.getElementById("papersContainer");
const emptyPapers = document.getElementById("emptyPapers");

let selectedPaperFilter = "all";


// ---------- PAPER FILTER ----------

document.querySelectorAll(".paper-filter").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".paper-filter").forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedPaperFilter = button.dataset.filter;

        displayPapers();

    });

});


// ---------- PAPER SEARCH ----------

if (paperSearch) {

    paperSearch.addEventListener("input", displayPapers);

}


// ---------- DISPLAY PAPERS ----------

function displayPapers() {

    if (!papersContainer) return;

    const search =
        paperSearch?.value.toLowerCase().trim() || "";

    const filtered = pastPapers.filter(paper => {

        const matchesFilter =
            selectedPaperFilter === "all" ||
            paper.subject === selectedPaperFilter;

        const searchableText =
            `${paper.title} ${paper.subject} ${paper.year} ${paper.type}`
                .toLowerCase();

        const matchesSearch =
            searchableText.includes(search);

        return matchesFilter && matchesSearch;

    });


    papersContainer.innerHTML = "";


    if (paperCount) {
        paperCount.textContent =
            `${filtered.length} paper${filtered.length === 1 ? "" : "s"}`;
    }


    if (filtered.length === 0) {

        if (emptyPapers) {
            emptyPapers.style.display = "block";
        }

        return;

    }


    if (emptyPapers) {
        emptyPapers.style.display = "none";
    }


    filtered.forEach(paper => {

        const card = document.createElement("div");

        card.className = "paper-card";

        card.innerHTML = `

            <div class="paper-icon">
                📄
            </div>

            <div class="paper-info">

                <h3>
                    ${escapeHTML(paper.title)}
                </h3>

                <p>
                    ${escapeHTML(paper.year)}
                    ·
                    ${escapeHTML(paper.type)}
                </p>

            </div>

            <button class="paper-open">
                Open
            </button>

        `;


        card.querySelector(".paper-open")
            .addEventListener("click", () => {

                openPaper(paper);

            });


        papersContainer.appendChild(card);

    });

}


// ---------- OPEN PAPER ----------

function openPaper(paper) {

    if (paper.file && paper.file !== "#") {

        window.open(
            paper.file,
            "_blank"
        );

        return;

    }


    alert(
        "This past paper will be connected to the Mastercommerce paper library when the admin upload system is added."
    );

}


// ---------- INITIALISE ----------

displayPapers();

showPage("home");


// ---------- FIRST AI MESSAGE ----------

if (chatMessages && chatMessages.children.length === 0) {

    createMessage(
        "assistant",
        "Hi! I'm Mastercommerce AI. 👋\n\nI can help you learn Accounting, Economics and Mathematics in simple English.\n\nAsk me anything."
    );

}
