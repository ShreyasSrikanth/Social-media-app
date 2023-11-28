const path = require('path');
const express = require('express');
const Router = express.Router();

const adminController = require('../controllers/adminController');

Router.post('/items',adminController.postItem);
Router.post('/items/updateComment',adminController.addComment);

Router.get('/itemDetails',adminController.getItem);

module.exports = Router;