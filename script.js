/* =========================================================
   MASTERCOMMERCE - KNOWLEDGE ENGINE
   Developer: PD | Web & App Development
   Founder: Phungo Dembe Vusani
   Version: v1.0.0
========================================================= */

const developerInformation = {
    product: "Mastercommerce",
    developer: "PD | Web & App Development",
    founder: "Phungo Dembe Vusani",
    location: "Limpopo, South Africa",
    education: "University of Venda - BCom in Accounting",
    version: "v1.0.0"
};


/* =========================================================
   ACCOUNTING KNOWLEDGE
========================================================= */

const accountingKnowledge = [

    {
        title: "What is Accounting?",
        keywords: ["accounting", "meaning of accounting", "what is accounting"],
        answer: `
Accounting is the process of identifying, recording, classifying, summarising and interpreting financial information.

The main purpose of accounting is to provide useful financial information to users so that they can make informed decisions.

Examples of users include owners, managers, investors, banks, government and employees.
        `
    },

    {
        title: "Accounting Equation",
        keywords: ["accounting equation", "assets liabilities equity"],
        answer: `
The basic accounting equation is:

ASSETS = EQUITY + LIABILITIES

Assets are resources owned by the business.

Liabilities are amounts owed by the business.

Equity represents the owner's interest in the business.

Example:

If a business has assets of R100 000 and liabilities of R40 000:

Equity = R100 000 - R40 000
Equity = R60 000.
        `
    },

    {
        title: "Assets",
        keywords: ["asset", "assets", "current assets", "non current assets"],
        answer: `
An asset is a resource controlled by a business because of a past event and from which future economic benefits are expected.

Examples include:
- Cash
- Inventory
- Trade receivables
- Vehicles
- Equipment
- Buildings
- Land
        `
    },

    {
        title: "Liabilities",
        keywords: ["liability", "liabilities", "current liabilities", "non current liabilities"],
        answer: `
A liability is a present obligation of a business arising from past events that is expected to result in an outflow of economic resources.

Examples include:
- Trade payables
- Bank loans
- Accrued expenses
- Mortgage loans
        `
    },

    {
        title: "Equity",
        keywords: ["equity", "owners equity", "owner's equity", "capital"],
        answer: `
Equity is the residual interest in the assets of a business after deducting liabilities.

Formula:

EQUITY = ASSETS - LIABILITIES

Equity can increase through profits and additional capital contributions.

Equity can decrease through losses and drawings.
        `
    },

    {
        title: "Revenue",
        keywords: ["revenue", "income", "sales revenue"],
        answer: `
Revenue is income earned by a business from its normal activities.

Examples include:
- Sales of goods
- Service revenue
- Fees earned

Revenue normally increases equity.
        `
    },

    {
        title: "Expenses",
        keywords: ["expense", "expenses", "business expenses"],
        answer: `
Expenses are decreases in economic benefits during an accounting period.

Examples include:
- Rent
- Salaries
- Electricity
- Insurance
- Advertising
- Depreciation

Expenses normally reduce profit and equity.
        `
    },

    {
        title: "Profit and Loss",
        keywords: ["profit", "loss", "profit and loss", "net profit"],
        answer: `
Profit occurs when income is greater than expenses.

Formula:

PROFIT = INCOME - EXPENSES

A loss occurs when expenses are greater than income.
        `
    },

    {
        title: "Inventory",
        keywords: ["inventory", "stock", "closing inventory"],
        answer: `
Inventory consists of goods held by a business for sale or for use in production.

For a trading business, inventory is normally classified as a current asset.

Examples:
- Clothing held for sale
- Food held for sale
- Electronic products held for sale
        `
    },

    {
        title: "Cost of Sales",
        keywords: ["cost of sales", "cost of goods sold", "cogs"],
        answer: `
Cost of sales is the cost of inventory that has been sold during the accounting period.

Formula:

Opening Inventory
+ Purchases
- Closing Inventory
= Cost of Sales
        `
    },

    {
        title: "Gross Profit",
        keywords: ["gross profit", "gross profit formula"],
        answer: `
Gross profit is calculated as:

GROSS PROFIT = SALES - COST OF SALES

Gross profit shows how much the business earned from trading before operating expenses are deducted.
        `
    },

    {
        title: "Net Profit",
        keywords: ["net profit", "net income"],
        answer: `
Net profit is the profit remaining after all relevant expenses have been deducted from income.

A simple formula is:

NET PROFIT = TOTAL INCOME - TOTAL EXPENSES
        `
    },

    {
        title: "Depreciation",
        keywords: ["depreciation", "depreciation accounting"],
        answer: `
Depreciation is the systematic allocation of the depreciable amount of an asset over its useful life.

Common methods include:
- Straight-line method
- Diminishing balance method
- Units of production method

Depreciation is an expense and normally reduces profit.
        `
    },

    {
        title: "Trade Receivables",
        keywords: ["trade receivables", "debtors", "accounts receivable"],
        answer: `
Trade receivables are customers who owe the business money because they purchased goods or services on credit.

Trade receivables are normally current assets.
        `
    },

    {
        title: "Trade Payables",
        keywords: ["trade payables", "creditors", "accounts payable"],
        answer: `
Trade payables are suppliers to whom the business owes money because goods or services were purchased on credit.

Trade payables are normally current liabilities.
        `
    },

    {
        title: "Cash Flow",
        keywords: ["cash flow", "cash flows", "cash flow statement"],
        answer: `
Cash flow refers to the movement of cash and cash equivalents into and out of a business.

Cash flows are generally classified into:
- Operating activities
- Investing activities
- Financing activities
        `
    },

    {
        title: "VAT",
        keywords: ["vat", "value added tax", "output vat", "input vat"],
        answer: `
VAT means Value-Added Tax.

Output VAT is VAT charged by a business on taxable sales.

Input VAT is VAT paid by a business on qualifying purchases.

VAT payable is generally:

OUTPUT VAT - INPUT VAT
        `
    },

    {
        title: "Financial Statements",
        keywords: ["financial statements", "statement of financial position", "income statement"],
        answer: `
Important financial statements include:

1. Statement of Financial Position
2. Statement of Profit or Loss and Other Comprehensive Income
3. Statement of Changes in Equity
4. Statement of Cash Flows
5. Notes to the Financial Statements

They provide information about the financial performance and position of an entity.
        `
    },

    {
        title: "Double Entry",
        keywords: ["double entry", "debit credit", "debits credits"],
        answer: `
Double-entry accounting means that every transaction affects at least two accounts.

For every transaction:

TOTAL DEBITS = TOTAL CREDITS

Examples:
- An increase in an asset is normally recorded as a debit.
- An increase in a liability is normally recorded as a credit.
        `
    },

    {
        title: "Trial Balance",
        keywords: ["trial balance", "trial balance accounting"],
        answer: `
A trial balance is a list of ledger account balances prepared to check whether total debits equal total credits.

A balanced trial balance does not guarantee that there are no accounting errors.
        `
    },

    {
        title: "Accounting Ratios",
        keywords: ["accounting ratios", "ratios", "acid test", "current ratio", "debt ratio", "inventory turnover", "debtors collection"],
        answer: `
Common accounting ratios include:

Current ratio:
Current Assets / Current Liabilities

Acid-test ratio:
(Current Assets - Inventory) / Current Liabilities

Debt ratio:
Total Liabilities / Total Assets × 100

Gross profit margin:
Gross Profit / Sales × 100

Net profit margin:
Net Profit / Sales × 100

Debtors collection period:
Average Trade Receivables / Credit Sales × 365

Inventory turnover:
Cost of Sales / Average Inventory
        `
    },

    {
        title: "IFRS",
        keywords: ["ifrs", "international financial reporting standards", "financial reporting"],
        answer: `
IFRS means International Financial Reporting Standards.

IFRS provides accounting and financial reporting requirements intended to improve consistency and comparability of financial statements.

Examples include IFRS 9, IFRS 10, IFRS 15 and IFRS 16.
        `
    },

    {
        title: "Audit",
        keywords: ["audit", "auditing", "auditor", "audit evidence"],
        answer: `
An audit is an independent examination of financial information.

The auditor obtains sufficient appropriate audit evidence to support conclusions and provides an audit opinion on the financial statements.

Auditing also involves assessing risks of material misstatement.
        `
    }

];


