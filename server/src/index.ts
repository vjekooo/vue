
import express from 'express'
import cors from 'cors'
import { validate } from './validate'

interface Messages {
    email: string;
    message: string;
}

(async () => {
    const app = express()

    app.use(cors())
    app.use(express.json())

    app.get('/', (_req, res) => {
        res.send('aaaaaa')
    })

    let messages: Messages[] = []

    app.post('/api/contact', (req, res) => {

        const validation = validate(req)

        const { error } = validation

        if (error) {
            res.status(422).send(error.details[0].message)

            return
        }

        const { email, message } = req.body

        const newMessage = {
            email,
            message
        }

        messages = [...messages, newMessage]

        res.send({message: 'Your message has been sent'})
    })

    const port = process.env.PORT || 4000
    app.listen(port, () => {
        console.log(`Server started on port ${port}`)
    })
})()