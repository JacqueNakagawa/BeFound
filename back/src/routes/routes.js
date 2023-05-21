const connection = require('../database/connection')
const express = require('express')
const router = express.Router()

const AdmController = require('../controllers/AdmController')
const ChatController = require('../controllers/ChatController')
const DesaparecidoController = require('../controllers/DesaparecidoController')
const SumidoController = require('../controllers/SumidoController')
const UsuarioController = require('../controllers/UsuarioController')

router.post('/novoAdm',AdmController.novoAdm)
router.post('/loginAdm',AdmController.loginAdm)
router.get('/adm',AdmController.listarAdm)
router.get('/adm/:adm_id',AdmController.listarUmAdm)
router.put('/atualizar/adm/:adm_id',AdmController.atualizarAdm)
router.delete('/excluir/adm/:adm_id',AdmController.removerAdm)

router.post('/novoChat',ChatController.novoChat)
router.get('/chat',ChatController.listarChat) 
router.get('/chat/:chat_id',ChatController.listarUmChat)
router.put('/atualizar/chat/:chat_id',ChatController.atualizarChat)
router.delete('/excluir/chat/:chat_id',ChatController.removerChat)

router.post('/novoDesaparecido',DesaparecidoController.novoDesaparecido)
router.get('/desaparecido',DesaparecidoController.listarDesaparecido)
router.get('/desaparecido/:des_id',DesaparecidoController.listarUmDesaparecido)
router.put('/atualizar/desaparecido/:des_id',DesaparecidoController.atualizarDesaparecido)
router.delete('/excluir/desaparecido/:des_id',DesaparecidoController.removerDesaparecido)

router.post('/novoSumido',SumidoController.novoSumido)
router.get('/sumido',SumidoController.listarSumido)
router.get('/sumido/:id',SumidoController.listarUmSumido)
router.put('/atualizar/sumido/:id',SumidoController.atualizarSumido)
router.delete('/excluir/sumido/:id',SumidoController.removerSumido)

router.post('/novoUsuario',UsuarioController.novoUsuario)
router.post('loginUsuario',UsuarioController.loginUsuario)
router.get('/usuario',UsuarioController.listarUsuario)
router.get('/usuario/:user_id',UsuarioController.listarUmUsuario)
router.put('/atualizar/usuario/:user_id',UsuarioController.atualizarUsuario)
router.delete('/excluir/usuario/:user_id',UsuarioController.removerUsuario)

module.exports = router