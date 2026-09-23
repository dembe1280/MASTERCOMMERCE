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
        version: "v1.1.0"
    };


    /* =========================================================
       CONVERSATION STATE
    ========================================================= */

    let lastConversationState = {
        subject: null,
        topic: null
    };


    /* =========================================================
       FUN / PERSONALITY DATA

       This section exists purely to make chatting with
       Mastercommerce more enjoyable. None of it replaces the
       real study content below - it just sits alongside it.
    ========================================================= */

    const funGreetings = [
        "Hello there! Ready to make some numbers behave today?",
        "Hey! I've had my coffee (metaphorically). Let's learn something.",
        "Howzit! Accounting, Economics or Maths - pick your fighter.",
        "Welcome back. I promise I'm more fun than your textbook.",
        "Hi! Warning: I may sneak in a bad joke while explaining IFRS.",
        "Greetings, scholar. Shall we balance some books or bend some curves?",
        "Hey hey! Let's turn 'I don't get it' into 'oh, THAT'S easy'.",
        "Hello! Fun fact: you just made an AI's day by saying hi."
    ];

    const greetingFollowUps = [
        "So, what's on your plate today - Accounting, Economics or Maths?",
        "How's your day going so far? And what are we tackling together?",
        "Are you revising for a test, or just curious about something?",
        "What's been the trickiest topic for you lately?",
        "Got a specific chapter giving you trouble, or just exploring for now?",
        "Been staring at your notes for a while, or fresh off a break?",
        "Are we doing quick revision today, or diving deep into one topic?",
        "What grade or level are you studying at right now?",
        "Any particular subject stressing you out this week?",
        "Feeling good about your studies today, or need a confidence boost first?"
    ];

    const thinkingPhrases = [
        "Thinking",
        "Crunching numbers",
        "Flipping through my notes",
        "Consulting the ledger",
        "Balancing the equation",
        "Digging through my brain-vault",
        "Doing the maths (carefully)",
        "Summoning the right formula",
        "Checking twice, answering once",
        "Warming up the calculator"
    ];

    const encouragements = [
        "Great question!",
        "Ooh, good one.",
        "Love this topic.",
        "Solid question - let's dig in.",
        "Nice, this one's actually kind of fun.",
        "Here we go!",
        "Let's sort this out together."
    ];

    const jokesKnowledge = [

        /* --- Accounting --- */
        { setup: "Why did the accountant cross the road?", punchline: "To get to the other ledger side." },
        { setup: "Why did the accountant break up with the calculator?", punchline: "Too many mixed feelings, not enough closure entries." },
        { setup: "Why don't accountants play hide and seek?", punchline: "Because good luck hiding when they always balance the books." },
        { setup: "What do you call an accountant who can't do maths?", punchline: "Retired." },
        { setup: "Why did the balance sheet go to therapy?", punchline: "It had too many unresolved issues on both sides." },
        { setup: "Why was the ledger always calm?", punchline: "It knew how to keep things balanced." },
        { setup: "What's an accountant's favourite dance move?", punchline: "The double entry shuffle." },
        { setup: "Why did the VAT return blush?", punchline: "It saw its input and output getting a little too close." },
        { setup: "Why did the depreciation schedule feel unappreciated?", punchline: "Its value just kept going down every year." },
        { setup: "What's a partnership's favourite type of music?", punchline: "Anything with a good profit-sharing ratio." },
        { setup: "Why did the auditor bring a magnifying glass to the party?", punchline: "To check if the fun was properly accounted for." },
        { setup: "What do you call two accountants arguing?", punchline: "A reconciliation." },
        { setup: "Why did the bookkeeper break up with their partner?", punchline: "Too many unexplained variances." },
        { setup: "Why did the trial balance refuse to apologise?", punchline: "It insisted it was always right, even when it wasn't." },
        { setup: "What did the accountant say to the messy drawer?", punchline: "This needs some serious reconciliation." },
        { setup: "Why do accountants make great detectives?", punchline: "They always follow the paper trail." },
        { setup: "Why did the suspense account go to a support group?", punchline: "It had too many unresolved issues to deal with alone." },
        { setup: "Why did the inventory feel important?", punchline: "Because everyone kept counting on it." },
        { setup: "What do you call an asset with a great personality?", punchline: "Current." },
        { setup: "Why was the cash book always invited to parties?", punchline: "It always knew how to keep track of who owed what." },
        { setup: "Why did the goodwill refuse to leave?", punchline: "It just couldn't be written off that easily." },
        { setup: "What's a financial statement's favourite genre of movie?", punchline: "A balance-of-power thriller." },
        { setup: "Why did the accrual show up before the party even started?", punchline: "It believes in recognising things when they happen, not when cash arrives." },
        { setup: "Why did the bank reconciliation take so long?", punchline: "It had a lot of unpresented issues to work through." },
        { setup: "Why did the debit and credit get married?", punchline: "Because together, they always balance each other out." },
        { setup: "What did the auditor say to the nervous client?", punchline: "Relax, I'm just here to test your controls." },
        { setup: "Why did the petty cash box stay humble?", punchline: "It knew it was never going to be a big spender." },
        { setup: "Why did the depreciation method apply for a job?", punchline: "It wanted some straight-line stability in life." },
        { setup: "What do you call a shy transaction?", punchline: "Understated." },
        { setup: "Why did the financial year refuse to end on time?", punchline: "It had too many closing entries to finish." },

        /* --- Economics --- */
        { setup: "Why did the economist bring a ladder to the meeting?", punchline: "To reach the higher level of aggregate demand." },
        { setup: "Why are economists bad at relationships?", punchline: "They always want to know the opportunity cost of staying." },
        { setup: "How does an economist say 'I love you'?", punchline: "'Ceteris paribus, my feelings for you only increase.'" },
        { setup: "Why did the demand curve break up with the supply curve?", punchline: "They just couldn't find equilibrium." },
        { setup: "What do you call an economist with an opinion?", punchline: "Rare, and usually followed by 'it depends'." },
        { setup: "Why did the GDP go to the gym?", punchline: "To work on its growth rate." },
        { setup: "Why don't economists ever get lost?", punchline: "They always trust the market to find equilibrium eventually." },
        { setup: "Why did the inflation rate get invited to every party?", punchline: "Because it just kept rising to the occasion." },
        { setup: "Why did the economist stare at their coffee all morning?", punchline: "They were waiting for it to reach equilibrium temperature." },
        { setup: "Why did the currency feel insecure?", punchline: "It kept depreciating in front of everyone." },
        { setup: "What did the unemployed graph say to the economist?", punchline: "Please, just give me some seasonal work." },
        { setup: "Why did the economist refuse to play cards?", punchline: "Too many sunk costs already invested in that deck." },
        { setup: "Why did the interest rate go up the stairs slowly?", punchline: "It wanted to avoid a sudden economic shock." },
        { setup: "What do economists call a bad relationship?", punchline: "A market failure." },
        { setup: "Why did the export feel proud?", punchline: "It finally made it big overseas." },
        { setup: "Why did the tariff show up uninvited?", punchline: "It just wanted to increase the cost of the party." },
        { setup: "Why did the budget deficit apologise?", punchline: "It knew it was spending more than it should." },
        { setup: "What's an economist's favourite type of tea?", punchline: "Equilibri-tea." },
        { setup: "Why did the market fail its driving test?", punchline: "It couldn't find the right price signal." },
        { setup: "Why did the multiplier get invited to every economy's birthday?", punchline: "Because it always makes things bigger." },
        { setup: "Why did the Gini coefficient go to a party alone?", punchline: "It's used to measuring inequality, not sharing it." },
        { setup: "Why did the recession bring an umbrella?", punchline: "It heard there was a downturn coming." },
        { setup: "Why did the exchange rate keep changing its mind?", punchline: "It's naturally quite volatile." },
        { setup: "What did the surplus say to the deficit?", punchline: "I've got more than enough, want some?" },
        { setup: "Why did the elasticity get all the attention?", punchline: "It's just very responsive." },

        /* --- Mathematics --- */
        { setup: "Why did the mathematician refuse to leave the house?", punchline: "They couldn't find a reason - the sine just wasn't there." },
        { setup: "Why do maths teachers love parks?", punchline: "Because of all the natural logs." },
        { setup: "Why was the equation feeling insecure?", punchline: "It had too many unresolved variables." },
        { setup: "Why did the student do maths on the floor?", punchline: "The teacher said not to use tables." },
        { setup: "What do you call a number that can't sit still?", punchline: "A roamin' numeral." },
        { setup: "Why was six afraid of seven?", punchline: "Because seven ate nine, and now everyone's suspicious of seven." },
        { setup: "Why did the fraction feel out of place at the party?", punchline: "It just wasn't a whole number." },
        { setup: "What did the triangle say to the circle?", punchline: "You're pointless." },
        { setup: "Why don't mathematicians ever fight?", punchline: "They always prefer to find common ground first." },
        { setup: "Why did the graph go to therapy?", punchline: "It had way too many ups and downs." },
        { setup: "Why did the obtuse angle go to the beach?", punchline: "Because it was never a right angle to begin with." },
        { setup: "What do you call an empty set at a party?", punchline: "Lonely, but technically still invited." },
        { setup: "Why did the quadratic equation get anxious?", punchline: "It always had two possible outcomes to worry about." },
        { setup: "Why did the decimal point look worried?", punchline: "It felt slightly out of place." },
        { setup: "What did the algebra book say to the student?", punchline: "Stop trying to solve all your problems, focus on mine first." },
        { setup: "Why did the statistician drown in the river?", punchline: "It had an average depth of one metre." },
        { setup: "Why do circles never get invited to arguments?", punchline: "They avoid coming to a point." },
        { setup: "Why did the calculus student stay up all night?", punchline: "They were trying to find their limit." },
        { setup: "Why did the matrix break up with the vector?", punchline: "It felt the relationship wasn't well defined." },
        { setup: "Why did the probability student never worry?", punchline: "They knew the odds were usually in their favour." },
        { setup: "What did zero say to eight?", punchline: "Nice belt." },
        { setup: "Why did the number line feel endless conversations?", punchline: "It just kept going in both directions." },
        { setup: "Why did the exponent feel powerful?", punchline: "It always raised the stakes." },
        { setup: "What's a mathematician's favourite season?", punchline: "Sum-mer." },
        { setup: "Why did the geometry teacher skip the gym?", punchline: "They already had enough figures to work on." },
        { setup: "Why did the fraction and the decimal stop talking?", punchline: "They just couldn't relate anymore." },
        { setup: "Why was the derivative so confident?", punchline: "It always knew the rate at which things were changing." },
        { setup: "Why did the parabola bring an umbrella?", punchline: "It heard there might be a vertex of rain." },
        { setup: "Why did the student bring a ladder to maths class?", punchline: "To reach the higher-order terms." },
        { setup: "What did the hypotenuse say to the other sides?", punchline: "I've got you covered - literally, I'm the longest one." },
        { setup: "Why did the sequence feel proud of itself?", punchline: "It always knew what came next." },
        { setup: "Why did the inequality refuse to settle down?", punchline: "It always wanted to be greater than or equal to something." },
        { setup: "Why did the surd feel misunderstood?", punchline: "People kept trying to round it off." },
        { setup: "What do you call a maths teacher who loves the outdoors?", punchline: "One who takes their roots seriously." },
        { setup: "Why did the polynomial fail the interview?", punchline: "It had too many unnecessary terms." },
        { setup: "Why was the algebra teacher's garden so tidy?", punchline: "They always kept the variables in check." },

        /* --- General study / nerdy --- */
        { setup: "Why did the student bring a pencil to the exam?", punchline: "To draw their own conclusions." },
        { setup: "Why did the calculator apply for a job?", punchline: "It just wanted to add some value." },
        { setup: "Why did the textbook go to the doctor?", punchline: "It had too many unresolved chapters." },
        { setup: "Why did the exam paper feel nervous?", punchline: "It knew it was about to be graded." },
        { setup: "Why did the laptop keep failing quizzes?", punchline: "It kept losing its train of thought - low battery." },
        { setup: "Why did the study group meet at the bakery?", punchline: "Because they heard it had the best rolls for revision." },
        { setup: "Why did the highlighter feel appreciated?", punchline: "It always knew how to bring out the important points." },
        { setup: "Why do students love breaks?", punchline: "Because even equations need to rest sometimes." },
        { setup: "Why did the clock get invited to study group?", punchline: "It always knows how to manage time." },
        { setup: "Why did the notebook feel confident?", punchline: "It had everything written down, just in case." },
        { setup: "Why did the deadline get chased around campus?", punchline: "Because everyone was trying to beat it." },
        { setup: "Why did the coffee cup join the study session?", punchline: "It wanted to help everyone stay grounded." },
        { setup: "What did the pencil say to the eraser?", punchline: "You really rub me the wrong way sometimes." },
        { setup: "Why did the student stare at the exam so long?", punchline: "The paper said 'do not turn over' and they took it literally." },
        { setup: "Why did the revision plan feel proud?", punchline: "It finally had structure." },
        { setup: "Why did the flashcards break up?", punchline: "They just didn't click anymore." },
        { setup: "Why did the printer refuse to work during exams?", punchline: "It said it needed a well-deserved break too." },
        { setup: "Why did the library stay so quiet?", punchline: "Because everyone was busy turning pages, not making noise." },
        { setup: "Why did the studying owl get top marks?", punchline: "It was a real night owl about revision." },
        { setup: "Why did the app crash right before the test?", punchline: "It got too stressed trying to load everything at once." },
        { setup: "Why did the ruler feel unappreciated in maths class?", punchline: "Everyone kept overlooking its many uses." },
        { setup: "Why did the accountant love spreadsheets so much?", punchline: "Because everything finally had its own cell." },
        { setup: "Why did the economist love long walks?", punchline: "They said it helped clear their head of externalities." },
        { setup: "Why did the fraction refuse to fight the whole number?", punchline: "It knew it was already outnumbered." },
        { setup: "Why did the fiscal year throw a party?", punchline: "It finally made it to year-end without a single error." },
        { setup: "Why did the fraction and the percentage become best friends?", punchline: "They just always found common ground out of 100." },
        { setup: "Why did the fixed asset refuse to move offices?", punchline: "It said it was, by definition, non-current." },
        { setup: "Why did the number 9 feel confident before an exam?", punchline: "It knew it was almost perfect, just one away." },
        { setup: "Why did the study timer get promoted?", punchline: "It always knew exactly how much time was left." }
    ];

    const funFactsKnowledge = [

        /* --- Accounting & finance history --- */
        "The word 'salary' comes from the Latin 'salarium', originally linked to payments Roman soldiers received - some say partly in salt.",
        "Double-entry bookkeeping as we broadly know it today was popularised by Luca Pacioli, an Italian friar, in a 1494 mathematics text.",
        "South Africa's standard VAT rate is 15%, but it wasn't always that way - it has changed more than once since VAT was introduced in 1991.",
        "'Bankrupt' comes from the Italian 'banca rotta', meaning 'broken bench' - referring to a moneylender's bench being physically broken.",
        "The South African Reserve Bank was established in 1921 and is one of the oldest central banks in Africa.",
        "Compound interest is sometimes informally called 'the eighth wonder of the world' because of how quickly it can grow over long periods.",
        "The trial balance doesn't actually prove there are no errors in the books - some errors, like a transaction omitted entirely, still balance perfectly.",
        "The word 'audit' comes from the Latin 'audire', meaning 'to hear' - early audits were literally read aloud to be checked.",
        "The oldest known accounting records are clay tokens used in Mesopotamia thousands of years ago to track goods and livestock.",
        "IFRS (International Financial Reporting Standards) is used, in some form, in well over 100 countries around the world.",
        "The word 'cash' likely traces back to the Old French 'casse', meaning a money box - not the actual coins themselves.",
        "Goodwill on a balance sheet isn't a vague feeling - it's a specific, measurable intangible asset created through acquisitions.",
        "The word 'ledger' comes from the Middle Dutch 'legger', meaning something that lies permanently in one place, like a large book.",
        "Some of the earliest known 'auditors' in history worked for ancient Egyptian and Mesopotamian temples, checking grain stores.",
        "Depreciation doesn't try to track an asset's market value - it simply spreads out cost over the asset's useful life.",
        "The term 'blue chip', used for large stable companies, comes from poker, where blue chips traditionally hold the highest value.",
        "A 'shell company' isn't necessarily illegal - it's simply a company with no significant operations or assets of its own.",
        "The word 'fiscal' comes from the Latin 'fiscus', which referred to a basket used to hold public money.",
        "South Africa's JSE (Johannesburg Stock Exchange) is one of the largest stock exchanges on the African continent.",
        "Double-entry accounting means every single transaction affects at least two accounts - which is exactly why the books balance.",
        "The word 'dividend' comes from the Latin 'dividendum', meaning 'a thing to be divided'.",
        "A company's financial year doesn't have to match the calendar year - many businesses choose a different year-end for practical reasons.",
        "The word 'budget' comes from the Old French 'bougette', meaning a small leather bag once used to carry money and documents.",
        "Early forms of insurance can be traced back thousands of years, including merchants in ancient China spreading cargo across boats to manage risk.",
        "The term 'red tape' referring to bureaucracy comes from the red ribbon once used to bind official government documents.",

        /* --- Economics --- */
        "The term 'inflation' was originally used to describe an increase in the money supply before it came to mean rising prices generally.",
        "The Great Depression of the 1930s is one of the key historical events that shaped modern macroeconomic theory, including Keynesian economics.",
        "Adam Smith's 'The Wealth of Nations' (1776) is often treated as a foundational text of modern economics.",
        "The word 'economics' comes from the Greek 'oikonomia', meaning household management.",
        "The Nobel Prize in Economic Sciences wasn't part of Alfred Nobel's original will - it was established later, in 1968, by Sweden's central bank.",
        "Hyperinflation has occurred in various countries throughout history, sometimes causing prices to double in a matter of days.",
        "The 'invisible hand', a famous economic metaphor, was used by Adam Smith to describe how individual self-interest can benefit society overall.",
        "GDP was developed largely in the 1930s and 1940s, partly to help track economic activity during the Great Depression and World War II.",
        "Opportunity cost applies to time as much as money - every hour spent on one activity is an hour not spent on the next best alternative.",
        "The term 'stagflation' combines 'stagnation' and 'inflation' to describe the unusual combination of slow growth and rising prices.",
        "Many central banks around the world target a specific inflation rate, often around 2 to 6%, rather than aiming for zero inflation.",
        "The Bretton Woods conference in 1944 helped shape the modern international monetary system after World War II.",
        "Barter systems predate money, but they require what's called a 'double coincidence of wants' to work smoothly.",
        "The law of diminishing marginal utility suggests the tenth slice of pizza rarely brings as much joy as the first.",
        "Some economists distinguish between 'positive economics' (what is) and 'normative economics' (what should be).",
        "The term 'black market' refers to trade that happens outside official, legal channels, often to avoid taxes or restrictions.",
        "South Africa's economy is often described as one of the more diversified and industrialised economies on the African continent.",
        "The concept of comparative advantage, developed by David Ricardo, shows that trade can benefit both parties even if one is better at everything.",
        "The word 'recession' is often informally defined as two consecutive quarters of negative real GDP growth, though definitions can vary.",
        "Game theory, used to study strategic decision-making in economics, was significantly developed by mathematician John von Neumann.",

        /* --- Mathematics --- */
        "The number zero as a placeholder and number in its own right developed independently in places including ancient India.",
        "The Fibonacci sequence (1, 1, 2, 3, 5, 8...) shows up in surprising places in nature, like sunflower seed spirals and pinecones.",
        "Pi (π) has been calculated to trillions of digits, but only about 40 digits are needed for most practical physics calculations.",
        "The word 'algebra' comes from the Arabic 'al-jabr', part of the title of a 9th-century mathematical text.",
        "A googol is the number 1 followed by 100 zeros - and it's smaller than the number of possible chess games.",
        "The symbol for 'equals' (=) was introduced by Welsh mathematician Robert Recorde in 1557, because 'no two things can be more equal'.",
        "Prime numbers have no positive divisors other than 1 and themselves - and mathematicians still search for the largest ones today.",
        "The Pythagorean theorem was known and used in some form by several ancient civilisations well before Pythagoras.",
        "A 'perfect number' equals the sum of its own positive divisors (excluding itself) - 6 is the smallest example (1 + 2 + 3 = 6).",
        "The concept of negative numbers was used in ancient China and India long before it became widely accepted in Europe.",
        "Calculus was developed independently by both Isaac Newton and Gottfried Wilhelm Leibniz in the late 17th century.",
        "The golden ratio, roughly 1.618, appears in art, architecture and nature, and is closely linked to the Fibonacci sequence.",
        "There are infinitely many prime numbers - a fact proven by the ancient Greek mathematician Euclid over 2 000 years ago.",
        "A 'palindrome number' reads the same forwards and backwards, like 121 or 3 443.",
        "The word 'geometry' comes from the Greek words for 'earth' and 'measurement'.",
        "Chess has more possible unique game sequences than there are atoms in the observable universe.",
        "The number system most of the world uses today (0-9, base 10) is often called the 'Hindu-Arabic numeral system'.",
        "A 'Mobius strip' is a surface with only one side and one edge, created by giving a strip of paper a half twist before joining the ends.",
        "The word 'trigonometry' comes from Greek words meaning 'triangle' and 'measure'.",
        "The 'butterfly effect' in chaos theory illustrates how small changes in initial conditions can lead to vastly different outcomes.",
        "Statisticians distinguish correlation from causation - two things moving together doesn't prove one causes the other.",
        "A standard deck of 52 playing cards can be shuffled into more unique orders than there are seconds since the universe began.",
        "The number e (approximately 2.71828) shows up naturally in growth and decay problems, much like compound interest calculations.",
        "Binary code, used throughout computing, works with only two digits - 0 and 1 - to represent all data.",
        "The word 'hypotenuse' comes from Greek, roughly meaning 'stretching under', referring to the side opposite the right angle.",

        /* --- General study / science trivia --- */
        "Short, spaced-out study sessions are generally more effective for long-term memory than one long cramming session.",
        "Writing notes by hand, rather than typing them, has been linked in some studies to better retention of information.",
        "The 'forgetting curve', described by psychologist Hermann Ebbinghaus, shows how quickly memory can fade without review.",
        "Taking short breaks during study sessions can actually improve overall focus and information retention.",
        "Explaining a concept out loud to someone else (or even to yourself) is a well-known way to test how well you actually understand it.",
        "Sleep plays an important role in memory consolidation, which is part of why an all-nighter before an exam can backfire.",
        "The 'Pomodoro Technique' - working in focused sprints with short breaks - is a popular time-management method among students.",
        "Practice questions and self-testing are generally more effective for learning than simply re-reading notes.",
        "Mixing up topics during a study session (sometimes called 'interleaving') can improve long-term understanding compared to studying one topic at a time.",
        "Background noise levels that work for one person can be distracting for another - there's no single 'best' study environment for everyone."
    ];

    const motivationalLines = [
        "You're one question closer to understanding this properly - keep going!",
        "Every expert was once confused by exactly this. You're doing fine.",
        "Small steps. This concept will click before you know it.",
        "If it feels hard, that usually means you're actually learning.",
        "Take a breath, re-read it once - it'll make more sense the second time."
    ];

    function pickRandom(array) {
        return array[Math.floor(Math.random() * array.length)];
    }


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
                "Straight-line: Cost R850 000, residual value R50 000, useful life 8 years. Annual depreciation = (850 000 - 50 000) ÷ 8 = R100 000 per year.",
                "Diminishing balance: Carrying amount R400 000 and a diminishing-balance rate of 20%. Depreciation for the year = R400 000 × 20% = R80 000, so the new carrying amount is R320 000.",
                "Partial year: An asset costing R120 000 (no residual value, 5-year useful life) is bought on 1 April, but the financial year ends on 31 December (9 months). Annual depreciation would be R24 000, so depreciation for the 9 months = R24 000 × 9/12 = R18 000.",
                "Change in estimate: An asset with a carrying amount of R60 000 has its remaining useful life revised from 4 years to 2 years. Going forward, annual depreciation becomes R60 000 ÷ 2 = R30 000 per year (applied prospectively, not restated).",
                "Disposal: An asset with a cost of R200 000 and accumulated depreciation of R150 000 has a carrying amount of R50 000. If it is sold for R70 000, the business records a profit on sale of R20 000 (R70 000 - R50 000)."
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
        },


        {
            topic: "Partnerships",

            keywords: [
                "partnership",
                "partnerships",
                "partnership agreement",
                "current account partner",
                "capital account partner",
                "profit sharing ratio",
                "appropriation account"
            ],

            relatedKeywords: [
                "partner",
                "salary",
                "bonus",
                "interest on capital",
                "drawings",
                "dissolution"
            ],

            information:
                "A partnership is a business owned by two or more partners who share profits, losses and responsibilities according to a partnership agreement.",

            formulas: [
                "Partner's share of profit = Profit sharing ratio × Net profit after appropriations",
                "Interest on capital = Capital balance × Interest rate",
                "Closing current account = Opening balance + Salary + Interest on capital + Bonus + Share of profit - Drawings - Interest on drawings"
            ],

            rules: [
                "In the absence of a partnership agreement, profits and losses are often shared equally, subject to applicable law.",
                "Partner salaries, bonuses and interest on capital are appropriations of profit, not expenses in determining net profit.",
                "Each partner usually has a separate capital account and current account.",
                "The capital account generally remains fixed unless there is a permanent change in capital contributed.",
                "The current account records day-to-day movements such as salary, interest, share of profit and drawings."
            ],

            examples: [
                "Net profit R200 000 shared equally between two partners gives each partner R100 000 before other appropriations.",
                "A partner with capital of R300 000 and interest on capital of 10% receives R30 000 interest on capital."
            ]
        },


        {
            topic: "Companies and Share Capital",

            keywords: [
                "company",
                "companies",
                "share capital",
                "ordinary shares",
                "preference shares",
                "dividends",
                "retained earnings",
                "shares issued",
                "authorised shares"
            ],

            relatedKeywords: [
                "shareholders",
                "equity",
                "directors",
                "public company",
                "private company"
            ],

            information:
                "A company is a separate legal entity whose equity is divided into shares held by shareholders. Companies raise capital by issuing shares and may distribute profits as dividends.",

            formulas: [
                "Dividends per share = Total dividends declared / Number of shares in issue",
                "Retained earnings closing balance = Opening balance + Net profit for the year - Dividends declared",
                "Shares issued during year × Issue price = Proceeds from share issue"
            ],

            rules: [
                "A company has a legal identity separate from its shareholders.",
                "Ordinary shareholders generally carry the main voting and residual profit rights, while preference shareholders often receive a fixed dividend preference.",
                "Dividends are a distribution of profit and are not treated as an expense in determining net profit.",
                "Retained earnings accumulate undistributed profits over time."
            ],

            examples: [
                "A company declares total dividends of R500 000 on 1 000 000 shares in issue, giving dividends per share of R0.50."
            ]
        },


        {
            topic: "Manufacturing Accounts",

            keywords: [
                "manufacturing account",
                "manufacturing accounts",
                "cost of production",
                "direct material",
                "direct labour",
                "factory overheads",
                "prime cost",
                "work in progress"
            ],

            relatedKeywords: [
                "factory",
                "production",
                "finished goods",
                "raw materials",
                "cost accounting"
            ],

            information:
                "Manufacturing accounts calculate the total cost of producing finished goods, distinguishing direct costs from indirect factory overheads.",

            formulas: [
                "Prime cost = Direct materials + Direct labour",
                "Cost of production = Prime cost + Factory overheads + Opening WIP - Closing WIP",
                "Direct materials used = Opening raw materials + Purchases - Closing raw materials"
            ],

            rules: [
                "Direct materials and direct labour are directly traceable to units produced.",
                "Factory overheads are indirect production costs, such as factory rent and indirect labour.",
                "Work in progress represents partly completed units at the start or end of a period.",
                "Non-manufacturing costs, such as administration and selling expenses, are excluded from cost of production."
            ],

            examples: [
                "Direct materials R150 000 + direct labour R100 000 = prime cost of R250 000. Adding factory overheads of R60 000 gives a cost of production of R310 000 before adjusting for work in progress."
            ]
        },


        {
            topic: "Budgeting",

            keywords: [
                "budget",
                "budgeting",
                "cash budget",
                "projected income statement",
                "variance",
                "favourable variance",
                "unfavourable variance"
            ],

            relatedKeywords: [
                "forecast",
                "planning",
                "control",
                "actual",
                "cash flow"
            ],

            information:
                "Budgeting involves preparing financial plans, such as a cash budget or projected income statement, and comparing budgeted figures with actual results.",

            formulas: [
                "Variance = Actual amount - Budgeted amount",
                "Closing cash balance = Opening cash balance + Total receipts - Total payments"
            ],

            rules: [
                "A cash budget projects expected cash receipts and payments over a future period.",
                "A favourable variance generally means results were better than budgeted; an unfavourable variance means results were worse.",
                "Budgets support planning, decision-making and performance evaluation."
            ],

            examples: [
                "Budgeted sales of R80 000 and actual sales of R95 000 gives a favourable sales variance of R15 000."
            ]
        },


        {
            topic: "Internal Control and Internal Audit",

            keywords: [
                "internal control",
                "internal audit",
                "segregation of duties",
                "authorisation",
                "control measures",
                "fraud prevention"
            ],

            relatedKeywords: [
                "risk",
                "policy",
                "procedure",
                "safeguard",
                "cash control",
                "stock control"
            ],

            information:
                "Internal control refers to the policies and procedures a business implements to safeguard assets, ensure accurate records and promote operational efficiency.",

            formulas: [],

            rules: [
                "Segregation of duties reduces the risk that one person can commit and conceal an error or fraud.",
                "Proper authorisation procedures help ensure transactions are valid and approved.",
                "Physical controls, such as locked storerooms, help safeguard assets.",
                "Regular reconciliations, such as bank reconciliations and stock counts, help detect errors and irregularities."
            ],

            examples: [
                "Separating the roles of receiving cash, recording cash and reconciling the bank account is an example of segregation of duties."
            ]
        },


        {
            topic: "Non-Profit Organisations",

            keywords: [
                "non profit organisation",
                "non profit organisations",
                "npo",
                "receipts and payments",
                "income and expenditure account",
                "accumulated fund",
                "subscriptions"
            ],

            relatedKeywords: [
                "club",
                "society",
                "surplus",
                "deficit",
                "members"
            ],

            information:
                "Non-profit organisations, such as clubs and societies, prepare financial statements such as an income and expenditure account rather than an income statement, since the entity is not operated for profit.",

            formulas: [
                "Surplus or deficit = Total income - Total expenditure",
                "Closing accumulated fund = Opening accumulated fund + Surplus - Deficit"
            ],

            rules: [
                "The accumulated fund is broadly equivalent to the equity of a non-profit organisation.",
                "Subscriptions received in advance or still outstanding often require adjustment when calculating subscription income for the period.",
                "A surplus increases the accumulated fund and a deficit decreases it."
            ],

            examples: [
                "Total income of R120 000 and total expenditure of R95 000 gives a surplus of R25 000 for the period."
            ]
        },


        {
            topic: "Cash Flow Statement Adjustments",

            keywords: [
                "cash flow adjustments",
                "indirect method",
                "reconciliation of profit to cash",
                "non cash items",
                "working capital changes"
            ],

            relatedKeywords: [
                "depreciation",
                "profit before tax",
                "receivables",
                "payables"
            ],

            information:
                "The indirect method starts with profit before tax and adjusts for non-cash items and changes in working capital to arrive at cash generated from operations.",

            formulas: [
                "Cash generated from operations = Profit before tax + Depreciation - Profit on sale of assets ± Working capital changes"
            ],

            rules: [
                "Depreciation is added back because it is a non-cash expense.",
                "An increase in receivables reduces cash generated; a decrease increases it.",
                "An increase in payables increases cash generated; a decrease reduces it."
            ],

            examples: [
                "Profit before tax R400 000 + depreciation R60 000 - increase in receivables R20 000 = R440 000 cash generated before further adjustments."
            ]
        },


        {
            topic: "Errors and Correction of Errors",

            keywords: [
                "errors in accounting",
                "correction of errors",
                "suspense account",
                "error of omission",
                "error of commission",
                "error of principle",
                "compensating error"
            ],

            relatedKeywords: [
                "trial balance",
                "journal entry",
                "ledger"
            ],

            information:
                "Accounting errors are mistakes made in recording transactions. Some errors cause the trial balance not to balance, while others do not.",

            formulas: [],

            rules: [
                "An error of omission occurs when a transaction is left out entirely and does not affect the trial balance.",
                "An error of principle occurs when a transaction is recorded against the wrong class of account.",
                "A compensating error occurs when two unrelated errors happen to cancel each other out.",
                "A suspense account is a temporary account used to make a trial balance agree while the underlying error is investigated."
            ],

            examples: [
                "Recording the purchase of equipment as a repairs expense is an error of principle."
            ]
        },


        {
            topic: "Petty Cash",

            keywords: [
                "petty cash",
                "petty cash book",
                "imprest system",
                "petty cash voucher"
            ],

            relatedKeywords: [
                "cash",
                "float",
                "reimbursement"
            ],

            information:
                "Petty cash is a small amount of cash kept on hand to pay for minor day-to-day business expenses.",

            formulas: [
                "Amount to reimburse = Imprest float - Cash remaining on hand"
            ],

            rules: [
                "Under the imprest system, the float is topped up back to a fixed amount at the end of each period.",
                "Petty cash vouchers support each payment made from petty cash."
            ],

            examples: [
                "An imprest float of R1 000 with R350 remaining means R650 needs to be reimbursed to restore the float."
            ]
        },


        {
            topic: "Financial Statement Analysis and Interpretation",

            keywords: [
                "financial statement analysis",
                "interpretation of financial statements",
                "trend analysis",
                "comparative analysis",
                "common size statements"
            ],

            relatedKeywords: [
                "ratios",
                "performance",
                "users of financial statements"
            ],

            information:
                "Financial statement analysis involves examining financial statements, often using ratios and trends, to assess performance, liquidity and financial position.",

            formulas: [],

            rules: [
                "Comparing figures over several years can reveal trends that a single year's figures may hide.",
                "Ratios are often more meaningful when compared with prior periods or with similar businesses.",
                "Users of financial statements include owners, lenders, employees, government and potential investors."
            ],

            examples: [
                "A steadily declining gross profit percentage over three years may prompt further investigation into pricing or cost control."
            ]
        },


        {
            topic: "Code of Professional Ethics for Accountants",

            keywords: [
                "accounting ethics",
                "professional ethics",
                "code of ethics",
                "integrity",
                "objectivity",
                "professional competence",
                "confidentiality"
            ],

            relatedKeywords: [
                "accountant",
                "auditor",
                "professional conduct"
            ],

            information:
                "Professional accountants are generally expected to follow fundamental ethical principles when carrying out their work.",

            formulas: [],

            rules: [
                "Integrity requires being straightforward and honest in professional relationships.",
                "Objectivity requires not allowing bias, conflict of interest or undue influence to override professional judgement.",
                "Professional competence and due care require maintaining knowledge and skill and acting diligently.",
                "Confidentiality requires respecting the confidentiality of information acquired through professional work.",
                "Professional behaviour requires complying with relevant laws and avoiding conduct that discredits the profession."
            ],

            examples: []
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

            examples: [
                "If CPI rises from 120 to 126 over a year, the inflation rate = (126 - 120) / 120 × 100 = 5%.",
                "A sharp increase in global oil prices raising local fuel and transport costs is an example of imported/cost-push inflation.",
                "A rand depreciation that makes imported electronics more expensive for South African consumers is an example of imported inflation.",
                "Wage increases that are not matched by productivity gains, forcing employers to raise prices, illustrate cost-push inflation.",
                "A period where the inflation rate falls from 7% to 4% (still positive, just slower) is disinflation, not deflation."
            ]
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

            examples: [
                "South Africa exporting wine and citrus to the UK while importing machinery from Germany illustrates trade based on comparative advantage.",
                "A country rich in minerals, such as South Africa, tends to export gold and platinum while importing manufactured electronics.",
                "A 20% tariff on imported vehicles raises their local price, protecting domestic vehicle manufacturers from cheaper foreign competition.",
                "A quota limiting sugar imports to 50 000 tonnes a year is a quantitative restriction rather than a price-based one like a tariff.",
                "When the rand depreciates against the US dollar, South African exports become relatively cheaper for foreign buyers, while imports become more expensive locally."
            ]
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
        },


        {
            topic: "Circular Flow of Income",

            keywords: [
                "circular flow of income",
                "circular flow",
                "households firms government",
                "leakages injections",
                "leakage",
                "injection"
            ],

            relatedKeywords: [
                "income",
                "spending",
                "savings",
                "taxation",
                "investment",
                "exports"
            ],

            information:
                "The circular flow of income model shows how income and spending flow between households, firms, government and the foreign sector in an economy.",

            formulas: [],

            rules: [
                "Households supply factors of production to firms and receive income in return.",
                "Firms supply goods and services to households in return for spending.",
                "Leakages, such as savings, taxation and imports, withdraw money from the circular flow.",
                "Injections, such as investment, government spending and exports, add money to the circular flow.",
                "The circular flow is in equilibrium when total leakages equal total injections."
            ],

            examples: []
        },


        {
            topic: "Market Failure and Public Goods",

            keywords: [
                "market failure",
                "public good",
                "public goods",
                "private good",
                "free rider",
                "non excludable",
                "non rivalrous",
                "merit good",
                "demerit good"
            ],

            relatedKeywords: [
                "externality",
                "government intervention",
                "information failure",
                "monopoly power"
            ],

            information:
                "Market failure occurs when the free market fails to allocate resources efficiently. Public goods are one cause of market failure because they are non-excludable and non-rivalrous.",

            formulas: [],

            rules: [
                "A public good is non-excludable, meaning people cannot easily be prevented from using it once it is provided.",
                "A public good is non-rivalrous, meaning one person's use does not reduce its availability to others.",
                "The free-rider problem can lead to public goods being under-provided by the private market.",
                "Merit goods tend to be under-consumed and demerit goods tend to be over-consumed relative to the socially optimal level.",
                "Other causes of market failure include externalities, information failure and market power."
            ],

            examples: [
                "National defence and street lighting are commonly used examples of public goods."
            ]
        },


        {
            topic: "Income Distribution and Poverty",

            keywords: [
                "income distribution",
                "poverty",
                "gini coefficient",
                "lorenz curve",
                "inequality",
                "poverty line",
                "redistribution"
            ],

            relatedKeywords: [
                "income",
                "wealth",
                "social grants",
                "unemployment",
                "welfare"
            ],

            information:
                "Income distribution describes how income is shared among individuals or households in an economy. The Gini coefficient and Lorenz curve are common tools used to measure income inequality.",

            formulas: [
                "Gini coefficient ranges from 0 (perfect equality) to 1 (perfect inequality)"
            ],

            rules: [
                "A Lorenz curve plots the cumulative share of income against the cumulative share of the population.",
                "A Gini coefficient closer to 0 indicates a more equal income distribution, while a value closer to 1 indicates greater inequality.",
                "Governments can use taxation, social grants and other redistribution policies to reduce income inequality."
            ],

            examples: []
        },


        {
            topic: "Balance of Payments",

            keywords: [
                "balance of payments",
                "current account",
                "capital account",
                "financial account",
                "trade balance",
                "bop"
            ],

            relatedKeywords: [
                "exports",
                "imports",
                "foreign investment",
                "reserves"
            ],

            information:
                "The balance of payments is a record of all economic transactions between residents of a country and the rest of the world over a specific period.",

            formulas: [
                "Current account balance = Trade balance + Net income + Net current transfers"
            ],

            rules: [
                "The current account mainly records trade in goods and services, income and current transfers.",
                "The financial account mainly records cross-border investment flows.",
                "A current account deficit means a country is generally a net borrower from the rest of the world over that period."
            ],

            examples: []
        },


        {
            topic: "Economic Systems",

            keywords: [
                "economic system",
                "economic systems",
                "market economy",
                "command economy",
                "mixed economy",
                "planned economy",
                "traditional economy"
            ],

            relatedKeywords: [
                "resource allocation",
                "government",
                "private sector",
                "central planning"
            ],

            information:
                "An economic system describes how a society organises the production, distribution and allocation of goods, services and resources.",

            formulas: [],

            rules: [
                "In a market economy, resource allocation is mainly determined by the price mechanism through decentralised decisions.",
                "In a command economy, resource allocation is mainly determined by central government planning.",
                "A mixed economy combines features of both market and command economies.",
                "A traditional economy relies mainly on custom, culture and historical practice to allocate resources."
            ],

            examples: []
        },


        {
            topic: "Economic Indicators",

            keywords: [
                "economic indicators",
                "leading indicator",
                "lagging indicator",
                "coincident indicator",
                "composite leading business cycle indicator"
            ],

            relatedKeywords: [
                "gdp",
                "inflation",
                "unemployment",
                "forecast"
            ],

            information:
                "Economic indicators are statistics used to assess current economic conditions and help forecast future economic activity.",

            formulas: [],

            rules: [
                "Leading indicators tend to change before the overall economy changes.",
                "Lagging indicators tend to change after the overall economy has already changed.",
                "Coincident indicators tend to move at roughly the same time as the overall economy."
            ],

            examples: [
                "Building plans passed are often treated as a leading indicator, while the unemployment rate is often treated as a lagging indicator."
            ]
        },


        {
            topic: "Consumer and Producer Behaviour",

            keywords: [
                "utility",
                "marginal utility",
                "consumer behaviour",
                "producer behaviour",
                "diminishing marginal utility",
                "profit maximisation"
            ],

            relatedKeywords: [
                "satisfaction",
                "consumption",
                "production",
                "cost"
            ],

            information:
                "Consumer behaviour theory looks at how consumers make choices to maximise satisfaction (utility), while producer behaviour theory looks at how firms make production decisions, often to maximise profit.",

            formulas: [
                "Marginal utility = Change in total utility / Change in quantity consumed",
                "Profit-maximising condition (commonly used approximation): Marginal Revenue = Marginal Cost"
            ],

            rules: [
                "The law of diminishing marginal utility suggests that, ceteris paribus, each additional unit consumed tends to add less satisfaction than the previous unit.",
                "Firms are often assumed to aim to maximise profit, though this is a simplifying assumption."
            ],

            examples: []
        },


        {
            topic: "Money and Banking",

            keywords: [
                "money",
                "functions of money",
                "medium of exchange",
                "store of value",
                "unit of account",
                "commercial bank",
                "central bank"
            ],

            relatedKeywords: [
                "currency",
                "deposits",
                "credit creation",
                "reserve bank"
            ],

            information:
                "Money performs several functions in an economy, and the banking system channels funds between savers and borrowers.",

            formulas: [],

            rules: [
                "Money commonly serves as a medium of exchange, a unit of account, a store of value and a standard of deferred payment.",
                "Commercial banks generally accept deposits and extend loans, which can contribute to credit creation in the economy.",
                "A central bank generally oversees monetary policy and financial system stability for a country."
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
                "For x² - 5x + 6 = 0, factorisation gives (x - 2)(x - 3) = 0, so x = 2 or x = 3.",
                "For x² - 2x - 8 = 0, factorisation gives (x - 4)(x + 2) = 0, so x = 4 or x = -2.",
                "For 2x² + 3x - 5 = 0, using the quadratic formula: x = [-3 ± √(9 + 40)] / 4 = [-3 ± 7] / 4, giving x = 1 or x = -2.5.",
                "For x² + 4x + 4 = 0, the discriminant = 16 - 16 = 0, so there is one repeated root: x = -2.",
                "For x² + x + 1 = 0, the discriminant = 1 - 4 = -3, which is negative, so there are no real roots."
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
                "If the legs are 3 and 4, c² = 9 + 16 = 25, so c = 5.",
                "If the legs are 6 and 8, c² = 36 + 64 = 100, so c = 10.",
                "If the hypotenuse is 13 and one leg is 5, the other leg = √(169 - 25) = √144 = 12.",
                "A ladder 5 m long leans against a wall with its base 3 m from the wall; it reaches √(25 - 9) = √16 = 4 m up the wall.",
                "A TV screen advertised as 'diagonal 24 inches' with width 19.2 inches and height 14.4 inches checks out because 19.2² + 14.4² = 24²."
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
                "R10 000 invested at 10% compound interest for 2 years: A = 10 000(1.10)^2 = R12 100.",
                "R5 000 invested at 8% simple interest for 3 years: I = 5 000 × 0.08 × 3 = R1 200, so A = R6 200.",
                "R20 000 invested at 6% compounded annually for 5 years: A = 20 000(1.06)^5 ≈ R26 764.51.",
                "A car costing R300 000 depreciates at 15% per year on the reducing-balance method; after 2 years its value ≈ 300 000(0.85)^2 = R216 750.",
                "R15 000 borrowed at 12% simple interest per year must be repaid with R1 800 interest after 1 year, giving a total repayment of R16 800."
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
        },


        {
            topic: "Sets",

            keywords: [
                "set",
                "sets",
                "set theory",
                "union",
                "intersection",
                "subset",
                "venn diagram",
                "complement of a set"
            ],

            relatedKeywords: [
                "element",
                "universal set",
                "empty set",
                "real numbers"
            ],

            information:
                "A set is a well-defined collection of distinct objects, called elements. Set theory provides notation for describing relationships between collections of objects.",

            formulas: [
                "n(A ∪ B) = n(A) + n(B) - n(A ∩ B)"
            ],

            rules: [
                "The union of two sets contains all elements that are in either set.",
                "The intersection of two sets contains only elements that are in both sets.",
                "A subset contains only elements that also belong to the larger set.",
                "A Venn diagram is a visual way to represent sets and their relationships."
            ],

            examples: [
                "If A = {1,2,3} and B = {2,3,4}, then A ∩ B = {2,3} and A ∪ B = {1,2,3,4}."
            ]
        },


        {
            topic: "Exponents and Surds",

            keywords: [
                "exponent",
                "exponents",
                "surd",
                "surds",
                "law of exponents",
                "index",
                "indices",
                "rational exponent",
                "simplify surds"
            ],

            relatedKeywords: [
                "power",
                "root",
                "square root",
                "cube root"
            ],

            information:
                "Exponents represent repeated multiplication of a base number, while surds are irrational roots that cannot be simplified to a rational number.",

            formulas: [
                "a^m × a^n = a^(m+n)",
                "a^m ÷ a^n = a^(m-n)",
                "(a^m)^n = a^(mn)",
                "a^0 = 1, a ≠ 0",
                "a^(-n) = 1/a^n",
                "a^(m/n) = ⁿ√(a^m)"
            ],

            rules: [
                "The laws of exponents apply only when the bases are the same for multiplication and division of powers.",
                "A surd is a root that results in an irrational number, such as √2.",
                "Surds can sometimes be simplified by factoring out perfect squares or cubes."
            ],

            examples: [
                "√50 = √(25 × 2) = 5√2."
            ]
        },


        {
            topic: "Inequalities",

            keywords: [
                "inequality",
                "inequalities",
                "linear inequality",
                "quadratic inequality",
                "solve inequality",
                "number line"
            ],

            relatedKeywords: [
                "greater than",
                "less than",
                "interval notation",
                "solution set"
            ],

            information:
                "An inequality compares two expressions using symbols such as <, >, ≤ or ≥, and its solution is usually a range of values rather than a single value.",

            formulas: [],

            rules: [
                "Adding or subtracting the same value from both sides of an inequality keeps the inequality sign unchanged.",
                "Multiplying or dividing both sides by a negative number reverses the inequality sign.",
                "The solution to a quadratic inequality is often found by first solving the related quadratic equation."
            ],

            examples: [
                "Solve 2x + 4 > 10: 2x > 6, so x > 3."
            ]
        },


        {
            topic: "Vectors",

            keywords: [
                "vector",
                "vectors",
                "magnitude",
                "direction",
                "vector addition",
                "resultant vector",
                "unit vector",
                "dot product"
            ],

            relatedKeywords: [
                "displacement",
                "scalar",
                "components"
            ],

            information:
                "A vector is a quantity that has both magnitude and direction, in contrast to a scalar, which has magnitude only.",

            formulas: [
                "Magnitude of vector (x, y) = √(x² + y²)",
                "Resultant vector = Sum of the components of the individual vectors",
                "Dot product: a · b = |a||b| cos θ"
            ],

            rules: [
                "Vectors can be added using the head-to-tail method or by adding their respective components.",
                "A unit vector has a magnitude of 1 and indicates direction only."
            ],

            examples: [
                "For vector (3, 4), magnitude = √(3² + 4²) = √25 = 5."
            ]
        },


        {
            topic: "Coordinate Geometry and Circles",

            keywords: [
                "coordinate geometry",
                "equation of a circle",
                "circle geometry",
                "midpoint",
                "distance formula",
                "centre radius"
            ],

            relatedKeywords: [
                "coordinate",
                "graph",
                "tangent",
                "analytical geometry"
            ],

            information:
                "Coordinate geometry uses algebraic methods to study geometric figures on a coordinate plane, including the equation of a circle.",

            formulas: [
                "Distance = √[(x2-x1)² + (y2-y1)²]",
                "Midpoint = ((x1+x2)/2, (y1+y2)/2)",
                "Equation of a circle centred at origin: x² + y² = r²",
                "Equation of a circle centred at (a,b): (x-a)² + (y-b)² = r²"
            ],

            rules: [
                "The radius of a circle is the distance from the centre to any point on the circle.",
                "A tangent to a circle touches the circle at exactly one point and is perpendicular to the radius at that point."
            ],

            examples: [
                "A circle centred at (2,3) with radius 5 has the equation (x-2)² + (y-3)² = 25."
            ]
        },


        {
            topic: "Mensuration: Area, Perimeter and Volume",

            keywords: [
                "mensuration",
                "area",
                "perimeter",
                "volume",
                "surface area",
                "circumference",
                "area of a triangle",
                "area of a circle",
                "volume of a cylinder",
                "volume of a sphere"
            ],

            relatedKeywords: [
                "shape",
                "geometry",
                "rectangle",
                "cube",
                "prism"
            ],

            information:
                "Mensuration deals with calculating the measurements of geometric shapes, such as area, perimeter, surface area and volume.",

            formulas: [
                "Area of a rectangle = Length × Width",
                "Area of a triangle = 1/2 × Base × Height",
                "Circumference of a circle = 2πr",
                "Area of a circle = πr²",
                "Volume of a cuboid = Length × Width × Height",
                "Volume of a cylinder = πr²h",
                "Volume of a sphere = 4/3 πr³"
            ],

            rules: [
                "Perimeter and circumference measure the distance around a shape.",
                "Area measures the space enclosed by a two-dimensional shape.",
                "Volume measures the space occupied by a three-dimensional object."
            ],

            examples: [
                "A rectangle with length 8 and width 5 has an area of 40 square units."
            ]
        },


        {
            topic: "Number Patterns",

            keywords: [
                "number pattern",
                "number patterns",
                "quadratic sequence",
                "second difference",
                "general term"
            ],

            relatedKeywords: [
                "sequence",
                "term",
                "pattern"
            ],

            information:
                "Number patterns are sequences of numbers that follow an identifiable rule, which can sometimes be described by a general (nth) term formula.",

            formulas: [
                "Quadratic sequence general term: Tn = an² + bn + c"
            ],

            rules: [
                "A constant first difference indicates a linear (arithmetic) pattern.",
                "A constant second difference indicates a quadratic pattern."
            ],

            examples: [
                "1, 4, 9, 16, 25 has first differences 3, 5, 7, 9 and a constant second difference of 2, indicating a quadratic pattern (n²)."
            ]
        },


        {
            topic: "Logarithms",

            keywords: [
                "logarithm",
                "logarithms",
                "log",
                "natural log",
                "ln",
                "log laws"
            ],

            relatedKeywords: [
                "exponent",
                "base",
                "power"
            ],

            information:
                "A logarithm is the inverse operation of exponentiation; it answers the question of what power a base must be raised to in order to produce a given number.",

            formulas: [
                "If a^x = b, then log_a(b) = x",
                "log(mn) = log(m) + log(n)",
                "log(m/n) = log(m) - log(n)",
                "log(m^n) = n log(m)"
            ],

            rules: [
                "The base of a logarithm must be positive and not equal to 1.",
                "Logarithms are only defined for positive numbers when working with real numbers."
            ],

            examples: [
                "log_2(8) = 3, because 2³ = 8."
            ]
        },


        {
            topic: "Rounding and Estimation",

            keywords: [
                "rounding",
                "round off",
                "significant figures",
                "decimal places",
                "estimation",
                "approximation"
            ],

            relatedKeywords: [
                "number",
                "accuracy"
            ],

            information:
                "Rounding and estimation are used to express numbers to a suitable level of accuracy or to quickly approximate a calculation.",

            formulas: [],

            rules: [
                "When rounding, a digit of 5 or more generally rounds the preceding digit up.",
                "Significant figures count all meaningful digits in a number, starting from the first non-zero digit.",
                "Estimation can be used to quickly check whether a calculated answer is reasonable."
            ],

            examples: [
                "3.14159 rounded to two decimal places is 3.14."
            ]
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
            "lease",
            "partnership",
            "partner",
            "company",
            "companies",
            "share capital",
            "shares",
            "dividend",
            "manufacturing account",
            "prime cost",
            "factory overheads",
            "budget",
            "budgeting",
            "cash budget",
            "internal control",
            "internal audit",
            "segregation of duties",
            "non profit",
            "npo",
            "accumulated fund",
            "subscriptions",
            "petty cash",
            "suspense account",
            "error of principle",
            "ethics",
            "code of ethics",
            "integrity"
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
            "multiplier",
            "circular flow",
            "leakage",
            "injection",
            "market failure",
            "public good",
            "free rider",
            "merit good",
            "demerit good",
            "income distribution",
            "poverty",
            "gini",
            "lorenz curve",
            "inequality",
            "balance of payments",
            "current account",
            "economic system",
            "command economy",
            "mixed economy",
            "economic indicator",
            "utility",
            "marginal utility",
            "money",
            "central bank",
            "commercial bank"
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
            "fraction",
            "set",
            "sets",
            "venn diagram",
            "union",
            "intersection",
            "subset",
            "exponent",
            "exponents",
            "surd",
            "surds",
            "indices",
            "inequality",
            "inequalities",
            "vector",
            "vectors",
            "coordinate geometry",
            "equation of a circle",
            "midpoint",
            "distance formula",
            "mensuration",
            "area",
            "perimeter",
            "volume",
            "circumference",
            "number pattern",
            "logarithm",
            "logarithms",
            "log",
            "rounding",
            "significant figures"
        ]

    };


    /* =========================================================
       ECONOMICS ESSAYS (full essay memoranda, given only
       when the person explicitly asks for an "essay")
    ========================================================= */

    const economicsEssays = [

        {
            id: "circular-flow",
            title: "The Four-Sector Circular Flow Model and its Markets",
            keywords: ["circular flow", "four sector model", "four-sector model", "circular flow of income essay"],
            sections: [
                {
                    heading: "Product / Goods Market",
                    points: [
                        "Goods and services are traded on the product market, bought by households, government and the foreign sector from firms.",
                        "Goods are tangible (consumer goods, capital goods, durable, semi-durable and non-durable); services are intangible actions such as those offered by accountants, teachers and doctors.",
                        "The forces of demand and supply determine the equilibrium price and quantity.",
                        "Non-durable goods cannot be re-used (e.g. an apple); semi-durable goods last a short time but can be used more than once (e.g. chalk); durable goods last more than a year (e.g. a chalkboard)."
                    ]
                },
                {
                    heading: "Factor / Resources Market",
                    points: [
                        "The four factors of production (land, labour, capital and entrepreneurship) are traded here for wages/salaries, interest, rent and profit.",
                        "Price and quantity traded are again determined by demand and supply."
                    ]
                },
                {
                    heading: "Money Market",
                    points: [
                        "Used for short-term borrowing and lending, from a few days up to just under 3 years.",
                        "Instruments traded include treasury bills, Reserve Bank debentures, banker's acceptances and short-term government/company debentures."
                    ]
                },
                {
                    heading: "Financial Market",
                    points: [
                        "Consists of banks, pension funds, insurance companies and the JSE, and channels funds from surplus units (savers) to deficit units (borrowers).",
                        "The SARB is a key institution operating in this market."
                    ]
                },
                {
                    heading: "Capital Market",
                    points: [
                        "Handles long-term deposits and borrowings of 3 years and above, such as mortgage bonds.",
                        "The Johannesburg Securities (Stock) Exchange (JSE) is the key institution here."
                    ]
                },
                {
                    heading: "Foreign Exchange Market",
                    points: [
                        "Facilitates the exchange of one currency for another so international transactions can take place in an open economy.",
                        "The exchange rate, usually set by demand and supply (and sometimes influenced by the central bank), determines how much is received on exchange.",
                        "Foreign currency can be obtained through commercial banks such as FNB, ABSA, Nedbank and Standard Bank."
                    ]
                }
            ]
        },

        {
            id: "business-cycles-policy",
            title: "The New Economic Paradigm and Smoothing of Business Cycles",
            keywords: ["business cycle policy essay", "new economic paradigm", "smoothing of cycles", "demand side supply side policy essay"],
            sections: [
                {
                    heading: "The New Economic Paradigm",
                    points: [
                        "Government focuses less on fine-tuning and more on eliminating uncertainty in fiscal and monetary policy.",
                        "Output can be increased by combining demand-side and supply-side policies."
                    ]
                },
                {
                    heading: "Demand-Side Policies",
                    points: [
                        "Aim to increase aggregate demand, mainly during a recession or below-trend growth when there is spare capacity (a negative output gap).",
                        "If the economy is already near full capacity, a further rise in AD mainly causes inflation rather than growth.",
                        "Monetary policy (SARB): can lower interest rates and increase the money supply to boost consumer spending.",
                        "Fiscal policy (Minister of Finance): can increase government spending (triggering the multiplier effect) and cut taxes (raising disposable income).",
                        "If aggregate demand grows faster than aggregate supply, the result is demand-pull inflation."
                    ]
                },
                {
                    heading: "Supply-Side Policies",
                    points: [
                        "Increase market efficiency and competition: deregulation, enforcing the Competition Act, and privatisation.",
                        "Decrease production costs: subsidies and reduced administrative red tape.",
                        "Improve efficiency of inputs: lower tax rates, encourage modern technology, improve human resources through skills development, and provide free advisory services."
                    ]
                }
            ]
        },

        {
            id: "business-cycle-forecasting",
            title: "Features Underpinning Business Cycle Forecasting",
            keywords: ["forecasting essay", "leading lagging coincident indicators", "business cycle indicators essay", "length amplitude trend line essay"],
            sections: [
                {
                    heading: "Leading, Lagging, Coincident and Composite Indicators",
                    points: [
                        "Leading indicators change before the economy as a whole and are useful short-term predictors (e.g. share prices, building permits, money supply).",
                        "Lagging indicators change after the economy has already turned, typically a few quarters later (e.g. the unemployment rate, average prime lending rate).",
                        "Coincident indicators move at roughly the same time as the economy and help identify current peaks/troughs (e.g. industrial production, real retail sales).",
                        "A composite indicator combines several indicators of the same type into one index to benchmark overall economic performance."
                    ]
                },
                {
                    heading: "Length and Amplitude",
                    points: [
                        "Length is the time for one complete cycle, measured peak-to-peak or trough-to-trough; it can be measured via crisis-to-crisis comparisons, historical records or business consensus.",
                        "Amplitude is the intensity (height) of the upswing and downswing and reflects the strength of underlying forces; a larger amplitude means more extreme changes."
                    ]
                },
                {
                    heading: "Trend Line, Extrapolation and Moving Averages",
                    points: [
                        "The trend line shows the general long-term direction of the economy and usually slopes upward as productive capacity grows over time.",
                        "Extrapolation uses past data/trends to predict the future, assuming the trend continues.",
                        "Moving averages repeatedly calculate average values along a time series (arithmetic, median, mode or geometric) to smooth out short-term fluctuations."
                    ]
                }
            ]
        },

        {
            id: "public-sector-problems",
            title: "Problems in the Provision of Public Sector Goods and Services",
            keywords: ["public sector problems essay", "poor public sector provisioning", "accountability efficiency pricing policy essay"],
            sections: [
                {
                    heading: "Accountability",
                    points: [
                        "Public servants may act in self-interest rather than the public interest, so mechanisms exist to keep them accountable.",
                        "Key elements include participation, transparency, ministerial responsibility, parliamentary questioning, National Treasury control and Auditor-General reporting."
                    ]
                },
                {
                    heading: "Privatisation and Parastatals",
                    points: [
                        "Privatisation is selling more than 50% of state-owned shares to the private sector to shrink the public sector, but private owners may ignore public interest, undersupplying merit goods and possibly abandoning unprofitable rural services.",
                        "Parastatals (SOEs) undertake commercial activities on the government's behalf but often focus on profit/cost at the expense of some groups' needs (e.g. Eskom, Transnet, SAA)."
                    ]
                },
                {
                    heading: "Efficiency",
                    points: [
                        "Efficient provisioning requires Pareto efficiency; inefficiency arises from bureaucracy (red tape), incompetence and corruption."
                    ]
                },
                {
                    heading: "Assessing Needs and Pricing Policy",
                    points: [
                        "Since SOEs don't operate purely on demand and supply, assessing needs is difficult; census/survey data and local government structures help.",
                        "Government pricing does not simply maximise profit; it balances free-of-charge services, community goods, collective goods, user charges, subsidies and price discrimination."
                    ]
                }
            ]
        },

        {
            id: "public-sector-objectives",
            title: "The Main Macro-Economic Objectives of the Public Sector",
            keywords: ["public sector objectives essay", "befepe", "macroeconomic objectives essay"],
            sections: [
                {
                    heading: "Balance of Payments Equilibrium",
                    points: [
                        "Government aims for a satisfactory balance of payments position, particularly in the current account, though a deficit is not always alarming if it reflects rising competitiveness."
                    ]
                },
                {
                    heading: "Economic Growth",
                    points: [
                        "South Africa targets roughly 4–5% growth, aiming for growth that raises living standards sustainably without depleting non-renewable resources or damaging the environment."
                    ]
                },
                {
                    heading: "Full Employment",
                    points: [
                        "The goal is for everyone willing and able to work at the going wage rate to find employment, raising productive potential and reducing state benefit costs."
                    ]
                },
                {
                    heading: "Exchange Rate Stability",
                    points: [
                        "Stable exchange rates attract foreign capital; the central bank may adjust the money supply to help maintain this."
                    ]
                },
                {
                    heading: "Price Stability",
                    points: [
                        "SARB targets inflation between 3% and 6% - low and stable rather than zero - which helps firms avoid constantly raising wages and prices."
                    ]
                },
                {
                    heading: "Economic Equity",
                    points: [
                        "Government redistributes income through tax and benefits to ensure access to basic necessities, while trying not to discourage work incentives."
                    ]
                }
            ]
        },

        {
            id: "protectionism-trade",
            title: "Export Promotion and Import Substitution",
            keywords: ["international trade essay", "protectionism essay", "export promotion essay", "import substitution essay", "free trade essay"],
            sections: [
                {
                    heading: "Export Promotion: Definition and Methods",
                    points: [
                        "Export promotion covers policies and interventions to improve a country's trade performance, mainly by increasing exports relative to imports.",
                        "Methods include incentives (market information, transport concessions, export credit), subsidies (direct cash payments or indirect tariff refunds/tax rebates), and trade neutrality (offsetting protection costs, including through Export Processing Zones)."
                    ]
                },
                {
                    heading: "Export Promotion: Advantages and Disadvantages",
                    points: [
                        "Advantages: large markets with no scale limits, production based on cost/efficiency, more realistic exchange rates, added value to natural resources, employment creation, and improved balance of payments.",
                        "Disadvantages: subsidies can artificially lower real production costs, reduce competition, invite retaliatory tariffs/quotas from trading partners, and cause job losses if incentives are withdrawn."
                    ]
                },
                {
                    heading: "Import Substitution: Definition and Reasons",
                    points: [
                        "Import substitution replaces some imports with local production for local consumption rather than for export, aiming to generate employment, save foreign exchange and build self-reliance.",
                        "Reasons include diversifying away from dependence on natural-resource exports, creating jobs, establishing domestic industries, correcting balance of payments problems and building national independence."
                    ]
                },
                {
                    heading: "Import Substitution: Methods, Advantages and Disadvantages",
                    points: [
                        "Methods: tariffs (ad valorem, specific or composite), quotas, subsidies, exchange control, physical bans/embargoes, and voluntary or forced substitution (e.g. due to sanctions).",
                        "Advantages: increased employment and GDP, a broader industrial base, improved balance of payments and easy implementation via tariffs/quotas.",
                        "Disadvantages: draws resources away from areas of comparative advantage, relies on borrowed technology, can overvalue the exchange rate (discouraging exports), and often means higher domestic prices for consumers."
                    ]
                }
            ]
        },

        {
            id: "perfect-market-structures",
            title: "Comparing the Four Market Structures",
            keywords: ["market structures essay", "perfect competition essay", "monopoly essay comparison", "oligopoly essay comparison", "monopolistic competition essay"],
            sections: [
                {
                    heading: "Number of Firms, Product and Entry",
                    points: [
                        "Perfect competition: so many firms that none can influence price; homogeneous product; completely free entry.",
                        "Monopolistic competition: many firms, each acting as if others won't notice; differentiated product; free entry.",
                        "Oligopoly: few firms that must consider rivals' reactions; homogeneous or differentiated product; entry varies from free to restricted.",
                        "Monopoly: one seller; unique product; entry completely blocked."
                    ]
                },
                {
                    heading: "Price Control, Information and Collusion",
                    points: [
                        "Perfect competition: firms are price takers with complete information; collusion is impossible.",
                        "Monopolistic competition: firms have little price control (mostly price makers) with incomplete information; collusion is impossible.",
                        "Oligopoly: considerable price-making power (less than monopoly), incomplete information, and collusion is possible (though illegal under the Competition Act).",
                        "Monopoly: considerable price-making power limited by market demand, complete information, and collusion is impossible (only one firm)."
                    ]
                },
                {
                    heading: "Profit, Output and Examples",
                    points: [
                        "Perfect competition and monopolistic competition earn only normal profit in the long run; oligopoly and monopoly can earn economic profit in the long run.",
                        "Output is highest and most varied under perfect and monopolistic competition, and lowest under oligopoly and monopoly.",
                        "Examples: perfect competition - maize/tomato farmers, gold on the JSE; monopolistic competition - fast food, clothing; oligopoly - banking, cellphone networks, cement; monopoly - Eskom, Transnet."
                    ]
                }
            ]
        },

        {
            id: "perfect-market-equilibrium",
            title: "Equilibrium Positions in Perfect Markets",
            keywords: ["normal profit essay", "economic profit essay", "shutdown point essay", "long run equilibrium perfect competition essay"],
            sections: [
                {
                    heading: "Normal Profit",
                    points: [
                        "Occurs where economic profit is zero, i.e. AC = AR (TR = TC), at the break-even point.",
                        "It's the minimum profit needed to keep entrepreneurs in the industry, accounting for opportunity cost - it doesn't mean zero accounting profit."
                    ]
                },
                {
                    heading: "Economic Profit and Long-Run Adjustment",
                    points: [
                        "Economic profit occurs when AC is less than price (AR), so TR exceeds TC after deducting opportunity costs.",
                        "Economic profit attracts new entrants; supply shifts right, price falls until only normal profit remains, restoring long-run equilibrium at the minimum point of the LAC curve.",
                        "Losses work in reverse: firms exit until price rises back to the level of normal profit."
                    ]
                },
                {
                    heading: "The Shutdown Rule",
                    points: [
                        "In the short run a firm should keep operating if price exceeds average variable cost (P > AVC), because fixed costs must be paid regardless.",
                        "If total revenue exceeds total variable cost, the surplus ('contribution') helps cover fixed costs; if TVC exceeds TR, the firm should shut down immediately.",
                        "The shutdown point is where price just covers AVC; below this point, the firm closes rather than trade at a bigger loss."
                    ]
                }
            ]
        },

        {
            id: "monopoly-essay",
            title: "The Monopoly Market Structure",
            keywords: ["monopoly essay", "discuss monopoly in detail"],
            sections: [
                {
                    heading: "Characteristics",
                    points: [
                        "One seller of a good/service with no close substitute and completely blocked entry; size is not what defines a monopoly.",
                        "Barriers to entry include patents, licences, sole rights, import restrictions and exclusive ownership of raw materials, though globalisation increasingly limits local monopoly power.",
                        "Collusion is impossible (only one firm); information is complete for both buyers and sellers."
                    ]
                },
                {
                    heading: "Price, Output and Profit",
                    points: [
                        "The monopolist is a price maker, limited by market demand and profit-maximisation goals, and faces the downward-sloping market demand curve.",
                        "Because entry is blocked, economic profit can persist in the long run for as long as demand for the product holds.",
                        "Output is low with no consumer choice, and there is no non-price competition."
                    ]
                },
                {
                    heading: "Sources of Monopoly Power and Regulation",
                    points: [
                        "Sources include economies of scale, capital requirements, technological superiority, lack of substitutes, control of natural resources and legal barriers.",
                        "Because monopolists can exploit consumers, government intervenes through legislation such as the Competition Act 89 of 1998."
                    ]
                }
            ]
        },

        {
            id: "oligopoly-essay",
            title: "The Oligopoly Market Structure",
            keywords: ["oligopoly essay", "examine oligopoly in detail"],
            sections: [
                {
                    heading: "Characteristics",
                    points: [
                        "A small number of large firms ('oligopolists') supply most or all of the market; each is aware of, and influenced by, rivals' decisions.",
                        "Products may be homogeneous (pure oligopoly, e.g. petrol) or differentiated (e.g. banking services); entry faces significant barriers such as high capital requirements.",
                        "Collusion is possible and common, though illegal under South Africa's Competition Act - colluding firms effectively behave like a cartel/monopoly."
                    ]
                },
                {
                    heading: "Price, Output and Competition",
                    points: [
                        "Oligopolists are price makers with less control than a monopolist; the demand curve is typically kinked and price changes occur more frequently.",
                        "Output is low with limited choice; economic profit is possible in the long run.",
                        "Non-price competition is common: advertising, after-sales service, brand loyalty, extended hours and product differentiation.",
                        "Examples: banking, cellphone networks, cigarettes and vehicle manufacturing."
                    ]
                }
            ]
        },

        {
            id: "market-failure-causes",
            title: "Causes of Market Failure (Misallocation of Resources)",
            keywords: ["market failure essay", "mielii", "causes of market failure essay"],
            sections: [
                {
                    heading: "Missing Markets and Public Goods",
                    points: [
                        "Some goods are needed/wanted but markets fail to form for them - most extremely, pure public goods like national defence, policing and street lighting.",
                        "Public goods are non-excludable (no one can be denied access) and non-rivalrous (one person's use doesn't reduce availability to others), so entrepreneurs can't charge users and won't supply them."
                    ]
                },
                {
                    heading: "Imperfect Competition and Lack of Information",
                    points: [
                        "Imperfect markets (monopoly, oligopoly) restrict output and raise prices above marginal cost, causing both allocative and technical inefficiency.",
                        "When producers or consumers lack complete, accurate information, they make wrong production/consumption decisions and resources are wasted."
                    ]
                },
                {
                    heading: "Externalities",
                    points: [
                        "Externalities occur when production or consumption affects third parties not part of the transaction, and can be positive or negative.",
                        "Social cost = private cost + external cost; social benefit = private benefit + external benefit.",
                        "Example: a factory's negative production externality is pollution; a positive consumption externality is the wider benefit society gains from an individual's education."
                    ]
                },
                {
                    heading: "Immobility of Factors and Unequal Income Distribution",
                    points: [
                        "Labour immobility (geographic or institutional, e.g. pension ties, family circumstances) and specific/heavy capital slow the market's ability to adjust to changes in demand and supply.",
                        "Unequal income and wealth distribution arises from discrimination, differences in market power, and unequal access to markets and education."
                    ]
                }
            ]
        },

        {
            id: "market-failure-intervention",
            title: "State Intervention as a Consequence of Market Failure",
            keywords: ["state intervention essay", "market failure intervention essay", "minimum wage maximum price essay"],
            sections: [
                {
                    heading: "Direct Control of Externalities",
                    points: [
                        "For negative externalities (e.g. pollution), government can tax the good so consumers pay the full social cost, reducing consumption to a more efficient level (e.g. sin tax on cigarettes).",
                        "For positive externalities (e.g. education), government can subsidise consumption to close the gap between private and social benefit."
                    ]
                },
                {
                    heading: "Imperfect Markets, Minimum Wages and Price Controls",
                    points: [
                        "Government can strengthen competition policy, impose price controls, or license new entrants to challenge a state monopoly.",
                        "A minimum wage set above the market wage increases the quantity of labour supplied but reduces quantity demanded, potentially causing unemployment.",
                        "A minimum price (price floor) set above market price usually creates a surplus; a maximum price (price ceiling) set below market price usually creates a shortage."
                    ]
                },
                {
                    heading: "Taxes, Subsidies and Redistribution",
                    points: [
                        "Progressive taxation charges higher earners more, and taxes can recover external costs by raising prices to reduce harmful production/consumption.",
                        "Subsidies lower production costs and prices, encouraging supply of merit goods.",
                        "Government redistributes wealth via taxing/spending powers and redress mechanisms (e.g. BEE, affirmative action, land restitution) and may directly produce merit/public goods itself."
                    ]
                }
            ]
        },

        {
            id: "growth-demand-side",
            title: "The Demand-Side Approach to Growth and Development",
            keywords: ["demand side approach essay", "growth demand side essay", "monetary fiscal policy growth essay"],
            sections: [
                {
                    heading: "Overview",
                    points: [
                        "Focuses on the aggregate demand created by households, businesses, government and the foreign sector as a driving force for growth.",
                        "There must be adequate and growing demand for domestically produced goods and services: ΔGDP = ΔC + ΔI + ΔG + Δ(X - M)."
                    ]
                },
                {
                    heading: "Monetary Policy",
                    points: [
                        "The SARB influences interest rates and money supply via open market transactions, cash reserve requirements (currently 5% in SA) and moral persuasion with commercial banks."
                    ]
                },
                {
                    heading: "Fiscal Policy",
                    points: [
                        "Government varies taxes and spending to stimulate or restrain demand, funding training, infrastructure, export promotion and new businesses to support growth.",
                        "Development-oriented fiscal tools include progressive taxation, welfare grants, tax reductions, land/home ownership support and benefits in kind."
                    ]
                }
            ]
        },

        {
            id: "growth-supply-side",
            title: "The Supply-Side Approach to Growth and Development",
            keywords: ["supply side approach essay", "growth supply side essay", "south africa supply side policy essay"],
            sections: [
                {
                    heading: "Overview",
                    points: [
                        "Focuses on expanding the economy's production capacity by increasing the quantity or quality of natural resources, labour, capital, entrepreneurship and technology."
                    ]
                },
                {
                    heading: "South Africa's Supply-Side Measures",
                    points: [
                        "Education and training: SETAs promote work-related training for different sectors as skilled-labour demand grows.",
                        "SMME support: funding through Khula, the National Empowerment Fund, IDC and Business Partners, plus free advisory centres.",
                        "Fiscal policy: reduced tax rates and targeted incentives to encourage investment.",
                        "Competition and deregulation: the Competition Act (1998), Competition Commission/Tribunal, and removal of unnecessary trade barriers boost competition.",
                        "Labour legislation, R&D support, privatisation and infrastructure development (transport, energy, telecommunications) round out the supply-side toolkit."
                    ]
                }
            ]
        },

        {
            id: "industrial-development-sa",
            title: "South Africa's Regional Development Initiatives",
            keywords: ["regional development essay", "industrial development policy essay", "sdi idz sez essay"],
            sections: [
                {
                    heading: "Background",
                    points: [
                        "About 80% of SA's GDP comes from four industrialised areas: Johannesburg-Pretoria-Tshwane, Durban-Pinetown, Cape Town and Port Elizabeth-Coega-Uitenhage, mainly due to unequal spending and resource distribution.",
                        "Regional policy aims to spread industries more evenly so capital and labour move toward under-developed areas."
                    ]
                },
                {
                    heading: "Spatial Development Initiatives, IDZs and SEZs",
                    points: [
                        "SDIs link economic hubs to poorer regions to stimulate growth and employment (e.g. the Platinum SDI for mining/agri-tourism, the Maputo Development Corridor for industry/agri-processing).",
                        "Industrial Development Zones (IDZs) are export-focused industrial estates linked to ports/airports, such as Coega and Richards Bay.",
                        "Special Economic Zones (SEZs) are demarcated areas offering tax relief and infrastructure to enable industrial clustering."
                    ]
                },
                {
                    heading: "Incentive Programmes",
                    points: [
                        "Financial incentives include duty-free import concessions, the Small Business Support Programme, the Skills Development Programme, the Critical Infrastructure Programme and foreign investment grants."
                    ]
                }
            ]
        },

        {
            id: "industrial-development-benchmarks",
            title: "International Best-Practice Benchmarks for Regional Development",
            keywords: ["regional development benchmark essay", "good governance sustainability essay", "regional development criteria essay"],
            sections: [
                {
                    heading: "Governance and Partnerships",
                    points: [
                        "Good governance requires democratic decision-making, transparency and effective, corruption-free financial management.",
                        "Integration ensures benefits spill over between regions and industries; partnerships should link central government, local authorities, civil society and the private sector."
                    ]
                },
                {
                    heading: "Resources, Competitiveness and Sustainability",
                    points: [
                        "Sufficient resources (infrastructure, human resources) must be provided in resource-poor areas.",
                        "Businesses created through regional policy should be competitive and not need ongoing government support.",
                        "Sustainability means the region's own resources support development without compromising future employment."
                    ]
                },
                {
                    heading: "People-Centred and Free-Market Principles",
                    points: [
                        "Development should be by, for and from the people, starting at grassroots level and treated as a multi-dimensional process (education, health, nutrition).",
                        "A free-market orientation keeps government intervention minimal so supply, demand and profit motives can allocate resources efficiently, alongside investment in social capital such as education and healthcare."
                    ]
                }
            ]
        },

        {
            id: "economic-indicators-essay",
            title: "Key Economic Indicators",
            keywords: ["economic indicators essay", "production price employment productivity indicators essay"],
            sections: [
                {
                    heading: "Production and Price Indicators",
                    points: [
                        "Real GDP removes the effect of inflation to measure genuine growth; nominal GDP uses current prices; GDP per capita (Real GDP ÷ population) reflects living standards and is used to compare countries or groups.",
                        "The CPI tracks a representative basket of consumer goods/services and is South Africa's official inflation-targeting index; the PPI tracks production (not consumption) costs, excludes VAT and shows import prices explicitly."
                    ]
                },
                {
                    heading: "Monetary and Foreign Trade Indicators",
                    points: [
                        "The SARB tracks money supply in three aggregates: M1 (notes, coins and demand deposits), M2 (M1 plus short/medium-term deposits) and M3 (M2 plus long-term deposits).",
                        "The repo rate is what SARB charges commercial banks and anchors other interest rates; the prime rate (charged to customers) is always higher.",
                        "The terms of trade is the ratio of export prices to import prices; the exchange rate is the price of one currency in terms of another, monitored closely by importers/exporters."
                    ]
                },
                {
                    heading: "Employment and Productivity Indicators",
                    points: [
                        "The Economically Active Population (EAP) is people aged roughly 15-65 who are willing and able to work; the unemployment rate expresses those seeking work but without a job as a percentage of the EAP.",
                        "The employment rate is the percentage of the EAP that is working, useful for spotting sector trends and measuring productivity.",
                        "Labour productivity measures real GDP produced per hour of labour, driven by investment/saving in capital, new technology and human capital."
                    ]
                }
            ]
        },

        {
            id: "social-indicators-essay",
            title: "Key Social Indicators",
            keywords: ["social indicators essay", "demographic nutrition health education housing indicators essay"],
            sections: [
                {
                    heading: "Demographic and Income Indicators",
                    points: [
                        "Population growth (measured via census) matters for service delivery and the tax base; high population growth with low economic growth strains living standards and government finances.",
                        "Life expectancy is the expected years a newborn will live; South Africa's has historically lagged well behind developed countries like the USA.",
                        "The Gini coefficient (0 to 1) measures income inequality; progressive taxation and BEE are used to try to lower it."
                    ]
                },
                {
                    heading: "Education, Housing and Services",
                    points: [
                        "A higher literacy rate reflects more effective education and training, ultimately raising productivity and living standards; education spending is a top priority in the SA budget.",
                        "Housing delivery is hindered by unemployment and unequal income distribution, so government uses subsidies and loans to promote ownership.",
                        "Access to services such as electricity, refuse removal, water supply and sanitation are used in surveys (e.g. the General Household Survey) to track development."
                    ]
                },
                {
                    heading: "Nutrition and Health Indicators",
                    points: [
                        "Infant mortality and under-five mortality (deaths per 1 000 live births) indicate a population's basic health and wellbeing.",
                        "Health expenditure as a percentage of GDP, and access to safe drinking water and sanitation, are used to compare South Africa's health infrastructure internationally.",
                        "Child malnutrition (underweight/stunting) and childhood obesity are both monitored, since either can seriously affect a child's development."
                    ]
                }
            ]
        },

        {
            id: "demand-pull-inflation",
            title: "Causes of Demand-Pull Inflation",
            keywords: ["demand pull inflation essay", "causes of demand inflation essay"],
            sections: [
                {
                    heading: "Consumption, Credit and Investment",
                    points: [
                        "An increase in the money supply without a matching increase in output leaves more money chasing the same goods, pushing prices up.",
                        "Rising household consumption - through declining savings, tax reductions, or easier access to credit as interest rates fall - increases demand faster than supply.",
                        "Lower interest rates improve business profit expectations, encouraging more investment spending on goods such as cement and bricks, adding further demand."
                    ]
                },
                {
                    heading: "Government Spending and Exports",
                    points: [
                        "Government spending that rises without a matching increase in aggregate supply, especially if funded by borrowing (which increases money in circulation), adds to demand-pull pressure.",
                        "Rising export earnings channel more money into the domestic economy; if exports rise without a matching rise in domestic production, fewer goods remain available locally, pushing prices up."
                    ]
                }
            ]
        },

        {
            id: "cost-push-inflation",
            title: "Causes of Cost-Push Inflation",
            keywords: ["cost push inflation essay", "causes of cost inflation essay"],
            sections: [
                {
                    heading: "Wages, Inputs and the Exchange Rate",
                    points: [
                        "Rising wages increase the cost of production, which businesses pass on as higher prices.",
                        "Higher prices for key imported inputs (like oil or machinery) raise domestic production costs directly.",
                        "A depreciating exchange rate makes imported goods and inputs more expensive in rand terms."
                    ]
                },
                {
                    heading: "Profit Margins, Productivity and Shocks",
                    points: [
                        "Businesses increasing profit margins to recover higher costs push prices up further.",
                        "A decrease in productivity means each unit costs more to produce if remuneration stays the same.",
                        "Natural disasters (droughts, floods) and supply shocks (like sudden oil price spikes) raise costs and disrupt supply, feeding a wage-price spiral of rising costs, prices and living expenses."
                    ]
                }
            ]
        },

        {
            id: "tourism-effects",
            title: "The Effects of Tourism",
            keywords: ["tourism effects essay", "effects of tourism essay"],
            sections: [
                {
                    heading: "Positive Effects: GDP, Employment and Poverty",
                    points: [
                        "Tourism contributes strongly to the services sector, directly and indirectly, and is one of the world's largest generators of jobs across all skill levels.",
                        "Because prime tourist attractions are often in rural areas, tourism can be a fast, effective way to spread income sources, empower communities and reduce poverty."
                    ]
                },
                {
                    heading: "Infrastructure and Externalities",
                    points: [
                        "Tourism requires adequate transport, communication, energy and basic-services infrastructure; a lack of this prevents growth, and seasonality complicates planning.",
                        "Tourism has both positive externalities (revenue, poverty alleviation, conservation) and negative ones (environmental damage, resource strain) if growth isn't managed sustainably."
                    ]
                },
                {
                    heading: "Negative Effects: Environment and Society",
                    points: [
                        "Rapid, short-term-focused tourism growth can degrade traditions/culture and damage natural sites through pollution and waste.",
                        "Environmental stress includes permanent restructuring (e.g. roads, airports), waste generation, direct habitat destruction and shifts in population dynamics.",
                        "Other risks include disrespect for local heritage, spread of disease, and concentrating development funds at tourist hubs at the expense of other areas."
                    ]
                }
            ]
        },

        {
            id: "tourism-benefits",
            title: "The Benefits of Tourism",
            keywords: ["tourism benefits essay", "benefits of tourism essay"],
            sections: [
                {
                    heading: "Households and Government",
                    points: [
                        "Households benefit through income (wages from tourism-related work), improved infrastructure, and the variety of skills tourism jobs demand and develop.",
                        "Government benefits mainly through taxation (VAT, excise duties, airport and hotel taxes), which recovers external costs and treats tourists as part of the tax base."
                    ]
                },
                {
                    heading: "Businesses and Infrastructure",
                    points: [
                        "Private businesses (accommodation, transport, retail, recreation) form the profit-generating 'superstructure' of tourism, supported by public-sector infrastructure and financial incentives.",
                        "Tourism also stimulates entrepreneurship, BEE and SMME development, including informal opportunities such as car rentals and craft sales.",
                        "Both economic infrastructure (beach/lake/river access) and social infrastructure (ambulance services, information services) are prioritised to support tourist destinations."
                    ]
                }
            ]
        },

        {
            id: "environmental-government-measures",
            title: "Government Measures to Ensure Environmental Sustainability",
            keywords: ["environmental sustainability essay", "government environmental measures essay", "environmental tax subsidy essay"],
            sections: [
                {
                    heading: "Property Rights, Charges and Taxes",
                    points: [
                        "Granting property rights encourages people to look after what belongs to them (e.g. the Kyoto Protocol's principle of developed countries paying for pollution rights).",
                        "Government can charge for environmental use (emission charges rising with pollution levels) or impose environmental (green) taxes on outputs that cause external costs."
                    ]
                },
                {
                    heading: "Subsidies and Marketable Permits",
                    points: [
                        "Environmental subsidies, funded from taxation, reduce environmentally damaging activities and encourage recycling or cleaner technology.",
                        "Marketable permits let government cap pollution and allow businesses to trade permits/credits amongst themselves in a permit market."
                    ]
                },
                {
                    heading: "Direct Control, Agreements and Education",
                    points: [
                        "Command and Control (CAC) sets legal maximum pollution levels that must be observed.",
                        "Voluntary agreements are negotiated between government and businesses to cut pollution without formal regulation.",
                        "Education changes attitudes toward the environment, for example through community wildlife reserve initiatives."
                    ]
                }
            ]
        },

        {
            id: "environmental-international-measures",
            title: "International Measures for Sustainable Development",
            keywords: ["international environmental measures essay", "sustainable development international essay", "kyoto protocol essay"],
            sections: [
                {
                    heading: "Biodiversity, Chemical and Hazardous Waste",
                    points: [
                        "Species extinction is irreversible; CITES sets policies to curb biodiversity loss.",
                        "The Stockholm Protocol limits toxic chemical waste; the Basel Convention (which South Africa has signed) manages highly hazardous waste, including radioactive waste."
                    ]
                },
                {
                    heading: "Climate Change and Indigenous Knowledge",
                    points: [
                        "Climate change, driven mainly by global warming, is addressed through international cooperation such as sharing weather data and limiting greenhouse gases.",
                        "The Kyoto Protocol (1997) set binding obligations for industrialised countries to cut six greenhouse gases after voluntary reductions failed.",
                        "As indigenous communities lose their habitats or urbanise, valuable traditional environmental knowledge is being lost, making local capacity-building important."
                    ]
                },
                {
                    heading: "Major International Summits",
                    points: [
                        "Rio de Janeiro (UNCED, 1992): established sustainable development as a global objective, including the 'polluter pays' principle.",
                        "Johannesburg Summit (WSSD, 2002): focused on poverty eradication and unsustainable consumption patterns.",
                        "Rio+20 (2012): promoted the 'green economy' as a tool for sustainable growth and poverty eradication.",
                        "COP 17 (Durban): reaffirmed the Kyoto Protocol and established a Green Climate Fund plus an Adaptation Committee to help vulnerable countries."
                    ]
                }
            ]
        }

    ];


    /* =========================================================
       FINANCIAL STATEMENT TEMPLATES (full worked examples,
       given only when the person explicitly asks to prepare
       or see a financial statement)
    ========================================================= */

    const financialStatementTemplates = {

        pnl: `
            <h2>Statement of Profit or Loss (Income Statement)</h2>
            <p><em>Comfy Furniture Traders - for the year ended 28 February 2026 (illustrative figures)</em></p>
            <table style="width:100%; border-collapse:collapse; font-size:0.95em;">
                <tr><td>Sales</td><td style="text-align:right;">850 000</td></tr>
                <tr><td>Cost of sales</td><td style="text-align:right;">(510 000)</td></tr>
                <tr><td><strong>Gross profit</strong></td><td style="text-align:right;"><strong>340 000</strong></td></tr>
                <tr><td>Other income (rent income)</td><td style="text-align:right;">18 000</td></tr>
                <tr><td><strong>Subtotal</strong></td><td style="text-align:right;"><strong>358 000</strong></td></tr>
                <tr><td colspan="2"><em>Operating expenses</em></td></tr>
                <tr><td>&nbsp;&nbsp;Salaries and wages</td><td style="text-align:right;">(120 000)</td></tr>
                <tr><td>&nbsp;&nbsp;Rent expense</td><td style="text-align:right;">(24 000)</td></tr>
                <tr><td>&nbsp;&nbsp;Water and electricity</td><td style="text-align:right;">(15 000)</td></tr>
                <tr><td>&nbsp;&nbsp;Depreciation</td><td style="text-align:right;">(20 000)</td></tr>
                <tr><td>&nbsp;&nbsp;Sundry expenses</td><td style="text-align:right;">(9 000)</td></tr>
                <tr><td><strong>Operating profit</strong></td><td style="text-align:right;"><strong>170 000</strong></td></tr>
                <tr><td>Interest expense</td><td style="text-align:right;">(10 000)</td></tr>
                <tr><td><strong>Profit before tax</strong></td><td style="text-align:right;"><strong>160 000</strong></td></tr>
                <tr><td>Income tax expense (28%)</td><td style="text-align:right;">(44 800)</td></tr>
                <tr><td><strong>Profit for the year</strong></td><td style="text-align:right;"><strong>115 200</strong></td></tr>
            </table>
            <p><em>Figures are illustrative. Swap in your own trial balance amounts to prepare a real statement - happy to help with that too.</em></p>
        `,

        sofp: `
            <h2>Statement of Financial Position (Balance Sheet)</h2>
            <p><em>Comfy Furniture Traders - as at 28 February 2026 (illustrative figures)</em></p>
            <table style="width:100%; border-collapse:collapse; font-size:0.95em;">
                <tr><td colspan="2"><strong>ASSETS</strong></td></tr>
                <tr><td>Non-current assets</td><td></td></tr>
                <tr><td>&nbsp;&nbsp;Property, plant and equipment</td><td style="text-align:right;">480 000</td></tr>
                <tr><td>Current assets</td><td></td></tr>
                <tr><td>&nbsp;&nbsp;Inventory</td><td style="text-align:right;">95 000</td></tr>
                <tr><td>&nbsp;&nbsp;Trade receivables</td><td style="text-align:right;">60 000</td></tr>
                <tr><td>&nbsp;&nbsp;Cash and cash equivalents</td><td style="text-align:right;">35 000</td></tr>
                <tr><td><strong>Total assets</strong></td><td style="text-align:right;"><strong>670 000</strong></td></tr>
                <tr><td colspan="2">&nbsp;</td></tr>
                <tr><td colspan="2"><strong>EQUITY AND LIABILITIES</strong></td></tr>
                <tr><td>Capital (opening)</td><td style="text-align:right;">300 000</td></tr>
                <tr><td>Add: Net profit for the year</td><td style="text-align:right;">115 200</td></tr>
                <tr><td>Less: Drawings</td><td style="text-align:right;">(40 000)</td></tr>
                <tr><td><strong>Capital (closing)</strong></td><td style="text-align:right;"><strong>375 200</strong></td></tr>
                <tr><td>Non-current liabilities</td><td></td></tr>
                <tr><td>&nbsp;&nbsp;Long-term loan</td><td style="text-align:right;">150 000</td></tr>
                <tr><td>Current liabilities</td><td></td></tr>
                <tr><td>&nbsp;&nbsp;Trade payables</td><td style="text-align:right;">100 000</td></tr>
                <tr><td>&nbsp;&nbsp;Bank overdraft</td><td style="text-align:right;">44 800</td></tr>
                <tr><td><strong>Total equity and liabilities</strong></td><td style="text-align:right;"><strong>670 000</strong></td></tr>
            </table>
            <p><em>Figures are illustrative and are set up to balance (Total assets = Total equity and liabilities).</em></p>
        `,

        cashflow: `
            <h2>Statement of Cash Flows</h2>
            <p><em>Comfy Furniture Traders - for the year ended 28 February 2026 (indirect method, illustrative figures)</em></p>
            <table style="width:100%; border-collapse:collapse; font-size:0.95em;">
                <tr><td colspan="2"><strong>Cash flows from operating activities</strong></td></tr>
                <tr><td>Profit before tax</td><td style="text-align:right;">160 000</td></tr>
                <tr><td>Adjustments: Depreciation</td><td style="text-align:right;">20 000</td></tr>
                <tr><td>Adjustments: Interest expense</td><td style="text-align:right;">10 000</td></tr>
                <tr><td><strong>Operating profit before working capital changes</strong></td><td style="text-align:right;"><strong>190 000</strong></td></tr>
                <tr><td>Increase in inventory</td><td style="text-align:right;">(15 000)</td></tr>
                <tr><td>Increase in trade receivables</td><td style="text-align:right;">(10 000)</td></tr>
                <tr><td>Increase in trade payables</td><td style="text-align:right;">20 000</td></tr>
                <tr><td><strong>Cash generated from operations</strong></td><td style="text-align:right;"><strong>185 000</strong></td></tr>
                <tr><td>Interest paid</td><td style="text-align:right;">(10 000)</td></tr>
                <tr><td>Tax paid</td><td style="text-align:right;">(44 800)</td></tr>
                <tr><td><strong>Net cash from operating activities</strong></td><td style="text-align:right;"><strong>130 200</strong></td></tr>
                <tr><td colspan="2">&nbsp;</td></tr>
                <tr><td colspan="2"><strong>Cash flows from investing activities</strong></td></tr>
                <tr><td>Purchase of property, plant and equipment</td><td style="text-align:right;">(60 000)</td></tr>
                <tr><td><strong>Net cash used in investing activities</strong></td><td style="text-align:right;"><strong>(60 000)</strong></td></tr>
                <tr><td colspan="2">&nbsp;</td></tr>
                <tr><td colspan="2"><strong>Cash flows from financing activities</strong></td></tr>
                <tr><td>Proceeds from long-term loan</td><td style="text-align:right;">50 000</td></tr>
                <tr><td>Drawings</td><td style="text-align:right;">(40 000)</td></tr>
                <tr><td><strong>Net cash from financing activities</strong></td><td style="text-align:right;"><strong>10 000</strong></td></tr>
                <tr><td colspan="2">&nbsp;</td></tr>
                <tr><td><strong>Net increase in cash and cash equivalents</strong></td><td style="text-align:right;"><strong>80 200</strong></td></tr>
                <tr><td>Cash and cash equivalents at beginning of year</td><td style="text-align:right;">(45 200)</td></tr>
                <tr><td><strong>Cash and cash equivalents at end of year</strong></td><td style="text-align:right;"><strong>35 000</strong></td></tr>
            </table>
            <p><em>Figures are illustrative and use the indirect method starting from profit before tax.</em></p>
        `

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
       EXAMPLE REQUEST DETECTION

       Examples are ONLY shown when the person specifically
       asks for them (e.g. "give me examples of depreciation",
       "examples under international trade"). They are never
       dumped into a normal explanation unless asked.
    ========================================================= */

    function isExampleRequest(question) {

        const text = normalizeText(question);

        const phrases = [
            "example",
            "examples",
            "give me an example",
            "give me examples",
            "show me examples",
            "show me an example",
            "worked example"
        ];

        return phrases.some(phrase => text.includes(phrase));

    }


    /* =========================================================
       FORMAT: EXAMPLES ONLY (minimum 5 where stored)
    ========================================================= */

    function formatExamplesOnly(item) {

        const examples = item.examples || [];

        let html = `<h2>${escapeHtml(item.topic)} - Examples</h2>`;

        if (!examples.length) {

            html += `
                <p>
                    I don't have worked examples stored for
                    <strong>${escapeHtml(item.topic)}</strong> yet.
                    Try asking for the general explanation instead,
                    or ask me to add examples for this topic.
                </p>
            `;

            return html;

        }

        html += `<ol>`;

        examples.forEach(example => {

            html += `
                <li style="margin-bottom:8px;">
                    ${escapeHtml(example)}
                </li>
            `;

        });

        html += `</ol>`;

        if (examples.length < 5) {

            html += `
                <p>
                    <em>
                        Only ${examples.length} example${examples.length === 1 ? "" : "s"}
                        currently stored for this topic - ask me
                        and I can expand this list to at least five.
                    </em>
                </p>
            `;

        }

        return html;

    }


    /* =========================================================
       ESSAY REQUEST DETECTION (Economics essays)

       Essays are ONLY produced when the person explicitly
       asks for an "essay" - never bundled into a normal
       explanation.
    ========================================================= */

    function isEssayRequest(question) {

        const text = normalizeText(question);

        return text.includes("essay");

    }


    function scoreEssay(question, essay) {

        const text = normalizeText(question);

        let score = 0;

        essay.keywords.forEach(keyword => {

            const key = normalizeText(keyword);

            if (!key) return;

            if (text.includes(key)) {
                score += key.includes(" ") ? 12 : 6;
            }

        });

        /* also match on the essay title words */

        const titleTokens = getTokens(essay.title);

        const questionTokens = new Set(getTokens(question));

        titleTokens.forEach(token => {

            if (
                token.length > 3 &&
                questionTokens.has(token)
            ) {
                score += 3;
            }

        });

        return score;

    }


    function listEssayTopics() {

        let html = `
            <h2>Available Economics Essays</h2>
            <p>Just ask, for example: "give me an essay on circular flow" or "essay on market failure".</p>
            <ul>
        `;

        economicsEssays.forEach(essay => {

            html += `<li>${escapeHtml(essay.title)}</li>`;

        });

        html += `</ul>`;

        return html;

    }


    function renderEssay(essay) {

        let html = `<h2>Essay: ${escapeHtml(essay.title)}</h2>`;

        essay.sections.forEach(section => {

            html += `<h3>${escapeHtml(section.heading)}</h3><ul>`;

            section.points.forEach(point => {

                html += `<li>${escapeHtml(point)}</li>`;

            });

            html += `</ul>`;

        });

        return html;

    }


    function generateEssayAnswer(question) {

        const text = normalizeText(question);

        const listPhrases = [
            "list essay",
            "essay topics",
            "what essays",
            "which essays",
            "available essays"
        ];

        if (listPhrases.some(phrase => text.includes(phrase))) {
            return listEssayTopics();
        }

        const scored = economicsEssays.map(essay => {

            return {
                essay,
                score: scoreEssay(question, essay)
            };

        });

        scored.sort((a, b) => b.score - a.score);

        if (!scored.length || scored[0].score < 6) {
            return listEssayTopics();
        }

        return renderEssay(scored[0].essay);

    }


    /* =========================================================
       FINANCIAL STATEMENT REQUEST DETECTION
    ========================================================= */

    function isFinancialStatementRequest(question) {

        const text = normalizeText(question);

        const phrases = [
            "statement of profit or loss",
            "statement of comprehensive income",
            "income statement",
            "statement of financial position",
            "balance sheet",
            "cash flow statement",
            "statement of cash flows",
            "prepare a financial statement",
            "prepare financial statements",
            "prepare me a financial statement",
            "example financial statement",
            "financial statements example"
        ];

        return phrases.some(phrase => text.includes(phrase));

    }


    function generateFinancialStatement(question) {

        const text = normalizeText(question);

        if (
            text.includes("cash flow statement") ||
            text.includes("statement of cash flows") ||
            (text.includes("cash flow") && text.includes("statement"))
        ) {
            return financialStatementTemplates.cashflow;
        }

        if (
            text.includes("financial position") ||
            text.includes("balance sheet")
        ) {
            return financialStatementTemplates.sofp;
        }

        if (
            text.includes("profit or loss") ||
            text.includes("income statement") ||
            text.includes("comprehensive income")
        ) {
            return financialStatementTemplates.pnl;
        }

        return `
            <h2>Which financial statement?</h2>
            <p>I can prepare a full worked example of:</p>
            <ul>
                <li>Statement of Profit or Loss (Income Statement)</li>
                <li>Statement of Financial Position (Balance Sheet)</li>
                <li>Statement of Cash Flows</li>
            </ul>
            <p>Just ask, for example: "prepare a statement of profit or loss".</p>
        `;

    }


    /* =========================================================
       JOKE / FUN FACT REQUEST DETECTION
    ========================================================= */

    function isJokeRequest(question) {

        const text = normalizeText(question);

        const phrases = [
            "joke",
            "make me laugh",
            "tell me something funny",
            "say something funny"
        ];

        return phrases.some(phrase => text.includes(phrase));

    }


    function isFunFactRequest(question) {

        const text = normalizeText(question);

        const phrases = [
            "fun fact",
            "funfact",
            "interesting fact",
            "did you know",
            "random fact"
        ];

        return phrases.some(phrase => text.includes(phrase));

    }


    function isMotivationRequest(question) {

        const text = normalizeText(question);

        const phrases = [
            "motivate me",
            "motivation",
            "encourage me",
            "i am stressed",
            "i'm stressed",
            "im stressed",
            "i am tired of studying",
            "i give up",
            "this is too hard"
        ];

        return phrases.some(phrase => text.includes(phrase));

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

        html += `
            <p>
                <em>Tip: you can also just ask me for a "joke" or a "fun fact" whenever you need a study break.</em>
            </p>
        `;

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


            const funLine =
                Math.random() < 0.3
                    ? `<p><em>${escapeHtml(pickRandom(encouragements))}</em></p>`
                    : "";


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
                ${funLine}
            `;

        } catch (error) {

            return null;

        }

    }


    /* =========================================================
       JOKE / FUN FACT / MOTIVATION ANSWERS
    ========================================================= */

    function tellJoke() {

        const joke = pickRandom(jokesKnowledge);

        return `
            <h2>Here's one for you</h2>
            <p>${escapeHtml(joke.setup)}</p>
            <p><strong>${escapeHtml(joke.punchline)}</strong></p>
            <p><em>Okay, back to studying. Ask me another topic whenever you're ready.</em></p>
        `;

    }


    function tellFunFact() {

        const fact = pickRandom(funFactsKnowledge);

        return `
            <h2>Fun fact</h2>
            <p>${escapeHtml(fact)}</p>
        `;

    }


    function tellMotivation() {

        const line = pickRandom(motivationalLines);

        return `
            <h2>You've got this</h2>
            <p>${escapeHtml(line)}</p>
            <p>
                If you want, tell me the exact topic you're stuck on and
                I'll break it down step by step.
            </p>
        `;

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
                    ${escapeHtml(pickRandom(funGreetings))}
                </p>

                <p>
                    ${escapeHtml(pickRandom(greetingFollowUps))}
                </p>
            `;

        }


        if (
            text.includes("thank you") ||
            text.includes("thanks") ||
            text === "ty"
        ) {

            return `
                <p>
                    You're very welcome! Go forth and ace that test.
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
                    Mathematics - with the occasional
                    terrible joke thrown in.
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
                    (${escapeHtml(developerInformation.version)})
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
                <li>Give me an essay on market failure.</li>
                <li>Prepare a statement of profit or loss.</li>
                <li>Tell me a joke.</li>
            </ul>
        `;

    }


    /* =========================================================
       GENERATE ANSWER
    ========================================================= */

    function generateAnswer(question) {

        if (isJokeRequest(question)) {
            return tellJoke();
        }


        if (isFunFactRequest(question)) {
            return tellFunFact();
        }


        if (isMotivationRequest(question)) {
            return tellMotivation();
        }


        if (isFinancialStatementRequest(question)) {
            return generateFinancialStatement(question);
        }


        if (isEssayRequest(question)) {
            return generateEssayAnswer(question);
        }


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
                    "list Accounting topics" - or
                    "tell me a joke" if you need a break.
                </p>
            `;

        }


        if (!subject) {

            return generalAnswer(question);

        }


        const wantsExamples =
            isExampleRequest(question);


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


        if (wantsExamples) {
            return formatExamplesOnly(best);
        }


        const detailed =
            isAllInformationRequest(question);


        let answerHtml = formatKnowledge(
            best,
            detailed
        );


        if (Math.random() < 0.2) {

            answerHtml += `
                <p>
                    <em>${escapeHtml(pickRandom(encouragements))}</em>
                </p>
            `;

        }


        return answerHtml;

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
                <span>${escapeHtml(pickRandom(thinkingPhrases))}</span>
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
                    Economics or Mathematics - or just
                    say "tell me a joke" to break the ice.
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
