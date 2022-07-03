const express = require('express');
const ProductServices = require('../services/product-services');

const router = express.Router();
const productServices = new ProductServices();

router.use(express.json());
router.use(express.urlencoded({extended: false}));

router.get('/', (req, res) => {
    try{
    productServices.get((results) => {
        res.status(200).json(results);
    })
    } catch (err){
        res.json({
            error: true,
            message: error.message
        });
    }
});


router.get('/:id', (req, res) => {
    const id = req.params.id;
    try{
        productServices.getByID(id, (result) => {
            res.status(200).json(result);
        })
    } catch (err) {
        res.json({
            error: true,
            message: error.message
        });
    }
});


router.post('/', (req, res) => {
    const body = req.body;
    try{
        productServices.post(body)
        res.status(201).json({
            "status":201,
            "message":"El producto ha sido creado correctamente!"
        });
    } catch (err){
        res.json({
            error: true,
            message: err.message
        });
    }
});

router.put('/', (req, res) => {
    const body = req.body;
    try{
        productServices.put(body);
        res.status(200).json({
            "status":200,
            "message":"El producto ha sido actualizado correctamente!"
        });
    } catch (err){
        res.json({
            error: true,
            message: err.message
        });
    }
});

router.delete('/', (req, res) => {
    const body = req.body;

    try{
        productServices.delete(body);
        res.status(200).json({
            "status":200,
            "message":"El producto ha sido eliminado correctamente!"
        });
    } catch (err){
        res.json({
            error: true,
            message: err.message
        });
    }
});

router.patch('/nombre', (req, res) => {
    const body = req.body;

    try{
        productServices.patchNombre(body);
        res.status(200).json({
            "status":200,
            "message":"El nombre del producto ha sido actualizado correctamente!"
        });
    } catch (err){
        res.json({
            error: true,
            message: err.message
        });
    }
});

router.patch('/precio', (req, res) => {
    const body = req.body;

    try{
        productServices.patchPrecio(body);
        res.status(200).json({
            "status":200,
            "message":"El precio del producto ha sido actualizado correctamente!"
        });
    } catch (err){
        res.json({
            error: true,
            message: err.message
        });
    }
})

router.patch('/vendedor', (req, res) => {
    const body = req.body;

    try{
        productServices.patchVendedor(body);
        res.status(200).json({
            "status":200,
            "message":"El vendedor del producto ha sido actualizado correctamente!"
        });
    } catch (err){
        res.json({
            error: true,
            message: err.message
        });
    }
})

module.exports = router;