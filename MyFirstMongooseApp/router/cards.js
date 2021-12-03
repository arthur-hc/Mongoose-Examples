const express = require('express');
const CardsController = require('../controller/Cards');
const router = express.Router();

router.post('/', CardsController.create);
router.get('/', CardsController.getAll);
router.get('/:id', CardsController.getById);
router.delete('/:id', CardsController.deleteById);
router.put('/:id', CardsController.updateById);

module.exports = router;