/* =========================================================
   ECONOMICS KNOWLEDGE
========================================================= */

const economicsKnowledge = [

    {
        title: "What is Economics?",
        keywords: ["economics", "meaning of economics", "what is economics"],
        answer: `
Economics is the study of how individuals, businesses and governments make choices about scarce resources that have alternative uses.

The basic economic problem is scarcity.

Because resources are limited while human wants are unlimited, choices must be made.
        `
    },

    {
        title: "Scarcity",
        keywords: ["scarcity", "economic scarcity"],
        answer: `
Scarcity means that resources are limited while human wants are unlimited.

Because of scarcity, individuals, businesses and governments must make choices about how resources should be used.
        `
    },

    {
        title: "Opportunity Cost",
        keywords: ["opportunity cost", "cost of choice"],
        answer: `
Opportunity cost is the value of the next best alternative that is given up when a choice is made.

Example:

If you use R500 to buy a textbook instead of buying clothes, the clothes are the opportunity cost if they were the next best alternative.
        `
    },

    {
        title: "Demand",
        keywords: ["demand", "law of demand", "demand curve"],
        answer: `
Demand refers to the quantity of a good or service that consumers are willing and able to buy at different prices during a particular period.

The law of demand generally states that, other things remaining constant, quantity demanded decreases when price increases and increases when price decreases.
        `
    },

    {
        title: "Supply",
        keywords: ["supply", "law of supply", "supply curve"],
        answer: `
Supply refers to the quantity of a good or service that producers are willing and able to sell at different prices during a particular period.

The law of supply generally states that, other things remaining constant, quantity supplied increases when price increases.
        `
    },

    {
        title: "Market Equilibrium",
        keywords: ["equilibrium", "market equilibrium", "equilibrium price"],
        answer: `
Market equilibrium occurs where quantity demanded equals quantity supplied.

The equilibrium price is the price at which the quantity consumers want to buy equals the quantity producers want to sell.
        `
    },

    {
        title: "Elasticity",
        keywords: ["elasticity", "price elasticity", "income elasticity", "cross elasticity"],
        answer: `
Elasticity measures how responsive one variable is to a change in another variable.

Price elasticity of demand measures how responsive quantity demanded is to a change in price.

PED = % Change in Quantity Demanded / % Change in Price
        `
    },

    {
        title: "Inflation",
        keywords: ["inflation", "inflation rate", "price level"],
        answer: `
Inflation is a sustained increase in the general price level of goods and services over time.

Inflation reduces the purchasing power of money.

One major measure used to track consumer price changes is the Consumer Price Index (CPI).
        `
    },

    {
        title: "Unemployment",
        keywords: ["unemployment", "unemployment rate", "joblessness"],
        answer: `
Unemployment occurs when people who are willing and able to work are without jobs and are actively seeking employment.

Types can include:
- Frictional unemployment
- Structural unemployment
- Cyclical unemployment
- Seasonal unemployment
        `
    },

    {
        title: "Economic Growth",
        keywords: ["economic growth", "growth", "real gdp growth"],
        answer: `
Economic growth refers to an increase in the productive capacity or real output of an economy over time.

Real GDP is commonly used to measure changes in economic output.
        `
    },

    {
        title: "GDP",
        keywords: ["gdp", "gross domestic product", "real gdp"],
        answer: `
GDP means Gross Domestic Product.

It measures the monetary value of final goods and services produced within a country's borders during a particular period.
        `
    },

    {
        title: "Fiscal Policy",
        keywords: ["fiscal policy", "government spending", "taxes", "minister of finance"],
        answer: `
Fiscal policy refers to the use of government spending and taxation to influence economic activity.

Expansionary fiscal policy can involve:
- Increasing government spending
- Decreasing taxes

Contractionary fiscal policy can involve:
- Decreasing government spending
- Increasing taxes
        `
    },

    {
        title: "Monetary Policy",
        keywords: ["monetary policy", "interest rates", "money supply", "sarb", "reserve bank"],
        answer: `
Monetary policy is the use of monetary instruments to influence economic activity, inflation and financial conditions.

In South Africa, monetary policy is conducted by the South African Reserve Bank.

For example, reducing interest rates can encourage borrowing and spending, while increasing interest rates can reduce borrowing and spending.
        `
    },

    {
        title: "Factors of Production",
        keywords: ["factors of production", "land labour capital entrepreneurship"],
        answer: `
The four factors of production are:

1. Land
2. Labour
3. Capital
4. Entrepreneurship

Their rewards are generally:
- Land → rent
- Labour → wages
- Capital → interest
- Entrepreneurship → profit
        `
    },


    /* =====================================================
       CIRCULAR FLOW
    ===================================================== */

    {
        title: "Circular Flow - Four Sector Model",
        keywords: [
            "circular flow",
            "circular flow model",
            "four sector model",
            "four-sector model",
            "markets in four sector",
            "product market",
            "goods market",
            "factor market",
            "resource market",
            "money market",
            "financial market",
            "capital market",
            "foreign exchange market",
            "circular flow essay",
            "circular flow memorandum",
            "discuss circular flow",
            "four sector essay"
        ],
        answer: `
CIRCULAR FLOW

Discuss in detail the markets within the FOUR-SECTOR model.

PRODUCT / GOODS MARKET

Goods and services are traded on the product market.

Households, government and the foreign sector purchase goods from firms.

Goods are tangible products such as:
- Computers
- Paper
- Bread

Services are non-tangible actions that satisfy needs and wants.

Examples include:
- Accountants
- Teachers
- Doctors
- Drivers

Supply and demand determine the equilibrium price and quantity in the product market.

Households purchase consumer goods, while businesses purchase capital goods for production.

Consumer goods can be classified according to their durability:

Non-durable goods:
These cannot be re-used and are normally consumed quickly.
Example: an apple.

Semi-durable goods:
These last for a short period but can be used more than once.
Example: chalk.

Durable goods:
These normally last for more than a year because they do not wear out easily.
Example: a chalk-board.


FACTOR / RESOURCES MARKET

The four factors of production are:
- Land
- Labour
- Capital
- Entrepreneurship

These factors are traded for income in the form of:
- Wages and salaries
- Interest
- Economic rent
- Profit

The price and quantity of factors are determined by demand and supply.


MONEY MARKET

The money market is used for borrowing and lending over the short term, from a few days to just less than three years.

It is a market for short-term savings and loans.

Examples of securities include:
- Treasury bills
- Reserve Bank debentures
- Banker's acceptances
- Short-term government bonds
- Short-term company debentures


FINANCIAL MARKET

The financial market consists of institutions such as:
- Banks
- Pension funds
- Insurance companies
- JSE

Financial markets channel funds from surplus units to deficit units.

Surplus units are firms or households that do not spend all their income. They are savers.

Savers can deposit their surplus funds with financial institutions. These institutions can then lend funds to deficit units.

Deficit units are households, firms and government that require additional funds. They are borrowers.

The South African Reserve Bank is an important institution in the money market.


CAPITAL MARKET

The capital market is a financial market where individuals and institutions trade financial securities over the long term.

The period is generally three years and above.

It includes long-term deposits and borrowings such as mortgage bonds.

The JSE is an important institution in the capital market.


FOREIGN EXCHANGE MARKET

In an open economy, foreign currency is needed for international transactions.

The foreign exchange market is where one currency is exchanged for another.

For example:

South African Rand → British Pound

The amount of foreign currency received depends on the exchange rate.

Exchange rates are generally influenced by demand and supply.

The central bank may also influence the exchange rate directly or indirectly.

Foreign currency can be obtained through commercial banks in South Africa, such as:
- FNB
- ABSA
- Nedbank
- Standard Bank


SUMMARY

The four-sector circular flow model shows the interaction between households, firms, government and the foreign sector.

The different markets connect these participants by allowing goods, services, factors of production and financial resources to flow through the economy.
        `
    },


    /* =====================================================
       BUSINESS CYCLES
    ===================================================== */

    {
        title: "Business Cycles - New Economic Paradigm and Smoothing of Cycles",

        keywords: [
            "business cycle",
            "business cycles",
            "new economic paradigm",
            "smoothing of cycles",
            "smooth business cycle",
            "demand side policies",
            "demand-side policies",
            "supply side policies",
            "supply-side policies",
            "expansionary monetary policy",
            "contractionary monetary policy",
            "expansionary fiscal policy",
            "contractionary fiscal policy",
            "phillips curve",
            "peak",
            "trough",
            "recession",
            "unemployment",
            "demand pull inflation",
            "aggregate demand",
            "aggregate supply"
        ],

        answer: `
BUSINESS CYCLES

THE NEW ECONOMIC PARADIGM / SMOOTHING OF CYCLES

In the new economic paradigm, or new way of thinking, government focuses less on fine-tuning the economy and more on eliminating uncertainties regarding fiscal and monetary policies.

Government can increase output by combining demand-side and supply-side policies.


DEMAND-SIDE POLICIES

Demand-side policies aim to increase aggregate demand.

These policies are particularly useful during a recession or a period of below-trend growth.

If there is spare capacity, meaning a negative output gap, demand-side policies can help increase the rate of economic growth.

However, if the economy is already close to full capacity, a further increase in aggregate demand will mainly cause inflation.

Monetary and fiscal policies are implemented with the aim of increasing aggregate demand for the output produced by domestic firms and stimulating economic growth.


EXPANSIONARY MONETARY POLICY

Monetary policy is executed through the South African Reserve Bank.

The central bank can:

- Decrease interest rates to make credit cheaper.
- Increase the money supply.

Lower interest rates can encourage borrowing and consumer spending.

An increase in spending increases demand for goods and services.

Therefore:

Lower interest rates
→ More borrowing
→ More spending
→ Higher aggregate demand
→ Higher economic activity


EXPANSIONARY FISCAL POLICY

Fiscal policy is executed by the Minister of Finance.

The Minister of Finance can:

- Increase government spending.
- Decrease taxes.

An increase in government spending can create a multiplier effect.

A decrease in taxes increases disposable income.

Higher disposable income can increase consumer spending.

Therefore:

Higher government spending / lower taxes
→ Higher disposable income and spending
→ Higher aggregate demand
→ Higher output and employment


WHEN DEMAND BECOMES TOO HIGH

If aggregate demand exceeds aggregate supply, or aggregate demand increases faster than aggregate supply, demand-pull inflation can occur.

This means that expansionary policies are more suitable when there is spare capacity.

If the economy is already near full capacity, increasing aggregate demand can create inflationary pressure.


CONTRACTIONARY MONETARY POLICY

During periods of excessive inflation, monetary policy can be tightened.

The central bank can increase interest rates.

Higher interest rates make borrowing more expensive and can reduce consumer and business spending.

Therefore:

Higher interest rates
→ Less borrowing
→ Less spending
→ Lower aggregate demand
→ Reduced inflationary pressure


CONTRACTIONARY FISCAL POLICY

Government can also reduce aggregate demand through contractionary fiscal policy.

This can involve:

- Reducing government spending.
- Increasing taxes.

Higher taxes reduce disposable income.

Lower government spending and lower disposable income can reduce aggregate demand.

This can help reduce inflationary pressure.


BUSINESS CYCLE AND UNEMPLOYMENT

During a trough or recession, economic activity is low and unemployment can be high.

Expansionary demand-side policies can increase aggregate demand.

Higher demand can encourage firms to increase production.

Higher production can increase the demand for labour.

This can help reduce cyclical unemployment.


BUSINESS CYCLE AND INFLATION

At or near the peak of a business cycle, economic activity can be high.

If aggregate demand grows faster than the economy's productive capacity, inflationary pressure can increase.

Contractionary monetary and fiscal policies can be used to reduce excessive aggregate demand.


PHILLIPS CURVE

The Phillips curve is used to illustrate the relationship between inflation and unemployment.

In the short run, there can be an inverse relationship between inflation and unemployment.

Generally:

Higher aggregate demand
→ Higher output and employment
→ Lower unemployment
→ Greater inflationary pressure

Lower aggregate demand
→ Lower output and employment
→ Higher unemployment
→ Lower inflationary pressure

The Phillips curve can therefore be related to the use of demand-side policies to smooth business cycles.


SUPPLY-SIDE POLICIES

Supply-side policies aim to increase the productive capacity and efficiency of the economy.

Government can stimulate aggregate supply through:

1. Reduction in costs
2. Improving efficiency in inputs
3. Improving efficiency in markets


REDUCTION IN PRODUCTION COSTS

Government can reduce production costs through:

SUBSIDIES:
Subsidies can reduce the cost of production for firms.

REDUCING ADMINISTRATIVE COSTS:
Government can reduce unnecessary administrative costs and red tape.

Lower production costs can encourage firms to produce more.


IMPROVING EFFICIENCY IN INPUTS

Government can improve the efficiency of inputs through:

- Decreasing tax rates.
- Encouraging firms to use modern technology.
- Improving the quality of human resources through the Skills Development Act.
- Providing free advisory services.

Better skills and technology can increase productivity and productive capacity.


IMPROVING EFFICIENCY IN MARKETS

Government can make markets more competitive through:

DEREGULATION:
Reducing unnecessary government intervention.

COMPETITION:
Encouraging competition by implementing and monitoring the Competition Act.

Competition can also be encouraged by supporting entrepreneurship.

PRIVATISATION:
Privatisation can help increase competition by allowing private firms to participate in activities previously controlled by the state.


OVERALL EFFECT OF SUPPLY-SIDE POLICIES

Supply-side policies can increase aggregate supply and productive capacity.

This can allow the economy to produce more goods and services without creating the same level of inflationary pressure that may occur when aggregate demand is increased while the economy is already close to full capacity.
        `
    },


    {
        title: "Business Cycles - Economic Indicators and Forecasting",

        keywords: [
            "economic indicators",
            "indicators",
            "forecasting",
            "leading indicators",
            "lagging indicators",
            "coincident indicators",
            "coincidence indicators",
            "composite indicators",
            "length of business cycle",
            "amplitude",
            "trend line",
            "trend line business cycle",
            "extrapolation",
            "moving averages",
            "business cycle forecasting",
            "forecast business cycle"
        ],

        answer: `
ECONOMIC INDICATORS USED FOR FORECASTING

An economic indicator is a statistic about economic activity, usually of a macroeconomic scale.

Economic indicators are used to interpret the overall health of the economy, either currently or in the future.

They show the direction in which the economy is moving.

Economic indicators can be classified into:

- Leading indicators
- Lagging indicators
- Coincident indicators
- Composite indicators


LEADING INDICATORS

Leading indicators usually change before the economy as a whole changes.

They show where the economy is going.

They arrive at turning points, such as peaks and troughs, before the economy does.

They are therefore useful as short-term predictors of economic activity.

Example:

Stock market returns are a leading indicator because the stock market can begin to decline before the economy as a whole declines and can begin to improve before the general economy recovers from a slump.

Other leading indicators include:
- Index of consumer expectations
- Building permits
- Money supply

Examples of leading indicators include:

- Job advertising space
- Inventory and sales
- Average weekly hours in manufacturing
- Average weekly jobless claims for unemployment insurance
- Manufacturers' new orders for consumer goods/materials
- Vendor performance
- Manufacturers' new orders for non-defence capital goods
- Building permits for new private housing units
- Money supply
- Interest rate spread
- Index of consumer expectations
- Net new companies registered
- Number of new vehicles sold
- Net gold and other foreign reserves
- Share prices
- Real exports of goods, excluding gold
- Gross operating surplus as a percentage of GDP
- Commodity prices in US dollars for a basket of South African export commodities


LAGGING INDICATORS

Lagging indicators usually change after the economy as a whole changes.

They reach their peaks after the level of economic activity and coincident indicators.

The lag is typically a few quarters.

The unemployment rate is an example of a lagging indicator because employment tends to increase after an upturn in the general economy.

Lagging indicators do not normally change direction until after the business cycle has already changed direction.

Examples include:

- Hours worked in construction
- Total commercial vehicles sold
- Average duration of unemployment
- Value of outstanding commercial and industrial loans
- Change in the Consumer Price Index for services
- Change in labour cost per unit of output
- Ratio of manufacturing and trade inventories to sales
- Ratio of consumer credit outstanding to personal income
- Average prime rate charged by banks


COINCIDENT INDICATORS

Coincident indicators change at approximately the same time as the economy as a whole.

They provide information about the current state of the economy.

A coincident index can be used to identify, after the fact, the dates of peaks and troughs in the business cycle.

Examples include:

- Number of employees on non-agricultural payrolls
- Personal income less transfer payments
- Industrial production
- Manufacturing and trade sales
- Real retail sales
- Real merchandise imports
- Gross value added at constant prices excluding agriculture, forestry and fishing
- Value of wholesale, retail and new vehicle sales at constant prices


COMPOSITE INDICATORS

A composite indicator is a summary of various indicators of the same type into one single index.

The three composite indicators, namely leading, lagging and coincident indicators, can be used to calculate a single composite indicator to benchmark a country's economic performance.

A composite indicator can measure multi-dimensional concepts such as:

- Competitiveness
- E-trade
- Environmental quality

These concepts cannot always be captured by a single indicator.

Ideally, a composite indicator should be based on a theoretical framework that allows individual indicators to be selected, combined and weighted in a way that reflects the dimensions or structure of the economy being measured.


THE LENGTH OF A BUSINESS CYCLE

The length of a business cycle is the time it takes for a business cycle to move through one complete cycle.

It can be measured from:

- Peak to peak
OR
- Trough to trough

Example:

If a business cycle has a length of 10 years, there would be approximately 10 years between successive peaks or troughs.

Longer cycles show strength.

Cycles can also overshoot.

Ways to measure length include:

- Crisis to crisis
- Historical records
- Consensus based on business experience


AMPLITUDE

Amplitude is the difference between total output at a peak and a trough.

It measures the distance of the oscillation of an economic variable from the trend line.

It represents the intensity or height of the upswing and downswing in economic activity.

A large amplitude during an upswing indicates strong underlying forces, which can result in longer cycles.

The larger the amplitude, the more extreme the changes that may occur.

Example:

During an upswing, inflation may increase from 5% to 10%.

This represents a 100% increase in the inflation rate.


THE TREND LINE OF A BUSINESS CYCLE

A trend line shows the general direction in which economic fluctuations appear to be heading.

Economists examine economic performance over previous years and use it to estimate the future trend.

The trend line usually has a positive slope because the production capacity of the economy tends to increase over time.

The trend line is also known as the long-term growth potential of the economy.

Trends are useful because they show the general direction in which the economy is moving and indicate the rate at which output is increasing or decreasing.


EXTRAPOLATION

Extrapolation involves using past data and assuming that an observed trend will continue in order to make predictions about the future.

It means estimating something unknown using facts or information that are already known.

Example:

If it becomes clear that the business cycle has passed through a trough and entered a boom phase, forecasters might predict that the economy will continue growing in the months that follow.

Extrapolation can also be used to make predictions in other settings, such as future share prices.


MOVING AVERAGES

A moving average is a method of repeatedly calculating a series of different average values along a time series to produce a smoother curve.

Moving averages help reduce short-term fluctuations and make the underlying trend easier to identify.


FOUR MAIN TYPES OF AVERAGE

ARITHMETIC MEAN

The arithmetic mean is calculated by adding all values and dividing by the number of values.

Example:

4 + 3 + 5 + 7 + 6 + 5 = 30

30 ÷ 6 = 5

Therefore, the arithmetic mean is 5.


MEDIAN

The median is the middle value when data is arranged in order.

Example:

23, 24, 25, 26, 27

The median is 25.


MODE

The mode is the number or value that occurs most often in a data set.


GEOMETRIC MEAN

The geometric mean is a type of average that indicates the central tendency or typical value of a set of numbers by using the product of their values.

It is particularly useful for certain types of growth rates and proportional changes.


SUMMARY FOR FORECASTING

Leading indicators:
Change before the economy.

Coincident indicators:
Change at approximately the same time as the economy.

Lagging indicators:
Change after the economy.

Composite indicators:
Combine several indicators into a single index.

Length:
Measures the duration of a complete business cycle.

Amplitude:
Measures the size or intensity of fluctuations.

Trend line:
Shows the general long-term direction of economic activity.

Extrapolation:
Uses past trends to estimate future outcomes.

Moving averages:
Smooth time-series data to make trends easier to identify.
        `
    }

];


