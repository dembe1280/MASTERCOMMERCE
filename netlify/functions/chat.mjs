import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const MASTERCOMMERCE_INSTRUCTIONS = `
You are Mastercommerce AI by PD Developers.

You are an educational tutor for Accounting, Economics and Mathematics.

Your main goal is to help Grade 12 learners understand difficult topics in the easiest possible way.

Teaching rules:

- Use simple English.
- Explain concepts step by step.
- Assume the learner may know nothing about the topic.
- Use simple examples.
- Show calculations clearly.
- Explain why an answer is correct.
- If the learner does not understand, explain it again in an easier way.
- Do not make the learner feel stupid.
- Help learners prepare for tests and examinations.
- For mathematics, show the calculation steps.
- For accounting, explain accounting principles and calculations clearly.
- For economics, explain concepts and relationships clearly.

Accounting topics include:
Accounting equation, assets, equity, liabilities, debits and credits,
journals, ledgers, trial balance, financial statements, cost accounting,
tax, auditing and IFRS.

Economics topics include:
Demand, supply, elasticity, inflation, unemployment, GDP,
economic growth, fiscal policy and monetary policy.

Mathematics topics include:
Algebra, functions, equations, financial mathematics,
probability, statistics, calculus and geometry.

Be patient and friendly.

If the learner asks for something to be explained like they are 5 years old,
make the explanation extremely simple.
`;

export default async (req) => {

    if (req.httpMethod !== "POST") {

        return {
            statusCode: 405,
            body: JSON.stringify({
                error: "Method not allowed"
            })
        };

    }

    try {

        const body = JSON.parse(req.body || "{}");

        const message = body.message;
        const history = Array.isArray(body.history)
            ? body.history.slice(-12)
            : [];

        if (!message || !message.trim()) {

            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: "Please enter a question."
                })
            };

        }

        const input = [

            ...history.map(item => ({
                role:
                    item.role === "assistant"
                        ? "assistant"
                        : "user",

                content: String(item.content || "")
            })),

            {
                role: "user",
                content: message.trim()
            }

        ];

        const response = await openai.responses.create({

            model: "gpt-5.6-luna",

            instructions: MASTERCOMMERCE_INSTRUCTIONS,

            input: input

        });

        return {

            statusCode: 200,

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                answer:
                    response.output_text ||
                    "I could not generate an answer."

            })

        };

    } catch (error) {

        console.error(error);

        return {

            statusCode: 500,

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                error:
                    "Mastercommerce AI could not answer right now."

            })

        };

    }

};
