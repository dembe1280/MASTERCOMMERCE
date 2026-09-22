document.addEventListener("DOMContentLoaded", () => {

    /*
    ============================================================
    MASTERCOMMERCE
    Safe initialization
    ============================================================
    */

    if (window.mastercommerceLoaded) return;
    window.mastercommerceLoaded = true;

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

    /*
    ============================================================
    DEVELOPER INFORMATION
    ============================================================
    */

    const developerInformation = {
        product: "Mastercommerce",
        developer: "PD | Web & App Development",
        founder: "Phungo Dembe Vusani",
        location: "Limpopo, South Africa",
        education: "BCom in Accounting — University of Venda",
        version: "v1.0.0"
    };

    /*
    ============================================================
    ACCOUNTING KNOWLEDGE
    ============================================================
    */

    const accountingKnowledge = [

        {
            title: "Accounting equation",
            keywords: ["accounting equation", "assets liabilities equity"],
            answer:
`The basic accounting equation is:

Assets = Equity + Liabilities

Assets are resources owned by the business.
Liabilities are amounts owed to other parties.
Equity is the owner's interest in the business.

Example:
If a business has assets of R100 000 and liabilities of R40 000:

Equity = R100 000 − R40 000
Equity = R60 000.`
        },

        {
            title: "Assets",
            keywords: ["assets", "current assets", "non current assets"],
            answer:
`Assets are resources controlled by a business because of past events and from which future economic benefits are expected.

Examples include:
• Cash
• Inventory
• Trade receivables
• Equipment
• Vehicles
• Buildings

Current assets are normally expected to be realised or used within the normal operating cycle or within 12 months.

Non-current assets are held for longer-term use.`
        },

        {
            title: "Liabilities",
            keywords: ["liabilities", "current liabilities", "non current liabilities"],
            answer:
`Liabilities are present obligations of a business arising from past events.

Examples:
• Trade payables
• Bank loans
• Accrued expenses
• Tax payable

Current liabilities are normally settled within the operating cycle or within 12 months.

Non-current liabilities are normally settled over a longer period.`
        },

        {
            title: "Revenue",
            keywords: ["revenue", "income", "sales revenue"],
            answer:
`Revenue is income arising from the ordinary activities of a business.

Examples:
• Sales of goods
• Service income
• Professional fees

Revenue is recognised when the relevant recognition requirements have been satisfied.`
        },

        {
            title: "Expenses",
            keywords: ["expenses", "expense", "cost"],
            answer:
`Expenses are decreases in economic benefits during an accounting period.

Examples include:
• Rent
• Salaries
• Insurance
• Electricity
• Depreciation
• Advertising

Expenses reduce profit and therefore reduce equity.`
        },

        {
            title: "Profit",
            keywords: ["profit", "net profit", "gross profit"],
            answer:
`Profit is generally calculated as:

Profit = Revenue − Expenses

Gross profit is:

Gross profit = Sales − Cost of sales

Net profit is calculated after taking other operating and non-operating income and expenses into account.`
        },

        {
            title: "Depreciation",
            keywords: ["depreciation", "straight line depreciation", "reducing balance"],
            answer:
`Depreciation is the systematic allocation of the depreciable amount of an asset over its useful life.

Straight-line depreciation:

Depreciation per year =
(Cost − Residual value) ÷ Useful life

Example:
Cost = R100 000
Residual value = R10 000
Useful life = 5 years

Annual depreciation:
(R100 000 − R10 000) ÷ 5
= R18 000 per year.`
        },

        {
            title: "Inventory",
            keywords: ["inventory", "stock", "cost of sales", "closing inventory"],
            answer:
`Inventory consists of assets held:
• For sale in the ordinary course of business;
• In the process of production for such sale; or
• As materials or supplies to be consumed in production.

A common formula is:

Opening inventory + Purchases − Closing inventory = Cost of sales.`
        },

        {
            title: "Trade receivables",
            keywords: ["trade receivables", "debtors", "receivables"],
            answer:
`Trade receivables are customers who owe the business money because they bought goods or services on credit.

The business records a receivable when it has a right to receive payment.

An allowance for expected credit losses may be recognised when customers may not pay the full amount.`
        },

        {
            title: "Trade payables",
            keywords: ["trade payables", "creditors", "payables"],
            answer:
`Trade payables are amounts owed by a business to suppliers for goods or services purchased on credit.

They are normally classified as current liabilities when they are expected to be settled within the normal operating cycle.`
        },

        {
            title: "Bank reconciliation",
            keywords: ["bank reconciliation", "bank statement", "cash book"],
            answer:
`A bank reconciliation compares the balance in the business's accounting records with the balance shown by the bank statement.

Differences may arise from:
• Outstanding deposits
• Outstanding cheques
• Bank charges
• Direct deposits
• Debit orders
• Errors

The purpose is to identify and explain differences between the two balances.`
        },

        {
            title: "Trial balance",
            keywords: ["trial balance", "debit", "credit"],
            answer:
`A trial balance is a list of ledger account balances at a particular date.

The total debit balances should equal the total credit balances.

However, a balanced trial balance does not prove that there are no accounting errors.`
        },

        {
            title: "Double entry",
            keywords: ["double entry", "debit and credit", "debits credits"],
            answer:
`Double-entry accounting means that every transaction affects at least two accounts.

The total debits must equal the total credits.

Basic rule:

Assets and expenses normally increase with debits.

Liabilities, equity and income normally increase with credits.`
        },

        {
            title: "VAT",
            keywords: ["vat", "value added tax", "output vat", "input vat"],
            answer:
`VAT is a consumption tax charged on taxable supplies.

Output VAT is VAT charged by a registered vendor on taxable sales.

Input VAT is VAT paid by the business on qualifying purchases.

VAT payable is generally:

Output VAT − Input VAT.`
        },

        {
            title: "IAS 16",
            keywords: ["ias 16", "property plant equipment", "ppe"],
            answer:
`IAS 16 deals with Property, Plant and Equipment.

An item of PPE is recognised when:
• It is probable that future economic benefits will flow to the entity; and
• Its cost can be measured reliably.

After recognition, an entity may use the cost model or revaluation model, subject to the requirements of IAS 16.`
        },

        {
            title: "IAS 12",
            keywords: ["ias 12", "income tax", "deferred tax"],
            answer:
`IAS 12 deals with income taxes.

Deferred tax generally arises from temporary differences between the carrying amount of an asset or liability and its tax base.

Deferred tax assets and liabilities are recognised subject to the requirements of IAS 12.`
        },

        {
            title: "IAS 21",
            keywords: ["ias 21", "foreign currency", "exchange rate"],
            answer:
`IAS 21 deals with the effects of changes in foreign exchange rates.

A foreign currency transaction is initially recognised using the spot exchange rate at the transaction date.

Monetary items denominated in foreign currencies are generally translated at the closing rate at the reporting date.`
        },

        {
            title: "IFRS 15",
            keywords: ["ifrs 15", "revenue recognition", "five steps"],
            answer:
`IFRS 15 provides a framework for recognising revenue from contracts with customers.

The five-step model is:

1. Identify the contract with a customer.
2. Identify the performance obligations.
3. Determine the transaction price.
4. Allocate the transaction price to the performance obligations.
5. Recognise revenue when or as a performance obligation is satisfied.`
        },

        {
            title: "IFRS 9",
            keywords: ["ifrs 9", "financial instruments", "amortised cost", "fvtpl", "fvoci"],
            answer:
`IFRS 9 deals with financial instruments.

Financial assets may be classified using criteria based on the business model and contractual cash-flow characteristics.

Common measurement categories include:
• Amortised cost
• Fair value through other comprehensive income
• Fair value through profit or loss.`
        },

        {
            title: "IFRS 10",
            keywords: ["ifrs 10", "consolidation", "subsidiary", "control"],
            answer:
`IFRS 10 deals with consolidated financial statements.

An investor controls an investee when it has:
• Power over the investee;
• Exposure, or rights, to variable returns; and
• The ability to use its power to affect those returns.

A parent generally consolidates its subsidiaries.`
        },

        {
            title: "IAS 28",
            keywords: ["ias 28", "associate", "significant influence", "equity method"],
            answer:
`IAS 28 deals with investments in associates and joint ventures.

Significant influence is the power to participate in financial and operating policy decisions without having control.

20% or more of the voting power is normally presumed to give significant influence, unless clearly demonstrated otherwise.

Evidence can include:
• Representation on the board;
• Participation in policy-making;
• Material transactions;
• Interchange of management personnel;
• Provision of essential technical information.

Associates are generally accounted for using the equity method.`
        },

        {
            title: "Auditing",
            keywords: ["audit", "auditing", "audit evidence", "audit risk"],
            answer:
`Auditing involves obtaining and evaluating evidence about information to determine whether it conforms to established criteria.

Audit evidence may include:
• Inspection
• Observation
• External confirmation
• Recalculation
• Reperformance
• Analytical procedures
• Inquiry

Audit risk is the risk that the auditor expresses an inappropriate opinion when the financial statements are materially misstated.`
        },

        {
            title: "Management accounting",
            keywords: ["management accounting", "cost accounting", "managerial accounting"],
            answer:
`Management accounting provides financial and non-financial information to managers for planning, decision-making and control.

Important areas include:
• Cost classification
• Budgeting
• Cost-volume-profit analysis
• Marginal costing
• Absorption costing
• Standard costing
• Variance analysis
• Relevant costing.`
        },

        {
            title: "Break-even point",
            keywords: ["break even", "break-even", "break even point"],
            answer:
`The break-even point is where total revenue equals total costs.

In units:

Break-even units =
Fixed costs ÷ Contribution per unit

Contribution per unit =
Selling price per unit − Variable cost per unit.

At break-even, profit is zero.`
        }

    ];

    /*
    ============================================================
    ECONOMICS KNOWLEDGE
    ============================================================
    */

    const economicsKnowledge = [

        {
            title: "Circular flow of income",
            keywords: ["circular flow", "four sector model", "four-sector model"],
            answer:
`The four-sector circular flow model shows the flow of income and spending between:

• Households
• Businesses
• Government
• Foreign sector

The major markets involved are:

• Product market
• Factor market
• Financial market
• Foreign exchange market

Households supply factors of production to businesses and receive factor income.

Businesses produce goods and services that are purchased in the product market.

Government collects taxes and spends on goods and services.

The foreign sector represents exports and imports.`
        },

        {
            title: "Product market",
            keywords: ["product market", "goods market", "consumer goods", "capital goods"],
            answer:
`The product or goods market is where goods and services are traded.

Households, government and the foreign sector purchase goods from firms.

Goods are tangible, such as:
• Computers
• Paper
• Bread

Services are non-tangible activities that satisfy needs and wants.

Examples include:
• Accountants
• Teachers
• Doctors
• Drivers

Supply and demand determine the equilibrium price and quantity.

Households purchase consumer goods, while businesses purchase capital goods for production.`
        },

        {
            title: "Durable semi-durable non-durable goods",
            keywords: ["durable goods", "semi durable", "non durable", "non-durable"],
            answer:
`Non-durable goods are normally consumed quickly and cannot be reused for a long period.

Example: an apple.

Semi-durable goods last for a shorter period but can be used more than once.

Example: clothing or certain household items.

Durable goods normally last for a long period, often more than a year, because they do not wear out easily.

Example: a chalkboard.`
        },

        {
            title: "Factor market",
            keywords: ["factor market", "resources market", "factors of production"],
            answer:
`The factor or resources market is where factors of production are exchanged.

The four factors of production are:

• Land
• Labour
• Capital
• Entrepreneurship

They receive factor incomes:

Land → Economic rent
Labour → Wages and salaries
Capital → Interest
Entrepreneurship → Profit

The price and quantity of factors are determined by demand and supply.`
        },

        {
            title: "Money market",
            keywords: ["money market", "short term finance", "treasury bills"],
            answer:
`The money market is used for short-term borrowing and lending.

It generally deals with periods ranging from a few days to less than three years.

Examples of money-market securities include:

• Treasury bills
• Reserve Bank debentures
• Bankers' acceptances
• Short-term government bonds
• Short-term company debentures

The South African Reserve Bank is an important institution in the money market.`
        },

        {
            title: "Financial market",
            keywords: ["financial market", "surplus units", "deficit units"],
            answer:
`The financial market channels funds from surplus units to deficit units.

Surplus units are households or firms that have funds available for saving.

Deficit units are households, firms or government that require additional funds.

Financial institutions include:

• Banks
• Pension funds
• Insurance companies
• JSE

Savers place surplus funds with financial institutions, which can then provide funds to borrowers.`
        },

        {
            title: "Capital market",
            keywords: ["capital market", "long term finance", "jse"],
            answer:
`The capital market is a financial market where long-term financial securities are traded.

It generally involves periods of three years and longer.

Examples include long-term deposits, loans and mortgage bonds.

The Johannesburg Stock Exchange is an important institution in the South African capital market.`
        },

        {
            title: "Foreign exchange market",
            keywords: ["foreign exchange", "forex market", "exchange rate", "rand pound"],
            answer:
`The foreign exchange market is where one currency is exchanged for another.

For example:

South African Rand → British Pound

The amount of foreign currency received depends on the exchange rate.

Exchange rates are generally influenced by demand and supply for currencies.

In South Africa, foreign currency can be obtained through commercial banks such as FNB, Absa, Nedbank and Standard Bank.`
        },

        {
            title: "New economic paradigm",
            keywords: ["new economic paradigm", "economic paradigm"],
            answer:
`In the new economic paradigm, government focuses less on fine-tuning the economy and more on eliminating uncertainty relating to fiscal and monetary policies.

Government can increase output by combining demand-side and supply-side policies.`
        },

        {
            title: "Demand-side policy",
            keywords: ["demand side policy", "demand-side policies", "aggregate demand policy"],
            answer:
`Demand-side policies aim to increase aggregate demand.

They are particularly useful during a recession or when economic growth is below trend.

When there is spare capacity and a negative output gap, increasing aggregate demand can increase economic growth.

However, when the economy is close to full capacity, further increases in aggregate demand can mainly create inflationary pressure.`
        },

        {
            title: "Monetary policy",
            keywords: ["monetary policy", "sarb governor", "interest rates", "money supply"],
            answer:
`Monetary policy is conducted by the central bank.

The South African Reserve Bank can reduce interest rates and increase the availability of money and credit.

Lower interest rates make borrowing cheaper.

This can encourage consumer spending and increase demand for goods and services.`
        },

        {
            title: "Fiscal policy",
            keywords: ["fiscal policy", "minister of finance", "government spending", "taxes"],
            answer:
`Fiscal policy involves government spending and taxation.

Government can increase spending, which can create a multiplier effect.

Government can also decrease taxes, increasing disposable income.

Both can increase demand for goods and services.

However, if aggregate demand exceeds aggregate supply, or AD increases faster than AS, demand-pull inflation may occur.`
        },

        {
            title: "Supply-side policy",
            keywords: ["supply side policy", "supply-side policy", "deregulation", "privatisation"],
            answer:
`Supply-side policies aim to improve the efficiency and productive capacity of markets.

Measures can include:

• Deregulation
• Encouraging competition
• Privatisation
• Subsidies
• Reducing administrative costs
• Lowering tax rates
• Encouraging modern technology
• Improving human resources
• Skills development
• Free advisory services

The purpose is generally to improve productivity, efficiency and the economy's ability to produce goods and services.`
        },

        {
            title: "Economic indicators",
            keywords: ["economic indicators", "forecasting", "leading indicators", "lagging indicators", "coincident indicators"],
            answer:
`Economic indicators are statistics about economic activity.

They help economists understand the current condition of the economy and where it may be heading.

The main categories are:

• Leading indicators
• Lagging indicators
• Coincident indicators
• Composite indicators`
        },

        {
            title: "Leading indicators",
            keywords: ["leading indicators", "leading indicator", "stock market returns", "consumer expectations"],
            answer:
`Leading indicators change before the economy as a whole changes.

They can provide information about the direction in which the economy is moving and may reach turning points before the economy.

Examples include:

• Stock market returns
• Consumer expectations
• Building permits
• Money supply
• Interest-rate spread
• New companies registered
• New vehicles sold
• Share prices
• Job advertising space
• Manufacturers' new orders
• Net gold and other foreign reserves
• Real exports
• Commodity prices`
        },

        {
            title: "Lagging indicators",
            keywords: ["lagging indicators", "lagging indicator", "unemployment rate"],
            answer:
`Lagging indicators change after the economy as a whole has changed.

They often reach peaks or troughs after the economy and coincident indicators.

The unemployment rate is an example of a lagging indicator.

Examples include:

• Hours worked in construction
• Commercial vehicles sold
• Average duration of unemployment
• Commercial and industrial loans
• CPI for services
• Labour cost per unit of output
• Manufacturing and trade inventories to sales
• Consumer credit to personal income
• Average prime rate charged by banks`
        },

        {
            title: "Coincident indicators",
            keywords: ["coincident indicators", "coincident indicator", "current state economy"],
            answer:
`Coincident indicators change at approximately the same time as the economy.

They provide information about the current state of economic activity.

Examples include:

• Employees on non-agricultural payrolls
• Personal income less transfer payments
• Industrial production
• Manufacturing and trade sales
• Real retail sales
• Real merchandise imports
• Gross value added at constant prices excluding agriculture, forestry and fishing
• Wholesale, retail and new vehicle sales at constant prices`
        },

        {
            title: "Composite indicators",
            keywords: ["composite indicators", "composite indicator", "economic index"],
            answer:
`Composite indicators combine several indicators of the same type into a single index.

Leading, lagging and coincident indicators can be combined to provide a broader measure of economic performance.

Composite indicators can measure multi-dimensional concepts such as:

• Competitiveness
• E-trade
• Environmental quality

Ideally, the indicators should be selected and weighted using a sound theoretical framework that reflects the structure and important dimensions of the economy.`
        },

        {
            title: "Length of business cycle",
            keywords: ["length of business cycle", "business cycle length", "peak to peak", "trough to trough"],
            answer:
`The length of a business cycle is the time required to complete one cycle.

It can be measured from:

• Peak to peak; or
• Trough to trough.

For example, a 10-year cycle means approximately 10 years between successive peaks or troughs.

Longer cycles may indicate stronger underlying economic forces.

Business cycles can sometimes overshoot normal trend levels.`
        },

        {
            title: "Amplitude",
            keywords: ["amplitude", "business cycle amplitude"],
            answer:
`Amplitude measures the difference between total output at the peak and trough of a business cycle.

It also describes the distance of economic fluctuations from the trend line.

A large amplitude indicates more extreme changes in economic activity.

For example, an inflation rate increasing from 5% to 10% represents a 100% increase in the inflation rate.`
        },

        {
            title: "Trend line",
            keywords: ["trend line", "economic trend", "trend"],
            answer:
`A trend line shows the general direction of economic fluctuations.

Economists study past economic performance to help identify possible future trends.

The trend is usually upward over the long term because production capacity and economic output can increase over time.

A trend line can show the general direction and rate at which output changes.`
        },

        {
            title: "Extrapolation",
            keywords: ["extrapolation", "forecast future", "past data"],
            answer:
`Extrapolation means using past data or trends and assuming that the pattern continues into the future.

It is used to estimate an unknown value from known information.

For example, economists can study output after a trough and use the observed trend to estimate future economic growth.

Extrapolation can also be used for predictions such as future share prices.`
        },

        {
            title: "Moving averages",
            keywords: ["moving averages", "moving average", "arithmetic average", "median", "mode", "geometric average"],
            answer:
`A moving average repeatedly calculates average values across a time series to produce a smoother curve.

Four common types of averages are:

Arithmetic mean:
Add the values and divide by the number of values.

Example:
4 + 3 + 5 + 7 + 6 + 5 = 30
30 ÷ 6 = 5

Median:
The middle value when observations are arranged in order.

Example:
23, 24, 25, 26, 27
Median = 25

Mode:
The value that occurs most frequently.

Geometric mean:
An average based on the product of the values and is useful for certain growth-rate calculations.`
        }

    ];

    /*
    ============================================================
    MATHEMATICS KNOWLEDGE
    ============================================================
    */

    const mathematicsKnowledge = [

        {
            title: "Basic algebra",
            keywords: ["algebra", "equation", "solve for x", "x"],
            answer:
`Algebra uses letters and numbers to represent unknown values.

Example:

2x + 6 = 14

Subtract 6 from both sides:

2x = 8

Divide by 2:

x = 4.

The main rule is to perform the same operation on both sides of the equation.`
        },

        {
            title: "Linear equations",
            keywords: ["linear equation", "straight line", "gradient", "y intercept"],
            answer:
`A common linear equation is:

y = mx + c

Where:

m = gradient
c = y-intercept

The gradient tells you how steep the line is.

Gradient:

m = (y₂ − y₁) ÷ (x₂ − x₁).`
        },

        {
            title: "Quadratic equations",
            keywords: ["quadratic", "quadratic equation", "quadratic formula"],
            answer:
`A quadratic equation normally has the form:

ax² + bx + c = 0

The quadratic formula is:

x = [-b ± √(b² − 4ac)] ÷ 2a

The discriminant is:

b² − 4ac

If it is positive, there are two real solutions.

If it is zero, there is one repeated real solution.

If it is negative, there are no real solutions.`
        },

        {
            title: "Percentages",
            keywords: ["percentage", "percent", "percentage increase", "percentage decrease"],
            answer:
`To calculate a percentage:

Percentage = (Part ÷ Whole) × 100

Percentage increase:

(New − Original) ÷ Original × 100

Percentage decrease:

(Original − New) ÷ Original × 100.`
        },

        {
            title: "Simple interest",
            keywords: ["simple interest", "interest", "principal"],
            answer:
`Simple interest is calculated using:

I = P × i × n

Where:

P = principal
i = interest rate per period
n = number of periods

Final amount:

A = P + I.`
        },

        {
            title: "Compound interest",
            keywords: ["compound interest", "compounding"],
            answer:
`Compound interest means interest is earned on both the original amount and previously accumulated interest.

Formula:

A = P(1 + i)^n

Where:

A = final amount
P = principal
i = interest rate per period
n = number of periods.`
        },

        {
            title: "Mean median mode",
            keywords: ["mean median mode", "average", "mean", "median", "mode"],
            answer:
`Mean:
Add all values and divide by the number of values.

Median:
Arrange values from smallest to largest and select the middle value.

Mode:
The value that occurs most frequently.`
        },

        {
            title: "Probability",
            keywords: ["probability", "probability formula", "chance"],
            answer:
`Probability measures the likelihood of an event happening.

For equally likely outcomes:

P(Event) =
Number of favourable outcomes ÷ Total number of possible outcomes.

Probability ranges from 0 to 1.

0 means impossible.
1 means certain.`
        },

        {
            title: "Ratio",
            keywords: ["ratio", "ratios", "simplify ratio"],
            answer:
`A ratio compares quantities.

Example:

20 : 30

Divide both numbers by 10:

2 : 3

Therefore, 20:30 simplifies to 2:3.`
        },

        {
            title: "Exponents",
            keywords: ["exponents", "powers", "indices", "laws of exponents"],
            answer:
`Important exponent rules include:

aᵐ × aⁿ = aᵐ⁺ⁿ

aᵐ ÷ aⁿ = aᵐ⁻ⁿ

(aᵐ)ⁿ = aᵐⁿ

a⁰ = 1, when a ≠ 0

a⁻ⁿ = 1 ÷ aⁿ.`
        },

        {
            title: "Functions",
            keywords: ["functions", "function", "f(x)"],
            answer:
`A function assigns an output to an input.

Example:

f(x) = 2x + 3

If x = 4:

f(4) = 2(4) + 3
= 8 + 3
= 11.`
        },

        {
            title: "Statistics",
            keywords: ["statistics", "standard deviation", "variance"],
            answer:
`Statistics involves collecting, organising, analysing and interpreting data.

Important concepts include:

• Mean
• Median
• Mode
• Range
• Variance
• Standard deviation
• Quartiles
• Percentiles

Standard deviation measures how spread out observations are around the mean.`
        }

    ];

    /*
    ============================================================
    SUBJECT KEYWORDS
    ============================================================
    */

    const subjectKeywords = {

        accounting: [
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
            "liability",
            "equity",
            "revenue",
            "expense",
            "inventory",
            "depreciation",
            "trial balance",
            "debit",
            "credit",
            "journal",
            "ledger",
            "balance sheet",
            "cash flow",
            "income statement",
            "associate",
            "subsidiary",
            "consolidation",
            "goodwill",
            "financial instrument"
        ],

        economics: [
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
            "foreign exchange",
            "exchange rate",
            "leading indicator",
            "lagging indicator",
            "coincident indicator",
            "composite indicator",
            "extrapolation",
            "trend line",
            "amplitude"
        ],

        mathematics: [
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
            "trigonometry",
            "finance"
        ]
    };

    /*
    ============================================================
    SUBJECT DETECTION
    ============================================================
    */

    function detectSubject(question) {

        const text = question.toLowerCase();

        const scores = {
            accounting: 0,
            economics: 0,
            mathematics: 0
        };

        for (const subject in subjectKeywords) {

            subjectKeywords[subject].forEach(keyword => {

                if (text.includes(keyword)) {
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

    /*
    ============================================================
    KNOWLEDGE SEARCH
    ============================================================
    */

    function searchKnowledge(question, knowledge) {

        const text = question.toLowerCase();

        let bestMatch = null;
        let bestScore = 0;

        knowledge.forEach(item => {

            let score = 0;

            item.keywords.forEach(keyword => {

                if (text.includes(keyword.toLowerCase())) {
                    score += 3;
                }

            });

            item.title
                .toLowerCase()
                .split(" ")
                .forEach(word => {

                    if (
                        word.length > 3 &&
                        text.includes(word)
                    ) {
                        score += 1;
                    }

                });

            if (score > bestScore) {
                bestScore = score;
                bestMatch = item;
            }

        });

        return bestScore > 0 ? bestMatch : null;
    }

    /*
    ============================================================
    GREETINGS
    ============================================================
    */

    function isGreeting(text) {

        const greetings = [
            "hi",
            "hello",
            "hey",
            "good morning",
            "good afternoon",
            "good evening",
            "how are you",
            "hey mastercommerce"
        ];

        const clean = text
            .toLowerCase()
            .trim()
            .replace(/[!?.,]/g, "");

        return greetings.includes(clean);
    }

    function greetingAnswer() {

        return `Hello. I am Mastercommerce.

I can help you learn Accounting, Economics and Mathematics.

Ask me a question and I will try to explain it in a simple way.`;
    }

    /*
    ============================================================
    DEVELOPER QUESTIONS
    ============================================================
    */

    function isDeveloperQuestion(text) {

        const lower = text.toLowerCase();

        return (
            lower.includes("who made you") ||
            lower.includes("who created you") ||
            lower.includes("who developed you") ||
            lower.includes("developer") ||
            lower.includes("founder") ||
            lower.includes("who are you")
        );
    }

    function developerAnswer() {

        return `I am Mastercommerce.

Product: ${developerInformation.product}
Developer: ${developerInformation.developer}
Founder: ${developerInformation.founder}
Location: ${developerInformation.location}
Education: ${developerInformation.education}
Version: ${developerInformation.version}`;
    }

    /*
    ============================================================
    MESSAGE CREATION
    ============================================================
    */

    function createMessage(text, sender) {

        const wrapper = document.createElement("div");
        wrapper.className = `message ${sender}`;

        const avatar = document.createElement("div");
        avatar.className = "message-avatar";
        avatar.textContent = sender === "user" ? "U" : "M";

        const content = document.createElement("div");
        content.className = "message-content";

        const label = document.createElement("div");
        label.className = "message-label";
        label.textContent = sender === "user"
            ? "You"
            : "Mastercommerce";

        const messageText = document.createElement("div");
        messageText.className = "message-text";
        messageText.textContent = text;

        content.appendChild(label);
        content.appendChild(messageText);

        wrapper.appendChild(avatar);
        wrapper.appendChild(content);

        chatMessages.appendChild(wrapper);

        return wrapper;
    }

    /*
    ============================================================
    ANSWER QUESTION
    ============================================================
    */

    function answerQuestion(question) {

        const cleanQuestion = question.trim();

        if (!cleanQuestion) {
            return;
        }

        createMessage(cleanQuestion, "user");

        let answer = "";

        if (isGreeting(cleanQuestion)) {

            answer = greetingAnswer();

        } else if (isDeveloperQuestion(cleanQuestion)) {

            answer = developerAnswer();

        } else {

            const subject = detectSubject(cleanQuestion);

            if (!subject) {

                answer =
`I am not completely sure which subject you mean.

Please mention Accounting, Economics or Mathematics in your question so I can give you the correct answer.`;

            } else {

                let knowledge;

                if (subject === "accounting") {
                    knowledge = accountingKnowledge;
                }

                if (subject === "economics") {
                    knowledge = economicsKnowledge;
                }

                if (subject === "mathematics") {
                    knowledge = mathematicsKnowledge;
                }

                const result = searchKnowledge(
                    cleanQuestion,
                    knowledge
                );

                if (result) {

                    answer = result.answer;

                } else {

                    const subjectName =
                        subject.charAt(0).toUpperCase() +
                        subject.slice(1);

                    answer =
`I understand that this is a ${subjectName} question, but I do not have a specific answer for that topic in my current knowledge base.

Try asking the question in a little more detail.`;
                }
            }
        }

        setTimeout(() => {

            createMessage(answer, "assistant");

            chatMessages.scrollTo({
                top: chatMessages.scrollHeight,
                behavior: "smooth"
            });

        }, 250);
    }

    /*
    ============================================================
    SEND
    ============================================================
    */

    function sendQuestion() {

        const question = questionInput.value.trim();

        if (!question) {
            return;
        }

        questionInput.value = "";
        questionInput.style.height = "auto";

        answerQuestion(question);
    }

    sendButton.addEventListener("click", sendQuestion);

    questionInput.addEventListener("keydown", event => {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {
            event.preventDefault();
            sendQuestion();
        }

    });

    /*
    ============================================================
    TEXTAREA AUTO RESIZE
    ============================================================
    */

    questionInput.addEventListener("input", () => {

        questionInput.style.height = "auto";

        questionInput.style.height =
            Math.min(questionInput.scrollHeight, 150) + "px";

    });

    /*
    ============================================================
    NEW CHAT
    ============================================================
    */

    function startNewChat() {

        chatMessages.innerHTML = `
            <div class="welcome-screen">

                <div class="welcome-logo">M</div>

                <h1>What would you like to learn?</h1>

                <p>
                    Ask a question about Accounting, Economics or Mathematics.
                </p>

                <div class="subject-cards">

                    <div class="subject-card">
                        <div class="subject-icon">
                            <svg viewBox="0 0 24 24">
                                <path d="M4 5h16v14H4z"/>
                                <path d="M8 9h8M8 13h5M8 17h3"/>
                            </svg>
                        </div>

                        <div>
                            <h3>Accounting</h3>
                            <p>
                                Financial accounting, management accounting,
                                tax, auditing and more.
                            </p>
                        </div>
                    </div>

                    <div class="subject-card">
                        <div class="subject-icon">
                            <svg viewBox="0 0 24 24">
                                <path d="M4 19V5"/>
                                <path d="M4 19h16"/>
                                <path d="m7 15 4-5 3 3 5-7"/>
                            </svg>
                        </div>

                        <div>
                            <h3>Economics</h3>
                            <p>
                                Microeconomics, macroeconomics,
                                markets and economic concepts.
                            </p>
                        </div>
                    </div>

                    <div class="subject-card">
                        <div class="subject-icon">
                            <svg viewBox="0 0 24 24">
                                <path d="M4 4h16v16H4z"/>
                                <path d="M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2"/>
                            </svg>
                        </div>

                        <div>
                            <h3>Mathematics</h3>
                            <p>
                                Algebra, functions, statistics, finance
                                and problem solving.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        `;

        questionInput.value = "";
        questionInput.style.height = "auto";
    }

    if (newChatButton) {

        newChatButton.addEventListener(
            "click",
            () => {

                startNewChat();
                closeSidebar();

            }
        );

    }

    /*
    ============================================================
    MOBILE SIDEBAR
    ============================================================
    */

    function openSidebar() {

        if (!sidebar) return;

        sidebar.classList.add("open");

        if (sidebarOverlay) {
            sidebarOverlay.classList.add("active");
        }
    }

    function closeSidebar() {

        if (!sidebar) return;

        sidebar.classList.remove("open");

        if (sidebarOverlay) {
            sidebarOverlay.classList.remove("active");
        }
    }

    if (hamburgerButton) {
        hamburgerButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                if (sidebar.classList.contains("open")) {
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

    /*
    ============================================================
    PLUS BUTTON
    ============================================================
    */

    function closePlusMenu() {

        if (!plusMenu || !plusButton) return;

        plusMenu.classList.remove("show");

        plusButton.classList.remove("active");

        plusButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }

    function togglePlusMenu() {

        if (!plusMenu || !plusButton) return;

        const isOpen =
            plusMenu.classList.contains("show");

        if (isOpen) {

            closePlusMenu();

        } else {

            plusMenu.classList.add("show");

            plusButton.classList.add("active");

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

                togglePlusMenu();

            }
        );

    }

    /*
    ============================================================
    UNDER DEVELOPMENT MESSAGE
    ============================================================
    */

    let toastTimer;

    function showFeatureMessage(feature) {

        if (!featureToast) return;

        featureToast.textContent =
            `${feature} is still under development.`;

        featureToast.classList.add("show");

        clearTimeout(toastTimer);

        toastTimer = setTimeout(() => {

            featureToast.classList.remove("show");

        }, 2500);
    }

    if (plusMenu) {

        const options =
            plusMenu.querySelectorAll(".plus-option");

        options.forEach(option => {

            option.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    const feature =
                        option.dataset.feature ||
                        "This feature";

                    closePlusMenu();

                    showFeatureMessage(feature);

                }
            );

        });

    }

    /*
    ============================================================
    CLOSE MENUS WHEN CLICKING OUTSIDE
    ============================================================
    */

    document.addEventListener("click", event => {

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
            sidebar.classList.contains("open") &&
            !sidebar.contains(event.target) &&
            hamburgerButton &&
            !hamburgerButton.contains(event.target)
        ) {
            closeSidebar();
        }

    });

    /*
    ============================================================
    NAVIGATION
    ============================================================
    */

    const navItems =
        document.querySelectorAll(".nav-item");

    navItems.forEach(item => {

        item.addEventListener(
            "click",
            () => {

                navItems.forEach(nav => {
                    nav.classList.remove("active");
                });

                item.classList.add("active");

                const page =
                    item.dataset.page;

                closeSidebar();

                if (page === "home") {

                    chatMessages.innerHTML = "";

                    startNewChat();

                }

                if (page === "about") {

                    chatMessages.innerHTML = `
                        <div class="page-content">

                            <h1>About Mastercommerce</h1>

                            <p>
                                Mastercommerce is an educational platform
                                designed to help learners understand
                                Accounting, Economics and Mathematics
                                through simple explanations.
                            </p>

                            <div class="settings-section">

                                <h2>Developer</h2>

                                <div class="settings-card">

                                    <div class="setting-row">
                                        <div>
                                            <div class="setting-label">Product</div>
                                            <div class="setting-description">
                                                Educational learning platform
                                            </div>
                                        </div>

                                        <div class="setting-control">
                                            Mastercommerce
                                        </div>
                                    </div>

                                    <div class="setting-row">
                                        <div>
                                            <div class="setting-label">Developer</div>
                                        </div>

                                        <div class="setting-control">
                                            PD | Web &amp; App Development
                                        </div>
                                    </div>

                                    <div class="setting-row">
                                        <div>
                                            <div class="setting-label">Founder</div>
                                        </div>

                                        <div class="setting-control">
                                            Phungo Dembe Vusani
                                        </div>
                                    </div>

                                    <div class="setting-row">
                                        <div>
                                            <div class="setting-label">Version</div>
                                        </div>

                                        <div class="setting-control">
                                            v1.0.0
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    `;
                }

                if (page === "settings") {

                    showSettings();

                }

            }
        );

    });

    /*
    ============================================================
    SETTINGS
    ============================================================
    */

    function showSettings() {

        chatMessages.innerHTML = `
            <div class="page-content">

                <h1>Settings</h1>

                <p>
                    Adjust Mastercommerce to your preference.
                </p>

                <div class="settings-section">

                    <h2>Appearance</h2>

                    <div class="settings-card">

                        <div class="setting-row">

                            <div>
                                <div class="setting-label">
                                    Dark mode
                                </div>

                                <div class="setting-description">
                                    Change between light and dark mode.
                                </div>
                            </div>

                            <div class="setting-control">

                                <label class="toggle">
                                    <input
                                        type="checkbox"
                                        id="darkModeToggle"
                                    >
                                    <span></span>
                                </label>

                            </div>

                        </div>

                        <div class="setting-row">

                            <div>
                                <div class="setting-label">
                                    Background
                                </div>

                                <div class="setting-description">
                                    Choose the main background.
                                </div>
                            </div>

                            <div class="background-options">

                                <button
                                    class="background-option bg-white"
                                    data-bg="white"
                                    aria-label="White"
                                ></button>

                                <button
                                    class="background-option bg-gray"
                                    data-bg="soft-gray"
                                    aria-label="Soft gray"
                                ></button>

                                <button
                                    class="background-option bg-warm"
                                    data-bg="warm"
                                    aria-label="Warm"
                                ></button>

                                <button
                                    class="background-option bg-blue"
                                    data-bg="blue"
                                    aria-label="Blue"
                                ></button>

                                <button
                                    class="background-option bg-green"
                                    data-bg="green"
                                    aria-label="Green"
                                ></button>

                                <button
                                    class="background-option bg-lavender"
                                    data-bg="lavender"
                                    aria-label="Lavender"
                                ></button>

                            </div>

                        </div>

                        <div class="setting-row">

                            <div>
                                <div class="setting-label">
                                    Font size
                                </div>

                                <div class="setting-description">
                                    Change the text size.
                                </div>
                            </div>

                            <div class="setting-control">

                                <select
                                    class="setting-select"
                                    id="fontSizeSelect"
                                >
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </select>

                            </div>

                        </div>

                        <div class="setting-row">

                            <div>
                                <div class="setting-label">
                                    Reduced animations
                                </div>

                                <div class="setting-description">
                                    Reduce interface animations.
                                </div>
                            </div>

                            <div class="setting-control">

                                <label class="toggle">
                                    <input
                                        type="checkbox"
                                        id="motionToggle"
                                    >
                                    <span></span>
                                </label>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="settings-section">

                    <h2>Data</h2>

                    <div class="settings-card">

                        <div class="setting-row">

                            <div>
                                <div class="setting-label">
                                    Clear chat
                                </div>

                                <div class="setting-description">
                                    Start a fresh conversation.
                                </div>
                            </div>

                            <div class="setting-control">

                                <button
                                    class="new-chat-btn"
                                    id="settingsNewChat"
                                    style="width:auto;padding:0 12px;"
                                >
                                    Clear
                                </button>

                            </div>

                        </div>

                        <div class="setting-row">

                            <div>
                                <div class="setting-label">
                                    Reset settings
                                </div>

                                <div class="setting-description">
                                    Restore default appearance settings.
                                </div>
                            </div>

                            <div class="setting-control">

                                <button
                                    class="new-chat-btn"
                                    id="resetSettings"
                                    style="width:auto;padding:0 12px;"
                                >
                                    Reset
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        `;

        setupSettings();
    }

    function setupSettings() {

        const darkModeToggle =
            document.getElementById("darkModeToggle");

        const fontSizeSelect =
            document.getElementById("fontSizeSelect");

        const motionToggle =
            document.getElementById("motionToggle");

        const settingsNewChat =
            document.getElementById("settingsNewChat");

        const resetSettings =
            document.getElementById("resetSettings");

        if (darkModeToggle) {

            darkModeToggle.checked =
                localStorage.getItem("mastercommerce-theme") === "dark";

            darkModeToggle.addEventListener(
                "change",
                () => {

                    const dark =
                        darkModeToggle.checked;

                    document.body.classList.toggle(
                        "dark-mode",
                        dark
                    );

                    localStorage.setItem(
                        "mastercommerce-theme",
                        dark ? "dark" : "light"
                    );

                }
            );

        }

        if (fontSizeSelect) {

            const savedFont =
                localStorage.getItem(
                    "mastercommerce-font"
                ) || "medium";

            fontSizeSelect.value =
                savedFont;

            applyFontSize(savedFont);

            fontSizeSelect.addEventListener(
                "change",
                () => {

                    applyFontSize(
                        fontSizeSelect.value
                    );

                }
            );

        }

        if (motionToggle) {

            const reduced =
                localStorage.getItem(
                    "mastercommerce-motion"
                ) === "reduced";

            motionToggle.checked =
                reduced;

            document.body.classList.toggle(
                "reduced-motion",
                reduced
            );

            motionToggle.addEventListener(
                "change",
                () => {

                    const enabled =
                        motionToggle.checked;

                    document.body.classList.toggle(
                        "reduced-motion",
                        enabled
                    );

                    localStorage.setItem(
                        "mastercommerce-motion",
                        enabled
                            ? "reduced"
                            : "normal"
                    );

                }
            );

        }

        document
            .querySelectorAll(".background-option")
            .forEach(button => {

                const bg =
                    button.dataset.bg;

                if (
                    localStorage.getItem(
                        "mastercommerce-background"
                    ) === bg
                ) {
                    button.classList.add("selected");
                }

                button.addEventListener(
                    "click",
                    () => {

                        applyBackground(bg);

                        document
                            .querySelectorAll(
                                ".background-option"
                            )
                            .forEach(option => {
                                option.classList.remove(
                                    "selected"
                                );
                            });

                        button.classList.add(
                            "selected"
                        );

                    }
                );

            });

        if (settingsNewChat) {

            settingsNewChat.addEventListener(
                "click",
                () => {

                    startNewChat();

                    navItems.forEach(item => {
                        item.classList.remove("active");
                    });

                    const home =
                        document.querySelector(
                            '[data-page="home"]'
                        );

                    if (home) {
                        home.classList.add("active");
                    }

                }
            );

        }

        if (resetSettings) {

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

                    document.body.className = "";

                    showSettings();

                }
            );

        }

        applySavedSettings();
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

    function applyBackground(background) {

        document.body.classList.remove(
            "bg-soft-gray",
            "bg-warm",
            "bg-blue",
            "bg-green",
            "bg-lavender"
        );

        if (background !== "white") {

            document.body.classList.add(
                `bg-${background}`
            );

        }

        localStorage.setItem(
            "mastercommerce-background",
            background
        );
    }

    function applySavedSettings() {

        const theme =
            localStorage.getItem(
                "mastercommerce-theme"
            );

        if (theme === "dark") {
            document.body.classList.add(
                "dark-mode"
            );
        }

        const font =
            localStorage.getItem(
                "mastercommerce-font"
            ) || "medium";

        applyFontSize(font);

        const background =
            localStorage.getItem(
                "mastercommerce-background"
            ) || "white";

        applyBackground(background);

        const motion =
            localStorage.getItem(
                "mastercommerce-motion"
            );

        if (motion === "reduced") {

            document.body.classList.add(
                "reduced-motion"
            );

        }

    }

    /*
    ============================================================
    INITIALIZE
    ============================================================
    */

    applySavedSettings();

});
