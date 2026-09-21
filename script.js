/* =========================================================
   MASTERCOMMERCE
   BY PD|WEB & APP DEVELOPMENT

   Developer:
   Phungo Dembe Vusani

   Location:
   Limpopo, South Africa

   Education:
   University of Venda
   BCom in Accounting
========================================================= */


/* =========================================================
   MASTERCOMMERCE KNOWLEDGE
========================================================= */


/* ---------------------------------------------------------
   DEVELOPER INFORMATION
--------------------------------------------------------- */

const developerInformation = {

    name: "PD|Web & App Development",

    founder: "Phungo Dembe Vusani",

    location: "Limpopo, South Africa",

    education:
        "Phungo Dembe Vusani is a student at the University of Venda studying BCom in Accounting.",

    product:
        "Mastercommerce",

    description:
        "Mastercommerce is an educational platform designed to help learners study Accounting, Economics and Mathematics."

};


/* ---------------------------------------------------------
   ECONOMICS KNOWLEDGE
--------------------------------------------------------- */

const economicsKnowledge = [

    {
        topic: "Inflation",

        keywords: [
            "inflation",
            "price level",
            "prices",
            "cost of living"
        ],

        information: `
Inflation is a sustained increase in the general price level of goods and services in an economy over a period of time.

When inflation increases, the purchasing power of money decreases. This means that the same amount of money can buy fewer goods and services.

For example, if bread costs R20 and later costs R25, the price of bread has increased.

Demand-pull inflation occurs when aggregate demand increases faster than the economy's ability to produce goods and services.

Cost-push inflation occurs when the costs of production increase, causing producers to increase the prices of goods and services.
`
    },


    {
        topic: "Unemployment",

        keywords: [
            "unemployment",
            "unemployed",
            "jobless"
        ],

        information: `
Unemployment refers to people who are willing and able to work but cannot find employment.

The unemployment rate shows the percentage of the economically active population that is unemployed.

Types of unemployment include frictional unemployment, structural unemployment, cyclical unemployment and seasonal unemployment.

Unemployment can reduce household income and can negatively affect economic growth.
`
    },


    {
        topic: "Economic Growth",

        keywords: [
            "economic growth",
            "economic development",
            "gdp",
            "growth"
        ],

        information: `
Economic growth refers to an increase in the production of goods and services in an economy over a period of time.

Economic growth is commonly measured using the percentage change in real Gross Domestic Product (GDP).

Economic growth can create employment opportunities and increase income in an economy.
`
    },


    {
        topic: "Demand",

        keywords: [
            "demand",
            "law of demand",
            "quantity demanded"
        ],

        information: `
Demand refers to the quantity of a good or service that consumers are willing and able to buy at different prices during a particular period.

The law of demand states that, other things being equal, when the price of a good increases, the quantity demanded usually decreases.

When the price decreases, the quantity demanded usually increases.

This creates an inverse relationship between price and quantity demanded.
`
    },


    {
        topic: "Supply",

        keywords: [
            "supply",
            "law of supply",
            "quantity supplied"
        ],

        information: `
Supply refers to the quantity of goods and services that producers are willing and able to sell at different prices during a particular period.

The law of supply states that, other things being equal, when the price of a good increases, the quantity supplied usually increases.

When the price decreases, the quantity supplied usually decreases.

This creates a direct relationship between price and quantity supplied.
`
    },


    {
        topic: "Scarcity",

        keywords: [
            "scarcity",
            "scarce resources",
            "limited resources"
        ],

        information: `
Scarcity means that resources are limited while human wants are unlimited.

Because resources are scarce, people, businesses and governments must make choices about how to use those resources.

Scarcity is one of the fundamental problems studied in economics.
`
    },


    {
        topic: "Opportunity Cost",

        keywords: [
            "opportunity cost",
            "next best alternative"
        ],

        information: `
Opportunity cost is the value of the next best alternative that is given up when a choice is made.

For example, if you have R100 and choose to buy a textbook instead of buying clothes, the clothes you could have bought represent the opportunity cost.
`
    },


    {
        topic: "Elasticity",

        keywords: [
            "elasticity",
            "price elasticity",
            "elastic demand",
            "inelastic demand"
        ],

        information: `
Price elasticity of demand measures how responsive the quantity demanded of a good is to a change in its price.

If demand changes by a large percentage when price changes, demand is considered elastic.

If demand changes by a small percentage when price changes, demand is considered inelastic.

The basic formula is:

Price elasticity of demand =
Percentage change in quantity demanded
divided by
Percentage change in price.
`
    },


    {
        topic: "GDP",

        keywords: [
            "gdp",
            "gross domestic product",
            "domestic product"
        ],

        information: `
Gross Domestic Product, or GDP, is the monetary value of final goods and services produced within a country's borders during a specific period.

Real GDP removes the effect of changes in prices and is commonly used when measuring economic growth.
`
    },


    {
        topic: "Fiscal Policy",

        keywords: [
            "fiscal policy",
            "government spending",
            "government expenditure",
            "taxation"
        ],

        information: `
Fiscal policy refers to the use of government spending and taxation to influence economic activity.

The government can increase spending or reduce taxes to stimulate economic activity.

The government can also reduce spending or increase taxes to reduce excessive demand in the economy.
`
    },


    {
        topic: "Monetary Policy",

        keywords: [
            "monetary policy",
            "interest rate",
            "interest rates",
            "money supply",
            "central bank"
        ],

        information: `
Monetary policy involves the use of measures that influence money and credit conditions in an economy.

Interest rates are an important monetary policy tool.

Higher interest rates can reduce borrowing and spending.

Lower interest rates can encourage borrowing and spending.
`
    }

];