/* =========================================================
   MATHEMATICS KNOWLEDGE
========================================================= */

const mathematicsKnowledge = [

    {
        title: "Basic Arithmetic",
        keywords: ["arithmetic", "addition", "subtraction", "multiplication", "division", "calculate"],
        answer: `
Basic arithmetic involves addition, subtraction, multiplication and division.

Example:

25 + 15 = 40

50 - 20 = 30

8 × 5 = 40

40 ÷ 8 = 5
        `
    },

    {
        title: "Fractions",
        keywords: ["fraction", "fractions", "numerator", "denominator"],
        answer: `
A fraction represents part of a whole.

Example:

3/4 means 3 parts out of 4 equal parts.

To add fractions with the same denominator:

2/5 + 1/5 = 3/5.
        `
    },

    {
        title: "Percentages",
        keywords: ["percentage", "percentages", "percent", "%"],
        answer: `
To calculate a percentage:

Percentage = (Part / Whole) × 100

Example:

25 out of 100:

(25 / 100) × 100 = 25%

To calculate 20% of R500:

20/100 × 500 = R100.
        `
    },

    {
        title: "Ratios",
        keywords: ["ratio", "ratios", "proportion"],
        answer: `
A ratio compares two or more quantities.

Example:

If there are 2 boys for every 3 girls, the ratio is:

2 : 3
        `
    },

    {
        title: "Exponents",
        keywords: ["exponent", "exponents", "powers", "indices"],
        answer: `
An exponent shows how many times a number is multiplied by itself.

Example:

2³ = 2 × 2 × 2 = 8.

Important laws include:

aᵐ × aⁿ = aᵐ⁺ⁿ

aᵐ ÷ aⁿ = aᵐ⁻ⁿ

(aᵐ)ⁿ = aᵐⁿ
        `
    },

    {
        title: "Surds and Roots",
        keywords: ["surd", "surds", "square root", "roots", "cube root"],
        answer: `
A square root is a number that produces the original number when multiplied by itself.

√25 = 5 because:

5 × 5 = 25.

Surds are irrational roots that cannot be simplified into whole numbers.
        `
    },

    {
        title: "Algebraic Expressions",
        keywords: ["algebra", "algebraic expression", "variables", "terms", "coefficient"],
        answer: `
An algebraic expression contains numbers, variables and mathematical operations.

Example:

3x + 5

Here:
3 is the coefficient,
x is the variable,
5 is the constant.
        `
    },

    {
        title: "Expanding Brackets",
        keywords: ["expand", "expanding brackets", "brackets"],
        answer: `
Use multiplication to remove brackets.

Example:

3(x + 2)

= 3x + 6.
        `
    },

    {
        title: "Factorisation",
        keywords: ["factorisation", "factorization", "factorise", "factorize"],
        answer: `
Factorisation means writing an expression as a product of factors.

Example:

x² + 5x + 6

= (x + 2)(x + 3).
        `
    },

    {
        title: "Linear Equations",
        keywords: ["linear equation", "solve equation", "equations"],
        answer: `
Example:

2x + 4 = 10

Subtract 4:

2x = 6

Divide by 2:

x = 3.
        `
    },

    {
        title: "Simultaneous Equations",
        keywords: ["simultaneous equations", "simultaneous equation"],
        answer: `
Simultaneous equations are solved together.

Example:

x + y = 10
x - y = 2

Adding the equations:

2x = 12

x = 6

Then:

y = 4.
        `
    },

    {
        title: "Quadratic Equations",
        keywords: ["quadratic equation", "quadratics", "quadratic formula"],
        answer: `
A quadratic equation usually has the form:

ax² + bx + c = 0

The quadratic formula is:

x = [-b ± √(b² - 4ac)] / 2a
        `
    },

    {
        title: "Quadratic Functions",
        keywords: ["quadratic function", "parabola", "turning point"],
        answer: `
A quadratic function normally has the form:

y = ax² + bx + c

Its graph is a parabola.

If a > 0, the parabola opens upward.

If a < 0, the parabola opens downward.
        `
    },

    {
        title: "Functions",
        keywords: ["function", "functions", "f(x)"],
        answer: `
A function assigns an output to an input.

Example:

f(x) = 2x + 3

If x = 4:

f(4) = 2(4) + 3
= 11.
        `
    },

    {
        title: "Linear Functions",
        keywords: ["linear function", "straight line", "gradient", "slope"],
        answer: `
A linear function can be written as:

y = mx + c

m is the gradient.

c is the y-intercept.

Gradient:

m = (y₂ - y₁) / (x₂ - x₁).
        `
    },

    {
        title: "Coordinate Geometry",
        keywords: ["coordinate geometry", "coordinates", "distance formula", "midpoint"],
        answer: `
Important formulas:

Distance:

d = √[(x₂-x₁)² + (y₂-y₁)²]

Midpoint:

M = ((x₁+x₂)/2 , (y₁+y₂)/2)

Gradient:

m = (y₂-y₁)/(x₂-x₁)
        `
    },

    {
        title: "Arithmetic Sequences",
        keywords: ["arithmetic sequence", "arithmetic sequences", "common difference"],
        answer: `
An arithmetic sequence has a constant difference between consecutive terms.

Formula:

Tₙ = a + (n - 1)d

where:
a = first term
d = common difference
n = term number.
        `
    },

    {
        title: "Geometric Sequences",
        keywords: ["geometric sequence", "geometric sequences", "common ratio"],
        answer: `
A geometric sequence has a constant ratio between consecutive terms.

Formula:

Tₙ = arⁿ⁻¹

where:
a = first term
r = common ratio.
        `
    },

    {
        title: "Financial Mathematics",
        keywords: ["financial mathematics", "compound interest", "simple interest", "interest"],
        answer: `
Simple interest:

A = P(1 + in)

Compound interest:

A = P(1 + i)ⁿ

where:
P = principal
i = interest rate per period
n = number of periods
A = final amount.
        `
    },

    {
        title: "Depreciation Mathematics",
        keywords: ["depreciation mathematics", "depreciation formula", "straight line depreciation"],
        answer: `
Straight-line depreciation:

Annual depreciation =
(Cost - Residual Value) / Useful Life

Example:

Cost = R100 000
Residual value = R10 000
Useful life = 5 years

Annual depreciation:

(R100 000 - R10 000) / 5
= R18 000.
        `
    },

    {
        title: "Trigonometry",
        keywords: ["trigonometry", "sine", "cosine", "tangent", "sin", "cos", "tan"],
        answer: `
For a right-angled triangle:

SOH:
sin θ = Opposite / Hypotenuse

CAH:
cos θ = Adjacent / Hypotenuse

TOA:
tan θ = Opposite / Adjacent.
        `
    },

    {
        title: "Pythagorean Theorem",
        keywords: ["pythagorean theorem", "pythagoras", "right triangle"],
        answer: `
For a right-angled triangle:

a² + b² = c²

where c is the hypotenuse.
        `
    },

    {
        title: "Sine Rule",
        keywords: ["sine rule", "sine law"],
        answer: `
The sine rule is:

a/sin A = b/sin B = c/sin C.
        `
    },

    {
        title: "Cosine Rule",
        keywords: ["cosine rule", "cosine law"],
        answer: `
The cosine rule is:

a² = b² + c² - 2bc cos A.
        `
    },

    {
        title: "Probability",
        keywords: ["probability", "probability formula", "chance"],
        answer: `
Probability measures the likelihood that an event will occur.

P(Event) = Number of favourable outcomes / Total number of possible outcomes.

Probability is between 0 and 1.
        `
    },

    {
        title: "Complementary Probability",
        keywords: ["complementary probability", "complement"],
        answer: `
The probability of an event not occurring is:

P(not A) = 1 - P(A).
        `
    },

    {
        title: "Conditional Probability",
        keywords: ["conditional probability", "given probability"],
        answer: `
Conditional probability is the probability of one event occurring given that another event has already occurred.

Formula:

P(A|B) = P(A and B) / P(B).
        `
    },

    {
        title: "Statistics",
        keywords: ["statistics", "mean median mode", "data"],
        answer: `
Statistics involves collecting, organising, analysing and interpreting data.

Important measures include:
- Mean
- Median
- Mode
- Range
- Variance
- Standard deviation.
        `
    },

    {
        title: "Standard Deviation",
        keywords: ["standard deviation", "variance"],
        answer: `
Standard deviation measures how spread out data values are around the mean.

A small standard deviation means values are generally close to the mean.

A large standard deviation means values are more spread out.
        `
    },

    {
        title: "Differentiation",
        keywords: ["differentiation", "derivative", "differentiate"],
        answer: `
Differentiation measures the rate at which a function changes.

For:

y = xⁿ

the derivative is:

dy/dx = nxⁿ⁻¹.

Example:

y = x³

dy/dx = 3x².
        `
    },

    {
        title: "Stationary Points",
        keywords: ["stationary point", "stationary points", "turning points"],
        answer: `
Stationary points occur where the first derivative is zero.

Therefore:

dy/dx = 0.

The point can then be classified using the second derivative or other methods.
        `
    },

    {
        title: "Integration",
        keywords: ["integration", "integral", "integrate"],
        answer: `
Integration is the reverse process of differentiation.

For:

∫xⁿ dx

the result is:

xⁿ⁺¹ / (n+1) + C

where C is the constant of integration.
        `
    },

    {
        title: "Sets",
        keywords: ["sets", "set theory", "union", "intersection"],
        answer: `
A set is a collection of clearly defined objects.

Union:

A ∪ B

contains elements in A or B.

Intersection:

A ∩ B

contains elements common to both A and B.
        `
    },

    {
        title: "Mathematical Modelling",
        keywords: ["mathematical modelling", "mathematical model", "modelling"],
        answer: `
Mathematical modelling uses mathematics to represent real-world situations.

The general process is:

1. Identify the problem.
2. Define variables.
3. Create a mathematical model.
4. Solve the model.
5. Interpret the result.
6. Check whether the model makes sense.
        `
    }

];


