const { default: mongoose } = require("mongoose")

const connectDataBase = () => {

    let DB_URL = " "

    process.env.NODE_ENV === "PRODUCTION" ? DB_URL = process.env.DB_URL : DB_URL = process.env.DB_LOCAL_URL

    mongoose.connect(DB_URL, {
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
    }).catch((err) => {
        console.log(`DB Connection Error: ${err.message}`);
    });
};

module.exports = connectDataBase;