/* =========================================================
   SUBJECT KEYWORDS
========================================================= */

const accountingKeywords = [

    "accounting",
    "asset",
    "assets",
    "liability",
    "liabilities",
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
    "financial statement",
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


const mathematicsKeywords = [

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
    "function",
    "graph",
    "gradient",
    "sequence",
    "series",
    "logarithm",
    "calculus"

];


/* =========================================================
   FIND SUBJECT
========================================================= */

function detectSubject(question) {

    const text =
        question.toLowerCase();


    let accountingScore = 0;

    let economicsScore = 0;

    let mathematicsScore = 0;


    accountingKeywords.forEach(keyword => {

        if (text.includes(keyword)) {

            accountingScore++;

        }

    });


    mathematicsKeywords.forEach(keyword => {

        if (text.includes(keyword)) {

            mathematicsScore++;

        }

    });


    economicsKnowledge.forEach(item => {

        item.keywords.forEach(keyword => {

            if (
                text.includes(
                    keyword.toLowerCase()
                )
            ) {

                economicsScore++;

            }

        });

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


    scores.sort(
        (a, b) =>
            b.score - a.score
    );


    if (
        scores[0].score === 0
    ) {

        return null;

    }


    return scores[0].subject;

}


/* =========================================================
   SEARCH ECONOMICS
========================================================= */

function searchEconomics(question) {

    const text =
        question.toLowerCase();


    let bestResult = null;

    let highestScore = 0;


    economicsKnowledge.forEach(item => {

        let score = 0;


        if (
            text.includes(
                item.topic.toLowerCase()
            )
        ) {

            score += 10;

        }


        item.keywords.forEach(keyword => {

            if (
                text.includes(
                    keyword.toLowerCase()
                )
            ) {

                score++;

            }

        });


        if (
            score > highestScore
        ) {

            highestScore = score;

            bestResult = item;

        }

    });


    return bestResult;

}


/* =========================================================
   CHECK DEVELOPER QUESTION
========================================================= */

function isDeveloperQuestion(question) {

    const text =
        question.toLowerCase();


    const keywords = [

        "who developed you",

        "who made you",

        "who created you",

        "who built you",

        "who is the developer",

        "who is your developer",

        "who is behind you",

        "who founded you",

        "who is the founder",

        "who owns mastercommerce",

        "who made mastercommerce",

        "who created mastercommerce",

        "who developed mastercommerce"

    ];


    return keywords.some(
        keyword =>
            text.includes(keyword)
    );

}


/* =========================================================
   DEVELOPER ANSWER
========================================================= */

function developerAnswer() {

    return `Mastercommerce was developed by ${developerInformation.name}.

Founder: ${developerInformation.founder}

${developerInformation.founder} is from ${developerInformation.location} and is a student at the University of Venda studying BCom in Accounting.

Mastercommerce is an educational platform designed to help learners study Accounting, Economics and Mathematics.`;

}


/* =========================================================
   CREATE MESSAGE
========================================================= */

function createMessage(
    type,
    text,
    subject = null
) {

    const message =
        document.createElement("div");


    message.className =
        `message ${type}`;


    const content =
        document.createElement("div");


    content.className =
        "message-content";


    if (
        type === "assistant" &&
        subject
    ) {

        const badge =
            document.createElement("div");


        badge.className =
            "subject-badge";


        badge.textContent =
            subject;


        content.appendChild(
            badge
        );

    }


    const textElement =
        document.createElement("div");


    textElement.textContent =
        text;


    content.appendChild(
        textElement
    );


    message.appendChild(
        content
    );


    chatMessages.appendChild(
        message
    );


    chatMessages.scrollTo({

        top:
            chatMessages.scrollHeight,

        behavior:
            "smooth"

    });


    return message;

}


/* =========================================================
   ANSWER QUESTION
========================================================= */

function answerQuestion(question) {


    /* DEVELOPER */

    if (
        isDeveloperQuestion(
            question
        )
    ) {

        return {

            subject: null,

            answer:
                developerAnswer()

        };

    }


    /* SUBJECT */

    const subject =
        detectSubject(
            question
        );


    if (!subject) {

        return {

            subject: null,

            answer:
                "I'm not sure which subject this question belongs to. Try asking about Accounting, Economics or Mathematics."

        };

    }


    /* ECONOMICS */

    if (
        subject === "Economics"
    ) {

        const result =
            searchEconomics(
                question
            );


        if (result) {

            return {

                subject: "Economics",

                answer:
                    result.information.trim()

            };

        }


        return {

            subject: "Economics",

            answer:
                "I detected this as an Economics question, but I don't have information about this topic yet."

        };

    }


    /* ACCOUNTING */

    if (
        subject === "Accounting"
    ) {

        return {

            subject: "Accounting",

            answer:
                "I detected this as an Accounting question. The Accounting knowledge base will be added next."

        };

    }


    /* MATHEMATICS */

    if (
        subject === "Mathematics"
    ) {

        return {

            subject: "Mathematics",

            answer:
                "I detected this as a Mathematics question. The Mathematics knowledge base will be added next."

        };

    }

}


/* =========================================================
   SEND MESSAGE
========================================================= */

function sendMessage() {

    const question =
        chatInput.value.trim();


    if (!question) {

        return;

    }


    /* REMOVE WELCOME */

    const welcome =
        document.getElementById(
            "welcome"
        );


    if (welcome) {

        welcome.remove();

    }


    /* SHOW USER MESSAGE */

    createMessage(
        "user",
        question
    );


    /* CLEAR INPUT */

    chatInput.value = "";

    chatInput.style.height =
        "auto";


    /* ANSWER */

    setTimeout(
        () => {

            const result =
                answerQuestion(
                    question
                );


            createMessage(

                "assistant",

                result.answer,

                result.subject

            );

        },

        350
    );


    /* ALWAYS RETURN INPUT FOCUS */

    setTimeout(
        () => {

            chatInput.focus();

        },

        400
    );

}


/* =========================================================
   NEW CHAT
========================================================= */

function startNewChat() {

    chatMessages.innerHTML = `

        <div
            class="welcome"
            id="welcome"
        >

            <div class="welcome-logo">
                M
            </div>

            <h1>
                What would you like to learn?
            </h1>

            <p>
                Ask a question about Accounting,
                Economics or Mathematics.
            </p>

        </div>

    `;


    chatInput.value = "";

    chatInput.style.height =
        "auto";


    chatInput.focus();


    closeMobileMenu();

}


/* =========================================================
   MOBILE MENU
========================================================= */

function openMobileMenu() {

    sidebar.classList.add(
        "open"
    );


    createOverlay();

}


/* ---------------------------------------------------------
   CLOSE MENU
--------------------------------------------------------- */

function closeMobileMenu() {

    sidebar.classList.remove(
        "open"
    );


    removeOverlay();

}


/* ---------------------------------------------------------
   TOGGLE MENU
--------------------------------------------------------- */

function toggleMobileMenu() {

    if (
        sidebar.classList.contains(
            "open"
        )
    ) {

        closeMobileMenu();

    } else {

        openMobileMenu();

    }

}


/* =========================================================
   OVERLAY
========================================================= */

function createOverlay() {

    let overlay =
        document.getElementById(
            "sidebarOverlay"
        );


    if (overlay) {

        return;

    }


    overlay =
        document.createElement(
            "div"
        );


    overlay.id =
        "sidebarOverlay";


    overlay.className =
        "sidebar-overlay active";


    document.body.appendChild(
        overlay
    );


    overlay.addEventListener(
        "click",
        closeMobileMenu
    );

}


/* ---------------------------------------------------------
   REMOVE OVERLAY
--------------------------------------------------------- */

function removeOverlay() {

    const overlay =
        document.getElementById(
            "sidebarOverlay"
        );


    if (overlay) {

        overlay.remove();

    }

}


/* =========================================================
   NAVIGATION
========================================================= */

function setupNavigation() {

    const navItems =
        document.querySelectorAll(
            ".nav-item"
        );


    navItems.forEach(item => {

        item.addEventListener(
            "click",
            function() {

                navItems.forEach(
                    nav =>
                        nav.classList.remove(
                            "active"
                        )
                );


                this.classList.add(
                    "active"
                );


                closeMobileMenu();


                const page =
                    this.dataset.page;


                if (
                    page === "about"
                ) {

                    showAbout();

                }

            }
        );

    });

}


/* =========================================================
   ABOUT
========================================================= */

function showAbout() {

    const welcome =
        document.getElementById(
            "welcome"
        );


    if (welcome) {

        welcome.remove();

    }


    createMessage(

        "assistant",

        `Mastercommerce

Developed by:
PD|Web & App Development

Founder:
Phungo Dembe Vusani

From:
Limpopo, South Africa

Education:
University of Venda
BCom in Accounting

Mastercommerce is being developed as an educational platform for Accounting, Economics and Mathematics.`

    );

}


/* =========================================================
   AUTO RESIZE INPUT
========================================================= */

function setupInput() {

    chatInput.addEventListener(
        "input",
        function() {

            this.style.height =
                "auto";


            this.style.height =
                Math.min(
                    this.scrollHeight,
                    150
                ) + "px";

        }
    );


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

}


/* =========================================================
   BUTTONS
========================================================= */

function setupButtons() {


    /* SEND */

    sendButton.addEventListener(
        "click",
        sendMessage
    );


    /* NEW CHAT */

    newChatButton.addEventListener(
        "click",
        startNewChat
    );


    /* MOBILE MENU */

    menuButton.addEventListener(
        "click",
        toggleMobileMenu
    );

}


/* =========================================================
   INITIALISE MASTERCOMMERCE
========================================================= */

function initialiseMastercommerce() {

    setupButtons();

    setupInput();

    setupNavigation();

    chatInput.focus();

}


/* =========================================================
   START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initialiseMastercommerce
);
