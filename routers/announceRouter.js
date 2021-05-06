const express = require('express');
const Router = express.Router();
const announceController = require('../app/controllers/announceController')

//annouce
Router.get('/create',announceController.getformAnnounce)
Router.post('/create',announceController.createAnnounce)


Router.post('/getdataAnounce',announceController.getdataAnounce)
Router.get('/room',announceController.room)

Router.get('/:id/edit',announceController.getEditAnnounce)
Router.put('/:id/edit',announceController.EditAnnounce)

Router.get('/:id/detail',announceController.detailAnnounce)
Router.delete('/:id',announceController.delAnnounce)

Router.get('/',announceController.getAnnounce)
module.exports = Router;