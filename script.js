document.addEventListener("DOMContentLoaded", () => {

    if (window.mastercommerceLoaded) return;
    window.mastercommerceLoaded = true;

    /* ==========================================
       ELEMENTS
    ========================================== */

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


    /* ==========================================
       DEVELOPER INFORMATION
    ========================================== */

    const developerInformation = {
        developer: "PD | Web & App Development",
        founder: "Phungo Dembe Vusani",
        location: "Limpopo, South Africa",
        education: "University of Venda, BCom in Accounting",
        product: "Mastercommerce",
        version: "v1.0.0"
    };


    /* ==========================================
       CONVERSATION STATE
    ========================================== */

    let lastConversationState = "normal";


    /* ==========================================
       ACCOUNTING KNOWLEDGE
    ========================================== */

    const accountingKnowledge = [

        {
            keywords: ["accounting equation"],
            answer:
                "The accounting equation is:\n\nAssets = Equity + Liabilities\n\nIt means everything a business owns is financed either by the owner's equity or by liabilities.\n\nExample:\nIf assets are R100,000 and liabilities are R40,000:\nEquity = R100,000 - R40,000 = R60,000."
        },

        {
            keywords: ["asset", "assets"],
            answer:
                "An asset is a resource controlled by a business that is expected to provide future economic benefits.\n\nExamples include cash, inventory, vehicles, buildings, equipment, land, receivables and investments.\n\nAssets can be current or non-current."
        },

        {
            keywords: ["current asset", "current assets"],
            answer:
                "Current assets are assets expected to be realised, sold, consumed or converted into cash during the normal operating cycle or generally within 12 months.\n\nExamples include inventory, trade receivables, cash, short-term investments and prepayments."
        },

        {
            keywords: ["non-current asset", "non current asset"],
            answer:
                "A non-current asset is a long-term asset that is not expected to be converted into cash or consumed within the normal operating cycle or within 12 months.\n\nExamples include land, buildings, vehicles, machinery and equipment."
        },

        {
            keywords: ["liability", "liabilities"],
            answer:
                "A liability is a present obligation of a business resulting from past events that is expected to result in an outflow of economic resources.\n\nExamples include bank loans, trade payables, accrued expenses, tax payable and bonds."
        },

        {
            keywords: ["current liabilities", "current liability"],
            answer:
                "Current liabilities are obligations expected to be settled during the normal operating cycle or generally within 12 months.\n\nExamples include trade payables, short-term loans, accrued expenses, VAT payable and income tax payable."
        },

        {
            keywords: ["equity", "owners equity", "owner's equity"],
            answer:
                "Equity is the owner's residual interest in the assets of a business after deducting liabilities.\n\nEquity = Assets - Liabilities.\n\nEquity normally increases through owner contributions and profits and decreases through drawings and losses."
        },

        {
            keywords: ["revenue", "income"],
            answer:
                "Revenue is income earned from the ordinary activities of a business.\n\nExamples include sales, service income, commission income and interest income.\n\nRevenue normally increases profit and equity."
        },

        {
            keywords: ["expense", "expenses"],
            answer:
                "An expense is a decrease in economic benefits during an accounting period.\n\nExamples include rent, salaries, insurance, advertising, electricity and depreciation.\n\nExpenses reduce profit."
        },

        {
            keywords: ["double entry", "debit credit", "debits credits"],
            answer:
                "Double-entry accounting means every transaction is recorded in at least two accounts.\n\nAssets and expenses normally increase with debits and decrease with credits.\n\nLiabilities, equity and revenue normally increase with credits and decrease with debits."
        },

        {
            keywords: ["trial balance"],
            answer:
                "A trial balance is a list of ledger account balances used to check whether total debits equal total credits.\n\nA balanced trial balance does not prove that there are no accounting errors."
        },

        {
            keywords: ["bank reconciliation"],
            answer:
                "A bank reconciliation compares the business's cash records with the bank statement.\n\nDifferences may arise because of outstanding cheques, deposits not yet reflected, bank charges, interest, debit orders, direct deposits or errors."
        },

        {
            keywords: ["depreciation"],
            answer:
                "Depreciation is the systematic allocation of the depreciable amount of an asset over its useful life.\n\nStraight-line depreciation:\n(Cost - Residual value) ÷ Useful life.\n\nExample:\nCost = R100,000\nResidual value = R10,000\nUseful life = 5 years\nAnnual depreciation = R18,000."
        },

        {
            keywords: ["inventory", "stock"],
            answer:
                "Inventory consists of goods held for sale, goods being produced for sale or materials used in production.\n\nUnder IAS 2, inventory is generally measured at the lower of cost and net realisable value."
        },

        {
            keywords: ["trade receivables", "debtors", "accounts receivable"],
            answer:
                "Trade receivables are amounts owed to a business by customers, usually because goods or services were sold on credit.\n\nThey are normally financial assets."
        },

        {
            keywords: ["trade payables", "creditors", "accounts payable"],
            answer:
                "Trade payables are amounts owed by a business to suppliers, normally arising from credit purchases.\n\nThey are usually current liabilities."
        },

        {
            keywords: ["vat", "value added tax"],
            answer:
                "VAT is a consumption tax administered by SARS in South Africa.\n\nOutput VAT is charged on qualifying sales.\nInput VAT is VAT paid on qualifying purchases.\n\nVAT payable is generally calculated as output VAT less allowable input VAT."
        },

        {
            keywords: ["profit", "net profit"],
            answer:
                "Profit is the amount left after expenses are deducted from revenue.\n\nProfit = Revenue - Expenses.\n\nIf expenses are greater than revenue, the business makes a loss."
        },

        {
            keywords: ["gross profit"],
            answer:
                "Gross profit is calculated as:\n\nSales - Cost of Sales = Gross Profit."
        },

        {
            keywords: ["gross profit margin"],
            answer:
                "Gross profit margin measures gross profit as a percentage of revenue.\n\nGross Profit Margin = Gross Profit ÷ Revenue × 100."
        },

        {
            keywords: ["net profit margin"],
            answer:
                "Net profit margin measures the percentage of revenue that remains as net profit.\n\nNet Profit Margin = Net Profit ÷ Revenue × 100."
        },

        {
            keywords: ["current ratio"],
            answer:
                "The current ratio measures short-term liquidity.\n\nCurrent Ratio = Current Assets ÷ Current Liabilities.\n\nFor example, a ratio of 2:1 means the business has R2 of current assets for every R1 of current liabilities."
        },

        {
            keywords: ["acid test", "quick ratio"],
            answer:
                "The acid-test ratio measures liquidity without relying on inventory.\n\nAcid Test Ratio = (Current Assets - Inventory) ÷ Current Liabilities."
        },

        {
            keywords: ["inventory turnover"],
            answer:
                "Inventory turnover measures how many times inventory is sold or replaced during a period.\n\nInventory Turnover = Cost of Sales ÷ Average Inventory."
        },

        {
            keywords: ["debtors collection", "receivables collection", "collection period"],
            answer:
                "The debtors collection period estimates how long customers take to pay.\n\nCollection Period = Average Trade Receivables ÷ Credit Sales × 365 days."
        },

        {
            keywords: ["debt ratio"],
            answer:
                "The debt ratio measures the proportion of assets financed by liabilities.\n\nDebt Ratio = Total Liabilities ÷ Total Assets × 100."
        },

        {
            keywords: ["break even", "break-even"],
            answer:
                "Break-even occurs when total revenue equals total costs.\n\nBreak-even units = Fixed Costs ÷ Contribution per Unit.\n\nContribution per Unit = Selling Price - Variable Cost per Unit."
        },

        {
            keywords: ["contribution margin", "contribution"],
            answer:
                "Contribution is sales revenue minus variable costs.\n\nContribution = Sales - Variable Costs.\n\nContribution first covers fixed costs. Any remaining amount becomes profit."
        },

        {
            keywords: ["fixed cost", "fixed costs"],
            answer:
                "Fixed costs generally remain constant in total within a relevant range of activity.\n\nExamples include rent, insurance and some permanent salaries.\n\nFixed cost per unit normally decreases when production increases."
        },

        {
            keywords: ["variable cost", "variable costs"],
            answer:
                "Variable costs change with the level of activity.\n\nExamples include direct materials, packaging and sales commissions.\n\nTotal variable cost normally increases as production increases."
        },

        {
            keywords: ["marginal cost"],
            answer:
                "Marginal cost is the additional cost of producing one more unit.\n\nIt can be useful for short-term production and pricing decisions."
        },

        {
            keywords: ["opportunity cost"],
            answer:
                "Opportunity cost is the benefit sacrificed when choosing one alternative instead of the next best alternative."
        },

        {
            keywords: ["sunk cost"],
            answer:
                "A sunk cost is a cost that has already been incurred and cannot be recovered.\n\nSunk costs should normally not affect future decisions."
        },

        {
            keywords: ["relevant cost"],
            answer:
                "A relevant cost is a future cost that differs between decision alternatives.\n\nRelevant costs are important in decisions such as make-or-buy, special orders and replacing equipment."
        },

        {
            keywords: ["absorption costing"],
            answer:
                "Absorption costing assigns both variable manufacturing costs and fixed manufacturing overhead to products.\n\nProduct cost can include direct materials, direct labour, variable manufacturing overhead and fixed manufacturing overhead."
        },

        {
            keywords: ["variable costing", "marginal costing"],
            answer:
                "Under variable or marginal costing, variable manufacturing costs are treated as product costs while fixed manufacturing overhead is treated as a period cost.\n\nIt is useful for short-term decision-making."
        },

        {
            keywords: ["ias 16", "ppe", "property plant equipment"],
            answer:
                "IAS 16 deals with property, plant and equipment.\n\nAn item is recognised when future economic benefits are probable and its cost can be measured reliably.\n\nPPE can use the cost model or revaluation model, depending on the accounting policy."
        },

        {
            keywords: ["ias 2"],
            answer:
                "IAS 2 deals with inventories.\n\nInventory is generally measured at the lower of cost and net realisable value.\n\nCost includes purchase costs, conversion costs and other costs necessary to bring inventory to its present location and condition."
        },

        {
            keywords: ["ias 12"],
            answer:
                "IAS 12 deals with income taxes, including current tax and deferred tax.\n\nDeferred tax is mainly based on temporary differences between the carrying amount of an asset or liability and its tax base."
        },

        {
            keywords: ["ias 21"],
            answer:
                "IAS 21 deals with the effects of changes in foreign exchange rates.\n\nIt covers foreign currency transactions, functional currency, presentation currency and foreign operations."
        },

        {
            keywords: ["ifrs 15"],
            answer:
                "IFRS 15 deals with revenue from contracts with customers.\n\nThe five-step model is:\n1. Identify the contract.\n2. Identify performance obligations.\n3. Determine the transaction price.\n4. Allocate the transaction price.\n5. Recognise revenue when performance obligations are satisfied."
        },

        {
            keywords: ["ifrs 9"],
            answer:
                "IFRS 9 deals with financial instruments.\n\nIt covers classification and measurement, impairment, expected credit losses and hedge accounting.\n\nCommon measurement categories include amortised cost, FVOCI and FVTPL."
        },

        {
            keywords: ["ifrs 10", "consolidation", "subsidiary", "control"],
            answer:
                "IFRS 10 deals with consolidated financial statements and control.\n\nControl generally requires power over the investee, exposure or rights to variable returns, and the ability to use power to affect those returns."
        },

        {
            keywords: ["ias 28", "associate", "significant influence"],
            answer:
                "IAS 28 deals with investments in associates and joint ventures.\n\nSignificant influence is normally presumed when an investor holds 20% or more of the voting power, unless clearly demonstrated otherwise.\n\nAssociates are generally accounted for using the equity method."
        },

        {
            keywords: ["audit", "auditing"],
            answer:
                "Auditing is the independent examination of financial information to obtain evidence and provide an opinion on whether financial statements are prepared, in all material respects, according to the applicable financial reporting framework."
        },

        {
            keywords: ["audit evidence"],
            answer:
                "Audit evidence is information used by auditors to support their conclusions.\n\nExamples include invoices, bank confirmations, contracts, accounting records, inspection, recalculation, analytical procedures and external confirmations."
        },

        {
            keywords: ["audit risk"],
            answer:
                "Audit risk is the risk that an auditor expresses an inappropriate opinion when the financial statements contain a material misstatement.\n\nIt is commonly discussed in terms of inherent risk, control risk and detection risk."
        },

        {
            keywords: ["internal control", "internal controls"],
            answer:
                "Internal controls are policies and procedures designed to help a business achieve reliable reporting, efficient operations, safeguarding of assets and compliance.\n\nExamples include segregation of duties, authorisation and reconciliations."
        },

        {
            keywords: ["accounting cycle"],
            answer:
                "The accounting cycle generally includes identifying transactions, analysing them, recording them, posting to ledgers, preparing a trial balance, making adjustments, preparing financial statements and closing temporary accounts."
        },

        {
            keywords: ["statement of financial position", "balance sheet"],
            answer:
                "The statement of financial position shows a business's assets, liabilities and equity at a particular date.\n\nIt is based on the accounting equation:\nAssets = Equity + Liabilities."
        },

        {
            keywords: ["income statement", "statement of profit or loss"],
            answer:
                "The statement of profit or loss reports income and expenses for an accounting period.\n\nA simplified structure is:\nRevenue - Cost of Sales = Gross Profit\nGross Profit - Operating Expenses = Operating Profit\nProfit before tax - Tax = Profit after tax."
        },

        {
            keywords: ["cash flow statement"],
            answer:
                "A cash flow statement reports cash movements during a period.\n\nCash flows are normally classified into operating activities, investing activities and financing activities."
        },

        {
            keywords: ["working capital"],
            answer:
                "Working capital measures the difference between current assets and current liabilities.\n\nWorking Capital = Current Assets - Current Liabilities."
        },

        {
            keywords: ["roe", "return on equity"],
            answer:
                "Return on Equity measures profit generated relative to equity.\n\nROE = Profit After Tax ÷ Average Equity × 100."
        },

        {
            keywords: ["roa", "return on assets"],
            answer:
                "Return on Assets measures profit relative to assets.\n\nROA = Profit ÷ Average Total Assets × 100."
        },

        {
            keywords: ["eps", "earnings per share"],
            answer:
                "Earnings per share measures profit attributable to ordinary shareholders for each ordinary share.\n\nEPS = Profit attributable to ordinary shareholders ÷ Weighted average number of ordinary shares."
        }

    ];


    /* ==========================================
       EXTERNAL ECONOMICS DOCUMENT KNOWLEDGE
    ========================================== */

    let economicsDocumentKnowledge = "";

    async function loadDocumentKnowledge() {

        try {

            const response =
                await fetch("knowledge/economics.txt");

            if (!response.ok) {
                throw new Error(
                    "Could not load knowledge/economics.txt"
                );
            }

            economicsDocumentKnowledge =
                await response.text();

            console.log(
                "Mastercommerce: Economics document knowledge loaded."
            );

        } catch (error) {

            console.error(
                "Mastercommerce knowledge error:",
                error
            );

        }

    }

    loadDocumentKnowledge();


    /* ==========================================
       ECONOMICS DOCUMENT SEARCH
    ========================================== */

    function searchDocumentKnowledge(question) {

        if (!economicsDocumentKnowledge) {
            return null;
        }

        const text =
            normalizeText(question);

        const words =
            text
                .split(/\s+/)
                .filter(word => word.length > 3);

        const sections =
            economicsDocumentKnowledge
                .split(/\n\s*\n/)
                .filter(section => section.trim());

        let bestMatch = null;
        let bestScore = 0;

        sections.forEach(section => {

            const sectionText =
                normalizeText(section);

            let score = 0;

            words.forEach(word => {

                if (sectionText.includes(word)) {
                    score += word.length;
                }

            });

            if (score > bestScore) {

                bestScore = score;
                bestMatch = section.trim();

            }

        });

        if (bestScore === 0) {
            return null;
        }

        return bestMatch;

    }


    /* ==========================================
       ECONOMICS KNOWLEDGE
    ========================================== */

    const economicsKnowledge = [

        {
            keywords: ["economics"],
            answer:
                "Economics is the study of how people, businesses and governments make choices about scarce resources that have alternative uses."
        },

        {
            keywords: ["scarcity"],
            answer:
                "Scarcity means resources are limited while human wants are unlimited. Because resources are scarce, choices must be made."
        },

        {
            keywords: ["opportunity cost"],
            answer:
                "Opportunity cost is the value of the next best alternative that is given up when a choice is made."
        },

        {
            keywords: ["factors of production"],
            answer:
                "The four main factors of production are land, labour, capital and entrepreneurship."
        },

        {
            keywords: ["demand"],
            answer:
                "Demand is the quantity of a good or service consumers are willing and able to buy at different prices during a given period."
        },

        {
            keywords: ["supply"],
            answer:
                "Supply is the quantity of a good or service producers are willing and able to offer for sale at different prices during a given period."
        },

        {
            keywords: ["market equilibrium", "equilibrium"],
            answer:
                "Market equilibrium occurs where quantity demanded equals quantity supplied."
        },

        {
            keywords: ["shortage"],
            answer:
                "A shortage occurs when quantity demanded is greater than quantity supplied at a particular price."
        },

        {
            keywords: ["surplus"],
            answer:
                "A surplus occurs when quantity supplied is greater than quantity demanded at a particular price."
        },

        {
            keywords: ["elasticity", "price elasticity", "ped"],
            answer:
                "Price elasticity of demand measures how responsive quantity demanded is to a change in price.\n\nPED = Percentage change in quantity demanded ÷ Percentage change in price."
        },

        {
            keywords: ["income elasticity", "yed"],
            answer:
                "Income elasticity of demand measures how responsive demand is to changes in consumer income."
        },

        {
            keywords: ["cross elasticity"],
            answer:
                "Cross elasticity of demand measures how demand for one product responds to a change in the price of another product."
        },

        {
            keywords: ["substitutes"],
            answer:
                "Substitute goods can be used in place of one another. For example, tea and coffee can be substitutes."
        },

        {
            keywords: ["complements"],
            answer:
                "Complementary goods are goods normally used together. For example, cars and fuel."
        },

        {
            keywords: ["utility"],
            answer:
                "Utility is the satisfaction or benefit a consumer receives from consuming a good or service."
        },

        {
            keywords: ["marginal utility"],
            answer:
                "Marginal utility is the additional satisfaction obtained from consuming one additional unit of a good or service."
        },

        {
            keywords: ["production possibility frontier", "ppf"],
            answer:
                "A production possibility frontier shows the maximum combinations of two goods or services that an economy can produce using available resources and technology."
        },

        {
            keywords: ["market structure"],
            answer:
                "Market structure describes the characteristics of a market, including the number of firms, level of competition, barriers to entry and degree of product differentiation."
        },

        {
            keywords: ["perfect competition"],
            answer:
                "Perfect competition is a theoretical market structure with many buyers and sellers, homogeneous products, free entry and exit and firms that are price takers."
        },

        {
            keywords: ["monopoly"],
            answer:
                "A monopoly is a market structure where one firm is the main or sole supplier of a product or service, with significant barriers to entry."
        },

        {
            keywords: ["oligopoly"],
            answer:
                "An oligopoly is a market dominated by a small number of large firms. Firms are interdependent because the actions of one firm can affect others."
        },

        {
            keywords: ["monopolistic competition"],
            answer:
                "Monopolistic competition has many firms selling differentiated products. Firms compete through price, quality, branding and other methods."
        },

        {
            keywords: ["externalities", "externality"],
            answer:
                "An externality occurs when an economic activity creates costs or benefits for people who are not directly involved in the transaction.\n\nNegative externalities create external costs, while positive externalities create external benefits."
        },

        {
            keywords: ["public goods"],
            answer:
                "Public goods are generally non-rival and non-excludable. Examples can include street lighting and national defence."
        },

        {
            keywords: ["market failure"],
            answer:
                "Market failure occurs when the market mechanism does not allocate resources efficiently. Causes can include externalities, public goods, imperfect information and market power."
        },

        {
            keywords: ["inflation"],
            answer:
                "Inflation is a sustained increase in the general price level of goods and services over time."
        },

        {
            keywords: ["demand pull inflation"],
            answer:
                "Demand-pull inflation occurs when aggregate demand grows faster than the economy's ability to produce goods and services."
        },

        {
            keywords: ["cost push inflation"],
            answer:
                "Cost-push inflation occurs when increases in production costs put upward pressure on prices."
        },

        {
            keywords: ["unemployment"],
            answer:
                "Unemployment occurs when people who are willing and able to work and are actively seeking work cannot find employment."
        },

        {
            keywords: ["frictional unemployment"],
            answer:
                "Frictional unemployment occurs when people are temporarily unemployed while moving between jobs or entering the labour market."
        },

        {
            keywords: ["structural unemployment"],
            answer:
                "Structural unemployment occurs when workers' skills or locations do not match the requirements of available jobs."
        },

        {
            keywords: ["cyclical unemployment"],
            answer:
                "Cyclical unemployment is associated with downturns in economic activity and the business cycle."
        },

        {
            keywords: ["gdp", "gross domestic product"],
            answer:
                "GDP measures the monetary value of final goods and services produced within a country's borders during a particular period."
        },

        {
            keywords: ["real gdp", "nominal gdp"],
            answer:
                "Nominal GDP is measured using current prices. Real GDP adjusts for changes in prices, making it more useful when comparing production over time."
        },

        {
            keywords: ["economic growth"],
            answer:
                "Economic growth is an increase in the production of goods and services in an economy, commonly measured by changes in real GDP."
        },

        {
            keywords: ["economic development"],
            answer:
                "Economic development refers to improvements in people's economic and social well-being. It can involve income, health, education, living standards and opportunities."
        },

        {
            keywords: ["business cycle"],
            answer:
                "The business cycle describes fluctuations in economic activity over time. Common phases include expansion, peak, contraction and trough."
        },

        {
            keywords: ["expansion"],
            answer:
                "An expansion is a period when economic activity increases, often accompanied by higher production, income and employment."
        },

        {
            keywords: ["contraction"],
            answer:
                "A contraction is a period when economic activity decreases."
        },

        {
            keywords: ["fiscal policy"],
            answer:
                "Fiscal policy involves government decisions about taxation and government spending to influence economic activity."
        },

        {
            keywords: ["monetary policy"],
            answer:
                "Monetary policy involves actions by a central bank to influence money, credit and interest rates. In South Africa, monetary policy is conducted by the South African Reserve Bank."
        },

        {
            keywords: ["supply side policy"],
            answer:
                "Supply-side policies aim to increase an economy's productive capacity. Examples include improving education, infrastructure, skills and incentives for investment."
        },

        {
            keywords: ["aggregate demand"],
            answer:
                "Aggregate demand is the total demand for goods and services in an economy at different price levels."
        },

        {
            keywords: ["aggregate supply"],
            answer:
                "Aggregate supply represents the total quantity of goods and services firms are willing and able to produce at different price levels."
        },

        {
            keywords: ["balance of payments"],
            answer:
                "The balance of payments records economic transactions between residents of a country and the rest of the world."
        },

        {
            keywords: ["exchange rate"],
            answer:
                "An exchange rate is the price of one currency expressed in terms of another currency."
        },

        {
            keywords: ["currency depreciation"],
            answer:
                "Currency depreciation means a currency loses value relative to another currency under a floating exchange-rate system."
        },

        {
            keywords: ["currency appreciation"],
            answer:
                "Currency appreciation means a currency increases in value relative to another currency under a floating exchange-rate system."
        },

        {
            keywords: ["economic indicators"],
            answer:
                "Economic indicators are statistics used to understand economic conditions and changes.\n\nExamples include GDP growth, inflation, unemployment, interest rates and consumer spending."
        },

        {
            keywords: ["leading indicators"],
            answer:
                "Leading indicators tend to change before the wider economy changes and can provide information about possible future economic activity."
        },

        {
            keywords: ["lagging indicators"],
            answer:
                "Lagging indicators tend to change after the economy has already changed."
        },

        {
            keywords: ["coincident indicators"],
            answer:
                "Coincident indicators generally move at about the same time as overall economic activity."
        },

        {
            keywords: ["economics essay"],
            answer:
                "A strong Economics essay normally has an introduction, clear explanation of concepts, developed arguments, relevant examples, diagrams where appropriate, evaluation and a conclusion."
        }

    ];


    /* ==========================================
       MATHEMATICS KNOWLEDGE
    ========================================== */

    const mathematicsKnowledge = [

        {
            keywords: ["percentage"],
            answer:
                "A percentage represents a number out of 100.\n\nPercentage = Part ÷ Whole × 100."
        },

        {
            keywords: ["percentage increase"],
            answer:
                "Percentage increase = Increase ÷ Original value × 100."
        },

        {
            keywords: ["percentage decrease"],
            answer:
                "Percentage decrease = Decrease ÷ Original value × 100."
        },

        {
            keywords: ["linear equation"],
            answer:
                "A linear equation is an equation where the highest power of the variable is 1.\n\nExample:\n2x + 4 = 10\n2x = 6\nx = 3."
        },

        {
            keywords: ["quadratic equation"],
            answer:
                "A quadratic equation has the general form:\nax² + bx + c = 0.\n\nIt can be solved by factorisation, completing the square or the quadratic formula."
        },

        {
            keywords: ["factorise", "factorization", "factorisation"],
            answer:
                "Factorisation means writing an expression as a product of simpler factors.\n\nExample:\nx² + 5x + 6 = (x + 2)(x + 3)."
        },

        {
            keywords: ["indices", "exponents"],
            answer:
                "Indices or exponents show repeated multiplication.\n\nFor example:\nx³ = x × x × x.\n\nImportant laws include:\nxᵃ × xᵇ = xᵃ⁺ᵇ\nxᵃ ÷ xᵇ = xᵃ⁻ᵇ\n(xᵃ)ᵇ = xᵃᵇ."
        },

        {
            keywords: ["simultaneous equations"],
            answer:
                "Simultaneous equations are equations solved together to find values that satisfy all the equations.\n\nCommon methods include substitution and elimination."
        },

        {
            keywords: ["gradient", "slope"],
            answer:
                "The gradient measures the steepness of a line.\n\nGradient = Change in y ÷ Change in x."
        },

        {
            keywords: ["straight line equation"],
            answer:
                "A common straight-line equation is:\ny = mx + c.\n\nm is the gradient and c is the y-intercept."
        },

        {
            keywords: ["distance formula"],
            answer:
                "The distance between two points (x₁,y₁) and (x₂,y₂) is:\n\n√[(x₂-x₁)² + (y₂-y₁)²]."
        },

        {
            keywords: ["midpoint"],
            answer:
                "The midpoint between (x₁,y₁) and (x₂,y₂) is:\n\n((x₁+x₂)/2, (y₁+y₂)/2)."
        },

        {
            keywords: ["mean", "average"],
            answer:
                "The mean is calculated by adding all values and dividing by the number of values.\n\nMean = Sum of values ÷ Number of values."
        },

        {
            keywords: ["median"],
            answer:
                "The median is the middle value after the data has been arranged in order.\n\nIf there are two middle values, add them and divide by 2."
        },

        {
            keywords: ["mode"],
            answer:
                "The mode is the value that occurs most frequently in a data set."
        },

        {
            keywords: ["probability"],
            answer:
                "Probability measures how likely an event is to occur.\n\nProbability = Number of favourable outcomes ÷ Total number of possible outcomes."
        },

        {
            keywords: ["complement probability"],
            answer:
                "The probability of an event not happening is:\n\nP(not A) = 1 - P(A)."
        },

        {
            keywords: ["simple interest"],
            answer:
                "Simple interest is calculated using:\n\nI = P × r × t.\n\nP is principal, r is the interest rate per period and t is time."
        },

        {
            keywords: ["compound interest"],
            answer:
                "Compound interest is calculated using:\n\nA = P(1 + r)ⁿ.\n\nP is the principal, r is the interest rate per period and n is the number of periods."
        },

        {
            keywords: ["compound interest monthly"],
            answer:
                "When interest is compounded monthly, convert the annual rate to a monthly rate and multiply the number of years by 12.\n\nA = P(1 + r/12)^(12t)."
        },

        {
            keywords: ["arithmetic sequence"],
            answer:
                "An arithmetic sequence has a constant difference between consecutive terms.\n\nThe nth term is:\nTₙ = a + (n - 1)d."
        },

        {
            keywords: ["geometric sequence"],
            answer:
                "A geometric sequence has a constant ratio between consecutive terms.\n\nThe nth term is:\nTₙ = arⁿ⁻¹."
        },

        {
            keywords: ["trigonometry", "sine", "cosine", "tangent"],
            answer:
                "The three basic trigonometric ratios are:\n\nsin θ = Opposite ÷ Hypotenuse\ncos θ = Adjacent ÷ Hypotenuse\ntan θ = Opposite ÷ Adjacent.\n\nA useful memory aid is SOH-CAH-TOA."
        },

        {
            keywords: ["pythagoras", "pythagorean theorem"],
            answer:
                "Pythagoras' theorem applies to right-angled triangles:\n\na² + b² = c².\n\nc is the hypotenuse."
        },

        {
            keywords: ["area circle"],
            answer:
                "The area of a circle is:\n\nA = πr²."
        },

        {
            keywords: ["circumference"],
            answer:
                "The circumference of a circle is:\n\nC = 2πr."
        },

        {
            keywords: ["area triangle"],
            answer:
                "The area of a triangle is:\n\nA = ½ × base × height."
        },

        {
            keywords: ["area rectangle"],
            answer:
                "The area of a rectangle is:\n\nA = length × width."
        },

        {
            keywords: ["volume cylinder"],
            answer:
                "The volume of a cylinder is:\n\nV = πr²h."
        },

        {
            keywords: ["derivative", "differentiation", "calculus"],
            answer:
                "Differentiation measures the rate at which one quantity changes with respect to another.\n\nFor example:\nIf y = x²,\nthen dy/dx = 2x."
        },

        {
            keywords: ["integration", "integral"],
            answer:
                "Integration is closely related to finding accumulated quantities and areas under curves.\n\nFor example:\n∫x² dx = x³/3 + C."
        },

        {
            keywords: ["functions"],
            answer:
                "A function is a relationship where each input has exactly one output.\n\nIt can be written as:\nf(x) = expression."
        },

        {
            keywords: ["algebra"],
            answer:
                "Algebra uses letters and symbols to represent unknown values and relationships.\n\nIt includes equations, expressions, factorisation, indices, inequalities and functions."
        }

    ];


    /* ==========================================
       SUBJECT INFORMATION
    ========================================== */

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
            "functions",
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


    /* ==========================================
       NORMALISE TEXT
    ========================================== */

    function normalizeText(value) {

        return value
            .toLowerCase()
            .replace(/[’]/g, "'")
            .replace(/\s+/g, " ")
            .trim();

    }


    /* ==========================================
       SUBJECT DETECTION
    ========================================== */

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

                    if (word.length > 6) {
                        scores[subject] += 2;
                    } else {
                        scores[subject] += 1;
                    }

                }

            });

        });

        const sorted = Object.entries(scores)
            .sort((a, b) => b[1] - a[1]);

        if (!sorted.length || sorted[0][1] === 0) {
            return null;
        }

        return sorted[0][0];

    }


    /* ==========================================
       KNOWLEDGE SEARCH
    ========================================== */

    function searchKnowledge(question, database) {

        const text = normalizeText(question);

        let bestMatch = null;
        let bestScore = 0;

        database.forEach(item => {

            let score = 0;

            item.keywords.forEach(keyword => {

                if (text.includes(keyword.toLowerCase())) {

                    score += keyword.length;

                }

            });

            if (score > bestScore) {
                bestScore = score;
                bestMatch = item;
            }

        });

        return bestMatch;

    }


    /* ==========================================
       TOPIC TITLE
    ========================================== */

    function makeTopicTitle(keyword) {

        let title = keyword
            .replace(/\b\w/g, char => char.toUpperCase());

        title = title
            .replace(/^Ias /i, "IAS ")
            .replace(/^Ifrs /i, "IFRS ")
            .replace(/\bGdp\b/g, "GDP")
            .replace(/\bVat\b/g, "VAT")
            .replace(/\bPpe\b/g, "PPE")
            .replace(/\bPed\b/g, "PED")
            .replace(/\bYed\b/g, "YED")
            .replace(/\bRoe\b/g, "ROE")
            .replace(/\bRoa\b/g, "ROA")
            .replace(/\bEps\b/g, "EPS");

        return title;

    }


    /* ==========================================
       ALL KNOWLEDGE
    ========================================== */

    function formatAllKnowledge(database, subjectName) {

        let result =
            `Here is the ${subjectName} information currently built into Mastercommerce:\n\n`;

        database.forEach((item, index) => {

            const title =
                makeTopicTitle(item.keywords[0]);

            result +=
                `${index + 1}. ${title}\n${item.answer}\n\n`;

        });

        return result.trim();

    }


    /* ==========================================
       TOPIC LIST
    ========================================== */

    function getTopicList(database, subjectName) {

        const topics = [];

        database.forEach(item => {

            const topic =
                makeTopicTitle(item.keywords[0]);

            if (!topics.includes(topic)) {
                topics.push(topic);
            }

        });

        return (
            `I can answer ${subjectName} questions about:\n\n` +
            topics.map(topic => `• ${topic}`).join("\n") +
            `\n\nYou can ask me to explain a topic, define it, give an example, compare concepts or help you calculate it.`
        );

    }


    /* ==========================================
       ALL INFORMATION REQUEST
    ========================================== */

    function isAllInformationRequest(text) {

        const allWords = [
            "all information",
            "everything",
            "all the information",
            "all information you have",
            "everything you know",
            "all you know",
            "all knowledge",
            "all the knowledge",
            "show me everything",
            "give me everything",
            "tell me everything"
        ];

        return allWords.some(
            phrase => text.includes(phrase)
        );

    }


    /* ==========================================
       TOPIC LIST REQUEST
    ========================================== */

    function isTopicListRequest(text) {

        return (
            text.includes("what type of questions") ||
            text.includes("what types of questions") ||
            text.includes("what questions can you answer") ||
            text.includes("what questions do you have") ||
            text.includes("what can i ask") ||
            text.includes("what topics do you have") ||
            text.includes("what topics can you answer") ||
            text.includes("what do you know about")
        );

    }


    /* ==========================================
       SIMPLE CALCULATOR
    ========================================== */

    function simpleCalculator(question) {

        const text = normalizeText(question);

        const calculationWords = [
            "calculate",
            "what is",
            "solve",
            "equals"
        ];

        const hasCalculationWord =
            calculationWords.some(
                word => text.includes(word)
            );

        if (!hasCalculationWord) {
            return null;
        }

        const expression = text
            .replace(/calculate/g, "")
            .replace(/what is/g, "")
            .replace(/solve/g, "")
            .replace(/equals/g, "")
            .replace(/x/g, "*")
            .replace(/÷/g, "/")
            .replace(/[^0-9+\-*/().%\s]/g, "")
            .trim();

        if (!expression) {
            return null;
        }

        if (!/[+\-*/%]/.test(expression)) {
            return null;
        }

        try {

            if (!/^[0-9+\-*/().%\s]+$/.test(expression)) {
                return null;
            }

            const result = Function(
                `"use strict"; return (${expression})`
            )();

            if (
                typeof result !== "number" ||
                !Number.isFinite(result)
            ) {
                return null;
            }

            return `The answer is ${result}.`;

        } catch {

            return null;

        }

    }


    /* ==========================================
       GENERAL CONVERSATION
    ========================================== */

    function generalAnswer(question) {

        const text = normalizeText(question);


        /* Greeting */

        const greetings = [
            "hi",
            "hello",
            "hey",
            "hi mastercommerce",
            "hello mastercommerce",
            "hey mastercommerce"
        ];

        if (greetings.includes(text)) {

            lastConversationState =
                "greeting_waiting";

            return "Hi, how are you?";

        }


        /* Good / fine response */

        const positiveReplies = [
            "good",
            "fine",
            "great",
            "okay",
            "ok",
            "i'm good",
            "im good",
            "i am good",
            "i'm fine",
            "im fine",
            "i am fine",
            "i'm great",
            "im great",
            "i am great",
            "doing good",
            "doing fine",
            "i'm doing good",
            "im doing good",
            "i am doing good",
            "i'm doing fine",
            "im doing fine",
            "i am doing fine"
        ];

        if (
            lastConversationState === "greeting_waiting" &&
            positiveReplies.includes(text)
        ) {

            lastConversationState = "normal";

            return "Thanks. How can I help you today?";

        }


        /* How are you */

        if (
            text === "how are you" ||
            text === "how are you mastercommerce"
        ) {

            lastConversationState = "normal";

            return "I'm doing well, thanks. What would you like to learn today?";

        }


        /* Good morning / afternoon / evening */

        if (
            text === "good morning" ||
            text === "good afternoon" ||
            text === "good evening"
        ) {

            lastConversationState = "normal";

            return `Good ${text.replace(
                "good ",
                ""
            )}. What would you like to learn today?`;

        }


        /* Thanks */

        if (
            text === "thanks" ||
            text === "thank you" ||
            text === "thanks mastercommerce" ||
            text === "thank you mastercommerce"
        ) {

            return "You're welcome. What would you like to learn next?";

        }


        /* Goodbye */

        if (
            text === "bye" ||
            text === "goodbye" ||
            text === "see you"
        ) {

            return "Goodbye. Come back whenever you want to study.";

        }


        /* Who are you */

        if (
            text.includes("who are you") ||
            text.includes("what are you")
        ) {

            return `I'm Mastercommerce, an educational learning assistant for Accounting, Economics and Mathematics.

I can help with definitions, explanations, calculations, examples, essay structures and revision.`;

        }


        /* Developer */

        if (
            text.includes("who made you") ||
            text.includes("who created you") ||
            text.includes("developer") ||
            text.includes("who built you")
        ) {

            return `Mastercommerce was developed by ${developerInformation.developer}.

Founder:
${developerInformation.founder}

Location:
${developerInformation.location}

Education:
${developerInformation.education}`;

        }


        /* What can you do */

        if (
            text.includes("what can you do") ||
            text.includes("what do you teach") ||
            text === "help me"
        ) {

            return `I can help you with:

Accounting
• Financial accounting
• Management accounting
• Auditing
• Tax and VAT
• IFRS and IAS
• Financial statements
• Ratios
• Costing
• Calculations

Economics
• Microeconomics
• Macroeconomics
• Markets
• Elasticity
• Economic policies
• Inflation
• Unemployment
• GDP
• Essays
• Calculations

Mathematics
• Algebra
• Equations
• Functions
• Statistics
• Probability
• Financial mathematics
• Geometry
• Trigonometry
• Calculus
• Problem solving`;

        }


        /* Subjects */

        if (
            text.includes("what subjects") ||
            text.includes("which subjects") ||
            text.includes("subjects do you cover")
        ) {

            return `I currently cover three main subjects:

Accounting
Economics
Mathematics

You can ask me questions about any of these subjects.`;

        }


        /* I don't understand */

        if (
            text === "i don't understand" ||
            text === "i dont understand" ||
            text === "i do not understand"
        ) {

            return "No problem. Send me the question again and I will explain it in simple steps.";

        }

        return null;

    }


    /* ==========================================
       GENERATE ANSWER
    ========================================== */

    function generateAnswer(question) {

        const text =
            normalizeText(question);


        /* General conversation */

        const general =
            generalAnswer(question);

        if (general) {
            return general;
        }


        /* Determine subject */

        const subject =
            detectSubject(question);


        /* ==========================================
           ALL INFORMATION REQUEST
        ========================================== */

        if (isAllInformationRequest(text)) {

            if (subject === "accounting") {

                return formatAllKnowledge(
                    accountingKnowledge,
                    "Accounting"
                );

            }

            if (subject === "economics") {

                return formatAllKnowledge(
                    economicsKnowledge,
                    "Economics"
                );

            }

            if (subject === "mathematics") {

                return formatAllKnowledge(
                    mathematicsKnowledge,
                    "Mathematics"
                );

            }

            return `I can give you the complete built-in information for Accounting, Economics or Mathematics.

Please tell me which subject you want.`;

        }


        /* ==========================================
           TOPIC LIST REQUEST
        ========================================== */

        if (isTopicListRequest(text)) {

            if (subject === "accounting") {

                return getTopicList(
                    accountingKnowledge,
                    "Accounting"
                );

            }

            if (subject === "economics") {

                return getTopicList(
                    economicsKnowledge,
                    "Economics"
                );

            }

            if (subject === "mathematics") {

                return getTopicList(
                    mathematicsKnowledge,
                    "Mathematics"
                );

            }

            return `I can answer questions in:

Accounting
Economics
Mathematics

Tell me which subject you want to see the available questions for.`;

        }


        /* ==========================================
           CALCULATOR
        ========================================== */

        const calculation =
            simpleCalculator(question);

        if (calculation) {
            return calculation;
        }


        /* ==========================================
           NO SUBJECT
        ========================================== */

        if (!subject) {

            return `I'm not able to find that in my current knowledge.

Can you please repeat your question in an understandable way?`;

        }


        /* ==========================================
           SELECT DATABASE
        ========================================== */

        let database;

        if (subject === "accounting") {
            database = accountingKnowledge;
        }

        if (subject === "economics") {
            database = economicsKnowledge;
        }

        if (subject === "mathematics") {
            database = mathematicsKnowledge;
        }


        /* ==========================================
           SEARCH BUILT-IN KNOWLEDGE
        ========================================== */

        const match =
            searchKnowledge(
                question,
                database
            );

        if (match) {

            return match.answer;

        }


        /* ==========================================
           SEARCH EXTERNAL ECONOMICS DOCUMENT
        ========================================== */

        if (subject === "economics") {

            const documentAnswer =
                searchDocumentKnowledge(question);

            if (documentAnswer) {

                return documentAnswer;

            }

        }


        /* ==========================================
           NOTHING FOUND
        ========================================== */

        return `I'm not able to find that exact topic in my current knowledge.

Can you please repeat your question in an understandable way?`;

    }


    /* ==========================================
       CREATE MESSAGE
    ========================================== */

    function createMessage(text, type) {

        const message =
            document.createElement("div");

        message.className =
            `message ${type}`;

        const content =
            document.createElement("div");

        content.className =
            "message-content";

        content.textContent =
            text;

        message.appendChild(content);

        chatArea.appendChild(message);

        chatArea.scrollTop =
            chatArea.scrollHeight;

        return message;

    }


    /* ==========================================
       THINKING
    ========================================== */

    function createThinkingMessage() {

        return createMessage(
            "Thinking...",
            "assistant thinking"
        );

    }


    /* ==========================================
       SEND QUESTION
    ========================================== */

    function sendQuestion() {

        const question =
            questionInput.value.trim();

        if (!question) return;

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


    /* ==========================================
       INPUT AUTO HEIGHT
    ========================================== */

    questionInput.addEventListener(
        "input",
        () => {

            questionInput.style.height =
                "auto";

            questionInput.style.height =
                Math.min(
                    questionInput.scrollHeight,
                    130
                ) + "px";

        }
    );


    /* ==========================================
       SEND BUTTON
    ========================================== */

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


    /* ==========================================
       SIDEBAR
    ========================================== */

    function openSidebar() {

        sidebar.classList.add("open");

        sidebarOverlay.classList.add("open");

    }

    function closeSideMenu() {

        sidebar.classList.remove("open");

        sidebarOverlay.classList.remove("open");

    }

    menuButton.addEventListener(
        "click",
        openSidebar
    );

    closeSidebar.addEventListener(
        "click",
        closeSideMenu
    );

    sidebarOverlay.addEventListener(
        "click",
        closeSideMenu
    );


    /* ==========================================
       HOME
    ========================================== */

    homeButton.addEventListener(
        "click",
        () => {

            closeSideMenu();

            aboutModal.classList.remove(
                "open"
            );

            settingsModal.classList.remove(
                "open"
            );

            const messages =
                chatArea.querySelectorAll(
                    ".message"
                );

            messages.forEach(
                message => message.remove()
            );

            welcomeScreen.style.display =
                "flex";

            questionInput.value = "";

            questionInput.focus();

            lastConversationState =
                "normal";

        }
    );


    /* ==========================================
       NEW CHAT
    ========================================== */

    newChatButton.addEventListener(
        "click",
        () => {

            const messages =
                chatArea.querySelectorAll(
                    ".message"
                );

            messages.forEach(
                message => message.remove()
            );

            welcomeScreen.style.display =
                "flex";

            questionInput.value = "";

            questionInput.style.height =
                "42px";

            lastConversationState =
                "normal";

            closeSideMenu();

            questionInput.focus();

        }
    );


    /* ==========================================
       CLEAR CHAT
    ========================================== */

    clearChatButton.addEventListener(
        "click",
        () => {

            const messages =
                chatArea.querySelectorAll(
                    ".message"
                );

            messages.forEach(
                message => message.remove()
            );

            welcomeScreen.style.display =
                "flex";

            questionInput.value = "";

            questionInput.style.height =
                "42px";

            lastConversationState =
                "normal";

            closeSideMenu();

        }
    );


    /* ==========================================
       PLUS BUTTON
    ========================================== */

    plusButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            const isOpen =
                plusMenu.classList.toggle(
                    "open"
                );

            plusButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            plusMenu.setAttribute(
                "aria-hidden",
                isOpen ? "false" : "true"
            );

        }
    );


    /* ==========================================
       PLUS OPTIONS
    ========================================== */

    document
        .querySelectorAll(".plus-option")
        .forEach(option => {

            option.addEventListener(
                "click",
                () => {

                    const feature =
                        option.dataset.feature;

                    plusMenu.classList.remove(
                        "open"
                    );

                    plusButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    plusMenu.setAttribute(
                        "aria-hidden",
                        "true"
                    );

                    featureToast.textContent =
                        `${feature} is still under development.`;

                    featureToast.classList.add(
                        "show"
                    );

                    setTimeout(() => {

                        featureToast.classList.remove(
                            "show"
                        );

                    }, 2200);

                }
            );

        });


    /* ==========================================
       CLOSE PLUS MENU OUTSIDE
    ========================================== */

    document.addEventListener(
        "click",
        event => {

            if (
                !plusMenu.contains(
                    event.target
                ) &&
                !plusButton.contains(
                    event.target
                )
            ) {

                plusMenu.classList.remove(
                    "open"
                );

                plusButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                plusMenu.setAttribute(
                    "aria-hidden",
                    "true"
                );

            }

        }
    );


    /* ==========================================
       ABOUT MODAL
    ========================================== */

    aboutButton.addEventListener(
        "click",
        () => {

            closeSideMenu();

            aboutModal.classList.add(
                "open"
            );

        }
    );


    /* ==========================================
       SETTINGS MODAL
    ========================================== */

    settingsButton.addEventListener(
        "click",
        () => {

            closeSideMenu();

            settingsModal.classList.add(
                "open"
            );

        }
    );


    /* ==========================================
       CLOSE MODALS
    ========================================== */

    document
        .querySelectorAll("[data-close]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const modalId =
                        button.dataset.close;

                    document
                        .getElementById(modalId)
                        .classList.remove(
                            "open"
                        );

                }
            );

        });


    document
        .querySelectorAll(".modal")
        .forEach(modal => {

            modal.addEventListener(
                "click",
                event => {

                    if (
                        event.target === modal
                    ) {

                        modal.classList.remove(
                            "open"
                        );

                    }

                }
            );

        });


    /* ==========================================
       ESC KEY
    ========================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !== "Escape"
            ) return;

            closeSideMenu();

            aboutModal.classList.remove(
                "open"
            );

            settingsModal.classList.remove(
                "open"
            );

            plusMenu.classList.remove(
                "open"
            );

        }
    );


    /* ==========================================
       THEME
    ========================================== */

    document
        .querySelectorAll("[data-theme]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const theme =
                        button.dataset.theme;

                    if (
                        theme === "dark"
                    ) {

                        document.body.classList.add(
                            "dark"
                        );

                    } else {

                        document.body.classList.remove(
                            "dark"
                        );

                    }

                    localStorage.setItem(
                        "mastercommerce-theme",
                        theme
                    );

                }
            );

        });


    /* ==========================================
       BACKGROUND
    ========================================== */

    document
        .querySelectorAll("[data-background]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const background =
                        button.dataset.background;

                    document.body.classList.remove(
                        "background-gray",
                        "background-warm",
                        "background-blue",
                        "background-green",
                        "background-lavender"
                    );

                    if (
                        background !== "white"
                    ) {

                        document.body.classList.add(
                            `background-${background}`
                        );

                    }

                    localStorage.setItem(
                        "mastercommerce-background",
                        background
                    );

                }
            );

        });


    /* ==========================================
       FONT
    ========================================== */

    document
        .querySelectorAll("[data-font]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const font =
                        button.dataset.font;

                    document.body.classList.remove(
                        "font-small",
                        "font-medium",
                        "font-large"
                    );

                    document.body.classList.add(
                        `font-${font}`
                    );

                    localStorage.setItem(
                        "mastercommerce-font",
                        font
                    );

                }
            );

        });


    /* ==========================================
       REDUCED MOTION
    ========================================== */

    motionButton.addEventListener(
        "click",
        () => {

            const enabled =
                document.body.classList.toggle(
                    "reduced-motion"
                );

            localStorage.setItem(
                "mastercommerce-motion",
                enabled
                    ? "true"
                    : "false"
            );

            motionButton.textContent =
                enabled
                    ? "Reduced motion: On"
                    : "Reduced motion";

        }
    );


    /* ==========================================
       RESET SETTINGS
    ========================================== */

    resetSettingsButton.addEventListener(
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

            document.body.classList.remove(
                "dark",
                "background-gray",
                "background-warm",
                "background-blue",
                "background-green",
                "background-lavender",
                "font-small",
                "font-large",
                "font-medium",
                "reduced-motion"
            );

            motionButton.textContent =
                "Reduced motion";

        }
    );


    /* ==========================================
       LOAD SETTINGS
    ========================================== */

    function loadSettings() {

        const theme =
            localStorage.getItem(
                "mastercommerce-theme"
            );

        if (theme === "dark") {

            document.body.classList.add(
                "dark"
            );

        }


        const font =
            localStorage.getItem(
                "mastercommerce-font"
            );

        if (
            font === "small" ||
            font === "large" ||
            font === "medium"
        ) {

            document.body.classList.add(
                `font-${font}`
            );

        }


        const background =
            localStorage.getItem(
                "mastercommerce-background"
            );

        if (
            background &&
            background !== "white"
        ) {

            document.body.classList.add(
                `background-${background}`
            );

        }


        const motion =
            localStorage.getItem(
                "mastercommerce-motion"
            );

        if (motion === "true") {

            document.body.classList.add(
                "reduced-motion"
            );

            motionButton.textContent =
                "Reduced motion: On";

        }

    }


    /* ==========================================
       INITIALISE
    ========================================== */

    loadSettings();

    questionInput.focus();

});
