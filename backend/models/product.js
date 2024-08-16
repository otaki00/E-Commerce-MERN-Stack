const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Please enter product name'],
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    price : {
        type: Number,
        required: [true, 'Please enter product price'],
        maxLength: [10, 'Product price cannot exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter product description'],
        maxLength: [2000, 'Product description cannot exceed 2000 characters']
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: String,
            url: String
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select category for this product'],
        enum: {
            values: [
                'Electronics',
                'Accessories',
                'Food',
                "Books",
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message: 'Please select correct category for product'
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter product seller']
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        maxLength: [5, 'Product stock cannot exceed 5 characters'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            Comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    // there is another way for it
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // },
}, {timestamps: true})

module.exports = mongoose.model('Product', productSchema);