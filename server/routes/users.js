var express = require('express')
var router = express.Router()
const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

/* GET users listing. */
router.post('/completion', async (req, res, next) => {
    const { input, role } = req.body

    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: input || '',
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
    })
    if (!response.data) {
        res.status(403)
        return
    }
    res.json(response.data)
})

/* GET users listing. */
router.post('/chat', async (req, res, next) => {
    const { input, role } = req.body

    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: role || 'user', content: input || '' }],
    })
    if (!response.data) {
        res.status(403)
        return
    }
    res.json(response.data)
})

module.exports = router
