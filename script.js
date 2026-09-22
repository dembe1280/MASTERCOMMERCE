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
       ACCOUNTING KNOWLEDGE
       ========================================================= */

    const accountingKnowledge = [

        {
            keywords: ["accounting equation"],
            answer:
`The accounting equation is:

Assets = Equity + Liabilities

It means that everything a business owns is financed either by the owners or by creditors.

Example:

Assets = R100 000
Liabilities = R40 000

Equity = R100 000 − R40 000
Equity = R60 000.`
        },

        {
            keywords: ["asset", "assets"],
            answer:
`An asset is a resource controlled by a business that is expected to provide future economic benefits.

Examples:
• Cash
• Inventory
• Vehicles
• Buildings
• Equipment
• Land
• Trade receivables
• Investments

Assets can be current or non-current.`
        },

        {
            keywords: ["current asset", "current assets"],
            answer:
`Current assets are assets expected to be realised, sold or consumed during the normal operating cycle or generally within twelve months.

Examples:
• Inventory
• Trade receivables
• Cash
• Short-term investments
• Prepayments.`
        },

        {
            keywords: ["non current asset", "non-current asset"],
            answer:
`Non-current assets are assets held for long-term use.

Examples:
• Land
• Buildings
• Vehicles
• Machinery
• Equipment
• Long-term investments
• Intangible assets.`
        },

        {
            keywords: ["liability", "liabilities"],
            answer:
`A liability is a present obligation arising from past events that is expected to result in an outflow of economic resources.

Examples:
• Bank loans
• Trade payables
• Accrued expenses
• Tax payable
• Bonds payable.`
        },

        {
            keywords: ["current liability", "current liabilities"],
            answer:
`Current liabilities are obligations expected to be settled during the normal operating cycle or generally within twelve months.

Examples:
• Trade payables
• Short-term loans
• Accrued expenses
• VAT payable
• Income tax payable.`
        },

        {
            keywords: ["equity", "owners equity", "owner's equity"],
            answer:
`Equity is the residual interest in the assets of an entity after deducting liabilities.

Equity = Assets − Liabilities.

Equity can increase through:
• Owner contributions
• Profit

Equity can decrease through:
• Drawings
• Losses.`
        },

        {
            keywords: ["revenue", "income"],
            answer:
`Revenue is income arising from the ordinary activities of an entity.

Examples include:
• Sales
• Service revenue
• Commission income
• Interest income

Revenue normally increases profit and therefore increases equity.`
        },

        {
            keywords: ["expense", "expenses"],
            answer:
`An expense is a decrease in economic benefits during an accounting period.

Examples:
• Rent
• Salaries
• Insurance
• Advertising
• Electricity
• Depreciation

Expenses normally reduce profit.`
        },

        {
            keywords: ["double entry", "double-entry", "debit credit"],
            answer:
`Double-entry accounting means every transaction has at least two entries.

Basic rules:

Assets:
Debit = increase
Credit = decrease

Expenses:
Debit = increase
Credit = decrease

Liabilities:
Credit = increase
Debit = decrease

Equity:
Credit = increase
Debit = decrease

Revenue:
Credit = increase
Debit = decrease.`
        },

        {
            keywords: ["trial balance"],
            answer:
`A trial balance is a list of ledger account balances used to check whether total debits equal total credits.

A balanced trial balance does NOT prove that the accounting records contain no errors.

Some errors can still leave the trial balance balanced.`
        },

        {
            keywords: ["bank reconciliation", "bank reconciliation statement"],
            answer:
`A bank reconciliation compares the business's cash records with the bank statement.

Common differences include:

• Outstanding cheques
• Deposits not yet reflected
• Bank charges
• Interest
• Direct deposits
• Debit orders
• Errors

The purpose is to identify and explain differences.`
        },

        {
            keywords: ["depreciation"],
            answer:
`Depreciation is the systematic allocation of the depreciable amount of an asset over its useful life.

Straight-line depreciation:

(Cost − Residual value) ÷ Useful life

Example:

Cost = R100 000
Residual value = R10 000
Useful life = 5 years

Depreciation = R90 000 ÷ 5
= R18 000 per year.`
        },

        {
            keywords: ["inventory", "stock"],
            answer:
`Inventory consists of goods held for sale, goods in production, or materials used in production.

Under IAS 2, inventory is generally measured at the lower of:

Cost
or
Net realisable value.

Inventory is a current asset.`
        },

        {
            keywords: ["trade receivables", "debtors", "accounts receivable"],
            answer:
`Trade receivables are amounts owed to the business by customers who purchased goods or services on credit.

They are financial assets.

Businesses must consider expected credit losses when accounting for receivables.`
        },

        {
            keywords: ["trade payables", "creditors", "accounts payable"],
            answer:
`Trade payables are amounts owed by a business to suppliers for goods or services purchased on credit.

They are normally current liabilities when expected to be settled in the short term.`
        },

        {
            keywords: ["vat", "value added tax"],
            answer:
`VAT is a consumption tax charged on taxable supplies.

In South Africa, VAT is administered by SARS.

A VAT-registered business generally records:

Output VAT = VAT charged on taxable sales.

Input VAT = qualifying VAT paid on purchases.

VAT payable is generally:

Output VAT − Input VAT.`
        },

        {
            keywords: ["profit", "net profit"],
            answer:
`Profit is the amount left after expenses are deducted from income.

Profit = Revenue − Expenses.

If revenue is greater than expenses, the business makes a profit.

If expenses are greater than revenue, the business makes a loss.`
        },

        {
            keywords: ["gross profit"],
            answer:
`Gross profit is:

Sales − Cost of sales

Gross profit measures the profit earned from selling goods before operating expenses are deducted.`
        },

        {
            keywords: ["gross profit margin"],
            answer:
`Gross profit margin:

Gross profit ÷ Revenue × 100

Example:

Gross profit = R40 000
Revenue = R100 000

Gross profit margin
= R40 000 ÷ R100 000 × 100
= 40%.`
        },

        {
            keywords: ["net profit margin"],
            answer:
`Net profit margin:

Net profit ÷ Revenue × 100

It measures the percentage of revenue that remains as net profit after expenses.`
        },

        {
            keywords: ["current ratio"],
            answer:
`Current ratio:

Current assets ÷ Current liabilities

Example:

Current assets = R200 000
Current liabilities = R100 000

Current ratio = 2:1.

It is a liquidity ratio.`
        },

        {
            keywords: ["acid test", "quick ratio"],
            answer:
`Acid-test ratio:

(Current assets − Inventory) ÷ Current liabilities

It focuses on assets that can more readily be converted into cash.

Inventory is excluded because it may take longer to sell.`
        },

        {
            keywords: ["inventory turnover"],
            answer:
`Inventory turnover:

Cost of sales ÷ Average inventory

It measures how many times inventory is sold or replaced during a period.`
        },

        {
            keywords: ["debtors collection", "receivables collection", "collection period"],
            answer:
`Debtors collection period:

Average trade receivables ÷ Credit sales × 365 days

It estimates how many days customers take to pay their accounts.`
        },

        {
            keywords: ["debt ratio"],
            answer:
`Debt ratio can be calculated as:

Total liabilities ÷ Total assets × 100

It indicates the proportion of assets financed by liabilities.`
        },

        {
            keywords: ["break even", "break-even"],
            answer:
`Break-even is the point where total revenue equals total costs.

Break-even units:

Fixed costs ÷ Contribution per unit

Contribution per unit:

Selling price per unit − Variable cost per unit.`
        },

        {
            keywords: ["contribution margin"],
            answer:
`Contribution:

Sales − Variable costs

Contribution first covers fixed costs.

After fixed costs are covered, additional contribution becomes profit.`
        },

        {
            keywords: ["fixed cost", "fixed costs"],
            answer:
`Fixed costs remain constant in total within a relevant range of activity.

Examples:
• Rent
• Salaries of some permanent staff
• Insurance

Fixed cost per unit normally decreases as production increases.`
        },

        {
            keywords: ["variable cost", "variable costs"],
            answer:
`Variable costs change with the level of activity.

Examples:
• Direct materials
• Sales commission based on sales
• Packaging directly related to units

Total variable cost generally increases when production increases.`
        },

        {
            keywords: ["marginal cost"],
            answer:
`Marginal cost is the additional cost of producing one more unit.

It is especially important for short-term production and pricing decisions.`
        },

        {
            keywords: ["opportunity cost"],
            answer:
`Opportunity cost is the benefit sacrificed when one alternative is chosen instead of the next best alternative.

Example:

If a business uses a building for its own operations instead of renting it out for R20 000 per month, the R20 000 is an opportunity cost.`
        },

        {
            keywords: ["sunk cost"],
            answer:
`A sunk cost is a cost that has already been incurred and cannot be recovered.

Sunk costs should normally not affect future decisions because they cannot be changed.`
        },

        {
            keywords: ["relevant cost"],
            answer:
`A relevant cost is a future cost that differs between alternatives.

Relevant costs are useful in decisions such as:

• Make or buy
• Special orders
• Continue or discontinue
• Replace equipment.`
        },

        {
            keywords: ["absorption costing"],
            answer:
`Absorption costing assigns both variable manufacturing costs and fixed manufacturing overheads to products.

Product cost includes:

Direct materials
+ Direct labour
+ Variable manufacturing overhead
+ Fixed manufacturing overhead.`
        },

        {
            keywords: ["variable costing", "marginal costing"],
            answer:
`Variable costing treats variable manufacturing costs as product costs.

Fixed manufacturing overhead is treated as a period cost.

It is useful for short-term decision-making and contribution analysis.`
        },

        {
            keywords: ["ias 16", "property plant equipment"],
            answer:
`IAS 16 deals with Property, Plant and Equipment.

Recognition generally requires:

• Probable future economic benefits
• Cost that can be measured reliably

After recognition, an entity may use a cost model or revaluation model where the requirements are met.

Depreciation is recognised systematically over useful life.`
        },

        {
            keywords: ["ias 2"],
            answer:
`IAS 2 deals with Inventories.

Inventory is generally measured at the lower of:

Cost
and
Net realisable value.

Cost includes appropriate purchase, conversion and other costs necessary to bring inventory to its present location and condition.`
        },

        {
            keywords: ["ias 12"],
            answer:
`IAS 12 deals with Income Taxes.

It includes accounting for:

• Current tax
• Deferred tax assets
• Deferred tax liabilities

Deferred tax generally arises from temporary differences between accounting carrying amounts and tax bases.`
        },

        {
            keywords: ["ias 21"],
            answer:
`IAS 21 deals with the effects of changes in foreign exchange rates.

It covers:

• Foreign currency transactions
• Functional currency
• Presentation currency
• Translation of foreign operations.`
        },

        {
            keywords: ["ifrs 15"],
            answer:
`IFRS 15 deals with Revenue from Contracts with Customers.

Its core principle is to recognise revenue in a way that represents the transfer of promised goods or services to customers in an amount reflecting the consideration expected.

The five-step model is:

1. Identify the contract.
2. Identify performance obligations.
3. Determine the transaction price.
4. Allocate the transaction price.
5. Recognise revenue when performance obligations are satisfied.`
        },

        {
            keywords: ["ifrs 9"],
            answer:
`IFRS 9 deals with Financial Instruments.

Important areas include:

• Classification and measurement
• Impairment
• Expected credit losses
• Hedge accounting

Financial assets may be measured at amortised cost, FVOCI or FVTPL depending on the relevant requirements.`
        },

        {
            keywords: ["ifrs 10", "consolidation"],
            answer:
`IFRS 10 deals with Consolidated Financial Statements and control.

A parent generally consolidates an investee when it controls the investee.

Control involves:

• Power over the investee
• Exposure, or rights, to variable returns
• Ability to use power to affect returns.`
        },

        {
            keywords: ["ias 28", "associate", "significant influence"],
            answer:
`IAS 28 deals with investments in associates and joint ventures.

Significant influence is the power to participate in financial and operating policy decisions without having control.

20% or more voting power is presumed to give significant influence unless clearly demonstrated otherwise.

The equity method is commonly used for associates.`
        },

        {
            keywords: ["audit", "auditing"],
            answer:
`Auditing is an independent examination of financial information.

The purpose of an external audit is to enable the auditor to express an opinion on whether the financial statements are prepared, in all material respects, in accordance with the applicable financial reporting framework.

Important audit concepts include:

• Audit risk
• Materiality
• Internal controls
• Audit evidence
• Assertions
• Professional judgement
• Independence.`
        },

        {
            keywords: ["audit evidence"],
            answer:
`Audit evidence is information used by the auditor when reaching conclusions.

Examples include:

• Invoices
• Bank confirmations
• Physical inspection
• Recalculations
• Analytical procedures
• Contracts
• External confirmations
• Accounting records.`
        },

        {
            keywords: ["audit risk"],
            answer:
`Audit risk is the risk that the auditor expresses an inappropriate opinion when the financial statements contain a material misstatement.

Audit risk is commonly considered through:

Inherent risk
Control risk
Detection risk.`
        },

        {
            keywords: ["internal control"],
            answer:
`Internal controls are policies and procedures designed to help an organisation achieve objectives.

Objectives include:

• Reliable financial reporting
• Efficient operations
• Safeguarding assets
• Compliance with laws and regulations

Examples include segregation of duties, authorisation and reconciliations.`
        },

        {
            keywords: ["accounting cycle"],
            answer:
`The accounting cycle generally includes:

1. Identify transactions.
2. Analyse transactions.
3. Record transactions.
4. Post to ledgers.
5. Prepare a trial balance.
6. Record adjustments.
7. Prepare adjusted trial balance.
8. Prepare financial statements.
9. Close temporary accounts.`
        },

        {
            keywords: ["statement of financial position", "balance sheet"],
            answer:
`The Statement of Financial Position reports:

Assets
Liabilities
Equity

It shows the financial position of an entity at a specific date.

The basic relationship is:

Assets = Equity + Liabilities.`
        },

        {
            keywords: ["income statement", "statement of profit or loss"],
            answer:
`The Statement of Profit or Loss reports income and expenses for a period.

A simplified structure is:

Revenue
− Cost of sales
= Gross profit
− Operating expenses
= Operating profit
± Other income/expenses
= Profit before tax
− Tax
= Profit for the period.`
        },

        {
            keywords: ["cash flow statement"],
            answer:
`A Statement of Cash Flows explains movements in cash and cash equivalents.

Cash flows are classified into:

• Operating activities
• Investing activities
• Financing activities.`
        },

        {
            keywords: ["working capital"],
            answer:
`Working capital is:

Current assets − Current liabilities

It provides an indication of short-term financial resources available to the business.`
        },

        {
            keywords: ["return on equity", "roe"],
            answer:
`Return on Equity:

Profit after tax ÷ Average equity × 100

It measures the return generated on shareholders' or owners' equity.`
        },

        {
            keywords: ["return on assets", "roa"],
            answer:
`Return on Assets:

Profit ÷ Average total assets × 100

It measures how effectively assets are used to generate profit.`
        },

        {
            keywords: ["earnings per share", "eps"],
            answer:
`Basic EPS generally compares profit attributable to ordinary equity holders with the weighted average number of ordinary shares outstanding.

EPS is commonly used as a performance measure for companies with ordinary shares.`
        }

    ];


    /* =========================================================
       ECONOMICS KNOWLEDGE
       ========================================================= */

    const economicsKnowledge = [

        {
            keywords: ["economics definition", "what is economics"],
            answer:
`Economics is the study of how individuals, businesses, governments and societies use scarce resources to satisfy unlimited or competing wants.

The central economic problem is scarcity.

Because resources are limited, choices must be made.`
        },

        {
            keywords: ["scarcity"],
            answer:
`Scarcity means that resources are limited while human wants are unlimited.

Because of scarcity, people and societies must make choices about how resources are used.`
        },

        {
            keywords: ["opportunity cost"],
            answer:
`Opportunity cost is the value of the next best alternative that is given up when a choice is made.

Example:

If you spend R500 on clothes instead of textbooks, the textbooks are the opportunity cost of the decision.`
        },

        {
            keywords: ["factors of production"],
            answer:
`The four main factors of production are:

Land
Labour
Capital
Entrepreneurship

Land includes natural resources.

Labour refers to human effort.

Capital includes produced resources used in production.

Entrepreneurship involves organising resources and taking business risks.`
        },

        {
            keywords: ["demand"],
            answer:
`Demand is the quantity of a good or service that consumers are willing and able to buy at different prices during a particular period.

The law of demand states that, other things being equal, quantity demanded generally falls when price rises and rises when price falls.`
        },

        {
            keywords: ["supply"],
            answer:
`Supply is the quantity of a good or service that producers are willing and able to offer for sale at different prices during a period.

The law of supply states that, other things being equal, quantity supplied generally rises when price rises.`
        },

        {
            keywords: ["market equilibrium", "equilibrium price"],
            answer:
`Market equilibrium occurs where quantity demanded equals quantity supplied.

At equilibrium:

Quantity demanded = Quantity supplied.

The corresponding price is called the equilibrium price.`
        },

        {
            keywords: ["shortage", "shortages"],
            answer:
`A shortage occurs when quantity demanded is greater than quantity supplied at a particular price.

Shortages can put upward pressure on price in a competitive market.`
        },

        {
            keywords: ["surplus"],
            answer:
`A surplus occurs when quantity supplied is greater than quantity demanded at a particular price.

Surpluses can put downward pressure on price in a competitive market.`
        },

        {
            keywords: ["elasticity", "price elasticity"],
            answer:
`Price elasticity of demand measures how responsive quantity demanded is to a change in price.

PED:

% change in quantity demanded
÷
% change in price

If the absolute value is greater than 1, demand is elastic.

If it is less than 1, demand is inelastic.

If it equals 1, demand is unit elastic.`
        },

        {
            keywords: ["income elasticity"],
            answer:
`Income elasticity of demand measures how responsive demand is to changes in consumer income.

YED:

% change in quantity demanded
÷
% change in income.

A positive value is generally associated with a normal good.

A negative value is generally associated with an inferior good.`
        },

        {
            keywords: ["cross elasticity"],
            answer:
`Cross-price elasticity measures how demand for one product responds to a change in the price of another product.

Positive cross elasticity generally indicates substitutes.

Negative cross elasticity generally indicates complements.`
        },

        {
            keywords: ["substitutes"],
            answer:
`Substitute goods can be used instead of each other.

Examples:

Tea and coffee
Butter and margarine
Different brands of similar products

When the price of one substitute increases, demand for the other may increase.`
        },

        {
            keywords: ["complements"],
            answer:
`Complementary goods are goods used together.

Examples:

Cars and fuel
Printers and ink
Phones and data services

An increase in the price of one may reduce demand for the other.`
        },

        {
            keywords: ["utility"],
            answer:
`Utility is the satisfaction or benefit a consumer receives from consuming goods or services.

Total utility is the total satisfaction.

Marginal utility is the additional satisfaction from consuming one additional unit.`
        },

        {
            keywords: ["marginal utility"],
            answer:
`Marginal utility is the additional satisfaction obtained from consuming one more unit of a good or service.

In many consumer theory examples, marginal utility decreases as more units are consumed.`
        },

        {
            keywords: ["production possibility", "ppf", "production possibility frontier"],
            answer:
`A Production Possibility Frontier shows the maximum combinations of two goods or services that can be produced with available resources and technology.

Points:

On the curve = efficient use of resources.

Inside the curve = inefficient or underutilised resources.

Outside the curve = currently unattainable with existing resources and technology.`
        },

        {
            keywords: ["market structure", "market structures"],
            answer:
`Important market structures include:

Perfect competition
Monopolistic competition
Oligopoly
Monopoly

They differ in areas such as:

• Number of firms
• Product differentiation
• Barriers to entry
• Market power
• Price-setting ability.`
        },

        {
            keywords: ["perfect competition"],
            answer:
`Perfect competition is a theoretical market structure characterised by:

• Many buyers and sellers
• Homogeneous products
• Free entry and exit
• Perfect information
• Firms acting as price takers

Individual firms have little or no control over market price.`
        },

        {
            keywords: ["monopoly"],
            answer:
`A monopoly is a market structure in which one firm is the dominant or sole supplier of a product or service with no close substitutes.

Potential features include:

• High barriers to entry
• Significant market power
• Ability to influence price.`
        },

        {
            keywords: ["oligopoly"],
            answer:
`An oligopoly is a market dominated by a small number of large firms.

Firms are interdependent because one firm's decisions can affect competitors.

Examples of behaviour may include:

• Price competition
• Non-price competition
• Advertising
• Strategic decision-making.`
        },

        {
            keywords: ["monopolistic competition"],
            answer:
`Monopolistic competition contains many firms selling differentiated products.

Features include:

• Many sellers
• Product differentiation
• Relatively easy entry and exit
• Competition through price and non-price methods.`
        },

        {
            keywords: ["externalities"],
            answer:
`An externality occurs when an economic activity affects a third party who is not directly involved in the transaction.

Negative externality:
A cost imposed on others.

Example:
Pollution.

Positive externality:
A benefit received by others.

Example:
Education can create benefits for society beyond the individual learner.`
        },

        {
            keywords: ["public goods"],
            answer:
`Public goods have two important characteristics:

Non-rivalry:
One person's use does not significantly reduce availability to others.

Non-excludability:
It can be difficult to prevent people from using the good.

Examples can include national defence and some forms of public lighting.`
        },

        {
            keywords: ["market failure"],
            answer:
`Market failure occurs when the operation of a market does not lead to an efficient allocation of resources.

Possible causes include:

• Externalities
• Public goods
• Information problems
• Market power
• Certain forms of inequality.

Government intervention may be used to address some market failures.`
        },

        {
            keywords: ["inflation"],
            answer:
`Inflation is a sustained increase in the general price level of goods and services over time.

When inflation occurs, the purchasing power of money generally decreases.

Common causes discussed in economics include:

• Demand-pull inflation
• Cost-push inflation
• Imported inflation
• Excessive growth in demand relative to productive capacity.`
        },

        {
            keywords: ["demand pull inflation"],
            answer:
`Demand-pull inflation occurs when aggregate demand grows faster than the economy's ability to produce goods and services.

A simple way to remember it:

Too much spending chasing too few goods.`
        },

        {
            keywords: ["cost push inflation"],
            answer:
`Cost-push inflation occurs when increases in production costs put upward pressure on prices.

Possible causes include:

• Higher wages
• Higher energy costs
• Higher transport costs
• Higher imported input prices
• Supply disruptions.`
        },

        {
            keywords: ["unemployment"],
            answer:
`Unemployment refers to people who are without work, available for work and actively seeking work, according to the definition being used.

Types commonly discussed include:

• Frictional unemployment
• Structural unemployment
• Cyclical unemployment
• Seasonal unemployment.`
        },

        {
            keywords: ["frictional unemployment"],
            answer:
`Frictional unemployment occurs when people are temporarily between jobs or entering the labour market and searching for suitable employment.`
        },

        {
            keywords: ["structural unemployment"],
            answer:
`Structural unemployment occurs when workers' skills, location or characteristics do not match available job opportunities.

Technological change and changes in industry demand can contribute to structural unemployment.`
        },

        {
            keywords: ["cyclical unemployment"],
            answer:
`Cyclical unemployment is associated with downturns in economic activity.

When aggregate demand and production fall, businesses may reduce employment.`
        },

        {
            keywords: ["gdp", "gross domestic product"],
            answer:
`GDP measures the value of final goods and services produced within an economy during a particular period.

One expenditure approach is:

GDP = C + I + G + (X − M)

C = Consumption
I = Investment
G = Government spending
X = Exports
M = Imports.`
        },

        {
            keywords: ["real gdp", "nominal gdp"],
            answer:
`Nominal GDP is measured using current prices.

Real GDP adjusts for changes in the price level and is therefore more useful for measuring changes in actual output over time.`
        },

        {
            keywords: ["economic growth"],
            answer:
`Economic growth refers to an increase in the productive capacity or real output of an economy over time.

Real GDP is commonly used as an indicator of economic growth.`
        },

        {
            keywords: ["economic development"],
            answer:
`Economic development is broader than economic growth.

It involves improvements in people's standard of living and welfare.

Possible indicators include:

• Income
• Health
• Education
• Life expectancy
• Employment
• Poverty
• Access to services.`
        },

        {
            keywords: ["business cycle"],
            answer:
`The business cycle describes fluctuations in economic activity over time.

Common phases include:

Expansion
Peak
Contraction
Trough

During expansion, economic activity generally increases.

During contraction, economic activity generally decreases.`
        },

        {
            keywords: ["expansion phase"],
            answer:
`During an expansion:

• Production generally increases
• Employment generally increases
• Household income can increase
• Business confidence may improve
• Investment may increase

The economy moves toward a peak.`
        },

        {
            keywords: ["contraction phase"],
            answer:
`During a contraction:

• Economic activity decreases
• Production may fall
• Unemployment may rise
• Household income may weaken
• Business investment may decrease.`
        },

        {
            keywords: ["fiscal policy"],
            answer:
`Fiscal policy involves government decisions about taxation and government spending.

Expansionary fiscal policy may involve:

• Increasing government spending
• Reducing taxes

Contractionary fiscal policy may involve:

• Reducing government spending
• Increasing taxes

The appropriate policy depends on economic conditions and policy objectives.`
        },

        {
            keywords: ["monetary policy"],
            answer:
`Monetary policy involves actions that influence monetary and financial conditions in an economy.

In South Africa, monetary policy is conducted by the South African Reserve Bank.

Interest rates are an important monetary policy tool.`
        },

        {
            keywords: ["supply side policy"],
            answer:
`Supply-side policies aim to improve an economy's productive capacity and efficiency.

Examples can include:

• Education and skills development
• Infrastructure investment
• Improving competition
• Labour-market reforms
• Measures that encourage investment and productivity.`
        },

        {
            keywords: ["aggregate demand"],
            answer:
`Aggregate demand is the total demand for final goods and services in an economy.

A common expression is:

AD = C + I + G + (X − M)

Consumption
Investment
Government spending
Net exports.`
        },

        {
            keywords: ["aggregate supply"],
            answer:
`Aggregate supply represents the total quantity of goods and services firms are willing and able to produce at different price levels.

Long-run aggregate supply is linked to the productive capacity of the economy.`
        },

        {
            keywords: ["balance of payments"],
            answer:
`The balance of payments records economic transactions between residents of an economy and the rest of the world over a period.

Major components include:

• Current account
• Capital account
• Financial account.`
        },

        {
            keywords: ["exchange rate"],
            answer:
`An exchange rate is the price of one currency expressed in terms of another currency.

For example:

R18 per US dollar means one US dollar exchanges for R18 at that quoted rate.`
        },

        {
            keywords: ["depreciation of currency", "currency depreciation"],
            answer:
`Currency depreciation means a currency loses value relative to another currency under a floating exchange-rate system.

It can make exports cheaper for foreign buyers and imports more expensive for domestic buyers, although the actual effects depend on circumstances.`
        },

        {
            keywords: ["appreciation of currency", "currency appreciation"],
            answer:
`Currency appreciation means a currency increases in value relative to another currency.

It can make imports cheaper and exports more expensive for foreign buyers, other things being equal.`
        },

        {
            keywords: ["economic indicators"],
            answer:
`Economic indicators provide information about economic performance and conditions.

Examples include:

• GDP growth
• Inflation
• Unemployment
• Interest rates
• Retail sales
• Business confidence
• Consumer confidence
• Exchange rates.`
        },

        {
            keywords: ["leading indicators"],
            answer:
`Leading indicators tend to change before the broader economy changes.

They can provide information about possible future economic activity.

Examples can include certain measures of business confidence, consumer confidence and financial-market activity.`
        },

        {
            keywords: ["lagging indicators"],
            answer:
`Lagging indicators tend to change after broader economic conditions have changed.

Unemployment can behave as a lagging indicator because employment decisions may respond with a delay to changes in economic activity.`
        },

        {
            keywords: ["coincident indicators"],
            answer:
`Coincident indicators move broadly at the same time as economic activity.

They help describe current economic conditions.`
        },

        {
            keywords: ["composite indicators"],
            answer:
`A composite indicator combines several individual indicators into one measure.

The purpose is to provide a broader picture of economic conditions.`
        },

        {
            keywords: ["essay economics", "economics essay"],
            answer:
`For an Economics essay, use a clear structure:

INTRODUCTION
• Define the key concept.
• Introduce the issue.
• State what the essay will discuss.

BODY
• Explain the first point.
• Define important concepts.
• Explain causes or mechanisms.
• Give examples.
• Discuss effects.
• Continue with the next point.

EVALUATION
• Discuss advantages and disadvantages where relevant.
• Consider short-run and long-run effects.
• Consider different groups affected.
• Mention limitations or conditions.

CONCLUSION
• Summarise the main argument.
• Directly answer the question.

A strong Economics essay should explain economic relationships rather than simply list facts.`
        },

        {
            keywords: ["essay introduction economics"],
            answer:
`A strong Economics essay introduction can follow this pattern:

1. Define the main concept.
2. Give brief context.
3. Explain what the essay will examine.

Example:

"Inflation refers to a sustained increase in the general price level of goods and services. It can affect households, businesses and government decisions because changes in prices influence purchasing power and economic behaviour. This essay discusses the major causes of inflation and examines its effects on the economy."`
        },

        {
            keywords: ["essay conclusion economics"],
            answer:
`A strong Economics conclusion should not introduce a completely new argument.

It should:

• Summarise the main points.
• Link back to the question.
• Give a balanced final statement where appropriate.

Example:

"In conclusion, inflation can arise from both demand-side and supply-side pressures. Its effects include changes in purchasing power, production costs and economic decision-making. The impact therefore depends on the cause, size and persistence of the inflation experienced."`
        },

        {
            keywords: ["advantages and disadvantages economics essay"],
            answer:
`For an advantages-and-disadvantages Economics essay:

Introduction
→ Define the topic.

Advantages
→ Explain advantage 1.
→ Explain advantage 2.
→ Give examples.

Disadvantages
→ Explain disadvantage 1.
→ Explain disadvantage 2.
→ Give examples.

Evaluation
→ Explain when the benefits may outweigh the costs and when they may not.

Conclusion
→ Give a balanced summary linked to the question.`
        }

    ];


    /* =========================================================
       MATHEMATICS KNOWLEDGE
       ========================================================= */

    const mathematicsKnowledge = [

        {
            keywords: ["percentage", "percentages"],
            answer:
`Percentage means "out of 100".

Percentage:

Part ÷ Whole × 100

Example:

20 out of 80

20 ÷ 80 × 100
= 25%.

So 20 is 25% of 80.`
        },

        {
            keywords: ["percentage increase"],
            answer:
`Percentage increase:

(New value − Original value)
÷ Original value × 100

Example:

Original = 200
New = 250

Increase = 50

50 ÷ 200 × 100
= 25%.

The increase is 25%.`
        },

        {
            keywords: ["percentage decrease"],
            answer:
`Percentage decrease:

(Original value − New value)
÷ Original value × 100

Example:

Original = 500
New = 400

Decrease = 100

100 ÷ 500 × 100
= 20%.`
        },

        {
            keywords: ["linear equation"],
            answer:
`A linear equation has a variable with a power of 1.

Example:

2x + 6 = 14

Subtract 6:

2x = 8

Divide by 2:

x = 4.`
        },

        {
            keywords: ["quadratic equation"],
            answer:
`A quadratic equation normally has the form:

ax² + bx + c = 0

The quadratic formula is:

x = (-b ± √(b² − 4ac)) / 2a

The discriminant is:

b² − 4ac

It helps determine the number and type of roots.`
        },

        {
            keywords: ["factorise", "factorization", "factorise quadratic"],
            answer:
`Factorising means writing an expression as a product of factors.

Example:

x² + 5x + 6

Find two numbers that multiply to 6 and add to 5:

2 and 3

Therefore:

x² + 5x + 6
= (x + 2)(x + 3).`
        },

        {
            keywords: ["indices", "exponents"],
            answer:
`Important laws of indices:

aᵐ × aⁿ = aᵐ⁺ⁿ

aᵐ ÷ aⁿ = aᵐ⁻ⁿ

(aᵐ)ⁿ = aᵐⁿ

a⁰ = 1

a⁻ⁿ = 1/aⁿ

These laws apply when the relevant expressions are defined.`
        },

        {
            keywords: ["simultaneous equations"],
            answer:
`Simultaneous equations are equations solved together.

Example:

x + y = 10
x − y = 2

Add the equations:

2x = 12

x = 6

Then:

6 + y = 10

y = 4.

Answer:

x = 6
y = 4.`
        },

        {
            keywords: ["gradient", "slope"],
            answer:
`Gradient measures the steepness of a straight line.

Gradient:

m = (y₂ − y₁) ÷ (x₂ − x₁)

Example:

Points (1,2) and (3,6)

m = (6−2)/(3−1)
= 4/2
= 2.`
        },

        {
            keywords: ["straight line equation"],
            answer:
`A straight line can be written as:

y = mx + c

m = gradient

c = y-intercept.`
        },

        {
            keywords: ["distance formula"],
            answer:
`Distance between two points:

(x₁,y₁) and (x₂,y₂)

Distance:

√[(x₂−x₁)² + (y₂−y₁)²]`
        },

        {
            keywords: ["midpoint"],
            answer:
`Midpoint of two points:

((x₁+x₂)/2, (y₁+y₂)/2)

Example:

(2,4) and (6,8)

Midpoint:

((2+6)/2, (4+8)/2)

= (4,6).`
        },

        {
            keywords: ["mean", "average"],
            answer:
`Mean:

Sum of values ÷ Number of values

Example:

4, 6, 8

Mean = (4+6+8) ÷ 3
= 18 ÷ 3
= 6.`
        },

        {
            keywords: ["median"],
            answer:
`The median is the middle value when data is arranged in order.

Example:

2, 4, 5, 7, 9

Median = 5.

If there are two middle values, find their average.`
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
`Probability measures the likelihood of an event.

For equally likely outcomes:

P(event) =
Number of favourable outcomes
÷
Total number of possible outcomes.

Probability is between 0 and 1.

0 = impossible.

1 = certain.`
        },

        {
            keywords: ["complement probability"],
            answer:
`The probability of an event not happening is:

P(not A) = 1 − P(A).

Example:

If P(A) = 0.3:

P(not A) = 1 − 0.3
= 0.7.`
        },

        {
            keywords: ["simple interest"],
            answer:
`Simple interest:

I = P × r × t

P = principal
r = interest rate per period
t = time

Total amount:

A = P + I.`
        },

        {
            keywords: ["compound interest"],
            answer:
`Compound interest:

A = P(1 + r)ⁿ

P = principal
r = interest rate per period
n = number of periods
A = final amount.

Interest is calculated on the accumulated amount.`
        },

        {
            keywords: ["compound interest monthly"],
            answer:
`If interest is compounded more than once per year:

A = P(1 + r/m)^(mt)

m = number of compounding periods per year
t = number of years.`
        },

        {
            keywords: ["arithmetic sequence"],
            answer:
`An arithmetic sequence has a constant difference.

Example:

3, 7, 11, 15

Common difference = 4.

The nth term is:

Tₙ = a + (n−1)d.`
        },

        {
            keywords: ["geometric sequence"],
            answer:
`A geometric sequence has a constant ratio.

Example:

2, 6, 18, 54

Common ratio = 3.

The nth term is:

Tₙ = arⁿ⁻¹.`
        },

        {
            keywords: ["trigonometry", "sine cosine tangent"],
            answer:
`For a right-angled triangle:

SOH:
sin θ = opposite ÷ hypotenuse

CAH:
cos θ = adjacent ÷ hypotenuse

TOA:
tan θ = opposite ÷ adjacent.`
        },

        {
            keywords: ["pythagoras", "pythagorean theorem"],
            answer:
`Pythagoras' theorem applies to right-angled triangles.

a² + b² = c²

where c is the hypotenuse.

Example:

a = 3
b = 4

c² = 3² + 4²
= 9 + 16
= 25

c = 5.`
        },

        {
            keywords: ["area circle"],
            answer:
`Area of a circle:

A = πr²

r = radius.`
        },

        {
            keywords: ["circumference"],
            answer:
`Circumference of a circle:

C = 2πr

or

C = πd.`
        },

        {
            keywords: ["area triangle"],
            answer:
`Area of a triangle:

A = 1/2 × base × height.`
        },

        {
            keywords: ["area rectangle"],
            answer:
`Area of a rectangle:

A = length × width.`
        },

        {
            keywords: ["volume cylinder"],
            answer:
`Volume of a cylinder:

V = πr²h

r = radius
h = height.`
        },

        {
            keywords: ["derivative", "differentiation", "calculus derivative"],
            answer:
`Differentiation measures the rate at which one quantity changes with respect to another.

Power rule:

If:

y = xⁿ

then:

dy/dx = nxⁿ⁻¹

Example:

y = x³

dy/dx = 3x².`
        },

        {
            keywords: ["integration", "integral"],
            answer:
`Integration is the reverse process of differentiation.

Power rule:

∫xⁿ dx =
xⁿ⁺¹/(n+1) + C

where n ≠ −1.

Example:

∫x² dx
= x³/3 + C.`
        },

        {
            keywords: ["simultaneous equations"],
            answer:
`To solve simultaneous equations you can use:

• Substitution
• Elimination
• Graphical methods

The goal is to find values satisfying both equations.`
        }

    ];


    /* =========================================================
       SUBJECT DETECTION
       ========================================================= */

    const subjectWords = {

        accounting: [
            "accounting",
            "account",
            "assets",
            "liabilities",
            "equity",
            "debit",
            "credit",
            "ledger",
            "journal",
            "trial balance",
            "vat",
            "audit",
            "auditing",
            "ifrs",
            "ias",
            "inventory",
            "depreciation",
            "profit",
            "tax",
            "receivables",
            "payables",
            "balance sheet",
            "financial statements",
            "cost accounting",
            "management accounting",
            "gross profit",
            "net profit",
            "consolidation"
        ],

        economics: [
            "economics",
            "economy",
            "demand",
            "supply",
            "inflation",
            "unemployment",
            "gdp",
            "market",
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
            "market structure",
            "monopoly",
            "oligopoly",
            "competition"
        ],

        mathematics: [
            "math",
            "mathematics",
            "calculate",
            "equation",
            "algebra",
            "quadratic",
            "percentage",
            "probability",
            "statistics",
            "mean",
            "median",
            "mode",
            "gradient",
            "slope",
            "function",
            "calculus",
            "derivative",
            "integration",
            "trigonometry",
            "sine",
            "cosine",
            "tangent",
            "geometry",
            "pythagoras",
            "sequence",
            "indices",
            "exponents"
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
                    scores[subject] += word.length > 6 ? 2 : 1;
                }

            });
        }

        const sorted = Object.entries(scores)
            .sort((a,b) => b[1] - a[1]);

        if (sorted[0][1] === 0) {
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

                if (text.includes(keyword.toLowerCase())) {
                    score += keyword.length > 7 ? 5 : 3;
                }

            });

            if (score > bestScore) {
                bestScore = score;
                best = item;
            }

        });

        return bestScore >= 3 ? best.answer : null;
    }


    /* =========================================================
       SIMPLE CALCULATOR
       ========================================================= */

    function calculateQuestion(question) {

        const text = question.toLowerCase();

        const percentageMatch =
            text.match(/(\d+(?:\.\d+)?)\s*%\s*(?:of)\s*(\d+(?:\.\d+)?)/);

        if (percentageMatch) {

            const percent = Number(percentageMatch[1]);
            const number = Number(percentageMatch[2]);
            const result = number * percent / 100;

            return `${percent}% of ${number} = ${result}.`;
        }


        const multiplication =
            text.match(/(\d+(?:\.\d+)?)\s*(?:x|\*|times)\s*(\d+(?:\.\d+)?)/);

        if (multiplication) {

            const a = Number(multiplication[1]);
            const b = Number(multiplication[2]);

            return `${a} × ${b} = ${a * b}.`;
        }


        const addition =
            text.match(/(\d+(?:\.\d+)?)\s*(?:\+|plus)\s*(\d+(?:\.\d+)?)/);

        if (addition) {

            const a = Number(addition[1]);
            const b = Number(addition[2]);

            return `${a} + ${b} = ${a + b}.`;
        }


        const subtraction =
            text.match(/(\d+(?:\.\d+)?)\s*(?:-|minus)\s*(\d+(?:\.\d+)?)/);

        if (subtraction) {

            const a = Number(subtraction[1]);
            const b = Number(subtraction[2]);

            return `${a} − ${b} = ${a - b}.`;
        }


        const division =
            text.match(/(\d+(?:\.\d+)?)\s*(?:\/|÷|divided by)\s*(\d+(?:\.\d+)?)/);

        if (division) {

            const a = Number(division[1]);
            const b = Number(division[2]);

            if (b !== 0) {
                return `${a} ÷ ${b} = ${a / b}.`;
            }
        }

        return null;
    }


    /* =========================================================
       COMMON QUESTIONS
       ========================================================= */

    function generalAnswer(question) {

        const text = question.toLowerCase().trim();

        if (
            text === "hi" ||
            text === "hello" ||
            text === "hey" ||
            text === "hi mastercommerce" ||
            text === "hello mastercommerce"
        ) {
            return `Hello. I'm Mastercommerce.

I can help you study Accounting, Economics and Mathematics.

Ask me a question and I will explain it step by step.`;
        }


        if (
            text.includes("who are you") ||
            text.includes("what are you")
        ) {
            return `I'm Mastercommerce, an educational learning assistant for Accounting, Economics and Mathematics.

I can help with definitions, explanations, calculations, examples, essay structures and revision.`;
        }


        if (
            text.includes("who made you") ||
            text.includes("who created you") ||
            text.includes("developer")
        ) {
            return `Mastercommerce was developed by ${developerInformation.developer}.

Founder:
${developerInformation.founder}

Location:
${developerInformation.location}

Education:
${developerInformation.education}`;
        }


        if (
            text.includes("what can you do") ||
            text.includes("help me")
        ) {
            return `I can help you with:

Accounting
• Financial accounting
• Management accounting
• Auditing
• Tax
• IFRS and IAS
• Ratios
• Costing
• Financial statements

Economics
• Microeconomics
• Macroeconomics
• Economic policies
• Markets
• Elasticity
• Economic indicators
• Essay writing

Mathematics
• Algebra
• Equations
• Functions
• Statistics
• Probability
• Geometry
• Trigonometry
• Calculus
• Financial mathematics`;
        }

        return null;
    }


    /* =========================================================
       SMART RESPONSE ENGINE
       ========================================================= */

    function generateAnswer(question) {

        const general = generalAnswer(question);

        if (general) {
            return general;
        }


        const calculation = calculateQuestion(question);

        if (calculation) {
            return calculation;
        }


        const subject = detectSubject(question);

        const knowledgeAnswer = searchKnowledge(
            question,
            subject
        );

        if (knowledgeAnswer) {
            return knowledgeAnswer;
        }


        const text = question.toLowerCase();


        /* DEFINITION ENGINE */

        if (
            text.startsWith("what is ") ||
            text.startsWith("what are ") ||
            text.includes("define ")
        ) {

            const concept = text
                .replace("what is ", "")
                .replace("what are ", "")
                .replace("define ", "")
                .trim();

            return `I don't have a dedicated explanation for "${concept}" in my current knowledge base.

Try asking the question with the subject included, for example:

"What is inflation in Economics?"

"What is depreciation in Accounting?"

"What is a quadratic equation in Mathematics?"`;
        }


        /* COMPARE ENGINE */

        if (
            text.includes("difference between") ||
            text.includes("difference of")
        ) {

            return `To compare two concepts, look at:

1. Definition
2. Purpose
3. Main characteristics
4. Formula, where applicable
5. Example
6. Practical application

Please include the two concepts you want compared, for example:

"What is the difference between assets and liabilities?"`;
        }


        /* ESSAY ENGINE */

        if (
            text.includes("essay") ||
            text.includes("discuss") ||
            text.includes("evaluate")
        ) {

            return `For an academic Economics essay, use this structure:

INTRODUCTION

Define the main concept and introduce the issue.

BODY

Explain the first argument clearly.
Explain why it happens.
Explain its economic effect.
Give an example.

Then discuss the next argument.

EVALUATION

Consider both sides where appropriate.
Discuss short-run and long-run effects.
Consider different groups affected.
Mention conditions or limitations.

CONCLUSION

Summarise the main arguments and answer the question directly.

If you give me the exact essay question, I can build the essay structure around it.`;
        }


        /* UNKNOWN */

        if (!subject) {

            return `I'm not completely sure which subject you mean.

I currently specialise in:

Accounting
Economics
Mathematics

Please mention the subject or ask the question again with a little more detail.`;
        }


        return `I understand that this is a ${subject} question, but I don't currently have a specific built-in explanation for that exact topic.

Try asking it in another way, or include the topic and I can use the related concepts I know to help you work through it.

For example:

"What is the meaning of this?"

"Give me an example."

"Explain it simply."

"Calculate it."

"What is the formula?"`;
    }


    /* =========================================================
       CHAT UI
       ========================================================= */

    const messages = document.getElementById("messages");
    const welcomeScreen = document.getElementById("welcomeScreen");
    const questionInput = document.getElementById("questionInput");
    const sendButton = document.getElementById("sendButton");


    function createMessage(text, type) {

        const message = document.createElement("div");

        message.className = `message ${type}`;

        const avatar = document.createElement("div");

        avatar.className = "message-avatar";

        avatar.textContent =
            type === "user" ? "You" : "M";


        const body = document.createElement("div");

        body.className = "message-body";


        const label = document.createElement("div");

        label.className = "message-label";

        label.textContent =
            type === "user" ? "You" : "Mastercommerce";


        const content = document.createElement("div");

        content.className = "message-content";

        content.textContent = text;


        body.appendChild(label);
        body.appendChild(content);

        message.appendChild(avatar);
        message.appendChild(body);

        messages.appendChild(message);

        document.getElementById("chatContainer")
            .scrollTo({
                top: document.getElementById("chatContainer").scrollHeight,
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

        const question = questionInput.value.trim();

        if (!question) {
            return;
        }

        welcomeScreen.style.display = "none";

        createMessage(question, "user");

        questionInput.value = "";
        questionInput.style.height = "42px";

        sendButton.disabled = true;

        const thinking = createThinkingMessage();

        setTimeout(() => {

            const answer = generateAnswer(question);

            thinking.remove();

            createMessage(answer, "assistant");

            sendButton.disabled = false;

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

            questionInput.style.height = "42px";

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
        document.getElementById("sidebarOverlay");

    const menuButton =
        document.getElementById("menuButton");

    const closeSidebar =
        document.getElementById("closeSidebar");


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

                messages.innerHTML = "";

                welcomeScreen.style.display =
                    "block";

                questionInput.value = "";

                closeSideMenu();

                questionInput.focus();
            }
        );


    /* =========================================================
       PLUS MENU
       ========================================================= */

    const plusButton =
        document.getElementById("plusButton");

    const plusMenu =
        document.getElementById("plusMenu");

    const featureToast =
        document.getElementById("featureToast");


    plusButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            const visible =
                plusMenu.classList.toggle("show");

            plusButton.setAttribute(
                "aria-expanded",
                visible ? "true" : "false"
            );

            plusMenu.setAttribute(
                "aria-hidden",
                visible ? "false" : "true"
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

                    plusMenu.classList.remove("show");

                    featureToast.textContent =
                        `${feature} is currently under development.`;

                    featureToast.classList.add("show");

                    setTimeout(() => {

                        featureToast.classList.remove("show");

                    }, 2500);
                }
            );
        });


    document.addEventListener(
        "click",
        event => {

            if (
                !plusMenu.contains(event.target) &&
                event.target !== plusButton
            ) {

                plusMenu.classList.remove("show");

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
        document.getElementById("aboutModal");

    const settingsModal =
        document.getElementById("settingsModal");


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
                        .classList.add("hidden");
                }
            );
        });


    [aboutModal, settingsModal]
        .forEach(modal => {

            modal.addEventListener(
                "click",
                event => {

                    if (event.target === modal) {
                        modal.classList.add("hidden");
                    }

                }
            );

        });


    /* =========================================================
       NAVIGATION
       ========================================================= */

    document
        .querySelectorAll(".navigation-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const page =
                        button.dataset.page;

                    document
                        .querySelectorAll(".navigation-button")
                        .forEach(item =>
                            item.classList.remove("active")
                        );

                    button.classList.add("active");

                    closeSideMenu();


                    if (page === "home") {

                        aboutModal.classList.add("hidden");
                        settingsModal.classList.add("hidden");

                        document
                            .getElementById("chatContainer")
                            .scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                    }


                    if (page === "about") {

                        aboutModal.classList.remove("hidden");
                    }


                    if (page === "settings") {

                        settingsModal.classList.remove("hidden");
                    }

                }
            );

        });


    /* =========================================================
       SETTINGS
       ========================================================= */

    const darkModeToggle =
        document.getElementById("darkModeToggle");

    const motionToggle =
        document.getElementById("motionToggle");


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
        .querySelectorAll("[data-background]")
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
        .querySelectorAll("[data-font]")
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
        .getElementById("clearChatButton")
        .addEventListener(
            "click",
            () => {

                messages.innerHTML = "";

                welcomeScreen.style.display =
                    "block";

                settingsModal.classList.add("hidden");
            }
        );


    /* =========================================================
       RESET SETTINGS
       ========================================================= */

    document
        .getElementById("resetSettingsButton")
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