/* =========================================================
   SUBJECT KEYWORDS
========================================================= */

const subjectKeywords = {

    accounting: [
        "accounting",
        "audit",
        "auditing",
        "financial statement",
        "balance sheet",
        "statement of financial position",
        "income statement",
        "profit",
        "loss",
        "asset",
        "assets",
        "liability",
        "liabilities",
        "equity",
        "revenue",
        "expense",
        "inventory",
        "stock",
        "vat",
        "tax",
        "depreciation",
        "receivables",
        "payables",
        "debtor",
        "creditor",
        "ifrs",
        "ias",
        "journal",
        "ledger",
        "trial balance",
        "debit",
        "credit",
        "ratio",
        "financial accounting"
    ],

    economics: [
        "economics",
        "economy",
        "demand",
        "supply",
        "inflation",
        "unemployment",
        "gdp",
        "scarcity",
        "opportunity cost",
        "fiscal",
        "monetary",
        "interest rate",
        "reserve bank",
        "sarb",
        "market",
        "elasticity",
        "economic growth",
        "business cycle",
        "business cycles",
        "circular flow",
        "four sector",
        "product market",
        "factor market",
        "money market",
        "financial market",
        "capital market",
        "foreign exchange",
        "phillips curve",
        "aggregate demand",
        "aggregate supply",
        "leading indicator",
        "lagging indicator",
        "coincident indicator",
        "composite indicator",
        "forecasting",
        "extrapolation",
        "moving average",
        "amplitude",
        "trend line"
    ],

    mathematics: [
        "math",
        "maths",
        "mathematics",
        "algebra",
        "equation",
        "quadratic",
        "linear",
        "fraction",
        "percentage",
        "ratio",
        "exponent",
        "indices",
        "surd",
        "root",
        "function",
        "gradient",
        "coordinate",
        "sequence",
        "arithmetic sequence",
        "geometric sequence",
        "trigonometry",
        "sine",
        "cosine",
        "tangent",
        "probability",
        "statistics",
        "mean",
        "median",
        "mode",
        "standard deviation",
        "differentiation",
        "derivative",
        "integration",
        "integral",
        "calculus",
        "pythagoras",
        "pythagorean"
    ]

};


