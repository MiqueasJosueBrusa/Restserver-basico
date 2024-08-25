
const {Router} = require('express');
const { 
    usuarioGet, 
    usuarioDelete, 
    usuarioPost, 
    usuarioPatch, 
    usuarioPut } = require('../controllers/user.controller');

const router = Router();


router.get('/', usuarioGet);
  
router.put('/:id', usuarioPut);
  
router.post('/',  usuarioPost);

router.delete('/', usuarioDelete);

router.patch('/',  usuarioPatch); 


module.exports = router;