/* =========================================
   MASTERCOMMERCE
   BY PD DEVELOPERS
   ========================================= */


/* =========================================
   ELEMENTS
   ========================================= */

const sidebar =
    document.getElementById("sidebar");

const menuButton =
    document.getElementById("menuButton");

const newChatButton =
    document.getElementById("newChat");

const menuItems =
    document.querySelectorAll(
        ".menu-item[data-page]"
    );

const subjectCards =
    document.querySelectorAll(
        ".subject-card"
    );

const pages =
    document.querySelectorAll(".page");

const chatInput =
    document.getElementById("chatInput");

const sendButton =
    document.getElementById("sendButton");


/* =========================================
   PAST PAPER DATABASE
   TEMPORARY DEMO DATA
   ========================================= */

const pastPapers = [

    {
        title: "Accounting Grade 12",
        subject: "accounting",
        year: "2025",
        term: "Final Examination",
        paper: "Paper 1",
        type: "Question Paper"
    },

    {
        title: "Accounting Grade 12",
        subject: "accounting",
        year: "2025",
        term: "Final Examination",
        paper: "Paper 1",
        type: "Memo"
    },

    {
        title: "Economics Grade 12",
        subject: "economics",
        year: "2025",
        term: "Final Examination",
        paper: "Paper 1",
        type: "Question Paper"
    },

    {
        title: "Economics Grade 12",
        subject: "economics",
        year: "2025",
        term: "Final Examination",
        paper: "Paper 1",
        type: "Memo"
    },

    {
        title: "Mathematics Grade 12",
        subject: "mathematics",
        year: "2025",
        term: "Final Examination",
        paper: "Paper 1",
        type: "Question Paper"
    },

    {
        title: "Mathematics Grade 12",
        subject: "mathematics",
        year: "2025",
        term: "Final Examination",
        paper: "Paper 1",
        type: "Memo"
    }

];


/* =========================================
   PAGE NAVIGATION
   ========================================= */

function showPage(pageName) {

    pages.forEach(page => {

        page.classList.remove(
            "active-page"
        );

    });


    const selectedPage =
        document.getElementById(pageName);


    if (selectedPage) {

        selectedPage.classList.add(
            "active-page"
        );

    }


    menuItems.forEach(item => {

        item.classList.remove("active");


        if (
            item.dataset.page === pageName
        ) {

            item.classList.add("active");

        }

    });


    sidebar.classList.remove("open");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   SIDEBAR NAVIGATION
   ========================================= */

menuItems.forEach(item => {

    item.addEventListener(
        "click",
        () => {

            const pageName =
                item.dataset.page;

            showPage(pageName);

        }
    );

});


/* =========================================
   SUBJECT CARDS
   ========================================= */

subjectCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const pageName =
                card.dataset.page;

            showPage(pageName);

        }
    );

});


/* =========================================
   MOBILE MENU
   ========================================= */

menuButton.addEventListener(
    "click",
    () => {

        sidebar.classList.toggle(
            "open"
        );

    }
);


/* =========================================
   CLOSE MOBILE MENU
   ========================================= */

document.addEventListener(
    "click",
    event => {

        const clickedSidebar =
            sidebar.contains(event.target);

        const clickedButton =
            menuButton.contains(event.target);


        if (
            window.innerWidth <= 800 &&
            !clickedSidebar &&
            !clickedButton
        ) {

            sidebar.classList.remove(
                "open"
            );

        }

    }
);


/* =========================================
   CHAT INPUT AUTO RESIZE
   ========================================= */

chatInput.addEventListener(
    "input",
    () => {

        chatInput.style.height =
            "auto";

        chatInput.style.height =
            Math.min(
                chatInput.scrollHeight,
                150
            ) + "px";

    }
);


/* =========================================
   ESCAPE HTML
   ========================================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* =========================================
   CREATE MESSAGE
   ========================================= */

function createMessage(
    text,
    type
) {

    const message =
        document.createElement("div");

    message.className =
        `chat-message ${type}`;


    message.innerHTML = `

        <div class="message-content">
            ${escapeHTML(text)}
        </div>

    `;


    return message;

}