/* =========================================================
   SUBJECT DETECTION
========================================================= */

function detectSubject(question) {

    const text = question.toLowerCase();

    let scores = {
        accounting: 0,
        economics: 0,
        mathematics: 0
    };

    for (const subject in subjectKeywords) {

        subjectKeywords[subject].forEach(keyword => {

            if (text.includes(keyword.toLowerCase())) {
                scores[subject]++;
            }

        });

    }

    const highest = Math.max(
        scores.accounting,
        scores.economics,
        scores.mathematics
    );

    if (highest === 0) {
        return null;
    }

    const winners = Object.keys(scores).filter(
        subject => scores[subject] === highest
    );

    if (winners.length !== 1) {
        return null;
    }

    return winners[0];
}


/* =========================================================
   KNOWLEDGE SEARCH
========================================================= */

function searchKnowledge(question, knowledge) {

    const text = question.toLowerCase();

    let bestMatch = null;
    let bestScore = 0;

    knowledge.forEach(item => {

        let score = 0;

        item.keywords.forEach(keyword => {

            if (text.includes(keyword.toLowerCase())) {
                score += 5;
            }

        });

        const titleWords = item.title
            .toLowerCase()
            .split(" ");

        titleWords.forEach(word => {

            if (word.length > 3 && text.includes(word)) {
                score += 2;
            }

        });

        if (score > bestScore) {
            bestScore = score;
            bestMatch = item;
        }

    });

    return bestMatch;
}


