const express = require('express')
const router = express.Router()
const knex = require('../db')
router.get('/', (req, res, next) => {
    res.render('index')
})
router.get('/teste', (req, res, next) => {
    knex('postagem').then(dados => {
        res.send(dados)
    }, next)
})
router.get('/login', (req, res, next) => {
    res.render('login');
})
router.post('/Cadastrar', (req, res, next) => {
    knex('usuario').insert(req.body).then((dados) => {
        res.send(dados)
    }, next)
})

module.exports = router;