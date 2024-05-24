//try-catch block for mongodb connection

const mongoose = require("mongoose");
//mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data & provides schema validation

const connectToMongoDB = async () => {  
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
};

module.exports = connectToMongoDB;