/* =========================================================
   GREETINGS
========================================================= */

function isGreeting(text) {

    const greetings = [
        "hi",
        "hello",
        "hey",
        "good morning",
        "good afternoon",
        "good evening",
        "how are you",
        "yo"
    ];

    const clean = text
        .toLowerCase()
        .trim()
        .replace(/[!?.,]/g, "");

    return greetings.includes(clean);
}


function greetingAnswer() {

    return `
Hello! 👋

Welcome to Mastercommerce.

I can help you learn:

• Accounting
• Economics
• Mathematics

Ask me a question and I will try to explain it in a simple way.
    `;
}


/* =========================================================
   DEVELOPER QUESTIONS
========================================================= */

function isDeveloperQuestion(question) {

    const text = question.toLowerCase();

    return (
        text.includes("who made you") ||
        text.includes("who created you") ||
        text.includes("who developed you") ||
        text.includes("who built you") ||
        text.includes("who made mastercommerce") ||
        text.includes("who created mastercommerce") ||
        text.includes("who developed mastercommerce") ||
        text.includes("who built mastercommerce") ||
        text.includes("developer of mastercommerce") ||
        text.includes("founder of mastercommerce")
    );
}


function developerAnswer() {

    return `
Mastercommerce was developed by:

PD | Web & App Development

Founder:
Phungo Dembe Vusani

Location:
Limpopo, South Africa

Education:
University of Venda - BCom in Accounting

Product:
Mastercommerce

Version:
v1.0.0
    `;
}


