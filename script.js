document.addEventListener("DOMContentLoaded", () => {

    if (window.mastercommerceLoaded) return;
    window.mastercommerceLoaded = true;

    /* =========================================================
       MASTERCOMMERCE
       Frontend-only educational AI system
       ========================================================= */


    /* =========================================================
       ELEMENTS
       ========================================================= */

    const sidebar = document.getElementById("sidebar");
    const sidebarOverlay = document.getElementById("sidebarOverlay");

    const menuButton = document.getElementById("menuButton");
    const closeSidebar = document.getElementById("closeSidebar");

    const homeButton = document.getElementById("homeButton");
    const aboutButton = document.getElementById("aboutButton");
    const settingsButton = document.getElementById("settingsButton");

    const newChatButton = document.getElementById("newChatButton");
    const clearChatButton = document.getElementById("clearChatButton");

    const welcomeScreen = document.getElementById("welcomeScreen");
    const chatArea = document.getElementById("chatArea");

    const questionInput = document.getElementById("questionInput");
    const sendButton = document.getElementById("sendButton");

    const plusButton = document.getElementById("plusButton");
    const plusMenu = document.getElementById("plusMenu");

    const featureToast = document.getElementById("featureToast");

    const aboutModal = document.getElementById("aboutModal");
    const settingsModal = document.getElementById("settingsModal");

    const resetSettingsButton =
        document.getElementById("resetSettingsButton");

    const motionButton =
        document.getElementById("motionButton");


    /* =========================================================
       BASIC SAFETY CHECK
       ========================================================= */

    if (!questionInput || !sendButton || !chatArea) {
        console.error("Mastercommerce: Required elements are missing.");
        return;
    }


    /* =========================================================
       PREVENT MOBILE AUTO ZOOM
       ========================================================= */

    function preventInputZoom() {

        questionInput.style.fontSize = "16px";
        questionInput.style.transform = "none";
        questionInput.style.zoom = "1";

        document.documentElement.style.zoom = "1";
        document.body.style.zoom = "1";
    }

    preventInputZoom();

    questionInput.addEventListener("focus", () => {
        preventInputZoom();
    });

    questionInput.addEventListener("blur", () => {
        preventInputZoom();
    });


    /* =========================================================
       DEVELOPER INFORMATION
       ========================================================= */

    const developerInformation = {
        developer: "PD | Web & App Development",
        founder: "Phungo Dembe Vusani",
        location: "Limpopo, South Africa",
        education: "University of Venda, BCom in Accounting",
        product: "Mastercommerce",
        version: "v1.0.0"
    };


    /* =========================================================
       CONVERSATION
       ========================================================= */

    let conversation = [];


    /* =========================================================
       TXT KNOWLEDGE FILES
       ========================================================= */

    const knowledgeFiles = {
        accounting: "knowledge/accounting.txt",
        economics: "knowledge/economics.txt",
        mathematics: "knowledge/mathematics.txt"
    };


    const externalKnowledge = {
        accounting: "",
        economics: "",
        mathematics: ""
    };


    const knowledgeStatus = {
        accounting: false,
        economics: false,
        mathematics: false
    };


    let knowledgeLoading = true;


    async function loadKnowledgeFile(subject, filePath) {

        try {

            const response = await fetch(filePath, {
                cache: "no-store"
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const text = await response.text();

            if (!text.trim()) {
                throw new Error("The file is empty.");
            }

            externalKnowledge[subject] = text;

            knowledgeStatus[subject] = true;

            console.log(
                `Mastercommerce: ${subject}.txt loaded successfully.`
            );

            return true;

        } catch (error) {

            console.error(
                `Mastercommerce: Could not load ${filePath}`,
                error
            );

            externalKnowledge[subject] = "";
            knowledgeStatus[subject] = false;

            return false;
        }
    }


    async function loadAllKnowledge() {

        knowledgeLoading = true;

        await Promise.all([
            loadKnowledgeFile(
                "accounting",
                knowledgeFiles.accounting
            ),

            loadKnowledgeFile(
                "economics",
                knowledgeFiles.economics
            ),

            loadKnowledgeFile(
                "mathematics",
                knowledgeFiles.mathematics
            )
        ]);

        knowledgeLoading = false;

        console.log(
            "Mastercommerce TXT knowledge system is ready."
        );

        console.log(
            "Accounting:",
            knowledgeStatus.accounting
        );

        console.log(
            "Economics:",
            knowledgeStatus.economics
        );

        console.log(
            "Mathematics:",
            knowledgeStatus.mathematics
        );
    }


    const knowledgeReadyPromise = loadAllKnowledge();


    /* =========================================================
       NORMALISE TEXT
       ========================================================= */

    function normalizeText(text) {

        return String(text || "")
            .toLowerCase()
            .replace(/[^\w\s.%+\-*/=()]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }


    /* =========================================================
       STOP WORDS
       ========================================================= */

    const stopWords = new Set([

        "the",
        "and",
        "for",
        "that",
        "this",
        "with",
        "from",
        "into",
        "about",
        "what",
        "why",
        "how",
        "when",
        "where",
        "which",
        "who",
        "whom",
        "whose",
        "can",
        "could",
        "would",
        "should",
        "will",
        "does",
        "did",
        "has",
        "have",
        "had",
        "are",
        "was",
        "were",
        "is",
        "to",
        "of",
        "in",
        "on",
        "at",
        "by",
        "an",
        "a",
        "as",
        "or",
        "be",
        "it",
        "its",
        "their",
        "they",
        "them",
        "you",
        "your",
        "me",
        "my",
        "i",
        "please",
        "explain",
        "tell",
        "give"
    ]);


    /* =========================================================
       SUBJECT WORDS
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
            "revenue",
            "income",
            "expense",
            "expenses",
            "profit",
            "loss",
            "debit",
            "credit",
            "journal",
            "ledger",
            "trial balance",
            "inventory",
            "vat",
            "tax",
            "audit",
            "auditing",
            "financial",
            "statement",
            "statements",
            "depreciation",
            "receivables",
            "payables",
            "ifrs",
            "ias",
            "consolidation",
            "associate",
            "goodwill",
            "ratio",
            "ratios",
            "contribution",
            "break even",
            "cost",
            "costing"
        ],

        economics: [

            "economics",
            "economic",
            "scarcity",
            "opportunity cost",
            "demand",
            "supply",
            "market",
            "price",
            "elasticity",
            "inflation",
            "unemployment",
            "gdp",
            "growth",
            "development",
            "monetary",
            "fiscal",
            "policy",
            "government",
            "externality",
            "externalities",
            "public goods",
            "monopoly",
            "oligopoly",
            "competition",
            "exchange rate",
            "currency",
            "aggregate demand",
            "aggregate supply",
            "business cycle",
            "balance of payments"
        ],

        mathematics: [

            "mathematics",
            "math",
            "maths",
            "algebra",
            "equation",
            "equations",
            "factorise",
            "factorisation",
            "indices",
            "exponents",
            "simultaneous",
            "gradient",
            "straight line",
            "distance",
            "midpoint",
            "mean",
            "median",
            "mode",
            "statistics",
            "probability",
            "interest",
            "percentage",
            "percent",
            "sequence",
            "arithmetic",
            "geometric",
            "trigonometry",
            "sine",
            "cosine",
            "tangent",
            "pythagoras",
            "calculus",
            "derivative",
            "differentiate",
            "integration",
            "integrate",
            "function",
            "functions",
            "geometry",
            "circle",
            "triangle"
        ]
    };


    /* =========================================================
       SUBJECT DETECTION
       ========================================================= */

    function detectSubject(question) {

        const text = normalizeText(question);

        const scores = {
            accounting: 0,
            economics: 0,
            mathematics: 0
        };


        Object.keys(subjectWords).forEach(subject => {

            subjectWords[subject].forEach(word => {

                if (text.includes(word)) {

                    if (word.includes(" ")) {
                        scores[subject] += 4;
                    } else {
                        scores[subject] += 2;
                    }
                }
            });
        });


        let bestSubject = null;
        let bestScore = 0;

        Object.keys(scores).forEach(subject => {

            if (scores[subject] > bestScore) {

                bestScore = scores[subject];
                bestSubject = subject;
            }
        });


        if (bestScore === 0) {
            return null;
        }

        return bestSubject;
    }


    /* =========================================================
       BUILT-IN ACCOUNTING KNOWLEDGE
       ========================================================= */

    const accountingKnowledge = {

        "accounting equation":
            "The accounting equation is Assets = Liabilities + Equity. It shows that everything a business owns is financed either by liabilities or by the owner's equity.",

        "assets":
            "Assets are resources controlled by a business that are expected to provide future economic benefits.",

        "current assets":
            "Current assets are assets expected to be realised, sold or consumed during the normal operating cycle or within twelve months.",

        "non current assets":
            "Non-current assets are long-term resources used by a business, such as property, plant and equipment.",

        "liabilities":
            "Liabilities are present obligations of a business arising from past events that are expected to result in an outflow of economic resources.",

        "current liabilities":
            "Current liabilities are obligations expected to be settled during the normal operating cycle or within twelve months.",

        "equity":
            "Equity is the residual interest in the assets of a business after deducting its liabilities.",

        "revenue":
            "Revenue is income earned from the ordinary activities of a business.",

        "expenses":
            "Expenses are decreases in economic benefits during an accounting period that reduce equity, excluding distributions to owners.",

        "double entry":
            "Double-entry accounting means every transaction affects at least two accounts, with total debits equal to total credits.",

        "debit":
            "A debit is an entry on the left side of an account. Debits generally increase assets and expenses and decrease liabilities, equity and income.",

        "credit":
            "A credit is an entry on the right side of an account. Credits generally increase liabilities, equity and income and decrease assets and expenses.",

        "trial balance":
            "A trial balance is a list of ledger account balances used to check whether total debits equal total credits.",

        "bank reconciliation":
            "A bank reconciliation compares the business's cash records with the bank statement and identifies differences such as outstanding cheques, deposits in transit and bank charges.",

        "depreciation":
            "Depreciation is the systematic allocation of the depreciable amount of an asset over its useful life.",

        "inventory":
            "Inventory consists of assets held for sale, in production for sale, or in the form of materials and supplies to be consumed in production.",

        "receivables":
            "Trade receivables are amounts owed to a business by customers who purchased goods or services on credit.",

        "payables":
            "Trade payables are amounts owed by a business to suppliers for goods or services purchased on credit.",

        "vat":
            "VAT is a consumption tax charged on taxable supplies. Registered businesses generally charge output VAT and may claim allowable input VAT.",

        "gross profit":
            "Gross profit is calculated as Sales or Revenue minus Cost of Sales.",

        "net profit":
            "Net profit is the profit remaining after all relevant expenses have been deducted from income.",

        "gross profit margin":
            "Gross profit margin = Gross Profit / Revenue × 100.",

        "net profit margin":
            "Net profit margin = Net Profit / Revenue × 100.",

        "current ratio":
            "Current ratio = Current Assets / Current Liabilities. It measures the ability of a business to meet short-term obligations.",

        "acid test ratio":
            "Acid-test ratio = (Current Assets − Inventory) / Current Liabilities. It measures short-term liquidity without relying on inventory being sold.",

        "inventory turnover":
            "Inventory turnover measures how many times inventory is sold or replaced during a period. A common formula is Cost of Sales / Average Inventory.",

        "debtors collection period":
            "Debtors collection period estimates the average number of days customers take to pay. A common formula is Average Trade Receivables / Credit Sales × 365.",

        "debt ratio":
            "Debt ratio measures the proportion of assets financed by debt. A common formula is Total Liabilities / Total Assets × 100.",

        "break even":
            "The break-even point is where total revenue equals total costs and there is no profit or loss. In units, Break-even Units = Fixed Costs / Contribution per Unit.",

        "contribution":
            "Contribution per unit = Selling Price per Unit − Variable Cost per Unit.",

        "fixed cost":
            "A fixed cost remains constant in total within a relevant range, regardless of changes in activity level.",

        "variable cost":
            "A variable cost changes in total as activity changes.",

        "marginal cost":
            "Marginal cost is the additional cost of producing one more unit of output.",

        "sunk cost":
            "A sunk cost is a cost that has already been incurred and cannot be recovered.",

        "opportunity cost":
            "Opportunity cost is the benefit given up when one alternative is chosen instead of another.",

        "relevant cost":
            "A relevant cost is a future cost that differs between alternatives and can affect a decision.",

        "absorption costing":
            "Absorption costing assigns both variable and fixed production overheads to units produced.",

        "variable costing":
            "Variable costing assigns variable production costs to products while fixed manufacturing overhead is treated as a period cost.",

        "ias 16":
            "IAS 16 deals with Property, Plant and Equipment. It covers recognition, measurement, depreciation and derecognition of qualifying assets.",

        "ias 2":
            "IAS 2 deals with Inventories. Inventory is generally measured at the lower of cost and net realisable value.",

        "ias 12":
            "IAS 12 deals with income taxes, including current tax and deferred tax.",

        "ias 21":
            "IAS 21 deals with the effects of changes in foreign exchange rates.",

        "ifrs 15":
            "IFRS 15 deals with revenue from contracts with customers and uses a five-step framework for recognising revenue.",

        "ifrs 9":
            "IFRS 9 deals with financial instruments, including classification and measurement, impairment and hedge accounting.",

        "ifrs 10":
            "IFRS 10 deals with consolidated financial statements and the control principle used to determine whether an investor controls an investee.",

        "ias 28":
            "IAS 28 deals with investments in associates and joint ventures. Significant influence is important when applying the equity method.",

        "audit":
            "An audit is an independent examination of financial information designed to provide reasonable assurance that the financial statements are free from material misstatement.",

        "audit evidence":
            "Audit evidence is information used by the auditor to support the conclusions on which the audit opinion is based.",

        "audit risk":
            "Audit risk is the risk that the auditor expresses an inappropriate opinion when the financial statements are materially misstated.",

        "internal controls":
            "Internal controls are policies and procedures designed to help an organisation achieve objectives, safeguard assets, maintain reliable records and reduce risks.",

        "accounting cycle":
            "The accounting cycle generally includes identifying transactions, recording them, posting to ledgers, preparing a trial balance, making adjustments and preparing financial statements.",

        "statement of financial position":
            "The statement of financial position reports assets, liabilities and equity at a specific date.",

        "income statement":
            "The income statement reports income and expenses for a period and shows whether the business made a profit or loss.",

        "cash flow":
            "A cash flow statement explains changes in cash and cash equivalents through operating, investing and financing activities.",

        "working capital":
            "Working capital = Current Assets − Current Liabilities.",

        "return on equity":
            "Return on equity measures profit generated relative to shareholders' equity. A common formula is Profit After Tax / Average Equity × 100.",

        "return on assets":
            "Return on assets measures profit generated from assets. A common formula is Profit After Tax / Average Total Assets × 100.",

        "earnings per share":
            "Earnings per share measures earnings attributable to ordinary shareholders per ordinary share."
    };


    /* =========================================================
       BUILT-IN ECONOMICS KNOWLEDGE
       ========================================================= */

    const economicsKnowledge = {

        "economics":
            "Economics studies how people, businesses and governments make choices about scarce resources that have alternative uses.",

        "scarcity":
            "Scarcity exists because resources are limited while human wants are unlimited.",

        "opportunity cost":
            "Opportunity cost is the value of the next best alternative that is given up when a choice is made.",

        "factors of production":
            "The four main factors of production are land, labour, capital and entrepreneurship.",

        "demand":
            "Demand is the quantity of a good or service consumers are willing and able to buy at different prices during a given period.",

        "supply":
            "Supply is the quantity of a good or service producers are willing and able to sell at different prices during a given period.",

        "equilibrium":
            "Market equilibrium occurs where quantity demanded equals quantity supplied.",

        "shortage":
            "A shortage occurs when quantity demanded is greater than quantity supplied at a given price.",

        "surplus":
            "A surplus occurs when quantity supplied is greater than quantity demanded at a given price.",

        "elasticity":
            "Elasticity measures how responsive one economic variable is to a change in another variable.",

        "price elasticity":
            "Price elasticity of demand measures the responsiveness of quantity demanded to a change in price.",

        "substitutes":
            "Substitute goods are goods that can be used in place of each other.",

        "complements":
            "Complementary goods are goods that are commonly used together.",

        "utility":
            "Utility is the satisfaction or benefit a consumer receives from consuming a good or service.",

        "ppf":
            "A production possibility frontier shows the maximum combinations of two goods or services that can be produced with available resources and technology.",

        "perfect competition":
            "Perfect competition is a market structure with many buyers and sellers, homogeneous products, relatively free entry and exit, and firms that are price takers.",

        "monopoly":
            "A monopoly is a market structure where one firm is the dominant or sole supplier and significant barriers to entry exist.",

        "oligopoly":
            "An oligopoly is a market structure dominated by a small number of large firms whose decisions can affect one another.",

        "monopolistic competition":
            "Monopolistic competition has many firms selling differentiated products with relatively free entry and exit.",

        "externalities":
            "An externality occurs when an economic activity creates costs or benefits for third parties that are not fully reflected in market prices.",

        "public goods":
            "Public goods are generally non-rivalrous and non-excludable, meaning one person's use does not substantially reduce availability to others and people can be difficult to exclude from using them.",

        "market failure":
            "Market failure occurs when a market allocation of resources is inefficient, often because of externalities, public goods, information problems or market power.",

        "inflation":
            "Inflation is a sustained increase in the general price level of goods and services over time.",

        "demand pull inflation":
            "Demand-pull inflation occurs when aggregate demand grows faster than the economy's ability to produce goods and services.",

        "cost push inflation":
            "Cost-push inflation occurs when rising production costs put upward pressure on prices.",

        "unemployment":
            "Unemployment occurs when people who are willing and able to work and are actively seeking work cannot find employment.",

        "gdp":
            "Gross Domestic Product is the monetary value of final goods and services produced within an economy during a specified period.",

        "real gdp":
            "Real GDP measures output using prices adjusted to remove the effects of inflation.",

        "nominal gdp":
            "Nominal GDP measures output using current prices without adjusting for inflation.",

        "economic growth":
            "Economic growth is an increase in the production of goods and services in an economy, commonly measured by the increase in real GDP.",

        "economic development":
            "Economic development is broader than economic growth and includes improvements in living standards, health, education, income distribution and economic opportunities.",

        "business cycle":
            "The business cycle describes fluctuations in economic activity, including expansion, peak, contraction and trough.",

        "fiscal policy":
            "Fiscal policy involves government decisions about taxation and public spending to influence economic activity.",

        "monetary policy":
            "Monetary policy involves actions by a central bank to influence interest rates, money and credit conditions in the economy.",

        "aggregate demand":
            "Aggregate demand is total planned expenditure on domestically produced goods and services in an economy.",

        "aggregate supply":
            "Aggregate supply is the total quantity of goods and services firms are willing to produce at different price levels.",

        "balance of payments":
            "The balance of payments records economic transactions between residents of a country and the rest of the world.",

        "exchange rate":
            "An exchange rate is the price of one currency expressed in terms of another currency.",

        "depreciation":
            "Currency depreciation means a currency loses value relative to another currency or group of currencies under a floating exchange-rate system.",

        "appreciation":
            "Currency appreciation means a currency gains value relative to another currency or group of currencies.",

        "economic indicators":
            "Economic indicators are statistics used to assess the condition and direction of an economy, such as GDP growth, inflation and unemployment."
    };


    /* =========================================================
       BUILT-IN MATHEMATICS KNOWLEDGE
       ========================================================= */

    const mathematicsKnowledge = {

        "percentage":
            "A percentage expresses a number as a fraction out of 100. Percentage = Part / Whole × 100.",

        "percentage increase":
            "Percentage increase = (New Value − Original Value) / Original Value × 100.",

        "percentage decrease":
            "Percentage decrease = (Original Value − New Value) / Original Value × 100.",

        "linear equation":
            "A linear equation has variables with a maximum power of 1. For example, 2x + 5 = 15. Solving gives x = 5.",

        "quadratic equation":
            "A quadratic equation has the general form ax² + bx + c = 0, where a is not zero. It can be solved by factorisation, completing the square or the quadratic formula.",

        "quadratic formula":
            "For ax² + bx + c = 0, x = (-b ± √(b² − 4ac)) / 2a.",

        "factorisation":
            "Factorisation means expressing an algebraic expression as a product of simpler factors.",

        "indices":
            "Indices are powers or exponents. Important rules include aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ and (aᵐ)ⁿ = aᵐⁿ.",

        "simultaneous equations":
            "Simultaneous equations are equations solved together to find values that satisfy all equations.",

        "gradient":
            "The gradient of a straight line is change in y divided by change in x: m = (y₂ − y₁) / (x₂ − x₁).",

        "straight line":
            "The equation of a straight line is commonly written as y = mx + c, where m is the gradient and c is the y-intercept.",

        "distance":
            "The distance between two points (x₁,y₁) and (x₂,y₂) is √[(x₂ − x₁)² + (y₂ − y₁)²].",

        "midpoint":
            "The midpoint between two points is ((x₁ + x₂)/2, (y₁ + y₂)/2).",

        "mean":
            "The arithmetic mean is calculated by adding all values and dividing by the number of values.",

        "median":
            "The median is the middle value when data is arranged in numerical order. If there are two middle values, their average is used.",

        "mode":
            "The mode is the value that occurs most frequently in a data set.",

        "probability":
            "Probability measures how likely an event is to occur. Probability = favourable outcomes / total possible outcomes when outcomes are equally likely.",

        "complement probability":
            "The probability of an event not occurring is P(not A) = 1 − P(A).",

        "simple interest":
            "Simple interest = Principal × Rate × Time. Total amount = Principal + Interest.",

        "compound interest":
            "For annual compounding, A = P(1 + r)ⁿ, where P is principal, r is the rate per period and n is the number of periods.",

        "arithmetic sequence":
            "An arithmetic sequence has a constant difference between consecutive terms. The nth term is aₙ = a + (n − 1)d.",

        "geometric sequence":
            "A geometric sequence has a constant ratio between consecutive terms. The nth term is aₙ = arⁿ⁻¹.",

        "pythagoras":
            "For a right-angled triangle, a² + b² = c², where c is the hypotenuse.",

        "trigonometry":
            "The basic right-triangle ratios are sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse and tan θ = opposite/adjacent.",

        "circle":
            "The circumference of a circle is 2πr and the area is πr².",

        "triangle":
            "The area of a triangle is ½ × base × perpendicular height.",

        "rectangle":
            "The area of a rectangle is length × width and its perimeter is 2(length + width).",

        "cylinder":
            "The volume of a cylinder is πr²h.",

        "differentiation":
            "Differentiation finds the rate at which a function changes. For example, if y = xⁿ, then dy/dx = nxⁿ⁻¹.",

        "integration":
            "Integration is the reverse process of differentiation. For example, ∫xⁿ dx = xⁿ⁺¹/(n+1) + C, when n is not −1.",

        "functions":
            "A function is a relationship where each input has exactly one output.",

        "algebra":
            "Algebra uses letters and symbols to represent numbers and relationships between quantities."
    };


    /* =========================================================
       KNOWLEDGE SEARCH
       ========================================================= */

    function searchKnowledge(question, knowledgeObject) {

        const normalizedQuestion = normalizeText(question);

        let bestKey = null;
        let bestScore = 0;

        Object.keys(knowledgeObject).forEach(key => {

            const normalizedKey = normalizeText(key);

            let score = 0;

            if (normalizedQuestion.includes(normalizedKey)) {
                score += 20;
            }

            const keyWords = normalizedKey
                .split(/\s+/)
                .filter(word => word.length > 2);

            keyWords.forEach(word => {

                if (normalizedQuestion.includes(word)) {
                    score += 5;
                }
            });

            if (score > bestScore) {

                bestScore = score;
                bestKey = key;
            }
        });


        if (!bestKey || bestScore < 5) {
            return null;
        }

        return knowledgeObject[bestKey];
    }


    /* =========================================================
       TXT SEARCH
       IMPORTANT:
       NEVER RETURN THE WHOLE TXT FILE
       ========================================================= */

    function splitKnowledgeIntoSections(knowledge) {

        if (!knowledge) return [];

        return knowledge
            .split(/\n\s*\n+/)
            .map(section => section.trim())
            .filter(section => section.length > 0);
    }


    function getQuestionWords(question) {

        return normalizeText(question)
            .split(/\s+/)
            .filter(word =>
                word.length > 2 &&
                !stopWords.has(word)
            );
    }


    function isSmallMessage(question) {

        const text = normalizeText(question);

        if (!text) return true;

        const greetings = [

            "hi",
            "hello",
            "hey",
            "good morning",
            "good afternoon",
            "good evening",
            "thanks",
            "thank you",
            "thank",
            "okay",
            "ok",
            "cool",
            "great",
            "nice"
        ];

        if (greetings.includes(text)) {
            return true;
        }

        const words = text.split(/\s+/);

        if (words.length <= 2) {
            return true;
        }

        return false;
    }


    function searchExternalKnowledge(question, subject) {

        const knowledge = externalKnowledge[subject];

        if (!knowledge) {
            return null;
        }


        if (isSmallMessage(question)) {
            return null;
        }


        const normalizedQuestion =
            normalizeText(question);

        const questionWords =
            getQuestionWords(question);


        if (questionWords.length === 0) {
            return null;
        }


        const sections =
            splitKnowledgeIntoSections(knowledge);


        let bestSection = null;
        let bestScore = 0;


        sections.forEach(section => {

            const normalizedSection =
                normalizeText(section);

            const firstLine =
                normalizeText(
                    section.split("\n")[0] || ""
                );


            let score = 0;


            /* Exact phrase match */

            if (
                normalizedQuestion.length > 8 &&
                normalizedSection.includes(normalizedQuestion)
            ) {
                score += 30;
            }


            /* Word matching */

            const matchedWords =
                questionWords.filter(word =>
                    normalizedSection.includes(word)
                );


            matchedWords.forEach(word => {

                if (firstLine.includes(word)) {
                    score += 10;
                } else {
                    score += 2;
                }
            });


            /* Topic title match */

            if (
                questionWords.some(word =>
                    firstLine.includes(word)
                )
            ) {
                score += 15;
            }


            /* Multiple meaningful words */

            if (matchedWords.length >= 2) {
                score += 8;
            }


            /*
             * Require meaningful matching.
             * This prevents common words from returning
             * random sections.
             */

            const matchRatio =
                matchedWords.length /
                Math.max(questionWords.length, 1);


            if (matchRatio >= 0.5) {
                score += 8;
            }


            if (score > bestScore) {

                bestScore = score;
                bestSection = section;
            }
        });


        /*
         * Strong threshold.
         * If the question does not really match
         * the TXT knowledge, return nothing.
         */

        if (!bestSection || bestScore < 15) {
            return null;
        }


        return bestSection;
    }


    /* =========================================================
       SEARCH ALL TXT KNOWLEDGE
       ========================================================= */

    function searchAllExternalKnowledge(question) {

        if (isSmallMessage(question)) {
            return null;
        }


        const questionWords =
            getQuestionWords(question);


        if (!questionWords.length) {
            return null;
        }


        const subjects = [
            "accounting",
            "economics",
            "mathematics"
        ];


        let best = null;
        let bestScore = 0;


        subjects.forEach(subject => {

            const knowledge =
                externalKnowledge[subject];


            if (!knowledge) return;


            const sections =
                splitKnowledgeIntoSections(knowledge);


            sections.forEach(section => {

                const normalizedSection =
                    normalizeText(section);

                const firstLine =
                    normalizeText(
                        section.split("\n")[0] || ""
                    );


                let score = 0;


                const matchedWords =
                    questionWords.filter(word =>
                        normalizedSection.includes(word)
                    );


                matchedWords.forEach(word => {

                    if (firstLine.includes(word)) {
                        score += 10;
                    } else {
                        score += 2;
                    }
                });


                if (
                    questionWords.some(word =>
                        firstLine.includes(word)
                    )
                ) {
                    score += 15;
                }


                if (matchedWords.length >= 2) {
                    score += 8;
                }


                const matchRatio =
                    matchedWords.length /
                    Math.max(questionWords.length, 1);


                if (matchRatio >= 0.5) {
                    score += 8;
                }


                if (score > bestScore) {

                    bestScore = score;

                    best = {
                        subject,
                        text: section,
                        score
                    };
                }
            });
        });


        if (!best || bestScore < 15) {
            return null;
        }


        return best;
    }


    /* =========================================================
       TOPIC TITLE
       ========================================================= */

    function makeTopicTitle(text) {

        if (!text) {
            return "Lesson";
        }


        const firstLine =
            text.split("\n")[0].trim();


        if (
            firstLine &&
            firstLine.length <= 100
        ) {
            return firstLine;
        }


        return "Lesson";
    }


    /* =========================================================
       INFORMATION REQUESTS
       ========================================================= */

    function isAllInformationRequest(question) {

        const text = normalizeText(question);

        return (
            text.includes("all information") ||
            text.includes("everything about") ||
            text.includes("all about") ||
            text.includes("show me everything") ||
            text.includes("give me everything")
        );
    }


    function isTopicListRequest(question) {

        const text = normalizeText(question);

        return (
            text.includes("topics") ||
            text.includes("topic list") ||
            text.includes("what can you teach") ||
            text.includes("what do you know")
        );
    }


    /* =========================================================
       LEARNED KNOWLEDGE
       ========================================================= */

    const LEARNED_KNOWLEDGE_KEY =
        "mastercommerce_learned_knowledge";


    function loadLearnedKnowledge() {

        try {

            const saved =
                localStorage.getItem(
                    LEARNED_KNOWLEDGE_KEY
                );

            if (!saved) {
                return [];
            }

            const parsed = JSON.parse(saved);

            return Array.isArray(parsed)
                ? parsed
                : [];

        } catch (error) {

            console.error(
                "Mastercommerce: Could not load learned knowledge.",
                error
            );

            return [];
        }
    }


    let learnedKnowledge =
        loadLearnedKnowledge();


    function saveLearnedKnowledge() {

        try {

            localStorage.setItem(
                LEARNED_KNOWLEDGE_KEY,
                JSON.stringify(learnedKnowledge)
            );

        } catch (error) {

            console.error(
                "Mastercommerce: Could not save learned knowledge.",
                error
            );
        }
    }


    function looksLikeQuestion(text) {

        const normalized =
            normalizeText(text);


        const questionStarters = [

            "what ",
            "why ",
            "how ",
            "when ",
            "where ",
            "who ",
            "which ",
            "whose ",
            "whom ",
            "can ",
            "could ",
            "would ",
            "should ",
            "will ",
            "does ",
            "do ",
            "did ",
            "has ",
            "have ",
            "had ",
            "may ",
            "might ",
            "explain ",
            "define ",
            "calculate ",
            "find ",
            "give me ",
            "tell me "
        ];


        if (normalized.endsWith("?")) {
            return true;
        }


        return questionStarters.some(
            starter => normalized.startsWith(starter)
        );
    }


    function learnStatement(statement) {

        const clean =
            statement.trim();


        if (!clean) {
            return false;
        }


        if (clean.length < 15) {
            return false;
        }


        if (looksLikeQuestion(clean)) {
            return false;
        }


        const normalized =
            normalizeText(clean);


        const exists =
            learnedKnowledge.some(item =>
                normalizeText(item) === normalized
            );


        if (exists) {
            return false;
        }


        learnedKnowledge.push(clean);

        saveLearnedKnowledge();

        return true;
    }


    function searchLearnedKnowledge(question) {

        if (!learnedKnowledge.length) {
            return null;
        }


        const words =
            getQuestionWords(question);


        if (!words.length) {
            return null;
        }


        let bestText = null;
        let bestScore = 0;


        learnedKnowledge.forEach(item => {

            const normalized =
                normalizeText(item);


            let score = 0;


            words.forEach(word => {

                if (normalized.includes(word)) {
                    score += 3;
                }
            });


            if (score > bestScore) {

                bestScore = score;
                bestText = item;
            }
        });


        if (bestScore < 6) {
            return null;
        }


        return bestText;
    }


    /* =========================================================
       CALCULATOR
       ========================================================= */

    function simpleCalculator(question) {

        const text =
            question
                .replace(/,/g, "")
                .trim();


        const calculationMatch =
            text.match(
                /(?:calculate|what is|solve|find)\s+(.+)/i
            );


        if (!calculationMatch) {
            return null;
        }


        let expression =
            calculationMatch[1]
                .replace(/=/g, "")
                .trim();


        if (
            !/^[0-9+\-*/().%\s^]+$/.test(expression)
        ) {
            return null;
        }


        try {

            expression =
                expression.replace(/\^/g, "**");

            expression =
                expression.replace(
                    /(\d+(?:\.\d+)?)\s*%/g,
                    "($1/100)"
                );


            const result =
                Function(
                    `"use strict"; return (${expression})`
                )();


            if (
                typeof result !== "number" ||
                !Number.isFinite(result)
            ) {
                return null;
            }


            return `The answer is ${result}.`;

        } catch (error) {

            return null;
        }
    }


    /* =========================================================
       GENERAL ANSWERS
       ========================================================= */

    function generalAnswer(question) {

        const text =
            normalizeText(question);


        if (
            text === "hi" ||
            text === "hello" ||
            text === "hey"
        ) {

            return (
                "Hello. I am Mastercommerce. " +
                "What would you like to learn today?"
            );
        }


        if (text === "good morning") {

            return (
                "Good morning. What would you like " +
                "to learn today?"
            );
        }


        if (text === "good afternoon") {

            return (
                "Good afternoon. What would you like " +
                "to learn today?"
            );
        }


        if (text === "good evening") {

            return (
                "Good evening. What would you like " +
                "to learn today?"
            );
        }


        if (
            text === "thanks" ||
            text === "thank you"
        ) {

            return (
                "You're welcome. Ask me another " +
                "Accounting, Economics or Mathematics question."
            );
        }


        if (
            text === "ok" ||
            text === "okay"
        ) {

            return "Alright. Ask me whenever you are ready.";
        }


        return null;
    }


    /* =========================================================
       TOPIC LIST
       ========================================================= */

    function getTopicList(subject) {

        if (subject === "accounting") {

            return [
                "Accounting equation",
                "Assets and liabilities",
                "Equity",
                "Revenue and expenses",
                "Double-entry accounting",
                "Trial balance",
                "Bank reconciliation",
                "Depreciation",
                "Inventory",
                "VAT",
                "Profit and margins",
                "Financial ratios",
                "Cost accounting",
                "Break-even analysis",
                "Management accounting",
                "IFRS and IAS",
                "Auditing",
                "Financial statements"
            ];
        }


        if (subject === "economics") {

            return [
                "Scarcity",
                "Opportunity cost",
                "Demand and supply",
                "Elasticity",
                "Market structures",
                "Externalities",
                "Market failure",
                "Inflation",
                "Unemployment",
                "GDP",
                "Economic growth",
                "Economic development",
                "Business cycles",
                "Fiscal policy",
                "Monetary policy",
                "Aggregate demand and supply",
                "Exchange rates",
                "Balance of payments"
            ];
        }


        if (subject === "mathematics") {

            return [
                "Percentages",
                "Algebra",
                "Linear equations",
                "Quadratic equations",
                "Factorisation",
                "Indices",
                "Simultaneous equations",
                "Straight lines",
                "Statistics",
                "Probability",
                "Interest",
                "Sequences",
                "Trigonometry",
                "Geometry",
                "Functions",
                "Differentiation",
                "Integration"
            ];
        }


        return [];
    }


    /* =========================================================
       GENERATE ANSWER
       ========================================================= */

    async function generateAnswer(question) {

        const cleanQuestion =
            question.trim();


        if (!cleanQuestion) {
            return "Please type a question first.";
        }


        /* -----------------------------------------------------
           GREETINGS AND SMALL CONVERSATION FIRST
           ----------------------------------------------------- */

        const general =
            generalAnswer(cleanQuestion);


        if (general) {
            return general;
        }


        /* -----------------------------------------------------
           WAIT FOR TXT FILES
           ----------------------------------------------------- */

        if (knowledgeLoading) {

            await knowledgeReadyPromise;
        }


        /* -----------------------------------------------------
           CALCULATOR
           ----------------------------------------------------- */

        const calculation =
            simpleCalculator(cleanQuestion);


        if (calculation) {
            return calculation;
        }


        /* -----------------------------------------------------
           LEARNED KNOWLEDGE
           ----------------------------------------------------- */

        const learned =
            searchLearnedKnowledge(cleanQuestion);


        /* -----------------------------------------------------
           SUBJECT DETECTION
           ----------------------------------------------------- */

        const subject =
            detectSubject(cleanQuestion);


        /* -----------------------------------------------------
           TOPIC LIST
           ----------------------------------------------------- */

        if (isTopicListRequest(cleanQuestion)) {

            if (subject) {

                const topics =
                    getTopicList(subject);

                if (topics.length) {

                    return (
                        `I can help with ${subject} topics such as:\n\n` +
                        topics.map(
                            topic => `• ${topic}`
                        ).join("\n")
                    );
                }
            }


            return (
                "I can help with Accounting, Economics " +
                "and Mathematics. Ask me about a specific topic " +
                "and I will explain it."
            );
        }


        /* -----------------------------------------------------
           ALL INFORMATION REQUEST
           ----------------------------------------------------- */

        if (isAllInformationRequest(cleanQuestion)) {

            if (subject) {

                const topics =
                    getTopicList(subject);

                return (
                    `I can teach you ${subject} through topics such as:\n\n` +
                    topics.map(
                        topic => `• ${topic}`
                    ).join("\n") +
                    "\n\nAsk me about one topic at a time and I will explain it."
                );
            }


            return (
                "I cover Accounting, Economics and Mathematics. " +
                "Please tell me the subject or topic you want to study."
            );
        }


        /* -----------------------------------------------------
           SEARCH LEARNED KNOWLEDGE
           ----------------------------------------------------- */

        if (learned) {

            return (
                "Based on information you previously taught me:\n\n" +
                learned
            );
        }


        /* -----------------------------------------------------
           SEARCH SUBJECT TXT
           ----------------------------------------------------- */

        if (subject) {

            const external =
                searchExternalKnowledge(
                    cleanQuestion,
                    subject
                );


            if (external) {

                return (
                    `${makeTopicTitle(external)}\n\n` +
                    external
                );
            }


            /* -------------------------------------------------
               SEARCH BUILT-IN KNOWLEDGE
               ------------------------------------------------- */

            let builtIn = null;


            if (subject === "accounting") {

                builtIn =
                    searchKnowledge(
                        cleanQuestion,
                        accountingKnowledge
                    );
            }


            if (subject === "economics") {

                builtIn =
                    searchKnowledge(
                        cleanQuestion,
                        economicsKnowledge
                    );
            }


            if (subject === "mathematics") {

                builtIn =
                    searchKnowledge(
                        cleanQuestion,
                        mathematicsKnowledge
                    );
            }


            if (builtIn) {

                return builtIn;
            }
        }


        /* -----------------------------------------------------
           IF SUBJECT WAS NOT CLEAR
           SEARCH ALL TXT FILES
           ----------------------------------------------------- */

        if (!subject) {

            const external =
                searchAllExternalKnowledge(
                    cleanQuestion
                );


            if (external) {

                return (
                    `${makeTopicTitle(external.text)}\n\n` +
                    external.text
                );
            }


            const accounting =
                searchKnowledge(
                    cleanQuestion,
                    accountingKnowledge
                );


            if (accounting) {
                return accounting;
            }


            const economics =
                searchKnowledge(
                    cleanQuestion,
                    economicsKnowledge
                );


            if (economics) {
                return economics;
            }


            const mathematics =
                searchKnowledge(
                    cleanQuestion,
                    mathematicsKnowledge
                );


            if (mathematics) {
                return mathematics;
            }
        }


        /* -----------------------------------------------------
           LEARN STATEMENT
           ----------------------------------------------------- */

        if (!looksLikeQuestion(cleanQuestion)) {

            const learnedNow =
                learnStatement(cleanQuestion);


            if (learnedNow) {

                return (
                    "I've learned and saved that information. " +
                    "You can ask me about it later."
                );
            }
        }


        /* -----------------------------------------------------
           FINAL RESPONSE
           ----------------------------------------------------- */

        if (!subject) {

            return (
                "I'm not sure which subject this belongs to. " +
                "Please mention Accounting, Economics or Mathematics " +
                "or include the topic in your question."
            );
        }


        return (
            "I don't have enough information to answer that accurately yet. " +
            "Try asking the question using the exact topic you are studying."
        );
    }


    /* =========================================================
       CREATE MESSAGE
       ========================================================= */

    function createMessage(text, sender) {

        const message =
            document.createElement("div");


        message.className =
            `message ${sender}`;


        const content =
            document.createElement("div");


        content.className =
            "message-content";


        const lines =
            String(text).split("\n");


        lines.forEach((line, index) => {

            const lineElement =
                document.createElement("div");

            lineElement.textContent =
                line;

            content.appendChild(
                lineElement
            );


            if (index < lines.length - 1) {

                lineElement.style.marginBottom =
                    "8px";
            }
        });


        message.appendChild(content);

        chatArea.appendChild(message);


        chatArea.scrollTop =
            chatArea.scrollHeight;


        return message;
    }


    /* =========================================================
       THINKING MESSAGE
       ========================================================= */

    function createThinkingMessage() {

        const message =
            document.createElement("div");


        message.className =
            "message assistant thinking-message";


        const content =
            document.createElement("div");


        content.className =
            "message-content";


        content.textContent =
            "Thinking...";


        message.appendChild(content);

        chatArea.appendChild(message);


        chatArea.scrollTop =
            chatArea.scrollHeight;


        return message;
    }


    /* =========================================================
       SEND QUESTION
       ========================================================= */

    let sending = false;


    async function sendQuestion() {

        if (sending) {
            return;
        }


        const question =
            questionInput.value.trim();


        if (!question) {
            return;
        }


        sending = true;


        welcomeScreen?.classList.add(
            "hidden"
        );


        createMessage(
            question,
            "user"
        );


        conversation.push({
            role: "user",
            content: question
        });


        questionInput.value = "";


        questionInput.style.height =
            "auto";


        preventInputZoom();


        const thinking =
            createThinkingMessage();


        try {

            const answer =
                await generateAnswer(question);


            thinking.remove();


            createMessage(
                answer,
                "assistant"
            );


            conversation.push({
                role: "assistant",
                content: answer
            });


        } catch (error) {

            console.error(
                "Mastercommerce answer error:",
                error
            );


            thinking.remove();


            createMessage(
                "Something went wrong while processing that question. Please try again.",
                "assistant"
            );

        } finally {

            sending = false;

            preventInputZoom();
        }
    }


    /* =========================================================
       INPUT EVENTS
       ========================================================= */

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
                "auto";


            const newHeight =
                Math.min(
                    questionInput.scrollHeight,
                    160
                );


            questionInput.style.height =
                `${newHeight}px`;


            preventInputZoom();
        }
    );


    /* =========================================================
       SIDEBAR
       ========================================================= */

    function openSidebar() {

        if (!sidebar) return;

        sidebar.classList.add("open");

        sidebarOverlay?.classList.add("active");

        document.body.classList.add(
            "sidebar-open"
        );
    }


    function closeSidebarMenu() {

        if (!sidebar) return;

        sidebar.classList.remove("open");

        sidebarOverlay?.classList.remove("active");

        document.body.classList.remove(
            "sidebar-open"
        );
    }


    menuButton?.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            openSidebar();
        }
    );


    closeSidebar?.addEventListener(
        "click",
        closeSidebarMenu
    );


    sidebarOverlay?.addEventListener(
        "click",
        closeSidebarMenu
    );


    /* =========================================================
       HOME
       ========================================================= */

    function goHome() {

        closeSidebarMenu();

        closeAllModals();

        chatArea.innerHTML = "";

        if (welcomeScreen) {

            chatArea.appendChild(
                welcomeScreen
            );

            welcomeScreen.classList.remove(
                "hidden"
            );
        }


        conversation = [];

        preventInputZoom();
    }


    homeButton?.addEventListener(
        "click",
        goHome
    );


    /* =========================================================
       NEW CHAT
       ========================================================= */

    function startNewChat() {

        closeSidebarMenu();

        closeAllModals();

        conversation = [];

        chatArea.innerHTML = "";

        if (welcomeScreen) {

            chatArea.appendChild(
                welcomeScreen
            );

            welcomeScreen.classList.remove(
                "hidden"
            );
        }


        questionInput.value = "";

        questionInput.style.height =
            "auto";


        preventInputZoom();
    }


    newChatButton?.addEventListener(
        "click",
        startNewChat
    );


    /* =========================================================
       CLEAR CHAT
       ========================================================= */

    function clearChat() {

        conversation = [];

        chatArea.innerHTML = "";


        if (welcomeScreen) {

            chatArea.appendChild(
                welcomeScreen
            );

            welcomeScreen.classList.remove(
                "hidden"
            );
        }


        questionInput.value = "";

        questionInput.style.height =
            "auto";


        preventInputZoom();
    }


    clearChatButton?.addEventListener(
        "click",
        () => {

            closeSidebarMenu();

            clearChat();
        }
    );


    /* =========================================================
       PLUS MENU
       ========================================================= */

    function closePlusMenu() {

        if (!plusMenu) return;

        plusMenu.classList.remove(
            "show"
        );

        plusMenu.setAttribute(
            "aria-hidden",
            "true"
        );


        plusButton?.setAttribute(
            "aria-expanded",
            "false"
        );
    }


    function togglePlusMenu() {

        if (!plusMenu) return;

        const isOpen =
            plusMenu.classList.contains(
                "show"
            );


        if (isOpen) {

            closePlusMenu();

        } else {

            plusMenu.classList.add(
                "show"
            );

            plusMenu.setAttribute(
                "aria-hidden",
                "false"
            );

            plusButton?.setAttribute(
                "aria-expanded",
                "true"
            );
        }
    }


    plusButton?.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            togglePlusMenu();
        }
    );


    document.querySelectorAll(
        ".plus-option"
    ).forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                const feature =
                    button.dataset.feature ||
                    "This feature";


                closePlusMenu();

                showFeatureToast(
                    `${feature} is still under development.`
                );
            }
        );
    });


    document.addEventListener(
        "click",
        event => {

            if (
                plusMenu &&
                !plusMenu.contains(event.target) &&
                event.target !== plusButton
            ) {

                closePlusMenu();
            }
        }
    );


    /* =========================================================
       FEATURE TOAST
       ========================================================= */

    let toastTimer = null;


    function showFeatureToast(message) {

        if (!featureToast) return;


        featureToast.textContent =
            message;


        featureToast.classList.add(
            "show"
        );


        clearTimeout(toastTimer);


        toastTimer =
            setTimeout(() => {

                featureToast.classList.remove(
                    "show"
                );

            }, 2500);
    }


    /* =========================================================
       MODALS
       ========================================================= */

    function openModal(modal) {

        if (!modal) return;

        modal.classList.add("show");

        document.body.classList.add(
            "modal-open"
        );
    }


    function closeModal(modal) {

        if (!modal) return;

        modal.classList.remove("show");

        if (
            !aboutModal?.classList.contains("show") &&
            !settingsModal?.classList.contains("show")
        ) {

            document.body.classList.remove(
                "modal-open"
            );
        }
    }


    function closeAllModals() {

        closeModal(aboutModal);

        closeModal(settingsModal);

        document.body.classList.remove(
            "modal-open"
        );
    }


    aboutButton?.addEventListener(
        "click",
        () => {

            closeSidebarMenu();

            openModal(aboutModal);
        }
    );


    settingsButton?.addEventListener(
        "click",
        () => {

            closeSidebarMenu();

            openModal(settingsModal);
        }
    );


    document.querySelectorAll(
        "[data-close]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const modalId =
                    button.dataset.close;


                closeModal(
                    document.getElementById(
                        modalId
                    )
                );
            }
        );
    });


    [aboutModal, settingsModal]
        .filter(Boolean)
        .forEach(modal => {

            modal.addEventListener(
                "click",
                event => {

                    if (
                        event.target === modal
                    ) {

                        closeModal(modal);
                    }
                }
            );
        });


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeSidebarMenu();

                closePlusMenu();

                closeAllModals();
            }
        }
    );


    /* =========================================================
       SETTINGS
       ========================================================= */

    const SETTINGS_KEY =
        "mastercommerce_settings";


    const defaultSettings = {

        theme: "light",
        background: "white",
        font: "medium",
        reducedMotion: false
    };


    let settings = {
        ...defaultSettings
    };


    function loadSettings() {

        try {

            const saved =
                localStorage.getItem(
                    SETTINGS_KEY
                );


            if (saved) {

                const parsed =
                    JSON.parse(saved);


                settings = {
                    ...defaultSettings,
                    ...parsed
                };
            }

        } catch (error) {

            console.error(
                "Mastercommerce: Settings could not be loaded.",
                error
            );
        }
    }


    function saveSettings() {

        try {

            localStorage.setItem(
                SETTINGS_KEY,
                JSON.stringify(settings)
            );

        } catch (error) {

            console.error(
                "Mastercommerce: Settings could not be saved.",
                error
            );
        }
    }


    function applyTheme() {

        document.body.classList.remove(
            "dark"
        );


        if (settings.theme === "dark") {

            document.body.classList.add(
                "dark"
            );
        }
    }


    function applyBackground() {

        const backgrounds = [
            "white",
            "gray",
            "warm",
            "blue",
            "green",
            "lavender"
        ];


        backgrounds.forEach(background => {

            document.body.classList.remove(
                `background-${background}`
            );
        });


        document.body.classList.add(
            `background-${settings.background}`
        );
    }


    function applyFontSize() {

        document.body.classList.remove(
            "font-small",
            "font-medium",
            "font-large"
        );


        document.body.classList.add(
            `font-${settings.font}`
        );
    }


    function applyMotion() {

        document.body.classList.remove(
            "reduced-motion"
        );


        if (settings.reducedMotion) {

            document.body.classList.add(
                "reduced-motion"
            );
        }


        if (motionButton) {

            motionButton.textContent =
                settings.reducedMotion
                    ? "Normal motion"
                    : "Reduced motion";
        }
    }


    function applyAllSettings() {

        applyTheme();

        applyBackground();

        applyFontSize();

        applyMotion();

        preventInputZoom();
    }


    document.querySelectorAll(
        "[data-theme]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                settings.theme =
                    button.dataset.theme;

                saveSettings();

                applyAllSettings();
            }
        );
    });


    document.querySelectorAll(
        "[data-background]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                settings.background =
                    button.dataset.background;

                saveSettings();

                applyAllSettings();
            }
        );
    });


    document.querySelectorAll(
        "[data-font]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                settings.font =
                    button.dataset.font;

                saveSettings();

                applyAllSettings();
            }
        );
    });


    motionButton?.addEventListener(
        "click",
        () => {

            settings.reducedMotion =
                !settings.reducedMotion;

            saveSettings();

            applyAllSettings();
        }
    );


    resetSettingsButton?.addEventListener(
        "click",
        () => {

            settings = {
                ...defaultSettings
            };

            saveSettings();

            applyAllSettings();

            showFeatureToast(
                "Settings have been reset."
            );
        }
    );


    /* =========================================================
       MOBILE VIEWPORT PROTECTION
       ========================================================= */

    function lockViewportScale() {

        const viewport =
            document.querySelector(
                'meta[name="viewport"]'
            );


        if (!viewport) return;


        viewport.setAttribute(
            "content",
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"
        );
    }


    lockViewportScale();


    /* =========================================================
       PREVENT DOUBLE-TAP ZOOM
       ========================================================= */

    let lastTouchEnd = 0;


    document.addEventListener(
        "touchend",
        event => {

            const now =
                Date.now();


            if (
                now - lastTouchEnd <= 300
            ) {

                event.preventDefault();
            }


            lastTouchEnd = now;
        },
        {
            passive: false
        }
    );


    /* =========================================================
       PREVENT PINCH ZOOM
       ========================================================= */

    document.addEventListener(
        "gesturestart",
        event => {

            event.preventDefault();
        },
        {
            passive: false
        }
    );


    document.addEventListener(
        "gesturechange",
        event => {

            event.preventDefault();
        },
        {
            passive: false
        }
    );


    document.addEventListener(
        "gestureend",
        event => {

            event.preventDefault();
        },
        {
            passive: false
        }
    );


    /* =========================================================
       FIX TOUCH INPUT BEHAVIOUR
       ========================================================= */

    questionInput.style.fontSize = "16px";


    questionInput.setAttribute(
        "inputmode",
        "text"
    );


    /* =========================================================
       LOAD SETTINGS
       ========================================================= */

    loadSettings();

    applyAllSettings();


    /* =========================================================
       INITIAL STATE
       ========================================================= */

    if (welcomeScreen) {

        welcomeScreen.classList.remove(
            "hidden"
        );
    }


    closePlusMenu();

    closeAllModals();

    closeSidebarMenu();

    preventInputZoom();


    /* =========================================================
       FINAL INITIALIZATION MESSAGE
       ========================================================= */

    console.log(
        "Mastercommerce initialized successfully."
    );

});
