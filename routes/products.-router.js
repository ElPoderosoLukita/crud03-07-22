const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('get product');
})

router.get('/:id', (req, res) => {
    res.send('get product by id');
})

router.post('/', (req, res) => {
    res.send('post product');
})

router.put('/', (req, res) => {
    res.send('put product');
})

router.delete('/', (req, res) => {
    res.send('delete product');
})

module.exports = router;