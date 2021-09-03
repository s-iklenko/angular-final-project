const Joi = require("joi");

const registrationValidator = async (req, res, next) => {
  const schema = Joi.object({
    username: Joi
        .string(),
    email: Joi
        .string()
        .email()
        .required(),
    password: Joi
        .string()
        .min(6)
        .max(20)
        .required(),
  });

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  registrationValidator,
};
