document.addEventListener("DOMContentLoaded", () => {

    if (window.mastercommerceLoaded) return;
    window.mastercommerceLoaded = true;

    /* =========================================================
       MASTERCOMMERCE
       Frontend educational tutor
       Built-in knowledge + user learning + Wikipedia
       ========================================================= */

    /* =========================================================
       DOM ELEMENTS
       ========================================================= */

    const sidebar =
        document.getElementById("sidebar");

    const menuButton =
        document.getElementById("menuButton");

    const closeSidebar =
        document.getElementById("closeSidebar");

    const homeButton =
        document.getElementById("homeButton");

    const aboutButton =
        document.getElementById("aboutButton");

    const settingsButton =
        document.getElementById("settingsButton");

    const newChatButton =
        document.getElementById("newChatButton");

    const clearChatButton =
        document.getElementById("clearChatButton");

    const chat =
        document.getElementById("chat");

    const welcome =
        document.getElementById("welcome");

    const messageInput =
        document.getElementById("messageInput");

    const sendButton =
        document.getElementById("sendButton");

    const plusButton =
        document.getElementById("plusButton");

    const plusMenu =
        document.getElementById("plusMenu");

    const featureToast =
        document.getElementById("featureToast");

    const aboutModal =
        document.getElementById("aboutModal");

    const settingsModal =
        document.getElementById("settingsModal");

    const closeAbout =
        document.getElementById("closeAbout");

    const closeSettings =
        document.getElementById("closeSettings");

    const themeSelect =
        document.getElementById("themeSelect");

    const backgroundSelect =
        document.getElementById("backgroundSelect");

    const fontSizeSelect =
        document.getElementById("fontSizeSelect");

    const motionSelect =
        document.getElementById("motionSelect");

    const resetSettingsButton =
        document.getElementById("resetSettings");


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
       LOCAL STORAGE
       ========================================================= */

    const LEARNED_KNOWLEDGE_KEY =
        "mastercommerce_learned_knowledge";

    const CHAT_HISTORY_KEY =
        "mastercommerce_chat_history";


    function getLearnedKnowledge() {

        try {

            const saved =
                localStorage.getItem(
                    LEARNED_KNOWLEDGE_KEY
                );

            if (!saved) {
                return [];
            }

            const data =
                JSON.parse(saved);

            return Array.isArray(data)
                ? data
                : [];

        } catch (error) {

            console.error(
                "Could not load learned knowledge:",
                error
            );

            return [];
        }
    }


    function saveLearnedKnowledge(knowledge) {

        try {

            localStorage.setItem(
                LEARNED_KNOWLEDGE_KEY,
                JSON.stringify(knowledge)
            );

        } catch (error) {

            console.error(
                "Could not save learned knowledge:",
                error
            );
        }
    }


    /* =========================================================
       ACCOUNTING KNOWLEDGE
       ========================================================= */

    const accountingKnowledge = [

        {
            topic: "accounting equation",
            keywords: [
                "accounting equation",
                "assets liabilities equity",
                "basic accounting equation"
            ],
            answer:
                "The accounting equation is Assets = Liabilities + Equity. It means that everything a business owns is financed either by money owed to outsiders or by the owner's interest in the business."
        },

        {
            topic: "assets",
            keywords: [
                "asset",
                "assets",
                "resources",
                "business assets"
            ],
            answer:
                "An asset is a resource controlled by a business as a result of past events and from which future economic benefits are expected. Examples include cash, inventory, vehicles, buildings and equipment."
        },

        {
            topic: "current assets",
            keywords: [
                "current assets",
                "current asset"
            ],
            answer:
                "Current assets are assets expected to be converted into cash, sold or consumed within the normal operating cycle or generally within 12 months. Examples include cash, inventory and trade receivables."
        },

        {
            topic: "non-current assets",
            keywords: [
                "non current assets",
                "non-current assets",
                "fixed assets"
            ],
            answer:
                "Non-current assets are assets held for long-term use in the business. Examples include land, buildings, machinery, vehicles and equipment."
        },

        {
            topic: "liabilities",
            keywords: [
                "liability",
                "liabilities",
                "amounts owed",
                "business debt"
            ],
            answer:
                "A liability is a present obligation of a business arising from past events that is expected to result in an outflow of economic resources. Examples include loans, trade payables and accrued expenses."
        },

        {
            topic: "current liabilities",
            keywords: [
                "current liabilities",
                "current liability"
            ],
            answer:
                "Current liabilities are obligations normally expected to be settled within the normal operating cycle or within 12 months. Examples include trade payables, short-term loans and accrued expenses."
        },

        {
            topic: "equity",
            keywords: [
                "equity",
                "owners equity",
                "owner equity"
            ],
            answer:
                "Equity is the owner's residual interest in the assets of a business after deducting liabilities. The basic relationship is Equity = Assets - Liabilities."
        },

        {
            topic: "revenue",
            keywords: [
                "revenue",
                "income",
                "sales revenue",
                "income earned"
            ],
            answer:
                "Revenue is income earned by a business from its ordinary activities, such as selling goods or providing services."
        },

        {
            topic: "expenses",
            keywords: [
                "expense",
                "expenses",
                "business expenses"
            ],
            answer:
                "Expenses are decreases in economic benefits during an accounting period that result in decreases in equity, other than distributions to owners. Examples include salaries, rent, electricity and depreciation."
        },

        {
            topic: "double entry",
            keywords: [
                "double entry",
                "double entry system",
                "debit credit"
            ],
            answer:
                "Double-entry accounting records every transaction in at least two accounts. The total debits must equal the total credits."
        },

        {
            topic: "debit and credit",
            keywords: [
                "debit",
                "credit",
                "debits credits"
            ],
            answer:
                "In basic accounting, assets and expenses normally increase with debits, while liabilities, equity and income normally increase with credits."
        },

        {
            topic: "trial balance",
            keywords: [
                "trial balance",
                "trial balances"
            ],
            answer:
                "A trial balance is a list of ledger account balances prepared to check whether total debit balances equal total credit balances."
        },

        {
            topic: "bank reconciliation",
            keywords: [
                "bank reconciliation",
                "bank recon",
                "bank statement"
            ],
            answer:
                "A bank reconciliation compares the business's cash book with the bank statement and explains differences such as outstanding cheques, deposits in transit and bank charges."
        },

        {
            topic: "depreciation",
            keywords: [
                "depreciation",
                "depreciate",
                "depreciation expense"
            ],
            answer:
                "Depreciation is the systematic allocation of the depreciable amount of an asset over its useful life. Common methods include straight-line and diminishing-balance methods."
        },

        {
            topic: "inventory",
            keywords: [
                "inventory",
                "stock",
                "inventories"
            ],
            answer:
                "Inventory consists of assets held for sale, in the process of production for sale, or materials and supplies to be consumed in production or services. Under IAS 2, inventory is generally measured at the lower of cost and net realisable value."
        },

        {
            topic: "receivables",
            keywords: [
                "receivables",
                "trade receivables",
                "debtors",
                "accounts receivable"
            ],
            answer:
                "Trade receivables are amounts owed to a business by customers who bought goods or services on credit."
        },

        {
            topic: "payables",
            keywords: [
                "payables",
                "trade payables",
                "creditors",
                "accounts payable"
            ],
            answer:
                "Trade payables are amounts owed by a business to suppliers for goods or services purchased on credit."
        },

        {
            topic: "VAT",
            keywords: [
                "vat",
                "value added tax",
                "output vat",
                "input vat"
            ],
            answer:
                "VAT is a consumption tax charged on taxable supplies of goods and services. Output VAT is VAT charged by a business to customers, while input VAT is VAT paid by the business on qualifying purchases."
        },

        {
            topic: "gross profit",
            keywords: [
                "gross profit",
                "gross profit calculation"
            ],
            answer:
                "Gross profit is calculated as Sales minus Cost of Sales. Gross profit shows the profit made from trading activities before operating expenses are deducted."
        },

        {
            topic: "net profit",
            keywords: [
                "net profit",
                "net income",
                "profit after expenses"
            ],
            answer:
                "Net profit is the amount remaining after all relevant expenses have been deducted from income."
        },

        {
            topic: "gross profit margin",
            keywords: [
                "gross profit margin",
                "gross margin"
            ],
            answer:
                "Gross profit margin = Gross Profit / Revenue × 100. It measures how much gross profit is generated from each rand of revenue."
        },

        {
            topic: "net profit margin",
            keywords: [
                "net profit margin",
                "net margin"
            ],
            answer:
                "Net profit margin = Net Profit / Revenue × 100. It measures the percentage of revenue that remains as net profit after expenses."
        },

        {
            topic: "current ratio",
            keywords: [
                "current ratio",
                "current ratio formula"
            ],
            answer:
                "Current ratio = Current Assets / Current Liabilities. It is a liquidity ratio used to assess the ability of a business to meet short-term obligations."
        },

        {
            topic: "acid test ratio",
            keywords: [
                "acid test",
                "acid test ratio",
                "quick ratio"
            ],
            answer:
                "The acid-test ratio is usually calculated as (Current Assets - Inventory) / Current Liabilities. It measures short-term liquidity without relying on selling inventory."
        },

        {
            topic: "inventory turnover",
            keywords: [
                "inventory turnover",
                "stock turnover"
            ],
            answer:
                "Inventory turnover measures how many times inventory is sold or used during a period. A common formula is Cost of Sales / Average Inventory."
        },

        {
            topic: "debtors collection period",
            keywords: [
                "debtors collection period",
                "receivables collection period",
                "collection period"
            ],
            answer:
                "Debtors collection period estimates the average number of days customers take to pay. A common formula is Average Trade Receivables / Credit Sales × 365."
        },

        {
            topic: "debt ratio",
            keywords: [
                "debt ratio",
                "debt to assets"
            ],
            answer:
                "Debt ratio measures the proportion of assets financed by debt. A common formula is Total Liabilities / Total Assets × 100."
        },

        {
            topic: "break even",
            keywords: [
                "break even",
                "break-even",
                "break even point"
            ],
            answer:
                "The break-even point is the level of sales where total revenue equals total costs, meaning the business makes neither a profit nor a loss."
        },

        {
            topic: "contribution",
            keywords: [
                "contribution",
                "contribution margin"
            ],
            answer:
                "Contribution is Sales minus Variable Costs. Contribution first covers fixed costs and then contributes to profit."
        },

        {
            topic: "fixed costs",
            keywords: [
                "fixed cost",
                "fixed costs"
            ],
            answer:
                "Fixed costs are costs that generally remain constant in total within a relevant range despite changes in activity. Examples include rent and some salaries."
        },

        {
            topic: "variable costs",
            keywords: [
                "variable cost",
                "variable costs"
            ],
            answer:
                "Variable costs change in total as the level of activity changes. Examples can include direct materials and sales commissions."
        },

        {
            topic: "marginal cost",
            keywords: [
                "marginal cost",
                "marginal costing"
            ],
            answer:
                "Marginal cost is the additional cost caused by producing one additional unit of output."
        },

        {
            topic: "sunk cost",
            keywords: [
                "sunk cost",
                "sunk costs"
            ],
            answer:
                "A sunk cost is a cost that has already been incurred and cannot be recovered. Because it cannot be changed by a current decision, it is normally irrelevant to that decision."
        },

        {
            topic: "opportunity cost",
            keywords: [
                "opportunity cost",
                "opportunity costs"
            ],
            answer:
                "Opportunity cost is the benefit given up when one alternative is chosen instead of the next best alternative."
        },

        {
            topic: "relevant cost",
            keywords: [
                "relevant cost",
                "relevant costs"
            ],
            answer:
                "A relevant cost is a future cost that differs between decision alternatives. Relevant costs can therefore affect a decision."
        },

        {
            topic: "absorption costing",
            keywords: [
                "absorption costing",
                "absorption cost"
            ],
            answer:
                "Absorption costing assigns both variable and fixed manufacturing costs to products. Fixed manufacturing overhead is therefore included in product cost."
        },

        {
            topic: "variable costing",
            keywords: [
                "variable costing",
                "marginal costing"
            ],
            answer:
                "Variable costing treats variable manufacturing costs as product costs while fixed manufacturing overhead is treated as a period cost."
        },

        {
            topic: "IAS 16",
            keywords: [
                "ias 16",
                "property plant equipment",
                "ppe"
            ],
            answer:
                "IAS 16 deals with Property, Plant and Equipment. It covers recognition, measurement, depreciation and derecognition of qualifying tangible non-current assets."
        },

        {
            topic: "IAS 2",
            keywords: [
                "ias 2",
                "inventory accounting"
            ],
            answer:
                "IAS 2 deals with Inventories. Inventory is generally measured at the lower of cost and net realisable value."
        },

        {
            topic: "IAS 12",
            keywords: [
                "ias 12",
                "income tax",
                "deferred tax"
            ],
            answer:
                "IAS 12 deals with Income Taxes. It includes current tax and deferred tax arising from temporary differences."
        },

        {
            topic: "IAS 21",
            keywords: [
                "ias 21",
                "foreign currency",
                "exchange rates"
            ],
            answer:
                "IAS 21 deals with the effects of changes in foreign exchange rates, including foreign currency transactions and translation of foreign operations."
        },

        {
            topic: "IFRS 15",
            keywords: [
                "ifrs 15",
                "revenue recognition",
                "revenue from contracts"
            ],
            answer:
                "IFRS 15 provides principles for recognising revenue from contracts with customers. It uses a five-step model for revenue recognition."
        },

        {
            topic: "IFRS 9",
            keywords: [
                "ifrs 9",
                "financial instruments",
                "amortised cost",
                "fvtpl"
            ],
            answer:
                "IFRS 9 deals with financial instruments. It includes classification and measurement of financial assets and liabilities, impairment and hedge accounting."
        },

        {
            topic: "IFRS 10",
            keywords: [
                "ifrs 10",
                "consolidation",
                "subsidiary",
                "control"
            ],
            answer:
                "IFRS 10 deals with consolidated financial statements. An investor generally consolidates an investee when it controls the investee."
        },

        {
            topic: "IAS 28",
            keywords: [
                "ias 28",
                "associate",
                "significant influence",
                "equity method"
            ],
            answer:
                "IAS 28 deals with investments in associates and joint ventures. Significant influence is the power to participate in financial and operating policy decisions without having control."
        },

        {
            topic: "audit",
            keywords: [
                "audit",
                "auditing",
                "external audit"
            ],
            answer:
                "An audit is an independent examination of financial information designed to provide assurance that financial statements are prepared in accordance with the applicable financial reporting framework."
        },

        {
            topic: "audit evidence",
            keywords: [
                "audit evidence",
                "evidence in auditing"
            ],
            answer:
                "Audit evidence is the information used by an auditor in arriving at conclusions on which the audit opinion is based. Examples include documents, confirmations, observations and analytical procedures."
        },

        {
            topic: "audit risk",
            keywords: [
                "audit risk",
                "risk of material misstatement",
                "detection risk"
            ],
            answer:
                "Audit risk is the risk that an auditor expresses an inappropriate audit opinion when the financial statements are materially misstated. It is commonly discussed using inherent risk, control risk and detection risk."
        },

        {
            topic: "internal controls",
            keywords: [
                "internal control",
                "internal controls",
                "control environment"
            ],
            answer:
                "Internal controls are policies and procedures designed to help an organisation achieve objectives such as reliable financial reporting, efficient operations and compliance with laws and regulations."
        },

        {
            topic: "accounting cycle",
            keywords: [
                "accounting cycle",
                "accounting process"
            ],
            answer:
                "The accounting cycle is the process of identifying, recording, classifying, summarising and reporting financial transactions during an accounting period."
        },

        {
            topic: "statement of financial position",
            keywords: [
                "statement of financial position",
                "balance sheet"
            ],
            answer:
                "The statement of financial position reports a business's assets, liabilities and equity at a specific date."
        },

        {
            topic: "income statement",
            keywords: [
                "income statement",
                "statement of profit or loss",
                "profit and loss"
            ],
            answer:
                "The income statement reports income and expenses for a period and shows whether the business made a profit or loss."
        },

        {
            topic: "cash flow statement",
            keywords: [
                "cash flow statement",
                "cash flows"
            ],
            answer:
                "The statement of cash flows reports cash inflows and cash outflows from operating, investing and financing activities."
        },

        {
            topic: "working capital",
            keywords: [
                "working capital"
            ],
            answer:
                "Working capital is commonly calculated as Current Assets minus Current Liabilities. It indicates the short-term resources available to meet short-term obligations."
        },

        {
            topic: "return on equity",
            keywords: [
                "return on equity",
                "roe"
            ],
            answer:
                "Return on equity measures the profit generated relative to shareholders' equity. A common formula is Profit after Tax / Average Equity × 100."
        },

        {
            topic: "return on assets",
            keywords: [
                "return on assets",
                "roa"
            ],
            answer:
                "Return on assets measures how effectively a business uses its assets to generate profit. A common formula is Profit / Average Total Assets × 100."
        },

        {
            topic: "earnings per share",
            keywords: [
                "earnings per share",
                "eps"
            ],
            answer:
                "Earnings per share measures the amount of profit attributable to ordinary shareholders per ordinary share."
        }

    ];


    /* =========================================================
       ECONOMICS KNOWLEDGE
       ========================================================= */

    const economicsKnowledge = [

        {
            topic: "economics",
            keywords: [
                "economics",
                "what is economics"
            ],
            answer:
                "Economics is the study of how individuals, businesses and governments make choices about using scarce resources that have alternative uses."
        },

        {
            topic: "scarcity",
            keywords: [
                "scarcity",
                "scarce resources"
            ],
            answer:
                "Scarcity exists because human wants are unlimited while resources available to satisfy those wants are limited."
        },

        {
            topic: "opportunity cost",
            keywords: [
                "opportunity cost",
                "next best alternative"
            ],
            answer:
                "Opportunity cost is the value of the next best alternative that is given up when a choice is made."
        },

        {
            topic: "factors of production",
            keywords: [
                "factors of production",
                "land labour capital entrepreneurship"
            ],
            answer:
                "The four main factors of production are land, labour, capital and entrepreneurship."
        },

        {
            topic: "demand",
            keywords: [
                "demand",
                "law of demand"
            ],
            answer:
                "Demand refers to the quantity of a good or service consumers are willing and able to buy at different prices during a given period. The law of demand generally states that, other things being equal, quantity demanded falls when price rises."
        },

        {
            topic: "supply",
            keywords: [
                "supply",
                "law of supply"
            ],
            answer:
                "Supply refers to the quantity of a good or service producers are willing and able to offer for sale at different prices during a given period. The law of supply generally states that quantity supplied rises as price rises, other things being equal."
        },

        {
            topic: "equilibrium",
            keywords: [
                "market equilibrium",
                "equilibrium price",
                "equilibrium quantity"
            ],
            answer:
                "Market equilibrium occurs where quantity demanded equals quantity supplied."
        },

        {
            topic: "shortage",
            keywords: [
                "shortage",
                "scarcity in market"
            ],
            answer:
                "A shortage occurs when quantity demanded is greater than quantity supplied at a particular price."
        },

        {
            topic: "surplus",
            keywords: [
                "surplus",
                "market surplus"
            ],
            answer:
                "A surplus occurs when quantity supplied is greater than quantity demanded at a particular price."
        },

        {
            topic: "elasticity",
            keywords: [
                "elasticity",
                "price elasticity"
            ],
            answer:
                "Elasticity measures how responsive one variable is to a change in another variable. Price elasticity of demand measures how responsive quantity demanded is to a change in price."
        },

        {
            topic: "substitutes",
            keywords: [
                "substitute goods",
                "substitutes"
            ],
            answer:
                "Substitute goods are goods that can be used in place of one another, such as tea and coffee."
        },

        {
            topic: "complements",
            keywords: [
                "complementary goods",
                "complements"
            ],
            answer:
                "Complementary goods are goods that are used together, such as cars and fuel."
        },

        {
            topic: "utility",
            keywords: [
                "utility",
                "consumer utility"
            ],
            answer:
                "Utility is the satisfaction or benefit a consumer receives from consuming a good or service."
        },

        {
            topic: "production possibility frontier",
            keywords: [
                "ppf",
                "production possibility frontier",
                "production possibility curve"
            ],
            answer:
                "A production possibility frontier shows the maximum combinations of two goods or services that can be produced using available resources and technology efficiently."
        },

        {
            topic: "perfect competition",
            keywords: [
                "perfect competition",
                "perfectly competitive market"
            ],
            answer:
                "Perfect competition is a market structure characterised by many buyers and sellers, homogeneous products, relatively free entry and exit, and firms that are price takers."
        },

        {
            topic: "monopoly",
            keywords: [
                "monopoly",
                "monopolist"
            ],
            answer:
                "A monopoly is a market structure where a single firm is the main or sole supplier of a product or service and significant barriers to entry exist."
        },

        {
            topic: "oligopoly",
            keywords: [
                "oligopoly",
                "oligopolies"
            ],
            answer:
                "An oligopoly is a market structure dominated by a small number of firms whose decisions can affect one another."
        },

        {
            topic: "monopolistic competition",
            keywords: [
                "monopolistic competition"
            ],
            answer:
                "Monopolistic competition is a market structure with many firms selling differentiated products and relatively easy entry and exit."
        },

        {
            topic: "externalities",
            keywords: [
                "externality",
                "externalities",
                "negative externality",
                "positive externality"
            ],
            answer:
                "An externality occurs when an economic activity creates costs or benefits for third parties who are not directly involved in the transaction. Pollution is an example of a negative externality."
        },

        {
            topic: "public goods",
            keywords: [
                "public goods",
                "public good"
            ],
            answer:
                "Public goods are goods that are generally non-rival and non-excludable. National defence is a common example."
        },

        {
            topic: "market failure",
            keywords: [
                "market failure",
                "failure of market"
            ],
            answer:
                "Market failure occurs when the market allocation of resources does not lead to an economically efficient outcome. Causes can include externalities, public goods, information problems and market power."
        },

        {
            topic: "inflation",
            keywords: [
                "inflation",
                "inflation rate"
            ],
            answer:
                "Inflation is a sustained increase in the general price level of goods and services over time, which reduces the purchasing power of money."
        },

        {
            topic: "demand pull inflation",
            keywords: [
                "demand pull inflation",
                "demand-pull inflation"
            ],
            answer:
                "Demand-pull inflation occurs when aggregate demand grows faster than the economy's ability to produce goods and services."
        },

        {
            topic: "cost push inflation",
            keywords: [
                "cost push inflation",
                "cost-push inflation"
            ],
            answer:
                "Cost-push inflation occurs when increases in production costs, such as wages or raw materials, put upward pressure on prices."
        },

        {
            topic: "unemployment",
            keywords: [
                "unemployment",
                "unemployed"
            ],
            answer:
                "Unemployment occurs when people who are willing and able to work and are actively seeking work cannot find employment."
        },

        {
            topic: "types of unemployment",
            keywords: [
                "types of unemployment",
                "frictional unemployment",
                "structural unemployment",
                "cyclical unemployment"
            ],
            answer:
                "Common types of unemployment include frictional, structural, cyclical and seasonal unemployment."
        },

        {
            topic: "GDP",
            keywords: [
                "gdp",
                "gross domestic product"
            ],
            answer:
                "Gross domestic product, or GDP, is the monetary value of final goods and services produced within a country's borders during a given period."
        },

        {
            topic: "real GDP",
            keywords: [
                "real gdp"
            ],
            answer:
                "Real GDP measures the value of final goods and services using prices from a base period, allowing changes in production to be separated from changes in prices."
        },

        {
            topic: "nominal GDP",
            keywords: [
                "nominal gdp"
            ],
            answer:
                "Nominal GDP measures the value of final goods and services using current prices."
        },

        {
            topic: "economic growth",
            keywords: [
                "economic growth",
                "growth"
            ],
            answer:
                "Economic growth is an increase in the production of goods and services in an economy, commonly measured by an increase in real GDP."
        },

        {
            topic: "economic development",
            keywords: [
                "economic development",
                "development"
            ],
            answer:
                "Economic development is a broader improvement in people's economic and social well-being. It can include improvements in income, health, education, living standards and economic opportunities."
        },

        {
            topic: "business cycle",
            keywords: [
                "business cycle",
                "economic cycle"
            ],
            answer:
                "The business cycle describes fluctuations in economic activity over time. Common phases include expansion, peak, contraction and trough."
        },

        {
            topic: "fiscal policy",
            keywords: [
                "fiscal policy",
                "government spending",
                "taxation policy"
            ],
            answer:
                "Fiscal policy refers to government decisions about taxation and government spending used to influence economic activity."
        },

        {
            topic: "monetary policy",
            keywords: [
                "monetary policy",
                "interest rate policy",
                "central bank policy"
            ],
            answer:
                "Monetary policy involves actions by a central bank to influence money, credit and interest rates in order to achieve economic objectives such as price stability."
        },

        {
            topic: "aggregate demand",
            keywords: [
                "aggregate demand",
                "ad"
            ],
            answer:
                "Aggregate demand is the total planned expenditure on final goods and services in an economy at different price levels."
        },

        {
            topic: "aggregate supply",
            keywords: [
                "aggregate supply",
                "as"
            ],
            answer:
                "Aggregate supply represents the total quantity of goods and services firms are willing and able to produce at different price levels."
        },

        {
            topic: "balance of payments",
            keywords: [
                "balance of payments",
                "bop"
            ],
            answer:
                "The balance of payments records economic transactions between residents of a country and the rest of the world over a particular period."
        },

        {
            topic: "exchange rate",
            keywords: [
                "exchange rate",
                "currency exchange"
            ],
            answer:
                "An exchange rate is the price of one currency expressed in terms of another currency."
        },

        {
            topic: "depreciation of currency",
            keywords: [
                "currency depreciation",
                "depreciation of currency"
            ],
            answer:
                "Currency depreciation is a fall in the value of a currency relative to another currency or group of currencies under a floating exchange-rate system."
        },

        {
            topic: "appreciation of currency",
            keywords: [
                "currency appreciation",
                "appreciation of currency"
            ],
            answer:
                "Currency appreciation is an increase in the value of a currency relative to another currency or group of currencies."
        },

        {
            topic: "economic indicators",
            keywords: [
                "economic indicators",
                "economic indicator"
            ],
            answer:
                "Economic indicators are statistics used to understand economic conditions. Examples include GDP growth, inflation, unemployment, interest rates and consumer spending."
        }

    ];


    /* =========================================================
       MATHEMATICS KNOWLEDGE
       ========================================================= */

    const mathematicsKnowledge = [

        {
            topic: "percentage",
            keywords: [
                "percentage",
                "percent"
            ],
            answer:
                "A percentage expresses a number as a fraction of 100. For example, 25% means 25 out of 100, or 0.25."
        },

        {
            topic: "percentage increase",
            keywords: [
                "percentage increase",
                "percent increase"
            ],
            answer:
                "Percentage increase = (Increase / Original Value) × 100."
        },

        {
            topic: "percentage decrease",
            keywords: [
                "percentage decrease",
                "percent decrease"
            ],
            answer:
                "Percentage decrease = (Decrease / Original Value) × 100."
        },

        {
            topic: "linear equation",
            keywords: [
                "linear equation",
                "linear equations"
            ],
            answer:
                "A linear equation is an equation where the highest power of the variable is 1. For example, 2x + 3 = 9. Solving gives x = 3."
        },

        {
            topic: "quadratic equation",
            keywords: [
                "quadratic equation",
                "quadratic equations"
            ],
            answer:
                "A quadratic equation has the general form ax² + bx + c = 0, where a is not zero. It can be solved by factorisation, completing the square or the quadratic formula."
        },

        {
            topic: "factorisation",
            keywords: [
                "factorisation",
                "factorization",
                "factorise",
                "factorize"
            ],
            answer:
                "Factorisation means writing an expression as a product of factors. For example, x² + 5x + 6 can be factorised as (x + 2)(x + 3)."
        },

        {
            topic: "indices",
            keywords: [
                "indices",
                "index laws",
                "exponents",
                "powers"
            ],
            answer:
                "Indices are powers or exponents. Important laws include aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ and (aᵐ)ⁿ = aᵐⁿ."
        },

        {
            topic: "simultaneous equations",
            keywords: [
                "simultaneous equations",
                "simultaneous equation"
            ],
            answer:
                "Simultaneous equations are two or more equations solved together to find values that satisfy all equations. Common methods include substitution and elimination."
        },

        {
            topic: "gradient",
            keywords: [
                "gradient",
                "slope"
            ],
            answer:
                "The gradient of a straight line is the change in y divided by the change in x. The formula is m = (y₂ - y₁) / (x₂ - x₁)."
        },

        {
            topic: "straight line",
            keywords: [
                "straight line",
                "equation of a line",
                "y mx c"
            ],
            answer:
                "The equation of a straight line can be written as y = mx + c, where m is the gradient and c is the y-intercept."
        },

        {
            topic: "distance formula",
            keywords: [
                "distance formula",
                "distance between two points"
            ],
            answer:
                "The distance between two points (x₁,y₁) and (x₂,y₂) is √[(x₂-x₁)² + (y₂-y₁)²]."
        },

        {
            topic: "midpoint",
            keywords: [
                "midpoint",
                "midpoint formula"
            ],
            answer:
                "The midpoint between (x₁,y₁) and (x₂,y₂) is ((x₁+x₂)/2, (y₁+y₂)/2)."
        },

        {
            topic: "mean",
            keywords: [
                "mean",
                "average"
            ],
            answer:
                "The arithmetic mean is calculated by adding all values and dividing the total by the number of values."
        },

        {
            topic: "median",
            keywords: [
                "median"
            ],
            answer:
                "The median is the middle value when data is arranged in order. If there are two middle values, the median is their average."
        },

        {
            topic: "mode",
            keywords: [
                "mode"
            ],
            answer:
                "The mode is the value that occurs most frequently in a data set."
        },

        {
            topic: "probability",
            keywords: [
                "probability",
                "probabilities"
            ],
            answer:
                "Probability measures how likely an event is to occur. For equally likely outcomes, Probability = Number of favourable outcomes / Total number of possible outcomes."
        },

        {
            topic: "complement probability",
            keywords: [
                "complement probability",
                "probability of not"
            ],
            answer:
                "The probability of an event not occurring is P(not A) = 1 - P(A)."
        },

        {
            topic: "simple interest",
            keywords: [
                "simple interest",
                "simple interest formula"
            ],
            answer:
                "Simple interest is calculated using I = P × r × t, where P is the principal, r is the interest rate as a decimal and t is the time."
        },

        {
            topic: "compound interest",
            keywords: [
                "compound interest",
                "compound interest formula"
            ],
            answer:
                "Compound interest is interest calculated on the original amount plus accumulated interest. A common formula is A = P(1 + r)ⁿ."
        },

        {
            topic: "arithmetic sequence",
            keywords: [
                "arithmetic sequence",
                "arithmetic progression"
            ],
            answer:
                "An arithmetic sequence has a constant difference between consecutive terms. The nth term can be found using aₙ = a₁ + (n - 1)d."
        },

        {
            topic: "geometric sequence",
            keywords: [
                "geometric sequence",
                "geometric progression"
            ],
            answer:
                "A geometric sequence has a constant ratio between consecutive terms. The nth term is aₙ = a₁rⁿ⁻¹."
        },

        {
            topic: "pythagoras",
            keywords: [
                "pythagoras",
                "pythagorean theorem"
            ],
            answer:
                "Pythagoras' theorem states that in a right-angled triangle, a² + b² = c², where c is the hypotenuse."
        },

        {
            topic: "trigonometry",
            keywords: [
                "trigonometry",
                "sin cos tan",
                "sine cosine tangent"
            ],
            answer:
                "The basic right-triangle trigonometric ratios are sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse and tan θ = opposite/adjacent."
        },

        {
            topic: "area of rectangle",
            keywords: [
                "area rectangle",
                "area of rectangle"
            ],
            answer:
                "The area of a rectangle is length × width."
        },

        {
            topic: "area of triangle",
            keywords: [
                "area triangle",
                "area of triangle"
            ],
            answer:
                "The area of a triangle is ½ × base × perpendicular height."
        },

        {
            topic: "area of circle",
            keywords: [
                "area circle",
                "area of a circle"
            ],
            answer:
                "The area of a circle is πr², where r is the radius."
        },

        {
            topic: "circumference",
            keywords: [
                "circumference",
                "circumference circle"
            ],
            answer:
                "The circumference of a circle is 2πr or πd."
        },

        {
            topic: "differentiation",
            keywords: [
                "differentiation",
                "derivative",
                "derivatives"
            ],
            answer:
                "Differentiation is the process of finding the derivative of a function. The derivative represents the rate at which one quantity changes with respect to another."
        },

        {
            topic: "integration",
            keywords: [
                "integration",
                "integral",
                "integrals"
            ],
            answer:
                "Integration is the reverse process of differentiation in many situations. It can be used to find areas, accumulated quantities and antiderivatives."
        },

        {
            topic: "functions",
            keywords: [
                "function",
                "functions",
                "mathematical function"
            ],
            answer:
                "A function is a relationship where each allowed input is associated with exactly one output."
        },

        {
            topic: "algebra",
            keywords: [
                "algebra",
                "algebraic expression"
            ],
            answer:
                "Algebra uses letters and symbols to represent numbers and relationships. It includes simplifying expressions, solving equations and manipulating formulas."
        }

    ];


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
            "revenue",
            "expense",
            "expenses",
            "profit",
            "loss",
            "audit",
            "auditing",
            "tax",
            "vat",
            "ifrs",
            "ias",
            "debit",
            "credit",
            "ledger",
            "trial balance",
            "inventory",
            "stock",
            "receivable",
            "payable",
            "depreciation",
            "financial statement",
            "financial statements",
            "balance sheet",
            "cash flow",
            "costing",
            "cost accounting",
            "management accounting"
        ],

        economics: [
            "economics",
            "economy",
            "demand",
            "supply",
            "scarcity",
            "inflation",
            "unemployment",
            "gdp",
            "economic growth",
            "economic development",
            "fiscal policy",
            "monetary policy",
            "market",
            "monopoly",
            "oligopoly",
            "elasticity",
            "externality",
            "externalities",
            "public goods",
            "aggregate demand",
            "aggregate supply",
            "exchange rate",
            "balance of payments",
            "opportunity cost"
        ],

        mathematics: [
            "math",
            "maths",
            "mathematics",
            "algebra",
            "equation",
            "equations",
            "quadratic",
            "linear",
            "factorisation",
            "factorization",
            "indices",
            "exponents",
            "gradient",
            "slope",
            "probability",
            "statistics",
            "mean",
            "median",
            "mode",
            "geometry",
            "triangle",
            "circle",
            "trigonometry",
            "sin",
            "cos",
            "tan",
            "calculus",
            "derivative",
            "differentiation",
            "integration",
            "function",
            "functions",
            "sequence",
            "sequences"
        ]

    };


    /* =========================================================
       TEXT NORMALISATION
       ========================================================= */

    function normalizeText(value) {

        return String(value || "")
            .toLowerCase()
            .replace(/[’']/g, "")
            .replace(/[^\w\s.-]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }


    /* =========================================================
       SUBJECT DETECTION
       ========================================================= */

    function detectSubject(question) {

        const text =
            normalizeText(question);

        let scores = {
            accounting: 0,
            economics: 0,
            mathematics: 0
        };

        Object.keys(subjectWords)
            .forEach(subject => {

                subjectWords[subject]
                    .forEach(keyword => {

                        const normalizedKeyword =
                            normalizeText(keyword);

                        if (
                            text.includes(
                                normalizedKeyword
                            )
                        ) {
                            scores[subject]++;
                        }

                    });

            });

        const sorted =
            Object.entries(scores)
                .sort((a, b) => b[1] - a[1]);

        if (
            sorted[0][1] === 0
        ) {
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
       BUILT-IN KNOWLEDGE SEARCH
       ========================================================= */

    function searchKnowledge(
        question,
        database
    ) {

        const text =
            normalizeText(question);

        let bestMatch = null;
        let bestScore = 0;

        database.forEach(item => {

            let score = 0;

            item.keywords.forEach(keyword => {

                const key =
                    normalizeText(keyword);

                if (
                    text.includes(key)
                ) {
                    score +=
                        key.split(" ").length * 3;
                }

            });

            const words =
                text
                    .split(/\s+/)
                    .filter(word =>
                        word.length > 2
                    );

            words.forEach(word => {

                item.keywords.forEach(keyword => {

                    if (
                        normalizeText(keyword)
                            .includes(word)
                    ) {
                        score++;
                    }

                });

            });

            if (
                score > bestScore
            ) {
                bestScore = score;
                bestMatch = item;
            }

        });

        return bestScore > 0
            ? bestMatch
            : null;
    }


    /* =========================================================
       LEARNING SYSTEM
       ========================================================= */

    function isQuestion(text) {

        const clean =
            normalizeText(text);

        if (!clean) {
            return false;
        }

        if (
            text.includes("?")
        ) {
            return true;
        }

        const questionStarters = [

            "what",
            "why",
            "how",
            "when",
            "where",
            "who",
            "which",
            "whose",
            "whom",
            "can",
            "could",
            "would",
            "should",
            "will",
            "does",
            "do",
            "did",
            "has",
            "have",
            "had",
            "may",
            "might",
            "explain",
            "define",
            "calculate",
            "find",
            "give me",
            "tell me"

        ];

        return questionStarters.some(
            start =>
                clean === start ||
                clean.startsWith(
                    start + " "
                )
        );
    }


    function isLearnableStatement(text) {

        const clean =
            text.trim();

        if (!clean) {
            return false;
        }

        if (
            isQuestion(clean)
        ) {
            return false;
        }

        if (
            clean.length < 10
        ) {
            return false;
        }

        const ignoredStatements = [

            "hi",
            "hello",
            "hey",
            "thanks",
            "thank you",
            "okay",
            "ok",
            "goodbye",
            "bye",
            "see you",
            "good morning",
            "good afternoon",
            "good evening",
            "how are you",
            "i am good",
            "im good",
            "i'm good",
            "i am fine",
            "im fine",
            "i'm fine",
            "i am great",
            "im great",
            "i'm great"

        ];

        const normalized =
            normalizeText(clean);

        if (
            ignoredStatements.includes(
                normalized
            )
        ) {
            return false;
        }

        return true;
    }


    function learnStatement(text) {

        if (
            !isLearnableStatement(text)
        ) {
            return false;
        }

        const knowledge =
            getLearnedKnowledge();

        const cleanStatement =
            text.trim();

        const alreadyExists =
            knowledge.some(item =>
                normalizeText(item) ===
                normalizeText(cleanStatement)
            );

        if (
            alreadyExists
        ) {
            return false;
        }

        knowledge.push(
            cleanStatement
        );

        saveLearnedKnowledge(
            knowledge
        );

        return true;
    }


    function searchLearnedKnowledge(query) {

        const knowledge =
            getLearnedKnowledge();

        if (
            !knowledge.length
        ) {
            return [];
        }

        const stopWords = new Set([

            "what",
            "what is",
            "what are",
            "why",
            "how",
            "when",
            "where",
            "who",
            "which",
            "the",
            "this",
            "that",
            "these",
            "those",
            "does",
            "do",
            "did",
            "can",
            "could",
            "would",
            "should",
            "tell",
            "explain",
            "about",
            "please",
            "mean",
            "means",
            "meaning",
            "give",
            "me",
            "is",
            "are",
            "an",
            "a",
            "of",
            "in",
            "to",
            "for",
            "on",
            "and",
            "or"

        ]);

        const words =
            normalizeText(query)
                .split(/\s+/)
                .filter(
                    word =>
                        word.length > 2 &&
                        !stopWords.has(word)
                );

        if (
            !words.length
        ) {
            return [];
        }

        return knowledge

            .map(statement => {

                const normalizedStatement =
                    normalizeText(
                        statement
                    );

                let score = 0;

                words.forEach(word => {

                    if (
                        normalizedStatement
                            .includes(word)
                    ) {
                        score++;
                    }

                });

                return {
                    statement,
                    score
                };

            })

            .filter(
                item => item.score > 0
            )

            .sort(
                (a, b) =>
                    b.score - a.score
            )

            .map(
                item => item.statement
            );
    }


    /* =========================================================
       TOPICS
       ========================================================= */

    function formatAllKnowledge(
        database,
        subjectName
    ) {

        let output =
            `${subjectName} knowledge:\n\n`;

        database.forEach(
            (item, index) => {

                output +=
                    `${index + 1}. ${item.topic}\n`;

                output +=
                    `${item.answer}\n\n`;

            }
        );

        return output.trim();
    }


    function getTopicList(
        database,
        subjectName
    ) {

        let output =
            `${subjectName} topics:\n\n`;

        database.forEach(
            (item, index) => {

                output +=
                    `${index + 1}. ${item.topic}\n`;

            }
        );

        return output.trim();
    }


    function isAllInformationRequest(
        text
    ) {

        return (

            text.includes(
                "all information"
            ) ||

            text.includes(
                "everything about"
            ) ||

            text.includes(
                "all topics"
            ) ||

            text === "all accounting" ||

            text === "all economics" ||

            text === "all mathematics"

        );
    }


    function isTopicListRequest(
        text
    ) {

        return (

            text.includes(
                "list topics"
            ) ||

            text.includes(
                "topics in"
            ) ||

            text.includes(
                "what topics"
            ) ||

            text.includes(
                "available topics"
            )

        );
    }


    /* =========================================================
       SIMPLE CALCULATOR
       ========================================================= */

    function simpleCalculator(
        question
    ) {

        let expression =
            String(question)
                .toLowerCase()
                .trim();

        expression =
            expression
                .replace(
                    /what is/gi,
                    ""
                )
                .replace(
                    /calculate/gi,
                    ""
                )
                .replace(
                    /work out/gi,
                    ""
                )
                .replace(
                    /solve/gi,
                    ""
                )
                .trim();

        if (
            !/[+\-*/%^]/.test(
                expression
            )
        ) {
            return null;
        }

        if (
            !/^[0-9+\-*/().%\s^]+$/.test(
                expression
            )
        ) {
            return null;
        }

        try {

            expression =
                expression.replace(
                    /\^/g,
                    "**"
                );

            expression =
                expression.replace(
                    /(\d+(?:\.\d+)?)%/g,
                    "($1/100)"
                );

            const result =
                Function(
                    `"use strict"; return (${expression})`
                )();

            if (
                typeof result === "number" &&
                Number.isFinite(result)
            ) {

                return `The answer is ${result}.`;

            }

        } catch (error) {

            return null;
        }

        return null;
    }


    /* =========================================================
       GENERAL CONVERSATION
       ========================================================= */

    function generalAnswer(
        question
    ) {

        const text =
            normalizeText(question);

        if (
            /^(hi|hello|hey|good morning|good afternoon|good evening)$/
                .test(text)
        ) {

            return "Hello. I am Mastercommerce. What would you like to learn today?";

        }

        if (
            text.includes(
                "how are you"
            )
        ) {

            return "I am ready to help you learn. Ask me an Accounting, Economics or Mathematics question.";

        }

        if (
            /^(thanks|thank you|thx)$/
                .test(text)
        ) {

            return "You're welcome.";

        }

        if (
            /^(bye|goodbye|see you)$/
                .test(text)
        ) {

            return "Goodbye. Keep learning.";

        }

        if (
            text.includes(
                "who are you"
            )
        ) {

            return "I am Mastercommerce, an educational learning assistant for Accounting, Economics and Mathematics.";

        }

        if (
            text.includes(
                "who made you"
            ) ||
            text.includes(
                "who created you"
            ) ||
            text.includes(
                "developer"
            )
        ) {

            return `Mastercommerce was developed by ${developerInformation.founder} under ${developerInformation.developer}.`;

        }

        if (
            text.includes(
                "what can you do"
            )
        ) {

            return "I can help with Accounting, Economics and Mathematics, explain concepts, solve calculations, use information you teach me, and search Wikipedia when I cannot find a suitable answer in my built-in knowledge.";

        }

        if (
            text ===
            "what subjects do you teach"
        ) {

            return "I teach Accounting, Economics and Mathematics.";

        }

        if (
            text.includes(
                "i dont understand"
            ) ||
            text.includes(
                "i do not understand"
            )
        ) {

            return "That's okay. Tell me the topic or question and I will explain it in simple language.";

        }

        return null;
    }


    /* =========================================================
       WIKIPEDIA SEARCH
       ========================================================= */

    async function searchWikipedia(
        question
    ) {

        try {

            const cleanQuestion =
                question
                    .replace(
                        /\?/g,
                        ""
                    )
                    .trim();

            if (
                !cleanQuestion
            ) {
                return null;
            }

            /*
             Wikipedia's public API does not
             require an API key.
            */

            const searchUrl =
                "https://en.wikipedia.org/w/api.php" +
                "?action=query" +
                "&list=search" +
                "&srsearch=" +
                encodeURIComponent(
                    cleanQuestion
                ) +
                "&utf8=1" +
                "&format=json" +
                "&origin=*";

            const response =
                await fetch(
                    searchUrl
                );

            if (
                !response.ok
            ) {
                return null;
            }

            const data =
                await response.json();

            if (
                !data.query ||
                !data.query.search ||
                !data.query.search.length
            ) {
                return null;
            }

            const firstResult =
                data.query.search[0];

            const title =
                firstResult.title;

            const articleUrl =
                "https://en.wikipedia.org/wiki/" +
                encodeURIComponent(
                    title.replace(
                        / /g,
                        "_"
                    )
                );

            const summaryUrl =
                "https://en.wikipedia.org/api/rest_v1/page/summary/" +
                encodeURIComponent(
                    title.replace(
                        / /g,
                        "_"
                    )
                );

            const summaryResponse =
                await fetch(
                    summaryUrl
                );

            if (
                !summaryResponse.ok
            ) {

                return {

                    title: title,

                    extract:
                        firstResult.snippet
                            .replace(
                                /<[^>]*>/g,
                                ""
                            ),

                    url:
                        articleUrl

                };
            }

            const summary =
                await summaryResponse.json();

            if (
                !summary.extract
            ) {
                return null;
            }

            return {

                title:
                    summary.title ||
                    title,

                extract:
                    summary.extract,

                url:
                    summary.content_urls
                        ?.desktop
                        ?.page ||
                    articleUrl

            };

        } catch (error) {

            console.error(
                "Wikipedia search failed:",
                error
            );

            return null;
        }
    }


    /* =========================================================
       WIKIPEDIA ANSWER
       ========================================================= */

    function formatWikipediaAnswer(
        result
    ) {

        return (
            `I found this information on Wikipedia:\n\n` +
            `${result.title}\n\n` +
            `${result.extract}\n\n` +
            `Source: Wikipedia\n` +
            `${result.url}`
        );
    }


    /* =========================================================
       MAIN ANSWER GENERATOR
       ========================================================= */

    async function generateAnswer(
        question
    ) {

        const text =
            normalizeText(question);

        /* General conversation */

        const general =
            generalAnswer(question);

        if (
            general
        ) {
            return general;
        }


        /* Detect subject */

        const subject =
            detectSubject(question);


        /* All information */

        if (
            isAllInformationRequest(
                text
            )
        ) {

            if (
                subject ===
                "accounting"
            ) {

                return formatAllKnowledge(
                    accountingKnowledge,
                    "Accounting"
                );

            }

            if (
                subject ===
                "economics"
            ) {

                return formatAllKnowledge(
                    economicsKnowledge,
                    "Economics"
                );

            }

            if (
                subject ===
                "mathematics"
            ) {

                return formatAllKnowledge(
                    mathematicsKnowledge,
                    "Mathematics"
                );

            }

            return `I can give you the complete built-in information for Accounting, Economics or Mathematics.

Please tell me which subject you want.`;
        }


        /* Topic list */

        if (
            isTopicListRequest(
                text
            )
        ) {

            if (
                subject ===
                "accounting"
            ) {

                return getTopicList(
                    accountingKnowledge,
                    "Accounting"
                );

            }

            if (
                subject ===
                "economics"
            ) {

                return getTopicList(
                    economicsKnowledge,
                    "Economics"
                );

            }

            if (
                subject ===
                "mathematics"
            ) {

                return getTopicList(
                    mathematicsKnowledge,
                    "Mathematics"
                );

            }

            return `I can answer questions in:

Accounting
Economics
Mathematics

Tell me which subject you want to see the available topics for.`;
        }


        /* Calculator */

        const calculation =
            simpleCalculator(
                question
            );

        if (
            calculation
        ) {
            return calculation;
        }


        /* =====================================================
           QUESTIONS
           ===================================================== */

        if (
            isQuestion(question)
        ) {

            /* Search information taught by user */

            const learnedMatches =
                searchLearnedKnowledge(
                    question
                );

            if (
                learnedMatches.length > 0
            ) {

                return (
                    learnedMatches
                        .slice(0, 3)
                        .join("\n\n") +
                    "\n\nThis information was taught to me in Mastercommerce."
                );

            }


            /* Search built-in knowledge */

            let database =
                null;

            if (
                subject ===
                "accounting"
            ) {

                database =
                    accountingKnowledge;

            }

            if (
                subject ===
                "economics"
            ) {

                database =
                    economicsKnowledge;

            }

            if (
                subject ===
                "mathematics"
            ) {

                database =
                    mathematicsKnowledge;

            }

            if (
                database
            ) {

                const match =
                    searchKnowledge(
                        question,
                        database
                    );

                if (
                    match
                ) {

                    return match.answer;

                }

            }


            /* =================================================
               WIKIPEDIA FALLBACK
               ================================================= */

            const wikipediaResult =
                await searchWikipedia(
                    question
                );

            if (
                wikipediaResult
            ) {

                return formatWikipediaAnswer(
                    wikipediaResult
                );

            }


            /* Nothing found */

            return `I could not find a suitable answer in my current knowledge or on Wikipedia.

Please try asking the question in a different way.`;
        }


        /* =====================================================
           STATEMENT LEARNING
           ===================================================== */

        if (
            isLearnableStatement(
                question
            )
        ) {

            const saved =
                learnStatement(
                    question
                );

            if (
                saved
            ) {

                return `Knowledge saved.

I will use this information when answering future questions.`;

            }

            return "I already have this information saved.";
        }


        return `I'm not able to find that in my current knowledge.

Can you please repeat your question in an understandable way?`;
    }


    /* =========================================================
       MESSAGE CREATION
       ========================================================= */

    function addMessage(
        text,
        sender
    ) {

        if (!chat) {
            return;
        }

        if (welcome) {
            welcome.style.display =
                "none";
        }

        const message =
            document.createElement(
                "div"
            );

        message.className =
            `message ${sender}`;

        const messageContent =
            document.createElement(
                "div"
            );

        messageContent.className =
            "message-content";

        /*
         Preserve line breaks.
        Links are made clickable.
        */

        const parts =
            String(text)
                .split(
                    /((?:https?:\/\/)[^\s]+)/g
                );

        parts.forEach(part => {

            if (
                /^https?:\/\//i.test(
                    part
                )
            ) {

                const link =
                    document.createElement(
                        "a"
                    );

                link.href =
                    part;

                link.target =
                    "_blank";

                link.rel =
                    "noopener noreferrer";

                link.textContent =
                    part;

                messageContent.appendChild(
                    link
                );

            } else {

                const lines =
                    part.split("\n");

                lines.forEach(
                    (line, index) => {

                        messageContent.appendChild(
                            document.createTextNode(
                                line
                            )
                        );

                        if (
                            index <
                            lines.length - 1
                        ) {

                            messageContent.appendChild(
                                document.createElement(
                                    "br"
                                )
                            );

                        }

                    }
                );

            }

        });

        message.appendChild(
            messageContent
        );

        chat.appendChild(
            message
        );

        chat.scrollTop =
            chat.scrollHeight;

        saveChatHistory();

        return message;
    }


    /* =========================================================
       THINKING MESSAGE
       ========================================================= */

    function addThinkingMessage() {

        if (!chat) {
            return null;
        }

        const message =
            document.createElement(
                "div"
            );

        message.className =
            "message assistant thinking-message";

        const content =
            document.createElement(
                "div"
            );

        content.className =
            "message-content";

        content.textContent =
            "Thinking...";

        message.appendChild(
            content
        );

        chat.appendChild(
            message
        );

        chat.scrollTop =
            chat.scrollHeight;

        return message;
    }


    /* =========================================================
       SEND QUESTION
       ========================================================= */

    async function sendQuestion() {

        if (!messageInput) {
            return;
        }

        const question =
            messageInput.value.trim();

        if (!question) {
            return;
        }

        addMessage(
            question,
            "user"
        );

        messageInput.value =
            "";

        messageInput.style.height =
            "auto";

        const thinking =
            addThinkingMessage();

        try {

            const answer =
                await generateAnswer(
                    question
                );

            if (
                thinking &&
                thinking.parentNode
            ) {

                thinking.remove();

            }

            addMessage(
                answer,
                "assistant"
            );

        } catch (error) {

            console.error(
                error
            );

            if (
                thinking &&
                thinking.parentNode
            ) {

                thinking.remove();

            }

            addMessage(
                "Something went wrong while finding the answer. Please try again.",
                "assistant"
            );

        }

    }


    /* =========================================================
       TEXTAREA
       ========================================================= */

    if (messageInput) {

        messageInput.addEventListener(
            "input",
            () => {

                messageInput.style.height =
                    "auto";

                messageInput.style.height =
                    Math.min(
                        messageInput.scrollHeight,
                        180
                    ) + "px";

            }
        );

        messageInput.addEventListener(
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


    if (sendButton) {

        sendButton.addEventListener(
            "click",
            sendQuestion
        );

    }


    /* =========================================================
       SIDEBAR
       ========================================================= */

    function openSidebar() {

        if (sidebar) {

            sidebar.classList.add(
                "open"
            );

        }

    }


    function closeSidebarMenu() {

        if (sidebar) {

            sidebar.classList.remove(
                "open"
            );

        }

    }


    if (menuButton) {

        menuButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                openSidebar();

            }
        );

    }


    if (closeSidebar) {

        closeSidebar.addEventListener(
            "click",
            closeSidebarMenu
        );

    }


    document.addEventListener(
        "click",
        event => {

            if (
                sidebar &&
                sidebar.classList.contains(
                    "open"
                )
            ) {

                if (
                    !sidebar.contains(
                        event.target
                    ) &&
                    event.target !==
                    menuButton
                ) {

                    closeSidebarMenu();

                }

            }

        }
    );


    /* =========================================================
       HOME
       ========================================================= */

    function goHome() {

        if (welcome) {

            welcome.style.display =
                "";

        }

        if (chat) {

            const messages =
                chat.querySelectorAll(
                    ".message"
                );

            messages.forEach(
                message =>
                    message.remove()
            );

        }

        closeSidebarMenu();

    }


    if (homeButton) {

        homeButton.addEventListener(
            "click",
            goHome
        );

    }


    /* =========================================================
       NEW CHAT
       ========================================================= */

    function startNewChat() {

        if (chat) {

            const messages =
                chat.querySelectorAll(
                    ".message"
                );

            messages.forEach(
                message =>
                    message.remove()
            );

        }

        if (welcome) {

            welcome.style.display =
                "";

        }

        if (messageInput) {

            messageInput.value =
                "";

            messageInput.style.height =
                "auto";

            messageInput.focus();

        }

        closeSidebarMenu();

        saveChatHistory();

    }


    if (newChatButton) {

        newChatButton.addEventListener(
            "click",
            startNewChat
        );

    }


    /* =========================================================
       CLEAR CHAT
       ========================================================= */

    function clearChat() {

        if (!chat) {
            return;
        }

        const messages =
            chat.querySelectorAll(
                ".message"
            );

        messages.forEach(
            message =>
                message.remove()
        );

        if (welcome) {

            welcome.style.display =
                "";

        }

        localStorage.removeItem(
            CHAT_HISTORY_KEY
        );

    }


    if (clearChatButton) {

        clearChatButton.addEventListener(
            "click",
            clearChat
        );

    }


    /* =========================================================
       PLUS MENU
       ========================================================= */

    if (plusButton) {

        plusButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                if (plusMenu) {

                    plusMenu.classList.toggle(
                        "show"
                    );

                }

            }
        );

    }


    if (plusMenu) {

        plusMenu.addEventListener(
            "click",
            event => {

                const option =
                    event.target.closest(
                        "[data-feature]"
                    );

                if (!option) {
                    return;
                }

                plusMenu.classList.remove(
                    "show"
                );

                showFeatureToast(
                    "This feature is still under development."
                );

            }
        );

    }


    document.addEventListener(
        "click",
        event => {

            if (
                plusMenu &&
                !plusMenu.contains(
                    event.target
                ) &&
                event.target !==
                plusButton
            ) {

                plusMenu.classList.remove(
                    "show"
                );

            }

        }
    );


    /* =========================================================
       FEATURE TOAST
       ========================================================= */

    function showFeatureToast(
        message
    ) {

        if (!featureToast) {
            return;
        }

        featureToast.textContent =
            message;

        featureToast.classList.add(
            "show"
        );

        setTimeout(
            () => {

                featureToast.classList.remove(
                    "show"
                );

            },
            2500
        );

    }


    /* =========================================================
       ABOUT MODAL
       ========================================================= */

    if (aboutButton) {

        aboutButton.addEventListener(
            "click",
            () => {

                if (aboutModal) {

                    aboutModal.classList.add(
                        "show"
                    );

                }

                closeSidebarMenu();

            }
        );

    }


    if (closeAbout) {

        closeAbout.addEventListener(
            "click",
            () => {

                if (aboutModal) {

                    aboutModal.classList.remove(
                        "show"
                    );

                }

            }
        );

    }


    /* =========================================================
       SETTINGS MODAL
       ========================================================= */

    if (settingsButton) {

        settingsButton.addEventListener(
            "click",
            () => {

                if (settingsModal) {

                    settingsModal.classList.add(
                        "show"
                    );

                }

                closeSidebarMenu();

            }
        );

    }


    if (closeSettings) {

        closeSettings.addEventListener(
            "click",
            () => {

                if (settingsModal) {

                    settingsModal.classList.remove(
                        "show"
                    );

                }

            }
        );

    }


    /* =========================================================
       SETTINGS
       ========================================================= */

    const SETTINGS_KEY =
        "mastercommerce_settings";


    function getSettings() {

        try {

            const saved =
                localStorage.getItem(
                    SETTINGS_KEY
                );

            return saved
                ? JSON.parse(saved)
                : {};

        } catch {

            return {};

        }

    }


    function saveSettings(
        settings
    ) {

        localStorage.setItem(
            SETTINGS_KEY,
            JSON.stringify(
                settings
            )
        );

    }


    function applySettings() {

        const settings =
            getSettings();

        const root =
            document.documentElement;

        if (
            settings.theme ===
            "dark"
        ) {

            root.classList.add(
                "dark"
            );

        } else {

            root.classList.remove(
                "dark"
            );

        }


        if (
            settings.background
        ) {

            root.dataset.background =
                settings.background;

        }


        if (
            settings.fontSize
        ) {

            root.dataset.fontSize =
                settings.fontSize;

        }


        if (
            settings.motion ===
            "off"
        ) {

            root.dataset.motion =
                "off";

        } else {

            root.dataset.motion =
                "on";

        }

    }


    if (themeSelect) {

        themeSelect.addEventListener(
            "change",
            () => {

                const settings =
                    getSettings();

                settings.theme =
                    themeSelect.value;

                saveSettings(
                    settings
                );

                applySettings();

            }
        );

    }


    if (backgroundSelect) {

        backgroundSelect.addEventListener(
            "change",
            () => {

                const settings =
                    getSettings();

                settings.background =
                    backgroundSelect.value;

                saveSettings(
                    settings
                );

                applySettings();

            }
        );

    }


    if (fontSizeSelect) {

        fontSizeSelect.addEventListener(
            "change",
            () => {

                const settings =
                    getSettings();

                settings.fontSize =
                    fontSizeSelect.value;

                saveSettings(
                    settings
                );

                applySettings();

            }
        );

    }


    if (motionSelect) {

        motionSelect.addEventListener(
            "change",
            () => {

                const settings =
                    getSettings();

                settings.motion =
                    motionSelect.value;

                saveSettings(
                    settings
                );

                applySettings();

            }
        );

    }


    if (resetSettingsButton) {

        resetSettingsButton.addEventListener(
            "click",
            () => {

                localStorage.removeItem(
                    SETTINGS_KEY
                );

                applySettings();

                if (themeSelect) {
                    themeSelect.value =
                        "light";
                }

                if (backgroundSelect) {
                    backgroundSelect.value =
                        "default";
                }

                if (fontSizeSelect) {
                    fontSizeSelect.value =
                        "medium";
                }

                if (motionSelect) {
                    motionSelect.value =
                        "on";
                }

            }
        );

    }


    /* =========================================================
       CLOSE MODALS WHEN CLICKING OUTSIDE
       ========================================================= */

    document.addEventListener(
        "click",
        event => {

            if (
                aboutModal &&
                event.target ===
                aboutModal
            ) {

                aboutModal.classList.remove(
                    "show"
                );

            }

            if (
                settingsModal &&
                event.target ===
                settingsModal
            ) {

                settingsModal.classList.remove(
                    "show"
                );

            }

        }
    );


    /* =========================================================
       ESCAPE KEY
       ========================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !==
                "Escape"
            ) {
                return;
            }

            closeSidebarMenu();

            if (plusMenu) {

                plusMenu.classList.remove(
                    "show"
                );

            }

            if (aboutModal) {

                aboutModal.classList.remove(
                    "show"
                );

            }

            if (settingsModal) {

                settingsModal.classList.remove(
                    "show"
                );

            }

        }
    );


    /* =========================================================
       CHAT HISTORY
       ========================================================= */

    function saveChatHistory() {

        if (!chat) {
            return;
        }

        try {

            localStorage.setItem(
                CHAT_HISTORY_KEY,
                chat.innerHTML
            );

        } catch (error) {

            console.error(
                "Could not save chat:",
                error
            );

        }

    }


    function loadChatHistory() {

        if (!chat) {
            return;
        }

        try {

            const saved =
                localStorage.getItem(
                    CHAT_HISTORY_KEY
                );

            if (
                saved &&
                saved.trim()
            ) {

                chat.innerHTML =
                    saved;

                if (welcome) {

                    welcome.style.display =
                        "none";

                }

            }

        } catch (error) {

            console.error(
                "Could not load chat:",
                error
            );

        }

    }


    /* =========================================================
       RESTORE SETTINGS
       ========================================================= */

    function loadSettings() {

        const settings =
            getSettings();

        if (
            themeSelect &&
            settings.theme
        ) {

            themeSelect.value =
                settings.theme;

        }

        if (
            backgroundSelect &&
            settings.background
        ) {

            backgroundSelect.value =
                settings.background;

        }

        if (
            fontSizeSelect &&
            settings.fontSize
        ) {

            fontSizeSelect.value =
                settings.fontSize;

        }

        if (
            motionSelect &&
            settings.motion
        ) {

            motionSelect.value =
                settings.motion;

        }

        applySettings();

    }


    /* =========================================================
       INITIALISE
       ========================================================= */

    loadSettings();

    loadChatHistory();

});