/* =========================================
   DEMO AI RESPONSE
   ========================================= */

function getDemoResponse(question) {

    const q =
        question.toLowerCase();


    /* ACCOUNTING */

    if (
        q.includes("debit") ||
        q.includes("credit")
    ) {

        return `Let's make it simple.

A debit is the left side of an accounting entry.

A credit is the right side.

Think of it like this:

DEBIT = LEFT
CREDIT = RIGHT

Example:

A business receives R1 000 cash.

Debit: Bank R1 000
Credit: Capital R1 000

We can practise more questions together.`;

    }


    /* DEPRECIATION */

    if (
        q.includes("depreciation")
    ) {

        return `Depreciation is simply the decrease in the value of an asset over time.

For example:

A business buys a vehicle for R100 000.

After using it for some years, the vehicle is no longer worth R100 000.

That decrease in value is called depreciation.

I can teach you the different depreciation methods step by step.`;

    }


    /* ECONOMICS */

    if (
        q.includes("demand") ||
        q.includes("supply")
    ) {

        return `Let's make it easy.

DEMAND means how much consumers want to buy.

SUPPLY means how much producers want to sell.

Example:

If the price of a product falls, consumers will normally want to buy more.

That is the basic idea behind the law of demand.

Ask me for a graph or a practice question next.`;

    }


    /* INFLATION */

    if (
        q.includes("inflation")
    ) {

        return `Inflation means that the general prices of goods and services increase over time.

Simple example:

Today R100 can buy a certain basket of goods.

If prices increase, that same R100 may buy fewer goods later.

So inflation reduces the purchasing power of money.

I can explain the causes, effects and types of inflation next.`;

    }


    /* MATHEMATICS */

    if (
        q.includes("solve") ||
        q.includes("equation") ||
        q.includes("math")
    ) {

        return `Let's solve it step by step.

Example:

2x + 4 = 10

STEP 1

Subtract 4 from both sides.

2x = 6

STEP 2

Divide both sides by 2.

x = 3

ANSWER:

x = 3

If you give me your actual maths question, I will break it down into small steps.`;

    }


    /* PERCENTAGE */

    if (
        q.includes("percentage") ||
        q.includes("percent")
    ) {

        return `Let's make percentages easy.

Example:

What is 20% of R500?

Step 1:

Convert 20% to a decimal.

20 ÷ 100 = 0.20

Step 2:

Multiply.

0.20 × R500 = R100

ANSWER:

20% of R500 = R100`;

    }


    /* DEFAULT */

    return `I'm ready to help you learn.

Try asking:

"Explain debits and credits."

"Teach me depreciation."

"What is inflation?"

"Explain demand and supply."

"Solve 2x + 4 = 10."

"Give me a Grade 12 Accounting question."

"Teach me percentages."

Mastercommerce will eventually connect to a full AI tutor that can teach you interactively.`;

}


/* =========================================
   SEND MESSAGE
   ========================================= */

function sendMessage() {

    const question =
        chatInput.value.trim();


    if (!question) {
        return;
    }


    let conversation =
        document.querySelector(
            ".conversation"
        );


    if (!conversation) {

        conversation =
            document.createElement("div");

        conversation.className =
            "conversation";


        const homePage =
            document.getElementById("home");


        homePage.insertBefore(
            conversation,
            document.querySelector(
                ".chat-area"
            )
        );

    }


    /* USER */

    const userMessage =
        createMessage(
            question,
            "user"
        );


    conversation.appendChild(
        userMessage
    );


    /* CLEAR */

    chatInput.value = "";

    chatInput.style.height =
        "auto";


    /* RESPONSE */

    setTimeout(
        () => {

            const response =
                getDemoResponse(
                    question
                );


            const assistantMessage =
                createMessage(
                    response,
                    "assistant"
                );


            conversation.appendChild(
                assistantMessage
            );


            assistantMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        },
        600
    );

}


/* =========================================
   SEND BUTTON
   ========================================= */

sendButton.addEventListener(
    "click",
    sendMessage
);


