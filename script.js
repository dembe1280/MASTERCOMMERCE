/* =========================================================
   MASTERCOMMERCE
   MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    "use strict";


    /* =====================================================
       DOM ELEMENTS
       ===================================================== */

    const chatMessages =
        document.getElementById("chatMessages");

    const questionInput =
        document.getElementById("questionInput");

    const sendButton =
        document.getElementById("sendButton");

    const newChatButton =
        document.getElementById("newChatButton");

    const sidebar =
        document.getElementById("sidebar");

    const sidebarOverlay =
        document.getElementById("sidebarOverlay");

    const hamburgerButton =
        document.getElementById("hamburgerButton");

    const plusButton =
        document.getElementById("plusButton");

    const plusMenu =
        document.getElementById("plusMenu");

    const plusOptions =
        document.querySelectorAll(".plus-option");

    const featureNotice =
        document.getElementById("featureNotice");

    const featureNoticeText =
        document.getElementById("featureNoticeText");

    const featureNoticeClose =
        document.getElementById("featureNoticeClose");


    /* =====================================================
       DEVELOPER INFORMATION
       ===================================================== */

    const developerInformation = {
        product: "Mastercommerce",
        developer: "PD | Web & App Development",
        founder: "Phungo Dembe Vusani",
        location: "Limpopo, South Africa",
        education: "University of Venda — BCom in Accounting",
        version: "v1.0.0"
    };


    /* =====================================================
       ACCOUNTING KNOWLEDGE
       ===================================================== */

    const accountingKnowledge = [

        {
            title: "What is Accounting?",
            keywords: [
                "accounting",
                "what is accounting",
                "definition of accounting"
            ],
            answer:
`Accounting is the process of identifying, recording, classifying, summarising, analysing and communicating financial information.

The main purpose of accounting is to provide useful financial information to people who make decisions about a business.

Examples of accounting information include revenue, expenses, assets, liabilities, profit and cash flow.`
        },

        {
            title: "Accounting Equation",
            keywords: [
                "accounting equation",
                "assets liabilities equity",
                "equation"
            ],
            answer:
`The basic accounting equation is:

Assets = Equity + Liabilities

Assets are what the business owns or controls.

Liabilities are amounts the business owes to other parties.

Equity is the owner's interest in the business.

Example:

If a business has assets of R100 000 and liabilities of R40 000:

Equity = R100 000 − R40 000
Equity = R60 000.`
        },

        {
            title: "Assets",
            keywords: [
                "asset",
                "assets",
                "current asset",
                "non current asset"
            ],
            answer:
`An asset is a resource controlled by a business as a result of a past event and from which future economic benefits are expected.

Examples include:

• Cash
• Inventory
• Trade receivables
• Property
• Equipment
• Vehicles
• Buildings

Current assets are normally expected to be realised, sold or consumed within the normal operating cycle or within 12 months.

Non-current assets are held for longer-term use.`
        },

        {
            title: "Liabilities",
            keywords: [
                "liability",
                "liabilities",
                "current liability",
                "non current liability"
            ],
            answer:
`A liability is a present obligation of a business arising from past events that is expected to result in an outflow of economic resources.

Examples include:

• Trade payables
• Bank loans
• Accrued expenses
• Bonds
• Bank overdrafts

Current liabilities are generally due within 12 months or within the normal operating cycle.

Non-current liabilities are normally payable after more than 12 months.`
        },

        {
            title: "Equity",
            keywords: [
                "equity",
                "owner equity",
                "owners equity",
                "capital"
            ],
            answer:
`Equity represents the owner's residual interest in the assets of a business after deducting liabilities.

Accounting equation:

Equity = Assets − Liabilities

Equity can increase through owner contributions and profits.

Equity can decrease through drawings and losses.`
        },

        {
            title: "Revenue",
            keywords: [
                "revenue",
                "income",
                "sales revenue"
            ],
            answer:
`Revenue is income earned from the ordinary activities of a business.

Examples include:

• Sales of goods
• Service fees
• Commission income
• Rental income
• Interest income, depending on the business activity

Revenue generally increases equity when recognised.`
        },

        {
            title: "Expenses",
            keywords: [
                "expense",
                "expenses",
                "business expenses"
            ],
            answer:
`Expenses are decreases in economic benefits during an accounting period.

Examples include:

• Rent
• Salaries
• Insurance
• Electricity
• Depreciation
• Advertising
• Interest expense

Expenses normally reduce profit and therefore reduce equity.`
        },

        {
            title: "Profit and Loss",
            keywords: [
                "profit",
                "loss",
                "profit and loss",
                "net profit",
                "net loss"
            ],
            answer:
`Profit occurs when income is greater than expenses.

Profit = Income − Expenses

If expenses are greater than income, the business makes a loss.

For example:

Revenue = R100 000
Expenses = R70 000

Profit = R30 000.`
        },

        {
            title: "Inventory",
            keywords: [
                "inventory",
                "stock",
                "inventory accounting"
            ],
            answer:
`Inventory consists of assets held for sale in the ordinary course of business, in the process of production for such sale, or materials and supplies to be consumed in production.

Examples include:

• Clothing held by a clothing shop
• Food held by a supermarket
• Raw materials held by a manufacturer

Inventory is normally a current asset.`
        },

        {
            title: "Cost of Sales",
            keywords: [
                "cost of sales",
                "cost of goods sold",
                "cogs"
            ],
            answer:
`Cost of sales represents the cost of inventory that has been sold during the period.

Under the periodic inventory system:

Cost of Sales = Opening Inventory + Purchases − Closing Inventory.

Example:

Opening inventory = R20 000
Purchases = R80 000
Closing inventory = R15 000

Cost of sales = R20 000 + R80 000 − R15 000
Cost of sales = R85 000.`
        },

        {
            title: "Gross Profit",
            keywords: [
                "gross profit",
                "gross profit formula"
            ],
            answer:
`Gross profit is calculated as:

Gross Profit = Sales − Cost of Sales

For example:

Sales = R200 000
Cost of sales = R120 000

Gross profit = R80 000.`
        },

        {
            title: "Net Profit",
            keywords: [
                "net profit",
                "net income",
                "profit after expenses"
            ],
            answer:
`Net profit is the profit remaining after all relevant expenses have been deducted from income.

A simplified calculation is:

Net Profit = Revenue − Cost of Sales − Operating Expenses.

Net profit is reported in the statement of profit or loss.`
        },

        {
            title: "Depreciation",
            keywords: [
                "depreciation",
                "depreciation accounting"
            ],
            answer:
`Depreciation is the systematic allocation of the depreciable amount of an asset over its useful life.

A simple straight-line formula is:

Depreciation per year =
(Cost − Residual Value) ÷ Useful Life.

Example:

Cost = R100 000
Residual value = R10 000
Useful life = 5 years

Annual depreciation =
(R100 000 − R10 000) ÷ 5
= R18 000 per year.`
        },

        {
            title: "Trade Receivables",
            keywords: [
                "trade receivables",
                "debtors",
                "accounts receivable"
            ],
            answer:
`Trade receivables are customers who owe the business money for goods or services purchased on credit.

They are normally classified as current assets.

A business should monitor receivables because slow collection can create cash-flow problems.`
        },

        {
            title: "Trade Payables",
            keywords: [
                "trade payables",
                "creditors",
                "accounts payable"
            ],
            answer:
`Trade payables are amounts owed by the business to suppliers for goods or services purchased on credit.

They are normally current liabilities.

A business must manage trade payables carefully so that suppliers are paid on time while sufficient cash remains available.`
        },

        {
            title: "Cash Flow",
            keywords: [
                "cash flow",
                "cash flows",
                "cash flow statement"
            ],
            answer:
`Cash flow refers to the movement of cash and cash equivalents into and out of a business.

The statement of cash flows normally classifies cash flows into:

• Operating activities
• Investing activities
• Financing activities

A business can be profitable but still experience cash-flow problems.`
        },

        {
            title: "VAT",
            keywords: [
                "vat",
                "value added tax",
                "input vat",
                "output vat"
            ],
            answer:
`VAT means Value-Added Tax.

Output VAT is VAT charged by a business on taxable supplies.

Input VAT is VAT incurred by a business on qualifying purchases.

For a VAT-registered business, the VAT payable can generally be calculated as:

Output VAT − Input VAT.

The exact treatment depends on the relevant South African VAT rules and the nature of the transaction.`
        },

        {
            title: "Financial Statements",
            keywords: [
                "financial statements",
                "financial statement",
                "statement of financial position",
                "income statement"
            ],
            answer:
`Common financial statements include:

• Statement of financial position
• Statement of profit or loss and other comprehensive income
• Statement of changes in equity
• Statement of cash flows
• Notes to the financial statements

The statement of financial position reports assets, liabilities and equity at a particular date.

The statement of profit or loss reports income and expenses for a period.`
        },

        {
            title: "Double Entry",
            keywords: [
                "double entry",
                "debit credit",
                "debits and credits"
            ],
            answer:
`The double-entry system records every transaction in at least two accounts.

For every transaction:

Total Debits = Total Credits.

A useful basic rule is:

Assets and expenses normally increase with debits.

Liabilities, equity and income normally increase with credits.

The exact account treatment depends on the transaction.`
        },

        {
            title: "Trial Balance",
            keywords: [
                "trial balance",
                "trial balances"
            ],
            answer:
`A trial balance is a list of ledger account balances prepared to check whether total debit balances equal total credit balances.

If:

Total Debits = Total Credits

the trial balance is mathematically balanced.

However, a balanced trial balance does not prove that there are no accounting errors.`
        },

        {
            title: "Accounting Ratios",
            keywords: [
                "accounting ratios",
                "ratios",
                "acid test",
                "current ratio",
                "net profit margin",
                "debt ratio",
                "inventory turnover",
                "debtors collection days"
            ],
            answer:
`Common accounting ratios include:

Current Ratio =
Current Assets ÷ Current Liabilities

Acid-Test Ratio =
(Current Assets − Inventory) ÷ Current Liabilities

Net Profit Margin =
Net Profit ÷ Revenue × 100

Debt Ratio =
Total Liabilities ÷ Total Assets × 100

Inventory Turnover =
Cost of Sales ÷ Average Inventory

Debtors Collection Period =
Average Trade Receivables ÷ Credit Sales × 365.

The meaning of a ratio depends on the business, industry and period being analysed.`
        },

        {
            title: "IFRS",
            keywords: [
                "ifrs",
                "international financial reporting standards"
            ],
            answer:
`IFRS means International Financial Reporting Standards.

IFRS standards provide accounting requirements used to improve consistency and comparability in financial reporting.

Examples include:

IAS 16 — Property, Plant and Equipment
IAS 28 — Investments in Associates
IAS 36 — Impairment of Assets
IAS 12 — Income Taxes
IFRS 9 — Financial Instruments
IFRS 15 — Revenue from Contracts with Customers
IFRS 10 — Consolidated Financial Statements.`
        },

        {
            title: "Audit",
            keywords: [
                "audit",
                "auditing",
                "auditor",
                "audit evidence"
            ],
            answer:
`An audit is an independent examination of financial information to obtain reasonable assurance about whether the financial statements are free from material misstatement.

Auditors gather evidence using procedures such as:

• Inspection
• Observation
• Confirmation
• Recalculation
• Reperformance
• Analytical procedures
• Inquiry

Auditing standards such as the International Standards on Auditing provide guidance for audit work.`
        }

    ];


    /* =====================================================
       ECONOMICS KNOWLEDGE
       ===================================================== */

    const economicsKnowledge = [

        {
            title: "What is Economics?",
            keywords: [
                "economics",
                "what is economics",
                "definition of economics"
            ],
            answer:
`Economics is the study of how individuals, businesses, governments and societies use scarce resources to satisfy unlimited wants.

Because resources are scarce, choices have to be made.

Economics therefore deals with concepts such as scarcity, choice, opportunity cost, demand, supply, markets, inflation, unemployment and economic growth.`
        },

        {
            title: "Scarcity",
            keywords: [
                "scarcity",
                "scarce resources"
            ],
            answer:
`Scarcity exists because resources are limited while human wants are unlimited.

Examples of scarce resources include:

• Land
• Labour
• Capital
• Entrepreneurship

Because resources are scarce, people and societies must make choices.`
        },

        {
            title: "Opportunity Cost",
            keywords: [
                "opportunity cost",
                "opportunity costs"
            ],
            answer:
`Opportunity cost is the value of the next best alternative that is sacrificed when a choice is made.

Example:

If you spend R100 on a textbook instead of buying clothes, the opportunity cost is the value of the clothes you gave up.`
        },

        {
            title: "Demand",
            keywords: [
                "demand",
                "law of demand",
                "demand curve"
            ],
            answer:
`Demand refers to the quantity of a good or service that consumers are willing and able to buy at different prices during a particular period.

The law of demand states that, other things remaining equal, quantity demanded generally falls when price rises and rises when price falls.

A demand curve normally slopes downward from left to right.`
        },

        {
            title: "Supply",
            keywords: [
                "supply",
                "law of supply",
                "supply curve"
            ],
            answer:
`Supply refers to the quantity of a good or service that producers are willing and able to sell at different prices during a particular period.

The law of supply states that, other things remaining equal, quantity supplied generally increases when price increases and decreases when price decreases.

A supply curve normally slopes upward from left to right.`
        },

        {
            title: "Market Equilibrium",
            keywords: [
                "equilibrium",
                "market equilibrium",
                "equilibrium price",
                "equilibrium quantity"
            ],
            answer:
`Market equilibrium occurs where quantity demanded equals quantity supplied.

At equilibrium:

Quantity demanded = Quantity supplied.

The corresponding price is the equilibrium price and the corresponding quantity is the equilibrium quantity.

If demand is greater than supply, there may be a shortage.

If supply is greater than demand, there may be a surplus.`
        },

        {
            title: "Elasticity",
            keywords: [
                "elasticity",
                "price elasticity",
                "income elasticity",
                "cross elasticity"
            ],
            answer:
`Elasticity measures how responsive one variable is to a change in another variable.

Price elasticity of demand measures how responsive quantity demanded is to a change in price.

A simplified formula is:

PED = % change in quantity demanded ÷ % change in price.

Demand can be elastic, inelastic or unitary depending on the size of the response.`
        },

        {
            title: "Inflation",
            keywords: [
                "inflation",
                "inflation rate",
                "demand pull inflation",
                "cost push inflation"
            ],
            answer:
`Inflation is a sustained increase in the general price level of goods and services over time.

Demand-pull inflation can occur when aggregate demand grows faster than the economy's ability to produce.

Cost-push inflation can occur when production costs increase and businesses raise prices.

Inflation reduces the purchasing power of money when incomes do not rise at the same rate.`
        },

        {
            title: "Unemployment",
            keywords: [
                "unemployment",
                "unemployment rate",
                "joblessness"
            ],
            answer:
`Unemployment occurs when people who are willing and able to work are without work and are actively seeking employment.

Types can include:

• Frictional unemployment
• Structural unemployment
• Cyclical unemployment
• Seasonal unemployment

High unemployment means that available labour resources are not being fully utilised.`
        },

        {
            title: "Economic Growth",
            keywords: [
                "economic growth",
                "growth",
                "real gdp growth"
            ],
            answer:
`Economic growth refers to an increase in the productive capacity or real output of an economy over time.

It is commonly measured using the growth rate of real GDP.

Economic growth can be influenced by factors such as investment, productivity, technology, skills and infrastructure.`
        },

        {
            title: "GDP",
            keywords: [
                "gdp",
                "gross domestic product"
            ],
            answer:
`GDP means Gross Domestic Product.

It measures the monetary value of final goods and services produced within a country's borders during a specified period.

GDP is commonly used as an indicator of economic activity.

Real GDP adjusts for changes in prices, making it useful for analysing changes in actual output.`
        },

        {
            title: "Fiscal Policy",
            keywords: [
                "fiscal policy",
                "government spending",
                "taxes",
                "minister of finance"
            ],
            answer:
`Fiscal policy involves government decisions about taxation and government spending.

Expansionary fiscal policy can include:

• Increasing government spending
• Reducing taxes

These measures can increase aggregate demand.

Contractionary fiscal policy can involve reducing government spending or increasing taxes to reduce aggregate demand.`
        },

        {
            title: "Monetary Policy",
            keywords: [
                "monetary policy",
                "interest rates",
                "money supply",
                "sarb"
            ],
            answer:
`Monetary policy involves actions by a central bank to influence interest rates, money and credit conditions.

In South Africa, the South African Reserve Bank is responsible for monetary policy.

Lower interest rates can make borrowing cheaper and may encourage spending and investment.

Higher interest rates can make borrowing more expensive and may reduce spending and demand.`
        },

        {
            title: "Factors of Production",
            keywords: [
                "factors of production",
                "land labour capital entrepreneurship",
                "four factors"
            ],
            answer:
`The four main factors of production are:

1. Land — natural resources.
2. Labour — human effort used in production.
3. Capital — produced resources used to produce other goods and services.
4. Entrepreneurship — the ability to organise resources and take business risks.

The factors receive different forms of income:

Land → economic rent
Labour → wages
Capital → interest
Entrepreneurship → profit.`
        },


        /* ==============================================
           CIRCULAR FLOW
           ============================================== */

        {
            title: "Circular Flow — Four-Sector Model",
            keywords: [
                "circular flow",
                "four sector model",
                "four sector circular flow",
                "circular flow essay"
            ],
            answer:
`The four-sector circular flow model includes:

• Households
• Firms
• Government
• Foreign sector

The model shows the flow of income, spending, goods and services and resources between the participants in the economy.

The main markets linked to the four-sector model are:

• Product or goods market
• Factor or resources market
• Financial market
• Foreign exchange market.`
        },

        {
            title: "Circular Flow — Product Market",
            keywords: [
                "product market",
                "goods market",
                "consumer goods",
                "capital goods",
                "durable goods",
                "semi durable goods",
                "non durable goods"
            ],
            answer:
`Goods and services are traded in the product market.

Households, government and the foreign sector purchase goods and services from firms.

Goods are tangible products such as computers, paper and bread.

Services are non-tangible actions that satisfy needs and wants. Examples include services provided by accountants, teachers, doctors and drivers.

Supply and demand determine the equilibrium price and quantity.

Households mainly purchase consumer goods, while businesses purchase capital goods used in production.

Non-durable goods cannot normally be reused and are consumed quickly, such as an apple.

Semi-durable goods can be used more than once but normally do not last for a very long period.

Durable goods generally last for a longer period because they do not wear out easily.`
        },

        {
            title: "Circular Flow — Factor Market",
            keywords: [
                "factor market",
                "resource market",
                "factors market",
                "labour market",
                "resource market circular flow"
            ],
            answer:
`The factor or resources market is where factors of production are traded.

The four factors of production are:

• Land
• Labour
• Capital
• Entrepreneurship

Factors are exchanged for factor incomes:

Labour → wages and salaries

Capital → interest

Land → economic rent

Entrepreneurship → profit

The price and quantity of factors are determined through demand and supply.`
        },

        {
            title: "Circular Flow — Money Market",
            keywords: [
                "money market",
                "financial market short term",
                "short term loans",
                "treasury bills",
                "reserve bank debentures"
            ],
            answer:
`The money market is used for borrowing and lending funds over the short term.

It deals with short-term savings and loans, from a few days to just less than three years.

Examples of securities include:

• Treasury bills
• Reserve Bank debentures
• Banker's acceptances
• Short-term government bonds
• Short-term company debentures.`
        },

        {
            title: "Circular Flow — Financial Market",
            keywords: [
                "financial market",
                "surplus units",
                "deficit units",
                "financial institutions"
            ],
            answer:
`The financial market consists of institutions such as:

• Banks
• Pension funds
• Insurance companies
• The JSE

Financial markets channel funds from surplus units to deficit units.

Surplus units are households or firms that have funds available after spending and can save.

Deficit units are households, firms or government entities that require additional funds.

Savers can deposit funds with financial institutions, which can then lend funds to borrowers.

The South African Reserve Bank is an important institution in the money market.`
        },

        {
            title: "Circular Flow — Capital Market",
            keywords: [
                "capital market",
                "long term financial market",
                "mortgage bonds",
                "jse capital market"
            ],
            answer:
`The capital market is a financial market where long-term financial securities are traded.

It generally deals with long-term deposits and borrowing of three years and above.

Examples include mortgage bonds and other long-term securities.

The Johannesburg Stock Exchange (JSE) is an important institution in the South African capital market.`
        },

        {
            title: "Circular Flow — Foreign Exchange Market",
            keywords: [
                "foreign exchange market",
                "forex market",
                "exchange rate",
                "foreign currency",
                "rand pound"
            ],
            answer:
`In an open economy, foreign currency is needed to conduct international transactions.

The foreign exchange market is where one currency is exchanged for another.

For example, a South African importer may need to exchange Rand for Pounds to make a payment in the United Kingdom.

The amount of one currency received for another depends on the exchange rate.

Exchange rates are generally influenced by demand and supply for currencies, although a central bank may influence the exchange rate directly or indirectly.

In South Africa, foreign currency can be obtained through commercial banks such as FNB, Absa, Nedbank and Standard Bank.`
        },

        {
            title: "Circular Flow — Financial and Foreign Exchange Markets",
            keywords: [
                "link financial market foreign exchange",
                "financial and foreign exchange",
                "participants circular flow markets"
            ],
            answer:
`The financial and foreign exchange markets connect the participants of the four-sector circular flow model.

Households can save through financial institutions and can also participate in international transactions.

Firms can borrow funds to finance investment and can use foreign exchange when importing or exporting.

Government can borrow through financial markets and can participate in international financial transactions.

The foreign sector interacts with domestic firms, households and financial institutions through imports, exports and foreign currency transactions.

These markets therefore help move financial resources between surplus and deficit units and facilitate international trade.`
        },


        /* ==============================================
           BUSINESS CYCLES
           ============================================== */

        {
            title: "Business Cycles — New Economic Paradigm",
            keywords: [
                "new economic paradigm",
                "business cycles",
                "new paradigm",
                "fine tuning",
                "smoothing cycles"
            ],
            answer:
`In the new economic paradigm, government focuses less on fine-tuning the economy and more on reducing or eliminating uncertainty regarding fiscal and monetary policies.

Government can increase output by combining demand-side and supply-side policies.

Demand-side policies influence aggregate demand.

Supply-side policies aim to improve the productive efficiency and capacity of the economy.`
        },

        {
            title: "Business Cycles — Demand-Side Policies",
            keywords: [
                "demand side policies",
                "demand side policy",
                "aggregate demand business cycle",
                "recession policy"
            ],
            answer:
`Demand-side policies aim to increase aggregate demand.

They may be used during a recession or when economic growth is below its trend.

When the economy has spare capacity and a negative output gap, increasing aggregate demand can increase economic growth.

However, if the economy is already close to full capacity, further increases in aggregate demand can mainly create inflationary pressure.

Monetary and fiscal policies can be used to increase aggregate demand for output produced by domestic firms.`
        },

        {
            title: "Business Cycles — Monetary Policy",
            keywords: [
                "business cycle monetary policy",
                "sarb governor",
                "decrease interest rates",
                "money supply business cycle"
            ],
            answer:
`Monetary policy can be used to influence economic activity.

The central bank can reduce interest rates, making credit cheaper, and can influence the money supply and credit conditions.

Lower borrowing costs can encourage consumer spending and investment.

Higher spending can increase aggregate demand for goods and services.

If aggregate demand increases too strongly relative to aggregate supply, inflationary pressure may result.`
        },

        {
            title: "Business Cycles — Fiscal Policy",
            keywords: [
                "business cycle fiscal policy",
                "minister of finance",
                "increase government spending",
                "decrease taxes multiplier"
            ],
            answer:
`Fiscal policy is implemented through government spending and taxation.

Increasing government spending can create a multiplier effect.

Reducing taxes can increase disposable income.

Higher disposable income can increase consumer spending.

These policies can increase aggregate demand.

If aggregate demand grows faster than aggregate supply, demand-pull inflation can occur.`
        },

        {
            title: "Business Cycles — Supply-Side Policy",
            keywords: [
                "supply side policy",
                "deregulation",
                "competition",
                "privatisation",
                "subsidies",
                "skills development"
            ],
            answer:
`Supply-side policies aim to improve the efficiency and productive capacity of markets.

Measures include:

Deregulation:
Reducing unnecessary government intervention.

Competition:
Encouraging competition through policies such as competition legislation and supporting entrepreneurship.

Privatisation:
Moving some activities from government ownership to private ownership can increase competition and efficiency in certain circumstances.

Reducing production costs:
Governments can provide subsidies or reduce unnecessary administrative costs and red tape.

Improving input efficiency:
Policies can include lower tax rates, encouraging modern technology, improving human resources and providing advisory services.

Skills development can improve the productivity and quality of labour.`
        },

        {
            title: "Economic Indicators",
            keywords: [
                "economic indicators",
                "forecasting",
                "leading lagging coincident",
                "composite indicators"
            ],
            answer:
`An economic indicator is a statistic used to provide information about economic activity.

Economic indicators can help economists understand the current condition of an economy and where the economy may be heading.

The main categories are:

• Leading indicators
• Lagging indicators
• Coincident indicators
• Composite indicators.`
        },

        {
            title: "Leading Indicators",
            keywords: [
                "leading indicators",
                "leading indicator",
                "stock market returns",
                "consumer expectations",
                "building permits"
            ],
            answer:
`Leading indicators change before the economy as a whole changes.

They can provide information about where the economy may be heading and may identify turning points before the economy reaches them.

Examples include:

• Stock market returns
• Consumer expectations
• Building permits
• Money supply
• Interest rate spreads
• Manufacturers' new orders
• Job advertising space
• New vehicles sold
• Share prices
• Net new companies registered
• New housing permits
• Real exports of goods
• Foreign reserves
• Commodity prices.

Leading indicators are useful for short-term economic forecasting.`
        },

        {
            title: "Lagging Indicators",
            keywords: [
                "lagging indicators",
                "lagging indicator",
                "unemployment lagging"
            ],
            answer:
`Lagging indicators change after the economy as a whole has changed.

They normally respond to changes in the business cycle after a delay.

Examples include:

• Unemployment rate
• Average duration of unemployment
• Hours worked in construction
• Commercial vehicles sold
• Outstanding commercial and industrial loans
• Change in CPI for services
• Labour cost per unit of output
• Manufacturing and trade inventories relative to sales
• Consumer credit relative to personal income
• Average prime interest rate charged by banks.

Employment and unemployment can respond several quarters after an economic turning point.`
        },

        {
            title: "Coincident Indicators",
            keywords: [
                "coincident indicators",
                "coincident indicator",
                "current economic state"
            ],
            answer:
`Coincident indicators change approximately at the same time as the economy.

They provide information about the current state of economic activity.

Examples include:

• Employees on non-agricultural payrolls
• Personal income less transfer payments
• Industrial production
• Manufacturing and trade sales
• Real retail sales
• Real merchandise imports
• Gross value added at constant prices excluding certain sectors
• Wholesale, retail and new vehicle sales at constant prices.`
        },

        {
            title: "Composite Indicators",
            keywords: [
                "composite indicators",
                "composite indicator",
                "composite index"
            ],
            answer:
`A composite indicator combines several indicators of a similar type into one index.

Leading, coincident and lagging indicators can be combined to provide a broader measure of economic performance.

Composite indicators can also measure multi-dimensional concepts such as competitiveness, electronic trade and environmental quality.

Ideally, the indicators used should be selected and weighted using a sound theoretical framework.`
        },

        {
            title: "Business Cycle Length",
            keywords: [
                "length of business cycle",
                "business cycle length",
                "peak to peak",
                "trough to trough"
            ],
            answer:
`The length of a business cycle is the time needed to complete one cycle.

It can be measured from:

• Peak to peak
or
• Trough to trough.

For example, if successive peaks are ten years apart, the cycle length is approximately ten years.

Longer cycles may indicate that the economic expansion and contraction process takes more time to complete.`
        },

        {
            title: "Business Cycle Amplitude",
            keywords: [
                "amplitude",
                "business cycle amplitude",
                "peak trough difference"
            ],
            answer:
`Amplitude refers to the size or intensity of fluctuations in economic activity.

It can be represented by the difference between output at a peak and output at a trough.

A larger amplitude means larger changes in economic activity.

For example, if inflation rises from 5% to 10%, the inflation rate has increased by 5 percentage points and has doubled relative to its original level.`
        },

        {
            title: "Trend Line",
            keywords: [
                "trend line",
                "business cycle trend",
                "economic trend"
            ],
            answer:
`A trend line shows the general direction in which economic activity is moving over time.

Economists can use historical performance to identify a trend and make forecasts.

The long-term trend is often upward because productive capacity can increase over time.

The trend line can therefore show the general direction and long-term growth potential of output.`
        },

        {
            title: "Extrapolation",
            keywords: [
                "extrapolation",
                "economic forecasting extrapolation",
                "past trend forecast"
            ],
            answer:
`Extrapolation uses past data or trends to estimate future values, assuming that the existing trend continues.

For example, if economic output has been growing at a particular trend after a trough, economists may use the trend to estimate future output.

Extrapolation can also be used for other forecasts, such as future share prices, although forecasts are uncertain.`
        },

        {
            title: "Moving Averages",
            keywords: [
                "moving averages",
                "moving average",
                "arithmetic average",
                "median",
                "mode",
                "geometric average"
            ],
            answer:
`A moving average repeatedly calculates average values over a time series to create a smoother curve.

Common measures of central tendency include:

Arithmetic mean:
Add all values and divide by the number of values.

Example:

4 + 3 + 5 + 7 + 6 + 5 = 30

30 ÷ 6 = 5.

Median:
The middle value when observations are arranged in order.

Example:

23, 24, 25, 26, 27

Median = 25.

Mode:
The value that occurs most frequently.

Geometric mean:
An average based on the product of values and is useful for certain growth-rate calculations.`
        }

    ];


    /* =====================================================
       MATHEMATICS KNOWLEDGE
       ===================================================== */

    const mathematicsKnowledge = [

        {
            title: "Basic Arithmetic",
            keywords: [
                "arithmetic",
                "addition",
                "subtraction",
                "multiplication",
                "division"
            ],
            answer:
`Basic arithmetic includes addition, subtraction, multiplication and division.

Example:

25 + 15 = 40

40 − 15 = 25

5 × 6 = 30

30 ÷ 5 = 6.`
        },

        {
            title: "Fractions",
            keywords: [
                "fraction",
                "fractions",
                "numerator",
                "denominator"
            ],
            answer:
`A fraction represents part of a whole.

Example:

3/4 means 3 parts out of 4 equal parts.

For addition and subtraction, fractions normally need a common denominator.

Example:

1/4 + 2/4 = 3/4.

For multiplication:

2/3 × 3/5 = 6/15 = 2/5.`
        },

        {
            title: "Percentages",
            keywords: [
                "percentage",
                "percentages",
                "percentage increase",
                "percentage decrease"
            ],
            answer:
`A percentage means a value out of 100.

Percentage = Part ÷ Whole × 100.

Example:

20 out of 50:

20 ÷ 50 × 100 = 40%.

Percentage increase:

New value − Old value
—————————————— × 100
Old value

Percentage decrease uses the same structure.`
        },

        {
            title: "Ratios",
            keywords: [
                "ratio",
                "ratios",
                "proportion"
            ],
            answer:
`A ratio compares quantities.

Example:

If there are 2 boys for every 3 girls, the ratio is:

2 : 3.

Ratios can be simplified by dividing both sides by the same number.`
        },

        {
            title: "Exponents",
            keywords: [
                "exponent",
                "exponents",
                "powers",
                "indices"
            ],
            answer:
`An exponent shows how many times a number is multiplied by itself.

2³ = 2 × 2 × 2 = 8.

Important rules include:

aᵐ × aⁿ = aᵐ⁺ⁿ

aᵐ ÷ aⁿ = aᵐ⁻ⁿ

(aᵐ)ⁿ = aᵐⁿ

a⁰ = 1, when a ≠ 0.`
        },

        {
            title: "Surds and Roots",
            keywords: [
                "surds",
                "square root",
                "cube root",
                "roots"
            ],
            answer:
`A square root is a number that produces the original number when multiplied by itself.

√25 = 5 because 5 × 5 = 25.

A surd is an irrational root that cannot be simplified into a whole number or rational number.

For example:

√2

√3

√5.`
        },

        {
            title: "Algebraic Expressions",
            keywords: [
                "algebra",
                "algebraic expression",
                "like terms"
            ],
            answer:
`An algebraic expression contains numbers, variables and mathematical operations.

Example:

3x + 5x − 2

Like terms can be combined:

3x + 5x = 8x.

Therefore:

3x + 5x − 2 = 8x − 2.`
        },

        {
            title: "Expanding Brackets",
            keywords: [
                "expand brackets",
                "expanding brackets",
                "distributive law"
            ],
            answer:
`To expand a bracket, multiply the term outside the bracket by every term inside.

Example:

3(x + 4)

= 3x + 12.

For two brackets:

(x + 2)(x + 3)

= x² + 3x + 2x + 6

= x² + 5x + 6.`
        },

        {
            title: "Factorisation",
            keywords: [
                "factorisation",
                "factorization",
                "factorise",
                "factor"
            ],
            answer:
`Factorisation is the process of writing an expression as a product of factors.

Example:

6x + 12

= 6(x + 2).

For a quadratic:

x² + 5x + 6

= (x + 2)(x + 3).`
        },

        {
            title: "Linear Equations",
            keywords: [
                "linear equation",
                "linear equations",
                "solve for x"
            ],
            answer:
`A linear equation has a variable with a highest power of 1.

Example:

2x + 5 = 15

Subtract 5:

2x = 10

Divide by 2:

x = 5.`
        },

        {
            title: "Simultaneous Equations",
            keywords: [
                "simultaneous equations",
                "simultaneous equation"
            ],
            answer:
`Simultaneous equations are equations that are solved together to find values of two or more unknowns.

Example:

x + y = 10

x − y = 2

Add the equations:

2x = 12

x = 6

Substitute:

6 + y = 10

y = 4.

Answer:

x = 6, y = 4.`
        },

        {
            title: "Quadratic Equations",
            keywords: [
                "quadratic equation",
                "quadratic equations",
                "quadratic formula"
            ],
            answer:
`A quadratic equation normally has the form:

ax² + bx + c = 0.

The quadratic formula is:

x = (-b ± √(b² − 4ac)) ÷ 2a.

The discriminant is:

b² − 4ac.

If the discriminant is positive, there are two distinct real roots.

If it is zero, there is one repeated real root.

If it is negative, there are no real roots.`
        },

        {
            title: "Quadratic Functions",
            keywords: [
                "quadratic function",
                "parabola",
                "turning point"
            ],
            answer:
`A quadratic function has the form:

f(x) = ax² + bx + c.

Its graph is a parabola.

If a > 0, the parabola opens upward.

If a < 0, it opens downward.

The x-coordinate of the turning point is:

x = −b ÷ 2a.`
        },

        {
            title: "Functions",
            keywords: [
                "function",
                "functions",
                "f(x)"
            ],
            answer:
`A function is a rule that assigns each input exactly one output.

For example:

f(x) = 2x + 3.

If x = 4:

f(4) = 2(4) + 3
= 11.`
        },

        {
            title: "Linear Functions",
            keywords: [
                "linear function",
                "straight line",
                "gradient",
                "y intercept"
            ],
            answer:
`A linear function can be written as:

y = mx + c.

m is the gradient.

c is the y-intercept.

The gradient between two points is:

m = (y₂ − y₁) ÷ (x₂ − x₁).`
        },

        {
            title: "Coordinate Geometry",
            keywords: [
                "coordinate geometry",
                "distance formula",
                "midpoint",
                "gradient"
            ],
            answer:
`Important coordinate geometry formulas include:

Gradient:

m = (y₂ − y₁) ÷ (x₂ − x₁)

Distance:

d = √[(x₂ − x₁)² + (y₂ − y₁)²]

Midpoint:

M = ((x₁ + x₂)/2, (y₁ + y₂)/2).`
        },

        {
            title: "Arithmetic Sequences",
            keywords: [
                "arithmetic sequence",
                "arithmetic progression",
                "common difference"
            ],
            answer:
`An arithmetic sequence has a constant difference between consecutive terms.

Example:

3, 7, 11, 15,...

Common difference = 4.

The nth term is:

Tₙ = a + (n − 1)d.

a is the first term.

d is the common difference.`
        },

        {
            title: "Geometric Sequences",
            keywords: [
                "geometric sequence",
                "geometric progression",
                "common ratio"
            ],
            answer:
`A geometric sequence has a constant ratio between consecutive terms.

Example:

2, 6, 18, 54,...

Common ratio = 3.

The nth term is:

Tₙ = arⁿ⁻¹.`
        },

        {
            title: "Financial Mathematics",
            keywords: [
                "financial mathematics",
                "simple interest",
                "compound interest",
                "interest"
            ],
            answer:
`Simple interest:

I = P × i × n

where:

P = principal
i = interest rate
n = number of periods.

Compound interest:

A = P(1 + i)ⁿ

where:

A = final amount
P = initial amount
i = interest rate per period
n = number of periods.`
        },

        {
            title: "Depreciation Mathematics",
            keywords: [
                "mathematical depreciation",
                "depreciation maths",
                "depreciation calculation"
            ],
            answer:
`Straight-line depreciation can be calculated using:

Annual depreciation =
(Cost − Residual Value) ÷ Useful Life.

Example:

Cost = R120 000
Residual value = R20 000
Useful life = 5 years

Annual depreciation:

(R120 000 − R20 000) ÷ 5
= R20 000.`
        },

        {
            title: "Trigonometry",
            keywords: [
                "trigonometry",
                "sin",
                "cos",
                "tan",
                "sine",
                "cosine",
                "tangent"
            ],
            answer:
`For a right-angled triangle:

sin θ = Opposite ÷ Hypotenuse

cos θ = Adjacent ÷ Hypotenuse

tan θ = Opposite ÷ Adjacent

A useful memory aid is:

SOH CAH TOA.`
        },

        {
            title: "Pythagorean Theorem",
            keywords: [
                "pythagorean",
                "pythagoras",
                "right triangle"
            ],
            answer:
`For a right-angled triangle:

a² + b² = c²

where c is the hypotenuse.

Example:

a = 3
b = 4

c² = 3² + 4²
c² = 9 + 16
c² = 25

c = 5.`
        },

        {
            title: "Sine Rule",
            keywords: [
                "sine rule",
                "sine law"
            ],
            answer:
`The sine rule is:

a/sin A = b/sin B = c/sin C.

It is useful when you know certain combinations of sides and opposite angles in a non-right-angled triangle.`
        },

        {
            title: "Cosine Rule",
            keywords: [
                "cosine rule",
                "cosine law"
            ],
            answer:
`The cosine rule can be written as:

a² = b² + c² − 2bc cos A.

It is useful when solving non-right-angled triangles, especially when two sides and the included angle are known.`
        },

        {
            title: "Probability",
            keywords: [
                "probability",
                "probabilities",
                "probability formula"
            ],
            answer:
`Probability measures how likely an event is to occur.

P(A) = Number of favourable outcomes ÷ Total number of possible outcomes.

Probability is between 0 and 1.

0 means impossible.

1 means certain.`
        },

        {
            title: "Complementary Probability",
            keywords: [
                "complementary probability",
                "complement",
                "not probability"
            ],
            answer:
`The probability of an event not occurring is:

P(not A) = 1 − P(A).

Example:

If P(A) = 0.7:

P(not A) = 1 − 0.7
= 0.3.`
        },

        {
            title: "Conditional Probability",
            keywords: [
                "conditional probability",
                "given probability"
            ],
            answer:
`Conditional probability measures the probability of an event occurring given that another event has already occurred.

The formula is:

P(A|B) = P(A and B) ÷ P(B)

provided P(B) is not zero.`
        },

        {
            title: "Statistics",
            keywords: [
                "statistics",
                "mean median mode",
                "range"
            ],
            answer:
`Important statistical measures include:

Mean:
Sum of values ÷ number of values.

Median:
Middle value when the data is arranged in order.

Mode:
Most frequently occurring value.

Range:
Maximum value − Minimum value.`
        },

        {
            title: "Standard Deviation",
            keywords: [
                "standard deviation",
                "variance",
                "spread"
            ],
            answer:
`Standard deviation measures how spread out observations are around the mean.

A small standard deviation means values are generally close to the mean.

A large standard deviation means values are more spread out.

Variance is the square of the standard deviation.`
        },

        {
            title: "Differentiation",
            keywords: [
                "differentiation",
                "derivative",
                "differentiate"
            ],
            answer:
`Differentiation measures the rate at which one variable changes with respect to another.

For:

y = xⁿ

the derivative is:

dy/dx = nxⁿ⁻¹.

Example:

y = x³

dy/dx = 3x².`
        },

        {
            title: "Stationary Points",
            keywords: [
                "stationary point",
                "stationary points",
                "turning points calculus"
            ],
            answer:
`A stationary point occurs where the first derivative is zero.

To find stationary points:

1. Differentiate the function.
2. Set dy/dx = 0.
3. Solve for x.
4. Substitute x into the original function to find y.

The second derivative can help determine whether a stationary point is a local maximum or minimum.`
        },

        {
            title: "Integration",
            keywords: [
                "integration",
                "integrate",
                "antiderivative"
            ],
            answer:
`Integration is the reverse process of differentiation.

For:

∫ xⁿ dx

the result is:

xⁿ⁺¹ ÷ (n + 1) + C,

provided n ≠ −1.

Example:

∫ x² dx

= x³/3 + C.`
        },

        {
            title: "Sets",
            keywords: [
                "sets",
                "set theory",
                "union",
                "intersection"
            ],
            answer:
`A set is a collection of distinct objects.

Important notation:

A ∪ B = union of A and B.

A ∩ B = intersection of A and B.

A' = complement of A.

A set can be represented using listing, set-builder notation or a Venn diagram.`
        },

        {
            title: "Mathematical Modelling",
            keywords: [
                "mathematical modelling",
                "modelling",
                "mathematical model"
            ],
            answer:
`Mathematical modelling uses mathematics to represent a real-world situation.

A basic modelling process is:

1. Identify the real-world problem.
2. Define variables.
3. Make reasonable assumptions.
4. Create a mathematical relationship.
5. Solve the model.
6. Interpret the result.
7. Check whether the result makes sense in the real-world situation.`
        }

    ];


    /* =====================================================
       SUBJECT KEYWORDS
       ===================================================== */

    const subjectKeywords = {

        Accounting: [
            "accounting",
            "account",
            "asset",
            "assets",
            "liability",
            "liabilities",
            "equity",
            "revenue",
            "expense",
            "expenses",
            "profit",
            "loss",
            "inventory",
            "stock",
            "depreciation",
            "vat",
            "audit",
            "auditing",
            "ifrs",
            "ias",
            "financial statement",
            "trial balance",
            "debit",
            "credit",
            "receivable",
            "payable",
            "cash flow",
            "cost of sales",
            "gross profit",
            "net profit",
            "ratio",
            "consolidation",
            "associate"
        ],

        Economics: [
            "economics",
            "economic",
            "scarcity",
            "opportunity cost",
            "demand",
            "supply",
            "equilibrium",
            "elasticity",
            "inflation",
            "unemployment",
            "gdp",
            "economic growth",
            "fiscal",
            "monetary",
            "sarb",
            "interest rate",
            "aggregate demand",
            "aggregate supply",
            "business cycle",
            "business cycles",
            "leading indicator",
            "lagging indicator",
            "coincident",
            "composite",
            "circular flow",
            "four sector",
            "factor market",
            "product market",
            "money market",
            "capital market",
            "foreign exchange",
            "exchange rate",
            "factors of production",
            "entrepreneurship",
            "government spending"
        ],

        Mathematics: [
            "mathematics",
            "math",
            "calculate",
            "calculation",
            "equation",
            "equations",
            "algebra",
            "quadratic",
            "linear",
            "function",
            "functions",
            "fraction",
            "fractions",
            "percentage",
            "percentages",
            "ratio",
            "ratios",
            "exponent",
            "exponents",
            "indices",
            "surd",
            "surds",
            "root",
            "roots",
            "trigonometry",
            "sine",
            "cosine",
            "tangent",
            "pythagoras",
            "probability",
            "statistics",
            "mean",
            "median",
            "mode",
            "standard deviation",
            "differentiation",
            "derivative",
            "integration",
            "sequence",
            "arithmetic sequence",
            "geometric sequence",
            "coordinate geometry",
            "gradient"
        ]

    };


    /* =====================================================
       SUBJECT DETECTION
       ===================================================== */

    function detectSubject(question) {

        const text = question.toLowerCase();

        const scores = {
            Accounting: 0,
            Economics: 0,
            Mathematics: 0
        };


        Object.keys(subjectKeywords).forEach(function (subject) {

            subjectKeywords[subject].forEach(function (keyword) {

                if (text.includes(keyword.toLowerCase())) {
                    scores[subject] += keyword.split(" ").length;
                }

            });

        });


        const sorted = Object.entries(scores)
            .sort(function (a, b) {
                return b[1] - a[1];
            });


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


    /* =====================================================
       KNOWLEDGE SEARCH
       ===================================================== */

    function searchKnowledge(question, knowledge) {

        const text = question.toLowerCase();

        let bestMatch = null;
        let bestScore = 0;


        knowledge.forEach(function (item) {

            let score = 0;


            item.keywords.forEach(function (keyword) {

                const lowerKeyword =
                    keyword.toLowerCase();

                if (text.includes(lowerKeyword)) {

                    score +=
                        lowerKeyword.split(" ").length * 4;

                }

            });


            const titleWords =
                item.title
                    .toLowerCase()
                    .split(/\s+/);


            titleWords.forEach(function (word) {

                if (
                    word.length > 2 &&
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


        return bestMatch;
    }


    /* =====================================================
       GREETINGS
       ===================================================== */

    function isGreeting(question) {

        const text =
            question
                .toLowerCase()
                .trim();


        const greetings = [
            "hi",
            "hello",
            "hey",
            "hey mastercommerce",
            "good morning",
            "good afternoon",
            "good evening"
        ];


        return greetings.includes(text);
    }


    function greetingAnswer() {

        return `Hello. I'm Mastercommerce.

I can help you learn Accounting, Economics and Mathematics.

Ask me a question and I will try to explain it clearly.`;
    }


    /* =====================================================
       DEVELOPER QUESTIONS
       ===================================================== */

    function isDeveloperQuestion(question) {

        const text =
            question.toLowerCase();


        const words = [
            "who made you",
            "who created you",
            "who developed you",
            "developer",
            "founder",
            "who built you",
            "who owns you",
            "what is mastercommerce",
            "tell me about mastercommerce"
        ];


        return words.some(function (word) {
            return text.includes(word);
        });
    }


    function developerAnswer() {

        return `Mastercommerce is an educational platform designed to help learners study Accounting, Economics and Mathematics.

Developer:
${developerInformation.developer}

Founder:
${developerInformation.founder}

Location:
${developerInformation.location}

Education:
${developerInformation.education}

Version:
${developerInformation.version}`;
    }


    /* =====================================================
       CREATE MESSAGE
       ===================================================== */

    function createMessage(text, sender) {

        const message =
            document.createElement("div");

        message.className =
            "message " +
            (sender === "user"
                ? "user-message"
                : "assistant-message");


        const content =
            document.createElement("div");

        content.className =
            "message-content";


        if (sender === "assistant") {

            const label =
                document.createElement("div");

            label.className =
                "message-label";

            label.textContent =
                "Mastercommerce";

            content.appendChild(label);
        }


        const textElement =
            document.createElement("div");

        textElement.textContent =
            text;


        content.appendChild(textElement);
        message.appendChild(content);


        return message;
    }


    /* =====================================================
       SCROLL CHAT
       ===================================================== */

    function scrollToBottom() {

        if (!chatMessages) return;

        requestAnimationFrame(function () {

            chatMessages.scrollTop =
                chatMessages.scrollHeight;

        });

    }


    /* =====================================================
       SHOW WELCOME
       ===================================================== */

    function showWelcome() {

        if (!chatMessages) return;


        chatMessages.innerHTML = `

            <div class="welcome">

                <div class="welcome-logo">
                    M
                </div>

                <h1>
                    What would you like to learn?
                </h1>

                <p class="welcome-subtitle">
                    Ask a question about Accounting,
                    Economics or Mathematics.
                </p>


                <div class="subject-cards">

                    <div class="subject-card">
                        <h3>Accounting</h3>

                        <p>
                            Learn financial accounting,
                            management accounting,
                            auditing, taxation and more.
                        </p>
                    </div>


                    <div class="subject-card">
                        <h3>Economics</h3>

                        <p>
                            Learn demand, supply,
                            inflation, economic growth,
                            circular flow and business cycles.
                        </p>
                    </div>


                    <div class="subject-card">
                        <h3>Mathematics</h3>

                        <p>
                            Learn algebra, functions,
                            probability, statistics,
                            trigonometry and calculus.
                        </p>
                    </div>

                </div>

            </div>

        `;
    }


    /* =====================================================
       ANSWER QUESTION
       ===================================================== */

    function answerQuestion(question) {

        const cleanQuestion =
            question.trim();


        if (!cleanQuestion) {
            return;
        }


        if (isGreeting(cleanQuestion)) {
            return greetingAnswer();
        }


        if (isDeveloperQuestion(cleanQuestion)) {
            return developerAnswer();
        }


        const subject =
            detectSubject(cleanQuestion);


        if (!subject) {

            return `I'm not completely sure which subject you are asking about.

Please mention something related to Accounting, Economics or Mathematics so I can give you a more accurate answer.`;
        }


        let knowledge;


        if (subject === "Accounting") {
            knowledge = accountingKnowledge;
        }

        else if (subject === "Economics") {
            knowledge = economicsKnowledge;
        }

        else {
            knowledge = mathematicsKnowledge;
        }


        const match =
            searchKnowledge(
                cleanQuestion,
                knowledge
            );


        if (match) {

            return match.answer;
        }


        return `I understand that your question is about ${subject}, but I don't have enough information in my current knowledge base to answer that question accurately yet.

Try asking the question in a little more detail.`;
    }


    /* =====================================================
       SEND QUESTION
       ===================================================== */

    function sendQuestion() {

        if (!questionInput || !chatMessages) {
            return;
        }


        const question =
            questionInput.value.trim();


        if (!question) {
            return;
        }


        const welcome =
            chatMessages.querySelector(".welcome");


        if (welcome) {
            welcome.remove();
        }


        const userMessage =
            createMessage(
                question,
                "user"
            );


        chatMessages.appendChild(
            userMessage
        );


        questionInput.value = "";

        questionInput.style.height =
            "auto";


        scrollToBottom();


        /*
         * Small delay makes the interaction
         * feel natural without causing the
         * interface to freeze.
         */

        setTimeout(function () {

            const answer =
                answerQuestion(question);


            const assistantMessage =
                createMessage(
                    answer,
                    "assistant"
                );


            chatMessages.appendChild(
                assistantMessage
            );


            scrollToBottom();

        }, 180);
    }


    /* =====================================================
       NEW CHAT
       ===================================================== */

    function startNewChat() {

        showWelcome();

        if (questionInput) {

            questionInput.value = "";

            questionInput.style.height =
                "auto";

            questionInput.focus();

        }

        closePlusMenu();
        closeSidebar();
    }


    /* =====================================================
       SIDEBAR
       ===================================================== */

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


    function toggleSidebar() {

        if (!sidebar) return;

        if (sidebar.classList.contains("open")) {
            closeSidebar();
        }

        else {
            openSidebar();
        }
    }


    /* =====================================================
       PAGE RENDERING
       ===================================================== */

    function setActiveNav(page) {

        document
            .querySelectorAll(".nav-button")
            .forEach(function (button) {

                button.classList.toggle(
                    "active",
                    button.dataset.page === page
                );

            });

    }


    function showHome() {

        showWelcome();

        setActiveNav("home");

        closeSidebar();
    }


    function showAbout() {

        if (!chatMessages) return;


        chatMessages.innerHTML = `

            <div class="about-page">

                <div class="about-logo">
                    M
                </div>

                <h1>
                    About Mastercommerce
                </h1>

                <p>
                    Mastercommerce is an educational platform
                    designed to help learners understand
                    Accounting, Economics and Mathematics
                    through simple explanations and examples.
                </p>

                <p>
                    The platform is being developed as a
                    learning-focused alternative that can
                    grow with the needs of students.
                </p>


                <div class="about-card">

                    <div class="about-card-row">

                        <span class="about-card-label">
                            Product
                        </span>

                        <span class="about-card-value">
                            Mastercommerce
                        </span>

                    </div>


                    <div class="about-card-row">

                        <span class="about-card-label">
                            Developer
                        </span>

                        <span class="about-card-value">
                            PD | Web & App Development
                        </span>

                    </div>


                    <div class="about-card-row">

                        <span class="about-card-label">
                            Founder
                        </span>

                        <span class="about-card-value">
                            Phungo Dembe Vusani
                        </span>

                    </div>


                    <div class="about-card-row">

                        <span class="about-card-label">
                            Location
                        </span>

                        <span class="about-card-value">
                            Limpopo, South Africa
                        </span>

                    </div>


                    <div class="about-card-row">

                        <span class="about-card-label">
                            Version
                        </span>

                        <span class="about-card-value">
                            v1.0.0
                        </span>

                    </div>

                </div>

            </div>

        `;


        setActiveNav("about");

        closeSidebar();
    }


    /* =====================================================
       SETTINGS
       ===================================================== */

    function showSettings() {

        if (!chatMessages) return;


        chatMessages.innerHTML = `

            <div class="settings-page">

                <h1 class="page-title">
                    Settings
                </h1>

                <p class="page-description">
                    Customize your Mastercommerce
                    learning experience.
                </p>


                <section class="settings-section">

                    <div class="settings-section-title">
                        Appearance
                    </div>


                    <div class="setting-row">

                        <div class="setting-info">

                            <div class="setting-name">
                                Theme
                            </div>

                            <div class="setting-description">
                                Choose light or dark mode.
                            </div>

                        </div>

                        <select
                            class="setting-select"
                            id="themeSelect"
                        >
                            <option value="light">
                                Light
                            </option>

                            <option value="dark">
                                Dark
                            </option>
                        </select>

                    </div>


                    <div class="setting-row">

                        <div class="setting-info">

                            <div class="setting-name">
                                Background
                            </div>

                            <div class="setting-description">
                                Change the main background.
                            </div>

                        </div>

                        <select
                            class="setting-select"
                            id="backgroundSelect"
                        >
                            <option value="white">
                                White
                            </option>

                            <option value="soft-gray">
                                Soft gray
                            </option>

                            <option value="warm">
                                Warm
                            </option>

                            <option value="blue">
                                Soft blue
                            </option>

                            <option value="green">
                                Soft green
                            </option>

                            <option value="lavender">
                                Lavender
                            </option>
                        </select>

                    </div>


                    <div class="setting-row">

                        <div class="setting-info">

                            <div class="setting-name">
                                Font size
                            </div>

                            <div class="setting-description">
                                Adjust text size.
                            </div>

                        </div>

                        <select
                            class="setting-select"
                            id="fontSizeSelect"
                        >
                            <option value="medium">
                                Medium
                            </option>

                            <option value="small">
                                Small
                            </option>

                            <option value="large">
                                Large
                            </option>
                        </select>

                    </div>


                    <div class="setting-row">

                        <div class="setting-info">

                            <div class="setting-name">
                                Reduced animations
                            </div>

                            <div class="setting-description">
                                Reduce interface animations.
                            </div>

                        </div>


                        <label class="setting-toggle">

                            <input
                                type="checkbox"
                                id="reducedMotionToggle"
                            >

                            <span class="toggle-slider"></span>

                        </label>

                    </div>

                </section>


                <section class="settings-section">

                    <div class="settings-section-title">
                        Chat
                    </div>


                    <div class="setting-row">

                        <div class="setting-info">

                            <div class="setting-name">
                                Clear chat
                            </div>

                            <div class="setting-description">
                                Start a fresh learning session.
                            </div>

                        </div>

                        <button
                            class="danger-button"
                            id="clearChatButton"
                            type="button"
                        >
                            Clear
                        </button>

                    </div>

                </section>


                <section class="settings-section">

                    <div class="settings-section-title">
                        Application
                    </div>


                    <div class="setting-row">

                        <div class="setting-info">

                            <div class="setting-name">
                                Reset settings
                            </div>

                            <div class="setting-description">
                                Restore the default appearance.
                            </div>

                        </div>

                        <button
                            class="danger-button"
                            id="resetSettingsButton"
                            type="button"
                        >
                            Reset
                        </button>

                    </div>

                </section>

            </div>

        `;


        setActiveNav("settings");

        initialiseSettingsControls();

        closeSidebar();
    }


    /* =====================================================
       SETTINGS STORAGE
       ===================================================== */

    function getSetting(key, fallback) {

        try {

            const value =
                localStorage.getItem(key);

            return value === null
                ? fallback
                : value;

        }

        catch (error) {

            return fallback;

        }
    }


    function saveSetting(key, value) {

        try {

            localStorage.setItem(
                key,
                value
            );

        }

        catch (error) {

            /* Ignore storage errors */
        }
    }


    /* =====================================================
       APPLY THEME
       ===================================================== */

    function applyTheme(theme) {

        document.body.classList.toggle(
            "dark-mode",
            theme === "dark"
        );

        saveSetting(
            "mastercommerce-theme",
            theme
        );
    }


    /* =====================================================
       APPLY BACKGROUND
       ===================================================== */

    function applyBackground(background) {

        const classes = [
            "bg-soft-gray",
            "bg-warm",
            "bg-blue",
            "bg-green",
            "bg-lavender"
        ];


        classes.forEach(function (className) {

            document.body.classList.remove(
                className
            );

        });


        if (background !== "white") {

            document.body.classList.add(
                "bg-" + background
            );

        }


        saveSetting(
            "mastercommerce-background",
            background
        );
    }


    /* =====================================================
       APPLY FONT SIZE
       ===================================================== */

    function applyFontSize(size) {

        document.body.classList.remove(
            "font-small",
            "font-large"
        );


        if (size === "small") {

            document.body.classList.add(
                "font-small"
            );

        }

        else if (size === "large") {

            document.body.classList.add(
                "font-large"
            );

        }


        saveSetting(
            "mastercommerce-font-size",
            size
        );
    }


    /* =====================================================
       APPLY REDUCED MOTION
       ===================================================== */

    function applyReducedMotion(enabled) {

        document.body.classList.toggle(
            "reduced-motion",
            enabled
        );


        saveSetting(
            "mastercommerce-reduced-motion",
            enabled
                ? "true"
                : "false"
        );
    }


    /* =====================================================
       INITIALISE SETTINGS
       ===================================================== */

    function initialiseSettingsControls() {

        const themeSelect =
            document.getElementById(
                "themeSelect"
            );

        const backgroundSelect =
            document.getElementById(
                "backgroundSelect"
            );

        const fontSizeSelect =
            document.getElementById(
                "fontSizeSelect"
            );

        const reducedMotionToggle =
            document.getElementById(
                "reducedMotionToggle"
            );

        const clearChatButton =
            document.getElementById(
                "clearChatButton"
            );

        const resetSettingsButton =
            document.getElementById(
                "resetSettingsButton"
            );


        const savedTheme =
            getSetting(
                "mastercommerce-theme",
                "light"
            );

        const savedBackground =
            getSetting(
                "mastercommerce-background",
                "white"
            );

        const savedFontSize =
            getSetting(
                "mastercommerce-font-size",
                "medium"
            );

        const savedReducedMotion =
            getSetting(
                "mastercommerce-reduced-motion",
                "false"
            );


        if (themeSelect) {

            themeSelect.value =
                savedTheme;


            themeSelect.onchange =
                function () {

                    applyTheme(
                        themeSelect.value
                    );

                };

        }


        if (backgroundSelect) {

            backgroundSelect.value =
                savedBackground;


            backgroundSelect.onchange =
                function () {

                    applyBackground(
                        backgroundSelect.value
                    );

                };

        }


        if (fontSizeSelect) {

            fontSizeSelect.value =
                savedFontSize;


            fontSizeSelect.onchange =
                function () {

                    applyFontSize(
                        fontSizeSelect.value
                    );

                };

        }


        if (reducedMotionToggle) {

            reducedMotionToggle.checked =
                savedReducedMotion === "true";


            reducedMotionToggle.onchange =
                function () {

                    applyReducedMotion(
                        reducedMotionToggle.checked
                    );

                };

        }


        if (clearChatButton) {

            clearChatButton.onclick =
                function () {

                    startNewChat();

                    showSettings();

                };

        }


        if (resetSettingsButton) {

            resetSettingsButton.onclick =
                function () {

                    applyTheme("light");

                    applyBackground("white");

                    applyFontSize("medium");

                    applyReducedMotion(false);

                    showSettings();

                };

        }

    }


    /* =====================================================
       PLUS MENU
       ===================================================== */

    function openPlusMenu() {

        if (!plusMenu || !plusButton) {
            return;
        }


        plusMenu.classList.add("open");

        plusButton.setAttribute(
            "aria-expanded",
            "true"
        );
    }


    function closePlusMenu() {

        if (!plusMenu || !plusButton) {
            return;
        }


        plusMenu.classList.remove(
            "open"
        );

        plusButton.setAttribute(
            "aria-expanded",
            "false"
        );
    }


    function togglePlusMenu() {

        if (!plusMenu) {
            return;
        }


        if (
            plusMenu.classList.contains(
                "open"
            )
        ) {

            closePlusMenu();

        }

        else {

            openPlusMenu();

        }

    }


    /* =====================================================
       FEATURE NOTICE
       ===================================================== */

    let featureNoticeTimer = null;


    function showFeatureNotice(featureName) {

        if (!featureNotice) {
            return;
        }


        if (featureNoticeText) {

            featureNoticeText.textContent =
                `${featureName} is currently being developed and will be available in a future version of Mastercommerce.`;

        }


        featureNotice.classList.add(
            "show"
        );

        featureNotice.setAttribute(
            "aria-hidden",
            "false"
        );


        clearTimeout(
            featureNoticeTimer
        );


        featureNoticeTimer =
            setTimeout(
                function () {

                    hideFeatureNotice();

                },
                4500
            );
    }


    function hideFeatureNotice() {

        if (!featureNotice) {
            return;
        }


        featureNotice.classList.remove(
            "show"
        );

        featureNotice.setAttribute(
            "aria-hidden",
            "true"
        );


        clearTimeout(
            featureNoticeTimer
        );
    }


    /* =====================================================
       PLUS EVENTS
       ===================================================== */

    if (plusButton) {

        plusButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                togglePlusMenu();

            }
        );

    }


    if (plusMenu) {

        plusMenu.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

            }
        );

    }


    plusOptions.forEach(
        function (option) {

            option.addEventListener(
                "click",
                function () {

                    const feature =
                        option.dataset.feature ||
                        "This feature";

                    closePlusMenu();

                    showFeatureNotice(
                        feature
                    );

                }
            );

        }
    );


    if (featureNoticeClose) {

        featureNoticeClose.addEventListener(
            "click",
            function () {

                hideFeatureNotice();

            }
        );

    }


    /* =====================================================
       SEND EVENTS
       ===================================================== */

    if (sendButton) {

        sendButton.addEventListener(
            "click",
            sendQuestion
        );

    }


    if (questionInput) {

        questionInput.addEventListener(
            "keydown",
            function (event) {

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
            function () {

                questionInput.style.height =
                    "auto";

                questionInput.style.height =
                    Math.min(
                        questionInput.scrollHeight,
                        150
                    ) + "px";

            }
        );

    }


    /* =====================================================
       NEW CHAT
       ===================================================== */

    if (newChatButton) {

        newChatButton.addEventListener(
            "click",
            startNewChat
        );

    }


    /* =====================================================
       NAVIGATION
       ===================================================== */

    document
        .querySelectorAll(".nav-button")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const page =
                        button.dataset.page;


                    if (page === "home") {

                        showHome();

                    }

                    else if (page === "about") {

                        showAbout();

                    }

                    else if (page === "settings") {

                        showSettings();

                    }

                }
            );

        });


    /* =====================================================
       MOBILE SIDEBAR
       ===================================================== */

    if (hamburgerButton) {

        hamburgerButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                toggleSidebar();

            }
        );

    }


    if (sidebarOverlay) {

        sidebarOverlay.addEventListener(
            "click",
            closeSidebar
        );

    }


    /* =====================================================
       CLOSE PLUS MENU WHEN CLICKING OUTSIDE
       ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                plusMenu &&
                plusButton &&
                !plusMenu.contains(
                    event.target
                ) &&
                !plusButton.contains(
                    event.target
                )
            ) {

                closePlusMenu();

            }

        }
    );


    /* =====================================================
       CLOSE SIDEBAR WHEN NAVIGATING
       ===================================================== */

    document
        .querySelectorAll(".nav-button")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                closeSidebar
            );

        });


    /* =====================================================
       LOAD SAVED SETTINGS
       ===================================================== */

    applyTheme(
        getSetting(
            "mastercommerce-theme",
            "light"
        )
    );


    applyBackground(
        getSetting(
            "mastercommerce-background",
            "white"
        )
    );


    applyFontSize(
        getSetting(
            "mastercommerce-font-size",
            "medium"
        )
    );


    applyReducedMotion(
        getSetting(
            "mastercommerce-reduced-motion",
            "false"
        ) === "true"
    );


    /* =====================================================
       INITIAL SCREEN
       ===================================================== */

    showWelcome();

});
