import Joi from "joi";

export const signupSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
    age: Joi.number().positive().required()
})

export const signinSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required()
})