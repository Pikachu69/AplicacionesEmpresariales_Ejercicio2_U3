const status = require('http-status');
//Email
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
let _product;

const getAll = (req, res) => {
    _product.find({})
        .then(products => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Consulta exitosa",
                detail: products
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "Error",
                detail: error
            });
        });
};

const create = (req, res) => {
    const product = req.body;
    console.log(req);
    _product.create(product)
        .then(data => {
            console.log(data);
            res.status(200);
            res.json({
                code: 200,
                msg: "guardado",
                detail: data
            });
        })
        .catch(error => {
            console.log(error);
            res.status(400);
            res.json({
                code: 400,
                msg: "No se pudo insertar",
                detail: error
            });
        });
};

const deleteProduct = (req, res) => {
    const { id } = req.params;
    Product.remove({ _id: id })
        .then(data => {
            res.status(200);
            res.json({
                code: 200,
                msg: "Se elimino con exito",
                detail: data
            });
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "No se pudo eliminar",
                detail: error
            });
        });
};

const getById = (req, res) => {
    const id = req.params.id;
    Product.findOne({ _id: id })
        .then(product => {
            res.status(200);
            sgMail.setApiKey('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');
            const msg = {
            to: correos[i],
            from: 'kalicovarrubiasnu@ittepic.edu.mx',
            subject: 'Prueba',
            text: 'Hola bievenido'+_id,
            html: '<strong>Su pase a la jornada academica</strong>'+
            "<a rel='nofollow' href='http://www.qrcode-generator.de' border='0' style='cursor:default'><img src='https://chart.googleapis.com/chart?cht=qr&chl="+_id+"&chs=180x180&choe=UTF-8&chld=L|2' alt=''></a>"            
            };
        })
        .catch(error => {
            res.status(400);
            res.json({
                code: 400,
                msg: "error",
                detail: error
            });
        });
}

module.exports = (Product) => {
    _product = Product;
    return ({
        getAll, create, deleteProduct, getById
    });
}