/* =========================================================
   CREATE MESSAGE
========================================================= */

function createMessage(text, sender = "bot") {

    const wrapper = document.createElement("div");

    wrapper.className =
        sender === "user"
            ? "message user-message"
            : "message bot-message";

    const bubble = document.createElement("div");

    bubble.className = "message-bubble";

    bubble.innerHTML = text
        .replace(/\n/g, "<br>");

    wrapper.appendChild(bubble);

    return wrapper;
}


/* =========================================================
   ANSWER QUESTION
========================================================= */

function answerQuestion(question) {

    if (!question || !question.trim()) {
        return "Please type a question first.";
    }

    const cleanQuestion = question.trim();

    if (isGreeting(cleanQuestion)) {
        return greetingAnswer();
    }

    if (isDeveloperQuestion(cleanQuestion)) {
        return developerAnswer();
    }

    const subject = detectSubject(cleanQuestion);

    if (!subject) {

        return `
I'm not completely sure which subject you are asking about.

Please make your question clearer.

You can ask me about:
• Accounting
• Economics
• Mathematics
        `;

    }

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
        return result.answer;
    }

    return `
I understand that this is a ${subject} question, but I don't have a specific lesson for that question yet.

Try asking your question in a different way or mention the topic you are studying.

I'm still learning and more knowledge can be added to Mastercommerce.
    `;
}


/* =========================================================
   CHAT FUNCTIONALITY
========================================================= */

const chatMessages =
    document.querySelector("#chatMessages");

const questionInput =
    document.querySelector("#questionInput");

const sendButton =
    document.querySelector("#sendButton");


function sendQuestion() {

    const question =
        questionInput.value.trim();

    if (!question) return;

    const userMessage =
        createMessage(question, "user");

    chatMessages.appendChild(userMessage);

    questionInput.value = "";

    questionInput.style.height = "auto";

    chatMessages.scrollTop =
        chatMessages.scrollHeight;

    setTimeout(() => {

        const answer =
            answerQuestion(question);

        const botMessage =
            createMessage(answer, "bot");

        chatMessages.appendChild(botMessage);

        chatMessages.scrollTop =
            chatMessages.scrollHeight;

    }, 250);
}


/* =========================================================
   NEW CHAT
========================================================= */

function startNewChat() {

    chatMessages.innerHTML = `
        <div class="welcome-screen">

            <div class="welcome-logo">M</div>

            <h1>What would you like to learn?</h1>

            <p>
                Ask a question about Accounting,
                Economics or Mathematics.
            </p>

            <div class="subject-cards">

                <div class="subject-card">
                    <strong>Accounting</strong>
                    <span>
                        Financial accounting, auditing,
                        ratios, IFRS and more.
                    </span>
                </div>

                <div class="subject-card">
                    <strong>Economics</strong>
                    <span>
                        Markets, inflation, unemployment,
                        circular flow and business cycles.
                    </span>
                </div>

                <div class="subject-card">
                    <strong>Mathematics</strong>
                    <span>
                        Algebra, functions, probability,
                        statistics, calculus and more.
                    </span>
                </div>

            </div>

        </div>
    `;

    questionInput.focus();
}


/* =========================================================
   MOBILE MENU
========================================================= */

const sidebar =
    document.querySelector(".sidebar");

const sidebarOverlay =
    document.querySelector(".sidebar-overlay");

const hamburgerButton =
    document.querySelector("#hamburgerButton");


function openMobileMenu() {

    if (!sidebar) return;

    sidebar.classList.add("open");

    if (sidebarOverlay) {
        sidebarOverlay.classList.add("active");
    }

}


function closeMobileMenu() {

    if (!sidebar) return;

    sidebar.classList.remove("open");

    if (sidebarOverlay) {
        sidebarOverlay.classList.remove("active");
    }

}


function toggleMobileMenu() {

    if (!sidebar) return;

    if (sidebar.classList.contains("open")) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }

}


/* =========================================================
   ABOUT PAGE
========================================================= */

function showAbout() {

    chatMessages.innerHTML = `

        <div class="about-page">

            <div class="about-logo">M</div>

            <h1>About Mastercommerce</h1>

            <p>
                Mastercommerce is an educational platform
                designed to help learners understand
                Accounting, Economics and Mathematics
                in a simple and practical way.
            </p>

            <div class="about-section">

                <h2>Developer</h2>

                <p>
                    PD | Web & App Development
                </p>

            </div>

            <div class="about-section">

                <h2>Founder</h2>

                <p>
                    Phungo Dembe Vusani
                </p>

            </div>

            <div class="about-section">

                <h2>Education</h2>

                <p>
                    University of Venda<br>
                    BCom in Accounting
                </p>

            </div>

            <div class="about-section">

                <h2>Version</h2>

                <p>
                    Mastercommerce v1.0.0
                </p>

            </div>

        </div>

    `;

    closeMobileMenu();
}


/* =========================================================
   SETTINGS
========================================================= */

const SETTINGS_KEY =
    "mastercommerceSettings";


const defaultSettings = {

    theme: "light",

    background: "white",

    fontSize: "medium",

    reducedMotion: false

};


function getSettings() {

    try {

        const saved =
            localStorage.getItem(SETTINGS_KEY);

        if (!saved) {
            return {
                ...defaultSettings
            };
        }

        return {
            ...defaultSettings,
            ...JSON.parse(saved)
        };

    } catch {

        return {
            ...defaultSettings
        };

    }

}


function saveSettings(settings) {

    localStorage.setItem(
        SETTINGS_KEY,
        JSON.stringify(settings)
    );

}


