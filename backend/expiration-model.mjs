// Models for the expiration Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Please try again. You were not able to connect to the server.' });
    } else  {
        console.log('Good job, you were able to connect to the server, i.e., to the MongoDB Expiration collection.');
    }
});

// SCHEMA: Define the collection's schema.
const expirationSchema = mongoose.Schema({
	itemName:    { type: String, required: true },
	quantity:     { type: Number, required: true,
        min : [0, 'You have to enter at least 0 items.'] 

    },
	date: { type: Date, required: true, min: '01/01/2000', default: Date.now }
});

// Compile the model from the schema 
// by defining the collection name "expirations".
const expirations = mongoose.model('expiration', expirationSchema);


// CREATE model *****************************************
const createExpiration = async (itemName, quantity, date) => {
    const expiration = new expirations({ 
        itemName: itemName, 
        quantity: quantity, 
        date: date 
    });
    return expiration.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveExpirations = async () => {
    const query = expirations.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveExpirationsByID = async (_id) => {
    const query = expirations.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteExpirationsById = async (_id) => {
    const result = await expirations.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateExpirations = async (_id, itemName, quantity, date) => {
    const result = await expirations.replaceOne({_id: _id }, {
        itemName: itemName,
        quantity: quantity,
        date: date
    });
    return { 
        _id: _id, 
        itemName: itemName,
        quantity: quantity,
        date: date 
    }
}

// EXPORT the variables for use in the controller file.
export { createExpiration, retrieveExpirations, retrieveExpirationsByID, updateExpirations, deleteExpirationsById }