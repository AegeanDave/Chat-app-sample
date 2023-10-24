var express = require("express");
var router = express.Router();
const OpenAI = require("openai");

const openai = new OpenAI();

router.post("/completion", async (req, res, next) => {
  const { input, role } = req.body;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: input || "",
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.6,
  });
  if (!response.data) {
    res.status(403);
    return;
  }
  res.json(response.data);
});

router.post("/chat", async (req, res, next) => {
  const { input, role } = req.body;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: input,
    });
    res.json(response.data);
  } catch (error) {
    if (error.messages) {
      res.status(429).send(error.messages);
      return;
    }
    res.status(403).send(error.messages);
  }
});

module.exports = router;
