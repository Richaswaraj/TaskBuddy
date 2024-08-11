const mongoose = require("mongoose");

require("dotenv").config();
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true,
        //useFindAndModify: false
    })
    .then(() => console.log("DB ka connection is Successfull"))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;