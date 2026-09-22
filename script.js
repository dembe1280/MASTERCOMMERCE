document.addEventListener("DOMContentLoaded", () => {

    if (window.mastercommerceLoaded) return;
    window.mastercommerceLoaded = true;

    /* =========================================================
       OPENAI SETTINGS
       ========================================================= */

    // IMPORTANT:
    // Put your NEW OpenAI API key here.
    // Do NOT use the old key you previously exposed.
    

    /* =========================================================
       ELEMENTS
       ========================================================= */

    const chatMessages = document.getElementById("chatMessages");
    const questionInput = document.getElementById("questionInput");
    const sendButton = document.getElementById("sendButton");
    const newChatButton = document.getElementById("newChatButton");

    const sidebar = document.getElementById("sidebar");
    const sidebarOverlay = document.getElementById("sidebarOverlay");
    const hamburgerButton = document.getElementById("hamburgerButton");

    const plusButton = document.getElementById("plusButton");
    const plusMenu = document.getElementById("plusMenu");
    const featureToast = document.getElementById("featureToast");

    if (!chatMessages || !questionInput || !sendButton) {
        console.error("Mastercommerce: required elements were not found.");
        return;
    }


    /* =========================================================
       DEVELOPER INFORMATION
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
       ACCOUNTING KNOWLEDGE
       ========================================================= */

    const accountingKnowledge = [

        {
            keywords: ["accounting equation", "accounting formula"],
            answer:
`The accounting equation is:

Assets = Equity + Liabilities

Assets are what the business owns.
Liabilities are what the business owes.
Equity is the owner's interest in the business.

Example:
If a business has assets of R100 000 and liabilities of R40 000:

Equity = R100 000 − R40 000
Equity = R60 000.`
        },

        {
            keywords: ["assets", "asset"],
            answer:
`An asset is a resource controlled by a business that is expected to provide future economic benefits.

Examples:
• Cash
• Bank
• Inventory
• Vehicles
• Buildings
• Equipment
• Trade receivables

Assets can be current or non-current.`
        },

        {
            keywords: ["liabilities", "liability"],
            answer:
`A liability is an obligation that a business owes to another party.

Examples:
• Loans
• Trade payables
• Bank overdrafts
• Accrued expenses

Current liabilities are normally settled within the short term, while non-current liabilities are normally settled over a longer period.`
        },

        {
            keywords: ["revenue", "income"],
            answer:
`Revenue is income earned by a business from its normal activities.

For example, a business selling goods for R10 000 earns revenue of R10 000.

Revenue increases profit when the related expenses are lower than the revenue.`
        },

        {
            keywords: ["expense", "expenses"],
            answer:
`An expense is a cost incurred by a business while generating income.

Examples:
• Rent
• Salaries
• Electricity
• Insurance
• Depreciation
• Advertising

Expenses normally reduce profit.`
        },

        {
            keywords: ["profit", "profit formula"],
            answer:
`Profit is calculated as:

Profit = Revenue − Expenses

Example:

Revenue = R50 000
Expenses = R35 000

Profit = R50 000 − R35 000
Profit = R15 000.`
        },

        {
            keywords: ["depreciation"],
            answer:
`Depreciation is the systematic allocation of the depreciable amount of an asset over its useful life.

Common methods include:

1. Straight-line method
2. Diminishing-balance method
3. Units-of-production method

Straight-line depreciation:

Depreciation = (Cost − Residual value) ÷ Useful life`
        },

        {
            keywords: ["inventory"],
            answer:
`Inventory refers to goods held for sale or materials used in producing goods.

For a trading business:

Cost of sales = Opening inventory + Purchases − Closing inventory

Closing inventory is normally recognised as an asset.`
        },

        {
            keywords: ["trade receivables", "receivables", "debtors"],
            answer:
`Trade receivables are customers who owe the business money because they bought goods or services on credit.

Example:

A business sells goods worth R5 000 on credit.

The business records:
• Revenue
• Trade receivable

When the customer pays, the receivable decreases and cash or bank increases.`
        },

        {
            keywords: ["trade payables", "payables", "creditors"],
            answer:
`Trade payables are suppliers that the business owes money to because it bought goods or services on credit.

Example:

A business buys inventory worth R8 000 on credit.

The business records:
• Inventory or purchases
• Trade payable

When the supplier is paid, the payable decreases.`
        },

        {
            keywords: ["bank reconciliation", "bank reconciliation statement"],
            answer:
`A bank reconciliation compares the business's cash book with the bank statement.

Differences may occur because of:

• Outstanding deposits
• Outstanding cheques
• Bank charges
• Interest
• Direct deposits
• Debit orders
• Errors

The purpose is to identify and explain differences between the two records.`
        },

        {
            keywords: ["trial balance"],
            answer:
`A trial balance is a list of ledger account balances prepared to check whether total debits equal total credits.

If:

Total debits = R100 000
Total credits = R100 000

The trial balance balances.

However, a balanced trial balance does not prove that there are no accounting errors.`
        },

        {
            keywords: ["double entry", "double-entry", "debit and credit"],
            answer:
`Double-entry accounting means that every transaction affects at least two accounts.

For every transaction:

Total debits = Total credits

Basic rule:

Assets:
Debit increase
Credit decrease

Liabilities:
Credit increase
Debit decrease

Equity:
Credit increase
Debit decrease

Revenue:
Credit increase

Expenses:
Debit increase`
        },

        {
            keywords: ["vat", "value added tax"],
            answer:
`VAT is a consumption tax charged on taxable supplies.

A VAT-registered business may collect output VAT from customers and claim eligible input VAT on purchases.

VAT payable is generally:

Output VAT − Input VAT

If output VAT is greater, the business normally owes the difference to SARS.
If input VAT is greater, the business may have a VAT refund position, subject to the applicable rules.`
        },

        {
            keywords: ["ias 16", "property plant equipment", "ppe"],
            answer:
`IAS 16 deals with Property, Plant and Equipment.

PPE is recognised when:

• It is probable that future economic benefits will flow to the entity.
• The cost can be measured reliably.

Examples:
• Buildings
• Machinery
• Vehicles
• Equipment

After recognition, an entity may use the cost model or revaluation model, subject to the requirements of IAS 16.`
        },

        {
            keywords: ["ias 12", "income tax"],
            answer:
`IAS 12 deals with Income Taxes.

It covers:

• Current tax
• Deferred tax
• Temporary differences
• Deferred tax assets
• Deferred tax liabilities

Deferred tax generally arises from temporary differences between the carrying amount of an asset or liability and its tax base.`
        },

        {
            keywords: ["ias 21", "foreign currency", "exchange rate"],
            answer:
`IAS 21 deals with the effects of changes in foreign exchange rates.

It covers:

• Foreign currency transactions
• Functional currency
• Presentation currency
• Translation of foreign operations

A foreign currency transaction is initially recorded using the exchange rate at the transaction date, subject to the requirements of IAS 21.`
        },

        {
            keywords: ["ifrs 15", "revenue recognition"],
            answer:
`IFRS 15 deals with revenue from contracts with customers.

The standard uses a five-step model:

1. Identify the contract.
2. Identify the performance obligations.
3. Determine the transaction price.
4. Allocate the transaction price.
5. Recognise revenue when or as performance obligations are satisfied.`
        },

        {
            keywords: ["ifrs 9", "financial instruments", "fvtpl", "amortised cost"],
            answer:
`IFRS 9 deals with financial instruments.

Financial assets can be classified using criteria including:

• Amortised cost
• Fair value through other comprehensive income
• Fair value through profit or loss

Classification depends on factors such as the business model and contractual cash-flow characteristics.`
        },

        {
            keywords: ["ifrs 10", "subsidiary", "consolidation"],
            answer:
`IFRS 10 deals with consolidated financial statements and control.

An investor controls an investee when it has:

• Power over the investee
• Exposure, or rights, to variable returns
• The ability to use its power to affect those returns

A parent normally consolidates a subsidiary that it controls.`
        },

        {
            keywords: ["ias 28", "associate", "significant influence"],
            answer:
`IAS 28 deals with investments in associates and joint ventures.

Significant influence is the power to participate in financial and operating policy decisions without having control or joint control.

A holding of 20% or more of voting power is generally presumed to give significant influence unless clearly demonstrated otherwise.

The equity method is generally used for associates.`
        },

        {
            keywords: ["audit", "auditing", "auditor"],
            answer:
`Auditing is the independent examination of financial information to provide assurance.

An auditor considers:

• Audit risk
• Material misstatement
• Internal controls
• Audit evidence
• Assertions
• Materiality
• Professional judgement

The objective is to obtain reasonable assurance that the financial statements are free from material misstatement.`
        },

        {
            keywords: ["management accounting", "managerial accounting"],
            answer:
`Management accounting provides financial and non-financial information to managers for decision-making.

Common topics include:

• Cost classification
• Budgeting
• CVP analysis
• Break-even analysis
• Variance analysis
• Relevant costing
• Process costing
• Absorption costing
• Variable costing`
        },

        {
            keywords: ["break even", "break-even", "break even point"],
            answer:
`The break-even point is where total revenue equals total costs.

At break-even:

Profit = 0

Using units:

Break-even units =
Fixed costs ÷ Contribution per unit

Contribution per unit =
Selling price per unit − Variable cost per unit`
        }
    ];


    /* =========================================================
       ECONOMICS KNOWLEDGE
       ========================================================= */

    const economicsKnowledge = [

        {
            keywords: ["circular flow", "circular flow of income"],
            answer:
`The circular flow of income shows how money, goods, services and factors of production move between different sectors of an economy.

The main sectors are:

• Households
• Firms
• Government
• Foreign sector
• Financial sector

Households provide factors of production to firms and receive income such as wages, rent, interest and profit.`
        },

        {
            keywords: ["product market"],
            answer:
`The product market is where goods and services are bought and sold.

Households purchase goods and services from businesses.

Examples include:

• Food
• Clothing
• Cars
• Electricity
• Education services`
        },

        {
            keywords: ["durable goods", "semi durable", "non durable"],
            answer:
`Durable goods are goods that can be used for a long period.

Example:
Cars and refrigerators.

Semi-durable goods last for a shorter period.

Example:
Clothing and shoes.

Non-durable goods are normally consumed quickly.

Example:
Food and fuel.`
        },

        {
            keywords: ["factor market"],
            answer:
`The factor market is where factors of production are exchanged.

The main factors of production are:

• Land
• Labour
• Capital
• Entrepreneurship

Their rewards are generally:

Land → Rent
Labour → Wages
Capital → Interest
Entrepreneurship → Profit`
        },

        {
            keywords: ["money market"],
            answer:
`The money market deals mainly with short-term financial instruments.

It generally involves financial assets with short-term maturity.

Examples include:

• Treasury bills
• Negotiable certificates of deposit
• Commercial paper`
        },

        {
            keywords: ["financial market"],
            answer:
`A financial market is a market where financial assets are bought and sold.

It can include:

• Money markets
• Capital markets
• Foreign exchange markets

Financial markets help move funds between savers and borrowers.`
        },

        {
            keywords: ["capital market"],
            answer:
`The capital market deals mainly with longer-term finance.

Examples include:

• Shares
• Bonds
• Long-term securities

Businesses and governments can use capital markets to obtain long-term funding.`
        },

        {
            keywords: ["foreign exchange market", "forex market"],
            answer:
`The foreign exchange market is where currencies are bought and sold.

For example:

A South African company importing goods from the United States may need to exchange rand for US dollars.

The exchange rate determines how much of one currency is required to obtain another currency.`
        },

        {
            keywords: ["new economic paradigm"],
            answer:
`A new economic paradigm refers to changes in the way economic activity is organised because of developments such as technology, globalisation, digitalisation and changes in production.

Examples include:

• Digital businesses
• Automation
• E-commerce
• Artificial intelligence
• Remote work
• Global supply chains`
        },

        {
            keywords: ["demand side policy", "demand-side policy"],
            answer:
`Demand-side policies aim to influence aggregate demand in the economy.

Examples include:

• Fiscal policy
• Monetary policy

They can be used to influence economic activity, employment and inflation.`
        },

        {
            keywords: ["monetary policy"],
            answer:
`Monetary policy is the policy used by a central bank to influence monetary and financial conditions.

In South Africa, the South African Reserve Bank plays a major role in monetary policy.

Interest rates are an important monetary policy tool.`
        },

        {
            keywords: ["fiscal policy"],
            answer:
`Fiscal policy involves government decisions about taxation and government spending.

Expansionary fiscal policy may involve:

• Higher government spending
• Lower taxes

Contractionary fiscal policy may involve:

• Lower government spending
• Higher taxes

The effect depends on the economic circumstances and policy design.`
        },

        {
            keywords: ["supply side policy", "supply-side policy"],
            answer:
`Supply-side policies aim to improve the productive capacity and efficiency of an economy.

Examples include:

• Education and skills development
• Infrastructure investment
• Labour-market reforms
• Improving competition
• Supporting productivity`
        },

        {
            keywords: ["economic indicators"],
            answer:
`Economic indicators are statistics used to understand the condition and direction of an economy.

Examples include:

• GDP
• Inflation
• Unemployment
• Interest rates
• Retail sales
• Business confidence`
        },

        {
            keywords: ["leading indicators"],
            answer:
`Leading indicators tend to change before the overall economy changes.

They may provide information about the possible future direction of economic activity.

Examples can include certain business confidence and financial market indicators.`
        },

        {
            keywords: ["lagging indicators"],
            answer:
`Lagging indicators tend to change after economic activity has already changed.

They are useful for confirming economic trends.

Unemployment can sometimes behave as a lagging indicator because employment conditions may respond after changes in economic activity.`
        },

        {
            keywords: ["coincident indicators"],
            answer:
`Coincident indicators move broadly at the same time as overall economic activity.

They help describe the current condition of the economy.`
        },

        {
            keywords: ["composite indicators"],
            answer:
`A composite indicator combines several individual indicators into one measure.

The purpose is to provide a broader picture of economic conditions than relying on one indicator alone.`
        },

        {
            keywords: ["business cycle"],
            answer:
`A business cycle describes fluctuations in economic activity over time.

Common phases include:

• Expansion
• Peak
• Contraction
• Trough

Different textbooks may describe the phases using slightly different terminology.`
        },

        {
            keywords: ["length of business cycle"],
            answer:
`The length of a business cycle is the period from one point in the cycle to the corresponding point in the next cycle.

For example, it can be measured from one peak to the next peak.`
        },

        {
            keywords: ["amplitude"],
            answer:
`Amplitude measures the size or strength of fluctuations in economic activity around a trend.

A larger amplitude means a larger deviation from the trend.`
        },

        {
            keywords: ["trend line"],
            answer:
`A trend line shows the general direction of a data series over time.

It helps identify whether a variable is generally increasing, decreasing or remaining relatively stable.`
        },

        {
            keywords: ["extrapolation"],
            answer:
`Extrapolation uses an existing pattern or trend to estimate values beyond the observed data.

For example, if sales have consistently increased, a trend may be extended to estimate future sales.

However, extrapolation can be inaccurate if economic conditions change.`
        },

        {
            keywords: ["moving average"],
            answer:
`A moving average smooths a time series by calculating averages over a moving group of observations.

It helps reduce short-term fluctuations and makes the underlying trend easier to identify.`
        }
    ];


    /* =========================================================
       MATHEMATICS KNOWLEDGE
       ========================================================= */

    const mathematicsKnowledge = [

        {
            keywords: ["basic algebra", "algebra"],
            answer:
`Algebra uses letters and symbols to represent unknown values.

Example:

x + 5 = 12

Subtract 5 from both sides:

x = 7.`
        },

        {
            keywords: ["linear equation", "linear equations"],
            answer:
`A linear equation normally has the variable raised to the power of 1.

Example:

2x + 4 = 10

2x = 6

x = 3.`
        },

        {
            keywords: ["quadratic equation", "quadratic equations"],
            answer:
`A quadratic equation normally has the form:

ax² + bx + c = 0

The quadratic formula is:

x = (-b ± √(b² − 4ac)) ÷ 2a

There can be two, one or no real solutions depending on the discriminant.`
        },

        {
            keywords: ["percentage", "percentages"],
            answer:
`To calculate a percentage:

Percentage = (Part ÷ Whole) × 100

Example:

20 out of 50:

(20 ÷ 50) × 100 = 40%

Therefore, 20 is 40% of 50.`
        },

        {
            keywords: ["simple interest"],
            answer:
`Simple interest is calculated using:

I = P × r × t

Where:

I = interest
P = principal
r = interest rate
t = time

If P = R10 000, r = 10% and t = 2 years:

I = 10 000 × 0.10 × 2
I = R2 000.`
        },

        {
            keywords: ["compound interest"],
            answer:
`Compound interest means that interest is added to the amount, and future interest is calculated on the increased amount.

Formula:

A = P(1 + i)^n

Where:

A = final amount
P = principal
i = interest rate per period
n = number of periods.`
        },

        {
            keywords: ["mean", "average"],
            answer:
`The mean is calculated by adding all values and dividing by the number of values.

Example:

4, 6, 8

Mean = (4 + 6 + 8) ÷ 3
Mean = 18 ÷ 3
Mean = 6.`
        },

        {
            keywords: ["median"],
            answer:
`The median is the middle value when numbers are arranged from smallest to largest.

Example:

2, 4, 7, 9, 10

Median = 7.

If there is an even number of values, take the average of the two middle values.`
        },

        {
            keywords: ["mode"],
            answer:
`The mode is the value that occurs most frequently.

Example:

2, 3, 3, 4, 5

Mode = 3.`
        },

        {
            keywords: ["probability"],
            answer:
`Probability measures how likely an event is to happen.

Basic formula:

P(Event) =
Number of favourable outcomes ÷ Total number of possible outcomes

Probability ranges from 0 to 1.

0 means impossible.
1 means certain.`
        },

        {
            keywords: ["ratio"],
            answer:
`A ratio compares quantities.

Example:

If there are 2 boys and 3 girls:

Boys : Girls = 2 : 3

Ratios can be simplified when both values have a common factor.`
        },

        {
            keywords: ["exponents", "indices", "index laws"],
            answer:
`An exponent shows how many times a number is multiplied by itself.

Example:

2³ = 2 × 2 × 2 = 8

Important laws:

aᵐ × aⁿ = aᵐ⁺ⁿ

aᵐ ÷ aⁿ = aᵐ⁻ⁿ

(aᵐ)ⁿ = aᵐⁿ`
        },

        {
            keywords: ["functions"],
            answer:
`A function relates an input to an output.

Example:

f(x) = 2x + 3

If x = 4:

f(4) = 2(4) + 3
f(4) = 11.`
        },

        {
            keywords: ["statistics"],
            answer:
`Statistics involves collecting, organising, analysing and interpreting data.

Common statistical concepts include:

• Mean
• Median
• Mode
• Range
• Variance
• Standard deviation
• Probability
• Data representation`
        },

        {
            keywords: ["gradient", "slope"],
            answer:
`The gradient measures the steepness of a straight line.

Formula:

Gradient = (y₂ − y₁) ÷ (x₂ − x₁)

A positive gradient means the line rises from left to right.

A negative gradient means the line falls from left to right.`
        },

        {
            keywords: ["calculus", "derivative", "derivatives"],
            answer:
`A derivative measures the rate at which one quantity changes with respect to another.

For example:

If:

y = x²

Then:

dy/dx = 2x.`
        },

        {
            keywords: ["integral", "integration"],
            answer:
`Integration is commonly used to find accumulated quantities and areas under curves.

For example:

∫ x² dx = x³/3 + C

where C is the constant of integration.`
        },

        {
            keywords: ["trigonometry", "sin", "cos", "tan"],
            answer:
`Basic trigonometric ratios in a right-angled triangle are:

sin θ = Opposite ÷ Hypotenuse

cos θ = Adjacent ÷ Hypotenuse

tan θ = Opposite ÷ Adjacent

A common memory aid is:

SOH CAH TOA.`
        },

        {
            keywords: ["geometry"],
            answer:
`Geometry deals with shapes, sizes, angles and measurements.

Common formulas include:

Rectangle area = length × width

Triangle area = ½ × base × height

Circle area = πr²

Circle circumference = 2πr.`
        }
    ];


    /* =========================================================
       SUBJECT KEYWORDS
       ========================================================= */

    const subjectKeywords = {

        Accounting: [
            "accounting",
            "financial accounting",
            "management accounting",
            "managerial accounting",
            "audit",
            "auditing",
            "tax",
            "vat",
            "ifrs",
            "ias",
            "asset",
            "assets",
            "liability",
            "liabilities",
            "equity",
            "revenue",
            "expense",
            "expenses",
            "inventory",
            "depreciation",
            "trial balance",
            "debit",
            "credit",
            "journal",
            "ledger",
            "balance sheet",
            "cash flow",
            "associate",
            "subsidiary",
            "consolidation",
            "goodwill",
            "financial instrument",
            "financial instruments"
        ],

        Economics: [
            "economics",
            "economy",
            "economic",
            "demand",
            "supply",
            "inflation",
            "unemployment",
            "gdp",
            "aggregate demand",
            "aggregate supply",
            "fiscal",
            "monetary",
            "sarb",
            "interest rate",
            "business cycle",
            "circular flow",
            "factor market",
            "product market",
            "money market",
            "capital market",
            "foreign exchange market",
            "exchange rate",
            "leading indicator",
            "lagging indicator",
            "coincident indicator",
            "composite indicator",
            "extrapolation",
            "trend line",
            "amplitude"
        ],

        Mathematics: [
            "math",
            "mathematics",
            "algebra",
            "equation",
            "quadratic",
            "linear",
            "gradient",
            "percentage",
            "probability",
            "statistics",
            "mean",
            "median",
            "mode",
            "ratio",
            "interest",
            "compound interest",
            "simple interest",
            "function",
            "calculus",
            "derivative",
            "integral",
            "exponent",
            "indices",
            "geometry",
            "trigonometry"
        ]
    };


    /* =========================================================
       SUBJECT DETECTION
       ========================================================= */

    function detectSubject(question) {

        const text = question.toLowerCase();

        const scores = {
            Accounting: 0,
            Economics: 0,
            Mathematics: 0
        };

        for (const subject in subjectKeywords) {

            subjectKeywords[subject].forEach(keyword => {

                if (text.includes(keyword.toLowerCase())) {
                    scores[subject]++;
                }

            });
        }

        const sorted = Object.entries(scores)
            .sort((a, b) => b[1] - a[1]);

        if (sorted[0][1] === 0) {
            return null;
        }

        if (
            sorted.length > 1 &&
            sorted[0][1] === sorted[1][1]
        ) {
            return null;
        }

        return sorted[0][0];
    }


    /* =========================================================
       LOCAL KNOWLEDGE SEARCH
       ========================================================= */

    function searchKnowledge(question, knowledgeBase) {

        const text = question.toLowerCase();

        let bestMatch = null;
        let highestScore = 0;

        knowledgeBase.forEach(item => {

            let score = 0;

            item.keywords.forEach(keyword => {

                if (text.includes(keyword.toLowerCase())) {
                    score++;
                }

            });

            if (score > highestScore) {
                highestScore = score;
                bestMatch = item;
            }

        });

        return highestScore > 0 ? bestMatch : null;
    }


    /* =========================================================
       GREETINGS
       ========================================================= */

    function isGreeting(question) {

        const greetings = [
            "hi",
            "hello",
            "hey",
            "good morning",
            "good afternoon",
            "good evening",
            "how are you",
            "how are u"
        ];

        const text = question
            .toLowerCase()
            .trim();

        return greetings.includes(text);
    }


    function greetingAnswer() {

        return `Hello. I am Mastercommerce.

I can help you learn Accounting, Economics and Mathematics.

Ask me a question and I will explain it step by step in simple language.`;
    }


    /* =========================================================
       DEVELOPER QUESTIONS
       ========================================================= */

    function isDeveloperQuestion(question) {

        const text = question.toLowerCase();

        return (
            text.includes("who created you") ||
            text.includes("who made you") ||
            text.includes("who developed you") ||
            text.includes("who is your developer") ||
            text.includes("who built you") ||
            text.includes("who owns you") ||
            text.includes("who is phungo") ||
            text.includes("who is dembe")
        );
    }


    function developerAnswer() {

        return `I am Mastercommerce, an educational learning platform developed by ${developerInformation.developer}.

Founder: ${developerInformation.founder}
Location: ${developerInformation.location}
Education: ${developerInformation.education}
Version: ${developerInformation.version}`;
    }


    /* =========================================================
       MESSAGE CREATION
       ========================================================= */

    function createMessage(text, sender = "assistant") {

        const message = document.createElement("div");

        message.className = `message ${sender}`;

        const messageContent = document.createElement("div");

        messageContent.className = "message-content";

        messageContent.textContent = text;

        message.appendChild(messageContent);

        chatMessages.appendChild(message);

        chatMessages.scrollTop = chatMessages.scrollHeight;

        return message;
    }


    /* =========================================================
       THINKING MESSAGE
       ========================================================= */

    function createThinkingMessage() {

        const message = document.createElement("div");

        message.className = "message assistant thinking-message";

        const content = document.createElement("div");

        content.className = "message-content";

        content.textContent = "Thinking...";

        message.appendChild(content);

        chatMessages.appendChild(message);

        chatMessages.scrollTop = chatMessages.scrollHeight;

        return message;
    }


    /* =========================================================
       OPENAI RESPONSE TEXT EXTRACTION
       ========================================================= */

    function extractResponseText(data) {

        if (
            data &&
            typeof data.output_text === "string" &&
            data.output_text.trim()
        ) {
            return data.output_text.trim();
        }

        if (!data || !Array.isArray(data.output)) {
            return "";
        }

        const text = data.output
            .flatMap(item => Array.isArray(item.content) ? item.content : [])
            .filter(content => content.type === "output_text")
            .map(content => content.text || "")
            .join("\n")
            .trim();

        return text;
    }


    /* =========================================================
       OPENAI BRAIN
       ========================================================= */
async function askOpenAI(question, instructions) {
    try {
        const response = await fetch("https://YOUR-VERCEL-APP.vercel.app/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question: question,
                instructions: instructions
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data?.error || "AI request failed");
        }

        return extractResponseText(data);

    } catch (error) {
        console.error("OpenAI connection error:", error);

        throw new Error(
            error.message || "Could not connect to Mastercommerce AI."
        );
    }
}



    /* =========================================================
       ANSWER QUESTION
       ========================================================= */

    async function answerQuestion(question) {

        const cleanQuestion = question.trim();

        if (!cleanQuestion) {
            return;
        }

        createMessage(cleanQuestion, "user");

        questionInput.value = "";

        questionInput.style.height = "auto";

        if (isGreeting(cleanQuestion)) {

            createMessage(
                greetingAnswer(),
                "assistant"
            );

            return;
        }

        if (isDeveloperQuestion(cleanQuestion)) {

            createMessage(
                developerAnswer(),
                "assistant"
            );

            return;
        }

        const subject = detectSubject(cleanQuestion);

        let localKnowledge = null;

        if (subject === "Accounting") {
            localKnowledge =
                searchKnowledge(
                    cleanQuestion,
                    accountingKnowledge
                );
        }

        if (subject === "Economics") {
            localKnowledge =
                searchKnowledge(
                    cleanQuestion,
                    economicsKnowledge
                );
        }

        if (subject === "Mathematics") {
            localKnowledge =
                searchKnowledge(
                    cleanQuestion,
                    mathematicsKnowledge
                );
        }


        /*
         * If Mastercommerce already knows the answer locally,
         * use the built-in knowledge first.
         */

        if (localKnowledge) {

            setTimeout(() => {

                createMessage(
                    localKnowledge.answer,
                    "assistant"
                );

            }, 250);

            return;
        }


        /*
         * If there is no local answer, use OpenAI.
         */

        const thinkingMessage =
            createThinkingMessage();


        try {

            const aiAnswer =
                await askOpenAI(
                    cleanQuestion,
                    subject
                );

            thinkingMessage.remove();

            createMessage(
                aiAnswer,
                "assistant"
            );

        } catch (error) {

            console.error(
                "Mastercommerce OpenAI error:",
                error
            );

            thinkingMessage.remove();

            createMessage(
`I could not connect to my AI brain.

Please check your OpenAI API key and internet connection.

Technical message:
${error.message}`,
                "assistant"
            );
        }
    }


    /* =========================================================
       SEND MESSAGE
       ========================================================= */

    async function sendQuestion() {

        const question =
            questionInput.value.trim();

        if (!question) {
            return;
        }

        sendButton.disabled = true;

        try {

            await answerQuestion(question);

        } finally {

            sendButton.disabled = false;

            questionInput.focus();
        }
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


    /* =========================================================
       TEXTAREA RESIZE
       ========================================================= */

    questionInput.addEventListener(
        "input",
        () => {

            questionInput.style.height = "auto";

            questionInput.style.height =
                Math.min(
                    questionInput.scrollHeight,
                    180
                ) + "px";
        }
    );


    /* =========================================================
       NEW CHAT
       ========================================================= */

    if (newChatButton) {

        newChatButton.addEventListener(
            "click",
            () => {

                chatMessages.innerHTML = "";

                questionInput.value = "";

                questionInput.style.height = "auto";

                questionInput.focus();

                closeSidebar();
            }
        );
    }


    /* =========================================================
       MOBILE SIDEBAR
       ========================================================= */

    function openSidebar() {

        if (!sidebar) return;

        sidebar.classList.add("open");

        if (sidebarOverlay) {
            sidebarOverlay.classList.add("active");
        }

        document.body.classList.add("sidebar-open");
    }


    function closeSidebar() {

        if (!sidebar) return;

        sidebar.classList.remove("open");

        if (sidebarOverlay) {
            sidebarOverlay.classList.remove("active");
        }

        document.body.classList.remove("sidebar-open");
    }


    if (hamburgerButton) {

        hamburgerButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                if (
                    sidebar &&
                    sidebar.classList.contains("open")
                ) {
                    closeSidebar();
                } else {
                    openSidebar();
                }
            }
        );
    }


    if (sidebarOverlay) {

        sidebarOverlay.addEventListener(
            "click",
            closeSidebar
        );
    }


    /* =========================================================
       PLUS BUTTON
       ========================================================= */

    function closePlusMenu() {

        if (!plusMenu) return;

        plusMenu.classList.remove("show");

        plusMenu.setAttribute(
            "aria-hidden",
            "true"
        );

        if (plusButton) {

            plusButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    }


    function openPlusMenu() {

        if (!plusMenu) return;

        plusMenu.classList.add("show");

        plusMenu.setAttribute(
            "aria-hidden",
            "false"
        );

        if (plusButton) {

            plusButton.setAttribute(
                "aria-expanded",
                "true"
            );
        }
    }


    if (plusButton) {

        plusButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                if (
                    plusMenu &&
                    plusMenu.classList.contains("show")
                ) {
                    closePlusMenu();
                } else {
                    openPlusMenu();
                }
            }
        );
    }


    /* =========================================================
       UNDER DEVELOPMENT FEATURES
       ========================================================= */

    function showFeatureToast(feature) {

        if (!featureToast) return;

        featureToast.textContent =
            `${feature} is currently under development.`;

        featureToast.classList.add("show");

        setTimeout(() => {

            featureToast.classList.remove("show");

        }, 2500);
    }


    if (plusMenu) {

        const plusOptions =
            plusMenu.querySelectorAll(
                ".plus-option"
            );

        plusOptions.forEach(option => {

            option.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    const feature =
                        option.dataset.feature ||
                        option.textContent.trim();

                    showFeatureToast(feature);

                    closePlusMenu();
                }
            );
        });
    }


    /* =========================================================
       OUTSIDE CLICK
       ========================================================= */

    document.addEventListener(
        "click",
        event => {

            if (
                plusMenu &&
                plusButton &&
                !plusMenu.contains(event.target) &&
                !plusButton.contains(event.target)
            ) {
                closePlusMenu();
            }

            if (
                sidebar &&
                hamburgerButton &&
                sidebar.classList.contains("open") &&
                !sidebar.contains(event.target) &&
                !hamburgerButton.contains(event.target)
            ) {
                closeSidebar();
            }

        }
    );


    /* =========================================================
       NAVIGATION
       ========================================================= */

    const homeButton =
        document.getElementById("homeButton");

    const aboutButton =
        document.getElementById("aboutButton");

    const settingsButton =
        document.getElementById("settingsButton");


    if (homeButton) {

        homeButton.addEventListener(
            "click",
            () => {

                closeSidebar();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        );
    }


    /* =========================================================
       ABOUT
       ========================================================= */

    function showAbout() {

        const existing =
            document.getElementById(
                "mastercommerceAbout"
            );

        if (existing) {
            existing.remove();
            return;
        }

        const overlay =
            document.createElement("div");

        overlay.id =
            "mastercommerceAbout";

        overlay.className =
            "mastercommerce-modal-overlay";

        overlay.innerHTML = `
            <div class="mastercommerce-modal">

                <button
                    class="modal-close"
                    type="button"
                    aria-label="Close"
                >
                    ×
                </button>

                <div class="modal-logo">M</div>

                <h2>Mastercommerce</h2>

                <p>
                    An educational platform for
                    Accounting, Economics and Mathematics.
                </p>

                <div class="developer-details">

                    <p>
                        <strong>Developer</strong><br>
                        ${developerInformation.developer}
                    </p>

                    <p>
                        <strong>Founder</strong><br>
                        ${developerInformation.founder}
                    </p>

                    <p>
                        <strong>Location</strong><br>
                        ${developerInformation.location}
                    </p>

                    <p>
                        <strong>Education</strong><br>
                        ${developerInformation.education}
                    </p>

                    <p>
                        <strong>Version</strong><br>
                        ${developerInformation.version}
                    </p>

                </div>

            </div>
        `;

        document.body.appendChild(overlay);

        const closeButton =
            overlay.querySelector(
                ".modal-close"
            );

        closeButton.addEventListener(
            "click",
            () => overlay.remove()
        );

        overlay.addEventListener(
            "click",
            event => {

                if (
                    event.target === overlay
                ) {
                    overlay.remove();
                }

            }
        );
    }


    if (aboutButton) {

        aboutButton.addEventListener(
            "click",
            () => {

                closeSidebar();

                showAbout();
            }
        );
    }


    /* =========================================================
       SETTINGS
       ========================================================= */

    function applyTheme(theme) {

        document.body.classList.remove(
            "theme-dark",
            "theme-light"
        );

        if (theme === "dark") {

            document.body.classList.add(
                "theme-dark"
            );

        } else {

            document.body.classList.add(
                "theme-light"
            );
        }

        localStorage.setItem(
            "mastercommerce-theme",
            theme
        );
    }


    function applyBackground(background) {

        document.body.classList.remove(
            "bg-white",
            "bg-soft-gray",
            "bg-warm",
            "bg-blue",
            "bg-green",
            "bg-lavender"
        );

        document.body.classList.add(
            `bg-${background}`
        );

        localStorage.setItem(
            "mastercommerce-background",
            background
        );
    }


    function applyFontSize(size) {

        document.body.classList.remove(
            "font-small",
            "font-medium",
            "font-large"
        );

        document.body.classList.add(
            `font-${size}`
        );

        localStorage.setItem(
            "mastercommerce-font",
            size
        );
    }


    function applyMotion(motion) {

        document.body.classList.toggle(
            "reduced-motion",
            motion === "reduced"
        );

        localStorage.setItem(
            "mastercommerce-motion",
            motion
        );
    }


    function showSettings() {

        const existing =
            document.getElementById(
                "mastercommerceSettings"
            );

        if (existing) {
            existing.remove();
            return;
        }

        const currentTheme =
            localStorage.getItem(
                "mastercommerce-theme"
            ) || "light";

        const currentBackground =
            localStorage.getItem(
                "mastercommerce-background"
            ) || "white";

        const currentFont =
            localStorage.getItem(
                "mastercommerce-font"
            ) || "medium";

        const currentMotion =
            localStorage.getItem(
                "mastercommerce-motion"
            ) || "normal";


        const overlay =
            document.createElement("div");

        overlay.id =
            "mastercommerceSettings";

        overlay.className =
            "mastercommerce-modal-overlay";


        overlay.innerHTML = `
            <div class="mastercommerce-modal settings-modal">

                <button
                    class="modal-close"
                    type="button"
                    aria-label="Close"
                >
                    ×
                </button>

                <div class="modal-logo">M</div>

                <h2>Settings</h2>

                <div class="settings-group">

                    <h3>Appearance</h3>

                    <label class="settings-row">
                        <span>Dark mode</span>

                        <input
                            type="checkbox"
                            id="darkModeToggle"
                            ${currentTheme === "dark" ? "checked" : ""}
                        >
                    </label>

                </div>


                <div class="settings-group">

                    <h3>Background</h3>

                    <select id="backgroundSelect">

                        <option value="white">
                            White
                        </option>

                        <option value="soft-gray">
                            Soft Gray
                        </option>

                        <option value="warm">
                            Warm
                        </option>

                        <option value="blue">
                            Soft Blue
                        </option>

                        <option value="green">
                            Soft Green
                        </option>

                        <option value="lavender">
                            Soft Lavender
                        </option>

                    </select>

                </div>


                <div class="settings-group">

                    <h3>Font size</h3>

                    <select id="fontSizeSelect">

                        <option value="small">
                            Small
                        </option>

                        <option value="medium">
                            Medium
                        </option>

                        <option value="large">
                            Large
                        </option>

                    </select>

                </div>


                <div class="settings-group">

                    <h3>Animations</h3>

                    <label class="settings-row">

                        <span>
                            Reduce animations
                        </span>

                        <input
                            type="checkbox"
                            id="motionToggle"
                            ${currentMotion === "reduced" ? "checked" : ""}
                        >

                    </label>

                </div>


                <div class="settings-group">

                    <h3>Chat</h3>

                    <button
                        type="button"
                        id="clearChatSetting"
                        class="settings-button"
                    >
                        Clear chat
                    </button>

                </div>


                <div class="settings-group">

                    <button
                        type="button"
                        id="resetSettings"
                        class="settings-button"
                    >
                        Reset settings
                    </button>

                </div>

            </div>
        `;


        document.body.appendChild(overlay);


        const closeButton =
            overlay.querySelector(
                ".modal-close"
            );

        closeButton.addEventListener(
            "click",
            () => overlay.remove()
        );


        overlay.addEventListener(
            "click",
            event => {

                if (
                    event.target === overlay
                ) {
                    overlay.remove();
                }

            }
        );


        const darkModeToggle =
            document.getElementById(
                "darkModeToggle"
            );

        darkModeToggle.addEventListener(
            "change",
            () => {

                applyTheme(
                    darkModeToggle.checked
                        ? "dark"
                        : "light"
                );

            }
        );


        const backgroundSelect =
            document.getElementById(
                "backgroundSelect"
            );

        backgroundSelect.value =
            currentBackground;

        backgroundSelect.addEventListener(
            "change",
            () => {

                applyBackground(
                    backgroundSelect.value
                );

            }
        );


        const fontSizeSelect =
            document.getElementById(
                "fontSizeSelect"
            );

        fontSizeSelect.value =
            currentFont;

        fontSizeSelect.addEventListener(
            "change",
            () => {

                applyFontSize(
                    fontSizeSelect.value
                );

            }
        );


        const motionToggle =
            document.getElementById(
                "motionToggle"
            );

        motionToggle.addEventListener(
            "change",
            () => {

                applyMotion(
                    motionToggle.checked
                        ? "reduced"
                        : "normal"
                );

            }
        );


        const clearChatSetting =
            document.getElementById(
                "clearChatSetting"
            );

        clearChatSetting.addEventListener(
            "click",
            () => {

                chatMessages.innerHTML = "";

                overlay.remove();

                questionInput.focus();
            }
        );


        const resetSettings =
            document.getElementById(
                "resetSettings"
            );

        resetSettings.addEventListener(
            "click",
            () => {

                localStorage.removeItem(
                    "mastercommerce-theme"
                );

                localStorage.removeItem(
                    "mastercommerce-font"
                );

                localStorage.removeItem(
                    "mastercommerce-background"
                );

                localStorage.removeItem(
                    "mastercommerce-motion"
                );

                applyTheme("light");

                applyBackground("white");

                applyFontSize("medium");

                applyMotion("normal");

                overlay.remove();

                showSettings();
            }
        );
    }


    if (settingsButton) {

        settingsButton.addEventListener(
            "click",
            () => {

                closeSidebar();

                showSettings();
            }
        );
    }


    /* =========================================================
       LOAD SAVED SETTINGS
       ========================================================= */

    const savedTheme =
        localStorage.getItem(
            "mastercommerce-theme"
        ) || "light";

    const savedBackground =
        localStorage.getItem(
            "mastercommerce-background"
        ) || "white";

    const savedFont =
        localStorage.getItem(
            "mastercommerce-font"
        ) || "medium";

    const savedMotion =
        localStorage.getItem(
            "mastercommerce-motion"
        ) || "normal";


    applyTheme(savedTheme);

    applyBackground(savedBackground);

    applyFontSize(savedFont);

    applyMotion(savedMotion);


    /* =========================================================
       INITIAL FOCUS
       ========================================================= */

    questionInput.focus();

});
