const router = require('express-promise-router')();
const registerController = require('../controllers/register.controller');

// Cria
router.post('/registers', registerController.createRegister);

// Exibe
router.get('/registers', registerController.listAllRegisters);

// Seleciona
router.get('/registers/:id', registerController.findRegisterById);

// Atualiza
router.put('/registers/:id', registerController.updateRegisterById);

// Remove
router.delete('/registers/:id', registerController.deleteRegisterById);

module.exports = router;