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
       CONVERSATION STATE
    ========================================================= */

    let lastConversationState = {
        subject: null,
        topic: null
    };


    /* =========================================================
       MASTERCOMMERCE KNOWLEDGE ENGINE
       
       Everything below is stored directly inside script.js.
       
       Each topic contains:
       - topic
       - keywords
       - relatedKeywords
       - information
       - formulas
       - rules
       - examples
    ========================================================= */


    /* =========================================================
       ACCOUNTING KNOWLEDGE
    ========================================================= */

    const accountingKnowledge = [

        {
            topic: "Accounting Basics",

            keywords: [
                "accounting",
                "accounting definition",
                "what is accounting",
                "bookkeeping",
                "financial information",
                "accounting equation"
            ],

            relatedKeywords: [
                "business",
                "transactions",
                "records",
                "financial statements",
                "assets",
                "liabilities",
                "equity"
            ],

            information:
                "Accounting is the process of identifying, recording, classifying, summarising and communicating financial information to users so that they can make informed decisions.",

            formulas: [
                "Assets = Equity + Liabilities"
            ],

            rules: [
                "Assets are resources controlled by the business.",
                "Liabilities are obligations owed to other parties.",
                "Equity is the owner's residual interest in the assets after liabilities.",
                "Income increases equity.",
                "Expenses decrease equity."
            ],

            examples: [
                "If a business has assets of R100 000 and liabilities of R40 000, equity is R60 000."
            ]
        },


        {
            topic: "Accounting Equation",

            keywords: [
                "accounting equation",
                "assets liabilities equity",
                "assets equals liabilities",
                "equity formula",
                "capital formula"
            ],

            relatedKeywords: [
                "assets",
                "liabilities",
                "capital",
                "drawings",
                "profit",
                "loss"
            ],

            information:
                "The accounting equation shows the relationship between what a business owns, what it owes and the owner's interest.",

            formulas: [
                "Assets = Equity + Liabilities",
                "Equity = Assets - Liabilities",
                "Equity = Capital + Profit - Drawings"
            ],

            rules: [
                "Every transaction must keep the accounting equation balanced."
            ],

            examples: [
                "Assets = R500 000 and liabilities = R200 000. Equity = R500 000 - R200 000 = R300 000."
            ]
        },


        {
            topic: "Debit and Credit",

            keywords: [
                "debit",
                "credit",
                "debit credit",
                "debit rules",
                "credit rules",
                "double entry"
            ],

            relatedKeywords: [
                "asset",
                "liability",
                "equity",
                "income",
                "expense",
                "capital",
                "drawings"
            ],

            information:
                "Debit and credit are the two sides used in double-entry accounting. Every transaction normally has at least one debit and one credit of equal amounts.",

            formulas: [],

            rules: [
                "Assets increase with a debit and decrease with a credit.",
                "Expenses increase with a debit and decrease with a credit.",
                "Drawings increase with a debit.",
                "Liabilities increase with a credit and decrease with a debit.",
                "Equity increases with a credit.",
                "Income increases with a credit."
            ],

            examples: [
                "Buying equipment for cash: Debit Equipment and Credit Bank/Cash."
            ]
        },


        {
            topic: "Gross Profit and Net Profit",

            keywords: [
                "gross profit",
                "gross profit formula",
                "net profit",
                "gross profit percentage",
                "net profit percentage",
                "profit"
            ],

            relatedKeywords: [
                "sales",
                "cost of sales",
                "expenses",
                "income",
                "mark up"
            ],

            information:
                "Gross profit is the profit made from buying and selling trading stock before operating expenses. Net profit is the remaining profit after other income and expenses are considered.",

            formulas: [
                "Gross Profit = Sales - Cost of Sales",
                "Net Profit = Gross Profit + Other Income - Expenses",
                "Gross Profit % = Gross Profit / Sales × 100",
                "Net Profit % = Net Profit / Sales × 100"
            ],

            rules: [
                "A higher gross profit percentage generally means more gross profit is earned from each rand of sales.",
                "Net profit takes operating expenses and other income into account."
            ],

            examples: [
                "Sales = R100 000 and cost of sales = R60 000. Gross profit = R40 000."
            ]
        },


        {
            topic: "Cost of Sales",

            keywords: [
                "cost of sales",
                "cost of goods sold",
                "cos",
                "opening stock",
                "closing stock",
                "purchases",
                "carriage on purchases"
            ],

            relatedKeywords: [
                "inventory",
                "stock",
                "gross profit",
                "sales"
            ],

            information:
                "Cost of sales measures the cost of inventory that was sold during the accounting period.",

            formulas: [
                "Cost of Sales = Opening Stock + Net Purchases + Carriage on Purchases - Closing Stock",
                "Gross Profit = Sales - Cost of Sales"
            ],

            rules: [
                "Closing stock is deducted because it was not sold during the period."
            ],

            examples: [
                "Opening stock R20 000 + purchases R60 000 + carriage R5 000 - closing stock R15 000 = cost of sales R70 000."
            ]
        },


        {
            topic: "Inventory",

            keywords: [
                "inventory",
                "stock",
                "trading stock",
                "inventory valuation",
                "fifo",
                "weighted average",
                "periodic inventory",
                "perpetual inventory"
            ],

            relatedKeywords: [
                "cost",
                "net realisable value",
                "nrV",
                "cost of sales",
                "closing stock"
            ],

            information:
                "Inventory consists of assets held for sale in the ordinary course of business, or materials used in producing goods or services.",

            formulas: [
                "NRV = Estimated Selling Price - Costs of Completion - Costs Necessary to Make the Sale"
            ],

            rules: [
                "Under IAS 2, inventory is generally measured at the lower of cost and net realisable value.",
                "FIFO assumes the earliest goods purchased are sold first.",
                "Weighted average assigns an average cost per unit."
            ],

            examples: [
                "Cost = R900 000 and NRV = R820 000. Inventory is written down to R820 000, giving an R80 000 write-down."
            ]
        },


        {
            topic: "VAT",

            keywords: [
                "vat",
                "value added tax",
                "input vat",
                "output vat",
                "vat inclusive",
                "vat exclusive",
                "vat 15 percent"
            ],

            relatedKeywords: [
                "south africa",
                "tax",
                "sales",
                "purchases"
            ],

            information:
                "VAT is an indirect consumption tax charged on taxable supplies. In South Africa, the standard VAT rate is 15%.",

            formulas: [
                "VAT = VAT-exclusive amount × 15%",
                "VAT-inclusive amount = VAT-exclusive amount × 1.15",
                "VAT-exclusive amount = VAT-inclusive amount ÷ 1.15",
                "VAT payable = Output VAT - Input VAT"
            ],

            rules: [
                "Output VAT is generally VAT charged on taxable sales.",
                "Input VAT is generally VAT incurred on qualifying business purchases.",
                "The net amount payable is output VAT less allowable input VAT."
            ],

            examples: [
                "R10 000 excluding VAT × 15% = R1 500 VAT. Inclusive amount = R11 500."
            ]
        },


        {
            topic: "Depreciation",

            keywords: [
                "depreciation",
                "straight line depreciation",
                "diminishing balance",
                "carrying amount",
                "residual value",
                "useful life"
            ],

            relatedKeywords: [
                "asset",
                "ppe",
                "property plant equipment",
                "non current asset"
            ],

            information:
                "Depreciation is the systematic allocation of the depreciable amount of an asset over its useful life.",

            formulas: [
                "Straight-line depreciation = (Cost - Residual Value) / Useful Life",
                "Carrying Amount = Cost - Accumulated Depreciation - Accumulated Impairment"
            ],

            rules: [
                "Depreciation is an expense unless included in another asset's cost.",
                "Useful life and residual value should be reviewed where required."
            ],

            examples: [
                "Cost R850 000, residual value R50 000, useful life 8 years. Annual depreciation = (850 000 - 50 000) ÷ 8 = R100 000."
            ]
        },


        {
            topic: "IAS 16 - Property Plant and Equipment",

            keywords: [
                "ias 16",
                "property plant equipment",
                "ppe",
                "property plant and equipment",
                "depreciation",
                "residual value",
                "useful life",
                "carrying amount",
                "revaluation",
                "disposal"
            ],

            relatedKeywords: [
                "asset",
                "recognition",
                "cost model",
                "revaluation model",
                "component accounting"
            ],

            information:
                "IAS 16 deals with property, plant and equipment. PPE is recognised when it is probable that future economic benefits will flow to the entity and the cost can be measured reliably.",

            formulas: [
                "Initial cost = Purchase price + Directly attributable costs",
                "Depreciable amount = Cost - Residual value",
                "Straight-line depreciation = (Cost - Residual value) / Useful life",
                "Carrying amount = Cost - Accumulated depreciation - Accumulated impairment"
            ],

            rules: [
                "Directly attributable costs necessary to bring the asset to the location and condition necessary for operation can form part of cost.",
                "Training costs are normally expensed.",
                "An entity may use the cost model or revaluation model as permitted by IAS 16.",
                "Significant components with different useful lives may need separate depreciation.",
                "Depreciation begins when the asset is available for use.",
                "An asset is derecognised on disposal or when no future economic benefits are expected."
            ],

            examples: [
                "Purchase price R800 000 + installation R20 000 + delivery R30 000 = R850 000 capitalised cost. Training of R15 000 is normally expensed."
            ]
        },


        {
            topic: "IAS 2 - Inventories",

            keywords: [
                "ias 2",
                "ias2",
                "inventories",
                "inventory",
                "net realisable value",
                "nrv",
                "fifo",
                "weighted average"
            ],

            relatedKeywords: [
                "cost",
                "closing stock",
                "cost of sales",
                "write down"
            ],

            information:
                "IAS 2 prescribes accounting for inventories. Inventory is measured at the lower of cost and net realisable value.",

            formulas: [
                "NRV = Estimated selling price - costs of completion - costs necessary to make the sale"
            ],

            rules: [
                "Inventory cost includes purchase costs, conversion costs and other costs incurred to bring inventory to its present location and condition.",
                "Inventory is written down when NRV is below cost."
            ],

            examples: [
                "Inventory cost R700 000, selling price R750 000, completion costs R30 000 and selling costs R20 000. NRV = R700 000, so there is no write-down."
            ]
        },


        {
            topic: "IAS 7 - Statement of Cash Flows",

            keywords: [
                "ias 7",
                "cash flow",
                "cash flows",
                "operating activities",
                "investing activities",
                "financing activities",
                "cash equivalents"
            ],

            relatedKeywords: [
                "cash",
                "bank",
                "investment",
                "financing"
            ],

            information:
                "IAS 7 requires information about changes in cash and cash equivalents through operating, investing and financing activities.",

            formulas: [],

            rules: [
                "Operating activities relate to the main revenue-producing activities.",
                "Investing activities relate mainly to acquiring and disposing of long-term assets and investments.",
                "Financing activities relate to changes in contributed equity and borrowings."
            ],

            examples: [
                "Cash received from customers is generally an operating cash flow.",
                "Cash paid to buy equipment is generally an investing cash flow.",
                "Cash received from issuing shares is generally a financing cash flow."
            ]
        },


        {
            topic: "IAS 8 - Accounting Policies Estimates and Errors",

            keywords: [
                "ias 8",
                "accounting policies",
                "accounting estimates",
                "errors",
                "retrospective",
                "prospective"
            ],

            relatedKeywords: [
                "prior period",
                "financial statements",
                "correction"
            ],

            information:
                "IAS 8 deals with accounting policies, changes in accounting estimates and errors.",

            formulas: [],

            rules: [
                "Changes in accounting policies are generally applied retrospectively unless impracticable or another standard provides specific transitional requirements.",
                "Changes in accounting estimates are generally recognised prospectively.",
                "Material prior-period errors are generally corrected retrospectively."
            ],

            examples: [
                "Changing the estimated useful life of an asset is normally a change in estimate and therefore affects the current and future periods."
            ]
        },


        {
            topic: "IAS 10 - Events After Reporting Period",

            keywords: [
                "ias 10",
                "events after reporting period",
                "adjusting event",
                "non adjusting event",
                "adjusting events"
            ],

            relatedKeywords: [
                "reporting date",
                "financial statements",
                "year end"
            ],

            information:
                "IAS 10 deals with events occurring between the reporting date and the date the financial statements are authorised for issue.",

            formulas: [],

            rules: [
                "Adjusting events provide evidence of conditions existing at the reporting date.",
                "Non-adjusting events relate to conditions arising after the reporting date.",
                "Material non-adjusting events may require disclosure."
            ],

            examples: [
                "A customer bankruptcy shortly after year-end may provide evidence that the receivable was impaired at year-end."
            ]
        },


        {
            topic: "IAS 12 - Income Taxes",

            keywords: [
                "ias 12",
                "income tax",
                "deferred tax",
                "current tax",
                "tax base",
                "temporary difference",
                "dtl",
                "dta"
            ],

            relatedKeywords: [
                "deferred tax liability",
                "deferred tax asset",
                "carrying amount",
                "taxable temporary difference",
                "deductible temporary difference"
            ],

            information:
                "IAS 12 deals with current and deferred income tax. Deferred tax arises from temporary differences between the carrying amount of an asset or liability and its tax base.",

            formulas: [
                "Temporary difference = Carrying amount - Tax base",
                "Deferred tax = Temporary difference × Applicable tax rate"
            ],

            rules: [
                "A taxable temporary difference generally gives rise to a deferred tax liability, subject to exceptions.",
                "A deductible temporary difference may give rise to a deferred tax asset when recognition criteria are met.",
                "Permanent differences do not create deferred tax."
            ],

            examples: [
                "Carrying amount R500 000, tax base R350 000 and tax rate 27%. Taxable temporary difference = R150 000. DTL = R40 500."
            ]
        },


        {
            topic: "IAS 21 - Foreign Exchange",

            keywords: [
                "ias 21",
                "foreign exchange",
                "foreign currency",
                "exchange rate",
                "functional currency",
                "monetary items",
                "exchange difference"
            ],

            relatedKeywords: [
                "rand",
                "dollar",
                "euro",
                "closing rate",
                "spot rate"
            ],

            information:
                "IAS 21 deals with foreign currency transactions, translation of foreign operations and determination of functional currency.",

            formulas: [
                "Foreign currency amount × Exchange rate = Functional currency amount"
            ],

            rules: [
                "A foreign currency transaction is initially recorded using the spot exchange rate at the transaction date.",
                "Foreign currency monetary items are generally translated at the closing rate at reporting date.",
                "Exchange differences are generally recognised in profit or loss unless another requirement applies."
            ],

            examples: [
                "$10 000 at R18/$ = R180 000. If the closing rate becomes R19/$, the monetary item becomes R190 000, creating a R10 000 exchange difference."
            ]
        },


        {
            topic: "IAS 23 - Borrowing Costs",

            keywords: [
                "ias 23",
                "borrowing costs",
                "qualifying asset",
                "capitalised interest",
                "interest"
            ],

            relatedKeywords: [
                "construction",
                "loan",
                "capitalisation"
            ],

            information:
                "IAS 23 requires borrowing costs directly attributable to the acquisition, construction or production of a qualifying asset to be capitalised as part of that asset's cost.",

            formulas: [
                "Borrowing cost = Principal × Interest rate × Time"
            ],

            rules: [
                "Capitalisation starts when expenditure is incurred, borrowing costs are incurred and activities necessary to prepare the asset are in progress.",
                "Capitalisation stops when substantially all activities necessary to prepare the asset are complete."
            ],

            examples: [
                "R5 million borrowed at 10% for a qualifying asset for a full year gives R500 000 borrowing cost before considering specific adjustments."
            ]
        },


        {
            topic: "IAS 24 - Related Parties",

            keywords: [
                "ias 24",
                "related parties",
                "related party",
                "key management personnel",
                "related party transaction"
            ],

            relatedKeywords: [
                "director",
                "parent",
                "subsidiary",
                "associate",
                "family"
            ],

            information:
                "IAS 24 requires disclosure of related-party relationships, transactions and outstanding balances in specified circumstances.",

            formulas: [],

            rules: [
                "Related parties can include parents, subsidiaries, associates, joint ventures, key management personnel and certain close family members.",
                "The purpose is to provide users with information about relationships and transactions that could affect financial statements."
            ],

            examples: []
        },


        {
            topic: "IAS 28 - Associates and Joint Ventures",

            keywords: [
                "ias 28",
                "associate",
                "significant influence",
                "equity method",
                "joint venture",
                "investment in associate",
                "board representation"
            ],

            relatedKeywords: [
                "20 percent",
                "20%",
                "voting power",
                "equity method",
                "goodwill",
                "dividend",
                "net investment"
            ],

            information:
                "IAS 28 governs investments in associates and joint ventures. Significant influence is the power to participate in financial and operating policy decisions without having control or joint control.",

            formulas: [
                "Investor's share of profit = Ownership percentage × Associate profit",
                "Investment carrying amount = Opening carrying amount + Share of profit - Dividends - Impairment ± other required adjustments"
            ],

            rules: [
                "Holding 20% or more of voting power creates a rebuttable presumption of significant influence.",
                "Board representation and participation in policy-making can provide evidence of significant influence.",
                "Goodwill arising on acquiring an associate is included in the carrying amount of the investment.",
                "Dividends received reduce the carrying amount of the investment under the equity method.",
                "The investor recognises its share of the associate's profit or loss."
            ],

            examples: [
                "If an investor owns 30% of an associate that earns R1 million, the investor's share of profit is R300 000.",
                "If the associate pays a R500 000 dividend, the investor's 30% share is R150 000 and this reduces the investment carrying amount."
            ]
        },


        {
            topic: "IFRS 7 - Financial Instruments Disclosures",

            keywords: [
                "ifrs 7",
                "financial instruments disclosures",
                "financial risk",
                "credit risk",
                "liquidity risk",
                "market risk"
            ],

            relatedKeywords: [
                "risk",
                "disclosure",
                "financial asset",
                "financial liability"
            ],

            information:
                "IFRS 7 requires disclosures that enable users to evaluate the significance of financial instruments and the nature and extent of risks arising from them.",

            formulas: [],

            rules: [
                "Important financial risks include credit risk, liquidity risk and market risk.",
                "Disclosures include information about risk exposures and how those risks are managed."
            ],

            examples: []
        },


        {
            topic: "IFRS 9 - Financial Instruments",

            keywords: [
                "ifrs 9",
                "financial instruments",
                "financial asset",
                "amortised cost",
                "fvoci",
                "fvtpl",
                "fair value through profit or loss",
                "expected credit loss",
                "ecl",
                "sppi"
            ],

            relatedKeywords: [
                "interest",
                "credit loss",
                "business model",
                "cash flows",
                "financial liability"
            ],

            information:
                "IFRS 9 deals with classification and measurement of financial assets and liabilities, impairment and hedge accounting.",

            formulas: [
                "Expected Credit Loss = Exposure × Probability of Default × Loss Given Default"
            ],

            rules: [
                "Financial assets may be measured at amortised cost, FVOCI or FVTPL depending on classification requirements.",
                "Amortised cost classification generally requires a hold-to-collect business model and cash flows that pass the SPPI test.",
                "The effective interest method is used for amortised cost.",
                "The expected credit loss model is used for impairment."
            ],

            examples: [
                "A loan of R500 000 with an estimated loss rate of 4% and recovery factor represented by 60% exposure gives a simplified expected loss of R12 000."
            ]
        },


        {
            topic: "IFRS 10 - Consolidated Financial Statements",

            keywords: [
                "ifrs 10",
                "consolidation",
                "consolidated financial statements",
                "control",
                "subsidiary",
                "parent",
                "nci",
                "non controlling interest",
                "intragroup"
            ],

            relatedKeywords: [
                "85%",
                "elimination",
                "goodwill",
                "pre acquisition",
                "post acquisition",
                "intragroup profit"
            ],

            information:
                "IFRS 10 establishes principles for presenting consolidated financial statements when an entity controls one or more other entities.",

            formulas: [
                "Goodwill = Consideration transferred + NCI + Fair value of previous interest - Fair value of identifiable net assets acquired"
            ],

            rules: [
                "Control exists when the investor has power over the investee, exposure or rights to variable returns and the ability to use power to affect those returns.",
                "Intragroup balances and transactions are eliminated on consolidation.",
                "Unrealised intragroup profits are eliminated to the extent required.",
                "NCI is presented separately within equity."
            ],

            examples: [
                "Parent consideration R10 million + NCI R2 million - identifiable net assets R9 million = goodwill of R3 million.",
                "If NCI is 20% and relevant net assets are R3 million, NCI is R600 000."
            ]
        },


        {
            topic: "IFRS 15 - Revenue",

            keywords: [
                "ifrs 15",
                "revenue",
                "five step model",
                "performance obligation",
                "contract asset",
                "contract liability",
                "variable consideration",
                "principal agent"
            ],

            relatedKeywords: [
                "customer",
                "contract",
                "transaction price",
                "standalone selling price"
            ],

            information:
                "IFRS 15 establishes a five-step model for recognising revenue from contracts with customers.",

            formulas: [
                "Allocated transaction price = Transaction price × Standalone selling price / Total standalone selling prices"
            ],

            rules: [
                "Identify the contract with a customer.",
                "Identify the performance obligations.",
                "Determine the transaction price.",
                "Allocate the transaction price to performance obligations.",
                "Recognise revenue when or as each performance obligation is satisfied."
            ],

            examples: [
                "A contract price of R12 000 is allocated between goods with standalone selling prices of R10 000 and R5 000. The allocations are R8 000 and R4 000."
            ]
        },


        {
            topic: "IFRS 16 - Leases",

            keywords: [
                "ifrs 16",
                "lease",
                "right of use asset",
                "rou asset",
                "lease liability",
                "lessee"
            ],

            relatedKeywords: [
                "rent",
                "present value",
                "interest",
                "depreciation"
            ],

            information:
                "IFRS 16 requires a lessee to recognise a right-of-use asset and lease liability for most leases, subject to exemptions.",

            formulas: [
                "Lease liability = Present value of lease payments",
                "Interest expense = Opening lease liability × Interest rate",
                "Closing liability = Opening liability + Interest - Lease payment"
            ],

            rules: [
                "The right-of-use asset is generally depreciated over the relevant period.",
                "The lease liability is subsequently measured using the effective interest method."
            ],

            examples: [
                "Opening lease liability R379 000, interest R37 900 and payment R100 000 gives closing liability of R316 900."
            ]
        },


        {
            topic: "IFRS 3 - Business Combinations",

            keywords: [
                "ifrs 3",
                "business combination",
                "acquisition method",
                "goodwill",
                "bargain purchase",
                "acquirer"
            ],

            relatedKeywords: [
                "subsidiary",
                "consideration",
                "fair value",
                "nci",
                "net assets"
            ],

            information:
                "IFRS 3 establishes accounting requirements for business combinations using the acquisition method.",

            formulas: [
                "Goodwill = Consideration + NCI + Previous interest - Fair value of identifiable net assets"
            ],

            rules: [
                "Identify the acquirer.",
                "Determine the acquisition date.",
                "Recognise identifiable assets acquired and liabilities assumed at acquisition-date fair values, subject to specific requirements.",
                "Recognise goodwill or a bargain purchase gain."
            ],

            examples: [
                "Consideration R10m + NCI R2m - net identifiable assets R9m = goodwill R3m."
            ]
        },


        {
            topic: "IAS 36 - Impairment of Assets",

            keywords: [
                "ias 36",
                "impairment",
                "recoverable amount",
                "value in use",
                "fair value less costs of disposal",
                "fvlcd",
                "carrying amount"
            ],

            relatedKeywords: [
                "asset",
                "loss",
                "recoverable amount",
                "cash generating unit",
                "cgu"
            ],

            information:
                "IAS 36 requires assets not to be carried above their recoverable amount.",

            formulas: [
                "Recoverable amount = Higher of Value in Use and Fair Value Less Costs of Disposal",
                "Impairment loss = Carrying Amount - Recoverable Amount"
            ],

            rules: [
                "An impairment loss is recognised when carrying amount exceeds recoverable amount.",
                "Cash-generating units are used where an individual asset does not generate largely independent cash inflows."
            ],

            examples: [
                "Carrying amount R1.5m, FVLCD R1.2m and VIU R1.35m. Recoverable amount = R1.35m. Impairment loss = R150 000."
            ]
        },


        {
            topic: "IAS 37 - Provisions",

            keywords: [
                "ias 37",
                "provision",
                "contingent liability",
                "contingent asset",
                "present obligation",
                "probable",
                "best estimate"
            ],

            relatedKeywords: [
                "lawsuit",
                "obligation",
                "uncertain",
                "discount",
                "expected value"
            ],

            information:
                "IAS 37 deals with provisions, contingent liabilities and contingent assets.",

            formulas: [
                "Expected value = Σ Probability × Possible outcome"
            ],

            rules: [
                "A provision is recognised when there is a present obligation from a past event, a probable outflow of resources and a reliable estimate can be made.",
                "A contingent liability is generally disclosed rather than recognised unless the probability and other recognition requirements are met.",
                "Long-term provisions may require discounting."
            ],

            examples: [
                "Possible outcomes: 60% probability of R0, 30% of R1m and 10% of R3m. Expected value = R600 000."
            ]
        },


        {
            topic: "IAS 33 - Earnings Per Share",

            keywords: [
                "ias 33",
                "earnings per share",
                "eps",
                "weighted average shares",
                "basic eps"
            ],

            relatedKeywords: [
                "profit",
                "ordinary shares",
                "shareholders"
            ],

            information:
                "IAS 33 prescribes principles for calculating and presenting earnings per share for entities whose ordinary shares are publicly traded or are in the process of issuing such shares.",

            formulas: [
                "Basic EPS = Profit attributable to ordinary equity holders / Weighted average number of ordinary shares"
            ],

            rules: [
                "The weighted average number of ordinary shares reflects changes in shares during the period."
            ],

            examples: [
                "Profit R10m and weighted average shares of 5m gives EPS of R2.00."
            ]
        },


        {
            topic: "Bank Reconciliation",

            keywords: [
                "bank reconciliation",
                "bank recon",
                "cash book",
                "bank statement",
                "unpresented cheque",
                "outstanding deposit"
            ],

            relatedKeywords: [
                "bank",
                "cash",
                "cheque",
                "deposit"
            ],

            information:
                "A bank reconciliation compares the business's cash records with the bank statement and explains differences between the two balances.",

            formulas: [],

            rules: [
                "Unpresented cheques may appear in the cash book but not yet in the bank statement.",
                "Outstanding deposits may appear in the cash book but not yet in the bank statement.",
                "Bank charges appearing only on the bank statement normally need recording in the cash book."
            ],

            examples: []
        },


        {
            topic: "Accounting Ratios",

            keywords: [
                "accounting ratios",
                "ratios",
                "current ratio",
                "acid test",
                "debt ratio",
                "inventory turnover",
                "debtors collection",
                "creditors payment",
                "gross profit percentage",
                "net profit percentage",
                "roe",
                "roa"
            ],

            relatedKeywords: [
                "liquidity",
                "solvency",
                "profitability",
                "efficiency"
            ],

            information:
                "Accounting ratios are used to analyse liquidity, profitability, solvency and operating efficiency.",

            formulas: [
                "Current ratio = Current Assets / Current Liabilities",
                "Acid test = (Current Assets - Inventory) / Current Liabilities",
                "Debt ratio = Total Liabilities / Total Assets × 100",
                "Gross profit % = Gross Profit / Sales × 100",
                "Net profit % = Net Profit / Sales × 100",
                "ROE = Net Profit / Average Equity × 100",
                "ROA = Net Profit / Average Assets × 100",
                "Inventory turnover = Cost of Sales / Average Inventory",
                "Debtors collection period = Average Receivables / Credit Sales × 365",
                "Creditors payment period = Average Payables / Credit Purchases × 365"
            ],

            rules: [
                "Liquidity ratios measure the ability to meet short-term obligations.",
                "Profitability ratios measure profit performance.",
                "Solvency ratios examine long-term financial risk.",
                "Efficiency ratios examine how effectively assets and working capital are used."
            ],

            examples: [
                "Current assets R200 000 and current liabilities R100 000 gives a current ratio of 2:1."
            ]
        }

    ];


    /* =========================================================
       ECONOMICS KNOWLEDGE
    ========================================================= */

    const economicsKnowledge = [

        {
            topic: "Economics",

            keywords: [
                "economics",
                "what is economics",
                "definition of economics",
                "economic problem"
            ],

            relatedKeywords: [
                "scarcity",
                "choice",
                "resources",
                "needs",
                "wants",
                "opportunity cost"
            ],

            information:
                "Economics is the study of how individuals, businesses, governments and societies allocate scarce resources that have alternative uses.",

            formulas: [],

            rules: [
                "Resources are scarce.",
                "Human wants are unlimited relative to available resources.",
                "Scarcity creates the need for choice.",
                "Every choice can involve an opportunity cost."
            ],

            examples: [
                "If a student spends three hours studying Accounting instead of working, the income that could have been earned from working is an opportunity cost."
            ]
        },


        {
            topic: "Scarcity and Opportunity Cost",

            keywords: [
                "scarcity",
                "opportunity cost",
                "choice",
                "economic problem",
                "limited resources",
                "unlimited wants"
            ],

            relatedKeywords: [
                "resources",
                "needs",
                "wants",
                "trade off"
            ],

            information:
                "Scarcity means resources are limited while wants are unlimited. Opportunity cost is the value of the next best alternative forgone when a choice is made.",

            formulas: [
                "Opportunity cost = Value of the next best alternative forgone"
            ],

            rules: [
                "Opportunity cost is not necessarily money.",
                "The next best alternative is important; it is not every alternative."
            ],

            examples: [
                "If R1 000 is spent on a phone instead of textbooks, the textbooks are the relevant opportunity cost if they were the next best alternative."
            ]
        },


        {
            topic: "Factors of Production",

            keywords: [
                "factors of production",
                "land labour capital entrepreneurship",
                "land",
                "labour",
                "capital",
                "entrepreneurship"
            ],

            relatedKeywords: [
                "rent",
                "wages",
                "interest",
                "profit",
                "resources"
            ],

            information:
                "The four main factors of production are land, labour, capital and entrepreneurship.",

            formulas: [],

            rules: [
                "Land is rewarded by rent.",
                "Labour is rewarded by wages.",
                "Capital is rewarded by interest.",
                "Entrepreneurship is rewarded by profit."
            ],

            examples: []
        },


        {
            topic: "Demand",

            keywords: [
                "demand",
                "law of demand",
                "demand curve",
                "quantity demanded",
                "change in demand",
                "movement along demand"
            ],

            relatedKeywords: [
                "price",
                "consumer",
                "income",
                "substitute",
                "complement"
            ],

            information:
                "Demand refers to the quantities of a good or service that consumers are willing and able to buy at different prices during a particular period.",

            formulas: [],

            rules: [
                "The law of demand generally states that, ceteris paribus, quantity demanded falls when price rises and rises when price falls.",
                "A movement along the demand curve is caused by a change in the good's own price.",
                "A shift of the demand curve is caused by other determinants such as income, tastes and prices of related goods."
            ],

            examples: []
        },


        {
            topic: "Supply",

            keywords: [
                "supply",
                "law of supply",
                "supply curve",
                "quantity supplied",
                "change in supply",
                "movement along supply"
            ],

            relatedKeywords: [
                "price",
                "producer",
                "cost",
                "technology",
                "tax"
            ],

            information:
                "Supply refers to the quantities of a good or service that producers are willing and able to offer for sale at different prices during a period.",

            formulas: [],

            rules: [
                "The law of supply generally states that quantity supplied rises as price rises, ceteris paribus.",
                "A change in own price causes movement along the supply curve.",
                "Changes in production costs, technology, taxes or subsidies can shift supply."
            ],

            examples: []
        },


        {
            topic: "Market Equilibrium",

            keywords: [
                "equilibrium",
                "market equilibrium",
                "equilibrium price",
                "equilibrium quantity",
                "shortage",
                "surplus"
            ],

            relatedKeywords: [
                "demand",
                "supply",
                "market",
                "price"
            ],

            information:
                "Market equilibrium occurs where quantity demanded equals quantity supplied.",

            formulas: [
                "Equilibrium condition: Qd = Qs"
            ],

            rules: [
                "A shortage occurs when quantity demanded exceeds quantity supplied.",
                "A surplus occurs when quantity supplied exceeds quantity demanded.",
                "Market price tends to adjust through the interaction of demand and supply."
            ],

            examples: []
        },


        {
            topic: "Elasticity",

            keywords: [
                "elasticity",
                "price elasticity",
                "ped",
                "pes",
                "income elasticity",
                "yed",
                "cross elasticity",
                "xed"
            ],

            relatedKeywords: [
                "demand",
                "supply",
                "percentage change",
                "elastic",
                "inelastic",
                "substitute",
                "complement"
            ],

            information:
                "Elasticity measures the responsiveness of one economic variable to a change in another variable.",

            formulas: [
                "PED = % change in quantity demanded / % change in price",
                "PES = % change in quantity supplied / % change in price",
                "YED = % change in quantity demanded / % change in income",
                "XED = % change in quantity demanded of good A / % change in price of good B"
            ],

            rules: [
                "PED greater than 1 in absolute value indicates elastic demand.",
                "PED less than 1 in absolute value indicates inelastic demand.",
                "XED is positive for substitutes and negative for complements.",
                "YED is generally positive for normal goods and negative for inferior goods."
            ],

            examples: [
                "If price rises by 10% and quantity demanded falls by 20%, PED = -2. Demand is elastic."
            ]
        },


        {
            topic: "Market Structures",

            keywords: [
                "market structure",
                "perfect competition",
                "monopoly",
                "oligopoly",
                "monopolistic competition"
            ],

            relatedKeywords: [
                "firms",
                "competition",
                "barriers to entry",
                "price taker",
                "price maker",
                "market power"
            ],

            information:
                "Market structures describe the characteristics of markets, including the number of firms, product differentiation, barriers to entry and degree of market power.",

            formulas: [
                "TR = Price × Quantity",
                "Profit = Total Revenue - Total Cost",
                "AR = Total Revenue / Quantity",
                "AC = Total Cost / Quantity",
                "MC = Change in Total Cost / Change in Quantity"
            ],

            rules: [
                "Perfect competition has many firms, homogeneous products and relatively free entry and exit.",
                "A monopoly has a single dominant seller with significant barriers to entry.",
                "An oligopoly has a small number of significant firms.",
                "Monopolistic competition has many firms selling differentiated products."
            ],

            examples: []
        },


        {
            topic: "Inflation",

            keywords: [
                "inflation",
                "consumer price index",
                "cpi",
                "demand pull",
                "cost push",
                "imported inflation",
                "deflation",
                "disinflation",
                "hyperinflation",
                "stagflation"
            ],

            relatedKeywords: [
                "prices",
                "purchasing power",
                "cost of living",
                "interest rate",
                "money"
            ],

            information:
                "Inflation is a sustained increase in the general price level of goods and services over time, which reduces the purchasing power of money.",

            formulas: [
                "Inflation rate = (CPI current - CPI previous) / CPI previous × 100"
            ],

            rules: [
                "Demand-pull inflation can occur when aggregate demand grows faster than productive capacity.",
                "Cost-push inflation can arise from rising production costs.",
                "Imported inflation can result from higher import prices or currency depreciation.",
                "Deflation is a sustained fall in the general price level.",
                "Disinflation means the inflation rate is falling, not necessarily that prices are falling."
            ],

            examples: []
        },


        {
            topic: "Unemployment",

            keywords: [
                "unemployment",
                "unemployment rate",
                "frictional unemployment",
                "structural unemployment",
                "cyclical unemployment",
                "seasonal unemployment",
                "labour force"
            ],

            relatedKeywords: [
                "employment",
                "workers",
                "jobs",
                "labour market",
                "wages"
            ],

            information:
                "Unemployment occurs when people who are part of the labour force are without work but are available for work and seeking employment.",

            formulas: [
                "Unemployment rate = Unemployed / Labour force × 100",
                "Labour force participation rate = Labour force / Working-age population × 100"
            ],

            rules: [
                "Frictional unemployment is associated with people moving between jobs.",
                "Structural unemployment results from a mismatch between workers' skills and available jobs.",
                "Cyclical unemployment is linked to fluctuations in economic activity.",
                "Seasonal unemployment occurs because some jobs are available only during particular seasons."
            ],

            examples: []
        },


        {
            topic: "GDP and Economic Growth",

            keywords: [
                "gdp",
                "gross domestic product",
                "economic growth",
                "real gdp",
                "nominal gdp",
                "gdp per capita",
                "growth rate"
            ],

            relatedKeywords: [
                "output",
                "production",
                "income",
                "population",
                "economy"
            ],

            information:
                "GDP measures the market value of final goods and services produced within an economy during a specified period. Economic growth refers to an increase in real output over time.",

            formulas: [
                "GDP = C + I + G + (X - M)",
                "GDP per capita = GDP / Population",
                "Growth rate = (New value - Old value) / Old value × 100"
            ],

            rules: [
                "Real GDP removes the effect of price changes more effectively than nominal GDP.",
                "GDP per capita divides GDP by population.",
                "Economic growth is not the same as economic development."
            ],

            examples: [
                "If GDP rises from R1 trillion to R1.05 trillion, growth = 5%."
            ]
        },


        {
            topic: "Aggregate Demand",

            keywords: [
                "aggregate demand",
                "ad",
                "consumption",
                "investment",
                "government spending",
                "net exports",
                "c i g x m"
            ],

            relatedKeywords: [
                "gdp",
                "macroeconomics",
                "economy",
                "spending"
            ],

            information:
                "Aggregate demand is the total planned expenditure on domestically produced final goods and services at different price levels.",

            formulas: [
                "AD = C + I + G + (X - M)"
            ],

            rules: [
                "Consumption is household spending.",
                "Investment is spending on capital goods and inventories.",
                "Government spending is expenditure by government.",
                "Net exports equal exports minus imports."
            ],

            examples: []
        },


        {
            topic: "Fiscal Policy",

            keywords: [
                "fiscal policy",
                "government spending",
                "taxation",
                "budget deficit",
                "budget surplus",
                "expansionary fiscal policy",
                "contractionary fiscal policy"
            ],

            relatedKeywords: [
                "government",
                "tax",
                "spending",
                "economy",
                "aggregate demand"
            ],

            information:
                "Fiscal policy refers to government decisions about taxation and expenditure used to influence economic activity and pursue public objectives.",

            formulas: [
                "Budget balance = Government revenue - Government expenditure"
            ],

            rules: [
                "Expansionary fiscal policy can involve higher government spending or lower taxes.",
                "Contractionary fiscal policy can involve lower government spending or higher taxes.",
                "A deficit occurs when expenditure exceeds revenue.",
                "A surplus occurs when revenue exceeds expenditure."
            ],

            examples: []
        },


        {
            topic: "Monetary Policy",

            keywords: [
                "monetary policy",
                "repo rate",
                "interest rate",
                "sarb",
                "south african reserve bank",
                "inflation targeting"
            ],

            relatedKeywords: [
                "money",
                "credit",
                "borrowing",
                "lending",
                "inflation"
            ],

            information:
                "Monetary policy is the process through which a central bank influences financial conditions, particularly interest rates and liquidity, to achieve macroeconomic objectives.",

            formulas: [
                "Approximate real interest rate = Nominal interest rate - Inflation rate"
            ],

            rules: [
                "The South African Reserve Bank conducts monetary policy in South Africa.",
                "Higher interest rates can reduce borrowing and interest-sensitive spending.",
                "Lower interest rates can encourage borrowing and spending.",
                "The effects of monetary policy occur through transmission mechanisms and may involve time lags."
            ],

            examples: []
        },


        {
            topic: "Multiplier",

            keywords: [
                "multiplier",
                "economic multiplier",
                "mps",
                "mpc",
                "marginal propensity to consume",
                "marginal propensity to save"
            ],

            relatedKeywords: [
                "consumption",
                "saving",
                "income",
                "investment",
                "government spending"
            ],

            information:
                "The Keynesian multiplier shows how an initial change in autonomous expenditure can produce a larger eventual change in aggregate income.",

            formulas: [
                "MPC = Change in Consumption / Change in Income",
                "MPS = Change in Saving / Change in Income",
                "MPC + MPS = 1",
                "Multiplier = 1 / (1 - MPC)",
                "Multiplier = 1 / MPS"
            ],

            rules: [
                "A higher MPC generally produces a larger simple spending multiplier.",
                "Leakages such as saving, taxation and imports reduce the overall multiplier effect."
            ],

            examples: [
                "If MPC = 0.8, multiplier = 1 / (1 - 0.8) = 5."
            ]
        },


        {
            topic: "Business Cycles",

            keywords: [
                "business cycle",
                "expansion",
                "peak",
                "contraction",
                "trough",
                "recovery",
                "recession"
            ],

            relatedKeywords: [
                "gdp",
                "economic activity",
                "output",
                "employment"
            ],

            information:
                "The business cycle describes fluctuations in economic activity around the economy's long-run growth path.",

            formulas: [],

            rules: [
                "Expansion is a period of rising economic activity.",
                "Peak is the high point before contraction.",
                "Contraction is a decline in economic activity.",
                "Trough is the low point.",
                "Recovery is the movement from a trough toward expansion."
            ],

            examples: []
        },


        {
            topic: "Externalities",

            keywords: [
                "externalities",
                "externality",
                "positive externality",
                "negative externality",
                "social cost",
                "social benefit",
                "pollution"
            ],

            relatedKeywords: [
                "market failure",
                "private cost",
                "external cost",
                "government",
                "environment"
            ],

            information:
                "An externality occurs when an economic activity affects third parties who are not fully reflected in the market transaction.",

            formulas: [
                "Social Cost = Private Cost + External Cost",
                "Social Benefit = Private Benefit + External Benefit"
            ],

            rules: [
                "Negative externalities impose external costs on third parties.",
                "Positive externalities create external benefits for third parties.",
                "Externalities are one source of market failure."
            ],

            examples: [
                "Factory pollution can impose health and environmental costs on nearby residents."
            ]
        },


        {
            topic: "International Trade",

            keywords: [
                "international trade",
                "trade",
                "exports",
                "imports",
                "tariff",
                "quota",
                "protectionism",
                "comparative advantage"
            ],

            relatedKeywords: [
                "wto",
                "globalisation",
                "foreign exchange",
                "terms of trade"
            ],

            information:
                "International trade involves exchange of goods and services between countries. Countries may trade because of differences in resources, technology, productivity and opportunity costs.",

            formulas: [
                "Trade balance = Exports - Imports",
                "Terms of trade = Export price index / Import price index × 100"
            ],

            rules: [
                "A tariff is a tax on imports.",
                "A quota is a quantitative restriction on imports.",
                "Protectionism refers to policies that restrict or influence international competition."
            ],

            examples: []
        },


        {
            topic: "Foreign Exchange",

            keywords: [
                "foreign exchange",
                "exchange rate",
                "currency",
                "appreciation",
                "depreciation",
                "rand",
                "dollar"
            ],

            relatedKeywords: [
                "exports",
                "imports",
                "forex",
                "international trade"
            ],

            information:
                "The foreign exchange market is where currencies are bought and sold. An exchange rate expresses the value of one currency in terms of another.",

            formulas: [],

            rules: [
                "Currency appreciation means a currency becomes more valuable relative to another currency.",
                "Currency depreciation means it becomes less valuable.",
                "A weaker domestic currency can make exports cheaper for foreign buyers and imports more expensive for domestic buyers, all else equal."
            ],

            examples: []
        }

    ];


    /* =========================================================
       MATHEMATICS KNOWLEDGE
    ========================================================= */

    const mathematicsKnowledge = [

        {
            topic: "Basic Arithmetic",

            keywords: [
                "arithmetic",
                "addition",
                "subtraction",
                "multiplication",
                "division",
                "order of operations",
                "bodmas",
                "pemdas"
            ],

            relatedKeywords: [
                "numbers",
                "calculation",
                "brackets"
            ],

            information:
                "Arithmetic is the study of basic numerical operations such as addition, subtraction, multiplication and division.",

            formulas: [
                "BODMAS: Brackets, Orders, Division/Multiplication, Addition/Subtraction"
            ],

            rules: [
                "Multiplication and division are performed before addition and subtraction unless brackets change the order."
            ],

            examples: [
                "2 + 3 × 4 = 2 + 12 = 14."
            ]
        },


        {
            topic: "Fractions Percentages and Ratios",

            keywords: [
                "fraction",
                "fractions",
                "percentage",
                "percent",
                "ratio",
                "proportion",
                "decimal"
            ],

            relatedKeywords: [
                "numerator",
                "denominator",
                "increase",
                "decrease"
            ],

            information:
                "Fractions represent parts of a whole, percentages express quantities out of 100 and ratios compare quantities.",

            formulas: [
                "Percentage = Part / Whole × 100",
                "Percentage change = (New - Old) / Old × 100"
            ],

            rules: [
                "To add fractions, use a common denominator.",
                "To multiply fractions, multiply numerators and denominators.",
                "To divide by a fraction, multiply by its reciprocal."
            ],

            examples: [
                "25% of 200 = 0.25 × 200 = 50."
            ]
        },


        {
            topic: "Algebra",

            keywords: [
                "algebra",
                "variable",
                "coefficient",
                "constant",
                "like terms",
                "expression",
                "simplify"
            ],

            relatedKeywords: [
                "x",
                "y",
                "equation",
                "terms"
            ],

            information:
                "Algebra uses symbols and variables to represent numbers and relationships.",

            formulas: [
                "a(x + y) = ax + ay"
            ],

            rules: [
                "Like terms can be combined.",
                "A coefficient multiplies a variable.",
                "A constant has no variable attached to it."
            ],

            examples: [
                "3x + 2x - 4 = 5x - 4."
            ]
        },


        {
            topic: "Linear Equations",

            keywords: [
                "linear equation",
                "solve equation",
                "equation",
                "simultaneous equation",
                "linear equations"
            ],

            relatedKeywords: [
                "x",
                "unknown",
                "variable",
                "solve"
            ],

            information:
                "A linear equation is an equation in which the highest power of the variable is 1.",

            formulas: [
                "ax + b = c",
                "x = (c - b) / a"
            ],

            rules: [
                "Perform the same valid operation on both sides of an equation.",
                "The goal is to isolate the unknown variable."
            ],

            examples: [
                "2x + 6 = 14. Subtract 6: 2x = 8. Divide by 2: x = 4."
            ]
        },


        {
            topic: "Quadratic Equations",

            keywords: [
                "quadratic",
                "quadratic equation",
                "quadratic formula",
                "factorisation",
                "discriminant",
                "parabola"
            ],

            relatedKeywords: [
                "x squared",
                "roots",
                "solutions"
            ],

            information:
                "A quadratic equation is an equation of the form ax² + bx + c = 0 where a is not zero.",

            formulas: [
                "x = [-b ± √(b² - 4ac)] / 2a",
                "Discriminant = b² - 4ac"
            ],

            rules: [
                "If the discriminant is positive, there are two distinct real roots.",
                "If the discriminant is zero, there is one repeated real root.",
                "If the discriminant is negative, there are no real roots."
            ],

            examples: [
                "For x² - 5x + 6 = 0, factorisation gives (x - 2)(x - 3) = 0, so x = 2 or x = 3."
            ]
        },


        {
            topic: "Sequences",

            keywords: [
                "sequence",
                "arithmetic sequence",
                "geometric sequence",
                "series",
                "common difference",
                "common ratio"
            ],

            relatedKeywords: [
                "nth term",
                "sum",
                "term"
            ],

            information:
                "A sequence is an ordered list of numbers following a particular pattern.",

            formulas: [
                "Arithmetic nth term: an = a + (n - 1)d",
                "Arithmetic sum: Sn = n/2[2a + (n - 1)d]",
                "Geometric nth term: an = ar^(n - 1)",
                "Geometric sum: Sn = a(r^n - 1)/(r - 1), r ≠ 1"
            ],

            rules: [
                "An arithmetic sequence has a constant difference.",
                "A geometric sequence has a constant ratio."
            ],

            examples: [
                "2, 5, 8, 11 has common difference 3."
            ]
        },


        {
            topic: "Functions",

            keywords: [
                "function",
                "functions",
                "domain",
                "range",
                "f x",
                "f(x)",
                "composite function",
                "inverse function"
            ],

            relatedKeywords: [
                "input",
                "output",
                "mapping",
                "graph"
            ],

            information:
                "A function is a rule that assigns each permitted input exactly one output.",

            formulas: [
                "f(x) = output produced by applying function f to x"
            ],

            rules: [
                "The domain is the set of allowed inputs.",
                "The range is the set of resulting outputs.",
                "An inverse function reverses the mapping where an inverse exists."
            ],

            examples: [
                "If f(x) = 2x + 1, then f(3) = 7."
            ]
        },


        {
            topic: "Straight Lines",

            keywords: [
                "straight line",
                "gradient",
                "slope",
                "y intercept",
                "x intercept",
                "point slope",
                "equation of a line"
            ],

            relatedKeywords: [
                "coordinate",
                "parallel",
                "perpendicular",
                "graph"
            ],

            information:
                "A straight-line graph has a constant gradient.",

            formulas: [
                "Gradient m = (y2 - y1) / (x2 - x1)",
                "y = mx + c",
                "y - y1 = m(x - x1)"
            ],

            rules: [
                "Parallel lines have equal gradients.",
                "Perpendicular non-vertical lines have gradients whose product is -1."
            ],

            examples: [
                "For points (1,2) and (3,6), gradient = (6-2)/(3-1) = 2."
            ]
        },


        {
            topic: "Pythagoras Theorem",

            keywords: [
                "pythagoras",
                "pythagorean theorem",
                "right triangle",
                "right angled triangle"
            ],

            relatedKeywords: [
                "hypotenuse",
                "triangle",
                "geometry"
            ],

            information:
                "Pythagoras' theorem applies to right-angled triangles.",

            formulas: [
                "a² + b² = c²"
            ],

            rules: [
                "c is the hypotenuse, which is opposite the right angle.",
                "The theorem should only be applied directly to right-angled triangles."
            ],

            examples: [
                "If the legs are 3 and 4, c² = 9 + 16 = 25, so c = 5."
            ]
        },


        {
            topic: "Trigonometry",

            keywords: [
                "trigonometry",
                "trig",
                "sin",
                "cos",
                "tan",
                "sohcahtoa",
                "sine rule",
                "cosine rule"
            ],

            relatedKeywords: [
                "triangle",
                "angle",
                "opposite",
                "adjacent",
                "hypotenuse"
            ],

            information:
                "Trigonometry studies relationships between angles and sides of triangles.",

            formulas: [
                "sin θ = Opposite / Hypotenuse",
                "cos θ = Adjacent / Hypotenuse",
                "tan θ = Opposite / Adjacent",
                "Sine Rule: a/sin A = b/sin B = c/sin C",
                "Cosine Rule: a² = b² + c² - 2bc cos A"
            ],

            rules: [
                "SOHCAHTOA is useful for right-angled triangles.",
                "The sine and cosine rules can be used for non-right-angled triangles."
            ],

            examples: [
                "If opposite = 3 and hypotenuse = 5, sin θ = 3/5."
            ]
        },


        {
            topic: "Statistics",

            keywords: [
                "statistics",
                "mean",
                "median",
                "mode",
                "range",
                "variance",
                "standard deviation",
                "quartile",
                "iqr"
            ],

            relatedKeywords: [
                "data",
                "average",
                "distribution",
                "dataset"
            ],

            information:
                "Statistics involves collecting, organising, analysing and interpreting data.",

            formulas: [
                "Mean = Sum of observations / Number of observations",
                "Range = Maximum - Minimum",
                "IQR = Q3 - Q1",
                "Population variance = Σ(x - μ)² / N"
            ],

            rules: [
                "The median is the middle value after sorting the data.",
                "The mode is the most frequently occurring value.",
                "Standard deviation measures spread around the mean."
            ],

            examples: [
                "For 2, 4, 6, the mean is 4."
            ]
        },


        {
            topic: "Probability",

            keywords: [
                "probability",
                "probabilities",
                "conditional probability",
                "independent events",
                "bayes",
                "permutation",
                "combination"
            ],

            relatedKeywords: [
                "event",
                "sample space",
                "outcome",
                "chance"
            ],

            information:
                "Probability measures how likely an event is to occur.",

            formulas: [
                "P(A) = Number of favourable outcomes / Total number of equally likely outcomes",
                "P(A') = 1 - P(A)",
                "P(A and B) = P(A)P(B) for independent events",
                "P(A|B) = P(A and B) / P(B)",
                "nPr = n! / (n-r)!",
                "nCr = n! / [r!(n-r)!]"
            ],

            rules: [
                "Probability lies between 0 and 1.",
                "An impossible event has probability 0.",
                "A certain event has probability 1."
            ],

            examples: [
                "For a fair six-sided die, P(rolling a 4) = 1/6."
            ]
        },


        {
            topic: "Financial Mathematics",

            keywords: [
                "financial mathematics",
                "simple interest",
                "compound interest",
                "interest",
                "present value",
                "future value",
                "depreciation",
                "compound growth"
            ],

            relatedKeywords: [
                "principal",
                "rate",
                "time",
                "investment",
                "loan"
            ],

            information:
                "Financial mathematics applies mathematical formulas to interest, investment, loans, growth and depreciation.",

            formulas: [
                "Simple interest: I = Prt",
                "Simple amount: A = P(1 + rt)",
                "Compound amount: A = P(1 + r)^n",
                "Compound interest: I = A - P"
            ],

            rules: [
                "r must be expressed as a decimal in formulas.",
                "n represents the number of compounding periods."
            ],

            examples: [
                "R10 000 invested at 10% compound interest for 2 years: A = 10 000(1.10)^2 = R12 100."
            ]
        },


        {
            topic: "Differentiation",

            keywords: [
                "differentiation",
                "derivative",
                "differentiate",
                "calculus",
                "gradient",
                "stationary point",
                "chain rule",
                "product rule",
                "quotient rule"
            ],

            relatedKeywords: [
                "function",
                "maximum",
                "minimum",
                "rate of change"
            ],

            information:
                "Differentiation measures the instantaneous rate of change of a function.",

            formulas: [
                "d/dx(x^n) = nx^(n-1)",
                "Product rule: (uv)' = u'v + uv'",
                "Quotient rule: (u/v)' = (u'v - uv') / v²",
                "Chain rule: d/dx[f(g(x))] = f'(g(x))g'(x)"
            ],

            rules: [
                "A stationary point occurs where the first derivative is zero.",
                "The second derivative can help classify stationary points."
            ],

            examples: [
                "If y = x², dy/dx = 2x."
            ]
        },


        {
            topic: "Integration",

            keywords: [
                "integration",
                "integral",
                "integrate",
                "antiderivative",
                "area under curve",
                "definite integral"
            ],

            relatedKeywords: [
                "calculus",
                "area",
                "function",
                "constant"
            ],

            information:
                "Integration is the reverse process of differentiation and can be used to calculate accumulated quantities such as area under a curve.",

            formulas: [
                "∫x^n dx = x^(n+1)/(n+1) + C, n ≠ -1",
                "∫a dx = ax + C"
            ],

            rules: [
                "An indefinite integral includes a constant of integration C.",
                "A definite integral has upper and lower limits."
            ],

            examples: [
                "∫2x dx = x² + C."
            ]
        },


        {
            topic: "Matrices",

            keywords: [
                "matrix",
                "matrices",
                "determinant",
                "inverse matrix",
                "matrix multiplication"
            ],

            relatedKeywords: [
                "linear algebra",
                "rows",
                "columns",
                "identity matrix"
            ],

            information:
                "A matrix is a rectangular arrangement of numbers or expressions.",

            formulas: [
                "For a 2×2 matrix [[a,b],[c,d]], determinant = ad - bc",
                "Inverse = 1/(ad-bc) [[d,-b],[-c,a]] when determinant ≠ 0"
            ],

            rules: [
                "Matrix multiplication requires compatible dimensions.",
                "A square matrix is invertible only if its determinant is non-zero."
            ],

            examples: []
        }

    ];


    /* =========================================================
       SUBJECT KEYWORDS
    ========================================================= */

    const subjectWords = {

        Accounting: [
            "accounting",
            "account",
            "ifrs",
            "ias",
            "audit",
            "auditing",
            "tax",
            "vat",
            "ledger",
            "debit",
            "credit",
            "inventory",
            "stock",
            "asset",
            "liability",
            "equity",
            "profit",
            "loss",
            "depreciation",
            "cash flow",
            "financial statement",
            "balance sheet",
            "income statement",
            "journal",
            "trial balance",
            "consolidation",
            "associate",
            "subsidiary",
            "revenue",
            "lease"
        ],

        Economics: [
            "economics",
            "economy",
            "scarcity",
            "opportunity cost",
            "demand",
            "supply",
            "equilibrium",
            "market",
            "inflation",
            "unemployment",
            "gdp",
            "fiscal",
            "monetary",
            "sarb",
            "repo",
            "elasticity",
            "elastic",
            "trade",
            "export",
            "import",
            "tariff",
            "quota",
            "exchange rate",
            "externality",
            "aggregate demand",
            "aggregate supply",
            "multiplier"
        ],

        Mathematics: [
            "mathematics",
            "math",
            "maths",
            "algebra",
            "equation",
            "quadratic",
            "linear",
            "calculus",
            "derivative",
            "differentiation",
            "integration",
            "integral",
            "trigonometry",
            "sin",
            "cos",
            "tan",
            "statistics",
            "probability",
            "matrix",
            "matrices",
            "sequence",
            "function",
            "gradient",
            "pythagoras",
            "percentage",
            "fraction"
        ]

    };


    /* =========================================================
       TEXT NORMALISATION
    ========================================================= */

    function normalizeText(text) {

        return String(text || "")
            .toLowerCase()
            .replace(/[’']/g, "")
            .replace(/[^a-z0-9%²^.\-\s]/gi, " ")
            .replace(/\s+/g, " ")
            .trim();

    }


    /* =========================================================
       TOKENISE
    ========================================================= */

    function getTokens(text) {

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
            Accounting: 0,
            Economics: 0,
            Mathematics: 0
        };


        Object.keys(subjectWords).forEach(subject => {

            subjectWords[subject].forEach(keyword => {

                const key = normalizeText(keyword);

                if (!key) return;

                if (text.includes(key)) {

                    if (key.includes(" ")) {
                        scores[subject] += 8;
                    } else {
                        scores[subject] += 4;
                    }

                }

            });

        });


        const sorted = Object.entries(scores)
            .sort((a, b) => b[1] - a[1]);


        if (sorted[0][1] === 0) {
            return null;
        }


        if (
            sorted[1] &&
            sorted[0][1] === sorted[1][1]
        ) {
            return null;
        }


        return sorted[0][0];

    }


    /* =========================================================
       TOPIC SCORING
    ========================================================= */

    function scoreKnowledgeItem(question, item) {

        const text = normalizeText(question);

        const tokens = new Set(getTokens(question));

        let score = 0;


        /* Exact topic phrase */

        const topic = normalizeText(item.topic);

        if (text.includes(topic)) {
            score += 60;
        }


        /* Exact keyword */

        item.keywords.forEach(keyword => {

            const key = normalizeText(keyword);

            if (!key) return;

            if (text.includes(key)) {

                if (key.includes(" ")) {
                    score += 35;
                } else {
                    score += 25;
                }

            }

        });


        /* Token matching */

        item.keywords.forEach(keyword => {

            const keyTokens = getTokens(keyword);

            let matches = 0;

            keyTokens.forEach(token => {

                if (tokens.has(token)) {
                    matches++;
                }

            });


            if (matches > 0) {
                score += matches * 7;
            }

        });


        /* Related keywords */

        (item.relatedKeywords || []).forEach(keyword => {

            const key = normalizeText(keyword);

            if (
                key &&
                text.includes(key)
            ) {
                score += 10;
            }

        });


        /* Formula-related requests */

        const formulaWords = [
            "formula",
            "calculate",
            "calculation",
            "equation",
            "how much",
            "work out",
            "find",
            "compute"
        ];

        formulaWords.forEach(word => {

            if (text.includes(word)) {
                if (item.formulas.length > 0) {
                    score += 10;
                }
            }

        });


        /* Definition requests */

        const definitionWords = [
            "what is",
            "define",
            "definition",
            "explain",
            "meaning",
            "what does"
        ];

        definitionWords.forEach(word => {

            if (text.includes(word)) {
                score += 3;
            }

        });


        return score;

    }


    /* =========================================================
       SEARCH KNOWLEDGE
    ========================================================= */

    function searchKnowledge(question, subject) {

        let knowledge = [];

        if (subject === "Accounting") {
            knowledge = accountingKnowledge;
        }

        if (subject === "Economics") {
            knowledge = economicsKnowledge;
        }

        if (subject === "Mathematics") {
            knowledge = mathematicsKnowledge;
        }


        if (!knowledge.length) {
            return [];
        }


        const scored = knowledge.map(item => {

            return {
                item,
                score: scoreKnowledgeItem(question, item)
            };

        });


        scored.sort((a, b) => b.score - a.score);


        return scored
            .filter(result => result.score >= 18)
            .slice(0, 3);

    }


    /* =========================================================
       TOPIC LIST REQUEST
    ========================================================= */

    function isTopicListRequest(question) {

        const text = normalizeText(question);

        const phrases = [
            "list topics",
            "show topics",
            "topics",
            "what topics",
            "available topics",
            "what can you teach",
            "what do you know"
        ];

        return phrases.some(
            phrase => text === phrase || text.includes(phrase)
        );

    }


    /* =========================================================
       ALL INFORMATION REQUEST
    ========================================================= */

    function isAllInformationRequest(question) {

        const text = normalizeText(question);

        const phrases = [
            "all information",
            "everything about",
            "tell me everything",
            "complete information",
            "full information",
            "full explanation",
            "in detail",
            "detailed explanation"
        ];

        return phrases.some(
            phrase => text.includes(phrase)
        );

    }


    /* =========================================================
       TOPIC TITLE
    ========================================================= */

    function makeTopicTitle(item) {

        return item.topic;

    }


    /* =========================================================
       FORMAT KNOWLEDGE
    ========================================================= */

    function formatKnowledge(item, detailed = false) {

        let html = "";

        html += `<h2>${escapeHtml(item.topic)}</h2>`;

        html += `
            <p>
                ${escapeHtml(item.information)}
            </p>
        `;


        if (item.formulas && item.formulas.length) {

            html += `<h3>Formula${item.formulas.length > 1 ? "s" : ""}</h3>`;

            item.formulas.forEach(formula => {

                html += `
                    <div class="formula">
                        ${escapeHtml(formula)}
                    </div>
                `;

            });

        }


        if (item.rules && item.rules.length) {

            html += `<h3>Key points</h3>`;

            html += `<ul>`;

            item.rules.forEach(rule => {

                html += `
                    <li>
                        ${escapeHtml(rule)}
                    </li>
                `;

            });

            html += `</ul>`;

        }


        if (
            detailed &&
            item.examples &&
            item.examples.length
        ) {

            html += `<h3>Example${item.examples.length > 1 ? "s" : ""}</h3>`;

            item.examples.forEach(example => {

                html += `
                    <div class="example-box">
                        ${escapeHtml(example)}
                    </div>
                `;

            });

        }


        return html;

    }


    /* =========================================================
       TOPIC LIST
    ========================================================= */

    function getTopicList(subject) {

        let knowledge = [];

        if (subject === "Accounting") {
            knowledge = accountingKnowledge;
        }

        if (subject === "Economics") {
            knowledge = economicsKnowledge;
        }

        if (subject === "Mathematics") {
            knowledge = mathematicsKnowledge;
        }


        if (!knowledge.length) {
            return "I do not have a topic list available yet.";
        }


        let html = `
            <h2>${escapeHtml(subject)} topics</h2>
            <ul>
        `;


        knowledge.forEach(item => {

            html += `
                <li>
                    ${escapeHtml(item.topic)}
                </li>
            `;

        });


        html += `</ul>`;

        return html;

    }


    /* =========================================================
       SAFE HTML ESCAPE
    ========================================================= */

    function escapeHtml(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =========================================================
       CALCULATOR
    ========================================================= */

    function simpleCalculator(question) {

        const text = normalizeText(question);

        const calculationWords = [
            "calculate",
            "what is",
            "solve",
            "work out",
            "compute",
            "equals"
        ];


        const hasCalculationWord =
            calculationWords.some(word =>
                text.includes(word)
            );


        if (!hasCalculationWord) {
            return null;
        }


        let expression = text;


        expression = expression
            .replace(/calculate/g, "")
            .replace(/what is/g, "")
            .replace(/solve/g, "")
            .replace(/work out/g, "")
            .replace(/compute/g, "")
            .replace(/equals/g, "")
            .replace(/=/g, "")
            .trim();


        /*
         Safe calculator:
         only basic arithmetic characters.
        */

        if (
            !/^[0-9+\-*/().%\s^]+$/.test(expression)
        ) {
            return null;
        }


        if (!expression) {
            return null;
        }


        try {

            let safeExpression =
                expression
                    .replace(/\^/g, "**")
                    .replace(/(\d+(?:\.\d+)?)%/g, "($1/100)");


            if (
                safeExpression.includes("**")
            ) {

                const pieces =
                    safeExpression.split("**");

                if (
                    pieces.length > 2 ||
                    pieces.some(piece =>
                        piece.trim() === ""
                    )
                ) {
                    return null;
                }

            }


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


            return `
                <h2>Calculation</h2>
                <div class="formula">
                    ${escapeHtml(expression)}
                </div>
                <p>
                    <strong>Answer:</strong>
                    ${escapeHtml(
                        Number(result.toFixed(10)).toString()
                    )}
                </p>
            `;

        } catch (error) {

            return null;

        }

    }


    /* =========================================================
       GENERAL ANSWER
    ========================================================= */

    function generalAnswer(question) {

        const text = normalizeText(question);


        if (
            text === "hi" ||
            text === "hello" ||
            text === "hey" ||
            text === "good morning" ||
            text === "good afternoon" ||
            text === "good evening"
        ) {

            return `
                <p>
                    Hello. I am Mastercommerce.
                </p>

                <p>
                    I can help you learn Accounting,
                    Economics and Mathematics.
                </p>

                <p>
                    Ask me a specific question and I
                    will search my knowledge for the
                    relevant topic.
                </p>
            `;

        }


        if (
            text.includes("who are you") ||
            text.includes("what are you")
        ) {

            return `
                <h2>Mastercommerce</h2>

                <p>
                    I am an educational learning
                    system created to help learners
                    study Accounting, Economics and
                    Mathematics.
                </p>

                <p>
                    My current knowledge is stored
                    directly inside the application.
                </p>
            `;

        }


        if (
            text.includes("developer") ||
            text.includes("who made you") ||
            text.includes("who created you")
        ) {

            return `
                <h2>Developer</h2>

                <p>
                    ${escapeHtml(developerInformation.developer)}
                </p>

                <p>
                    Founder:
                    ${escapeHtml(developerInformation.founder)}
                </p>

                <p>
                    Product:
                    ${escapeHtml(developerInformation.product)}
                </p>
            `;

        }


        return `
            <p>
                I could not find enough specific
                information for that question in my
                current knowledge.
            </p>

            <p>
                Try mentioning the exact topic.
                For example:
            </p>

            <ul>
                <li>What is IAS 16?</li>
                <li>Explain gross profit.</li>
                <li>What is price elasticity?</li>
                <li>Explain the quadratic formula.</li>
            </ul>
        `;

    }


    /* =========================================================
       GENERATE ANSWER
    ========================================================= */

    function generateAnswer(question) {

        const calculatorResult =
            simpleCalculator(question);

        if (calculatorResult) {
            return calculatorResult;
        }


        const subject =
            detectSubject(question);


        /*
         If the question is asking for topics
         but doesn't specify a subject.
        */

        if (isTopicListRequest(question)) {

            if (subject) {
                return getTopicList(subject);
            }

            return `
                <h2>Mastercommerce topics</h2>

                <p>
                    I currently cover:
                </p>

                <ul>
                    <li>Accounting</li>
                    <li>Economics</li>
                    <li>Mathematics</li>
                </ul>

                <p>
                    Ask something like
                    "list Accounting topics".
                </p>
            `;

        }


        if (!subject) {

            return generalAnswer(question);

        }


        const results =
            searchKnowledge(question, subject);


        if (!results.length) {

            return `
                <p>
                    I understand that your question
                    appears to be about
                    <strong>${escapeHtml(subject)}</strong>,
                    but I could not find a specific
                    topic that matches it.
                </p>

                <p>
                    Try using the exact topic name,
                    for example:
                </p>

                <ul>
                    <li>IAS 16</li>
                    <li>IFRS 15</li>
                    <li>Gross profit</li>
                    <li>Inflation</li>
                    <li>Price elasticity</li>
                    <li>Quadratic equations</li>
                </ul>
            `;

        }


        const best =
            results[0].item;


        lastConversationState.subject =
            subject;

        lastConversationState.topic =
            best.topic;


        const detailed =
            isAllInformationRequest(question);


        return formatKnowledge(
            best,
            detailed
        );

    }


    /* =========================================================
       MESSAGE CREATION
    ========================================================= */

    function addMessage(
        content,
        type
    ) {

        if (welcomeScreen) {
            welcomeScreen.style.display = "none";
        }


        const row =
            document.createElement("div");

        row.className =
            `message-row ${type}`;


        const message =
            document.createElement("div");

        message.className =
            `message ${
                type === "user"
                    ? "user-message"
                    : "assistant-message"
            }`;


        message.innerHTML = content;


        row.appendChild(message);

        chatArea.appendChild(row);


        requestAnimationFrame(() => {

            chatArea.scrollTop =
                chatArea.scrollHeight;

        });


        return row;

    }


    /* =========================================================
       THINKING MESSAGE
    ========================================================= */

    function addThinkingMessage() {

        const row =
            document.createElement("div");

        row.className =
            "message-row assistant";


        const message =
            document.createElement("div");

        message.className =
            "message assistant-message";


        message.innerHTML = `
            <div class="thinking">
                <span>Thinking</span>
                <span class="thinking-dot"></span>
                <span class="thinking-dot"></span>
                <span class="thinking-dot"></span>
            </div>
        `;


        row.appendChild(message);

        chatArea.appendChild(row);


        chatArea.scrollTop =
            chatArea.scrollHeight;


        return row;

    }


    /* =========================================================
       SEND QUESTION
    ========================================================= */

    function sendQuestion() {

        const question =
            questionInput.value.trim();


        if (!question) {
            return;
        }


        addMessage(
            escapeHtml(question),
            "user"
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
                answer,
                "assistant"
            );

        }, 350);

    }


    /* =========================================================
       INPUT HEIGHT
    ========================================================= */

    function autoResizeInput() {

        questionInput.style.height =
            "auto";


        const height =
            Math.min(
                questionInput.scrollHeight,
                180
            );


        questionInput.style.height =
            `${height}px`;


        questionInput.style.fontSize =
            "16px";

    }


    questionInput.addEventListener(
        "input",
        autoResizeInput
    );


    /* =========================================================
       ENTER TO SEND
    ========================================================= */

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

        sidebarOverlay.classList.add("show");

    }


    function closeSidebarMenu() {

        sidebar.classList.remove("open");

        sidebarOverlay.classList.remove("show");

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

            aboutModal.classList.remove("show");
            settingsModal.classList.remove("show");

            chatArea.innerHTML = "";

            chatArea.appendChild(
                createWelcomeScreen()
            );

            lastConversationState = {
                subject: null,
                topic: null
            };

        }
    );


    /* =========================================================
       CREATE WELCOME SCREEN
    ========================================================= */

    function createWelcomeScreen() {

        const wrapper =
            document.createElement("div");

        wrapper.id =
            "welcomeScreen";

        wrapper.className =
            "welcome-screen";


        wrapper.innerHTML = `
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


        return wrapper;

    }


    /* =========================================================
       NEW CHAT
    ========================================================= */

    newChatButton.addEventListener(
        "click",
        () => {

            closeSidebarMenu();

            chatArea.innerHTML = "";

            chatArea.appendChild(
                createWelcomeScreen()
            );

            lastConversationState = {
                subject: null,
                topic: null
            };

            questionInput.value = "";

            autoResizeInput();

            questionInput.focus();

        }
    );


    /* =========================================================
       CLEAR CHAT
    ========================================================= */

    clearChatButton.addEventListener(
        "click",
        () => {

            chatArea.innerHTML = "";

            chatArea.appendChild(
                createWelcomeScreen()
            );

            lastConversationState = {
                subject: null,
                topic: null
            };

            closeSidebarMenu();

        }
    );


    /* =========================================================
       PLUS MENU
    ========================================================= */

    function togglePlusMenu() {

        const showing =
            plusMenu.classList.toggle("show");


        plusMenu.setAttribute(
            "aria-hidden",
            String(!showing)
        );


        plusButton.setAttribute(
            "aria-expanded",
            String(showing)
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
        .forEach(option => {

            option.addEventListener(
                "click",
                () => {

                    plusMenu.classList.remove(
                        "show"
                    );

                    plusButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );


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


    document.addEventListener(
        "click",
        event => {

            if (
                !plusMenu.contains(event.target) &&
                !plusButton.contains(event.target)
            ) {

                plusMenu.classList.remove(
                    "show"
                );

                plusButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    /* =========================================================
       ABOUT MODAL
    ========================================================= */

    aboutButton.addEventListener(
        "click",
        () => {

            closeSidebarMenu();

            aboutModal.classList.add("show");

        }
    );


    /* =========================================================
       SETTINGS MODAL
    ========================================================= */

    settingsButton.addEventListener(
        "click",
        () => {

            closeSidebarMenu();

            settingsModal.classList.add(
                "show"
            );

        }
    );


    /* =========================================================
       MODAL CLOSE BUTTONS
    ========================================================= */

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
                        modal.classList.remove(
                            "show"
                        );
                    }

                }
            );

        });


    /* =========================================================
       CLOSE MODAL WHEN CLICKING BACKGROUND
    ========================================================= */

    [aboutModal, settingsModal]
        .forEach(modal => {

            modal.addEventListener(
                "click",
                event => {

                    if (
                        event.target === modal
                    ) {

                        modal.classList.remove(
                            "show"
                        );

                    }

                }
            );

        });


    /* =========================================================
       ESCAPE KEY
    ========================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") {
                return;
            }


            closeSidebarMenu();


            aboutModal.classList.remove(
                "show"
            );


            settingsModal.classList.remove(
                "show"
            );


            plusMenu.classList.remove(
                "show"
            );

        }
    );


    /* =========================================================
       SETTINGS
    ========================================================= */

    function saveSettings() {

        const settings = {

            theme:
                document.body.classList.contains(
                    "dark"
                )
                    ? "dark"
                    : "light",

            background:
                [
                    "white",
                    "gray",
                    "warm",
                    "blue",
                    "green",
                    "lavender"
                ].find(name =>
                    document.body.classList.contains(
                        `background-${name}`
                    )
                ) || "white",

            font:
                [
                    "small",
                    "medium",
                    "large"
                ].find(name =>
                    document.body.classList.contains(
                        `font-${name}`
                    )
                ) || "medium",

            reducedMotion:
                document.body.classList.contains(
                    "reduced-motion"
                )

        };


        localStorage.setItem(
            "mastercommerceSettings",
            JSON.stringify(settings)
        );

    }


    function loadSettings() {

        const saved =
            localStorage.getItem(
                "mastercommerceSettings"
            );


        if (!saved) {

            applyTheme("light");
            applyBackground("white");
            applyFont("medium");

            return;

        }


        try {

            const settings =
                JSON.parse(saved);


            applyTheme(
                settings.theme || "light"
            );


            applyBackground(
                settings.background || "white"
            );


            applyFont(
                settings.font || "medium"
            );


            if (settings.reducedMotion) {

                document.body.classList.add(
                    "reduced-motion"
                );

            }

        } catch (error) {

            applyTheme("light");
            applyBackground("white");
            applyFont("medium");

        }

    }


    function applyTheme(theme) {

        document.body.classList.toggle(
            "dark",
            theme === "dark"
        );

    }


    function applyBackground(background) {

        [
            "white",
            "gray",
            "warm",
            "blue",
            "green",
            "lavender"
        ].forEach(name => {

            document.body.classList.remove(
                `background-${name}`
            );

        });


        document.body.classList.add(
            `background-${background}`
        );

    }


    function applyFont(font) {

        [
            "small",
            "medium",
            "large"
        ].forEach(name => {

            document.body.classList.remove(
                `font-${name}`
            );

        });


        document.body.classList.add(
            `font-${font}`
        );

    }


    /* THEME BUTTONS */

    document
        .querySelectorAll("[data-theme]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    applyTheme(
                        button.dataset.theme
                    );

                    saveSettings();

                }
            );

        });


    /* BACKGROUND BUTTONS */

    document
        .querySelectorAll("[data-background]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    applyBackground(
                        button.dataset.background
                    );

                    saveSettings();

                }
            );

        });


    /* FONT BUTTONS */

    document
        .querySelectorAll("[data-font]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    applyFont(
                        button.dataset.font
                    );

                    saveSettings();

                }
            );

        });


    /* REDUCED MOTION */

    motionButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "reduced-motion"
            );

            saveSettings();

        }
    );


    /* RESET */

    resetSettingsButton.addEventListener(
        "click",
        () => {

            document.body.classList.remove(
                "dark",
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


            applyTheme("light");
            applyBackground("white");
            applyFont("medium");


            document.body.classList.remove(
                "reduced-motion"
            );


            saveSettings();

        }
    );


    /* =========================================================
       MOBILE ZOOM PROTECTION
    ========================================================= */

    questionInput.style.fontSize =
        "16px";


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
       LOAD SETTINGS
    ========================================================= */

    loadSettings();


    /* =========================================================
       START APP
    ========================================================= */

    autoResizeInput();

    questionInput.focus();

});
