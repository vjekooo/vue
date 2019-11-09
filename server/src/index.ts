
import express from 'express'

(async () => {

    const app = express()
    app.use(express.json())

    app.get('/', (_req, res) => {
        res.send('aaaaaa')
    })

    app.post('/api/contact', (req, res) => {

        const { email, message } = req.body
        // Will validate properly a bit later
        if (!email && !message) {
            res.status(422).send('Error')

            return
        }
        
        res.send({message: 'Your message has been sent'})
    })

    const port = process.env.PORT || 4000
    app.listen(port, () => {
        console.log(`Server started on port ${port}`)
    })
})()