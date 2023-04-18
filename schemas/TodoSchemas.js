const express = require('express');
const Joi = require('joi');


const todoSchema = Joi.object().keys({
    todoValue: Joi.string().required()
})

module.exports = todoSchema;
