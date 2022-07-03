const db = require('../db/index');

class ProductService{

    get(){
        db.query('SELECT * FROM products')
    }
}