/* =========================================
   ENTER TO SEND
   ========================================= */

chatInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            sendMessage();

        }

    }
);


/* =========================================
   NEW CHAT
   ========================================= */

newChatButton.addEventListener(
    "click",
    () => {

        const conversation =
            document.querySelector(
                ".conversation"
            );


        if (conversation) {

            conversation.remove();

        }


        chatInput.value = "";

        chatInput.style.height =
            "auto";


        showPage("home");

        chatInput.focus();

    }
);


/* =========================================
   TOPIC BUTTONS
   ========================================= */

const topicButtons =
    document.querySelectorAll(
        ".topic"
    );


topicButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const topic =
                button
                    .querySelector("strong")
                    .textContent;


            showPage("home");


            chatInput.value =
                `Teach me ${topic} in the easiest way possible.`;


            chatInput.focus();

        }
    );

});


/* =========================================
   PAST PAPER VARIABLES
   ========================================= */

const papersContainer =
    document.getElementById(
        "papersContainer"
    );

const emptyPapers =
    document.getElementById(
        "emptyPapers"
    );

const paperCount =
    document.getElementById(
        "paperCount"
    );

const paperSearch =
    document.getElementById(
        "paperSearch"
    );


let selectedPaperFilter =
    "all";


/* =========================================
   DISPLAY PAST PAPERS
   ========================================= */

function displayPapers() {

    if (!papersContainer) {
        return;
    }


    const searchText =
        paperSearch
            ? paperSearch.value
                .toLowerCase()
                .trim()
            : "";


    const filteredPapers =
        pastPapers.filter(
            paper => {

                const matchesSubject =
                    selectedPaperFilter === "all" ||
                    paper.subject ===
                    selectedPaperFilter;


                const matchesSearch =
                    paper.title
                        .toLowerCase()
                        .includes(searchText) ||

                    paper.year
                        .toLowerCase()
                        .includes(searchText) ||

                    paper.paper
                        .toLowerCase()
                        .includes(searchText);


                return (
                    matchesSubject &&
                    matchesSearch
                );

            }
        );


    papersContainer.innerHTML =
        "";


    paperCount.textContent =
        `${filteredPapers.length} paper${
            filteredPapers.length === 1
                ? ""
                : "s"
        }`;


    if (
        filteredPapers.length === 0
    ) {

        emptyPapers.style.display =
            "block";

        return;

    }


    emptyPapers.style.display =
        "none";


    filteredPapers.forEach(
        paper => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "paper-card";


            card.innerHTML = `

                <div class="paper-icon">
                    📄
                </div>

                <div class="paper-info">

                    <h3>
                        ${escapeHTML(
                            paper.title
                        )}
                    </h3>

                    <p>
                        ${escapeHTML(
                            paper.year
                        )}
                        •
                        ${escapeHTML(
                            paper.term
                        )}
                        •
                        ${escapeHTML(
                            paper.paper
                        )}
                        •
                        ${escapeHTML(
                            paper.type
                        )}
                    </p>

                </div>

                <div class="paper-actions">

                    <button
                        class="paper-button primary"
                        onclick="openPaper()">
                        View
                    </button>

                </div>

            `;


            papersContainer.appendChild(
                card
            );

        }
    );

}


/* =========================================
   PAPER FILTERS
   ========================================= */

const filters =
    document.querySelectorAll(
        ".filter"
    );


filters.forEach(filter => {

    filter.addEventListener(
        "click",
        () => {

            filters.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });


            filter.classList.add(
                "active"
            );


            selectedPaperFilter =
                filter.dataset.filter ||
                "all";


            displayPapers();

        }
    );

});


/* =========================================
   PAPER SEARCH
   ========================================= */

if (paperSearch) {

    paperSearch.addEventListener(
        "input",
        displayPapers
    );

}


/* =========================================
   OPEN PAPER
   ========================================= */

function openPaper() {

    alert(
        "The PDF viewer and download system will be connected when we build the Mastercommerce database and admin upload system."
    );

}


/* =========================================
   START
   ========================================= */

displayPapers();

showPage("home");
