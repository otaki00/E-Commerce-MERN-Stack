const Product = require("../models/product")

exports.getProducts = async (req, res) => {

    const products = await Product.find()

    res.status(200).json({
        message: "All products",
        count: products.length,
        products
    })
}

exports.newProducts = async (req, res) => {
    
    const product = await Product.create(req.body)

    res.status(201).json({
        success: true,
        product
    })
}


// get product by ID => /api/v1/product/:id
exports.getProductById = async (req, res) => {

    const product = await Product.findById(req?.params.id)

    if(!product) {
        return res.status(404).json({
            message: "Product not found"
        })
    }


    res.status(201).json({
        success: true,
        product
    })
}

exports.updateProductById = async (req, res) => {
    const product  = await Product.findById(req?.params.id)

    if(!product) {
        return res.status(404).json({
            messgae: "Product not found"
        })
    }

    const newProduct = await Product.findByIdAndUpdate(req?.params.id, req.body, {new: true})

    res.status(200).json({
        success: true,
        newProduct
    })
}


exports.deleteProductById = async (req, res) => {
    const product = await Product.findById(req?.params.id)

    if(!product) {
        return res.status(404).json({
            message: "Product not found"
        })
    }

    await Product.deleteOne()

    res.status(200).json({
        success: true,
        message: "Product is deleted"
    })
}