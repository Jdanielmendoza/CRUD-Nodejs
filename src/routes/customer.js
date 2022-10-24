const express = require('express'); 

const router = express.Router();

const  usuarios  = require('../controllers/customerController'); 


router.get('/',usuarios.list); 
router.post('/add',usuarios.add); 
router.get('/delete/:id',usuarios.delete)
router.get('/update/:id',usuarios.editar)
router.post('/update/:id',usuarios.update)


module.exports = router; 