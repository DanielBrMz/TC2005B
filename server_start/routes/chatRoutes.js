const express = require('express');
const router = express.Router();
//const chatController = require('../controllers/chatController');
const geminiController = require('../controllers/geminiController');

//router.post('/', chatController.getResponseChat); //we set as the root of the route the function getAllUsers from the userController because we want to get all the users from the database

router.post('/gemini', geminiController.getResponseChatGemini); //we set as the root of the route the function getAllUsers from the userController because we want to get all the users from the database

module.exports = router; 