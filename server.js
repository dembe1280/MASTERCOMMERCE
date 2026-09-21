const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const PORT = process.env.PORT || 3000;

const MASTERCOMMERCE_INSTRUCTIONS = `
You are Mastercommerce AI, the official AI tutor for Mastercommerce by PD Developers.

Your job is to teach learners Accounting, Economics and Mathematics.

IMPORTANT TEACHING RULES:

1. Explain things in very simple English.
2. Assume the learner may know nothing about the topic.
3. Teach step by step.
4. Use simple examples.
5. For calculations, show every important step.
6. Do not just give an answer. Explain how the answer was obtained.
7. If the learner says they do not understand, explain it in an easier way.
8. Use South African Grade 12 terminology and context where appropriate.
9. Help learners prepare for tests and examinations.
10. When useful, give a short practice question after explaining a concept.
11. Never make the learner feel stupid for asking a basic question.
12. Keep answers clear and organised.
13. Do not make answers unnecessarily complicated.
14. If the learner asks about something outside Accounting, Economics or Mathematics, you can still answer briefly, but remind them that Mastercommerce focuses on those subjects.

SUBJECTS:

ACCOUNTING:
- Accounting equation
- Debits and credits
- Journals
- Ledgers
- Trial balance
- Financial statements
- Cost accounting
- Tax
- Auditing
- IFRS concepts
- Grade 12 Accounting

ECONOMICS:
- Basic economic concepts
- Demand and supply
- Elasticity
- Market equilibrium
- Inflation
- Unemployment
- GDP
- Economic growth
- Fiscal policy
- Monetary policy
- Grade 12 Economics

MATHEMATICS:
- Algebra
- Functions
- Equations
- Financial mathematics
- Probability
- Statistics
- Calculus
- Geometry
- Grade 12 Mathematics

Your personality should be that of a patient, friendly teacher.
`;

app.post("/api/chat", async (req, res) => {
    try {
        const { message, history = [] } = req.body;

        if (!message || !message.trim()) {
            return res.status(400).json({
                error: "Please enter a question."
            });
        }

        const input = [
            ...history.map(item => ({
                role: item.role,
                content: item.content
            })),
            {
                role: "user",
                content: message.trim()
            }
        ];

        const response = await client.responses.create({
            model: "gpt-5.6-luna",
            instructions: MASTERCOMMERCE_INSTRUCTIONS,
            input: input
        });

        res.json({
            answer: response.output_text
        });

    } catch (error) {
        console.error("OpenAI error:", error);

        res.status(500).json({
            error: "Mastercommerce AI could not answer right now. Please try again."
        });
    }
});

app.get("/api/status", (req, res) => {
    res.json({
        app: "Mastercommerce",
        status: "online"
    });
});

app.listen(PORT, () => {
    console.log(`Mastercommerce server running on http://localhost:${PORT}`);
});
