
import express from 'express'
import { validate } from './validate'

(async () => {

    const app = express()
    app.use(express.json())

    app.get('/', (_req, res) => {
        res.send('aaaaaa')
    })

    app.post('/api/contact', (req, res) => {

        const validation = validate(req)

        const { error } = validation

        if (error) {
            res.status(422).send(error.details[0].message)

            return
        }

        res.send({message: 'Your message has been sent'})
    })

    const port = process.env.PORT || 4000
    app.listen(port, () => {
        console.log(`Server started on port ${port}`)
    })
})()