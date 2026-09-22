document.addEventListener("DOMContentLoaded", () => {

    if (window.mastercommerceLoaded) return;
    window.mastercommerceLoaded = true;

    /* =========================================================
       MASTERCOMMERCE
       100% FRONTEND
       NO API
       NO BACKEND
       ========================================================= */

    const developerInformation = {
        product: "Mastercommerce",
        developer: "PD | Web & App Development",
        founder: "Phungo Dembe Vusani",
        location: "Limpopo, South Africa",
        education: "BCom in Accounting — University of Venda",
        version: "v1.0.0"
    };


    /* =========================================================
       KEEP YOUR EXISTING KNOWLEDGE
       =========================================================
       
       KEEP YOUR EXISTING:
       
       const accountingKnowledge = [ ... ];
       const economicsKnowledge = [ ... ];
       const mathematicsKnowledge = [ ... ];

       exactly as they are in your current file.
    */


    /* =========================================================
       SUBJECT DETECTION
       ========================================================= */

    const subjectWords = {

        accounting: [
            "accounting",
            "account",
            "accounts",
            "asset",
            "assets",
            "liability",
            "liabilities",
            "equity",
            "debit",
            "credit",
            "journal",
            "ledger",
            "trial balance",
            "vat",
            "audit",
            "auditing",
            "ifrs",
            "ias",
            "inventory",
            "stock",
            "depreciation",
            "profit",
            "loss",
            "tax",
            "receivables",
            "payables",
            "balance sheet",
            "financial statements",
            "cost accounting",
            "management accounting",
            "gross profit",
            "net profit",
            "consolidation",
            "budget",
            "budgeting",
            "cash flow",
            "financial position",
            "income statement",
            "statement of profit",
            "working capital",
            "ratio",
            "ratios",
            "capital",
            "expense",
            "expenses",
            "revenue",
            "cost of sales",
            "costing",
            "break even",
            "break-even",
            "contribution",
            "marginal cost",
            "absorption costing",
            "variable costing"
        ],

        economics: [
            "economics",
            "economic",
            "economy",
            "demand",
            "supply",
            "inflation",
            "unemployment",
            "gdp",
            "market",
            "markets",
            "elasticity",
            "fiscal policy",
            "monetary policy",
            "aggregate demand",
            "aggregate supply",
            "exchange rate",
            "economic growth",
            "economic development",
            "externalities",
            "scarcity",
            "opportunity cost",
            "business cycle",
            "economic indicator",
            "economic indicators",
            "market structure",
            "monopoly",
            "oligopoly",
            "competition",
            "public goods",
            "market failure",
            "utility",
            "production possibility",
            "balance of payments",
            "interest rate",
            "price level",
            "consumption",
            "investment",
            "exports",
            "imports",
            "subsidy",
            "taxation",
            "government spending"
        ],

        mathematics: [
            "math",
            "mathematics",
            "calculate",
            "calculation",
            "equation",
            "equations",
            "algebra",
            "quadratic",
            "percentage",
            "percentages",
            "probability",
            "statistics",
            "mean",
            "median",
            "mode",
            "gradient",
            "slope",
            "function",
            "functions",
            "calculus",
            "derivative",
            "derivatives",
            "differentiation",
            "integration",
            "trigonometry",
            "sine",
            "cosine",
            "tangent",
            "geometry",
            "pythagoras",
            "sequence",
            "sequences",
            "indices",
            "index",
            "exponents",
            "factorise",
            "factorization",
            "simultaneous equations",
            "interest",
            "compound interest",
            "simple interest",
            "area",
            "volume",
            "distance",
            "midpoint"
        ]
    };


    function detectSubject(question) {

        const text = question.toLowerCase();

        const scores = {
            accounting: 0,
            economics: 0,
            mathematics: 0
        };

        for (const subject in subjectWords) {

            subjectWords[subject].forEach(word => {

                if (text.includes(word)) {

                    scores[subject] +=
                        word.length > 6 ? 2 : 1;

                }

            });

        }

        const sorted = Object.entries(scores)
            .sort((a, b) => b[1] - a[1]);

        if (sorted[0][1] === 0) {
            return null;
        }

        /*
         * If two subjects have the same score,
         * do not randomly choose one.
         */

        if (
            sorted.length > 1 &&
            sorted[0][1] === sorted[1][1]
        ) {
            return null;
        }

        return sorted[0][0];
    }


    /* =========================================================
       KNOWLEDGE SEARCH
       ========================================================= */

    function searchKnowledge(question, subject = null) {

        const text = question.toLowerCase();

        let database = [
            ...accountingKnowledge,
            ...economicsKnowledge,
            ...mathematicsKnowledge
        ];

        if (subject === "accounting") {
            database = accountingKnowledge;
        }

        if (subject === "economics") {
            database = economicsKnowledge;
        }

        if (subject === "mathematics") {
            database = mathematicsKnowledge;
        }

        let best = null;
        let bestScore = 0;

        database.forEach(item => {

            let score = 0;

            item.keywords.forEach(keyword => {

                const cleanKeyword =
                    keyword.toLowerCase();

                if (text.includes(cleanKeyword)) {

                    score +=
                        cleanKeyword.length > 7
                            ? 5
                            : 3;

                }

            });

            if (score > bestScore) {

                bestScore = score;
                best = item;

            }

        });

        return bestScore >= 3
            ? best.answer
            : null;
    }


    /* =========================================================
       ALL KNOWLEDGE RESPONSE
       ========================================================= */

    function getAllKnowledge(subject) {

        let database = [];

        let title = "";

        if (subject === "accounting") {

            database = accountingKnowledge;
            title = "ACCOUNTING";

        }

        if (subject === "economics") {

            database = economicsKnowledge;
            title = "ECONOMICS";

        }

        if (subject === "mathematics") {

            database = mathematicsKnowledge;
            title = "MATHEMATICS";

        }

        if (!database.length) {
            return null;
        }

        let response =
            `Here is the information I currently have about ${title}.\n\n`;

        database.forEach((item, index) => {

            response +=
                `${index + 1}. ${item.answer}\n\n`;

        });

        return response.trim();
    }


    /* =========================================================
       TOPIC LISTS
       ========================================================= */

    function getTopicList(subject) {

        if (subject === "accounting") {

            return `I can help with many Accounting questions, including:

• Accounting concepts and principles
• Accounting equation
• Assets
• Liabilities
• Equity
• Revenue
• Expenses
• Profit and loss
• Double-entry accounting
• Debits and credits
• Journals
• Ledgers
• Trial balance
• Bank reconciliation
• Inventory
• Trade receivables
• Trade payables
• Depreciation
• Financial statements
• Statement of Financial Position
• Statement of Profit or Loss
• Cash flow statements
• VAT
• Financial ratios
• Current ratio
• Acid-test ratio
• Gross profit margin
• Net profit margin
• Inventory turnover
• Debtors collection period
• Debt ratio
• Return on equity
• Return on assets
• Earnings per share
• Working capital
• Cost accounting
• Management accounting
• Fixed costs
• Variable costs
• Marginal costs
• Relevant costs
• Sunk costs
• Opportunity costs
• Contribution
• Break-even analysis
• Absorption costing
• Variable costing
• Auditing
• Audit evidence
• Audit risk
• Internal controls
• IFRS
• IAS
• IAS 2
• IAS 12
• IAS 16
• IAS 21
• IFRS 9
• IFRS 10
• IFRS 15
• IAS 28
• Consolidation
• Associates
• Significant influence
• Tax-related concepts

You can ask me to explain, calculate, compare or give an example of any of these.`;
        }


        if (subject === "economics") {

            return `I can help with many Economics questions, including:

• Scarcity
• Opportunity cost
• Factors of production
• Demand
• Supply
• Market equilibrium
• Shortages
• Surpluses
• Elasticity
• Price elasticity of demand
• Income elasticity
• Cross-price elasticity
• Substitute goods
• Complementary goods
• Utility
• Marginal utility
• Production Possibility Frontier
• Market structures
• Perfect competition
• Monopoly
• Oligopoly
• Monopolistic competition
• Externalities
• Public goods
• Market failure
• Inflation
• Demand-pull inflation
• Cost-push inflation
• Unemployment
• Frictional unemployment
• Structural unemployment
• Cyclical unemployment
• GDP
• Real GDP
• Nominal GDP
• Economic growth
• Economic development
• Business cycles
• Fiscal policy
• Monetary policy
• Supply-side policy
• Aggregate demand
• Aggregate supply
• Balance of payments
• Exchange rates
• Currency appreciation
• Currency depreciation
• Economic indicators
• Leading indicators
• Lagging indicators
• Coincident indicators
• Composite indicators
• Economics essays
• Essay introductions
• Essay conclusions
• Advantages and disadvantages essays
• Evaluation and discussion questions

You can ask me to explain concepts simply, give examples, solve calculations or help structure an Economics essay.`;
        }


        if (subject === "mathematics") {

            return `I can help with many Mathematics questions, including:

• Percentages
• Percentage increase
• Percentage decrease
• Basic arithmetic
• Algebra
• Linear equations
• Quadratic equations
• Factorisation
• Simultaneous equations
• Indices
• Exponents
• Functions
• Straight-line equations
• Gradient
• Slope
• Distance formula
• Midpoint
• Sequences
• Arithmetic sequences
• Geometric sequences
• Statistics
• Mean
• Median
• Mode
• Probability
• Complementary probability
• Simple interest
• Compound interest
• Financial mathematics
• Trigonometry
• Sine
• Cosine
• Tangent
• Pythagoras' theorem
• Geometry
• Areas
• Circles
• Circumference
• Volume
• Calculus
• Differentiation
• Derivatives
• Integration

You can ask me to explain a concept, solve a calculation or work through a problem step by step.`;
        }

        return null;
    }


    /* =========================================================
       SIMPLE CALCULATOR
       ========================================================= */

    function calculateQuestion(question) {

        const text = question.toLowerCase();

        const percentageMatch =
            text.match(
                /(\d+(?:\.\d+)?)\s*%\s*(?:of)\s*(\d+(?:\.\d+)?)/
            );

        if (percentageMatch) {

            const percent =
                Number(percentageMatch[1]);

            const number =
                Number(percentageMatch[2]);

            const result =
                number * percent / 100;

            return `${percent}% of ${number} = ${result}.`;
        }


        const multiplication =
            text.match(
                /(\d+(?:\.\d+)?)\s*(?:x|\*|times)\s*(\d+(?:\.\d+)?)/
            );

        if (multiplication) {

            const a =
                Number(multiplication[1]);

            const b =
                Number(multiplication[2]);

            return `${a} × ${b} = ${a * b}.`;
        }


        const addition =
            text.match(
                /(\d+(?:\.\d+)?)\s*(?:\+|plus)\s*(\d+(?:\.\d+)?)/
            );

        if (addition) {

            const a =
                Number(addition[1]);

            const b =
                Number(addition[2]);

            return `${a} + ${b} = ${a + b}.`;
        }


        const subtraction =
            text.match(
                /(\d+(?:\.\d+)?)\s*(?:-|minus)\s*(\d+(?:\.\d+)?)/
            );

        if (subtraction) {

            const a =
                Number(subtraction[1]);

            const b =
                Number(subtraction[2]);

            return `${a} − ${b} = ${a - b}.`;
        }


        const division =
            text.match(
                /(\d+(?:\.\d+)?)\s*(?:\/|÷|divided by)\s*(\d+(?:\.\d+)?)/
            );

        if (division) {

            const a =
                Number(division[1]);

            const b =
                Number(division[2]);

            if (b !== 0) {

                return `${a} ÷ ${b} = ${a / b}.`;

            }
        }

        return null;
    }


    /* =========================================================
       CONVERSATION STATE
       ========================================================= */

    let conversationState = "normal";


    /* =========================================================
       NATURAL CONVERSATION
       ========================================================= */

    function generalAnswer(question) {

        const text =
            question.toLowerCase().trim();


        /* GREETING */

        if (
            /^(hi|hello|hey|hiya|good morning|good afternoon|good evening)(\s+mastercommerce)?[!. ]*$/i
                .test(text)
        ) {

            conversationState =
                "waiting_for_wellbeing";

            return `Hi. How are you?`;
        }


        /* USER SAYS THEY ARE GOOD */

        if (
            conversationState === "waiting_for_wellbeing" &&
            (
                text.includes("i'm good") ||
                text.includes("im good") ||
                text.includes("i am good") ||
                text.includes("i'm fine") ||
                text.includes("im fine") ||
                text.includes("i am fine") ||
                text.includes("i'm okay") ||
                text.includes("im okay") ||
                text.includes("i am okay") ||
                text.includes("good thanks") ||
                text.includes("fine thanks") ||
                text === "good" ||
                text === "fine"
            )
        ) {

            conversationState =
                "normal";

            return `Thanks. How can I help you today?

What do you want to learn today?`;
        }


        /* OTHER WELLBEING ANSWERS */

        if (
            conversationState === "waiting_for_wellbeing" &&
            (
                text.includes("not good") ||
                text.includes("bad") ||
                text.includes("not fine") ||
                text.includes("tired") ||
                text.includes("okay")
            )
        ) {

            conversationState =
                "normal";

            return `I hope things get better. How can I help you today?

What would you like to learn?`;
        }


        /* WHO ARE YOU */

        if (
            text.includes("who are you") ||
            text.includes("what are you")
        ) {

            return `I'm Mastercommerce, an educational learning assistant for Accounting, Economics and Mathematics.

I can explain concepts, answer questions, work through calculations, provide examples and help with Economics essays and revision.`;
        }


        /* WHO CREATED YOU */

        if (
            text.includes("who made you") ||
            text.includes("who created you") ||
            text.includes("developer") ||
            text.includes("who developed you")
        ) {

            return `Mastercommerce was developed by ${developerInformation.developer}.

Founder:
${developerInformation.founder}

Location:
${developerInformation.location}

Education:
${developerInformation.education}

Version:
${developerInformation.version}`;
        }


        /* WHAT CAN YOU DO */

        if (
            text.includes("what can you do") ||
            text.includes("how can you help") ||
            text === "help me"
        ) {

            return `I can help you learn:

Accounting
Economics
Mathematics

I can explain concepts, answer questions, solve calculations, give examples, compare topics, help with revision and help structure Economics essays.`;
        }


        return null;
    }


    /* =========================================================
       DETECT "ALL INFORMATION" REQUESTS
       ========================================================= */

    function isAllInformationRequest(text) {

        return (
            text.includes("all the information") ||
            text.includes("all information") ||
            text.includes("everything you know") ||
            text.includes("everything you have") ||
            text.includes("all you know") ||
            text.includes("all your knowledge") ||
            text.includes("all information you have") ||
            text.includes("give me everything") ||
            text.includes("tell me everything") ||
            text.includes("complete information")
        );
    }


    /* =========================================================
       DETECT TOPIC QUESTIONS
       ========================================================= */

    function isTopicQuestion(text) {

        return (
            text.includes("what types of questions") ||
            text.includes("what type of questions") ||
            text.includes("what questions can you answer") ||
            text.includes("what topics do you have") ||
            text.includes("what topics can you help") ||
            text.includes("what can you help me with") ||
            text.includes("what do you know about")
        );
    }


    /* =========================================================
       SMART RESPONSE ENGINE
       ========================================================= */

    function generateAnswer(question) {

        const text =
            question.toLowerCase().trim();


        /* GENERAL CONVERSATION */

        const general =
            generalAnswer(question);

        if (general) {
            return general;
        }


        /* ALL INFORMATION */

        if (isAllInformationRequest(text)) {

            const subject =
                detectSubject(text);

            if (subject) {

                return getAllKnowledge(subject);

            }

            if (text.includes("accounting")) {

                return getAllKnowledge("accounting");

            }

            if (text.includes("economics")) {

                return getAllKnowledge("economics");

            }

            if (
                text.includes("math") ||
                text.includes("mathematics")
            ) {

                return getAllKnowledge("mathematics");

            }

            return `I can give you all the information I currently have about:

Accounting
Economics
Mathematics

Please tell me which subject you want.`;
        }


        /* TOPIC LIST */

        if (isTopicQuestion(text)) {

            const subject =
                detectSubject(text);

            if (subject) {

                return getTopicList(subject);

            }

            if (text.includes("accounting")) {

                return getTopicList("accounting");

            }

            if (text.includes("economics")) {

                return getTopicList("economics");

            }

            if (
                text.includes("math") ||
                text.includes("mathematics")
            ) {

                return getTopicList("mathematics");

            }

            return `I can answer questions about Accounting, Economics and Mathematics.

Please tell me which subject you want to know about.`;
        }


        /* CALCULATIONS */

        const calculation =
            calculateQuestion(question);

        if (calculation) {

            return calculation;

        }


        /* SUBJECT */

        const subject =
            detectSubject(question);


        /* KNOWLEDGE */

        const knowledgeAnswer =
            searchKnowledge(
                question,
                subject
            );

        if (knowledgeAnswer) {

            return knowledgeAnswer;

        }


        /* DEFINITION QUESTION */

        if (
            text.startsWith("what is ") ||
            text.startsWith("what are ") ||
            text.includes("define ")
        ) {

            return `Can you please repeat your question in an understandable way?

You can also include the subject, for example:

"What is depreciation in Accounting?"

"What is inflation in Economics?"

"What is a quadratic equation in Mathematics?"`;
        }


        /* COMPARISON */

        if (
            text.includes("difference between") ||
            text.includes("difference of")
        ) {

            return `Can you please repeat your question in an understandable way?

For example:

"What is the difference between assets and liabilities?"

"What is the difference between demand and supply?"`;
        }


        /* ESSAY */

        if (
            text.includes("essay") ||
            text.includes("discuss") ||
            text.includes("evaluate")
        ) {

            return `For an Economics essay, I can help you with:

• Introduction
• Definitions
• Main arguments
• Explanations
• Examples
• Advantages and disadvantages
• Evaluation
• Short-run and long-run effects
• Conclusion

Please send me the exact Economics essay question and I will help you structure it.`;
        }


        /* SUBJECT KNOWN BUT QUESTION NOT FOUND */

        if (subject) {

            return `Can you please repeat your question in an understandable way?

I know this is related to ${subject}, but I could not match the exact question with the information currently stored in Mastercommerce.`;
        }


        /* UNKNOWN */

        return `Can you please repeat your question in an understandable way?`;
    }


    /* =========================================================
       CHAT UI
       ========================================================= */

    const messages =
        document.getElementById("messages");

    const welcomeScreen =
        document.getElementById("welcomeScreen");

    const questionInput =
        document.getElementById("questionInput");

    const sendButton =
        document.getElementById("sendButton");


    function createMessage(text, type) {

        const message =
            document.createElement("div");

        message.className =
            `message ${type}`;


        const avatar =
            document.createElement("div");

        avatar.className =
            "message-avatar";

        avatar.textContent =
            type === "user"
                ? "You"
                : "M";


        const body =
            document.createElement("div");

        body.className =
            "message-body";


        const label =
            document.createElement("div");

        label.className =
            "message-label";

        label.textContent =
            type === "user"
                ? "You"
                : "Mastercommerce";


        const content =
            document.createElement("div");

        content.className =
            "message-content";

        content.textContent =
            text;


        body.appendChild(label);
        body.appendChild(content);

        message.appendChild(avatar);
        message.appendChild(body);

        messages.appendChild(message);


        const chatContainer =
            document.getElementById(
                "chatContainer"
            );

        chatContainer.scrollTo({
            top: chatContainer.scrollHeight,
            behavior: "smooth"
        });


        return message;
    }


    function createThinkingMessage() {

        return createMessage(
            "Thinking...",
            "assistant thinking"
        );
    }


    function sendQuestion() {

        const question =
            questionInput.value.trim();

        if (!question) {
            return;
        }


        welcomeScreen.style.display =
            "none";


        createMessage(
            question,
            "user"
        );


        questionInput.value = "";

        questionInput.style.height =
            "42px";


        sendButton.disabled =
            true;


        const thinking =
            createThinkingMessage();


        setTimeout(() => {

            const answer =
                generateAnswer(question);


            thinking.remove();


            createMessage(
                answer,
                "assistant"
            );


            sendButton.disabled =
                false;


            questionInput.focus();

        }, 350);
    }


    sendButton.addEventListener(
        "click",
        sendQuestion
    );


    questionInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" &&
                !event.shiftKey
            ) {

                event.preventDefault();

                sendQuestion();

            }

        }
    );


    questionInput.addEventListener(
        "input",
        () => {

            questionInput.style.height =
                "42px";

            questionInput.style.height =
                Math.min(
                    questionInput.scrollHeight,
                    150
                ) + "px";

        }
    );


    /* =========================================================
       SIDEBAR
       ========================================================= */

    const sidebar =
        document.getElementById("sidebar");

    const overlay =
        document.getElementById(
            "sidebarOverlay"
        );

    const menuButton =
        document.getElementById(
            "menuButton"
        );

    const closeSidebar =
        document.getElementById(
            "closeSidebar"
        );


    function openSidebar() {

        sidebar.classList.add("open");

        overlay.classList.add("show");
    }


    function closeSideMenu() {

        sidebar.classList.remove("open");

        overlay.classList.remove("show");
    }


    menuButton.addEventListener(
        "click",
        openSidebar
    );


    closeSidebar.addEventListener(
        "click",
        closeSideMenu
    );


    overlay.addEventListener(
        "click",
        closeSideMenu
    );


    /* =========================================================
       NEW CHAT
       ========================================================= */

    document
        .getElementById("newChatButton")
        .addEventListener(
            "click",
            () => {

                messages.innerHTML =
                    "";

                welcomeScreen.style.display =
                    "block";

                questionInput.value =
                    "";

                conversationState =
                    "normal";

                closeSideMenu();

                questionInput.focus();

            }
        );


    /* =========================================================
       PLUS MENU
       ========================================================= */

    const plusButton =
        document.getElementById(
            "plusButton"
        );

    const plusMenu =
        document.getElementById(
            "plusMenu"
        );

    const featureToast =
        document.getElementById(
            "featureToast"
        );


    plusButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            const visible =
                plusMenu.classList.toggle(
                    "show"
                );


            plusButton.setAttribute(
                "aria-expanded",
                visible
                    ? "true"
                    : "false"
            );


            plusMenu.setAttribute(
                "aria-hidden",
                visible
                    ? "false"
                    : "true"
            );

        }
    );


    document
        .querySelectorAll(".plus-option")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const feature =
                        button.dataset.feature;


                    plusMenu.classList.remove(
                        "show"
                    );


                    featureToast.textContent =
                        `${feature} is currently under development.`;


                    featureToast.classList.add(
                        "show"
                    );


                    setTimeout(() => {

                        featureToast.classList.remove(
                            "show"
                        );

                    }, 2500);

                }
            );

        });


    document.addEventListener(
        "click",
        event => {

            if (
                !plusMenu.contains(
                    event.target
                ) &&
                event.target !== plusButton
            ) {

                plusMenu.classList.remove(
                    "show"
                );


                plusButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    /* =========================================================
       MODALS
       ========================================================= */

    const aboutModal =
        document.getElementById(
            "aboutModal"
        );

    const settingsModal =
        document.getElementById(
            "settingsModal"
        );


    document
        .querySelectorAll("[data-close]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        button.dataset.close;

                    document
                        .getElementById(id)
                        .classList.add(
                            "hidden"
                        );

                }
            );

        });


    [aboutModal, settingsModal]
        .forEach(modal => {

            modal.addEventListener(
                "click",
                event => {

                    if (
                        event.target === modal
                    ) {

                        modal.classList.add(
                            "hidden"
                        );

                    }

                }
            );

        });


    /* =========================================================
       NAVIGATION
       ========================================================= */

    document
        .querySelectorAll(
            ".navigation-button"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const page =
                        button.dataset.page;


                    document
                        .querySelectorAll(
                            ".navigation-button"
                        )
                        .forEach(item =>
                            item.classList.remove(
                                "active"
                            )
                        );


                    button.classList.add(
                        "active"
                    );


                    closeSideMenu();


                    if (page === "home") {

                        aboutModal.classList.add(
                            "hidden"
                        );

                        settingsModal.classList.add(
                            "hidden"
                        );


                        document
                            .getElementById(
                                "chatContainer"
                            )
                            .scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });

                    }


                    if (page === "about") {

                        aboutModal.classList.remove(
                            "hidden"
                        );

                    }


                    if (page === "settings") {

                        settingsModal.classList.remove(
                            "hidden"
                        );

                    }

                }
            );

        });


    /* =========================================================
       SETTINGS
       ========================================================= */

    const darkModeToggle =
        document.getElementById(
            "darkModeToggle"
        );

    const motionToggle =
        document.getElementById(
            "motionToggle"
        );


    function applyTheme(value) {

        document.body.classList.toggle(
            "dark",
            value === "dark"
        );

        darkModeToggle.checked =
            value === "dark";
    }


    function applyBackground(value) {

        document.body.classList.remove(
            "bg-gray",
            "bg-warm",
            "bg-blue",
            "bg-green",
            "bg-lavender"
        );


        if (value !== "white") {

            document.body.classList.add(
                `bg-${value}`
            );

        }

    }


    function applyFont(value) {

        document.body.classList.remove(
            "font-small",
            "font-medium",
            "font-large"
        );


        document.body.classList.add(
            `font-${value}`
        );

    }


    function applyMotion(value) {

        document.body.classList.toggle(
            "reduced-motion",
            value === "reduced"
        );


        motionToggle.checked =
            value === "reduced";
    }


    darkModeToggle.addEventListener(
        "change",
        () => {

            const value =
                darkModeToggle.checked
                    ? "dark"
                    : "light";


            localStorage.setItem(
                "mastercommerce-theme",
                value
            );


            applyTheme(value);

        }
    );


    motionToggle.addEventListener(
        "change",
        () => {

            const value =
                motionToggle.checked
                    ? "reduced"
                    : "normal";


            localStorage.setItem(
                "mastercommerce-motion",
                value
            );


            applyMotion(value);

        }
    );


    document
        .querySelectorAll(
            "[data-background]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const value =
                        button.dataset.background;


                    localStorage.setItem(
                        "mastercommerce-background",
                        value
                    );


                    applyBackground(value);

                }
            );

        });


    document
        .querySelectorAll(
            "[data-font]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const value =
                        button.dataset.font;


                    localStorage.setItem(
                        "mastercommerce-font",
                        value
                    );


                    applyFont(value);

                }
            );

        });


    /* =========================================================
       CLEAR CHAT
       ========================================================= */

    document
        .getElementById(
            "clearChatButton"
        )
        .addEventListener(
            "click",
            () => {

                messages.innerHTML =
                    "";

                welcomeScreen.style.display =
                    "block";

                conversationState =
                    "normal";

                settingsModal.classList.add(
                    "hidden"
                );

            }
        );


    /* =========================================================
       RESET SETTINGS
       ========================================================= */

    document
        .getElementById(
            "resetSettingsButton"
        )
        .addEventListener(
            "click",
            () => {

                localStorage.removeItem(
                    "mastercommerce-theme"
                );

                localStorage.removeItem(
                    "mastercommerce-background"
                );

                localStorage.removeItem(
                    "mastercommerce-font"
                );

                localStorage.removeItem(
                    "mastercommerce-motion"
                );


                applyTheme("light");

                applyBackground("white");

                applyFont("medium");

                applyMotion("normal");

            }
        );


    /* =========================================================
       LOAD SAVED SETTINGS
       ========================================================= */

    applyTheme(
        localStorage.getItem(
            "mastercommerce-theme"
        ) || "light"
    );


    applyBackground(
        localStorage.getItem(
            "mastercommerce-background"
        ) || "white"
    );


    applyFont(
        localStorage.getItem(
            "mastercommerce-font"
        ) || "medium"
    );


    applyMotion(
        localStorage.getItem(
            "mastercommerce-motion"
        ) || "normal"
    );


    /* =========================================================
       INITIALISE
       ========================================================= */

    questionInput.focus();

});
