export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }

    try {
        const { question, instructions } = req.body || {};

        if (!question) {
            return res.status(400).json({
                error: "No question provided"
            });
        }

        if (!process.env.OPENAI_API_KEY) {
            return res.status(500).json({
                error: "OPENAI_API_KEY is not configured on Vercel"
            });
        }

        const response = await fetch("https://api.openai.com/v1/responses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-5.6",
                instructions: instructions || "You are a helpful educational tutor.",
                input: question
            })
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({
                error: data?.error?.message || "OpenAI request failed"
            });
        }

        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({
            error: error.message || "Server error"
        });
    }
}
