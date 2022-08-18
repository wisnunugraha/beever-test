const Joi = require('joi');


exports.authLoginValidation = (req) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  const validation = schema.validate(req);
  if (!validation.error) return {
    status: true,
    validation: null
  };
  return {
    status: false,
    validation: validation.error.details
  };
}

exports.authRegisterValidation = (req) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });

  const validation = schema.validate(req);
  if (!validation.error) return {
    status: true,
    validation: null
  };
  return {
    status: false,
    validation: validation.error.details
  };
}


exports.listQuotesValidation = (req) => {
  const schema = Joi.object().keys({
    fillter : Joi.number().integer().allow('', null)
  });

  const validation = schema.validate(req);
  if (!validation.error) return {
    status: true,
    validation: null
  };
  return {
    status: false,
    validation: validation.error.details
  };
}

exports.createQuotesValidation = (req) => {
  const schema = Joi.object({
    quotes: Joi.string().required(),
    type: Joi.boolean().required(),
  });

  const validation = schema.validate(req);
  if (!validation.error) return {
    status: true,
    validation: null
  };
  return {
    status: false,
    validation: validation.error.details
  };
}

exports.updateQuotesValidation = (req) => {
  const schema = Joi.object({
    id: Joi.string().required(),
    quotes: Joi.string().required(),
    type: Joi.boolean().required(),
  });

  const validation = schema.validate(req);
  if (!validation.error) return {
    status: true,
    validation: null
  };
  return {
    status: false,
    validation: validation.error.details
  };
}

exports.deleteQuotesValidation = (req) => {
  const schema = Joi.object({
    id: Joi.string().required(),
  });

  const validation = schema.validate(req);
  if (!validation.error) return {
    status: true,
    validation: null
  };
  return {
    status: false,
    validation: validation.error.details
  };
}