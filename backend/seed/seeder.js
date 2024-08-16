const { default: mongoose } = require("mongoose");


const productSeeder = async () => {
    try {
        
        await mongoose.connect("mongodb://localhost:27017/")

        const Product =  require("../models/product");

        Product.deleteMany();
        console.log("Products are deleted");

        const products = await require("./data");

        console.log(products);

        await Product.insertMany(products);
        console.log("Products are added");

        process.exit();

    } catch (error) {
        console.log(error.message);

        process.exit();
    }
}

productSeeder();