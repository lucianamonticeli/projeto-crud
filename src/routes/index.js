const router = require('express').Router ()

const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')



// rotas
router.get('/', IndexController.index)
  

//registro
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

//lista
router.get('/list', CustomersController.list)


    //TUDO QUE ESTIVER DENTRO DESSA FUNÇÃO CHAMAMOS DE CONTROLLER QUE É RESPONSAVEL POR RECEBER OS DADOS, MANIPULAR, SALVAR NO BANCO DE DADOS E DEVOLVER UMA RESPOSTA 
    //TEM MUITA RESPONSABILIDADE, O IDEAL É Ñ FICAR JUNTO COM AS ROTAS, O IDEAL É FICAR EM UM ARQUIVO E PASTA SEPARADO
    //CRIA UMA PASTA NO SRC CHAMADA CONTROLLES E UM ARQUIVO CHAMADO CUSTOMERS.JS

//editar
router.get('/edit', CustomersController.formEdit)
router.post('/edit/:id', CustomersController.edit)

//remover
router.get('/remove/:id', CustomersController.remove)


    module.exports = router