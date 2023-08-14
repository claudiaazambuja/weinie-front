import joi from "joi";

export const userSchema = joi.object({
    name: joi.string().required(),
    cpf: joi.string().required(),
    phone: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().required().valid(joi.ref("password"))
});

export const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});