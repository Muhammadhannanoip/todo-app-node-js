const express = require('express');
const Joi = require('joi');
const todoSchema = require('../schemas/TodoSchemas');


const middleware = (todoSchema, property) => { 
    return (req, res, next) => { 
    const { error } = todoSchema.validate(req.body); 
    const valid = error == null; 
    
    if (valid) { 
      next(); 
    } else { 
      const { details } = error; 
      const message = details.map(i => i.message).join(',');
     res.status(422).json({ success: false, message: 'Invalid Request.', technicalMessage: message }) } 
    } 
  } 
  module.exports = middleware;
