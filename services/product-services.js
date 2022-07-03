const db = require('../db/index');
class ProductService{

    get(callback){
        const query = 'SELECT * FROM productos'
        db.query(query, (err, results) => {
            if (err) throw err;

            callback(results);
        });
    }

    getByID(id, callback){
        const querySelect = 'SELECT * FROM productos WHERE id=?'
        const queryFormat = db.format(querySelect, [id]);

        db.query(queryFormat, (err, result) => {    
            if (err) throw err
            callback(result);
        })
    }

    post(body){
        const nombre = body.nombre;
        const precio = body.precio;
        const vendedor = body.vendedor;

        const queryInsert = 'INSERT INTO productos(nombre, precio, vendedor) VALUES (?, ?, ?)'
        const queryFormat = db.format(queryInsert, [nombre, precio, vendedor]);

        db.query(queryFormat, (err, result) => {
            if (err) throw err
        });
    }

    put(body){
        const id = body.id;
        const nombre = body.nombre;
        const precio = body.precio;
        const vendedor = body.vendedor;

        if (id && nombre && precio && vendedor){
            const queryUpdate = 'UPDATE productos SET nombre=?, precio=?, vendedor=? WHERE id=?';
            const queryFormat = db.format(queryUpdate, [nombre, precio, vendedor, id]);

            db.query(queryFormat, (err) => {
                if(err) throw err;
            });
        } else {
            throw new Error('Verifica que has introducido bien los datos en el cuerpo de la petición.');
        }
    }

    delete(body){
        const id = body.id;

        if(id){  
            const queryDelete = 'DELETE FROM productos WHERE id = ?';
            const queryFormat = db.format(queryDelete, [id]);

            db.query(queryFormat, (err) => {
                if (err) throw err;
            });
        } else {
            throw new Error('Verifica que has introducido bien los datos en el cuerpo de la petición.');
        }
    }

    patchNombre(body){
        const id = body.id;
        const nombre = body.nombre;

        if (id && nombre){
            const queryUpdate = 'UPDATE productos SET nombre=? WHERE id=?';
            const queryFormat = db.format(queryUpdate, [nombre, id]);

            db.query(queryFormat, (err) => {
                if(err) throw err;
            });
        } else {
            throw new Error('Verifica que has introducido bien los datos en el cuerpo de la petición.');
        }
    }

    patchPrecio(body){
        const id = body.id;
        const precio = body.precio;

        if (id && precio){
            const queryUpdate = 'UPDATE productos SET precio=? WHERE id=?';
            const queryFormat = db.format(queryUpdate, [precio, id]);

            db.query(queryFormat, (err) => {
                if(err) throw err;
            });
        } else {
            throw new Error('Verifica que has introducido bien los datos en el cuerpo de la petición.');
        }
    }

    patchVendedor(body){
        const id = body.id;
        const vendedor = body.vendedor;

        if (id && vendedor){
            const queryUpdate = 'UPDATE productos SET vendedor=? WHERE id=?';
            const queryFormat = db.format(queryUpdate, [vendedor, id]);

            db.query(queryFormat, (err) => {
                if(err) throw err;
            });
        } else {
            throw new Error('Verifica que has introducido bien los datos en el cuerpo de la petición.');
        }
    }
}

module.exports = ProductService;