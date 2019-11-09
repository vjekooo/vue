
const Joi = require('@hapi/joi');
import { Request } from 'express'

export const validate = (req: Request) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        message: Joi.string().min(30).required(),
    })

    return schema.validate(req.body)
}