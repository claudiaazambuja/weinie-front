import joi from "joi";

const dogSchema = joi.object({
    name: joi.string().required(),
    photo_url: joi.string().uri().required(),
    characteristics: joi.string().max(300).required(),
    contact_info: joi.string().max(300).required(),
    active: joi.string().valid('ativo', 'inativo', 'de_ferias').required(),
    hourly_rate: joi.number().min(0).required()
});

export default dogSchema