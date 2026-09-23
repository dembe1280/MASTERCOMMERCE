document.addEventListener("DOMContentLoaded", () => {

    if (window.mastercommerceLoaded) return;
    window.mastercommerceLoaded = true;

    /* =========================================================
       MASTERCOMMERCE
       Educational AI Knowledge Engine
       Accounting | Economics | Mathematics
       Frontend only — no API/backend required
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

    const chatArea = document.getElementById("chatArea");
    const welcomeScreen = document.getElementById("welcomeScreen");

    const questionInput = document.getElementById("questionInput");
    const sendButton = document.getElementById("sendButton");

    const plusButton = document.getElementById("plusButton");
    const plusMenu = document.getElementById("plusMenu");
    const featureToast = document.getElementById("featureToast");

    const aboutModal = document.getElementById("aboutModal");
    const settingsModal = document.getElementById("settingsModal");

    const motionButton = document.getElementById("motionButton");
    const resetSettingsButton =
        document.getElementById("resetSettingsButton");


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
       CONVERSATION STATE
    ========================================================= */

    let lastConversationState = {
        subject: null,
        topic: null,
        question: null
    };


    /* =========================================================
       KNOWLEDGE HELPER
    ========================================================= */

    function knowledge(
        subject,
        level,
        topic,
        keywords,
        information,
        formulas = [],
        examples = [],
        rules = [],
        relatedKeywords = []
    ) {
        return {
            subject,
            level,
            topic,
            keywords,
            information,
            formulas,
            examples,
            rules,
            relatedKeywords
        };
    }


    /* =========================================================
       ACCOUNTING KNOWLEDGE
    ========================================================= */

    const accountingKnowledge = [

        /* =========================
           ACCOUNTING BASICS
        ========================= */

        knowledge(
            "accounting",
            "grade12",
            "Accounting Equation",
            [
                "accounting equation",
                "assets",
                "liabilities",
                "equity",
                "capital",
                "owner equity"
            ],
            `The accounting equation explains the relationship between what a business owns, what it owes, and the owner's interest.

Assets = Equity + Liabilities.

Assets are resources controlled by the business.

Liabilities are amounts owed to outsiders.

Equity is the owner's residual interest after liabilities are deducted from assets.`,
            [
                "Assets = Equity + Liabilities",
                "Equity = Assets - Liabilities"
            ],
            [
                "If assets are R100 000 and liabilities are R40 000, equity is R60 000."
            ],
            [
                "Every transaction must keep the accounting equation balanced."
            ]
        ),

        knowledge(
            "accounting",
            "grade12",
            "Assets",
            [
                "asset",
                "assets",
                "current asset",
                "non current asset",
                "fixed asset",
                "cash",
                "inventory",
                "debtors",
                "receivables"
            ],
            `An asset is a resource controlled by a business because of past events from which future economic benefits are expected.

Current assets normally include cash, bank, inventory, trade receivables and short-term investments.

Non-current assets normally include property, plant and equipment, vehicles, equipment and long-term investments.`,
            [],
            [
                "A vehicle used by a business is normally a non-current asset.",
                "Inventory held for sale is normally a current asset."
            ]
        ),

        knowledge(
            "accounting",
            "grade12",
            "Liabilities",
            [
                "liability",
                "liabilities",
                "current liability",
                "non current liability",
                "creditors",
                "payables",
                "loan",
                "bank overdraft"
            ],
            `A liability is a present obligation arising from past events that is expected to result in an outflow of economic resources.

Current liabilities normally include trade payables, short-term loans, accrued expenses and bank overdrafts.

Non-current liabilities normally include long-term loans and long-term lease obligations.`
        ),

        knowledge(
            "accounting",
            "grade12",
            "Equity Capital Drawings",
            [
                "equity",
                "capital",
                "drawings",
                "profit",
                "loss",
                "owner equity"
            ],
            `For a sole trader, equity is affected by capital introduced, profit or loss and drawings.

Capital increases equity.

Profit increases equity.

Loss decreases equity.

Drawings decrease equity.`,
            [
                "Closing Equity = Opening Capital + Profit - Drawings",
                "Closing Equity = Opening Capital - Loss - Drawings"
            ]
        ),

        knowledge(
            "accounting",
            "grade12",
            "Debit and Credit Rules",
            [
                "debit",
                "credit",
                "debit credit",
                "accounting rules",
                "double entry"
            ],
            `Accounting uses the double-entry system. Every transaction has at least one debit and one credit.

Assets normally have debit balances. Increases in assets are debits and decreases are credits.

Expenses normally have debit balances. Increases in expenses are debits.

Drawings normally have a debit balance.

Liabilities normally have credit balances. Increases in liabilities are credits.

Capital and income normally have credit balances. Increases are credits.`,
            [],
            [],
            [
                "Asset increase = Debit",
                "Asset decrease = Credit",
                "Expense increase = Debit",
                "Income increase = Credit",
                "Liability increase = Credit",
                "Capital increase = Credit",
                "Drawings increase = Debit"
            ]
        ),

        knowledge(
            "accounting",
            "grade12",
            "Gross Profit and Net Profit",
            [
                "gross profit",
                "net profit",
                "gross loss",
                "net loss",
                "gross profit formula",
                "net profit formula"
            ],
            `Gross profit is the difference between sales and cost of sales.

Net profit is calculated after adding other income and subtracting operating expenses.

A gross loss occurs when cost of sales exceeds sales.

A net loss occurs when total expenses exceed total income.`,
            [
                "Gross Profit = Sales - Cost of Sales",
                "Net Profit = Gross Profit + Other Income - Expenses"
            ],
            [
                "Sales R500 000 and cost of sales R300 000 gives gross profit of R200 000."
            ]
        ),

        knowledge(
            "accounting",
            "grade12",
            "Cost of Sales",
            [
                "cost of sales",
                "cos",
                "opening stock",
                "closing stock",
                "purchases",
                "carriage on purchases"
            ],
            `Cost of sales represents the cost of inventory sold during the accounting period.`,
            [
                "Cost of Sales = Opening Inventory + Net Purchases - Closing Inventory",
                "Net Purchases = Purchases + Carriage on Purchases - Returns Outwards"
            ],
            [
                "Opening inventory R100 000 + purchases R400 000 - closing inventory R120 000 = cost of sales R380 000."
            ]
        ),

        knowledge(
            "accounting",
            "grade12",
            "Financial Statements",
            [
                "financial statements",
                "income statement",
                "statement of financial position",
                "balance sheet",
                "cash flow",
                "notes"
            ],
            `Financial statements communicate the financial performance and financial position of an entity.

An income statement or statement of profit or loss reports income and expenses.

A statement of financial position reports assets, equity and liabilities.

Cash flow information reports movements in cash and cash equivalents.

Notes provide additional information needed to understand the financial statements.`
        ),

        /* =========================
           ACCOUNTING RATIOS
        ========================= */

        knowledge(
            "accounting",
            "grade12",
            "Profitability Ratios",
            [
                "profitability",
                "gross profit percentage",
                "net profit percentage",
                "mark up",
                "roe",
                "return on equity",
                "roa",
                "return on assets"
            ],
            `Profitability ratios measure the ability of a business to generate profit.

Gross profit percentage measures gross profit relative to sales.

Net profit percentage measures net profit relative to sales.

Mark-up measures gross profit relative to cost of sales.

Return on equity measures profit generated relative to average equity.

Return on assets measures profit generated relative to average assets.`,
            [
                "GP% = Gross Profit / Sales × 100",
                "NP% = Net Profit / Sales × 100",
                "Mark-up% = Gross Profit / Cost of Sales × 100",
                "ROE = Net Profit / Average Equity × 100",
                "ROA = Net Profit / Average Assets × 100"
            ]
        ),

        knowledge(
            "accounting",
            "grade12",
            "Liquidity Ratios",
            [
                "liquidity",
                "current ratio",
                "acid test",
                "quick ratio",
                "working capital"
            ],
            `Liquidity measures the ability of a business to meet short-term obligations.

The current ratio compares current assets with current liabilities.

The acid-test ratio excludes inventory because inventory may take time to convert into cash.

Working capital is the excess of current assets over current liabilities.`,
            [
                "Current Ratio = Current Assets : Current Liabilities",
                "Acid Test Ratio = (Current Assets - Inventory) : Current Liabilities",
                "Working Capital = Current Assets - Current Liabilities"
            ]
        ),

        knowledge(
            "accounting",
            "grade12",
            "Solvency and Debt Ratios",
            [
                "solvency",
                "debt ratio",
                "debt to equity",
                "solvent",
                "liabilities assets"
            ],
            `Solvency measures the long-term financial stability of a business.

A high level of debt can increase financial risk because the business must meet interest and repayment obligations.`,
            [
                "Solvency Ratio = Assets : Liabilities",
                "Debt Ratio = Total Liabilities / Total Assets × 100",
                "Debt-to-Equity = Total Liabilities / Equity"
            ]
        ),

        knowledge(
            "accounting",
            "grade12",
            "Inventory Ratios",
            [
                "inventory turnover",
                "inventory holding period",
                "stock turnover",
                "stock holding",
                "inventory ratio"
            ],
            `Inventory ratios measure how efficiently inventory is managed.

Inventory turnover measures how many times average inventory is sold during the period.

Inventory holding period measures the average number of days inventory is held.`,
            [
                "Inventory Turnover = Cost of Sales / Average Inventory",
                "Inventory Holding Period = Average Inventory / Cost of Sales × 365",
                "Average Inventory = (Opening Inventory + Closing Inventory) / 2"
            ]
        ),

        knowledge(
            "accounting",
            "grade12",
            "Debtors and Creditors Ratios",
            [
                "debtors collection",
                "receivables collection",
                "creditors payment",
                "payables payment",
                "collection period",
                "payment period"
            ],
            `Debtors collection period measures the average number of days customers take to pay.

Creditors payment period measures the average number of days the business takes to pay suppliers.`,
            [
                "Debtors Collection Period = Average Trade Receivables / Credit Sales × 365",
                "Creditors Payment Period = Average Trade Payables / Credit Purchases × 365"
            ]
        ),

        /* =========================
           VAT
        ========================= */

        knowledge(
            "accounting",
            "grade12",
            "VAT",
            [
                "vat",
                "value added tax",
                "input vat",
                "output vat",
                "vat exclusive",
                "vat inclusive",
                "15 percent vat"
            ],
            `VAT is a consumption tax charged on taxable supplies.

In South Africa the standard VAT rate is 15%.

Output VAT is VAT charged by a registered vendor on taxable sales.

Input VAT is VAT paid by the business on qualifying purchases.

VAT payable is generally output VAT less allowable input VAT.`,
            [
                "VAT Inclusive = VAT Exclusive × 1.15",
                "VAT Amount from Inclusive Price = Inclusive Price × 15 / 115",
                "VAT Exclusive = VAT Inclusive / 1.15",
                "VAT Payable = Output VAT - Input VAT"
            ]
        ),

        /* =========================
           BANK RECONCILIATION
        ========================= */

        knowledge(
            "accounting",
            "grade12",
            "Bank Reconciliation",
            [
                "bank reconciliation",
                "bank statement",
                "cash book",
                "outstanding cheque",
                "deposit",
                "bank charges"
            ],
            `A bank reconciliation compares the business cash book with the bank statement.

Differences can arise because of outstanding cheques, deposits not yet reflected, bank charges, direct deposits, debit orders, errors and other timing differences.

Items appearing on the bank statement but not yet recorded in the cash book normally require adjustment in the cash book first.`
        ),

        /* =========================
           CASH BUDGET
        ========================= */

        knowledge(
            "accounting",
            "grade12",
            "Cash Budget",
            [
                "cash budget",
                "cash receipts",
                "cash payments",
                "opening bank",
                "closing bank",
                "budgeted cash"
            ],
            `A cash budget estimates expected cash receipts and cash payments for a future period.

It helps a business identify expected cash shortages and surpluses.

Closing cash is calculated by adding net cash flow to opening cash.`,
            [
                "Closing Cash = Opening Cash + Cash Receipts - Cash Payments"
            ]
        ),

        /* =========================
           DEPRECIATION
        ========================= */

        knowledge(
            "accounting",
            "grade12",
            "Depreciation",
            [
                "depreciation",
                "straight line",
                "carrying amount",
                "residual value",
                "useful life",
                "diminishing balance"
            ],
            `Depreciation is the systematic allocation of the depreciable amount of an asset over its useful life.

The depreciable amount is cost less residual value.

Straight-line depreciation normally allocates the same amount each period.

Diminishing-balance depreciation applies a percentage to the carrying amount.`,
            [
                "Straight-line Depreciation = (Cost - Residual Value) / Useful Life",
                "Carrying Amount = Cost - Accumulated Depreciation - Accumulated Impairment"
            ],
            [
                "Cost R850 000, residual value R50 000 and useful life 8 years gives annual depreciation of R100 000."
            ]
        ),

        /* =========================
           JOURNALS
        ========================= */

        knowledge(
            "accounting",
            "grade12",
            "Accounting Journals",
            [
                "journal",
                "crj",
                "cpj",
                "dj",
                "daj",
                "cj",
                "caj",
                "general journal",
                "cash receipts journal",
                "cash payments journal"
            ],
            `Common accounting journals include the Cash Receipts Journal, Cash Payments Journal, Debtors Journal, Debtors Allowances Journal, Creditors Journal, Creditors Allowances Journal and General Journal.

The correct journal depends on the nature of the transaction.

The General Journal is used for transactions that do not belong in the specialised journals.`
        ),

        /* =========================
           ACCRUALS AND PREPAYMENTS
        ========================= */

        knowledge(
            "accounting",
            "grade12",
            "Accruals and Prepayments",
            [
                "accrual",
                "accrued expense",
                "prepayment",
                "prepaid expense",
                "accrued income",
                "income received in advance"
            ],
            `An accrued expense is an expense incurred but not yet paid.

A prepaid expense is an amount paid in advance for a future period.

Accrued income is income earned but not yet received.

Income received in advance is cash received before the income is earned.

Accrual accounting recognises income and expenses when they are earned or incurred rather than only when cash changes hands.`
        ),

        /* =========================
           INVENTORY
        ========================= */

        knowledge(
            "accounting",
            "grade12",
            "Inventory Systems",
            [
                "inventory system",
                "perpetual inventory",
                "periodic inventory",
                "stock system",
                "inventory shortage"
            ],
            `Under a perpetual inventory system, inventory records are updated continuously.

Under a periodic inventory system, inventory and cost of sales are determined through periodic procedures.

Inventory shortages can arise from theft, damage, errors or other causes and must be accounted for appropriately.`
        ),

        /* =========================
           DISCOUNTS
        ========================= */

        knowledge(
            "accounting",
            "grade12",
            "Trade and Settlement Discounts",
            [
                "trade discount",
                "settlement discount",
                "cash discount",
                "discount received",
                "discount allowed"
            ],
            `A trade discount is normally deducted from the list price before the transaction is recorded.

A settlement discount encourages early payment.

Discount allowed is normally associated with discounts granted to customers.

Discount received is normally associated with discounts received from suppliers.`
        ),

        /* =========================
           INTERNAL CONTROL
        ========================= */

        knowledge(
            "accounting",
            "grade12",
            "Internal Control",
            [
                "internal control",
                "control",
                "fraud",
                "segregation of duties",
                "authorisation",
                "internal controls"
            ],
            `Internal controls are procedures designed to protect assets, improve reliability of records, prevent and detect fraud and errors, and improve operational efficiency.

Examples include segregation of duties, authorisation, physical controls, reconciliations, documentation and independent review.`
        ),

        /* =========================
           UNIVERSITY ACCOUNTING
        ========================= */

        knowledge(
            "accounting",
            "university",
            "Conceptual Framework",
            [
                "conceptual framework",
                "financial reporting",
                "qualitative characteristics",
                "faithful representation",
                "relevance",
                "comparability",
                "verifiability",
                "timeliness",
                "understandability",
                "asset definition",
                "liability definition"
            ],
            `The Conceptual Framework provides the concepts that underlie general purpose financial reporting.

The objective of general purpose financial reporting is to provide financial information useful to existing and potential investors, lenders and other creditors when making decisions about providing resources.

Fundamental qualitative characteristics are relevance and faithful representation.

Enhancing qualitative characteristics include comparability, verifiability, timeliness and understandability.

An asset is a present economic resource controlled by the entity as a result of past events.

A liability is a present obligation of the entity to transfer an economic resource as a result of past events.

Equity is the residual interest in the assets after deducting liabilities.

Income increases equity other than contributions from holders of equity claims.

Expenses decrease equity other than distributions to holders of equity claims.`
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 1 and IFRS 18",
            [
                "ias 1",
                "ias1",
                "ifrs 18",
                "presentation financial statements",
                "operating profit",
                "management defined performance measures",
                "mdpm"
            ],
            `IAS 1 deals with presentation of financial statements.

IFRS 18 replaces IAS 1 for annual reporting periods beginning on or after 1 January 2027, with early application permitted.

IFRS 18 introduces defined subtotals including operating profit and profit before financing and income taxes.

It also introduces requirements around management-defined performance measures and improved aggregation and disaggregation of information.`
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 2 Inventories",
            [
                "ias 2",
                "inventory",
                "inventories",
                "nrV",
                "net realisable value",
                "fifo",
                "weighted average",
                "cost of inventory"
            ],
            `IAS 2 requires inventories to be measured at the lower of cost and net realisable value.

Inventory cost can include purchase costs, conversion costs and other costs incurred to bring inventory to its present location and condition.

NRV is estimated selling price less estimated costs of completion and costs necessary to make the sale.

FIFO assumes the earliest goods purchased are sold first.

Weighted average assigns an average cost to inventory units.`,
            [
                "NRV = Estimated Selling Price - Costs of Completion - Costs Necessary to Sell",
                "Inventory Carrying Amount = Lower of Cost and NRV"
            ],
            [
                "Cost R900 000 and NRV R820 000 means inventory is written down by R80 000."
            ]
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 7 Cash Flow Statements",
            [
                "ias 7",
                "cash flow",
                "operating activities",
                "investing activities",
                "financing activities",
                "cash equivalents"
            ],
            `IAS 7 classifies cash flows into operating, investing and financing activities.

Operating activities relate to the main revenue-producing activities.

Investing activities relate mainly to acquisition and disposal of long-term assets and investments.

Financing activities relate to changes in contributed equity and borrowings.

Cash equivalents are short-term, highly liquid investments that are readily convertible to known amounts of cash and subject to insignificant risk of changes in value.`
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 8 Accounting Policies Estimates and Errors",
            [
                "ias 8",
                "accounting policies",
                "accounting estimates",
                "errors",
                "retrospective",
                "prospective"
            ],
            `Changes in accounting policies are generally applied retrospectively when required by the applicable standard.

Changes in accounting estimates are generally applied prospectively.

Material prior-period errors are generally corrected retrospectively by restating comparative information and opening balances where required.`
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 10 Events After Reporting Period",
            [
                "ias 10",
                "events after reporting period",
                "adjusting event",
                "non adjusting event"
            ],
            `Adjusting events provide evidence of conditions that existed at the end of the reporting period.

Non-adjusting events indicate conditions arising after the reporting period.

Material non-adjusting events may require disclosure if users could make different decisions without the information.`
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 12 Income Taxes",
            [
                "ias 12",
                "deferred tax",
                "current tax",
                "tax base",
                "temporary difference",
                "dtl",
                "dta"
            ],
            `IAS 12 deals with current and deferred income tax.

Deferred tax arises from temporary differences between the carrying amount of an asset or liability and its tax base.

A taxable temporary difference generally gives rise to a deferred tax liability.

A deductible temporary difference can give rise to a deferred tax asset subject to recognition requirements.

Permanent differences do not create deferred tax because they do not reverse in future periods.`,
            [
                "Temporary Difference = Carrying Amount - Tax Base",
                "Deferred Tax = Temporary Difference × Applicable Tax Rate"
            ],
            [
                "If carrying amount is R500 000, tax base is R350 000 and tax rate is 27%, the taxable temporary difference is R150 000 and the DTL is R40 500."
            ]
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 16 Property Plant and Equipment",
            [
                "ias 16",
                "ppe",
                "property plant equipment",
                "depreciation",
                "revaluation",
                "residual value",
                "useful life",
                "carrying amount",
                "component accounting"
            ],
            `IAS 16 deals with property, plant and equipment.

An item is recognised when future economic benefits are probable and its cost can be measured reliably.

Cost can include purchase price, directly attributable costs and qualifying dismantling or restoration obligations.

After recognition, an entity can generally use the cost model or revaluation model where permitted.

Significant components with different useful lives are depreciated separately.

Depreciation begins when an asset is available for use.

Depreciation stops when the asset is derecognised or classified as held for sale, as applicable.

Revaluation increases and decreases are accounted for according to IAS 16 and relevant previous revaluations.`,
            [
                "Depreciable Amount = Cost - Residual Value",
                "Straight-line Depreciation = (Cost - Residual Value) / Useful Life",
                "Carrying Amount = Cost - Accumulated Depreciation - Accumulated Impairment"
            ],
            [
                "Cost R850 000, residual value R50 000 and useful life 8 years gives depreciation of R100 000 per year."
            ]
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 19 Employee Benefits",
            [
                "ias 19",
                "employee benefits",
                "defined contribution",
                "defined benefit",
                "pension"
            ],
            `IAS 19 covers employee benefits.

Defined contribution plans involve fixed contributions with the entity generally having no further obligation once contributions are paid.

Defined benefit plans require accounting for the present value of the defined benefit obligation and related plan assets, subject to IAS 19 requirements.`
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 20 Government Grants",
            [
                "ias 20",
                "government grant",
                "government assistance",
                "grant income"
            ],
            `IAS 20 deals with accounting for government grants and disclosure of government assistance.

Grants related to assets may be presented using approaches permitted by the standard.

Grants related to income are recognised systematically over the periods in which the entity recognises the related costs.`
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 21 Foreign Exchange",
            [
                "ias 21",
                "foreign exchange",
                "functional currency",
                "monetary items",
                "exchange rate",
                "exchange difference"
            ],
            `IAS 21 deals with foreign currency transactions and foreign operations.

A foreign currency transaction is initially recorded using the spot exchange rate at the transaction date.

Monetary items denominated in foreign currency are generally translated at the closing rate at reporting date.

Exchange differences are recognised according to the requirements of IAS 21.`,
            [
                "Foreign Currency Amount × Exchange Rate = Functional Currency Amount"
            ],
            [
                "USD10 000 at R18/USD = R180 000. At R19/USD it is R190 000, producing a R10 000 exchange difference."
            ]
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 23 Borrowing Costs",
            [
                "ias 23",
                "borrowing costs",
                "qualifying asset",
                "capitalisation"
            ],
            `IAS 23 requires directly attributable borrowing costs to be capitalised as part of the cost of a qualifying asset when the recognition conditions are met.

A qualifying asset is an asset that necessarily takes a substantial period of time to get ready for its intended use or sale.`,
            [
                "Borrowing Cost = Relevant Borrowings × Applicable Interest Rate × Time"
            ],
            [
                "A qualifying borrowing of R5 million at 10% for a full year produces R500 000 of interest before considering other IAS 23 requirements."
            ]
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 24 Related Parties",
            [
                "ias 24",
                "related party",
                "related parties",
                "key management personnel",
                "related party disclosure"
            ],
            `IAS 24 requires disclosure of relationships, transactions and outstanding balances with related parties where required.

Related parties can include parent entities, subsidiaries, associates, joint ventures, key management personnel and certain close family relationships.`
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 27 Separate Financial Statements",
            [
                "ias 27",
                "separate financial statements",
                "subsidiary investment",
                "associate investment"
            ],
            `IAS 27 deals with separate financial statements.

Investments in subsidiaries, associates and joint ventures may be accounted for using approaches permitted by IAS 27, subject to the applicable requirements.`
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 28 Associates and Equity Method",
            [
                "ias 28",
                "associate",
                "significant influence",
                "equity method",
                "investment in associate",
                "goodwill associate",
                "net investment"
            ],
            `IAS 28 deals with investments in associates and joint ventures.

Significant influence is generally presumed when an investor holds 20% or more of the voting power, unless clearly demonstrated otherwise.

Board representation and participation in policy-making can provide evidence of significant influence.

Under the equity method, the investment is initially recognised at cost.

The carrying amount is subsequently adjusted for the investor's share of the investee's post-acquisition profit or loss and other comprehensive income.

Dividends received reduce the carrying amount.

Goodwill arising from acquiring an associate is included within the carrying amount of the investment rather than recognised as a separate goodwill asset.

An investor's share of losses can reduce the investment to zero and may continue against other components of the net investment when required.`,
            [
                "Share of Profit = Investor Ownership % × Associate Profit",
                "Dividend Reduction = Investor Ownership % × Dividend",
                "Goodwill = Consideration + NCI equivalent where applicable - Fair Value of Net Identifiable Assets"
            ],
            [
                "30% of associate profit of R1 000 000 = R300 000 share of profit.",
                "30% of dividends of R500 000 = R150 000 reduction in investment.",
                "40% of a R2 000 000 loss = R800 000 share of loss."
            ]
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 29 Hyperinflation",
            [
                "ias 29",
                "hyperinflation",
                "restatement financial statements"
            ],
            `IAS 29 applies when an entity's functional currency is that of a hyperinflationary economy.

Financial statements are restated using a general price index so that financial information is presented in terms of the measuring unit current at the reporting date.`
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 32 Financial Instruments Presentation",
            [
                "ias 32",
                "financial instrument",
                "liability",
                "equity",
                "compound instrument",
                "classification"
            ],
            `IAS 32 addresses presentation of financial instruments as financial liabilities or equity instruments.

Classification depends substantially on the contractual substance and whether the entity has an obligation to deliver cash or another financial asset.

A compound financial instrument contains both liability and equity components when the requirements are met.`
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 36 Impairment",
            [
                "ias 36",
                "impairment",
                "recoverable amount",
                "value in use",
                "fair value less costs of disposal",
                "fvlcd",
                "viu",
                "cash generating unit",
                "cgu"
            ],
            `IAS 36 requires assets not to be carried above their recoverable amount.

Recoverable amount is the higher of fair value less costs of disposal and value in use.

If carrying amount exceeds recoverable amount, an impairment loss is recognised, subject to the standard's requirements.

Cash-generating units are used where individual asset cash inflows cannot be assessed independently.`,
            [
                "Recoverable Amount = Higher of FVLCD and VIU",
                "Impairment Loss = Carrying Amount - Recoverable Amount"
            ],
            [
                "Carrying amount R1.5 million, FVLCD R1.2 million and VIU R1.35 million gives recoverable amount of R1.35 million and impairment of R150 000."
            ]
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 37 Provisions Contingent Liabilities and Assets",
            [
                "ias 37",
                "provision",
                "contingent liability",
                "contingent asset",
                "present obligation",
                "best estimate",
                "expected value",
                "discounted provision"
            ],
            `A provision is recognised when there is a present obligation from a past event, an outflow of resources is probable and the amount can be estimated reliably.

A provision is measured at the best estimate of the expenditure required to settle the present obligation.

For a large population of items, expected value may be appropriate.

Where the effect of time value of money is material, the provision is discounted.`,
            [
                "Expected Value = Sum of Probability × Possible Outcome",
                "Present Value = Future Cash Flow / (1 + Rate)^Number of Periods"
            ],
            [
                "60% probability of zero, 30% probability of R1m and 10% probability of R3m gives expected value of R600 000.",
                "R1.331m due in 3 years discounted at 10% has a present value of about R1m."
            ]
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 38 Intangible Assets",
            [
                "ias 38",
                "intangible asset",
                "research",
                "development",
                "amortisation",
                "finite useful life",
                "indefinite useful life"
            ],
            `IAS 38 deals with identifiable non-monetary assets without physical substance.

Examples include patents, copyrights, software and certain development costs.

Research expenditure is generally expensed.

Development expenditure can be capitalised when all required recognition criteria are met.

Finite-life intangible assets are amortised over their useful lives.

Indefinite-life intangible assets are not amortised but are tested for impairment as required.`
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 40 Investment Property",
            [
                "ias 40",
                "investment property",
                "rental property",
                "fair value model",
                "cost model"
            ],
            `IAS 40 deals with property held to earn rentals, for capital appreciation, or both.

Investment property is distinguished from owner-occupied property and property held for sale in the ordinary course of business.

The standard contains accounting requirements for cost and fair value models.`
        ),

        knowledge(
            "accounting",
            "university",
            "IAS 41 Agriculture",
            [
                "ias 41",
                "agriculture",
                "biological asset",
                "agricultural produce",
                "fair value"
            ],
            `IAS 41 deals with biological assets and agricultural produce at the point of harvest.

Biological assets are generally measured at fair value less costs to sell unless a specific exception applies.`
        ),

        /* =========================
           IFRS
        ========================= */

        knowledge(
            "accounting",
            "university",
            "IFRS 3 Business Combinations",
            [
                "ifrs 3",
                "business combination",
                "acquisition method",
                "goodwill",
                "bargain purchase",
                "nci"
            ],
            `IFRS 3 requires the acquisition method for business combinations within its scope.

The acquirer recognises identifiable assets acquired and liabilities assumed at acquisition-date fair values, subject to exceptions.

Goodwill is generally the excess of consideration transferred, NCI and previously held interest over the fair value of identifiable net assets acquired.`,
            [
                "Goodwill = Consideration + NCI + Previously Held Interest - Fair Value of Net Identifiable Assets"
            ],
            [
                "Consideration R10m + NCI R2m - net identifiable assets R9m = goodwill R3m."
            ]
        ),

        knowledge(
            "accounting",
            "university",
            "IFRS 5 Non-current Assets Held for Sale",
            [
                "ifrs 5",
                "held for sale",
                "discontinued operation",
                "non current asset held for sale"
            ],
            `IFRS 5 provides requirements for non-current assets and disposal groups held for sale.

An asset or disposal group classified as held for sale is measured at the lower of carrying amount and fair value less costs to sell, subject to the standard's requirements.

Depreciation generally ceases once classified as held for sale.`
        ),

        knowledge(
            "accounting",
            "university",
            "IFRS 7 Financial Instrument Disclosures",
            [
                "ifrs 7",
                "financial instrument disclosures",
                "credit risk",
                "liquidity risk",
                "market risk"
            ],
            `IFRS 7 requires disclosures that enable users to evaluate the significance of financial instruments and the nature and extent of risks arising from them.

Important financial risks include credit risk, liquidity risk and market risk.`
        ),

        knowledge(
            "accounting",
            "university",
            "IFRS 8 Operating Segments",
            [
                "ifrs 8",
                "operating segment",
                "segment reporting",
                "chief operating decision maker"
            ],
            `IFRS 8 requires certain entities to disclose information about operating segments based on the internal information reviewed by the chief operating decision maker.`
        ),

        knowledge(
            "accounting",
            "university",
            "IFRS 9 Financial Instruments",
            [
                "ifrs 9",
                "financial assets",
                "financial liabilities",
                "amortised cost",
                "fvoci",
                "fvtpl",
                "spPi",
                "expected credit loss",
                "ecl",
                "effective interest"
            ],
            `IFRS 9 covers classification, measurement, impairment and hedge accounting for financial instruments.

Financial assets may be measured at amortised cost, FVOCI or FVTPL depending on the business model and contractual cash flow characteristics.

The SPPI test asks whether contractual cash flows are solely payments of principal and interest on the principal outstanding.

The expected credit loss model recognises impairment based on expected losses.

The effective interest method allocates interest income or expense over the relevant period.`,
            [
                "Interest Income = Opening Amortised Cost × Effective Interest Rate",
                "Closing Amortised Cost = Opening Amortised Cost + Effective Interest - Cash Received",
                "ECL = Exposure × Probability of Default × Loss Given Default"
            ],
            [
                "Opening amortised cost R950 000, effective interest 8% = R76 000. If cash interest is R50 000, closing amortised cost is R976 000.",
                "Exposure R500 000 × probability 4% × loss rate 60% = ECL of R12 000."
            ]
        ),

        knowledge(
            "accounting",
            "university",
            "IFRS 10 Consolidated Financial Statements",
            [
                "ifrs 10",
                "consolidation",
                "subsidiary",
                "control",
                "parent",
                "nci",
                "non controlling interest",
                "intragroup",
                "unrealised profit"
            ],
            `IFRS 10 establishes principles for consolidated financial statements.

An investor controls an investee when it has power over the investee, exposure or rights to variable returns and the ability to use power to affect those returns.

A parent generally consolidates controlled subsidiaries.

Intragroup balances, transactions, income, expenses and unrealised profits are eliminated in full.

NCI represents the equity in a subsidiary not attributable directly or indirectly to the parent.

Goodwill is calculated at acquisition.`,
            [
                "Goodwill = Consideration + NCI - Fair Value of Identifiable Net Assets",
                "NCI = NCI Percentage × Relevant Net Assets"
            ],
            [
                "Consideration R10m + NCI R2m - net identifiable assets R9m = goodwill R3m.",
                "If NCI is 20% and relevant net assets are R3m, NCI is R600 000."
            ],
            [
                "Do not recognise unrealised intragroup profit as group profit.",
                "Eliminate intragroup receivables and payables.",
                "Eliminate intragroup sales and purchases."
            ]
        ),

        knowledge(
            "accounting",
            "university",
            "IFRS 11 Joint Arrangements",
            [
                "ifrs 11",
                "joint arrangement",
                "joint operation",
                "joint venture",
                "joint control"
            ],
            `IFRS 11 distinguishes joint operations from joint ventures.

In a joint operation, parties have rights to assets and obligations for liabilities.

In a joint venture, parties generally have rights to the net assets of the arrangement.

Joint ventures are generally accounted for using the equity method under IAS 28.`
        ),

        knowledge(
            "accounting",
            "university",
            "IFRS 12 Disclosure of Interests",
            [
                "ifrs 12",
                "disclosure interests",
                "subsidiary disclosure",
                "associate disclosure",
                "joint arrangement disclosure"
            ],
            `IFRS 12 requires disclosures that enable users to evaluate the nature and risks associated with interests in subsidiaries, joint arrangements, associates and unconsolidated structured entities.`
        ),

        knowledge(
            "accounting",
            "university",
            "IFRS 13 Fair Value",
            [
                "ifrs 13",
                "fair value",
                "fair value hierarchy",
                "level 1",
                "level 2",
                "level 3",
                "valuation"
            ],
            `IFRS 13 defines fair value and provides a framework for measuring fair value.

The fair value hierarchy prioritises inputs used in valuation.

Level 1 inputs are quoted prices in active markets for identical assets or liabilities.

Level 2 inputs are observable inputs other than Level 1 quoted prices.

Level 3 inputs are unobservable inputs.`
        ),

        knowledge(
            "accounting",
            "university",
            "IFRS 15 Revenue",
            [
                "ifrs 15",
                "revenue",
                "five step model",
                "performance obligation",
                "contract asset",
                "contract liability",
                "variable consideration",
                "principal agent"
            ],
            `IFRS 15 establishes a five-step model for revenue recognition.

The steps are:

1. Identify the contract with a customer.
2. Identify the performance obligations.
3. Determine the transaction price.
4. Allocate the transaction price to performance obligations.
5. Recognise revenue when or as performance obligations are satisfied.

Variable consideration may be included subject to the constraint requirements.

A contract asset generally represents a right to consideration that is conditional on something other than passage of time.

A contract liability generally represents an obligation to transfer goods or services for which consideration has been received or is due.`,
            [
                "Allocated Revenue = Transaction Price × Stand-alone Selling Price / Total Stand-alone Selling Prices"
            ],
            [
                "Transaction price R12 000 with standalone prices of R10 000 and R5 000 gives allocations of R8 000 and R4 000."
            ]
        ),

        knowledge(
            "accounting",
            "university",
            "IFRS 16 Leases",
            [
                "ifrs 16",
                "lease",
                "right of use asset",
                "rou asset",
                "lease liability",
                "lessee"
            ],
            `IFRS 16 generally requires lessees to recognise a right-of-use asset and a lease liability for leases, subject to exemptions.

The lease liability is based on the present value of lease payments.

The right-of-use asset is initially based on the lease liability adjusted for applicable items such as initial direct costs, lease incentives and prepayments.

The ROU asset is subsequently depreciated and the lease liability is reduced by payments and increased by interest.`,
            [
                "Present Value = Future Payment / (1 + Rate)^Period",
                "Lease Liability Closing = Opening Liability + Interest - Lease Payment"
            ],
            [
                "Opening lease liability R379 000, interest R37 900 and payment R100 000 gives closing liability of R316 900.",
                "ROU asset of R379 000 depreciated over 5 years gives R75 800 annual depreciation if straight-line."
            ]
        ),

        knowledge(
            "accounting",
            "university",
            "IFRS 17 Insurance Contracts",
            [
                "ifrs 17",
                "insurance contracts",
                "insurance liability",
                "insurance service result"
            ],
            `IFRS 17 provides principles for recognition, measurement, presentation and disclosure of insurance contracts.

The standard aims to provide useful information about insurance contracts and their effect on financial position, performance and cash flows.`
        ),

        knowledge(
            "accounting",
            "university",
            "IFRS 19",
            [
                "ifrs 19",
                "reduced disclosures",
                "eligible subsidiaries",
                "subsidiary disclosures"
            ],
            `IFRS 19 provides reduced disclosure requirements for eligible subsidiaries.

It is effective for annual reporting periods beginning on or after 1 January 2027, with early application permitted.`
        ),

        /* =========================
           EPS
        ========================= */

        knowledge(
            "accounting",
            "university",
            "IAS 33 Earnings Per Share",
            [
                "ias 33",
                "eps",
                "earnings per share",
                "weighted average shares",
                "basic eps",
                "diluted eps"
            ],
            `IAS 33 deals with earnings per share.

Basic EPS is based on profit attributable to ordinary equity holders divided by the weighted average number of ordinary shares outstanding.`,
            [
                "Basic EPS = Profit Attributable to Ordinary Shareholders / Weighted Average Ordinary Shares"
            ],
            [
                "Profit R10m and weighted average shares of 5m gives EPS of R2.00."
            ]
        ),

        /* =========================
           MANAGEMENT ACCOUNTING
        ========================= */

        knowledge(
            "accounting",
            "university",
            "Management Accounting",
            [
                "management accounting",
                "cost accounting",
                "fixed cost",
                "variable cost",
                "contribution",
                "break even",
                "marginal costing",
                "absorption costing"
            ],
            `Management accounting provides information to managers for planning, decision-making and control.

Fixed costs remain constant within a relevant range.

Variable costs change with activity.

Contribution is sales less variable costs.

Absorption costing includes fixed manufacturing overhead in product cost.

Variable or marginal costing treats fixed manufacturing costs as period costs for internal decision-making.`,
            [
                "Contribution = Sales - Variable Costs",
                "Contribution per Unit = Selling Price - Variable Cost per Unit",
                "Break-even Units = Fixed Costs / Contribution per Unit",
                "Break-even Sales = Fixed Costs / Contribution Margin Ratio"
            ]
        ),

        knowledge(
            "accounting",
            "university",
            "CVP Analysis",
            [
                "cvp",
                "cost volume profit",
                "break even",
                "margin of safety",
                "contribution margin",
                "target profit"
            ],
            `Cost-volume-profit analysis studies the relationship between selling price, volume, variable cost, fixed cost and profit.

Break-even occurs where total revenue equals total cost.

Margin of safety measures how much actual or budgeted sales can fall before the business reaches break-even.`,
            [
                "Break-even Units = Fixed Costs / Contribution per Unit",
                "Target Profit Units = (Fixed Costs + Target Profit) / Contribution per Unit",
                "Margin of Safety = Actual Sales - Break-even Sales"
            ]
        ),

        knowledge(
            "accounting",
            "university",
            "Process Costing",
            [
                "process costing",
                "equivalent units",
                "normal loss",
                "abnormal loss",
                "abnormal gain",
                "process account"
            ],
            `Process costing is used where identical or similar products are produced continuously.

Costs are accumulated by process.

Equivalent units convert partially completed units into an equivalent number of fully completed units.

Normal losses are expected losses within normal production conditions.

Abnormal losses or gains arise when actual losses differ from expected normal losses.`
        ),

        knowledge(
            "accounting",
            "university",
            "Joint Products and By-products",
            [
                "joint products",
                "joint costs",
                "by product",
                "split off point",
                "joint costing"
            ],
            `Joint products arise from a common production process and have significant sales value.

A by-product generally has lower relative sales value.

Joint costs are incurred before the split-off point and may be allocated using methods such as relative sales value or physical measures depending on the purpose and requirements.`
        ),

        /* =========================
           TAX
        ========================= */

        knowledge(
            "accounting",
            "university",
            "Taxation Basics",
            [
                "tax",
                "income tax",
                "taxable income",
                "taxable profit",
                "deduction",
                "tax rate",
                "south african tax"
            ],
            `Tax accounting studies the calculation and treatment of tax obligations.

Taxable income is determined using tax legislation and differs from accounting profit because some income and expenses receive different tax treatment.

Tax computations can involve deductions, exemptions, allowances, capital gains and timing differences.`
        ),

        /* =========================
           AUDITING
        ========================= */

        knowledge(
            "accounting",
            "university",
            "Auditing",
            [
                "audit",
                "auditing",
                "audit evidence",
                "audit risk",
                "isa 315",
                "internal control",
                "material misstatement"
            ],
            `Auditing provides independent assurance on financial information.

Audit risk is the risk that an inappropriate audit opinion is expressed when financial statements are materially misstated.

ISA 315 deals with identifying and assessing risks of material misstatement through understanding the entity and its environment.

Audit evidence supports the auditor's conclusions.

Internal controls are relevant to the auditor's risk assessment and audit approach.`
        ),

        knowledge(
            "accounting",
            "university",
            "Audit Risk",
            [
                "audit risk",
                "inherent risk",
                "control risk",
                "detection risk",
                "risk model"
            ],
            `Audit risk can be understood using inherent risk, control risk and detection risk.

Inherent risk is the susceptibility of an assertion to material misstatement before considering controls.

Control risk is the risk that a misstatement will not be prevented or detected and corrected by internal controls.

Detection risk is the risk that audit procedures fail to detect a material misstatement.`,
            [
                "Audit Risk ≈ Inherent Risk × Control Risk × Detection Risk"
            ]
        ),

        /* =========================
           FINANCIAL MANAGEMENT
        ========================= */

        knowledge(
            "accounting",
            "university",
            "Financial Management",
            [
                "financial management",
                "npv",
                "irr",
                "investment appraisal",
                "present value",
                "future value",
                "cost of capital"
            ],
            `Financial management deals with financial decision-making including investment, financing and working capital decisions.

Investment appraisal methods include NPV, IRR, payback and accounting rate of return.

NPV compares the present value of expected cash inflows with the present value of investment outflows.`,
            [
                "PV = Future Cash Flow / (1 + r)^n",
                "NPV = Present Value of Cash Inflows - Initial Investment"
            ]
        )

    ];


    /* =========================================================
       ECONOMICS KNOWLEDGE
    ========================================================= */

    const economicsKnowledge = [

        knowledge(
            "economics",
            "grade12",
            "Economics",
            [
                "economics",
                "definition",
                "scarcity",
                "choice",
                "opportunity cost"
            ],
            `Economics studies how individuals, businesses, governments and societies allocate scarce resources among competing wants.

Scarcity exists because resources are limited while human wants are unlimited.

Because resources are scarce, choices must be made.

Opportunity cost is the value of the next best alternative forgone.`
        ),

        knowledge(
            "economics",
            "grade12",
            "Factors of Production",
            [
                "factors of production",
                "land",
                "labour",
                "capital",
                "entrepreneur",
                "entrepreneurship",
                "rent",
                "wages",
                "interest",
                "profit"
            ],
            `The four main factors of production are land, labour, capital and entrepreneurship.

Land includes natural resources and its reward is rent.

Labour refers to human effort and its reward is wages.

Capital refers to produced resources used for further production and its reward is interest.

Entrepreneurship involves organising resources and taking business risks, with profit as the reward.`
        ),

        knowledge(
            "economics",
            "grade12",
            "Microeconomics and Macroeconomics",
            [
                "microeconomics",
                "macroeconomics",
                "micro",
                "macro"
            ],
            `Microeconomics studies individual consumers, firms and markets.

Macroeconomics studies the economy as a whole, including inflation, unemployment, economic growth, national income, fiscal policy and monetary policy.`
        ),

        knowledge(
            "economics",
            "grade12",
            "Demand",
            [
                "demand",
                "law of demand",
                "quantity demanded",
                "demand curve",
                "movement demand",
                "shift demand"
            ],
            `Demand refers to the quantity of a good or service consumers are willing and able to buy at different prices over a given period.

The law of demand states that, ceteris paribus, quantity demanded generally falls as price rises and rises as price falls.

A movement along the demand curve is caused by a change in the product's own price.

A shift in demand is caused by other factors such as income, tastes, expectations, population, prices of related goods and advertising.`
        ),

        knowledge(
            "economics",
            "grade12",
            "Supply",
            [
                "supply",
                "law of supply",
                "quantity supplied",
                "supply curve",
                "movement supply",
                "shift supply"
            ],
            `Supply refers to the quantity producers are willing and able to sell at different prices over a given period.

The law of supply generally states that, ceteris paribus, quantity supplied rises when price rises and falls when price falls.

A movement along the supply curve is caused by a change in the product's own price.

A shift in supply can result from changes in input costs, technology, taxes, subsidies, weather, expectations and the number of sellers.`
        ),

        knowledge(
            "economics",
            "grade12",
            "Market Equilibrium",
            [
                "equilibrium",
                "market equilibrium",
                "equilibrium price",
                "equilibrium quantity",
                "shortage",
                "surplus"
            ],
            `Market equilibrium occurs where quantity demanded equals quantity supplied.

A shortage occurs when quantity demanded exceeds quantity supplied at a given price.

A surplus occurs when quantity supplied exceeds quantity demanded.`,
            [
                "Equilibrium: Qd = Qs"
            ]
        ),

        knowledge(
            "economics",
            "grade12",
            "Elasticity",
            [
                "elasticity",
                "ped",
                "pes",
                "yed",
                "xed",
                "price elasticity",
                "income elasticity",
                "cross elasticity"
            ],
            `Elasticity measures how responsive one variable is to a change in another.

Price elasticity of demand measures responsiveness of quantity demanded to price.

Price elasticity of supply measures responsiveness of quantity supplied to price.

Income elasticity measures responsiveness of demand to income.

Cross elasticity measures responsiveness of demand for one good to the price of another.`,
            [
                "PED = % Change in Quantity Demanded / % Change in Price",
                "PES = % Change in Quantity Supplied / % Change in Price",
                "YED = % Change in Quantity Demanded / % Change in Income",
                "XED = % Change in Quantity Demanded of A / % Change in Price of B"
            ]
        ),

        knowledge(
            "economics",
            "grade12",
            "Utility",
            [
                "utility",
                "total utility",
                "marginal utility",
                "diminishing marginal utility",
                "consumer surplus"
            ],
            `Utility is the satisfaction consumers obtain from consuming goods and services.

Total utility is total satisfaction.

Marginal utility is the additional satisfaction obtained from consuming one additional unit.

The law of diminishing marginal utility states that marginal utility tends to decline as additional units are consumed, holding other conditions constant.`,
            [
                "Marginal Utility = Change in Total Utility / Change in Quantity"
            ]
        ),

        knowledge(
            "economics",
            "grade12",
            "Market Structures",
            [
                "market structure",
                "perfect competition",
                "monopoly",
                "oligopoly",
                "monopolistic competition",
                "barriers to entry",
                "market power"
            ],
            `Perfect competition has many buyers and sellers, homogeneous products, relatively free entry and exit and firms that are price takers.

A monopoly has a single dominant seller and significant barriers to entry.

An oligopoly has a small number of significant firms and strategic interdependence.

Monopolistic competition has many firms selling differentiated products with relatively easy entry and exit.`,
            [
                "Profit = Total Revenue - Total Cost"
            ]
        ),

        knowledge(
            "economics",
            "grade12",
            "Revenue and Costs",
            [
                "total revenue",
                "average revenue",
                "marginal revenue",
                "total cost",
                "average cost",
                "marginal cost",
                "fixed cost",
                "variable cost"
            ],
            `Total revenue is price multiplied by quantity.

Average revenue is revenue per unit.

Marginal revenue is the change in total revenue from selling one additional unit.

Fixed costs do not change with output within the relevant range.

Variable costs change with output.

Marginal cost is the change in total cost resulting from one additional unit of output.`,
            [
                "TR = P × Q",
                "AR = TR / Q",
                "MR = ΔTR / ΔQ",
                "AC = TC / Q",
                "AFC = TFC / Q",
                "AVC = TVC / Q",
                "MC = ΔTC / ΔQ",
                "ATC = AFC + AVC"
            ]
        ),

        knowledge(
            "economics",
            "grade12",
            "Productivity",
            [
                "productivity",
                "total product",
                "average product",
                "marginal product",
                "diminishing returns",
                "labour productivity"
            ],
            `Productivity measures output relative to inputs.

Total product is total output.

Average product is output per unit of variable input.

Marginal product is the additional output generated by one additional unit of input.`,
            [
                "AP = Total Product / Units of Variable Input",
                "MP = Change in Total Product / Change in Variable Input"
            ]
        ),

        knowledge(
            "economics",
            "grade12",
            "Inflation",
            [
                "inflation",
                "cpi",
                "consumer price index",
                "demand pull",
                "cost push",
                "imported inflation",
                "deflation",
                "disinflation",
                "stagflation",
                "hyperinflation"
            ],
            `Inflation is a sustained increase in the general price level.

Demand-pull inflation can occur when aggregate demand grows faster than productive capacity.

Cost-push inflation can result from rising production costs.

Imported inflation can arise from increases in prices of imported goods or depreciation of the domestic currency.

Deflation is a sustained fall in the general price level.

Disinflation means the inflation rate is falling while prices may still be rising.

Stagflation combines high inflation with weak economic conditions and high unemployment.

The CPI measures changes in the prices of a basket of consumer goods and services.`
        ),

        knowledge(
            "economics",
            "grade12",
            "Unemployment",
            [
                "unemployment",
                "frictional unemployment",
                "structural unemployment",
                "cyclical unemployment",
                "seasonal unemployment",
                "labour force",
                "unemployment rate"
            ],
            `Frictional unemployment occurs during transitions between jobs.

Structural unemployment results from a mismatch between worker skills and available jobs.

Cyclical unemployment is associated with downturns in economic activity.

Seasonal unemployment occurs because certain activities vary by season.

The labour force includes employed and unemployed people who are actively participating in the labour market.`,
            [
                "Unemployment Rate = Unemployed / Labour Force × 100",
                "Labour Force Participation Rate = Labour Force / Working-age Population × 100"
            ]
        ),

        knowledge(
            "economics",
            "grade12",
            "Economic Growth and Development",
            [
                "economic growth",
                "economic development",
                "gdp",
                "real gdp",
                "nominal gdp",
                "gdp per capita",
                "hdi",
                "gini",
                "poverty"
            ],
            `Economic growth is an increase in real output over time.

Economic development is broader and includes improvements in living standards, health, education, opportunities and structural conditions.

Real GDP adjusts for price changes.

Nominal GDP is measured at current prices.

GDP per capita divides GDP by population.

HDI considers dimensions including health, education and income.

The Gini coefficient is commonly used to measure income or wealth inequality.`,
            [
                "GDP = C + I + G + (X - M)",
                "GDP per Capita = GDP / Population",
                "Growth Rate = (New Value - Old Value) / Old Value × 100"
            ]
        ),

        knowledge(
            "economics",
            "grade12",
            "Business Cycle",
            [
                "business cycle",
                "expansion",
                "peak",
                "contraction",
                "recession",
                "trough",
                "recovery"
            ],
            `The business cycle describes fluctuations in economic activity.

Expansion is a period of rising economic activity.

A peak is the high point before a downturn.

Contraction is a decline in economic activity.

A trough is the low point.

Recovery is the phase in which economic activity begins increasing after a downturn.`
        ),

        knowledge(
            "economics",
            "grade12",
            "Fiscal Policy",
            [
                "fiscal policy",
                "government spending",
                "taxation",
                "budget deficit",
                "budget surplus",
                "expansionary fiscal policy",
                "contractionary fiscal policy",
                "automatic stabilisers"
            ],
            `Fiscal policy involves government spending, taxation and transfers.

Expansionary fiscal policy can involve increased government spending or lower taxes to support aggregate demand.

Contractionary fiscal policy can involve lower government spending or higher taxes to reduce aggregate demand.

A budget deficit occurs when government expenditure exceeds revenue.

A budget surplus occurs when government revenue exceeds expenditure.`,
            [
                "Budget Balance = Government Revenue - Government Expenditure"
            ]
        ),

        knowledge(
            "economics",
            "grade12",
            "Monetary Policy",
            [
                "monetary policy",
                "central bank",
                "sarb",
                "repo rate",
                "interest rate",
                "inflation targeting",
                "money supply"
            ],
            `Monetary policy uses interest rates and other monetary tools to influence economic conditions.

In South Africa, the South African Reserve Bank conducts monetary policy.

The repo rate influences borrowing costs and financial conditions.

Higher interest rates can reduce borrowing and spending, while lower rates can encourage borrowing and spending, although the effects depend on economic conditions and transmission lags.`
        ),

        knowledge(
            "economics",
            "grade12",
            "Aggregate Demand",
            [
                "aggregate demand",
                "ad",
                "consumption",
                "investment",
                "government spending",
                "net exports"
            ],
            `Aggregate demand represents planned expenditure on domestically produced goods and services.

It consists of consumption, investment, government spending and net exports.`,
            [
                "AD = C + I + G + (X - M)"
            ]
        ),

        knowledge(
            "economics",
            "grade12",
            "Consumption Saving and Multiplier",
            [
                "consumption",
                "saving",
                "mpc",
                "mps",
                "multiplier",
                "marginal propensity"
            ],
            `Disposable income is allocated between consumption and saving.

The marginal propensity to consume measures the change in consumption resulting from a change in disposable income.

The marginal propensity to save measures the change in saving resulting from a change in disposable income.

MPC plus MPS equals one.

The simple expenditure multiplier shows how an initial change in autonomous spending can produce a larger change in equilibrium income.`,
            [
                "Yd = C + S",
                "MPC = ΔC / ΔY",
                "MPS = ΔS / ΔY",
                "MPC + MPS = 1",
                "Multiplier = 1 / (1 - MPC)",
                "Multiplier = 1 / MPS"
            ]
        ),

        knowledge(
            "economics",
            "grade12",
            "Public Sector",
            [
                "public sector",
                "government",
                "public goods",
                "free rider",
                "government failure",
                "privatisation",
                "nationalisation"
            ],
            `The public sector consists of government institutions and activities.

Public goods are typically non-rival and non-excludable.

The free-rider problem occurs when people can benefit without paying.

Government failure occurs when government intervention produces outcomes that do not improve resource allocation as intended.

Privatisation transfers ownership or control from the public sector to private ownership.

Nationalisation transfers ownership or control to the state.`
        ),

        knowledge(
            "economics",
            "grade12",
            "Externalities",
            [
                "externality",
                "externalities",
                "negative externality",
                "positive externality",
                "social cost",
                "social benefit",
                "pollution"
            ],
            `An externality occurs when an economic activity affects third parties who are not fully reflected in the market transaction.

A negative externality creates an external cost.

A positive externality creates an external benefit.`,
            [
                "Social Cost = Private Cost + External Cost",
                "Social Benefit = Private Benefit + External Benefit"
            ]
        ),

        knowledge(
            "economics",
            "grade12",
            "International Trade",
            [
                "international trade",
                "exports",
                "imports",
                "comparative advantage",
                "absolute advantage",
                "trade"
            ],
            `International trade involves the exchange of goods and services between countries.

Absolute advantage means producing more output with the same resources or the same output using fewer resources.

Comparative advantage is based on lower opportunity cost.

Countries can gain from specialisation and trade when opportunity costs differ.`
        ),

        knowledge(
            "economics",
            "grade12",
            "Protectionism",
            [
                "protectionism",
                "tariff",
                "quota",
                "embargo",
                "trade barrier",
                "import restriction"
            ],
            `Protectionism involves policies designed to protect domestic industries from foreign competition.

A tariff is a tax on imports.

A quota limits the quantity of a good that can be imported.

An embargo is a government restriction or prohibition on trade with a particular country or on particular goods.`
        ),

        knowledge(
            "economics",
            "grade12",
            "Foreign Exchange",
            [
                "foreign exchange",
                "exchange rate",
                "currency appreciation",
                "currency depreciation",
                "rand",
                "forex"
            ],
            `The foreign exchange market is where currencies are exchanged.

An appreciation means a currency becomes more valuable relative to another currency under the relevant exchange-rate quotation.

A depreciation means a currency becomes less valuable.

Exchange-rate changes can affect imports, exports, inflation and capital flows.`
        ),

        knowledge(
            "economics",
            "grade12",
            "Balance of Payments",
            [
                "balance of payments",
                "bop",
                "current account",
                "financial account",
                "capital account"
            ],
            `The balance of payments records transactions between residents of a country and the rest of the world.

It includes accounts such as the current account and financial account under the relevant presentation framework.

The current account includes trade in goods and services, primary income and secondary income.`
        ),

        knowledge(
            "economics",
            "grade12",
            "Terms of Trade",
            [
                "terms of trade",
                "tot",
                "export prices",
                "import prices"
            ],
            `Terms of trade compare export prices with import prices.

An improvement in the terms of trade means export prices have risen relative to import prices, all else equal.`,
            [
                "Terms of Trade = Export Price Index / Import Price Index × 100"
            ]
        ),

        knowledge(
            "economics",
            "grade12",
            "Labour Market",
            [
                "labour market",
                "wages",
                "real wage",
                "nominal wage",
                "minimum wage",
                "trade union",
                "collective bargaining"
            ],
            `The labour market involves demand and supply for labour.

A nominal wage is measured in money terms.

A real wage adjusts for changes in the price level.

Trade unions represent workers in collective bargaining.

Minimum wage legislation establishes a legal wage floor subject to the relevant law and exemptions.`
        ),

        knowledge(
            "economics",
            "grade12",
            "Poverty and Inequality",
            [
                "poverty",
                "poverty line",
                "inequality",
                "gini coefficient",
                "multidimensional poverty"
            ],
            `Poverty refers to insufficient resources to meet basic needs.

Income poverty is often measured using a monetary poverty line.

Multidimensional poverty considers multiple dimensions of deprivation.

The Gini coefficient is commonly used as an inequality measure.`
        ),

        knowledge(
            "economics",
            "grade12",
            "Globalisation",
            [
                "globalisation",
                "globalization",
                "digital economy",
                "e commerce",
                "internationalisation"
            ],
            `Globalisation involves increasing integration of economies through trade, investment, technology, finance, communication and movement of knowledge.

The digital economy uses digital technologies in production, exchange and consumption.

E-commerce involves buying and selling through electronic platforms.`
        ),

        /* =========================
           UNIVERSITY ECONOMICS
        ========================= */

        knowledge(
            "economics",
            "university",
            "Consumer Theory",
            [
                "consumer theory",
                "utility maximisation",
                "budget constraint",
                "indifference curve",
                "marginal utility",
                "consumer choice"
            ],
            `Consumer theory studies how individuals allocate limited income across goods and services.

A budget constraint shows combinations of goods that a consumer can afford.

An indifference curve represents combinations of goods providing the same utility.

A consumer chooses a bundle subject to the budget constraint to maximise utility.

In an interior optimum, the marginal rate of substitution can equal the relative price ratio under standard assumptions.`
        ),

        knowledge(
            "economics",
            "university",
            "Production Theory",
            [
                "production function",
                "production theory",
                "isoquant",
                "isocost",
                "returns to scale",
                "marginal product",
                "average product"
            ],
            `Production theory studies how firms transform inputs into outputs.

A production function describes the maximum output obtainable from given inputs under technology.

An isoquant shows combinations of inputs that produce the same output.

An isocost line shows combinations of inputs with the same total cost.

Returns to scale describe how output changes when all inputs change proportionally.`
        ),

        knowledge(
            "economics",
            "university",
            "Firm Profit Maximisation",
            [
                "profit maximisation",
                "firm",
                "marginal revenue",
                "marginal cost",
                "economic profit"
            ],
            `A standard profit-maximising firm chooses output where marginal revenue equals marginal cost, subject to relevant conditions.

Economic profit accounts for both explicit and implicit opportunity costs.`,
            [
                "Profit = Total Revenue - Total Economic Cost",
                "Profit Maximisation Condition: MR = MC"
            ]
        ),

        knowledge(
            "economics",
            "university",
            "Game Theory",
            [
                "game theory",
                "nash equilibrium",
                "dominant strategy",
                "prisoners dilemma",
                "strategic interaction"
            ],
            `Game theory studies strategic decisions where one person's or firm's outcome depends on the actions of others.

A Nash equilibrium occurs when no player can improve their outcome by changing strategy alone, given the strategies of the others.

A dominant strategy is a strategy that gives a player a better outcome regardless of what another player does.`
        ),

        knowledge(
            "economics",
            "university",
            "Price Discrimination",
            [
                "price discrimination",
                "first degree",
                "second degree",
                "third degree",
                "monopoly pricing"
            ],
            `Price discrimination occurs when a firm charges different prices for the same or closely related product based on customer characteristics, quantities or market segments, rather than differences in cost alone.

First-degree price discrimination attempts to charge each buyer their maximum willingness to pay.

Second-degree price discrimination varies prices according to quantity or product version.

Third-degree price discrimination charges different identifiable groups different prices.`
        ),

        knowledge(
            "economics",
            "university",
            "Welfare Economics",
            [
                "welfare economics",
                "consumer surplus",
                "producer surplus",
                "deadweight loss",
                "social welfare"
            ],
            `Welfare economics studies economic efficiency and social welfare.

Consumer surplus is the difference between willingness to pay and the actual price.

Producer surplus is the difference between the price received and minimum willingness to accept.

Deadweight loss represents mutually beneficial gains from trade that are not realised because of an inefficiency or distortion.`
        ),

        knowledge(
            "economics",
            "university",
            "Public Economics",
            [
                "public economics",
                "taxation",
                "externalities",
                "public goods",
                "government intervention"
            ],
            `Public economics studies government activity and its effects on resource allocation and distribution.

Government intervention can address market failures such as externalities, public goods and information problems.

Taxes can influence incentives and generate government revenue.

Subsidies can encourage activities with positive external benefits.`
        ),

        knowledge(
            "economics",
            "university",
            "Labour Economics",
            [
                "labour economics",
                "labour demand",
                "labour supply",
                "human capital",
                "wage determination"
            ],
            `Labour economics studies employment, wages, labour supply, labour demand, human capital and labour-market institutions.

Labour demand is derived from the demand for goods and services produced by workers.

Human capital includes education, skills, experience and health-related productive capabilities.`
        ),

        knowledge(
            "economics",
            "university",
            "International Economics",
            [
                "international economics",
                "comparative advantage",
                "trade theory",
                "tariff",
                "quota",
                "trade policy"
            ],
            `International economics studies trade, international finance, exchange rates and global economic integration.

Comparative advantage is based on opportunity cost.

Trade policy can include tariffs, quotas, subsidies and other measures.

Trade can increase consumption possibilities but can also create distributional effects across sectors and groups.`
        ),

        knowledge(
            "economics",
            "university",
            "Monetary Economics",
            [
                "monetary economics",
                "money supply",
                "interest rate",
                "central bank",
                "inflation",
                "monetary policy"
            ],
            `Monetary economics studies money, banking, interest rates, inflation and monetary policy.

Central banks influence financial conditions through monetary policy instruments.

Changes in policy rates can affect borrowing costs, asset prices, exchange rates, spending and inflation through several transmission channels.`
        ),

        knowledge(
            "economics",
            "university",
            "IS-LM Model",
            [
                "is lm",
                "is-lm",
                "goods market",
                "money market",
                "interest income"
            ],
            `The IS-LM framework is a traditional macroeconomic model connecting equilibrium in the goods market with equilibrium in the money market.

The IS curve represents combinations of income and interest rates consistent with goods-market equilibrium.

The LM curve represents combinations consistent with money-market equilibrium.

The model can be used to study interactions between fiscal and monetary policy under its assumptions.`
        ),

        knowledge(
            "economics",
            "university",
            "Econometrics",
            [
                "econometrics",
                "regression",
                "correlation",
                "statistical inference",
                "ordinary least squares",
                "ols"
            ],
            `Econometrics applies statistical methods to economic data.

Regression analysis estimates relationships between variables.

Correlation measures the strength and direction of association between variables.

Correlation alone does not establish causation.

Ordinary least squares estimates coefficients by minimising the sum of squared residuals under the model assumptions.`
        ),

        knowledge(
            "economics",
            "university",
            "Economic Growth Theory",
            [
                "growth theory",
                "economic growth theory",
                "solow model",
                "capital accumulation",
                "technology",
                "human capital"
            ],
            `Economic growth theory studies the determinants of long-run increases in productive capacity.

Models may emphasise capital accumulation, labour, population growth, technological progress and human capital.

The Solow model highlights capital accumulation, population growth and technological progress in long-run output per worker.`
        ),

        knowledge(
            "economics",
            "university",
            "Positive and Normative Economics",
            [
                "positive economics",
                "normative economics",
                "fact",
                "value judgement"
            ],
            `Positive economics deals with statements that can be tested against evidence.

Normative economics involves value judgments about what should happen.

Example of positive statement: "An increase in the tax rate reduces disposable income, holding other conditions constant."

Example of normative statement: "The government should increase the tax rate."`
        ),

        knowledge(
            "economics",
            "university",
            "Ceteris Paribus",
            [
                "ceteris paribus",
                "all else equal",
                "holding other factors constant"
            ],
            `Ceteris paribus means "other things being equal".

It is used to isolate the relationship between variables by assuming other relevant factors remain unchanged.`
        ),

        knowledge(
            "economics",
            "university",
            "Correlation and Causation",
            [
                "correlation",
                "causation",
                "causal relationship",
                "association"
            ],
            `Correlation means variables move together statistically.

Causation means a change in one variable contributes to a change in another.

Correlation by itself does not prove causation because of confounding variables, reverse causality or coincidence.`
        )

    ];


    /* =========================================================
       MATHEMATICS KNOWLEDGE
    ========================================================= */

    const mathematicsKnowledge = [

        knowledge(
            "mathematics",
            "grade12",
            "Number Systems",
            [
                "number systems",
                "natural numbers",
                "whole numbers",
                "integers",
                "rational",
                "irrational",
                "real numbers"
            ],
            `Natural numbers are counting numbers.

Whole numbers include zero and positive counting numbers.

Integers include positive numbers, negative numbers and zero.

Rational numbers can be written as a fraction of two integers.

Irrational numbers cannot be written as a ratio of two integers.

Real numbers include both rational and irrational numbers.`
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Fractions Percentages and Ratios",
            [
                "fraction",
                "percentage",
                "ratio",
                "proportion",
                "decimal"
            ],
            `A fraction represents part of a whole.

A percentage is a quantity expressed out of 100.

A ratio compares quantities.

A proportion states that two ratios are equal.`,
            [
                "Percentage = Part / Whole × 100",
                "Percentage Change = (New - Old) / Old × 100"
            ]
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Exponents",
            [
                "exponents",
                "indices",
                "powers",
                "laws of exponents"
            ],
            `Exponents describe repeated multiplication.

Important laws include:

a^m × a^n = a^(m+n)

a^m / a^n = a^(m-n)

(a^m)^n = a^(mn)

a^0 = 1 for a ≠ 0

a^(-n) = 1/a^n.`,
            [
                "a^m × a^n = a^(m+n)",
                "a^m / a^n = a^(m-n)",
                "(a^m)^n = a^(mn)",
                "a^(-n) = 1/a^n"
            ]
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Surds",
            [
                "surds",
                "square roots",
                "radicals",
                "simplify surds"
            ],
            `A surd is an irrational root expression that cannot be simplified to a rational number.

To simplify √72, factor 72 as 36 × 2, giving √72 = 6√2.`,
            [
                "√(ab) = √a × √b"
            ]
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Algebra",
            [
                "algebra",
                "variables",
                "coefficients",
                "constants",
                "like terms",
                "expand",
                "simplify"
            ],
            `Algebra uses symbols to represent numbers.

A coefficient multiplies a variable.

A constant is a fixed value.

Like terms have the same variables raised to the same powers.

Only like terms can be combined directly.`
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Factorisation",
            [
                "factorisation",
                "factorization",
                "common factor",
                "difference of squares",
                "trinomial"
            ],
            `Factorisation rewrites an expression as a product of factors.

Common methods include taking out a common factor, difference of two squares and factorising quadratic trinomials.`,
            [
                "a² - b² = (a-b)(a+b)"
            ]
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Linear Equations",
            [
                "linear equation",
                "equation",
                "solve equation",
                "unknown"
            ],
            `A linear equation has the highest power of the variable equal to one.

The objective is to isolate the unknown while maintaining equality on both sides.`
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Quadratic Equations",
            [
                "quadratic",
                "quadratic equation",
                "quadratic formula",
                "discriminant",
                "roots"
            ],
            `A quadratic equation has the form ax² + bx + c = 0 where a ≠ 0.

It can be solved by factorisation, completing the square or the quadratic formula.

The discriminant determines the number and type of real roots.`,
            [
                "x = (-b ± √(b² - 4ac)) / 2a",
                "Discriminant = b² - 4ac"
            ]
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Inequalities",
            [
                "inequality",
                "greater than",
                "less than",
                "interval",
                "inequality sign"
            ],
            `Inequalities compare expressions using symbols such as <, >, ≤ and ≥.

When multiplying or dividing both sides by a negative number, reverse the inequality sign.`
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Simultaneous Equations",
            [
                "simultaneous equations",
                "systems equations",
                "substitution",
                "elimination"
            ],
            `Simultaneous equations are equations solved together.

Common methods include substitution, elimination and graphical methods.`
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Sequences",
            [
                "sequence",
                "arithmetic sequence",
                "geometric sequence",
                "common difference",
                "common ratio",
                "series"
            ],
            `An arithmetic sequence has a constant difference between consecutive terms.

A geometric sequence has a constant ratio between consecutive terms.`,
            [
                "Arithmetic: Tn = a + (n-1)d",
                "Arithmetic Sum: Sn = n/2[2a + (n-1)d]",
                "Geometric: Tn = ar^(n-1)",
                "Geometric Sum: Sn = a(1-r^n)/(1-r)"
            ]
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Functions",
            [
                "function",
                "domain",
                "range",
                "inverse function",
                "composite function"
            ],
            `A function assigns each input in its domain exactly one output.

The domain is the set of allowed input values.

The range is the set of resulting output values.

Composite functions involve applying one function to another.`
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Analytical Geometry",
            [
                "analytical geometry",
                "gradient",
                "slope",
                "straight line",
                "midpoint",
                "distance formula"
            ],
            `Analytical geometry studies geometric relationships using coordinates and algebra.

The gradient measures the rate of change of y with respect to x.`,
            [
                "m = (y2-y1)/(x2-x1)",
                "y-y1 = m(x-x1)",
                "Distance = √[(x2-x1)² + (y2-y1)²]",
                "Midpoint = ((x1+x2)/2, (y1+y2)/2)"
            ]
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Circle",
            [
                "circle",
                "equation of circle",
                "centre",
                "radius"
            ],
            `The equation of a circle with centre (h,k) and radius r is given by the standard circle equation.`,
            [
                "(x-h)² + (y-k)² = r²"
            ]
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Pythagoras",
            [
                "pythagoras",
                "right triangle",
                "hypotenuse"
            ],
            `Pythagoras' theorem applies to right-angled triangles.`,
            [
                "a² + b² = c²"
            ]
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Trigonometry",
            [
                "trigonometry",
                "sin",
                "cos",
                "tan",
                "sohcahtoa",
                "right triangle"
            ],
            `For a right-angled triangle:

sin θ = opposite/hypotenuse

cos θ = adjacent/hypotenuse

tan θ = opposite/adjacent.

These relationships are commonly remembered as SOHCAHTOA.`,
            [
                "sin θ = O/H",
                "cos θ = A/H",
                "tan θ = O/A"
            ]
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Trigonometric Identities",
            [
                "trigonometric identity",
                "trig identity",
                "sin squared",
                "cos squared"
            ],
            `A trigonometric identity is an equation true for all values in its domain.`,
            [
                "sin²θ + cos²θ = 1",
                "tanθ = sinθ/cosθ"
            ]
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Sine Rule and Cosine Rule",
            [
                "sine rule",
                "cosine rule",
                "non right triangle",
                "triangle"
            ],
            `The sine rule and cosine rule can be used to solve non-right-angled triangles.`,
            [
                "a/sin A = b/sin B = c/sin C",
                "c² = a² + b² - 2ab cos C",
                "Area = 1/2 ab sin C"
            ]
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Statistics",
            [
                "statistics",
                "mean",
                "median",
                "mode",
                "range",
                "quartile",
                "iqr",
                "variance",
                "standard deviation"
            ],
            `Statistics involves collecting, organising, analysing and interpreting data.

The mean is the arithmetic average.

The median is the middle value when observations are ordered.

The mode is the most frequent value.

The range is maximum minus minimum.

The interquartile range is Q3 minus Q1.

Standard deviation measures the spread of observations around the mean.`,
            [
                "Mean = Sum of Values / Number of Values",
                "Range = Maximum - Minimum",
                "IQR = Q3 - Q1",
                "Variance = Average Squared Deviation from Mean",
                "Standard Deviation = √Variance"
            ]
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Probability",
            [
                "probability",
                "sample space",
                "event",
                "conditional probability",
                "independent events",
                "bayes"
            ],
            `Probability measures the likelihood of an event.

Probability ranges from 0 to 1.

The probability of an impossible event is 0.

The probability of a certain event is 1.

For independent events, the occurrence of one does not change the probability of the other.`,
            [
                "P(A) = Number of Favourable Outcomes / Total Outcomes",
                "P(A') = 1 - P(A)",
                "P(A and B) = P(A)P(B) for independent events",
                "P(A|B) = P(A and B) / P(B)"
            ]
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Permutations and Combinations",
            [
                "permutation",
                "combination",
                "factorial",
                "arrangements",
                "selection"
            ],
            `Permutations count arrangements where order matters.

Combinations count selections where order does not matter.`,
            [
                "n! = n(n-1)(n-2)...1",
                "nPr = n!/(n-r)!",
                "nCr = n!/[r!(n-r)!]"
            ]
        ),

        knowledge(
            "mathematics",
            "grade12",
            "Financial Mathematics",
            [
                "financial mathematics",
                "simple interest",
                "compound interest",
                "depreciation",
                "growth"
            ],
            `Financial mathematics applies mathematics to interest, growth, depreciation and investments.`,
            [
                "Simple Interest: A = P(1 + in)",
                "Compound Interest: A = P(1+i)^n",
                "Depreciation: A = P(1-i)^n"
            ]
        ),

        /* =========================
           UNIVERSITY MATHEMATICS
        ========================= */

        knowledge(
            "mathematics",
            "university",
            "Limits",
            [
                "limit",
                "limits",
                "continuity",
                "calculus"
            ],
            `A limit describes the value a function approaches as its input approaches a particular value.

Limits form the foundation of calculus.

A function is continuous at a point when the function value exists, the limit exists and the limit equals the function value.`
        ),

        knowledge(
            "mathematics",
            "university",
            "Differentiation",
            [
                "differentiation",
                "derivative",
                "differentiate",
                "derivative rules",
                "calculus"
            ],
            `Differentiation measures instantaneous rate of change.

The derivative can represent the gradient of a curve.

Common rules include the power rule, product rule, quotient rule and chain rule.`,
            [
                "d/dx[x^n] = nx^(n-1)",
                "d/dx[c] = 0",
                "d/dx[cf(x)] = cf'(x)",
                "Product Rule: (fg)' = f'g + fg'",
                "Quotient Rule: (f/g)' = (f'g - fg')/g²",
                "Chain Rule: d/dx f(g(x)) = f'(g(x))g'(x)"
            ]
        ),

        knowledge(
            "mathematics",
            "university",
            "Stationary Points",
            [
                "stationary point",
                "turning point",
                "maximum",
                "minimum",
                "second derivative"
            ],
            `Stationary points occur where the first derivative equals zero.

A second derivative can help classify a stationary point.

If f''(x) > 0 at a stationary point, it is a local minimum under the standard test.

If f''(x) < 0, it is a local maximum.`,
            [
                "Stationary Point: f'(x) = 0"
            ]
        ),

        knowledge(
            "mathematics",
            "university",
            "Integration",
            [
                "integration",
                "integral",
                "antiderivative",
                "area under curve"
            ],
            `Integration is the reverse process of differentiation.

An indefinite integral gives a family of antiderivatives plus a constant.

A definite integral can represent accumulated quantity or signed area.`,
            [
                "∫x^n dx = x^(n+1)/(n+1) + C, n ≠ -1",
                "∫a dx = ax + C",
                "Area = ∫[a,b] f(x) dx"
            ]
        ),

        knowledge(
            "mathematics",
            "university",
            "Differential Equations",
            [
                "differential equation",
                "ode",
                "ordinary differential equation",
                "first order",
                "second order"
            ],
            `A differential equation relates an unknown function to its derivatives.

First-order differential equations contain a first derivative as the highest derivative.

Solutions may involve separation of variables, integrating factors or other methods depending on the equation.`
        ),

        knowledge(
            "mathematics",
            "university",
            "Multivariable Calculus",
            [
                "multivariable calculus",
                "partial derivative",
                "gradient",
                "double integral",
                "multiple variables"
            ],
            `Multivariable calculus extends calculus to functions of several variables.

Partial derivatives measure the change in one variable while holding other variables constant.

The gradient is a vector of partial derivatives and points in the direction of greatest increase.`,
            [
                "Gradient: ∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z)"
            ]
        ),

        knowledge(
            "mathematics",
            "university",
            "Matrices",
            [
                "matrix",
                "matrices",
                "determinant",
                "inverse matrix",
                "matrix multiplication"
            ],
            `Matrices are rectangular arrays of numbers.

Matrix operations include addition, scalar multiplication and multiplication.

A square matrix may have a determinant.

An invertible matrix has an inverse.`,
            [
                "For 2×2 matrix [[a,b],[c,d]], determinant = ad - bc",
                "A⁻¹ = 1/(ad-bc) [[d,-b],[-c,a]] when determinant ≠ 0"
            ]
        ),

        knowledge(
            "mathematics",
            "university",
            "Linear Algebra",
            [
                "linear algebra",
                "vector space",
                "basis",
                "dimension",
                "linear independence",
                "eigenvalue",
                "eigenvector"
            ],
            `Linear algebra studies vectors, vector spaces, linear transformations and systems of linear equations.

A basis is a linearly independent set that spans a vector space.

The dimension is the number of vectors in a basis.

An eigenvector changes only by a scalar factor when a linear transformation is applied.`,
            [
                "Av = λv"
            ]
        ),

        knowledge(
            "mathematics",
            "university",
            "Vectors",
            [
                "vector",
                "vectors",
                "dot product",
                "cross product",
                "magnitude"
            ],
            `Vectors have magnitude and direction.

The dot product produces a scalar.

The cross product in three-dimensional space produces a vector perpendicular to the two input vectors.`,
            [
                "a·b = |a||b|cosθ",
                "|a| = √(a1²+a2²+a3²)"
            ]
        ),

        knowledge(
            "mathematics",
            "university",
            "Complex Numbers",
            [
                "complex numbers",
                "imaginary numbers",
                "complex",
                "i",
                "conjugate"
            ],
            `A complex number has the form a + bi, where i² = -1.

The real part is a.

The imaginary part is b.

The complex conjugate of a + bi is a - bi.`,
            [
                "i² = -1",
                "z = a + bi"
            ]
        ),

        knowledge(
            "mathematics",
            "university",
            "Probability Distributions",
            [
                "probability distribution",
                "random variable",
                "binomial",
                "normal distribution",
                "poisson",
                "expected value"
            ],
            `A random variable assigns numerical values to outcomes of a random experiment.

Discrete random variables take countable values.

Continuous random variables take values over intervals.

Common distributions include binomial, Poisson and normal distributions.`,
            [
                "E(X) = ΣxP(X=x) for a discrete random variable"
            ]
        ),

        knowledge(
            "mathematics",
            "university",
            "Mathematical Statistics",
            [
                "mathematical statistics",
                "estimator",
                "confidence interval",
                "hypothesis testing",
                "p value",
                "sampling"
            ],
            `Mathematical statistics uses probability to make inferences about populations from samples.

Estimation can involve point estimates and interval estimates.

Hypothesis testing compares evidence against a null hypothesis under a specified statistical framework.

A p-value measures how compatible the observed data are with the null hypothesis under the assumptions of the test.`
        ),

        knowledge(
            "mathematics",
            "university",
            "Regression",
            [
                "regression",
                "linear regression",
                "least squares",
                "correlation coefficient",
                "r squared"
            ],
            `Regression models relationships between a dependent variable and one or more explanatory variables.

Simple linear regression can be written as y = a + bx + error.

The least-squares method chooses coefficients to minimise the sum of squared residuals.`,
            [
                "y = a + bx + ε"
            ]
        ),

        knowledge(
            "mathematics",
            "university",
            "Optimisation",
            [
                "optimisation",
                "optimization",
                "objective function",
                "constraints",
                "linear programming",
                "maximum",
                "minimum"
            ],
            `Optimisation seeks the maximum or minimum value of an objective function subject to constraints.

Calculus can be used for unconstrained optimisation.

Linear programming uses linear objective functions and linear constraints.`
        ),

        knowledge(
            "mathematics",
            "university",
            "Numerical Methods",
            [
                "numerical methods",
                "newton raphson",
                "numerical integration",
                "approximation",
                "iteration"
            ],
            `Numerical methods approximate solutions when exact analytical solutions are difficult or unavailable.

Methods include Newton-Raphson for solving equations and numerical integration methods such as the trapezoidal rule.`,
            [
                "Newton-Raphson: x_(n+1) = x_n - f(x_n)/f'(x_n)"
            ]
        ),

        knowledge(
            "mathematics",
            "university",
            "Discrete Mathematics",
            [
                "discrete mathematics",
                "logic",
                "sets",
                "graphs",
                "combinatorics",
                "relations"
            ],
            `Discrete mathematics studies mathematical structures involving distinct or countable objects.

Topics include logic, sets, relations, functions, graph theory, combinatorics and algorithms.`
        ),

        knowledge(
            "mathematics",
            "university",
            "Mathematical Modelling",
            [
                "mathematical modelling",
                "model",
                "modelling",
                "real world mathematics"
            ],
            `Mathematical modelling translates a real-world problem into mathematical relationships.

A model normally involves assumptions, variables, equations, analysis and interpretation.

A useful model should be evaluated against the real-world context and limitations.`
        )

    ];


    /* =========================================================
       COMBINE ALL KNOWLEDGE
    ========================================================= */

    const allKnowledge = [
        ...accountingKnowledge,
        ...economicsKnowledge,
        ...mathematicsKnowledge
    ];


    /* =========================================================
       SUBJECT WORDS
    ========================================================= */

    const subjectWords = {

        accounting: [
            "accounting",
            "account",
            "assets",
            "liabilities",
            "equity",
            "capital",
            "drawings",
            "debit",
            "credit",
            "profit",
            "loss",
            "inventory",
            "stock",
            "debtors",
            "creditors",
            "vat",
            "audit",
            "auditing",
            "tax",
            "ifrs",
            "ias",
            "financial statements",
            "consolidation",
            "subsidiary",
            "associate",
            "goodwill",
            "nci",
            "deferred tax",
            "depreciation",
            "cash flow",
            "lease",
            "revenue",
            "cost",
            "budget",
            "ratio"
        ],

        economics: [
            "economics",
            "scarcity",
            "opportunity cost",
            "demand",
            "supply",
            "equilibrium",
            "elasticity",
            "utility",
            "market",
            "monopoly",
            "oligopoly",
            "competition",
            "inflation",
            "unemployment",
            "gdp",
            "growth",
            "development",
            "fiscal",
            "monetary",
            "repo",
            "interest rate",
            "government",
            "externality",
            "trade",
            "tariff",
            "quota",
            "exchange rate",
            "balance of payments",
            "poverty",
            "globalisation",
            "labour",
            "wages"
        ],

        mathematics: [
            "mathematics",
            "math",
            "algebra",
            "equation",
            "quadratic",
            "linear",
            "factor",
            "function",
            "sequence",
            "series",
            "gradient",
            "slope",
            "geometry",
            "circle",
            "triangle",
            "pythagoras",
            "trigonometry",
            "sin",
            "cos",
            "tan",
            "statistics",
            "mean",
            "median",
            "probability",
            "permutation",
            "combination",
            "calculus",
            "derivative",
            "differentiate",
            "integral",
            "matrix",
            "vector",
            "complex number",
            "differential equation",
            "eigenvalue",
            "regression"
        ]

    };


    /* =========================================================
       TEXT NORMALISATION
    ========================================================= */

    function normalizeText(text) {

        return String(text || "")
            .toLowerCase()
            .replace(/[’']/g, "'")
            .replace(/[^\w\s.+\-*/%=<>^]/g, " ")
            .replace(/\s+/g, " ")
            .trim();

    }


    function tokenize(text) {

        return normalizeText(text)
            .split(/\s+/)
            .filter(Boolean);

    }


    /* =========================================================
       SUBJECT DETECTION
    ========================================================= */

    function detectSubject(question) {

        const text = normalizeText(question);

        let scores = {
            accounting: 0,
            economics: 0,
            mathematics: 0
        };

        Object.keys(subjectWords).forEach(subject => {

            subjectWords[subject].forEach(word => {

                const cleanWord = normalizeText(word);

                if (!cleanWord) return;

                if (text.includes(cleanWord)) {

                    if (cleanWord.includes(" ")) {
                        scores[subject] += 8;
                    } else {
                        scores[subject] += 3;
                    }

                }

            });

        });


        const sorted = Object.entries(scores)
            .sort((a, b) => b[1] - a[1]);

        if (!sorted.length || sorted[0][1] === 0) {
            return null;
        }

        const best = sorted[0];
        const second = sorted[1];

        if (
            best[1] < 4 ||
            (second && best[1] - second[1] < 2)
        ) {
            return null;
        }

        return best[0];

    }


    /* =========================================================
       KNOWLEDGE SEARCH ENGINE
    ========================================================= */

    function searchKnowledge(question, forcedSubject = null) {

        const text = normalizeText(question);
        const tokens = tokenize(question);

        const results = [];

        allKnowledge.forEach(item => {

            if (
                forcedSubject &&
                item.subject !== forcedSubject
            ) {
                return;
            }

            let score = 0;

            const topic = normalizeText(item.topic);

            /* Topic match */

            if (text.includes(topic)) {
                score += 50;
            }

            /* Keyword matching */

            item.keywords.forEach(keyword => {

                const key = normalizeText(keyword);

                if (!key) return;

                if (text.includes(key)) {

                    if (key.includes(" ")) {
                        score += 40;
                    } else {
                        score += 25;
                    }

                }

            });


            /* Related keywords */

            item.relatedKeywords.forEach(keyword => {

                const key = normalizeText(keyword);

                if (text.includes(key)) {
                    score += 12;
                }

            });


            /* Formula words */

            item.formulas.forEach(formula => {

                const formulaWords = tokenize(formula);

                let formulaMatches = 0;

                formulaWords.forEach(word => {

                    if (
                        word.length > 2 &&
                        tokens.includes(word)
                    ) {
                        formulaMatches++;
                    }

                });

                if (formulaMatches >= 2) {
                    score += 15;
                }

            });


            /* Subject relevance */

            if (forcedSubject === item.subject) {
                score += 20;
            }


            /* University words */

            const universityWords = [
                "university",
                "degree",
                "bcom",
                "honours",
                "honors",
                "advanced",
                "ias",
                "ifrs",
                "isa",
                "econometrics",
                "calculus",
                "linear algebra",
                "research"
            ];

            universityWords.forEach(word => {

                if (text.includes(word)) {

                    if (item.level === "university") {
                        score += 12;
                    }

                }

            });


            if (score > 0) {

                results.push({
                    item,
                    score
                });

            }

        });


        results.sort((a, b) => b.score - a.score);

        return results;

    }


    /* =========================================================
       REQUEST TYPE DETECTION
    ========================================================= */

    function isAllInformationRequest(question) {

        const text = normalizeText(question);

        const phrases = [
            "all information",
            "everything about",
            "all about",
            "full information",
            "complete information",
            "teach me everything",
            "give me everything",
            "what do you know about"
        ];

        return phrases.some(phrase =>
            text.includes(phrase)
        );

    }


    function isTopicListRequest(question) {

        const text = normalizeText(question);

        const phrases = [
            "topics",
            "topics covered",
            "what can you teach",
            "what do you know",
            "list topics",
            "show me topics",
            "subjects"
        ];

        return phrases.some(phrase =>
            text.includes(phrase)
        );

    }


    /* =========================================================
       TOPIC TITLE
    ========================================================= */

    function makeTopicTitle(item) {

        if (!item) return "Mastercommerce";

        return item.topic;

    }


    /* =========================================================
       FORMAT KNOWLEDGE
    ========================================================= */

    function formatKnowledge(item) {

        let output = "";

        output += `**${item.topic}**\n\n`;

        output += `${item.information}\n`;

        if (item.formulas.length) {

            output += `\n**Key formulas:**\n`;

            item.formulas.forEach(formula => {
                output += `• ${formula}\n`;
            });

        }

        if (item.rules.length) {

            output += `\n**Important rules:**\n`;

            item.rules.forEach(rule => {
                output += `• ${rule}\n`;
            });

        }

        if (item.examples.length) {

            output += `\n**Example:**\n`;

            item.examples.forEach(example => {
                output += `• ${example}\n`;
            });

        }

        return output.trim();

    }


    /* =========================================================
       TOPIC LIST
    ========================================================= */

    function getTopicList(subject = null) {

        const source = subject
            ? allKnowledge.filter(item => item.subject === subject)
            : allKnowledge;

        const grouped = {};

        source.forEach(item => {

            if (!grouped[item.level]) {
                grouped[item.level] = [];
            }

            grouped[item.level].push(item.topic);

        });


        let output = "";

        if (grouped.grade12) {

            output += "**Grade 12 / School Level**\n\n";

            grouped.grade12.forEach(topic => {
                output += `• ${topic}\n`;
            });

        }

        if (grouped.university) {

            output += "\n**University Level**\n\n";

            grouped.university.forEach(topic => {
                output += `• ${topic}\n`;
            });

        }

        return output.trim();

    }


    /* =========================================================
       SIMPLE CALCULATOR
    ========================================================= */

    function simpleCalculator(question) {

        let text = String(question || "")
            .replace(/,/g, "")
            .trim();

        const calculationMatch = text.match(
            /(?:calculate|what is|solve|evaluate)\s+([0-9+\-*/().%^ ]+)$/i
        );

        if (!calculationMatch) {
            return null;
        }

        let expression = calculationMatch[1]
            .replace(/\^/g, "**")
            .trim();

        if (!/^[0-9+\-*/().%\s*]+$/.test(expression)) {
            return null;
        }

        try {

            const result = Function(
                `"use strict"; return (${expression})`
            )();

            if (
                typeof result === "number" &&
                Number.isFinite(result)
            ) {

                return `The answer is **${result}**.`;

            }

        } catch (error) {
            return null;
        }

        return null;

    }


    /* =========================================================
       GENERAL ANSWERS
    ========================================================= */

    function generalAnswer(question) {

        const text = normalizeText(question);

        if (
            text.includes("hello") ||
            text === "hi" ||
            text.includes("hey")
        ) {

            return `Hello! I'm Mastercommerce.

I can help you study **Accounting, Economics and Mathematics** at Grade 12 and university level.

Ask me something like:

• "Explain IAS 28"
• "How do I calculate GDP?"
• "Explain quadratic equations"
• "What is deferred tax?"
• "Teach me price elasticity"
• "How do I calculate an integral?"`;

        }


        if (
            text.includes("who are you") ||
            text.includes("what are you")
        ) {

            return `I'm **Mastercommerce**, an educational learning platform created by **PD | Web & App Development**.

I am designed to help with Accounting, Economics and Mathematics from school level through university-level topics.`;

        }


        if (
            text.includes("developer") ||
            text.includes("who made you") ||
            text.includes("who created you")
        ) {

            return `Mastercommerce was developed by **PD | Web & App Development**.

Founder: **Phungo Dembe Vusani**

Location: **Limpopo, South Africa**

Education: **University of Venda, BCom in Accounting**`;

        }


        if (
            text.includes("what subjects") ||
            text.includes("which subjects")
        ) {

            return `Mastercommerce currently focuses on:

• **Accounting**
• **Economics**
• **Mathematics**

Each subject contains both school-level and university-level knowledge.`;

        }


        return null;

    }


    /* =========================================================
       ANSWER GENERATOR
    ========================================================= */

    function generateAnswer(question) {

        const calculatorAnswer = simpleCalculator(question);

        if (calculatorAnswer) {
            return {
                answer: calculatorAnswer,
                subject: "mathematics",
                topic: "Calculation"
            };
        }


        const general = generalAnswer(question);

        if (general) {

            return {
                answer: general,
                subject: null,
                topic: null
            };

        }


        const detectedSubject = detectSubject(question);


        /* Topic list */

        if (isTopicListRequest(question)) {

            if (detectedSubject) {

                return {
                    answer:
                        `Here are the topics I currently have in **${detectedSubject}**:\n\n` +
                        getTopicList(detectedSubject),
                    subject: detectedSubject,
                    topic: "Topic List"
                };

            }

            return {
                answer:
                    `Mastercommerce covers **Accounting, Economics and Mathematics**.

**Accounting:**\n` +
                    getTopicList("accounting") +
                    `\n\n**Economics:**\n` +
                    getTopicList("economics") +
                    `\n\n**Mathematics:**\n` +
                    getTopicList("mathematics"),
                subject: null,
                topic: "Topic List"
            };

        }


        /* Search knowledge */

        const results = searchKnowledge(
            question,
            detectedSubject
        );


        if (!results.length) {

            return {
                answer:
                    `I'm not able to find that in my current knowledge.

Can you please repeat your question in a clear and understandable way?

For example:

• "Explain IAS 28 associates."
• "What is price elasticity of demand?"
• "Explain quadratic equations."
• "Calculate the current ratio."
• "What is GDP?"
• "Explain differentiation."`,
                subject: detectedSubject,
                topic: null
            };

        }


        const best = results[0];


        /*
         * If the top result is weak, do not randomly
         * pretend that another topic is correct.
         */

        if (best.score < 20) {

            return {
                answer:
                    `I think your question may be related to **${detectedSubject || "one of my subjects"}**, but I don't have enough information to confidently identify the exact topic.

Try including the key term.

For example:

• "IAS 16 depreciation"
• "PED elasticity"
• "quadratic formula"
• "deferred tax"
• "GDP per capita"`,
                subject: detectedSubject,
                topic: null
            };

        }


        /*
         * Multiple closely related results:
         * combine the strongest few when appropriate.
         */

        const selected = results
            .filter(result =>
                result.score >= best.score * 0.55
            )
            .slice(0, 3);


        let answer = "";

        if (selected.length === 1) {

            answer = formatKnowledge(selected[0].item);

        } else {

            answer = selected
                .map(result =>
                    formatKnowledge(result.item)
                )
                .join("\n\n---\n\n");

        }


        return {
            answer,
            subject: best.item.subject,
            topic: best.item.topic
        };

    }


    /* =========================================================
       MARKDOWN-LIKE FORMATTER
    ========================================================= */

    function escapeHTML(text) {

        return String(text)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    function formatMessage(text) {

        let html = escapeHTML(text);

        html = html.replace(
            /\*\*(.*?)\*\*/g,
            "<strong>$1</strong>"
        );

        html = html.replace(
            /^• (.*)$/gm,
            "<div class=\"message-bullet\">• $1</div>"
        );

        html = html.replace(
            /\n/g,
            "<br>"
        );

        return html;

    }


    /* =========================================================
       MESSAGE CREATION
    ========================================================= */

    function createMessage(text, sender = "assistant") {

        const message = document.createElement("div");

        message.className =
            `message ${sender === "user" ? "user-message" : "assistant-message"}`;

        const content = document.createElement("div");

        content.className = "message-content";

        content.innerHTML =
            sender === "user"
                ? formatMessage(text)
                : formatMessage(text);

        message.appendChild(content);

        chatArea.appendChild(message);

        requestAnimationFrame(() => {

            message.scrollIntoView({
                behavior: document.body.classList.contains("reduced-motion")
                    ? "auto"
                    : "smooth",
                block: "end"
            });

        });

        return message;

    }


    /* =========================================================
       THINKING INDICATOR
    ========================================================= */

    function createThinkingMessage() {

        const message = document.createElement("div");

        message.className =
            "message assistant-message thinking-message";

        message.innerHTML = `
            <div class="message-content">
                <span class="thinking-dot"></span>
                <span class="thinking-dot"></span>
                <span class="thinking-dot"></span>
            </div>
        `;

        chatArea.appendChild(message);

        requestAnimationFrame(() => {

            message.scrollIntoView({
                behavior: "smooth",
                block: "end"
            });

        });

        return message;

    }


    /* =========================================================
       SEND QUESTION
    ========================================================= */

    function sendQuestion() {

        const question = questionInput.value.trim();

        if (!question) return;

        if (welcomeScreen) {
            welcomeScreen.style.display = "none";
        }

        createMessage(question, "user");

        questionInput.value = "";

        questionInput.style.height = "auto";

        const thinking = createThinkingMessage();

        const result = generateAnswer(question);

        lastConversationState = {
            subject: result.subject,
            topic: result.topic,
            question
        };


        setTimeout(() => {

            thinking.remove();

            createMessage(
                result.answer,
                "assistant"
            );

        }, 300);

    }


    /* =========================================================
       INPUT AUTO HEIGHT
    ========================================================= */

    function resizeInput() {

        if (!questionInput) return;

        questionInput.style.height = "auto";

        questionInput.style.height =
            Math.min(
                questionInput.scrollHeight,
                180
            ) + "px";

    }


    if (questionInput) {

        questionInput.addEventListener(
            "input",
            resizeInput
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

        sidebar?.classList.add("open");
        sidebarOverlay?.classList.add("show");

    }


    function closeSidebarMenu() {

        sidebar?.classList.remove("open");
        sidebarOverlay?.classList.remove("show");

    }


    menuButton?.addEventListener(
        "click",
        openSidebar
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

    function showHome() {

        closeSidebarMenu();

        chatArea.innerHTML = "";

        if (welcomeScreen) {

            chatArea.appendChild(welcomeScreen);

            welcomeScreen.style.display = "flex";

        }

        lastConversationState = {
            subject: null,
            topic: null,
            question: null
        };

        questionInput.value = "";

    }


    homeButton?.addEventListener(
        "click",
        showHome
    );


    /* =========================================================
       NEW CHAT
    ========================================================= */

    newChatButton?.addEventListener(
        "click",
        () => {

            closeSidebarMenu();

            chatArea.innerHTML = "";

            const welcome = document.createElement("div");

            welcome.id = "welcomeScreen";
            welcome.className = "welcome-screen";

            welcome.innerHTML = `
                <div class="welcome-content">

                    <div class="welcome-logo">M</div>

                    <h1>What would you like to learn?</h1>

                    <p>
                        Ask a question about Accounting, Economics or Mathematics.
                    </p>

                    <div class="subject-cards">

                        <div class="subject-card">
                            <div class="subject-letter">A</div>
                            <div>
                                <h3>Accounting</h3>
                                <p>
                                    Financial accounting, management accounting,
                                    tax, auditing, IFRS and calculations.
                                </p>
                            </div>
                        </div>

                        <div class="subject-card">
                            <div class="subject-letter">E</div>
                            <div>
                                <h3>Economics</h3>
                                <p>
                                    Microeconomics, macroeconomics, policies,
                                    markets, essays and calculations.
                                </p>
                            </div>
                        </div>

                        <div class="subject-card">
                            <div class="subject-letter">M</div>
                            <div>
                                <h3>Mathematics</h3>
                                <p>
                                    Algebra, functions, statistics, probability,
                                    calculus and problem solving.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            `;

            chatArea.appendChild(welcome);

            lastConversationState = {
                subject: null,
                topic: null,
                question: null
            };

            questionInput.value = "";

            questionInput.focus();

        }
    );


    /* =========================================================
       CLEAR CHAT
    ========================================================= */

    clearChatButton?.addEventListener(
        "click",
        () => {

            closeSidebarMenu();

            chatArea.innerHTML = "";

            lastConversationState = {
                subject: null,
                topic: null,
                question: null
            };

            questionInput.value = "";

            questionInput.focus();

        }
    );


    /* =========================================================
       PLUS MENU
    ========================================================= */

    function togglePlusMenu() {

        if (!plusMenu) return;

        const isOpen =
            plusMenu.classList.contains("show");

        plusMenu.classList.toggle(
            "show",
            !isOpen
        );

        plusMenu.setAttribute(
            "aria-hidden",
            String(isOpen)
        );

        plusButton?.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

    }


    plusButton?.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            togglePlusMenu();

        }
    );


    document.querySelectorAll(".plus-option")
        .forEach(option => {

            option.addEventListener(
                "click",
                () => {

                    if (plusMenu) {

                        plusMenu.classList.remove("show");

                        plusMenu.setAttribute(
                            "aria-hidden",
                            "true"
                        );

                    }

                    plusButton?.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    if (featureToast) {

                        featureToast.classList.add("show");

                        clearTimeout(
                            featureToast._timer
                        );

                        featureToast._timer =
                            setTimeout(() => {

                                featureToast.classList.remove(
                                    "show"
                                );

                            }, 2200);

                    }

                }
            );

        });


    document.addEventListener(
        "click",
        event => {

            if (
                plusMenu &&
                !plusMenu.contains(event.target) &&
                !plusButton?.contains(event.target)
            ) {

                plusMenu.classList.remove("show");

                plusMenu.setAttribute(
                    "aria-hidden",
                    "true"
                );

                plusButton?.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    /* =========================================================
       ABOUT MODAL
    ========================================================= */

    function openModal(modal) {

        modal?.classList.add("show");

    }


    function closeModal(modal) {

        modal?.classList.remove("show");

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
        ".modal-close"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const id =
                    button.dataset.close;

                closeModal(
                    document.getElementById(id)
                );

            }
        );

    });


    [aboutModal, settingsModal]
        .forEach(modal => {

            modal?.addEventListener(
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

                closeModal(aboutModal);

                closeModal(settingsModal);

                plusMenu?.classList.remove(
                    "show"
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

        } catch (error) {}

    }


    function applySettings(settings) {

        const body = document.body;

        body.classList.remove(
            "theme-light",
            "theme-dark",
            "background-white",
            "background-gray",
            "background-warm",
            "background-blue",
            "background-green",
            "background-lavender",
            "font-small",
            "font-medium",
            "font-large",
            "reduced-motion"
        );


        body.classList.add(
            settings.theme === "dark"
                ? "theme-dark"
                : "theme-light"
        );


        body.classList.add(
            `background-${settings.background}`
        );


        body.classList.add(
            `font-${settings.font}`
        );


        if (settings.reducedMotion) {

            body.classList.add(
                "reduced-motion"
            );

        }


        if (questionInput) {

            /*
             * Prevent iOS Safari from zooming the input.
             */

            questionInput.style.fontSize =
                "16px";

        }


        const metaTheme =
            document.querySelector(
                'meta[name="theme-color"]'
            );

        if (metaTheme) {

            metaTheme.setAttribute(
                "content",
                settings.theme === "dark"
                    ? "#111111"
                    : "#ffffff"
            );

        }

    }


    function loadSettings() {

        applySettings(
            getSettings()
        );

    }


    document.querySelectorAll(
        "[data-theme]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const settings =
                    getSettings();

                settings.theme =
                    button.dataset.theme;

                saveSettings(settings);

                applySettings(settings);

            }
        );

    });


    document.querySelectorAll(
        "[data-background]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const settings =
                    getSettings();

                settings.background =
                    button.dataset.background;

                saveSettings(settings);

                applySettings(settings);

            }
        );

    });


    document.querySelectorAll(
        "[data-font]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const settings =
                    getSettings();

                settings.font =
                    button.dataset.font;

                saveSettings(settings);

                applySettings(settings);

            }
        );

    });


    motionButton?.addEventListener(
        "click",
        () => {

            const settings =
                getSettings();

            settings.reducedMotion =
                !settings.reducedMotion;

            saveSettings(settings);

            applySettings(settings);

        }
    );


    resetSettingsButton?.addEventListener(
        "click",
        () => {

            saveSettings({
                ...defaultSettings
            });

            applySettings({
                ...defaultSettings
            });

        }
    );


    /* =========================================================
       MOBILE ZOOM PROTECTION
    ========================================================= */

    if (questionInput) {

        questionInput.addEventListener(
            "focus",
            () => {

                questionInput.style.fontSize =
                    "16px";

            }
        );

    }


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
       FOLLOW-UP QUESTION HANDLING
    ========================================================= */

    function expandFollowUp(question) {

        if (!lastConversationState.subject) {
            return question;
        }

        const text = normalizeText(question);

        const followUpWords = [
            "this",
            "that",
            "it",
            "same",
            "example",
            "another example",
            "explain more",
            "more detail",
            "why",
            "how"
        ];

        const isFollowUp =
            followUpWords.some(word =>
                text === word ||
                text.includes(word)
            );


        if (
            isFollowUp &&
            lastConversationState.topic
        ) {

            return `${lastConversationState.topic} ${question}`;

        }

        return question;

    }


    const originalGenerateAnswer =
        generateAnswer;


    /*
     * Keep the main function available while allowing
     * short follow-up questions to use the previous topic.
     */

    function processQuestion(question) {

        const expanded =
            expandFollowUp(question);

        return originalGenerateAnswer(
            expanded
        );

    }


    /*
     * Replace sendQuestion behaviour for follow-ups.
     */

    function sendQuestionWithContext() {

        const question =
            questionInput.value.trim();

        if (!question) return;


        if (welcomeScreen) {
            welcomeScreen.style.display = "none";
        }


        createMessage(
            question,
            "user"
        );


        questionInput.value = "";

        questionInput.style.height =
            "auto";


        const thinking =
            createThinkingMessage();


        const result =
            processQuestion(question);


        lastConversationState = {
            subject: result.subject,
            topic: result.topic,
            question
        };


        setTimeout(() => {

            thinking.remove();

            createMessage(
                result.answer,
                "assistant"
            );

        }, 300);

    }


    /*
     * Replace event listener without changing the
     * rest of the application architecture.
     */

    if (sendButton) {

        sendButton.onclick =
            sendQuestionWithContext;

    }


    if (questionInput) {

        questionInput.onkeydown =
            event => {

                if (
                    event.key === "Enter" &&
                    !event.shiftKey
                ) {

                    event.preventDefault();

                    sendQuestionWithContext();

                }

            };

    }


    /* =========================================================
       KNOWLEDGE SEARCH DEBUG API
       Useful during development.
       Does not affect normal UI.
    ========================================================= */

    window.MastercommerceKnowledge = {

        all: allKnowledge,

        search(question) {

            return searchKnowledge(
                question
            );

        },

        detectSubject(question) {

            return detectSubject(
                question
            );

        },

        topics(subject = null) {

            return getTopicList(
                subject
            );

        }

    };


    /* =========================================================
       INITIALISATION
    ========================================================= */

    loadSettings();

    if (questionInput) {

        questionInput.style.fontSize =
            "16px";

        questionInput.focus();

    }

});
