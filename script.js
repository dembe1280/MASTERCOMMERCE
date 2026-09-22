document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       MASTERCOMMERCE
       Frontend-only educational learning system
       ========================================================= */

    if (window.mastercommerceLoaded) return;
    window.mastercommerceLoaded = true;

    console.log("Mastercommerce initialized successfully.");

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
       SAFE EVENT LISTENER
       ========================================================= */

    function on(element, event, handler) {
        if (!element) return;

        element.addEventListener(event, handler);
    }


    /* =========================================================
       DEVELOPER INFORMATION
       ========================================================= */

    const developerInformation = {
        product: "Mastercommerce",
        developer: "PD | Web & App Development",
        founder: "Phungo Dembe Vusani",
        location: "Limpopo, South Africa",
        education: "University of Venda, BCom in Accounting",
        version: "v1.0.0"
    };


    /* =========================================================
       CONVERSATION
       ========================================================= */

    let conversation = [];


    /* =========================================================
       TXT KNOWLEDGE SYSTEM
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


    /* =========================================================
       BUILT-IN ACCOUNTING KNOWLEDGE
       ========================================================= */

    const accountingKnowledge = [

        {
            topic: "accounting equation",
            keywords: ["accounting equation", "assets liabilities equity"],
            answer:
                "The accounting equation is Assets = Liabilities + Equity. " +
                "It means that everything a business owns is financed either " +
                "by money owed to others or by the owner's interest in the business."
        },

        {
            topic: "assets",
            keywords: ["asset", "assets"],
            answer:
                "An asset is a resource controlled by a business as a result of " +
                "past events and from which future economic benefits are expected. " +
                "Examples include cash, inventory, equipment, vehicles and buildings."
        },

        {
            topic: "current assets",
            keywords: ["current asset", "current assets"],
            answer:
                "Current assets are assets expected to be realised, sold or consumed " +
                "during the normal operating cycle or within twelve months. " +
                "Examples include cash, inventory and trade receivables."
        },

        {
            topic: "non-current assets",
            keywords: ["non current asset", "non-current asset", "fixed asset"],
            answer:
                "Non-current assets are assets held for long-term use by the business. " +
                "Examples include buildings, vehicles, equipment and machinery."
        },

        {
            topic: "liabilities",
            keywords: ["liability", "liabilities"],
            answer:
                "A liability is a present obligation of a business arising from past events. " +
                "Examples include loans, trade payables and accrued expenses."
        },

        {
            topic: "current liabilities",
            keywords: ["current liability", "current liabilities"],
            answer:
                "Current liabilities are obligations expected to be settled within " +
                "the normal operating cycle or within twelve months. " +
                "Examples include trade payables and short-term loans."
        },

        {
            topic: "equity",
            keywords: ["equity", "owner equity", "owners equity"],
            answer:
                "Equity represents the owner's residual interest in the assets of the business " +
                "after deducting liabilities. A basic formula is Equity = Assets - Liabilities."
        },

        {
            topic: "revenue",
            keywords: ["revenue", "income", "sales revenue"],
            answer:
                "Revenue is income earned from the ordinary activities of a business, " +
                "such as selling goods or providing services."
        },

        {
            topic: "expenses",
            keywords: ["expense", "expenses"],
            answer:
                "An expense is a decrease in economic benefits during an accounting period. " +
                "Examples include rent, salaries, electricity and depreciation."
        },

        {
            topic: "double entry",
            keywords: ["double entry", "double-entry", "double entry system"],
            answer:
                "Double-entry accounting means every transaction affects at least two accounts. " +
                "The total debits must always equal the total credits."
        },

        {
            topic: "debit and credit",
            keywords: ["debit", "credit", "debits credits"],
            answer:
                "In basic accounting, assets and expenses normally increase with debits, " +
                "while liabilities, equity and revenue normally increase with credits."
        },

        {
            topic: "trial balance",
            keywords: ["trial balance"],
            answer:
                "A trial balance is a list of ledger account balances prepared to check " +
                "whether total debits equal total credits."
        },

        {
            topic: "bank reconciliation",
            keywords: ["bank reconciliation", "bank recon"],
            answer:
                "A bank reconciliation compares the cash book balance with the bank statement " +
                "and explains differences such as outstanding deposits, unpresented cheques and bank charges."
        },

        {
            topic: "depreciation",
            keywords: ["depreciation", "depreciate"],
            answer:
                "Depreciation is the systematic allocation of the depreciable amount of an asset " +
                "over its useful life. Common methods include straight-line and diminishing-balance methods."
        },

        {
            topic: "inventory",
            keywords: ["inventory", "stock"],
            answer:
                "Inventory consists of assets held for sale in the ordinary course of business, " +
                "assets in the production process, or materials and supplies to be consumed in production."
        },

        {
            topic: "receivables",
            keywords: ["receivables", "trade receivables", "debtors"],
            answer:
                "Trade receivables are amounts owed to a business by customers who bought goods or services on credit."
        },

        {
            topic: "payables",
            keywords: ["payables", "trade payables", "creditors"],
            answer:
                "Trade payables are amounts that a business owes to suppliers for goods or services purchased on credit."
        },

        {
            topic: "vat",
            keywords: ["vat", "value added tax"],
            answer:
                "VAT is a consumption tax charged on taxable supplies. A VAT-registered business generally collects output VAT on taxable sales and claims allowable input VAT on qualifying purchases."
        },

        {
            topic: "gross profit",
            keywords: ["gross profit"],
            answer:
                "Gross profit is calculated as Sales minus Cost of Sales. " +
                "It shows the profit made before operating expenses are deducted."
        },

        {
            topic: "net profit",
            keywords: ["net profit", "profit after expenses"],
            answer:
                "Net profit is the amount remaining after all relevant expenses have been deducted from revenue."
        },

        {
            topic: "gross profit margin",
            keywords: ["gross profit margin", "gross margin"],
            answer:
                "Gross profit margin = Gross Profit / Sales × 100. " +
                "It measures the percentage of sales remaining after cost of sales."
        },

        {
            topic: "net profit margin",
            keywords: ["net profit margin", "net margin"],
            answer:
                "Net profit margin = Net Profit / Revenue × 100. " +
                "It shows how much net profit is earned from each rand of revenue."
        },

        {
            topic: "current ratio",
            keywords: ["current ratio"],
            answer:
                "Current ratio = Current Assets / Current Liabilities. " +
                "It measures the ability of a business to meet short-term obligations using current assets."
        },

        {
            topic: "acid test ratio",
            keywords: ["acid test ratio", "quick ratio"],
            answer:
                "Acid-test ratio = (Current Assets - Inventory) / Current Liabilities. " +
                "It measures short-term liquidity without relying on the sale of inventory."
        },

        {
            topic: "inventory turnover",
            keywords: ["inventory turnover", "stock turnover"],
            answer:
                "Inventory turnover = Cost of Sales / Average Inventory. " +
                "It indicates how many times inventory is sold or replaced during a period."
        },

        {
            topic: "debtors collection period",
            keywords: ["debtors collection period", "receivables collection period", "collection period"],
            answer:
                "Debtors collection period measures the average number of days customers take to pay. " +
                "A common formula is Average Trade Receivables / Credit Sales × 365."
        },

        {
            topic: "debt ratio",
            keywords: ["debt ratio"],
            answer:
                "Debt ratio = Total Liabilities / Total Assets × 100. " +
                "It shows the proportion of assets financed by liabilities."
        },

        {
            topic: "break even",
            keywords: ["break even", "break-even", "break even point"],
            answer:
                "Break-even point is the level of sales where total revenue equals total costs. " +
                "At break-even, there is neither a profit nor a loss."
        },

        {
            topic: "contribution",
            keywords: ["contribution", "contribution margin"],
            answer:
                "Contribution = Sales - Variable Costs. " +
                "Contribution first covers fixed costs, and any amount remaining becomes profit."
        },

        {
            topic: "fixed cost",
            keywords: ["fixed cost", "fixed costs"],
            answer:
                "A fixed cost does not change in total within a relevant range when activity changes. " +
                "Examples include rent and some salaries."
        },

        {
            topic: "variable cost",
            keywords: ["variable cost", "variable costs"],
            answer:
                "A variable cost changes in total as the level of activity changes. " +
                "Examples include direct materials and sales commissions."
        },

        {
            topic: "marginal cost",
            keywords: ["marginal cost", "marginal costing"],
            answer:
                "Marginal cost is the additional cost of producing one additional unit of output."
        },

        {
            topic: "sunk cost",
            keywords: ["sunk cost", "sunk costs"],
            answer:
                "A sunk cost is a cost that has already been incurred and cannot be changed by a future decision."
        },

        {
            topic: "opportunity cost",
            keywords: ["opportunity cost"],
            answer:
                "Opportunity cost is the benefit given up when one alternative is chosen instead of the next best alternative."
        },

        {
            topic: "relevant cost",
            keywords: ["relevant cost", "relevant costs"],
            answer:
                "A relevant cost is a future cost that differs between decision alternatives."
        },

        {
            topic: "absorption costing",
            keywords: ["absorption costing", "absorption cost"],
            answer:
                "Absorption costing assigns both variable and fixed manufacturing overheads to products."
        },

        {
            topic: "variable costing",
            keywords: ["variable costing"],
            answer:
                "Variable costing assigns variable manufacturing costs to products while fixed manufacturing overhead is treated as a period cost."
        },

        {
            topic: "ias 16",
            keywords: ["ias 16", "property plant equipment", "ppe"],
            answer:
                "IAS 16 deals with Property, Plant and Equipment. It covers recognition, measurement, depreciation and derecognition of qualifying tangible non-current assets."
        },

        {
            topic: "ias 2",
            keywords: ["ias 2", "inventories"],
            answer:
                "IAS 2 deals with inventories. Inventory is generally measured at the lower of cost and net realisable value."
        },

        {
            topic: "ias 12",
            keywords: ["ias 12", "income tax", "deferred tax"],
            answer:
                "IAS 12 deals with income taxes, including current tax and deferred tax arising from temporary differences."
        },

        {
            topic: "ias 21",
            keywords: ["ias 21", "foreign exchange", "foreign currency"],
            answer:
                "IAS 21 deals with the effects of changes in foreign exchange rates and the translation of foreign operations."
        },

        {
            topic: "ifrs 15",
            keywords: ["ifrs 15", "revenue from contracts"],
            answer:
                "IFRS 15 establishes principles for recognising revenue from contracts with customers. " +
                "It uses a five-step model for revenue recognition."
        },

        {
            topic: "ifrs 9",
            keywords: ["ifrs 9", "financial instruments", "fvtpl", "amortised cost"],
            answer:
                "IFRS 9 deals with financial instruments. Financial assets can be classified into categories such as amortised cost, fair value through other comprehensive income and fair value through profit or loss, depending on the applicable criteria."
        },

        {
            topic: "ifrs 10",
            keywords: ["ifrs 10", "consolidation", "subsidiary", "control"],
            answer:
                "IFRS 10 deals with consolidated financial statements and the principle of control. A parent generally consolidates an entity when it controls that entity."
        },

        {
            topic: "ias 28",
            keywords: ["ias 28", "associate", "significant influence", "equity method"],
            answer:
                "IAS 28 deals with investments in associates and joint ventures. Significant influence is generally presumed when an investor holds 20% or more of the voting power, unless clearly demonstrated otherwise. Associates are generally accounted for using the equity method in consolidated financial statements."
        },

        {
            topic: "audit",
            keywords: ["audit", "auditing"],
            answer:
                "An audit is an independent examination of financial information to provide assurance about whether the financial statements are prepared, in all material respects, according to the applicable financial reporting framework."
        },

        {
            topic: "audit evidence",
            keywords: ["audit evidence", "evidence"],
            answer:
                "Audit evidence is information used by the auditor in arriving at conclusions on which the audit opinion is based."
        },

        {
            topic: "audit risk",
            keywords: ["audit risk"],
            answer:
                "Audit risk is the risk that the auditor expresses an inappropriate audit opinion when the financial statements are materially misstated."
        },

        {
            topic: "internal controls",
            keywords: ["internal control", "internal controls"],
            answer:
                "Internal controls are processes designed to provide reasonable assurance regarding reliable reporting, effective operations and compliance with applicable laws and regulations."
        },

        {
            topic: "accounting cycle",
            keywords: ["accounting cycle"],
            answer:
                "The accounting cycle normally includes identifying transactions, recording them, posting to ledgers, preparing a trial balance, making adjustments and preparing financial statements."
        },

        {
            topic: "statement of financial position",
            keywords: ["statement of financial position", "balance sheet"],
            answer:
                "The statement of financial position reports assets, liabilities and equity at a specific date."
        },

        {
            topic: "income statement",
            keywords: ["income statement", "statement of profit or loss", "profit or loss"],
            answer:
                "The income statement reports revenue, expenses and the resulting profit or loss for a period."
        },

        {
            topic: "cash flow statement",
            keywords: ["cash flow statement", "cash flows"],
            answer:
                "A cash flow statement reports cash inflows and outflows from operating, investing and financing activities."
        },

        {
            topic: "working capital",
            keywords: ["working capital"],
            answer:
                "Working capital = Current Assets - Current Liabilities. It indicates the short-term resources available after current obligations are considered."
        },

        {
            topic: "return on equity",
            keywords: ["return on equity", "roe"],
            answer:
                "Return on equity measures the return generated on owners' equity. A common formula is Profit After Tax / Average Equity × 100."
        },

        {
            topic: "return on assets",
            keywords: ["return on assets", "roa"],
            answer:
                "Return on assets measures how efficiently a business uses its assets to generate profit."
        },

        {
            topic: "earnings per share",
            keywords: ["earnings per share", "eps"],
            answer:
                "Earnings per share measures the amount of profit attributable to ordinary shareholders for each ordinary share, subject to the applicable accounting requirements."
        }

    ];


    /* =========================================================
       BUILT-IN ECONOMICS KNOWLEDGE
       ========================================================= */

    const economicsKnowledge = [

        {
            topic: "economics",
            keywords: ["economics", "definition of economics"],
            answer:
                "Economics is the study of how individuals, businesses and governments make choices about using scarce resources to satisfy unlimited wants."
        },

        {
            topic: "scarcity",
            keywords: ["scarcity"],
            answer:
                "Scarcity means resources are limited while human wants are unlimited."
        },

        {
            topic: "opportunity cost",
            keywords: ["opportunity cost"],
            answer:
                "Opportunity cost is the value of the next best alternative that is given up when a choice is made."
        },

        {
            topic: "factors of production",
            keywords: ["factors of production", "land labour capital entrepreneurship"],
            answer:
                "The four main factors of production are land, labour, capital and entrepreneurship."
        },

        {
            topic: "demand",
            keywords: ["demand", "law of demand"],
            answer:
                "Demand is the quantity of a good or service consumers are willing and able to buy at different prices during a given period. Other things equal, quantity demanded generally falls when price rises."
        },

        {
            topic: "supply",
            keywords: ["supply", "law of supply"],
            answer:
                "Supply is the quantity of a good or service producers are willing and able to offer for sale at different prices during a given period. Other things equal, quantity supplied generally rises when price rises."
        },

        {
            topic: "equilibrium",
            keywords: ["market equilibrium", "equilibrium price", "equilibrium"],
            answer:
                "Market equilibrium occurs where quantity demanded equals quantity supplied."
        },

        {
            topic: "shortage",
            keywords: ["shortage", "shortages"],
            answer:
                "A shortage occurs when quantity demanded is greater than quantity supplied at a particular price."
        },

        {
            topic: "surplus",
            keywords: ["surplus", "surpluses"],
            answer:
                "A surplus occurs when quantity supplied is greater than quantity demanded at a particular price."
        },

        {
            topic: "elasticity",
            keywords: ["elasticity", "price elasticity"],
            answer:
                "Elasticity measures how responsive one economic variable is to a change in another variable. Price elasticity of demand measures how responsive quantity demanded is to a change in price."
        },

        {
            topic: "substitute goods",
            keywords: ["substitute goods", "substitutes"],
            answer:
                "Substitute goods are goods that can be used in place of each other, such as tea and coffee."
        },

        {
            topic: "complementary goods",
            keywords: ["complementary goods", "complements"],
            answer:
                "Complementary goods are goods that are normally used together, such as cars and fuel."
        },

        {
            topic: "utility",
            keywords: ["utility", "marginal utility"],
            answer:
                "Utility is the satisfaction or benefit a consumer receives from consuming a good or service."
        },

        {
            topic: "production possibility frontier",
            keywords: ["production possibility frontier", "ppf", "production possibilities"],
            answer:
                "A production possibility frontier shows the maximum combinations of two goods or services that can be produced with available resources and technology."
        },

        {
            topic: "perfect competition",
            keywords: ["perfect competition"],
            answer:
                "Perfect competition is a market structure characterised by many buyers and sellers, homogeneous products, relatively free entry and exit, and firms that are price takers."
        },

        {
            topic: "monopoly",
            keywords: ["monopoly"],
            answer:
                "A monopoly is a market structure where a single firm is the dominant or only supplier of a product or service and significant barriers to entry exist."
        },

        {
            topic: "oligopoly",
            keywords: ["oligopoly"],
            answer:
                "An oligopoly is a market structure dominated by a small number of large firms. The actions of one firm can affect the others."
        },

        {
            topic: "monopolistic competition",
            keywords: ["monopolistic competition"],
            answer:
                "Monopolistic competition has many firms selling differentiated products, with relatively low barriers to entry and exit."
        },

        {
            topic: "externalities",
            keywords: ["externalities", "externality"],
            answer:
                "An externality occurs when an economic activity creates costs or benefits for third parties who are not directly involved in the transaction."
        },

        {
            topic: "negative externality",
            keywords: ["negative externality", "negative externalities"],
            answer:
                "A negative externality creates an external cost for third parties. Pollution from production is a common example."
        },

        {
            topic: "positive externality",
            keywords: ["positive externality", "positive externalities"],
            answer:
                "A positive externality creates an external benefit for third parties. Education can create benefits beyond the individual receiving it."
        },

        {
            topic: "public goods",
            keywords: ["public goods", "public good"],
            answer:
                "Public goods are generally non-rival and non-excludable. Examples can include national defence and some forms of public infrastructure."
        },

        {
            topic: "market failure",
            keywords: ["market failure"],
            answer:
                "Market failure occurs when the market allocation of resources does not lead to an economically efficient outcome."
        },

        {
            topic: "inflation",
            keywords: ["inflation"],
            answer:
                "Inflation is a sustained increase in the general price level of goods and services over time, reducing the purchasing power of money."
        },

        {
            topic: "demand pull inflation",
            keywords: ["demand pull inflation", "demand-pull inflation"],
            answer:
                "Demand-pull inflation occurs when aggregate demand increases faster than the economy's ability to produce goods and services."
        },

        {
            topic: "cost push inflation",
            keywords: ["cost push inflation", "cost-push inflation"],
            answer:
                "Cost-push inflation occurs when rising production costs put upward pressure on prices."
        },

        {
            topic: "unemployment",
            keywords: ["unemployment"],
            answer:
                "Unemployment occurs when people who are willing and able to work and are seeking work do not have jobs."
        },

        {
            topic: "frictional unemployment",
            keywords: ["frictional unemployment"],
            answer:
                "Frictional unemployment occurs when people are temporarily between jobs or entering the labour market."
        },

        {
            topic: "structural unemployment",
            keywords: ["structural unemployment"],
            answer:
                "Structural unemployment occurs when workers' skills or locations do not match the requirements or location of available jobs."
        },

        {
            topic: "cyclical unemployment",
            keywords: ["cyclical unemployment"],
            answer:
                "Cyclical unemployment is associated with downturns in economic activity and insufficient aggregate demand."
        },

        {
            topic: "gdp",
            keywords: ["gdp", "gross domestic product"],
            answer:
                "Gross Domestic Product is the market value of final goods and services produced within a country's borders during a specific period."
        },

        {
            topic: "real gdp",
            keywords: ["real gdp"],
            answer:
                "Real GDP measures the value of output using prices from a base period, helping remove the effect of price changes."
        },

        {
            topic: "nominal gdp",
            keywords: ["nominal gdp"],
            answer:
                "Nominal GDP measures output using current prices and therefore can change because of both output and price changes."
        },

        {
            topic: "economic growth",
            keywords: ["economic growth", "growth"],
            answer:
                "Economic growth is an increase in an economy's productive capacity or real output over time."
        },

        {
            topic: "economic development",
            keywords: ["economic development", "development"],
            answer:
                "Economic development is a broader improvement in people's economic and social well-being, including factors such as income, health, education and living conditions."
        },

        {
            topic: "business cycle",
            keywords: ["business cycle", "economic cycle"],
            answer:
                "The business cycle describes fluctuations in economic activity. Common stages include expansion, peak, contraction and trough."
        },

        {
            topic: "fiscal policy",
            keywords: ["fiscal policy"],
            answer:
                "Fiscal policy involves government decisions about taxation and government spending to influence economic activity."
        },

        {
            topic: "monetary policy",
            keywords: ["monetary policy"],
            answer:
                "Monetary policy involves actions by a central bank to influence money and credit conditions, often through interest rates and other monetary tools."
        },

        {
            topic: "aggregate demand",
            keywords: ["aggregate demand", "ad"],
            answer:
                "Aggregate demand is total planned expenditure on final goods and services in an economy. A common expression is AD = C + I + G + (X - M)."
        },

        {
            topic: "aggregate supply",
            keywords: ["aggregate supply", "as"],
            answer:
                "Aggregate supply refers to the total quantity of goods and services firms are willing to produce at different general price levels."
        },

        {
            topic: "balance of payments",
            keywords: ["balance of payments", "bop"],
            answer:
                "The balance of payments records economic transactions between residents of a country and the rest of the world over a period."
        },

        {
            topic: "exchange rate",
            keywords: ["exchange rate", "exchange rates"],
            answer:
                "An exchange rate is the price of one currency expressed in terms of another currency."
        },

        {
            topic: "currency depreciation",
            keywords: ["currency depreciation", "depreciation of currency"],
            answer:
                "Currency depreciation is a fall in the value of a currency relative to another currency under a floating or market-determined exchange rate system."
        },

        {
            topic: "currency appreciation",
            keywords: ["currency appreciation", "appreciation of currency"],
            answer:
                "Currency appreciation is a rise in the value of a currency relative to another currency."
        },

        {
            topic: "economic indicators",
            keywords: ["economic indicators", "economic indicator"],
            answer:
                "Economic indicators are statistics used to understand the performance and condition of an economy. Examples include GDP growth, inflation and unemployment."
        },

        {
            topic: "economics essay",
            keywords: ["economics essay", "write economics essay"],
            answer:
                "A strong economics essay normally has a clear introduction, accurate definitions, economic theory, explanation of cause and effect, relevant examples, diagrams where appropriate, and a conclusion that directly answers the question."
        }

    ];


    /* =========================================================
       BUILT-IN MATHEMATICS KNOWLEDGE
       ========================================================= */

    const mathematicsKnowledge = [

        {
            topic: "percentage",
            keywords: ["percentage", "percent"],
            answer:
                "To calculate a percentage of an amount: Percentage amount = Percentage / 100 × Amount."
        },

        {
            topic: "percentage increase",
            keywords: ["percentage increase", "percent increase"],
            answer:
                "Percentage increase = (New Value - Original Value) / Original Value × 100."
        },

        {
            topic: "percentage decrease",
            keywords: ["percentage decrease", "percent decrease"],
            answer:
                "Percentage decrease = (Original Value - New Value) / Original Value × 100."
        },

        {
            topic: "linear equation",
            keywords: ["linear equation", "linear equations"],
            answer:
                "A linear equation has variables with a highest power of 1. A common form is y = mx + c, where m is the gradient and c is the y-intercept."
        },

        {
            topic: "quadratic equation",
            keywords: ["quadratic equation", "quadratic equations"],
            answer:
                "A quadratic equation has the form ax² + bx + c = 0, where a is not zero. It can be solved by factorisation, completing the square or the quadratic formula."
        },

        {
            topic: "quadratic formula",
            keywords: ["quadratic formula"],
            answer:
                "The quadratic formula is x = (-b ± √(b² - 4ac)) / 2a."
        },

        {
            topic: "factorisation",
            keywords: ["factorisation", "factorization", "factorise", "factorize"],
            answer:
                "Factorisation means expressing an algebraic expression as a product of factors. For example, x² + 5x + 6 = (x + 2)(x + 3)."
        },

        {
            topic: "indices",
            keywords: ["indices", "index laws", "exponents", "powers"],
            answer:
                "Important index laws include aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ / aⁿ = aᵐ⁻ⁿ, and (aᵐ)ⁿ = aᵐⁿ, where the expressions are defined."
        },

        {
            topic: "simultaneous equations",
            keywords: ["simultaneous equations", "simultaneous equation"],
            answer:
                "Simultaneous equations are equations solved together to find values that satisfy all the equations. Common methods include substitution and elimination."
        },

        {
            topic: "gradient",
            keywords: ["gradient", "slope"],
            answer:
                "The gradient of a straight line is change in y divided by change in x: m = (y₂ - y₁) / (x₂ - x₁)."
        },

        {
            topic: "straight line",
            keywords: ["straight line", "equation of a line"],
            answer:
                "The equation of a straight line is commonly written as y = mx + c, where m is the gradient and c is the y-intercept."
        },

        {
            topic: "distance",
            keywords: ["distance formula", "distance between points"],
            answer:
                "The distance between two points (x₁,y₁) and (x₂,y₂) is √[(x₂-x₁)² + (y₂-y₁)²]."
        },

        {
            topic: "midpoint",
            keywords: ["midpoint", "midpoint formula"],
            answer:
                "The midpoint between (x₁,y₁) and (x₂,y₂) is ((x₁+x₂)/2, (y₁+y₂)/2)."
        },

        {
            topic: "mean",
            keywords: ["mean", "average"],
            answer:
                "The arithmetic mean is calculated by adding all the values and dividing by the number of values."
        },

        {
            topic: "median",
            keywords: ["median"],
            answer:
                "The median is the middle value when data is arranged in ascending or descending order. If there are two middle values, their average is used."
        },

        {
            topic: "mode",
            keywords: ["mode"],
            answer:
                "The mode is the value that occurs most frequently in a data set."
        },

        {
            topic: "probability",
            keywords: ["probability"],
            answer:
                "For equally likely outcomes, probability of an event = favourable outcomes / total possible outcomes. Probability lies between 0 and 1."
        },

        {
            topic: "complement probability",
            keywords: ["complement probability", "probability complement"],
            answer:
                "The probability of an event not occurring is P(not A) = 1 - P(A)."
        },

        {
            topic: "simple interest",
            keywords: ["simple interest"],
            answer:
                "Simple interest is calculated using I = P × r × t, where P is principal, r is the interest rate per period as a decimal, and t is the number of periods."
        },

        {
            topic: "compound interest",
            keywords: ["compound interest"],
            answer:
                "Compound amount is commonly calculated using A = P(1 + r)ⁿ, where P is principal, r is the rate per period and n is the number of periods."
        },

        {
            topic: "monthly compound interest",
            keywords: ["monthly compound interest", "compounded monthly"],
            answer:
                "For monthly compounding, the number of periods and interest rate must be expressed monthly. A = P(1 + r/12)^(12t) when r is an annual rate and t is measured in years."
        },

        {
            topic: "arithmetic sequence",
            keywords: ["arithmetic sequence", "arithmetic progression"],
            answer:
                "An arithmetic sequence has a constant difference between consecutive terms. The nth term is aₙ = a + (n - 1)d."
        },

        {
            topic: "geometric sequence",
            keywords: ["geometric sequence", "geometric progression"],
            answer:
                "A geometric sequence has a constant ratio between consecutive terms. The nth term is aₙ = arⁿ⁻¹."
        },

        {
            topic: "pythagoras",
            keywords: ["pythagoras", "pythagorean theorem"],
            answer:
                "Pythagoras' theorem states that in a right-angled triangle, a² + b² = c², where c is the hypotenuse."
        },

        {
            topic: "trigonometry",
            keywords: ["trigonometry", "sin cos tan"],
            answer:
                "In a right-angled triangle, SOH-CAH-TOA gives sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, and tan θ = opposite/adjacent."
        },

        {
            topic: "area of circle",
            keywords: ["area of circle", "circle area"],
            answer:
                "The area of a circle is A = πr², where r is the radius."
        },

        {
            topic: "circumference",
            keywords: ["circumference", "circle circumference"],
            answer:
                "The circumference of a circle is C = 2πr or C = πd."
        },

        {
            topic: "triangle area",
            keywords: ["area of triangle", "triangle area"],
            answer:
                "The area of a triangle is A = 1/2 × base × perpendicular height."
        },

        {
            topic: "rectangle area",
            keywords: ["area of rectangle", "rectangle area"],
            answer:
                "The area of a rectangle is length × width."
        },

        {
            topic: "cylinder volume",
            keywords: ["cylinder volume", "volume of cylinder"],
            answer:
                "The volume of a cylinder is V = πr²h."
        },

        {
            topic: "differentiation",
            keywords: ["differentiation", "derivative", "differentiate"],
            answer:
                "Differentiation finds the rate at which a function changes. For example, if y = xⁿ, then dy/dx = nxⁿ⁻¹."
        },

        {
            topic: "calculus",
            keywords: ["calculus"],
            answer:
                "Calculus is a branch of mathematics dealing mainly with change and accumulation. Its two major areas are differentiation and integration."
        },

        {
            topic: "integration",
            keywords: ["integration", "integrate"],
            answer:
                "Integration is the reverse process of differentiation in many contexts. For example, ∫xⁿ dx = xⁿ⁺¹/(n+1) + C for n ≠ -1."
        },

        {
            topic: "functions",
            keywords: ["function", "functions"],
            answer:
                "A function is a rule that assigns each allowed input exactly one output."
        },

        {
            topic: "algebra",
            keywords: ["algebra"],
            answer:
                "Algebra uses symbols such as x and y to represent numbers and relationships. It includes simplifying expressions, solving equations and working with functions."
        }

    ];


    /* =========================================================
       SUBJECT KEYWORDS
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
            "debit",
            "credit",
            "ledger",
            "journal",
            "trial balance",
            "inventory",
            "stock",
            "vat",
            "tax",
            "audit",
            "auditing",
            "ifrs",
            "ias",
            "profit",
            "loss",
            "balance sheet",
            "cash flow",
            "receivable",
            "payable",
            "depreciation",
            "cost",
            "budget",
            "contribution",
            "break even",
            "financial statement"
        ],

        economics: [
            "economics",
            "scarcity",
            "opportunity cost",
            "demand",
            "supply",
            "equilibrium",
            "market",
            "elasticity",
            "utility",
            "consumer",
            "producer",
            "competition",
            "monopoly",
            "oligopoly",
            "externality",
            "public good",
            "inflation",
            "unemployment",
            "gdp",
            "growth",
            "development",
            "fiscal policy",
            "monetary policy",
            "interest rate",
            "aggregate demand",
            "aggregate supply",
            "exchange rate",
            "balance of payments"
        ],

        mathematics: [
            "mathematics",
            "math",
            "maths",
            "algebra",
            "equation",
            "quadratic",
            "linear",
            "factorise",
            "factorisation",
            "indices",
            "exponents",
            "gradient",
            "slope",
            "probability",
            "statistics",
            "mean",
            "median",
            "mode",
            "percentage",
            "interest",
            "sequence",
            "trigonometry",
            "sine",
            "cosine",
            "tangent",
            "pythagoras",
            "calculus",
            "differentiate",
            "differentiation",
            "integration",
            "function",
            "geometry",
            "area",
            "volume"
        ]

    };


    /* =========================================================
       TEXT NORMALISATION
       ========================================================= */

    function normalizeText(text) {

        return String(text || "")
            .toLowerCase()
            .replace(/[’']/g, "")
            .replace(/[^\p{L}\p{N}\s.%+\-*/=()]/gu, " ")
            .replace(/\s+/g, " ")
            .trim();

    }


    /* =========================================================
       STOP WORDS
       ========================================================= */

    const stopWords = new Set([
        "the",
        "a",
        "an",
        "is",
        "are",
        "was",
        "were",
        "what",
        "why",
        "how",
        "when",
        "where",
        "who",
        "which",
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
        "please",
        "tell",
        "me",
        "about",
        "explain",
        "define",
        "give",
        "for",
        "of",
        "to",
        "in",
        "on",
        "and",
        "or",
        "with",
        "that",
        "this",
        "it",
        "be",
        "my",
        "your",
        "you",
        "i"
    ]);


    /* =========================================================
       DETECT SUBJECT
       ========================================================= */

    function detectSubject(question) {

        const text = normalizeText(question);

        let scores = {
            accounting: 0,
            economics: 0,
            mathematics: 0
        };

        Object.keys(subjectWords).forEach(subject => {

            subjectWords[subject].forEach(keyword => {

                const key = normalizeText(keyword);

                if (!key) return;

                if (text.includes(key)) {
                    scores[subject] += key.includes(" ")
                        ? 3
                        : 1;
                }

            });

        });

        const sorted = Object.entries(scores)
            .sort((a, b) => b[1] - a[1]);

        if (!sorted.length || sorted[0][1] === 0) {
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
       SEARCH BUILT-IN KNOWLEDGE
       ========================================================= */

    function searchKnowledge(question, subject) {

        let database = [];

        if (subject === "accounting") {
            database = accountingKnowledge;
        }

        if (subject === "economics") {
            database = economicsKnowledge;
        }

        if (subject === "mathematics") {
            database = mathematicsKnowledge;
        }

        if (!database.length) {
            return null;
        }

        const normalizedQuestion = normalizeText(question);

        const questionWords = normalizedQuestion
            .split(/\s+/)
            .filter(word =>
                word.length > 2 &&
                !stopWords.has(word)
            );

        let bestItem = null;
        let bestScore = 0;

        database.forEach(item => {

            let score = 0;

            const normalizedTopic =
                normalizeText(item.topic);

            if (
                normalizedQuestion.includes(normalizedTopic)
            ) {
                score += 10;
            }

            item.keywords.forEach(keyword => {

                const normalizedKeyword =
                    normalizeText(keyword);

                if (
                    normalizedQuestion.includes(
                        normalizedKeyword
                    )
                ) {
                    score += normalizedKeyword.includes(" ")
                        ? 5
                        : 2;
                }

            });

            questionWords.forEach(word => {

                if (normalizedTopic.includes(word)) {
                    score += 1;
                }

            });

            if (score > bestScore) {
                bestScore = score;
                bestItem = item;
            }

        });

        if (!bestItem || bestScore < 1) {
            return null;
        }

        return bestItem;

    }


    /* =========================================================
       TXT KNOWLEDGE LOADER
       ========================================================= */

    async function loadKnowledgeFile(subject, filePath) {

        try {

            const response = await fetch(
                filePath,
                {
                    cache: "no-store"
                }
            );

            if (!response.ok) {
                throw new Error(
                    `HTTP ${response.status}`
                );
            }

            const text = await response.text();

            if (!text.trim()) {
                throw new Error(
                    "The file is empty."
                );
            }

            externalKnowledge[subject] = text;

            knowledgeStatus[subject] = true;

            console.log(
                `Mastercommerce: ${subject}.txt loaded successfully.`
            );

            return true;

        } catch (error) {

            externalKnowledge[subject] = "";

            knowledgeStatus[subject] = false;

            console.error(
                `Mastercommerce: Could not load ${filePath}`,
                error
            );

            return false;
        }

    }


    /* =========================================================
       LOAD ALL TXT FILES
       ========================================================= */

    async function loadAllKnowledge() {

        knowledgeLoading = true;

        const results = await Promise.allSettled([

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

        return results;

    }


    /* =========================================================
       SEARCH TXT KNOWLEDGE
       ========================================================= */

    function searchExternalKnowledge(
        question,
        subject
    ) {

        const knowledge =
            externalKnowledge[subject];

        if (!knowledge) {
            return null;
        }

        const normalizedQuestion =
            normalizeText(question);

        const questionWords =
            normalizedQuestion
                .split(/\s+/)
                .filter(word =>
                    word.length > 2 &&
                    !stopWords.has(word)
                );

        if (!questionWords.length) {
            return null;
        }

        const sections = knowledge
            .split(/\n\s*\n+/)
            .map(section => section.trim())
            .filter(section =>
                section.length > 0
            );

        let bestSection = null;
        let bestScore = 0;

        sections.forEach(section => {

            const normalizedSection =
                normalizeText(section);

            let score = 0;

            questionWords.forEach(word => {

                if (
                    normalizedSection.includes(word)
                ) {
                    score++;
                }

            });

            if (
                normalizedSection.includes(
                    normalizedQuestion
                )
            ) {
                score += 15;
            }

            const firstLine =
                normalizeText(
                    section.split("\n")[0] || ""
                );

            questionWords.forEach(word => {

                if (firstLine.includes(word)) {
                    score += 3;
                }

            });

            if (score > bestScore) {

                bestScore = score;
                bestSection = section;

            }

        });

        if (
            !bestSection ||
            bestScore < 1
        ) {
            return null;
        }

        return bestSection;

    }


    /* =========================================================
       SEARCH ALL TXT FILES
       ========================================================= */

    function searchAllExternalKnowledge(question) {

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

            const normalizedQuestion =
                normalizeText(question);

            const questionWords =
                normalizedQuestion
                    .split(/\s+/)
                    .filter(word =>
                        word.length > 2 &&
                        !stopWords.has(word)
                    );

            const sections = knowledge
                .split(/\n\s*\n+/)
                .map(section => section.trim())
                .filter(Boolean);

            sections.forEach(section => {

                const normalizedSection =
                    normalizeText(section);

                let score = 0;

                questionWords.forEach(word => {

                    if (
                        normalizedSection.includes(word)
                    ) {
                        score++;
                    }

                });

                if (
                    normalizedSection.includes(
                        normalizedQuestion
                    )
                ) {
                    score += 15;
                }

                if (score > bestScore) {

                    bestScore = score;

                    best = {
                        subject,
                        text: section
                    };

                }

            });

        });

        return best;

    }


    /* =========================================================
       LEARNED KNOWLEDGE
       ========================================================= */

    const LEARNED_KNOWLEDGE_KEY =
        "mastercommerce_learned_knowledge";

    function getLearnedKnowledge() {

        try {

            const saved =
                localStorage.getItem(
                    LEARNED_KNOWLEDGE_KEY
                );

            if (!saved) {
                return [];
            }

            const parsed =
                JSON.parse(saved);

            return Array.isArray(parsed)
                ? parsed
                : [];

        } catch (error) {

            console.error(
                "Could not read learned knowledge.",
                error
            );

            return [];

        }

    }


    function saveLearnedKnowledge(items) {

        try {

            localStorage.setItem(
                LEARNED_KNOWLEDGE_KEY,
                JSON.stringify(items)
            );

        } catch (error) {

            console.error(
                "Could not save learned knowledge.",
                error
            );

        }

    }


    function looksLikeQuestion(text) {

        const normalized =
            normalizeText(text);

        if (!normalized) {
            return true;
        }

        if (normalized.endsWith("?")) {
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
            starter =>
                normalized === starter ||
                normalized.startsWith(
                    starter + " "
                )
        );

    }


    function saveStatementIfUseful(statement) {

        const text =
            String(statement || "").trim();

        if (text.length < 15) {
            return false;
        }

        if (looksLikeQuestion(text)) {
            return false;
        }

        const learned =
            getLearnedKnowledge();

        const normalized =
            normalizeText(text);

        const duplicate =
            learned.some(item =>
                normalizeText(item) === normalized
            );

        if (duplicate) {
            return false;
        }

        learned.push(text);

        saveLearnedKnowledge(learned);

        return true;

    }


    function searchLearnedKnowledge(question) {

        const learned =
            getLearnedKnowledge();

        if (!learned.length) {
            return null;
        }

        const questionWords =
            normalizeText(question)
                .split(/\s+/)
                .filter(word =>
                    word.length > 2 &&
                    !stopWords.has(word)
                );

        let best = null;
        let bestScore = 0;

        learned.forEach(statement => {

            const normalized =
                normalizeText(statement);

            let score = 0;

            questionWords.forEach(word => {

                if (normalized.includes(word)) {
                    score++;
                }

            });

            if (score > bestScore) {

                bestScore = score;
                best = statement;

            }

        });

        if (!best || bestScore < 1) {
            return null;
        }

        return best;

    }


    /* =========================================================
       SIMPLE CALCULATOR
       ========================================================= */

    function simpleCalculator(question) {

        const text =
            String(question || "")
                .replace(/,/g, "")
                .trim();

        const match =
            text.match(
                /(?:calculate|what is|solve)\s+([0-9+\-*/().%\s]+)$/i
            );

        if (!match) {
            return null;
        }

        const expression =
            match[1].trim();

        if (!expression) {
            return null;
        }

        if (!/^[0-9+\-*/().%\s]+$/.test(expression)) {
            return null;
        }

        try {

            const safeExpression =
                expression.replace(
                    /(\d+(?:\.\d+)?)%/g,
                    "($1/100)"
                );

            const result =
                Function(
                    `"use strict"; return (${safeExpression})`
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
       GENERAL ANSWER
       ========================================================= */

    function generalAnswer(question) {

        const text =
            normalizeText(question);

        if (
            text.includes("hello") ||
            text.includes("hi") ||
            text === "hey"
        ) {

            return "Hello. I am Mastercommerce. Ask me a question about Accounting, Economics or Mathematics.";

        }

        if (
            text.includes("who are you") ||
            text.includes("what are you")
        ) {

            return "I am Mastercommerce, an educational learning platform for Accounting, Economics and Mathematics.";

        }

        if (
            text.includes("who made you") ||
            text.includes("who created you") ||
            text.includes("developer")
        ) {

            return (
                "Mastercommerce was developed by " +
                developerInformation.developer +
                ". The founder is " +
                developerInformation.founder +
                "."
            );

        }

        if (
            text.includes("what subjects") ||
            text.includes("subjects do you teach") ||
            text.includes("what can you teach")
        ) {

            return "I can help with Accounting, Economics and Mathematics.";

        }

        return null;

    }


    /* =========================================================
       FORMAT KNOWLEDGE
       ========================================================= */

    function formatKnowledge(text) {

        if (!text) {
            return "";
        }

        let output =
            String(text).trim();

        output =
            output.replace(
                /\r\n/g,
                "\n"
            );

        return output;

    }


    /* =========================================================
       GENERATE ANSWER
       ========================================================= */

    async function generateAnswer(question) {

        const cleanQuestion =
            String(question || "").trim();

        if (!cleanQuestion) {
            return "Please type a question first.";
        }


        /* Wait for TXT files */

        if (knowledgeLoading) {

            await knowledgeReadyPromise;

        }


        /* Calculator */

        const calculated =
            simpleCalculator(cleanQuestion);

        if (calculated) {
            return calculated;
        }


        /* Learned knowledge */

        const learned =
            searchLearnedKnowledge(
                cleanQuestion
            );

        if (learned) {

            return (
                "Based on information you taught me:\n\n" +
                learned
            );

        }


        /* Subject detection */

        let subject =
            detectSubject(cleanQuestion);


        /* TXT search */

        if (subject) {

            const external =
                searchExternalKnowledge(
                    cleanQuestion,
                    subject
                );

            if (external) {

                return formatKnowledge(
                    external
                );

            }


            /* Built-in search */

            const builtIn =
                searchKnowledge(
                    cleanQuestion,
                    subject
                );

            if (builtIn) {

                return builtIn.answer;

            }

        } else {

            /* Search all TXT files */

            const external =
                searchAllExternalKnowledge(
                    cleanQuestion
                );

            if (external) {

                return formatKnowledge(
                    external.text
                );

            }


            /* Search all built-in databases */

            const databases = [
                {
                    subject: "accounting",
                    data: accountingKnowledge
                },
                {
                    subject: "economics",
                    data: economicsKnowledge
                },
                {
                    subject: "mathematics",
                    data: mathematicsKnowledge
                }
            ];

            let best = null;
            let bestScore = 0;

            databases.forEach(database => {

                const result =
                    searchKnowledge(
                        cleanQuestion,
                        database.subject
                    );

                if (result) {

                    const score =
                        result.keywords.reduce(
                            (total, keyword) => {

                                return total +
                                    (
                                        normalizeText(
                                            cleanQuestion
                                        ).includes(
                                            normalizeText(
                                                keyword
                                            )
                                        )
                                            ? 1
                                            : 0
                                    );

                            },
                            0
                        );

                    if (score > bestScore) {

                        bestScore = score;
                        best = result;

                    }

                }

            });

            if (best) {
                return best.answer;
            }

        }


        /* General answer */

        const general =
            generalAnswer(
                cleanQuestion
            );

        if (general) {
            return general;
        }


        /* Unknown */

        if (!subject) {

            return (
                "I am not sure which subject your question belongs to. " +
                "Please make it clearer by mentioning Accounting, Economics or Mathematics."
            );

        }

        return (
            "I do not have enough information about that topic in my current knowledge. " +
            "You can add the topic to the relevant TXT knowledge file so Mastercommerce can learn it."
        );

    }


    /* =========================================================
       KNOWLEDGE READY PROMISE
       ========================================================= */

    const knowledgeReadyPromise =
        loadAllKnowledge();


    /* =========================================================
       WELCOME SCREEN
       ========================================================= */

    function showWelcome() {

        if (welcomeScreen) {
            welcomeScreen.style.display = "flex";
        }

    }


    function hideWelcome() {

        if (welcomeScreen) {
            welcomeScreen.style.display = "none";
        }

    }


    /* =========================================================
       CLEAR CHAT MESSAGES
       ========================================================= */

    function clearMessages() {

        if (!chatArea) {
            return;
        }

        chatArea
            .querySelectorAll(".message")
            .forEach(message => {
                message.remove();
            });

        showWelcome();

    }


    /* =========================================================
       CREATE MESSAGE
       ========================================================= */

    function createMessage(
        text,
        sender
    ) {

        if (!chatArea) {
            return null;
        }

        const message =
            document.createElement("div");

        message.className =
            `message ${sender}`;

        const messageContent =
            document.createElement("div");

        messageContent.className =
            "message-content";

        const safeText =
            String(text || "");

        messageContent.textContent =
            safeText;

        message.appendChild(
            messageContent
        );

        chatArea.appendChild(
            message
        );

        chatArea.scrollTop =
            chatArea.scrollHeight;

        return message;

    }


    /* =========================================================
       THINKING MESSAGE
       ========================================================= */

    function createThinkingMessage() {

        if (!chatArea) {
            return null;
        }

        const message =
            document.createElement("div");

        message.className =
            "message assistant thinking";

        const content =
            document.createElement("div");

        content.className =
            "message-content";

        content.textContent =
            "Thinking...";

        message.appendChild(
            content
        );

        chatArea.appendChild(
            message
        );

        chatArea.scrollTop =
            chatArea.scrollHeight;

        return message;

    }


    /* =========================================================
       SEND QUESTION
       ========================================================= */

    async function sendQuestion() {

        if (!questionInput) {
            return;
        }

        const question =
            questionInput.value.trim();

        if (!question) {
            return;
        }


        /* Save statements only */

        saveStatementIfUseful(
            question
        );


        /* Reset input */

        questionInput.value = "";

        questionInput.style.height =
            "auto";


        /* Close plus menu */

        closePlusMenu();


        /* Hide welcome */

        hideWelcome();


        /* Show user message */

        createMessage(
            question,
            "user"
        );


        conversation.push({
            role: "user",
            content: question
        });


        /* Thinking */

        const thinking =
            createThinkingMessage();


        try {

            const answer =
                await generateAnswer(
                    question
                );


            if (thinking) {
                thinking.remove();
            }


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

            if (thinking) {
                thinking.remove();
            }

            createMessage(
                "Something went wrong while processing your question. Please try again.",
                "assistant"
            );

        }

    }


    /* =========================================================
       INPUT EVENTS
       ========================================================= */

    on(
        sendButton,
        "click",
        sendQuestion
    );


    on(
        questionInput,
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


    on(
        questionInput,
        "input",
        () => {

            questionInput.style.height =
                "auto";

            questionInput.style.height =
                Math.min(
                    questionInput.scrollHeight,
                    180
                ) + "px";

        }
    );


    /* =========================================================
       SIDEBAR
       ========================================================= */

    function openSidebarMenu() {

        if (sidebar) {
            sidebar.classList.add("open");
        }

        if (sidebarOverlay) {
            sidebarOverlay.classList.add("show");
        }

    }


    function closeSidebarMenu() {

        if (sidebar) {
            sidebar.classList.remove("open");
        }

        if (sidebarOverlay) {
            sidebarOverlay.classList.remove("show");
        }

    }


    on(
        menuButton,
        "click",
        event => {

            event.stopPropagation();

            openSidebarMenu();

        }
    );


    on(
        closeSidebar,
        "click",
        closeSidebarMenu
    );


    on(
        sidebarOverlay,
        "click",
        closeSidebarMenu
    );


    /* =========================================================
       HOME
       ========================================================= */

    on(
        homeButton,
        "click",
        () => {

            closeSidebarMenu();

            document
                .querySelectorAll(".modal")
                .forEach(modal => {
                    modal.classList.remove("show");
                });

            showWelcome();

            if (chatArea) {
                chatArea.scrollTop = 0;
            }

        }
    );


    /* =========================================================
       NEW CHAT
       ========================================================= */

    on(
        newChatButton,
        "click",
        () => {

            conversation = [];

            clearMessages();

            closeSidebarMenu();

            if (questionInput) {

                questionInput.value = "";

                questionInput.style.height =
                    "auto";

                questionInput.focus();

            }

        }
    );


    /* =========================================================
       CLEAR CHAT
       ========================================================= */

    on(
        clearChatButton,
        "click",
        () => {

            conversation = [];

            clearMessages();

            closeSidebarMenu();

        }
    );


    /* =========================================================
       PLUS MENU
       ========================================================= */

    function openPlusMenu() {

        if (!plusMenu) {
            return;
        }

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


    function closePlusMenu() {

        if (!plusMenu) {
            return;
        }

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


    on(
        plusButton,
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


    document
        .querySelectorAll(".plus-option")
        .forEach(option => {

            on(
                option,
                "click",
                event => {

                    event.stopPropagation();

                    const feature =
                        option.dataset.feature ||
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
                plusButton &&
                !plusMenu.contains(event.target) &&
                !plusButton.contains(event.target)
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

        if (!featureToast) {
            return;
        }

        featureToast.textContent =
            message;

        featureToast.classList.add(
            "show"
        );

        clearTimeout(
            toastTimer
        );

        toastTimer =
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
       MODALS
       ========================================================= */

    function openModal(modal) {

        if (!modal) {
            return;
        }

        modal.classList.add("show");

    }


    function closeModal(modal) {

        if (!modal) {
            return;
        }

        modal.classList.remove("show");

    }


    on(
        aboutButton,
        "click",
        () => {

            closeSidebarMenu();

            openModal(
                aboutModal
            );

        }
    );


    on(
        settingsButton,
        "click",
        () => {

            closeSidebarMenu();

            openModal(
                settingsModal
            );

        }
    );


    document
        .querySelectorAll(
            "[data-close]"
        )
        .forEach(button => {

            on(
                button,
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
        .forEach(modal => {

            on(
                modal,
                "click",
                event => {

                    if (
                        event.target === modal
                    ) {

                        closeModal(
                            modal
                        );

                    }

                }
            );

        });


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeSidebarMenu();

                closePlusMenu();

                closeModal(
                    aboutModal
                );

                closeModal(
                    settingsModal
                );

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


    function getSettings() {

        try {

            const saved =
                localStorage.getItem(
                    SETTINGS_KEY
                );

            if (!saved) {
                return {
                    ...defaultSettings
                };
            }

            return {
                ...defaultSettings,
                ...JSON.parse(saved)
            };

        } catch (error) {

            return {
                ...defaultSettings
            };

        }

    }


    function saveSettings(settings) {

        try {

            localStorage.setItem(
                SETTINGS_KEY,
                JSON.stringify(settings)
            );

        } catch (error) {

            console.error(
                "Could not save settings.",
                error
            );

        }

    }


    let settings =
        getSettings();


    function applySettings() {

        const body =
            document.body;

        if (!body) {
            return;
        }


        /* Theme */

        body.classList.remove(
            "dark-mode",
            "light-mode"
        );

        body.classList.add(
            settings.theme === "dark"
                ? "dark-mode"
                : "light-mode"
        );


        /* Background */

        body.classList.remove(
            "background-white",
            "background-gray",
            "background-warm",
            "background-blue",
            "background-green",
            "background-lavender"
        );

        body.classList.add(
            `background-${settings.background}`
        );


        /* Font */

        body.classList.remove(
            "font-small",
            "font-medium",
            "font-large"
        );

        body.classList.add(
            `font-${settings.font}`
        );


        /* Reduced motion */

        body.classList.toggle(
            "reduced-motion",
            settings.reducedMotion === true
        );


        if (motionButton) {

            motionButton.textContent =
                settings.reducedMotion
                    ? "Normal motion"
                    : "Reduced motion";

        }

    }


    document
        .querySelectorAll(
            "[data-theme]"
        )
        .forEach(button => {

            on(
                button,
                "click",
                () => {

                    settings.theme =
                        button.dataset.theme;

                    saveSettings(
                        settings
                    );

                    applySettings();

                }
            );

        });


    document
        .querySelectorAll(
            "[data-background]"
        )
        .forEach(button => {

            on(
                button,
                "click",
                () => {

                    settings.background =
                        button.dataset.background;

                    saveSettings(
                        settings
                    );

                    applySettings();

                }
            );

        });


    document
        .querySelectorAll(
            "[data-font]"
        )
        .forEach(button => {

            on(
                button,
                "click",
                () => {

                    settings.font =
                        button.dataset.font;

                    saveSettings(
                        settings
                    );

                    applySettings();

                }
            );

        });


    on(
        motionButton,
        "click",
        () => {

            settings.reducedMotion =
                !settings.reducedMotion;

            saveSettings(
                settings
            );

            applySettings();

        }
    );


    on(
        resetSettingsButton,
        "click",
        () => {

            settings = {
                ...defaultSettings
            };

            saveSettings(
                settings
            );

            applySettings();

        }
    );


    /* =========================================================
       INITIALISE
       ========================================================= */

    applySettings();

    showWelcome();

});
