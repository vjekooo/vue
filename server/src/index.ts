
import express from 'express'
import cors from 'cors'
import { validate } from './validate'

interface Messages {
    id: number;
    email: string;
    message: string;
}

(async () => {
    const app = express()

    app.use(cors())
    app.use(express.json())

    
    let messages: Messages[] = []
    
    app.get('/api/contacts', (_req, res) => {
        res.send(messages)
    })

    app.post('/api/contact', (req, res) => {

        const validation = validate(req)

        const { error } = validation

        if (error) {
            res.status(422).send({
                error: error.details[0].message
            })

            return
        }

        const { email, message } = req.body

        const newMessage = {
            id: Math.floor(Math.random() * 1000 - 1),
            email,
            message
        }

        messages = [...messages, newMessage]

        res.send({success: 'Your message has been sent'})
    })

    const port = process.env.PORT || 4000
    app.listen(port, () => {
        console.log(`Server started on port ${port}`)
    })
})()