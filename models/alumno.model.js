const mongoose = require('mongoose');

//Construyendo el esquema
const productSchema = new mongoose.Schema({
    nc: {
        type: String, 
        required: true
    },
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

//Modelo
const productModel = mongoose.model('Product', productSchema, 'products');

module.exports = productModel;
