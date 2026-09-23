document.addEventListener("DOMContentLoaded", () => {

    if (window.mastercommerceLoaded) return;
    window.mastercommerceLoaded = true;


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

        knowledge(
            "Accounting",
            "High School + University",
            "Accounting Equation",
            [
                "accounting equation",
                "assets",
                "liabilities",
                "equity",
                "capital",
                "accounting formula"
            ],
            `The accounting equation explains the relationship between what a business owns, what it owes and the owner's interest in the business.

Assets are resources controlled by the business.

Liabilities are obligations owed to outside parties.

Equity is the owner's residual interest after liabilities are deducted from assets.`,
            [
                "Assets = Equity + Liabilities",
                "Equity = Assets - Liabilities"
            ],
            [
                "If assets are R500 000 and liabilities are R200 000, equity is R300 000."
            ],
            [
                "Every transaction must keep the accounting equation balanced.",
                "A transaction can affect one or more elements but total assets must still equal equity plus liabilities."
            ]
        ),


        knowledge(
            "Accounting",
            "High School",
            "Assets, Liabilities and Equity",
            [
                "assets",
                "liabilities",
                "equity",
                "current assets",
                "non current assets",
                "current liabilities",
                "non current liabilities"
            ],
            `Assets are resources controlled by the business.

Current assets are normally expected to be converted into cash, sold or consumed within the normal operating cycle or within 12 months.

Examples include inventory, trade receivables and cash.

Non-current assets are long-term resources such as property, equipment and vehicles.

Current liabilities are obligations normally settled within 12 months, such as trade payables.

Non-current liabilities are longer-term obligations such as long-term loans.`,
            [],
            [
                "Inventory is normally a current asset.",
                "A long-term bank loan is normally a non-current liability."
            ]
        ),


        knowledge(
            "Accounting",
            "High School",
            "Capital, Drawings, Income and Expenses",
            [
                "capital",
                "drawings",
                "income",
                "expenses",
                "owner",
                "equity"
            ],
            `Capital is the owner's investment in the business.

Drawings are amounts or assets taken by the owner for personal use.

Income increases equity because it increases the resources or economic benefits of the business.

Expenses reduce equity because resources are consumed in earning income.`,
            [
                "Closing Equity = Opening Capital + Profit - Drawings"
            ],
            [
                "Opening capital R100 000 + profit R30 000 - drawings R10 000 = closing equity R120 000."
            ]
        ),


        knowledge(
            "Accounting",
            "High School",
            "Debit and Credit Rules",
            [
                "debit",
                "credit",
                "debit credit",
                "double entry",
                "accounting entries"
            ],
            `Accounting uses double-entry bookkeeping. Every transaction has at least one debit and one credit of equal value.

Assets normally increase on the debit side and decrease on the credit side.

Expenses normally increase on the debit side.

Liabilities, equity and income normally increase on the credit side.`,
            [],
            [
                "Buying equipment for cash increases equipment by debit and decreases cash by credit."
            ],
            [
                "Total debits must equal total credits."
            ]
        ),


        knowledge(
            "Accounting",
            "High School",
            "Gross Profit and Net Profit",
            [
                "gross profit",
                "net profit",
                "gross loss",
                "net loss",
                "profit"
            ],
            `Gross profit is the profit made from trading before operating expenses and other income or expenses.

Net profit is the final profit after operating and other expenses have been considered.`,
            [
                "Gross Profit = Sales - Cost of Sales",
                "Net Profit = Gross Profit + Other Income - Expenses"
            ],
            [
                "Sales R500 000 - cost of sales R300 000 = gross profit R200 000."
            ]
        ),


        knowledge(
            "Accounting",
            "High School",
            "Cost of Sales",
            [
                "cost of sales",
                "cost of goods sold",
                "opening stock",
                "closing stock",
                "purchases",
                "carriage on purchases"
            ],
            `Cost of sales measures the cost of inventory that was sold during the accounting period.`,
            [
                "Cost of Sales = Opening Inventory + Net Purchases - Closing Inventory",
                "Net Purchases = Purchases + Carriage on Purchases - Returns Outwards"
            ],
            [
                "Opening inventory R100 000 + purchases R500 000 - closing inventory R150 000 = cost of sales R450 000."
            ]
        ),


        knowledge(
            "Accounting",
            "High School",
            "Financial Statements",
            [
                "financial statements",
                "income statement",
                "statement of financial position",
                "balance sheet",
                "cash flow statement"
            ],
            `Financial statements communicate financial information about a business.

The statement of profit or loss reports income, expenses and profit or loss.

The statement of financial position reports assets, liabilities and equity at a specific date.

The cash flow statement explains movements in cash and cash equivalents.

Notes provide additional information needed to understand the financial statements.`
        ),


        knowledge(
            "Accounting",
            "High School",
            "Accounting Ratios",
            [
                "ratios",
                "accounting ratios",
                "profitability ratios",
                "liquidity ratios",
                "solvency ratios",
                "financial ratios"
            ],
            `Accounting ratios are used to analyse profitability, liquidity, solvency and efficiency.

Profitability ratios show how effectively a business generates profit.

Liquidity ratios show the ability to meet short-term obligations.

Solvency ratios show the long-term financial position.

Efficiency ratios show how effectively resources are managed.`,
            [
                "Gross Profit % = Gross Profit / Sales × 100",
                "Net Profit % = Net Profit / Sales × 100",
                "Current Ratio = Current Assets : Current Liabilities",
                "Acid Test Ratio = (Current Assets - Inventory) : Current Liabilities",
                "Solvency Ratio = Assets : Liabilities",
                "Debt Ratio = Liabilities / Assets × 100",
                "Debt-to-Equity = Liabilities / Equity"
            ]
        ),


        knowledge(
            "Accounting",
            "High School",
            "Inventory Ratios",
            [
                "inventory turnover",
                "inventory holding",
                "stock turnover",
                "stock holding",
                "inventory ratio"
            ],
            `Inventory ratios measure how efficiently inventory is managed.

A high inventory turnover generally means inventory is being sold relatively quickly, while a low turnover can indicate slower movement. Interpretation depends on the industry and business model.`,
            [
                "Inventory Turnover = Cost of Sales / Average Inventory",
                "Inventory Holding Period = Average Inventory / Cost of Sales × 365",
                "Average Inventory = (Opening Inventory + Closing Inventory) / 2"
            ],
            [
                "Cost of sales R600 000 and average inventory R100 000 gives turnover of 6 times."
            ]
        ),


        knowledge(
            "Accounting",
            "High School",
            "Debtors and Creditors Ratios",
            [
                "debtors collection",
                "receivables collection",
                "creditors payment",
                "payables payment",
                "collection period",
                "payment period"
            ],
            `Debtors or trade receivables collection measures approximately how long credit customers take to pay.

Creditors or trade payables payment measures approximately how long the business takes to pay suppliers.`,
            [
                "Debtors Collection Period = Average Receivables / Credit Sales × 365",
                "Creditors Payment Period = Average Payables / Credit Purchases × 365"
            ]
        ),


        knowledge(
            "Accounting",
            "High School",
            "VAT",
            [
                "vat",
                "value added tax",
                "input vat",
                "output vat",
                "vat calculation"
            ],
            `VAT is a consumption tax charged on taxable supplies.

Input VAT is VAT paid by the business on qualifying purchases.

Output VAT is VAT charged by the business on taxable sales.

The VAT payable or refundable is determined by comparing output VAT with allowable input VAT.

For South African tax calculations, use the applicable VAT rate for the relevant tax period.`,
            [
                "VAT amount = Taxable amount × VAT rate",
                "VAT-inclusive amount = VAT-exclusive amount × (1 + VAT rate)",
                "VAT-exclusive amount = VAT-inclusive amount / (1 + VAT rate)"
            ]
        ),


        knowledge(
            "Accounting",
            "High School",
            "Bank Reconciliation",
            [
                "bank reconciliation",
                "bank statement",
                "cash book",
                "outstanding cheque",
                "deposit in transit",
                "bank charges"
            ],
            `A bank reconciliation compares the business cash records with the bank statement.

Differences can arise from outstanding cheques, deposits not yet reflected by the bank, bank charges, direct deposits, interest and errors.

The purpose is to identify and explain differences and update the accounting records where necessary.`
        ),


        knowledge(
            "Accounting",
            "High School",
            "Cash Budget",
            [
                "cash budget",
                "cash receipts",
                "cash payments",
                "cash surplus",
                "cash deficit"
            ],
            `A cash budget estimates expected cash receipts and cash payments over a future period.

It helps a business identify possible cash shortages and plan financing or investment.`,
            [
                "Closing Cash = Opening Cash + Cash Receipts - Cash Payments"
            ]
        ),


        knowledge(
            "Accounting",
            "High School",
            "Depreciation",
            [
                "depreciation",
                "straight line depreciation",
                "diminishing balance",
                "carrying amount",
                "residual value",
                "useful life"
            ],
            `Depreciation is the systematic allocation of the depreciable amount of a depreciable asset over its useful life.

The straight-line method normally allocates an equal amount each period.

The diminishing-balance method applies a fixed percentage to the carrying amount.`,
            [
                "Straight-line Depreciation = (Cost - Residual Value) / Useful Life",
                "Carrying Amount = Cost - Accumulated Depreciation - Accumulated Impairment"
            ],
            [
                "Cost R850 000, residual value R50 000 and useful life 8 years gives annual depreciation of R100 000."
            ]
        ),


        knowledge(
            "Accounting",
            "High School",
            "Accruals and Prepayments",
            [
                "accrual",
                "accrued expense",
                "prepayment",
                "prepaid expense",
                "accrued income",
                "income received in advance"
            ],
            `An accrual recognises income or expenses when earned or incurred even if cash has not yet been received or paid.

A prepayment occurs when cash is paid before the related expense is recognised.

Accrued income is income earned but not yet received.

Income received in advance is cash received before the income is earned.`
        ),


        knowledge(
            "Accounting",
            "High School",
            "Accounting Journals",
            [
                "journals",
                "crj",
                "cpj",
                "dj",
                "daj",
                "cj",
                "caj",
                "general journal"
            ],
            `Common accounting journals include the Cash Receipts Journal, Cash Payments Journal, Debtors Journal, Debtors Allowances Journal, Creditors Journal, Creditors Allowances Journal and General Journal.

The correct journal depends on the nature of the transaction.`
        ),


        knowledge(
            "Accounting",
            "High School",
            "Discounts",
            [
                "trade discount",
                "settlement discount",
                "cash discount",
                "discount allowed",
                "discount received"
            ],
            `A trade discount reduces the listed selling price and is normally not recorded separately in the accounting records.

A settlement discount encourages early payment.

Discount allowed is generally an expense for the seller.

Discount received is generally income or a reduction in purchase cost for the buyer.`
        ),


        knowledge(
            "Accounting",
            "High School",
            "Accounting Cycle",
            [
                "accounting cycle",
                "source documents",
                "journals",
                "ledger",
                "trial balance",
                "financial statements"
            ],
            `The accounting cycle generally begins with source documents and transactions.

Transactions are analysed, recorded in journals, posted to ledgers, summarised in a trial balance, adjusted where necessary and used to prepare financial statements.`
        ),


        knowledge(
            "Accounting",
            "High School",
            "Trial Balance",
            [
                "trial balance",
                "trial balance errors",
                "debit balance",
                "credit balance"
            ],
            `A trial balance lists ledger account balances to check whether total debit balances equal total credit balances.

A balanced trial balance does not prove that every accounting error has been avoided. Some errors do not affect the equality of the trial balance.`
        ),


        knowledge(
            "Accounting",
            "High School",
            "Internal Control",
            [
                "internal control",
                "control",
                "fraud",
                "segregation of duties",
                "authorisation",
                "internal controls"
            ],
            `Internal controls are procedures designed to protect assets, improve reliable reporting, prevent and detect errors and fraud, and support efficient operations.

Examples include segregation of duties, authorisation, physical controls, reconciliations, independent checks and access controls.`
        ),


        knowledge(
            "Accounting",
            "High School",
            "Break-even Analysis",
            [
                "break even",
                "break-even",
                "contribution",
                "fixed cost",
                "variable cost",
                "margin of safety"
            ],
            `Break-even analysis identifies the level of activity where total revenue equals total costs.

Contribution is the amount remaining after variable costs and is used to cover fixed costs and then generate profit.`,
            [
                "Contribution per Unit = Selling Price - Variable Cost per Unit",
                "Break-even Units = Fixed Costs / Contribution per Unit",
                "Profit = Total Contribution - Fixed Costs",
                "Margin of Safety = Actual Sales - Break-even Sales"
            ],
            [
                "If fixed costs are R100 000 and contribution per unit is R50, break-even is 2 000 units."
            ]
        ),


        /* =========================
           UNIVERSITY ACCOUNTING
        ========================= */

        knowledge(
            "Accounting",
            "University",
            "Conceptual Framework",
            [
                "conceptual framework",
                "qualitative characteristics",
                "asset definition",
                "liability definition",
                "income definition",
                "expense definition",
                "relevance",
                "faithful representation"
            ],
            `The Conceptual Framework provides the concepts underlying financial reporting.

Useful financial information should be relevant and faithfully represent what it purports to represent.

Enhancing qualitative characteristics include comparability, verifiability, timeliness and understandability.

An asset is a present economic resource controlled by the entity as a result of past events.

A liability is a present obligation of the entity to transfer an economic resource as a result of past events.

Income increases assets or decreases liabilities in ways that increase equity, excluding owner contributions.

Expenses decrease assets or increase liabilities in ways that decrease equity, excluding distributions to owners.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 1 and IFRS 18",
            [
                "ias 1",
                "presentation of financial statements",
                "ifrs 18",
                "operating profit",
                "management defined performance measures"
            ],
            `IAS 1 contains requirements for presentation of financial statements.

IFRS 18 replaces IAS 1 for annual reporting periods beginning on or after 1 January 2027, with early application permitted.

IFRS 18 introduces defined subtotals including operating profit and profit before financing and income taxes, together with enhanced requirements for aggregation, disaggregation and management-defined performance measures.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 2 - Inventories",
            [
                "ias 2",
                "inventories",
                "inventory",
                "net realisable value",
                "nrv",
                "fifo",
                "weighted average"
            ],
            `IAS 2 requires inventories to be measured at the lower of cost and net realisable value.

Cost includes purchase costs, conversion costs and other costs incurred in bringing inventories to their present location and condition.

NRV is the estimated selling price less estimated costs of completion and costs necessary to make the sale.`,
            [
                "NRV = Estimated Selling Price - Costs of Completion - Selling Costs",
                "Inventory carrying amount = Lower of Cost and NRV"
            ],
            [
                "Cost R900 000 and NRV R820 000 means inventory is measured at R820 000 and the write-down is R80 000."
            ]
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 7 - Cash Flows",
            [
                "ias 7",
                "cash flow",
                "operating activities",
                "investing activities",
                "financing activities",
                "cash equivalents"
            ],
            `IAS 7 classifies cash flows into operating, investing and financing activities.

Operating activities relate to the entity's main revenue-producing activities.

Investing activities generally relate to acquiring and disposing of long-term assets and investments.

Financing activities relate to changes in contributed equity and borrowings.

Cash equivalents are short-term, highly liquid investments that are readily convertible to known amounts of cash and subject to insignificant risk of changes in value.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 8 - Accounting Policies, Estimates and Errors",
            [
                "ias 8",
                "accounting policies",
                "accounting estimates",
                "prior period errors",
                "retrospective",
                "prospective"
            ],
            `Changes in accounting policies are generally applied retrospectively unless a standard provides specific transition requirements or retrospective application is impracticable.

Changes in accounting estimates are generally recognised prospectively.

Material prior-period errors are corrected retrospectively by restating comparative amounts and opening balances where required.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 10 - Events After Reporting Period",
            [
                "ias 10",
                "events after reporting period",
                "adjusting event",
                "non adjusting event"
            ],
            `IAS 10 distinguishes adjusting events from non-adjusting events.

An adjusting event provides evidence of conditions that existed at the end of the reporting period.

A non-adjusting event indicates conditions arising after the reporting period.

Material non-adjusting events may require disclosure of their nature and estimated financial effect.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 12 - Income Taxes and Deferred Tax",
            [
                "ias 12",
                "deferred tax",
                "deferred tax liability",
                "dtl",
                "deferred tax asset",
                "dta",
                "tax base",
                "temporary difference",
                "current tax"
            ],
            `IAS 12 deals with current tax and deferred tax.

Deferred tax arises because the carrying amount of an asset or liability in the financial statements can differ from its tax base.

A taxable temporary difference generally gives rise to a deferred tax liability, subject to exceptions.

A deductible temporary difference can give rise to a deferred tax asset when the recognition requirements are satisfied.

Permanent differences do not create deferred tax because they do not reverse in future periods.`,
            [
                "Temporary Difference = Carrying Amount - Tax Base",
                "Deferred Tax = Temporary Difference × Applicable Tax Rate"
            ],
            [
                "If an asset has a carrying amount of R500 000 and tax base of R350 000, the taxable temporary difference is R150 000. At 27%, the DTL is R40 500."
            ],
            [
                "Taxable temporary difference can create DTL.",
                "Deductible temporary difference can create DTA.",
                "Permanent differences do not create deferred tax."
            ]
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 16 - Property, Plant and Equipment",
            [
                "ias 16",
                "property plant equipment",
                "ppe",
                "depreciation",
                "revaluation",
                "residual value",
                "useful life",
                "carrying amount",
                "disposal"
            ],
            `IAS 16 covers property, plant and equipment.

An item is recognised when future economic benefits are probable and its cost can be measured reliably.

Initial cost can include purchase price and directly attributable costs needed to bring the asset to the location and condition necessary for operation.

After recognition, an entity generally uses either the cost model or revaluation model for a class of PPE, subject to IAS 16 requirements.

Significant components with different useful lives are depreciated separately.`,
            [
                "Depreciable Amount = Cost - Residual Value",
                "Straight-line Depreciation = (Cost - Residual Value) / Useful Life",
                "Carrying Amount = Cost - Accumulated Depreciation - Accumulated Impairment"
            ],
            [
                "Cost of PPE: R800 000 + directly attributable costs R20 000 + R30 000 = R850 000. Training cost of R15 000 is normally expensed."
            ]
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 19 - Employee Benefits",
            [
                "ias 19",
                "employee benefits",
                "defined contribution",
                "defined benefit"
            ],
            `IAS 19 covers employee benefits.

Defined contribution plans involve fixed contributions and generally recognise contribution expense as employees provide service.

Defined benefit plans require measurement of the present obligation and plan assets, with actuarial assumptions and remeasurement requirements.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 20 - Government Grants",
            [
                "ias 20",
                "government grants",
                "government assistance"
            ],
            `IAS 20 deals with accounting for government grants and disclosure of government assistance.

A grant related to income is recognised in profit or loss systematically over the periods in which the entity recognises the related costs.

A grant related to assets may be presented using approaches permitted by the standard, such as deferred income or deduction from the asset's carrying amount.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 21 - Foreign Exchange",
            [
                "ias 21",
                "foreign exchange",
                "functional currency",
                "monetary items",
                "exchange difference",
                "spot rate"
            ],
            `IAS 21 addresses foreign currency transactions and foreign operations.

A foreign currency transaction is initially recorded in the functional currency using the spot exchange rate at the transaction date.

Monetary foreign currency items are generally translated at the closing rate at reporting date.

Exchange differences are generally recognised in profit or loss unless another IFRS requirement applies.`,
            [],
            [
                "A $10 000 receivable recorded at R18/$ is R180 000. If the closing rate is R19/$, it becomes R190 000, creating an R10 000 exchange difference."
            ]
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 23 - Borrowing Costs",
            [
                "ias 23",
                "borrowing costs",
                "qualifying asset",
                "capitalised interest"
            ],
            `IAS 23 requires borrowing costs directly attributable to the acquisition, construction or production of a qualifying asset to be included in the cost of that asset when the recognition criteria are met.

Other borrowing costs are generally recognised as an expense.`,
            [
                "Borrowing Cost = Relevant Borrowings × Applicable Rate × Time"
            ],
            [
                "R5 000 000 borrowed at 10% for a full qualifying period gives R500 000 of borrowing costs before considering specific IAS 23 requirements."
            ]
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 24 - Related Parties",
            [
                "ias 24",
                "related parties",
                "related party disclosure"
            ],
            `IAS 24 requires disclosure of related party relationships, transactions and outstanding balances in specified circumstances.

The purpose is to make users aware that financial position and performance may have been affected by related party relationships and transactions.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 27 - Separate Financial Statements",
            [
                "ias 27",
                "separate financial statements",
                "subsidiary investment"
            ],
            `IAS 27 addresses separate financial statements.

Investments in subsidiaries, associates and joint ventures may be accounted for using methods permitted by IAS 27, including cost, IFRS 9 or the equity method where applicable.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 28 - Associates and Equity Method",
            [
                "ias 28",
                "associate",
                "significant influence",
                "equity method",
                "investment in associate",
                "associate accounting"
            ],
            `IAS 28 deals with investments in associates and joint ventures.

Significant influence is the power to participate in the financial and operating policy decisions of the investee without having control or joint control.

A presumption of significant influence often exists with 20% or more of voting power unless clearly demonstrated otherwise.

Under the equity method, the investment is initially recognised at cost and subsequently adjusted for the investor's share of the investee's post-acquisition profit or loss and other comprehensive income. Dividends received reduce the carrying amount.`,
            [
                "Investor's Share of Profit = Ownership % × Investee Profit",
                "Investor's Share of Loss = Ownership % × Investee Loss"
            ],
            [
                "With 30% ownership and investee profit of R1 000 000, the investor recognises R300 000 of share of profit.",
                "With 30% ownership and a R500 000 dividend, R150 000 reduces the investment."
            ],
            [
                "Board representation and participation in policy-making can support significant influence even when ownership is below 20%."
            ]
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 29 - Hyperinflation",
            [
                "ias 29",
                "hyperinflation",
                "hyperinflationary economy"
            ],
            `IAS 29 requires financial statements of entities whose functional currency is that of a hyperinflationary economy to be expressed in terms of the measuring unit current at the end of the reporting period.

Non-monetary items and profit or loss information are adjusted according to the requirements of the standard.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 32 - Financial Instruments Presentation",
            [
                "ias 32",
                "financial instrument",
                "financial liability",
                "equity instrument",
                "compound instrument"
            ],
            `IAS 32 deals with presentation of financial instruments and distinguishes financial liabilities from equity.

The classification depends on the substance of the contractual arrangement, including whether the issuer has an obligation to deliver cash or another financial asset.

Some instruments contain both liability and equity components and may be compound financial instruments.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 36 - Impairment",
            [
                "ias 36",
                "impairment",
                "recoverable amount",
                "value in use",
                "fvlcd",
                "cash generating unit",
                "impairment loss"
            ],
            `IAS 36 requires assets to be assessed for impairment when indicators exist and requires specified assets to be tested regularly.

Recoverable amount is the higher of fair value less costs of disposal and value in use.

An impairment loss occurs when carrying amount exceeds recoverable amount.`,
            [
                "Recoverable Amount = Higher of FVLCD and VIU",
                "Impairment Loss = Carrying Amount - Recoverable Amount"
            ],
            [
                "Carrying amount R1 500 000, FVLCD R1 200 000 and VIU R1 350 000 gives recoverable amount of R1 350 000 and impairment loss of R150 000."
            ]
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 37 - Provisions and Contingencies",
            [
                "ias 37",
                "provision",
                "contingent liability",
                "contingent asset",
                "present obligation",
                "expected value"
            ],
            `A provision is recognised when there is a present obligation from a past event, an outflow of economic resources is probable and the amount can be estimated reliably.

A contingent liability is generally not recognised but may require disclosure.

A contingent asset is generally not recognised unless realisation becomes virtually certain.`,
            [
                "Expected Value = Sum of Probability × Possible Outcome"
            ],
            [
                "60% probability of R0, 30% probability of R1m and 10% probability of R3m gives expected value of R600 000."
            ]
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 38 - Intangible Assets",
            [
                "ias 38",
                "intangible assets",
                "research",
                "development",
                "goodwill",
                "amortisation"
            ],
            `IAS 38 covers identifiable non-monetary assets without physical substance.

Examples include patents, licences and certain development assets.

Research expenditure is generally expensed.

Development expenditure can be capitalised only when the recognition criteria are satisfied.

Finite-life intangible assets are amortised over their useful lives.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 40 - Investment Property",
            [
                "ias 40",
                "investment property",
                "rental property",
                "fair value model"
            ],
            `Investment property is property held to earn rentals, for capital appreciation or both.

IAS 40 permits accounting models subject to the standard, including the fair value model and cost model.

Investment property is different from owner-occupied property.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IAS 41 - Agriculture",
            [
                "ias 41",
                "agriculture",
                "biological assets",
                "agricultural produce"
            ],
            `IAS 41 addresses biological assets and agricultural produce at the point of harvest.

Biological assets are generally measured at fair value less costs to sell, subject to the requirements and exceptions in the standard.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IFRS 7 - Financial Instrument Disclosures",
            [
                "ifrs 7",
                "financial instrument disclosures",
                "credit risk",
                "liquidity risk",
                "market risk"
            ],
            `IFRS 7 requires disclosures that enable users to evaluate the significance of financial instruments and the nature and extent of risks arising from them.

Important risks include credit risk, liquidity risk and market risk.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IFRS 9 - Financial Instruments",
            [
                "ifrs 9",
                "financial assets",
                "amortised cost",
                "fvoci",
                "fvtpl",
                "effective interest",
                "expected credit loss",
                "ecl",
                "sppi"
            ],
            `IFRS 9 classifies financial assets based on the business model and contractual cash flow characteristics.

Common measurement categories include amortised cost, fair value through other comprehensive income and fair value through profit or loss.

For amortised cost, contractual cash flows generally must meet the SPPI condition and the asset must be held in a business model appropriate for amortised cost.

IFRS 9 also contains the expected credit loss model.`,
            [
                "Amortised Cost Closing = Opening Amortised Cost + Effective Interest - Cash Received",
                "Simplified ECL = Exposure × Probability of Default × Loss Given Default"
            ],
            [
                "R950 000 opening amount + R76 000 effective interest - R50 000 cash received = R976 000.",
                "Exposure R500 000 × PD 4% × LGD 60% = ECL R12 000."
            ]
        ),


        knowledge(
            "Accounting",
            "University",
            "IFRS 13 - Fair Value",
            [
                "ifrs 13",
                "fair value",
                "fair value hierarchy",
                "level 1",
                "level 2",
                "level 3"
            ],
            `IFRS 13 defines fair value and establishes a framework for measuring and disclosing it.

The fair value hierarchy prioritises observable market information.

Level 1 uses quoted prices in active markets for identical assets or liabilities.

Level 2 uses observable inputs other than Level 1 quoted prices.

Level 3 uses significant unobservable inputs.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IFRS 15 - Revenue",
            [
                "ifrs 15",
                "revenue",
                "five step model",
                "contract",
                "performance obligation",
                "variable consideration",
                "principal agent"
            ],
            `IFRS 15 uses a five-step model for recognising revenue.

The steps are:

1. Identify the contract with a customer.
2. Identify the performance obligations.
3. Determine the transaction price.
4. Allocate the transaction price to performance obligations.
5. Recognise revenue when or as performance obligations are satisfied.`,
            [
                "Allocated Revenue = Transaction Price × Standalone Selling Price / Total Standalone Selling Prices"
            ],
            [
                "A R12 000 transaction price allocated between goods with standalone prices of R10 000 and R5 000 gives R8 000 and R4 000 respectively."
            ]
        ),


        knowledge(
            "Accounting",
            "University",
            "IFRS 16 - Leases",
            [
                "ifrs 16",
                "lease",
                "right of use asset",
                "rou asset",
                "lease liability",
                "lessee"
            ],
            `IFRS 16 generally requires a lessee to recognise a right-of-use asset and a lease liability for leases, subject to exemptions.

The lease liability is based on the present value of lease payments.

The right-of-use asset is subsequently depreciated and the lease liability increases for interest and decreases for lease payments.`,
            [
                "Lease Liability Closing = Opening Liability + Interest - Lease Payment",
                "ROU Depreciation = Depreciable ROU Asset / Useful Life"
            ],
            [
                "Opening lease liability R379 000 + interest R37 900 - payment R100 000 = closing liability R316 900.",
                "ROU asset R379 000 over 5 years gives annual depreciation of R75 800 if straight-line depreciation applies."
            ]
        ),


        knowledge(
            "Accounting",
            "University",
            "IFRS 3 - Business Combinations",
            [
                "ifrs 3",
                "business combination",
                "acquisition method",
                "goodwill",
                "nci",
                "non controlling interest"
            ],
            `IFRS 3 applies the acquisition method to business combinations.

The acquirer recognises identifiable assets acquired and liabilities assumed at acquisition-date fair values, subject to specific requirements.

Goodwill arises when the consideration transferred plus applicable NCI and previous interest exceeds the fair value of identifiable net assets acquired.`,
            [
                "Goodwill = Consideration + NCI + Previously Held Interest - Fair Value of Identifiable Net Assets"
            ],
            [
                "Consideration R10m + NCI R2m - identifiable net assets R9m = goodwill R3m."
            ]
        ),


        knowledge(
            "Accounting",
            "University",
            "IFRS 10 - Consolidated Financial Statements",
            [
                "ifrs 10",
                "consolidation",
                "subsidiary",
                "control",
                "parent",
                "nci",
                "intragroup"
            ],
            `IFRS 10 establishes control as the basis for consolidation.

An investor controls an investee when it has power over the investee, exposure or rights to variable returns and the ability to use power to affect those returns.

A parent generally consolidates controlled subsidiaries.

Intragroup balances, transactions, income, expenses and unrealised profits are eliminated in consolidation.`,
            [
                "NCI = NCI Percentage × Relevant Net Assets"
            ],
            [
                "If NCI is 20% and relevant net assets are R3m, NCI is R600 000."
            ],
            [
                "Pre-acquisition and post-acquisition profits must be distinguished when calculating group results.",
                "Unrealised intragroup profits are eliminated to prevent the group recognising profits before they are realised outside the group."
            ]
        ),


        knowledge(
            "Accounting",
            "University",
            "IFRS 11 - Joint Arrangements",
            [
                "ifrs 11",
                "joint arrangement",
                "joint operation",
                "joint venture",
                "joint control"
            ],
            `IFRS 11 classifies joint arrangements as joint operations or joint ventures.

A joint operation gives parties rights to assets and obligations for liabilities.

A joint venture gives parties rights to the net assets of the arrangement.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IFRS 12 - Disclosure of Interests",
            [
                "ifrs 12",
                "disclosure of interests",
                "subsidiaries",
                "associates",
                "joint arrangements"
            ],
            `IFRS 12 requires disclosures that allow users to evaluate the nature and risks of interests in subsidiaries, joint arrangements, associates and unconsolidated structured entities.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IFRS 5 - Non-current Assets Held for Sale",
            [
                "ifrs 5",
                "held for sale",
                "discontinued operation",
                "non current asset held for sale"
            ],
            `IFRS 5 covers non-current assets held for sale and discontinued operations.

An asset is classified as held for sale when its carrying amount will be recovered principally through sale rather than continuing use and the relevant criteria are met.

Assets classified as held for sale are generally measured at the lower of carrying amount and fair value less costs to sell and are not depreciated while classified as held for sale.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IFRS 8 - Operating Segments",
            [
                "ifrs 8",
                "operating segments",
                "segment reporting"
            ],
            `IFRS 8 requires certain entities to disclose information about operating segments based on the way management evaluates operating performance and allocates resources.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IFRS 2 - Share-based Payment",
            [
                "ifrs 2",
                "share based payment",
                "share options",
                "equity settled"
            ],
            `IFRS 2 covers share-based payment transactions.

Transactions may be equity-settled or cash-settled.

Equity-settled transactions are generally measured by reference to the fair value of the goods or services received or the equity instruments granted when appropriate.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IFRS 1 - First-time Adoption",
            [
                "ifrs 1",
                "first time adoption",
                "first time adopter"
            ],
            `IFRS 1 sets requirements for entities preparing IFRS financial statements for the first time.

The entity generally prepares an opening IFRS statement of financial position and applies IFRS retrospectively subject to mandatory and optional exemptions.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IFRS 17 - Insurance Contracts",
            [
                "ifrs 17",
                "insurance contracts",
                "insurance liability"
            ],
            `IFRS 17 establishes principles for recognition, measurement, presentation and disclosure of insurance contracts.

It aims to provide useful information about insurance contract liabilities, profitability and risk.`
        ),


        knowledge(
            "Accounting",
            "University",
            "IFRS 19 - Reduced Disclosures",
            [
                "ifrs 19",
                "reduced disclosures",
                "subsidiaries without public accountability"
            ],
            `IFRS 19 provides reduced disclosure requirements for eligible subsidiaries without public accountability that meet the standard's conditions.

It is effective for annual reporting periods beginning on or after 1 January 2027, with early application permitted.`
        ),


        knowledge(
            "Accounting",
            "University",
            "Earnings Per Share",
            [
                "ias 33",
                "earnings per share",
                "eps",
                "weighted average shares"
            ],
            `Earnings per share measures profit attributable to ordinary equity holders relative to the weighted average number of ordinary shares outstanding during the period.`,
            [
                "Basic EPS = Profit Attributable to Ordinary Equity Holders / Weighted Average Ordinary Shares"
            ],
            [
                "Profit R10m divided by 5m weighted average shares gives EPS of R2.00."
            ]
        ),


        knowledge(
            "Accounting",
            "University",
            "Management Accounting",
            [
                "management accounting",
                "cost accounting",
                "cost classification",
                "absorption costing",
                "variable costing",
                "marginal costing",
                "process costing",
                "joint products",
                "cvp"
            ],
            `Management accounting provides information for planning, control and decision-making.

Costs can be classified by behaviour, function, traceability and controllability.

Absorption costing assigns manufacturing fixed and variable production costs to units.

Variable costing treats fixed manufacturing overhead as a period cost.

Process costing is used where production is continuous and units are substantially homogeneous.

Joint product costing deals with products produced from a common process before the split-off point.

CVP analysis studies the relationship between cost, volume and profit.`
        ),


        knowledge(
            "Accounting",
            "University",
            "Financial Management",
            [
                "financial management",
                "time value of money",
                "npv",
                "irr",
                "capital budgeting",
                "working capital",
                "cost of capital"
            ],
            `Financial management deals with investment, financing and working-capital decisions.

The time value of money recognises that money available today has a different value from the same amount received in the future.

Capital budgeting techniques include NPV, IRR and payback.`,
            [
                "Future Value = Present Value × (1 + r)^n",
                "Present Value = Future Value / (1 + r)^n",
                "NPV = Present Value of Cash Inflows - Initial Investment"
            ]
        ),


        knowledge(
            "Accounting",
            "University",
            "Auditing and Audit Evidence",
            [
                "audit",
                "auditing",
                "isa 315",
                "audit evidence",
                "audit risk",
                "internal controls",
                "risk assessment"
            ],
            `Auditing provides independent assurance over financial information.

ISA 315 deals with identifying and assessing risks of material misstatement through understanding the entity and its environment.

Audit evidence must be sufficient and appropriate.

Audit procedures include inspection, observation, confirmation, recalculation, reperformance, analytical procedures and inquiry.

Audit risk is commonly analysed through inherent risk, control risk and detection risk.`
        ),


        knowledge(
            "Accounting",
            "University",
            "Taxation",
            [
                "tax",
                "taxation",
                "income tax",
                "capital gains tax",
                "vat",
                "taxable income",
                "tax deductions"
            ],
            `Taxation determines tax consequences based on applicable tax legislation.

Important areas include taxable income, deductions, capital gains, VAT, employee taxation, fringe benefits, tax allowances and tax administration.

Tax rules are jurisdiction-specific and can change, so current legislation should be checked when an exact current tax rate or threshold is required.`
        )

    ];


    /* =========================================================
       ECONOMICS KNOWLEDGE
    ========================================================= */

    const economicsKnowledge = [

        knowledge(
            "Economics",
            "High School + University",
            "Scarcity and Opportunity Cost",
            [
                "scarcity",
                "opportunity cost",
                "choice",
                "resources",
                "economic problem"
            ],
            `Scarcity exists because resources are limited while human wants are unlimited.

Because resources are scarce, choices must be made.

Opportunity cost is the value of the next best alternative forgone when a choice is made.`
        ),


        knowledge(
            "Economics",
            "High School",
            "Factors of Production",
            [
                "factors of production",
                "land",
                "labour",
                "capital",
                "entrepreneurship",
                "rent",
                "wages",
                "interest",
                "profit"
            ],
            `The four main factors of production are land, labour, capital and entrepreneurship.

Land includes natural resources and earns rent.

Labour is human effort and earns wages.

Capital refers to produced resources used in production and earns interest.

Entrepreneurship involves organising resources and taking business risks, with profit as the possible reward.`
        ),


        knowledge(
            "Economics",
            "High School",
            "Demand",
            [
                "demand",
                "law of demand",
                "demand curve",
                "quantity demanded",
                "movement along demand"
            ],
            `Demand refers to the quantity of a good or service consumers are willing and able to buy at different prices over a given period.

The law of demand states that, ceteris paribus, quantity demanded generally falls when price rises and rises when price falls.

A movement along the demand curve is caused by a change in the good's own price.

A shift in demand can be caused by factors such as income, tastes, expectations and prices of related goods.`
        ),


        knowledge(
            "Economics",
            "High School",
            "Supply",
            [
                "supply",
                "law of supply",
                "supply curve",
                "quantity supplied",
                "movement along supply"
            ],
            `Supply refers to the quantity producers are willing and able to sell at different prices over a given period.

The law of supply generally states that, ceteris paribus, quantity supplied rises when price rises and falls when price falls.

Supply can shift because of input costs, technology, taxes, subsidies, expectations and the number of sellers.`
        ),


        knowledge(
            "Economics",
            "High School",
            "Market Equilibrium",
            [
                "equilibrium",
                "equilibrium price",
                "equilibrium quantity",
                "shortage",
                "surplus"
            ],
            `Market equilibrium occurs where quantity demanded equals quantity supplied.

A shortage occurs when quantity demanded exceeds quantity supplied.

A surplus occurs when quantity supplied exceeds quantity demanded.`,
            [
                "Equilibrium: Qd = Qs"
            ]
        ),


        knowledge(
            "Economics",
            "High School + University",
            "Elasticity",
            [
                "elasticity",
                "price elasticity",
                "ped",
                "pes",
                "yed",
                "xed",
                "income elasticity",
                "cross elasticity"
            ],
            `Elasticity measures the responsiveness of one variable to a change in another.

Price elasticity of demand measures the responsiveness of quantity demanded to price.

Price elasticity of supply measures the responsiveness of quantity supplied to price.

Income elasticity measures the responsiveness of demand to income.

Cross elasticity measures the responsiveness of demand for one good to the price of another good.`,
            [
                "PED = % Change in Quantity Demanded / % Change in Price",
                "PES = % Change in Quantity Supplied / % Change in Price",
                "YED = % Change in Quantity Demanded / % Change in Income",
                "XED = % Change in Demand for Good A / % Change in Price of Good B"
            ],
            [
                "A PED magnitude greater than 1 indicates elastic demand.",
                "A PED magnitude less than 1 indicates inelastic demand."
            ]
        ),


        knowledge(
            "Economics",
            "High School",
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

Marginal utility is the additional satisfaction from consuming one more unit.

The law of diminishing marginal utility states that marginal utility tends to fall as more units are consumed, holding other factors constant.`
        ),


        knowledge(
            "Economics",
            "High School + University",
            "Market Structures",
            [
                "market structures",
                "perfect competition",
                "monopoly",
                "oligopoly",
                "monopolistic competition",
                "barriers to entry",
                "market power"
            ],
            `The major market structures are perfect competition, monopoly, oligopoly and monopolistic competition.

Perfect competition has many firms, homogeneous products, relatively free entry and exit and firms that are price takers under the model.

A monopoly has one dominant seller and significant barriers to entry.

An oligopoly has a small number of significant firms whose decisions can be interdependent.

Monopolistic competition has many firms selling differentiated products with relatively easier entry than monopoly.`
        ),


        knowledge(
            "Economics",
            "High School + University",
            "Revenue, Cost and Profit",
            [
                "revenue",
                "total revenue",
                "average revenue",
                "marginal revenue",
                "cost",
                "fixed cost",
                "variable cost",
                "profit"
            ],
            `Revenue is income generated from selling output.

Fixed costs do not change with output in the short run.

Variable costs change with output.

Total cost is fixed cost plus variable cost.`,
            [
                "TR = P × Q",
                "AR = TR / Q",
                "TC = TFC + TVC",
                "AC = TC / Q",
                "AFC = TFC / Q",
                "AVC = TVC / Q",
                "MC = ΔTC / ΔQ",
                "Profit = TR - TC"
            ]
        ),


        knowledge(
            "Economics",
            "High School",
            "Productivity",
            [
                "productivity",
                "labour productivity",
                "total product",
                "average product",
                "marginal product",
                "diminishing returns"
            ],
            `Productivity measures output relative to inputs.

Total product is total output.

Average product is output per unit of a variable input.

Marginal product is the additional output from one additional unit of a variable input.

The law of diminishing marginal returns states that, after a point, adding more units of a variable input to fixed inputs causes marginal product to fall.`,
            [
                "AP = TP / Variable Input",
                "MP = ΔTP / ΔVariable Input"
            ]
        ),


        knowledge(
            "Economics",
            "High School + University",
            "Inflation",
            [
                "inflation",
                "consumer price index",
                "cpi",
                "demand pull",
                "cost push",
                "imported inflation",
                "deflation",
                "disinflation",
                "stagflation"
            ],
            `Inflation is a sustained increase in the general price level.

Demand-pull inflation can occur when aggregate demand grows faster than productive capacity.

Cost-push inflation can result from rising production costs.

Imported inflation can arise when imported goods or inputs become more expensive.

Deflation is a sustained decline in the general price level.

Disinflation means the inflation rate is falling, not necessarily that prices are falling.

Stagflation combines weak economic conditions with high inflation.`,
            [
                "Inflation Rate = (Current CPI - Previous CPI) / Previous CPI × 100"
            ]
        ),


        knowledge(
            "Economics",
            "High School + University",
            "Unemployment",
            [
                "unemployment",
                "unemployment rate",
                "frictional",
                "structural",
                "cyclical",
                "seasonal",
                "labour force",
                "participation rate"
            ],
            `Unemployment occurs when people who are part of the labour force are without work and are available and seeking work according to the relevant statistical definition.

Frictional unemployment relates to movement between jobs.

Structural unemployment arises from mismatches between workers' skills or locations and available jobs.

Cyclical unemployment is associated with downturns in economic activity.

Seasonal unemployment is related to seasonal patterns in demand for labour.`,
            [
                "Unemployment Rate = Unemployed / Labour Force × 100",
                "Labour Force Participation Rate = Labour Force / Working-age Population × 100"
            ]
        ),


        knowledge(
            "Economics",
            "High School + University",
            "GDP and Economic Growth",
            [
                "gdp",
                "gross domestic product",
                "economic growth",
                "real gdp",
                "nominal gdp",
                "gdp per capita"
            ],
            `Gross domestic product measures the market value of final goods and services produced within an economy during a period.

Nominal GDP uses current prices.

Real GDP removes the effect of price changes to measure changes in output more meaningfully.

GDP per capita divides GDP by population.`,
            [
                "GDP = C + I + G + (X - M)",
                "GDP per Capita = GDP / Population",
                "Growth Rate = (New GDP - Old GDP) / Old GDP × 100"
            ]
        ),


        knowledge(
            "Economics",
            "High School + University",
            "Economic Development",
            [
                "economic development",
                "development",
                "hdi",
                "gini",
                "inequality",
                "poverty",
                "standard of living",
                "quality of life"
            ],
            `Economic development is broader than economic growth.

It includes improvements in living standards, health, education, opportunities, institutions and reductions in poverty and inequality.

HDI combines indicators related to health, education and income.

The Gini coefficient is a measure of income or wealth inequality.`
        ),


        knowledge(
            "Economics",
            "High School",
            "Business Cycle",
            [
                "business cycle",
                "expansion",
                "peak",
                "contraction",
                "trough",
                "recovery",
                "recession"
            ],
            `The business cycle describes fluctuations in economic activity.

Typical phases include expansion, peak, contraction and trough, followed by recovery.

A recession is commonly associated with a significant decline in economic activity, although exact definitions vary by institution.`
        ),


        knowledge(
            "Economics",
            "High School + University",
            "Fiscal Policy",
            [
                "fiscal policy",
                "government spending",
                "taxation",
                "budget deficit",
                "budget surplus",
                "automatic stabilisers",
                "public debt",
                "crowding out"
            ],
            `Fiscal policy uses government spending, taxation and related budget measures to influence economic activity.

Expansionary fiscal policy can involve higher government spending or lower taxes.

Contractionary fiscal policy can involve lower spending or higher taxes.

A budget deficit occurs when government expenditure exceeds revenue over the relevant period.`,
            [
                "Budget Balance = Government Revenue - Government Expenditure"
            ]
        ),


        knowledge(
            "Economics",
            "High School + University",
            "Monetary Policy",
            [
                "monetary policy",
                "sarb",
                "repo rate",
                "interest rate",
                "inflation targeting",
                "money supply"
            ],
            `Monetary policy influences financial conditions, interest rates and economic activity.

In South Africa, the South African Reserve Bank is responsible for monetary policy.

The policy rate affects borrowing costs, saving incentives, asset prices, exchange rates and aggregate demand through the monetary transmission mechanism.`
        ),


        knowledge(
            "Economics",
            "High School + University",
            "Aggregate Demand",
            [
                "aggregate demand",
                "ad",
                "consumption",
                "investment",
                "government spending",
                "net exports"
            ],
            `Aggregate demand represents planned expenditure on domestically produced final goods and services.

Its components are consumption, investment, government spending and net exports.`,
            [
                "AD = C + I + G + (X - M)"
            ]
        ),


        knowledge(
            "Economics",
            "High School + University",
            "Consumption, Saving and Multiplier",
            [
                "consumption",
                "saving",
                "marginal propensity to consume",
                "mpc",
                "mps",
                "multiplier"
            ],
            `Disposable income can be divided between consumption and saving.

The marginal propensity to consume measures the change in consumption caused by a change in income.

The marginal propensity to save measures the change in saving caused by a change in income.`,
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
            "Economics",
            "High School + University",
            "Public Goods and Government Failure",
            [
                "public goods",
                "free rider",
                "government failure",
                "public sector",
                "privatisation",
                "nationalisation",
                "regulation"
            ],
            `Public goods are typically non-rival and non-excludable.

The free-rider problem occurs when people can benefit without paying, potentially causing private markets to underprovide the good.

Government failure occurs when government intervention produces outcomes that are inefficient or otherwise fail to achieve intended objectives.`
        ),


        knowledge(
            "Economics",
            "High School + University",
            "Externalities",
            [
                "externalities",
                "external cost",
                "external benefit",
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
            "Economics",
            "High School + University",
            "International Trade",
            [
                "international trade",
                "imports",
                "exports",
                "comparative advantage",
                "absolute advantage",
                "specialisation",
                "wto"
            ],
            `International trade allows countries to exchange goods and services.

Absolute advantage concerns producing more output with given resources.

Comparative advantage concerns lower opportunity cost.

Specialisation based on comparative advantage can create gains from trade.`
        ),


        knowledge(
            "Economics",
            "High School",
            "Protectionism",
            [
                "protectionism",
                "tariff",
                "quota",
                "embargo",
                "trade barrier",
                "subsidy"
            ],
            `Protectionism refers to policies that restrict or influence international trade to protect domestic industries or pursue other policy objectives.

A tariff is a tax on imports.

A quota limits the quantity of imports.

An embargo is a government restriction or prohibition on specified trade.`
        ),


        knowledge(
            "Economics",
            "High School + University",
            "Foreign Exchange",
            [
                "foreign exchange",
                "exchange rate",
                "appreciation",
                "depreciation",
                "currency"
            ],
            `The foreign exchange rate is the price of one currency in terms of another.

An appreciation means a currency increases in value relative to another currency under the relevant exchange-rate quotation.

A depreciation means it decreases in value.

Exchange-rate changes affect import prices, export competitiveness, inflation and capital flows.`
        ),


        knowledge(
            "Economics",
            "High School + University",
            "Balance of Payments",
            [
                "balance of payments",
                "bop",
                "current account",
                "financial account",
                "capital account",
                "trade balance"
            ],
            `The balance of payments records economic transactions between residents of an economy and the rest of the world.

The current account includes trade in goods and services, primary income and secondary income.

The financial account records transactions involving financial assets and liabilities.`,
            [
                "Trade Balance = Exports - Imports"
            ]
        ),


        knowledge(
            "Economics",
            "High School",
            "Terms of Trade",
            [
                "terms of trade",
                "tot",
                "export prices",
                "import prices"
            ],
            `Terms of trade compares export prices with import prices.`,
            [
                "TOT = Export Price Index / Import Price Index × 100"
            ]
        ),


        knowledge(
            "Economics",
            "High School + University",
            "Labour Market",
            [
                "labour market",
                "labour demand",
                "labour supply",
                "wages",
                "minimum wage",
                "trade unions",
                "collective bargaining"
            ],
            `The labour market is where labour services are supplied by workers and demanded by employers.

Labour demand is derived from demand for the goods and services workers help produce.

Trade unions represent workers in negotiations.

Collective bargaining is negotiation between workers or their representatives and employers over employment conditions.`
        ),


        knowledge(
            "Economics",
            "High School + University",
            "Poverty and Inequality",
            [
                "poverty",
                "inequality",
                "poverty line",
                "multidimensional poverty",
                "gini coefficient"
            ],
            `Poverty refers to insufficient resources to meet basic needs or participate adequately in society.

Income poverty uses income or expenditure relative to a poverty threshold.

Multidimensional poverty considers several dimensions such as education, health and living conditions.

The Gini coefficient is commonly used to measure inequality.`
        ),


        knowledge(
            "Economics",
            "High School",
            "Globalisation",
            [
                "globalisation",
                "globalization",
                "digital economy",
                "e commerce",
                "multinational"
            ],
            `Globalisation involves increasing economic integration between countries.

It can increase trade, investment, technology transfer and access to markets, while also creating adjustment pressures and distributional effects.`
        ),


        knowledge(
            "Economics",
            "High School",
            "Tourism",
            [
                "tourism",
                "tourism multiplier",
                "tourism leakage",
                "tourism economy"
            ],
            `Tourism generates spending that can support businesses, employment and government revenue.

The tourism multiplier occurs when initial tourist spending generates additional rounds of income and expenditure.

Leakages occur when spending leaves the local economy through imports, savings or taxes.`
        ),


        knowledge(
            "Economics",
            "High School",
            "Industrialisation",
            [
                "industrialisation",
                "industrialization",
                "manufacturing",
                "idz",
                "sez",
                "special economic zone"
            ],
            `Industrialisation refers to the expansion and development of industrial production.

Manufacturing can support structural transformation, productivity, employment and exports.

Special Economic Zones can provide targeted infrastructure and policy incentives to attract investment and production.`
        ),


        knowledge(
            "Economics",
            "High School",
            "Economic Systems",
            [
                "economic systems",
                "market economy",
                "command economy",
                "mixed economy",
                "traditional economy"
            ],
            `Economic systems determine how societies organise production, distribution and resource allocation.

A market economy relies heavily on prices and private decisions.

A command economy relies more heavily on central planning.

A mixed economy combines market mechanisms with government intervention.`
        ),


        knowledge(
            "Economics",
            "High School + University",
            "Positive and Normative Economics",
            [
                "positive economics",
                "normative economics",
                "economic statement",
                "value judgment"
            ],
            `Positive economics deals with statements that can be tested against evidence.

Normative economics involves value judgments about what ought to happen.`
        ),


        knowledge(
            "Economics",
            "High School + University",
            "Ceteris Paribus",
            [
                "ceteris paribus",
                "all else equal",
                "economic assumptions"
            ],
            `Ceteris paribus means holding other relevant factors constant.

Economists use the assumption to isolate the relationship between particular variables.`
        ),


        knowledge(
            "Economics",
            "University",
            "Correlation and Causation",
            [
                "correlation",
                "causation",
                "correlation versus causation",
                "causal relationship"
            ],
            `Correlation means two variables move together in a statistical relationship.

Causation means a change in one variable contributes to a change in another.

Correlation alone does not prove causation.`
        )

    ];


    /* =========================================================
       MATHEMATICS KNOWLEDGE
    ========================================================= */

    const mathematicsKnowledge = [

        knowledge(
            "Mathematics",
            "High School",
            "Number Systems",
            [
                "number systems",
                "natural numbers",
                "whole numbers",
                "integers",
                "rational numbers",
                "irrational numbers",
                "real numbers"
            ],
            `Natural numbers are counting numbers.

Whole numbers include zero and natural numbers.

Integers include positive and negative whole numbers and zero.

Rational numbers can be written as a fraction of two integers where the denominator is not zero.

Irrational numbers cannot be written as a ratio of integers.

Real numbers include both rational and irrational numbers.`
        ),


        knowledge(
            "Mathematics",
            "High School",
            "Fractions, Percentages and Ratios",
            [
                "fractions",
                "percentage",
                "percentages",
                "ratio",
                "proportion"
            ],
            `Fractions represent parts of a whole.

A percentage is a fraction expressed out of 100.

A ratio compares quantities.

A proportion states that two ratios are equal.`,
            [
                "Percentage = Part / Whole × 100",
                "New Value = Original Value × (1 ± Percentage Change)"
            ]
        ),


        knowledge(
            "Mathematics",
            "High School",
            "Exponents and Surds",
            [
                "exponents",
                "indices",
                "powers",
                "surds",
                "square roots",
                "scientific notation"
            ],
            `Exponents represent repeated multiplication.

Surds are irrational roots that cannot be simplified into rational numbers.

Scientific notation represents a number as a value between 1 and 10 multiplied by a power of 10.`,
            [
                "a^m × a^n = a^(m+n)",
                "a^m / a^n = a^(m-n)",
                "(a^m)^n = a^(mn)",
                "a^0 = 1, for a ≠ 0",
                "a^(-n) = 1/a^n"
            ]
        ),


        knowledge(
            "Mathematics",
            "High School",
            "Algebra",
            [
                "algebra",
                "variables",
                "coefficients",
                "constants",
                "like terms",
                "expressions"
            ],
            `Algebra uses symbols to represent numbers and relationships.

A variable represents a quantity that can change.

A coefficient multiplies a variable.

A constant is a fixed value.

Like terms contain the same variables raised to the same powers.`
        ),


        knowledge(
            "Mathematics",
            "High School",
            "Factorisation",
            [
                "factorisation",
                "factorization",
                "common factor",
                "difference of squares",
                "trinomial"
            ],
            `Factorisation rewrites an expression as a product of factors.

Common methods include taking out the greatest common factor, difference of two squares, grouping and factoring quadratic trinomials.`,
            [
                "a² - b² = (a-b)(a+b)"
            ],
            [
                "x² - 9 = (x-3)(x+3)."
            ]
        ),


        knowledge(
            "Mathematics",
            "High School",
            "Linear Equations",
            [
                "linear equation",
                "linear equations",
                "solve equation",
                "equation"
            ],
            `A linear equation has variables to the first power.

To solve an equation, perform the same valid operation on both sides until the variable is isolated.`,
            [
                "ax + b = 0",
                "x = -b/a, when a ≠ 0"
            ],
            [
                "2x + 6 = 0 gives x = -3."
            ]
        ),


        knowledge(
            "Mathematics",
            "High School",
            "Quadratic Equations",
            [
                "quadratic equation",
                "quadratic equations",
                "quadratic formula",
                "discriminant",
                "parabola"
            ],
            `A quadratic equation has the form ax² + bx + c = 0 where a is not zero.

Quadratic equations can be solved by factorisation, completing the square or the quadratic formula.

The discriminant determines the nature of the roots.`,
            [
                "x = (-b ± √(b² - 4ac)) / 2a",
                "Discriminant = b² - 4ac"
            ],
            [
                "For x² - 5x + 6 = 0, factorisation gives (x-2)(x-3)=0, so x=2 or x=3."
            ],
            [
                "Discriminant > 0: two distinct real roots.",
                "Discriminant = 0: one repeated real root.",
                "Discriminant < 0: no real roots."
            ]
        ),


        knowledge(
            "Mathematics",
            "High School",
            "Simultaneous Equations",
            [
                "simultaneous equations",
                "simultaneous",
                "substitution",
                "elimination"
            ],
            `Simultaneous equations are solved together to find values that satisfy all equations.

Common methods include substitution and elimination.`
        ),


        knowledge(
            "Mathematics",
            "High School",
            "Inequalities",
            [
                "inequality",
                "inequalities",
                "greater than",
                "less than",
                "interval"
            ],
            `Inequalities compare quantities using symbols such as <, >, ≤ and ≥.

When multiplying or dividing an inequality by a negative number, the inequality sign reverses.`
        ),


        knowledge(
            "Mathematics",
            "High School",
            "Sequences",
            [
                "sequence",
                "arithmetic sequence",
                "geometric sequence",
                "common difference",
                "common ratio"
            ],
            `An arithmetic sequence has a constant difference between consecutive terms.

A geometric sequence has a constant ratio between consecutive terms.`,
            [
                "Arithmetic: Tn = a + (n-1)d",
                "Arithmetic: Sn = n/2[2a + (n-1)d]",
                "Geometric: Tn = ar^(n-1)",
                "Geometric: Sn = a(1-r^n)/(1-r), r ≠ 1"
            ]
        ),


        knowledge(
            "Mathematics",
            "High School",
            "Functions",
            [
                "functions",
                "function",
                "domain",
                "range",
                "inverse function",
                "composite function"
            ],
            `A function assigns each input in its domain exactly one output.

The domain is the set of allowed input values.

The range is the set of resulting output values.

Functions can be represented algebraically, graphically or in tables.`
        ),


        knowledge(
            "Mathematics",
            "High School",
            "Linear Functions",
            [
                "linear function",
                "straight line",
                "gradient",
                "slope",
                "y intercept"
            ],
            `A linear function produces a straight-line graph.

The gradient measures the change in y relative to the change in x.`,
            [
                "m = (y2-y1)/(x2-x1)",
                "y = mx + c",
                "y - y1 = m(x - x1)"
            ]
        ),


        knowledge(
            "Mathematics",
            "High School",
            "Analytical Geometry",
            [
                "analytical geometry",
                "coordinate geometry",
                "distance",
                "midpoint",
                "gradient",
                "parallel",
                "perpendicular"
            ],
            `Analytical geometry uses coordinates and algebra to study geometric relationships.`,
            [
                "Distance = √[(x2-x1)² + (y2-y1)²]",
                "Midpoint = ((x1+x2)/2, (y1+y2)/2)",
                "Gradient = (y2-y1)/(x2-x1)"
            ],
            [
                "Parallel lines have equal gradients.",
                "For non-vertical perpendicular lines, gradients have a product of -1."
            ]
        ),


        knowledge(
            "Mathematics",
            "High School",
            "Circle Geometry",
            [
                "circle",
                "circle equation",
                "radius",
                "centre",
                "diameter"
            ],
            `A circle is the set of points at a fixed distance from a centre.`,
            [
                "(x-h)² + (y-k)² = r²"
            ],
            [
                "The centre is (h,k) and radius is r."
            ]
        ),


        knowledge(
            "Mathematics",
            "High School",
            "Euclidean Geometry",
            [
                "euclidean geometry",
                "geometry",
                "triangles",
                "similar triangles",
                "congruency",
                "pythagoras"
            ],
            `Euclidean geometry studies relationships involving points, lines, angles and shapes.

Similar triangles have equal corresponding angles and proportional corresponding sides.

Congruent triangles have the same shape and size.`,
            [
                "Pythagoras: a² + b² = c²"
            ]
        ),


        knowledge(
            "Mathematics",
            "High School",
            "Trigonometry",
            [
                "trigonometry",
                "trig",
                "sohcahtoa",
                "sin",
                "cos",
                "tan"
            ],
            `For a right-angled triangle, trigonometric ratios connect angles and side lengths.`,
            [
                "sin θ = opposite / hypotenuse",
                "cos θ = adjacent / hypotenuse",
                "tan θ = opposite / adjacent"
            ],
            [
                "SOHCAHTOA helps remember the three basic right-triangle ratios."
            ]
        ),


        knowledge(
            "Mathematics",
            "High School",
            "Trigonometric Identities",
            [
                "trigonometric identities",
                "trig identities",
                "sin squared",
                "cos squared",
                "tan identity"
            ],
            `Trigonometric identities are equations that are true for all values for which both sides are defined.`,
            [
                "sin²θ + cos²θ = 1",
                "tanθ = sinθ/cosθ"
            ]
        ),


        knowledge(
            "Mathematics",
            "High School",
            "Sine Rule and Cosine Rule",
            [
                "sine rule",
                "cosine rule",
                "non right triangle",
                "triangle"
            ],
            `The sine rule and cosine rule are used to solve non-right-angled triangles.`,
            [
                "a/sin A = b/sin B = c/sin C",
                "a² = b² + c² - 2bc cos A"
            ]
        ),


        knowledge(
            "Mathematics",
            "High School",
            "Statistics",
            [
                "statistics",
                "mean",
                "median",
                "mode",
                "range",
                "quartile",
                "iqr"
            ],
            `Statistics involves collecting, organising, analysing and interpreting data.

Mean is the arithmetic average.

Median is the middle value after ordering.

Mode is the most frequent value.

Range is maximum minus minimum.

IQR measures the spread of the middle 50% of the data.`,
            [
                "Mean = Sum of Values / Number of Values",
                "Range = Maximum - Minimum",
                "IQR = Q3 - Q1"
            ]
        ),


        knowledge(
            "Mathematics",
            "High School + University",
            "Variance and Standard Deviation",
            [
                "variance",
                "standard deviation",
                "variance formula",
                "standard deviation formula"
            ],
            `Variance measures the average squared deviation from the mean.

Standard deviation is the square root of variance.`,
            [
                "Population Variance = Σ(x-μ)² / N",
                "Population SD = √Variance"
            ]
        ),


        knowledge(
            "Mathematics",
            "High School + University",
            "Probability",
            [
                "probability",
                "conditional probability",
                "independent events",
                "complement",
                "bayes"
            ],
            `Probability measures the likelihood of an event.

Conditional probability measures the probability of one event given another.

Independent events do not change each other's probabilities.`,
            [
                "P(A) = Number of Favourable Outcomes / Total Outcomes",
                "P(A') = 1 - P(A)",
                "P(A and B) = P(A)P(B) for independent events",
                "P(A|B) = P(A and B) / P(B)"
            ]
        ),


        knowledge(
            "Mathematics",
            "High School + University",
            "Permutations and Combinations",
            [
                "permutations",
                "combinations",
                "factorial",
                "arrangements",
                "selection"
            ],
            `Permutations count ordered arrangements.

Combinations count selections where order does not matter.`,
            [
                "n! = n(n-1)(n-2)...1",
                "nPr = n!/(n-r)!",
                "nCr = n!/[r!(n-r)!]"
            ]
        ),


        knowledge(
            "Mathematics",
            "High School + University",
            "Financial Mathematics",
            [
                "financial mathematics",
                "simple interest",
                "compound interest",
                "depreciation",
                "future value",
                "present value"
            ],
            `Financial mathematics applies mathematical methods to money over time.

Simple interest is calculated only on the original principal.

Compound interest earns interest on previous interest as well.`,
            [
                "Simple Interest: I = Prt",
                "Simple Amount: A = P(1+rt)",
                "Compound Amount: A = P(1+r)^n",
                "Present Value: P = A/(1+r)^n"
            ]
        ),


        knowledge(
            "Mathematics",
            "University",
            "Limits",
            [
                "limits",
                "limit",
                "calculus",
                "continuity"
            ],
            `A limit describes the value a function approaches as the input approaches a particular value.

Limits form the foundation of differential and integral calculus.`
        ),


        knowledge(
            "Mathematics",
            "University",
            "Differentiation",
            [
                "differentiation",
                "derivative",
                "derivatives",
                "calculus",
                "product rule",
                "quotient rule",
                "chain rule"
            ],
            `Differentiation measures the instantaneous rate of change of a function.

The derivative can represent a gradient, velocity, marginal cost or marginal revenue depending on the application.`,
            [
                "d/dx(x^n) = nx^(n-1)",
                "Product Rule: (uv)' = u'v + uv'",
                "Quotient Rule: (u/v)' = (u'v - uv')/v²",
                "Chain Rule: d/dx f(g(x)) = f'(g(x))g'(x)"
            ]
        ),


        knowledge(
            "Mathematics",
            "University",
            "Stationary Points and Optimisation",
            [
                "stationary points",
                "turning points",
                "maximum",
                "minimum",
                "optimisation",
                "optimization"
            ],
            `Stationary points occur where the first derivative is zero or undefined, subject to the domain.

They can represent local maxima, local minima or other stationary behaviour.`,
            [
                "Stationary Point: f'(x) = 0",
                "Second derivative test: f''(x) > 0 often indicates local minimum.",
                "Second derivative test: f''(x) < 0 often indicates local maximum."
            ]
        ),


        knowledge(
            "Mathematics",
            "University",
            "Integration",
            [
                "integration",
                "integral",
                "indefinite integral",
                "definite integral",
                "area under curve"
            ],
            `Integration is the reverse process of differentiation in many contexts.

An indefinite integral represents a family of antiderivatives.

A definite integral can represent accumulated quantity or signed area.`,
            [
                "∫x^n dx = x^(n+1)/(n+1) + C, n ≠ -1",
                "∫[a to b] f(x)dx = F(b) - F(a)"
            ]
        ),


        knowledge(
            "Mathematics",
            "University",
            "Matrices",
            [
                "matrices",
                "matrix",
                "determinant",
                "inverse matrix",
                "linear equations"
            ],
            `A matrix is a rectangular arrangement of numbers.

Matrices can represent systems of equations, transformations and data.

The determinant helps determine whether a square matrix is invertible.`,
            [
                "For [[a,b],[c,d]], determinant = ad - bc"
            ]
        ),


        knowledge(
            "Mathematics",
            "University",
            "Vectors",
            [
                "vectors",
                "vector",
                "magnitude",
                "dot product",
                "cross product"
            ],
            `A vector has both magnitude and direction.

Vectors are used in geometry, physics, computer science and linear algebra.`,
            [
                "Magnitude of (a,b) = √(a²+b²)",
                "a·b = a1b1 + a2b2 + a3b3"
            ]
        ),


        knowledge(
            "Mathematics",
            "University",
            "Complex Numbers",
            [
                "complex numbers",
                "complex number",
                "imaginary number",
                "i",
                "real part",
                "imaginary part"
            ],
            `A complex number has a real part and an imaginary part.

The imaginary unit satisfies i² = -1.`,
            [
                "z = a + bi",
                "i² = -1"
            ]
        ),


        knowledge(
            "Mathematics",
            "University",
            "Differential Equations",
            [
                "differential equations",
                "differential equation",
                "ode",
                "ordinary differential equation"
            ],
            `A differential equation relates an unknown function to one or more of its derivatives.

First-order differential equations involve the first derivative.

Higher-order equations involve higher derivatives.`
        ),


        knowledge(
            "Mathematics",
            "University",
            "Linear Algebra",
            [
                "linear algebra",
                "vector spaces",
                "eigenvalues",
                "eigenvectors",
                "linear transformation"
            ],
            `Linear algebra studies vectors, vector spaces, linear transformations and systems of linear equations.

Eigenvectors are non-zero vectors whose direction is unchanged by a linear transformation, apart from scaling.`,
            [
                "Av = λv"
            ]
        ),


        knowledge(
            "Mathematics",
            "University",
            "Numerical Methods",
            [
                "numerical methods",
                "newton raphson",
                "numerical integration",
                "approximation"
            ],
            `Numerical methods approximate mathematical solutions when exact analytical solutions are difficult or unavailable.

Methods include Newton-Raphson, bisection, numerical integration and numerical differentiation.`
        ),


        knowledge(
            "Mathematics",
            "University",
            "Mathematical Modelling",
            [
                "mathematical modelling",
                "modelling",
                "model",
                "real world mathematics"
            ],
            `Mathematical modelling uses mathematics to represent real-world systems.

A model normally involves assumptions, variables, relationships, calculations and interpretation.

A good model should be evaluated against evidence and limitations.`
        ),


        knowledge(
            "Mathematics",
            "University",
            "Discrete Mathematics",
            [
                "discrete mathematics",
                "logic",
                "sets",
                "graphs",
                "combinatorics"
            ],
            `Discrete mathematics studies mathematical structures that are fundamentally discrete rather than continuous.

Important areas include logic, sets, combinatorics, graph theory, relations and algorithms.`
        )

    ];


    /* =========================================================
       COMBINE KNOWLEDGE
    ========================================================= */

    const allKnowledge = [
        ...accountingKnowledge,
        ...economicsKnowledge,
        ...mathematicsKnowledge
    ];


    /* =========================================================
       SUBJECT KEYWORDS
    ========================================================= */

    const subjectWords = {

        Accounting: [
            "accounting",
            "account",
            "financial accounting",
            "management accounting",
            "tax",
            "taxation",
            "audit",
            "auditing",
            "ifrs",
            "ias",
            "financial statement",
            "balance sheet",
            "income statement",
            "depreciation",
            "vat",
            "debtors",
            "creditors",
            "inventory",
            "asset",
            "liability",
            "equity",
            "capital",
            "journal",
            "ledger",
            "trial balance",
            "consolidation",
            "goodwill",
            "nci",
            "deferred tax",
            "ppe"
        ],

        Economics: [
            "economics",
            "economic",
            "scarcity",
            "demand",
            "supply",
            "elasticity",
            "gdp",
            "inflation",
            "unemployment",
            "fiscal",
            "monetary",
            "sarb",
            "repo",
            "market",
            "utility",
            "trade",
            "exports",
            "imports",
            "exchange rate",
            "poverty",
            "inequality",
            "business cycle",
            "aggregate demand",
            "aggregate supply",
            "labour market",
            "tourism",
            "globalisation",
            "externalities"
        ],

        Mathematics: [
            "mathematics",
            "math",
            "maths",
            "algebra",
            "equation",
            "quadratic",
            "linear",
            "function",
            "calculus",
            "derivative",
            "integral",
            "limit",
            "trigonometry",
            "trigonometric",
            "geometry",
            "probability",
            "statistics",
            "matrix",
            "matrices",
            "vector",
            "vectors",
            "complex numbers",
            "sequence",
            "factorisation",
            "percentage",
            "ratio",
            "permutation",
            "combination"
        ]

    };


    /* =========================================================
       NORMALISATION
    ========================================================= */

    function normalizeText(text) {

        return String(text || "")
            .toLowerCase()
            .replace(/[’‘]/g, "'")
            .replace(/[“”]/g, '"')
            .replace(/[^\w\s.%/+×÷=<>-]/g, " ")
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

        const scores = {
            Accounting: 0,
            Economics: 0,
            Mathematics: 0
        };


        for (const subject of Object.keys(subjectWords)) {

            for (const keyword of subjectWords[subject]) {

                const key = normalizeText(keyword);

                if (!key) continue;

                if (text.includes(key)) {

                    scores[subject] +=
                        key.includes(" ")
                            ? 7
                            : 3;

                }

            }

        }


        const sorted = Object.entries(scores)
            .sort((a, b) => b[1] - a[1]);


        if (
            sorted[0][1] === 0 ||
            (
                sorted[0][1] === sorted[1][1] &&
                sorted[0][1] < 7
            )
        ) {

            return null;

        }


        return sorted[0][0];

    }


    /* =========================================================
       KNOWLEDGE SEARCH
    ========================================================= */

    function searchKnowledge(question, requestedSubject = null) {

        const text = normalizeText(question);

        if (!text) return [];


        const words = tokenize(text);

        const subject =
            requestedSubject ||
            detectSubject(question);


        const pool = subject
            ? allKnowledge.filter(
                item => item.subject === subject
            )
            : allKnowledge;


        const scored = pool.map(item => {

            let score = 0;

            const topic = normalizeText(item.topic);


            /* Exact topic */

            if (text === topic) {
                score += 100;
            }


            /* Topic phrase */

            if (text.includes(topic)) {
                score += 60;
            }


            /* Keywords */

            for (const keyword of item.keywords) {

                const key = normalizeText(keyword);

                if (!key) continue;

                if (text.includes(key)) {

                    score +=
                        key.includes(" ")
                            ? 45
                            : 25;

                }

                for (const word of words) {

                    if (
                        word.length > 3 &&
                        key === word
                    ) {
                        score += 15;
                    }

                }

            }


            /* Related keywords */

            for (const keyword of item.relatedKeywords || []) {

                const key = normalizeText(keyword);

                if (key && text.includes(key)) {
                    score += 15;
                }

            }


            /* Formula terms */

            for (const formula of item.formulas || []) {

                const formulaWords = tokenize(formula);

                let matches = 0;

                for (const word of formulaWords) {

                    if (
                        word.length > 2 &&
                        words.includes(word)
                    ) {
                        matches++;
                    }

                }

                if (matches >= 2) {
                    score += 20;
                }

            }


            return {
                item,
                score
            };

        });


        scored.sort((a, b) => b.score - a.score);


        return scored
            .filter(result => result.score > 0)
            .slice(0, 4);

    }


    /* =========================================================
       REQUEST DETECTION
    ========================================================= */

    function isAllInformationRequest(question) {

        const text = normalizeText(question);

        const phrases = [
            "all information",
            "all the information",
            "everything about",
            "full information",
            "complete information",
            "full notes",
            "complete notes",
            "all notes",
            "teach me everything",
            "everything"
        ];

        return phrases.some(
            phrase => text.includes(phrase)
        );

    }


    function isTopicListRequest(question) {

        const text = normalizeText(question);

        return [
            "topics",
            "topic list",
            "what topics",
            "all topics",
            "list topics",
            "what can you teach",
            "what do you know"
        ].some(
            phrase => text.includes(phrase)
        );

    }


    /* =========================================================
       TOPIC LIST
    ========================================================= */

    function getTopicList(subject) {

        const records = allKnowledge.filter(
            item => item.subject === subject
        );

        if (!records.length) {
            return "";
        }


        const grouped = {};

        records.forEach(record => {

            const level =
                record.level || "General";

            if (!grouped[level]) {
                grouped[level] = [];
            }

            grouped[level].push(record.topic);

        });


        let output = `<p><strong>${subject}</strong></p>`;


        Object.keys(grouped).forEach(level => {

            output += `<p><strong>${level}</strong></p>`;

            output += "<ul>";

            grouped[level].forEach(topic => {

                output += `<li>${escapeHTML(topic)}</li>`;

            });

            output += "</ul>";

        });


        return output;

    }


    /* =========================================================
       HTML ESCAPING
    ========================================================= */

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =========================================================
       FORMAT TEXT
    ========================================================= */

    function formatText(text) {

        let output = escapeHTML(text);


        output = output.replace(
            /\*\*(.*?)\*\*/g,
            "<strong>$1</strong>"
        );


        output = output.replace(
            /\n{2,}/g,
            "</p><p>"
        );


        output = output.replace(
            /\n/g,
            "<br>"
        );


        return `<p>${output}</p>`;

    }


    /* =========================================================
       FORMAT KNOWLEDGE
    ========================================================= */

    function formatKnowledge(record) {

        let output = "";


        output += `
            <p>
                <strong>${escapeHTML(record.topic)}</strong>
            </p>
        `;


        output += `
            <p>
                ${escapeHTML(record.information)}
            </p>
        `;


        if (record.formulas && record.formulas.length) {

            output += `
                <p><strong>Key formulas</strong></p>
            `;

            record.formulas.forEach(formula => {

                output += `
                    <div class="formula">
                        ${escapeHTML(formula)}
                    </div>
                `;

            });

        }


        if (record.rules && record.rules.length) {

            output += `
                <p><strong>Important rules</strong></p>
                <ul>
            `;

            record.rules.forEach(rule => {

                output += `
                    <li>${escapeHTML(rule)}</li>
                `;

            });

            output += "</ul>";

        }


        if (record.examples && record.examples.length) {

            output += `
                <p><strong>Worked example</strong></p>
                <ul>
            `;

            record.examples.forEach(example => {

                output += `
                    <li>${escapeHTML(example)}</li>
                `;

            });

            output += "</ul>";

        }


        return output;

    }


    /* =========================================================
       CALCULATOR
    ========================================================= */

    function simpleCalculator(question) {

        const text = normalizeText(question);

        const calculationPattern =
            /^[\d\s+\-*/().%^×÷]+$/;


        if (!calculationPattern.test(text)) {
            return null;
        }


        try {

            let expression = text
                .replace(/×/g, "*")
                .replace(/÷/g, "/")
                .replace(/\^/g, "**");


            if (!/^[\d\s+\-*/().%]+$/.test(expression)) {
                return null;
            }


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


            return `<p><strong>Answer:</strong> ${result}</p>`;

        } catch {
            return null;
        }

    }


    /* =========================================================
       GENERAL ANSWER
    ========================================================= */

    function generalAnswer(question) {

        const text = normalizeText(question);


        if (
            text.includes("hello") ||
            text.includes("hi") ||
            text.includes("hey") ||
            text === "good morning" ||
            text === "good afternoon" ||
            text === "good evening"
        ) {

            return `
                <p>Hello. I'm Mastercommerce.</p>
                <p>What would you like to learn today?</p>
            `;

        }


        if (
            text.includes("who are you") ||
            text.includes("what are you")
        ) {

            return `
                <p>
                    I'm Mastercommerce, an educational learning platform
                    for Accounting, Economics and Mathematics.
                </p>

                <p>
                    I use the knowledge built into this app to explain
                    concepts, formulas and worked examples.
                </p>
            `;

        }


        if (
            text.includes("your developer") ||
            text.includes("who made you") ||
            text.includes("who created you")
        ) {

            return `
                <p>
                    Mastercommerce was developed by
                    <strong>PD | Web & App Development</strong>.
                </p>

                <p>
                    Founder: Phungo Dembe Vusani.
                </p>
            `;

        }


        return `
            <p>
                I couldn't confidently identify the subject or topic
                from that question.
            </p>

            <p>
                Please mention the Accounting, Economics or Mathematics
                topic you want to study.
            </p>
        `;

    }


    /* =========================================================
       GENERATE ANSWER
    ========================================================= */

    function generateAnswer(question) {

        const calculatorAnswer =
            simpleCalculator(question);

        if (calculatorAnswer) {
            return calculatorAnswer;
        }


        const subject =
            detectSubject(question);


        if (isTopicListRequest(question)) {

            if (!subject) {

                return `
                    <p>
                        I can teach Accounting, Economics and Mathematics.
                    </p>

                    <p>
                        Tell me which subject you want to explore.
                    </p>
                `;

            }

            return getTopicList(subject);

        }


        if (isAllInformationRequest(question)) {

            if (!subject) {

                return `
                    <p>
                        I can provide the knowledge available in
                        Accounting, Economics and Mathematics.
                    </p>

                    <p>
                        Please specify the subject.
                    </p>
                `;

            }

            return getTopicList(subject);

        }


        const results =
            searchKnowledge(question, subject);


        if (!results.length) {

            return generalAnswer(question);

        }


        const best = results[0];


        /*
         * Require a meaningful match.
         * This prevents random subject/topic selection.
         */

        if (best.score < 25) {

            return generalAnswer(question);

        }


        let output = "";


        /*
         * Usually give the strongest matching topic.
         * If the question clearly combines topics, include
         * additional highly relevant records.
         */

        const selected = results
            .filter(result => result.score >= best.score * 0.55)
            .slice(0, 3);


        selected.forEach((result, index) => {

            if (index > 0) {

                output += `
                    <hr style="
                        border:0;
                        border-top:1px solid currentColor;
                        opacity:.12;
                        margin:14px 0;
                    ">
                `;

            }

            output += formatKnowledge(result.item);

        });


        return output;

    }


    /* =========================================================
       CHAT MESSAGE
    ========================================================= */

    function addMessage(role, content) {

        if (welcomeScreen) {
            welcomeScreen.style.display = "none";
        }


        const message = document.createElement("div");

        message.className =
            `message ${
                role === "user"
                    ? "user-message"
                    : "assistant-message"
            }`;


        const bubble = document.createElement("div");

        bubble.className = "message-bubble";


        bubble.innerHTML = content;


        message.appendChild(bubble);

        chatArea.appendChild(message);


        requestAnimationFrame(() => {

            chatArea.scrollTop =
                chatArea.scrollHeight;

        });


        return message;

    }


    /* =========================================================
       THINKING MESSAGE
    ========================================================= */

    function addThinkingMessage() {

        if (welcomeScreen) {
            welcomeScreen.style.display = "none";
        }


        const message = document.createElement("div");

        message.className =
            "message assistant-message";


        const bubble = document.createElement("div");

        bubble.className =
            "message-bubble";


        bubble.innerHTML = `
            <div class="thinking">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;


        message.appendChild(bubble);

        chatArea.appendChild(message);


        chatArea.scrollTop =
            chatArea.scrollHeight;


        return message;

    }


    /* =========================================================
       SEND QUESTION
    ========================================================= */

    let isSending = false;


    function sendQuestion() {

        if (isSending) return;


        const question =
            questionInput.value.trim();


        if (!question) return;


        isSending = true;


        addMessage(
            "user",
            `<p>${escapeHTML(question)}</p>`
        );


        questionInput.value = "";

        autoResizeInput();


        const thinking =
            addThinkingMessage();


        setTimeout(() => {

            const answer =
                generateAnswer(question);


            thinking.remove();


            addMessage(
                "assistant",
                answer
            );


            isSending = false;


            questionInput.focus();

        }, 250);

    }


    /* =========================================================
       INPUT AUTO RESIZE
    ========================================================= */

    function autoResizeInput() {

        questionInput.style.height = "auto";


        const maxHeight = 140;


        questionInput.style.height =
            Math.min(
                questionInput.scrollHeight,
                maxHeight
            ) + "px";

    }


    questionInput.addEventListener(
        "input",
        autoResizeInput
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


    sendButton.addEventListener(
        "click",
        sendQuestion
    );


    /* =========================================================
       SIDEBAR
    ========================================================= */

    function openSidebar() {

        sidebar.classList.add("open");

        sidebarOverlay.classList.add("visible");

    }


    function closeSidebarMenu() {

        sidebar.classList.remove("open");

        sidebarOverlay.classList.remove("visible");

    }


    menuButton.addEventListener(
        "click",
        openSidebar
    );


    closeSidebar.addEventListener(
        "click",
        closeSidebarMenu
    );


    sidebarOverlay.addEventListener(
        "click",
        closeSidebarMenu
    );


    /* =========================================================
       HOME
    ========================================================= */

    homeButton.addEventListener(
        "click",
        () => {

            closeSidebarMenu();

            clearChat();

        }
    );


    /* =========================================================
       NEW CHAT
    ========================================================= */

    function newChat() {

        clearChat();

        questionInput.focus();

    }


    newChatButton.addEventListener(
        "click",
        newChat
    );


    /* =========================================================
       CLEAR CHAT
    ========================================================= */

    function clearChat() {

        chatArea.innerHTML = "";


        const welcome =
            document.createElement("div");


        welcome.id = "welcomeScreen";

        welcome.className =
            "welcome-screen";


        welcome.innerHTML = `
            <div class="welcome-content">

                <div class="welcome-logo">
                    M
                </div>

                <h1>
                    What would you like to learn?
                </h1>

                <p>
                    Ask a question about Accounting,
                    Economics or Mathematics.
                </p>

                <div class="subject-cards">

                    <div class="subject-card">

                        <div class="subject-letter">
                            A
                        </div>

                        <div>
                            <h3>Accounting</h3>

                            <p>
                                Financial accounting,
                                management accounting,
                                tax, auditing, IFRS
                                and calculations.
                            </p>
                        </div>

                    </div>


                    <div class="subject-card">

                        <div class="subject-letter">
                            E
                        </div>

                        <div>
                            <h3>Economics</h3>

                            <p>
                                Microeconomics,
                                macroeconomics,
                                policies, markets,
                                essays and calculations.
                            </p>
                        </div>

                    </div>


                    <div class="subject-card">

                        <div class="subject-letter">
                            M
                        </div>

                        <div>
                            <h3>Mathematics</h3>

                            <p>
                                Algebra, functions,
                                statistics, probability,
                                calculus and problem solving.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        `;


        chatArea.appendChild(welcome);


        questionInput.focus();

    }


    clearChatButton.addEventListener(
        "click",
        () => {

            clearChat();

            closeSidebarMenu();

        }
    );


    /* =========================================================
       PLUS MENU
    ========================================================= */

    function togglePlusMenu() {

        const open =
            plusMenu.classList.toggle("open");


        plusMenu.setAttribute(
            "aria-hidden",
            open ? "false" : "true"
        );


        plusButton.setAttribute(
            "aria-expanded",
            open ? "true" : "false"
        );

    }


    function closePlusMenu() {

        plusMenu.classList.remove("open");

        plusMenu.setAttribute(
            "aria-hidden",
            "true"
        );


        plusButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    plusButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            togglePlusMenu();

        }
    );


    document
        .querySelectorAll(".plus-option")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    closePlusMenu();

                    showFeatureToast();

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

                closePlusMenu();

            }

        }
    );


    /* =========================================================
       FEATURE TOAST
    ========================================================= */

    let toastTimer = null;


    function showFeatureToast() {

        featureToast.classList.add("show");


        clearTimeout(toastTimer);


        toastTimer =
            setTimeout(() => {

                featureToast.classList.remove("show");

            }, 2200);

    }


    /* =========================================================
       ABOUT MODAL
    ========================================================= */

    function openModal(modal) {

        modal.classList.add("open");

    }


    function closeModal(modal) {

        modal.classList.remove("open");

    }


    aboutButton.addEventListener(
        "click",
        () => {

            closeSidebarMenu();

            openModal(aboutModal);

        }
    );


    settingsButton.addEventListener(
        "click",
        () => {

            closeSidebarMenu();

            openModal(settingsModal);

        }
    );


    document
        .querySelectorAll("[data-close]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        button.dataset.close;

                    const modal =
                        document.getElementById(id);

                    if (modal) {
                        closeModal(modal);
                    }

                }
            );

        });


    [aboutModal, settingsModal]
        .forEach(modal => {

            modal.addEventListener(
                "click",
                event => {

                    if (event.target === modal) {

                        closeModal(modal);

                    }

                }
            );

        });


    /* =========================================================
       SETTINGS
    ========================================================= */

    const defaultSettings = {

        theme: "light",
        background: "white",
        font: "medium",
        reducedMotion: false

    };


    function saveSettings(settings) {

        localStorage.setItem(
            "mastercommerceSettings",
            JSON.stringify(settings)
        );

    }


    function getSettings() {

        try {

            const saved =
                localStorage.getItem(
                    "mastercommerceSettings"
                );


            if (!saved) {
                return { ...defaultSettings };
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


    function applySettings(settings) {

        /* Theme */

        document.body.classList.toggle(
            "dark",
            settings.theme === "dark"
        );


        /* Background */

        const backgroundClasses = [
            "background-gray",
            "background-warm",
            "background-blue",
            "background-green",
            "background-lavender"
        ];


        document.body.classList.remove(
            ...backgroundClasses
        );


        if (settings.background !== "white") {

            document.body.classList.add(
                `background-${settings.background}`
            );

        }


        /* Font */

        document.body.classList.remove(
            "font-small",
            "font-large"
        );


        if (settings.font === "small") {

            document.body.classList.add(
                "font-small"
            );

        }


        if (settings.font === "large") {

            document.body.classList.add(
                "font-large"
            );

        }


        /* Motion */

        document.body.classList.toggle(
            "reduced-motion",
            Boolean(settings.reducedMotion)
        );


        /* iOS protection */

        questionInput.style.fontSize = "16px";


        motionButton.textContent =
            settings.reducedMotion
                ? "Normal motion"
                : "Reduced motion";

    }


    let currentSettings =
        getSettings();


    applySettings(currentSettings);


    /* Theme buttons */

    document
        .querySelectorAll("[data-theme]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    currentSettings.theme =
                        button.dataset.theme;

                    saveSettings(
                        currentSettings
                    );

                    applySettings(
                        currentSettings
                    );

                }
            );

        });


    /* Background buttons */

    document
        .querySelectorAll("[data-background]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    currentSettings.background =
                        button.dataset.background;

                    saveSettings(
                        currentSettings
                    );

                    applySettings(
                        currentSettings
                    );

                }
            );

        });


    /* Font buttons */

    document
        .querySelectorAll("[data-font]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    currentSettings.font =
                        button.dataset.font;

                    saveSettings(
                        currentSettings
                    );

                    applySettings(
                        currentSettings
                    );

                }
            );

        });


    /* Motion */

    motionButton.addEventListener(
        "click",
        () => {

            currentSettings.reducedMotion =
                !currentSettings.reducedMotion;

            saveSettings(
                currentSettings
            );

            applySettings(
                currentSettings
            );

        }
    );


    /* Reset */

    resetSettingsButton.addEventListener(
        "click",
        () => {

            currentSettings = {
                ...defaultSettings
            };


            saveSettings(
                currentSettings
            );


            applySettings(
                currentSettings
            );

        }
    );


    /* =========================================================
       KEYBOARD / ESCAPE
    ========================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") {
                return;
            }


            closeSidebarMenu();

            closePlusMenu();

            closeModal(aboutModal);

            closeModal(settingsModal);

        }
    );


    /* =========================================================
       MOBILE ZOOM PROTECTION
    ========================================================= */

    let lastTouchEnd = 0;


    document.addEventListener(
        "touchend",
        event => {

            const now =
                Date.now();


            if (now - lastTouchEnd <= 300) {

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
       INITIALISE
    ========================================================= */

    questionInput.style.fontSize = "16px";

    autoResizeInput();

    questionInput.focus();


    /*
     * Initial greeting.
     *
     * The greeting is shown inside the chat area
     * instead of using question suggestions.
     */

    setTimeout(() => {

        if (
            chatArea.querySelector(".message")
        ) {
            return;
        }


        addMessage(
            "assistant",
            `
                <p>Hello. I'm Mastercommerce.</p>

                <p>
                    What would you like to learn today?
                </p>
            `
        );

    }, 150);

});