function applySettings() {

    const settings =
        getSettings();

    document.body.classList.remove(
        "dark-mode",
        "bg-white",
        "bg-soft-gray",
        "bg-warm",
        "bg-blue",
        "bg-green",
        "bg-lavender",
        "font-small",
        "font-medium",
        "font-large",
        "reduced-motion"
    );

    if (settings.theme === "dark") {
        document.body.classList.add("dark-mode");
    }

    document.body.classList.add(
        `bg-${settings.background}`
    );

    document.body.classList.add(
        `font-${settings.fontSize}`
    );

    if (settings.reducedMotion) {
        document.body.classList.add(
            "reduced-motion"
        );
    }

}


function showSettings() {

    const settings =
        getSettings();

    chatMessages.innerHTML = `

        <div class="settings-page">

            <h1>Settings</h1>

            <div class="settings-group">

                <label>Theme</label>

                <select id="themeSetting">

                    <option value="light"
                        ${settings.theme === "light" ? "selected" : ""}>
                        Light
                    </option>

                    <option value="dark"
                        ${settings.theme === "dark" ? "selected" : ""}>
                        Dark
                    </option>

                </select>

            </div>


            <div class="settings-group">

                <label>Background</label>

                <select id="backgroundSetting">

                    <option value="white"
                        ${settings.background === "white" ? "selected" : ""}>
                        White
                    </option>

                    <option value="soft-gray"
                        ${settings.background === "soft-gray" ? "selected" : ""}>
                        Soft Gray
                    </option>

                    <option value="warm"
                        ${settings.background === "warm" ? "selected" : ""}>
                        Warm
                    </option>

                    <option value="blue"
                        ${settings.background === "blue" ? "selected" : ""}>
                        Blue
                    </option>

                    <option value="green"
                        ${settings.background === "green" ? "selected" : ""}>
                        Green
                    </option>

                    <option value="lavender"
                        ${settings.background === "lavender" ? "selected" : ""}>
                        Lavender
                    </option>

                </select>

            </div>


            <div class="settings-group">

                <label>Font Size</label>

                <select id="fontSetting">

                    <option value="small"
                        ${settings.fontSize === "small" ? "selected" : ""}>
                        Small
                    </option>

                    <option value="medium"
                        ${settings.fontSize === "medium" ? "selected" : ""}>
                        Medium
                    </option>

                    <option value="large"
                        ${settings.fontSize === "large" ? "selected" : ""}>
                        Large
                    </option>

                </select>

            </div>


            <div class="settings-group checkbox-setting">

                <label>

                    <input
                        type="checkbox"
                        id="motionSetting"
                        ${settings.reducedMotion ? "checked" : ""}
                    >

                    Reduce animations

                </label>

            </div>


            <button
                class="settings-button"
                id="clearChatButton"
            >
                Clear current chat
            </button>


            <button
                class="settings-button danger"
                id="resetSettingsButton"
            >
                Reset settings
            </button>

        </div>

    `;


    document
        .querySelector("#themeSetting")
        .addEventListener("change", e => {

            const current =
                getSettings();

            current.theme =
                e.target.value;

            saveSettings(current);

            applySettings();

        });


    document
        .querySelector("#backgroundSetting")
        .addEventListener("change", e => {

            const current =
                getSettings();

            current.background =
                e.target.value;

            saveSettings(current);

            applySettings();

        });


    document
        .querySelector("#fontSetting")
        .addEventListener("change", e => {

            const current =
                getSettings();

            current.fontSize =
                e.target.value;

            saveSettings(current);

            applySettings();

        });


    document
        .querySelector("#motionSetting")
        .addEventListener("change", e => {

            const current =
                getSettings();

            current.reducedMotion =
                e.target.checked;

            saveSettings(current);

            applySettings();

        });


    document
        .querySelector("#clearChatButton")
        .addEventListener("click", () => {

            startNewChat();

        });


    document
        .querySelector("#resetSettingsButton")
        .addEventListener("click", () => {

            localStorage.removeItem(
                SETTINGS_KEY
            );

            applySettings();

            showSettings();

        });


    closeMobileMenu();

}


/* =========================================================
   NAVIGATION
========================================================= */

function setupNavigation() {

    document
        .querySelectorAll("[data-page]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const page =
                        button.dataset.page;

                    if (page === "home") {
                        startNewChat();
                    }

                    if (page === "about") {
                        showAbout();
                    }

                    if (page === "settings") {
                        showSettings();
                    }

                    closeMobileMenu();

                }
            );

        });

}


/* =========================================================
   PROFESSIONAL SVG ICONS
========================================================= */

function addIcons() {

    const homeIcon = `
        <svg viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round">
            <path d="M3 10.5L12 3l9 7.5"/>
            <path d="M5 9.5V21h14V9.5"/>
            <path d="M9 21v-7h6v7"/>
        </svg>
    `;


    const aboutIcon = `
        <svg viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round">
            <circle cx="12" cy="12" r="9"/>
            <path d="M12 10v6"/>
            <path d="M12 7h.01"/>
        </svg>
    `;


    const settingsIcon = `
        <svg viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2"
             stroke-linecap="round"
             stroke-linejoin="round">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 1.7-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.55V20h-2.4v-.21a1.7 1.7 0 0 0-1.03-1.55 1.7 1.7 0 0 0-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 0 0 8.46 15a1.7 1.7 0 0 0-1.55-1.03H6.7v-2.4h.21A1.7 1.7 0 0 0 8.46 10a1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.7-1.7.06.06a1.7 1.7 0 0 0 1.88.34 1.7 1.7 0 0 0 1.03-1.55V5h2.4v.21a1.7 1.7 0 0 0 1.03 1.55 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.7 1.7-.06.06A1.7 1.7 0 0 0 19.4 10a1.7 1.7 0 0 0 1.55 1.03h.21v2.4h-.21A1.7 1.7 0 0 0 19.4 15z"/>
        </svg>
    `;


    const home =
        document.querySelector(
            '[data-page="home"] .nav-icon'
        );

    const about =
        document.querySelector(
            '[data-page="about"] .nav-icon'
        );

    const settings =
        document.querySelector(
            '[data-page="settings"] .nav-icon'
        );


    if (home) {
        home.innerHTML = homeIcon;
    }

    if (about) {
        about.innerHTML = aboutIcon;
    }

    if (settings) {
        settings.innerHTML = settingsIcon;
    }

}


/* =========================================================
   TEXTAREA
========================================================= */

function setupTextarea() {

    if (!questionInput) return;

    questionInput.addEventListener(
        "input",
        () => {

            questionInput.style.height =
                "auto";

            questionInput.style.height =
                Math.min(
                    questionInput.scrollHeight,
                    140
                ) + "px";

        }
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

}


/* =========================================================
   INITIALISE APP
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        applySettings();

        addIcons();

        setupNavigation();

        setupTextarea();

        if (sendButton) {

            sendButton.addEventListener(
                "click",
                sendQuestion
            );

        }

        if (hamburgerButton) {

            hamburgerButton.addEventListener(
                "click",
                toggleMobileMenu
            );

        }

        if (sidebarOverlay) {

            sidebarOverlay.addEventListener(
                "click",
                closeMobileMenu
            );

        }

        startNewChat();

    }
);
