const express = require('express');
const router = express.Router();
const { list, addProductOneImage, storeProductOneImage, editProductOneImage, updateProdutOneImage, deleteProductOneImage } = require('../controllers/productsController');

/* /products */
router
    .get('/', list)
    .get('/addOneImage', addProductOneImage)
    .post('/add', storeProductOneImage)
    .get('/edit/:id', editProductOneImage)
    .put('/update/:id', updateProdutOneImage)
    .delete('/delete/:id', deleteProductOneImage)

module.exports = router;
