// Controllers for the expirations Collection

import 'dotenv/config';
import express from 'express';
import * as expirations from './expiration-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/expirations', (req,res) => { 
    expirations.createExpiration(
        req.body.itemName, 
        req.body.quantity,  
        req.body.date
        )
        .then(expiration => {
            console.log(`"${expiration.itemName}" was added to the collection.`);
            res.status(201).json(expiration);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'status code 400: a client error caused the server to not be able to process the request' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/expirations', (req, res) => { 
    expirations.retrieveExpirations()
        .then(expiration => { 
            if (expiration !== null) {
                console.log(`All expirations were retrieved from the collection.`);
                res.json(expiration);
            } else {
                res.status(404).json({ Error: 'status code 404: the requested resource was not able to be found on the server' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'status code 400: a client error caused the server to not be able to process the request' });
        });
});


// RETRIEVE by ID controller
app.get('/expirations/:_id', (req, res) => {
    expirations.retrieveExpirationsByID(req.params._id)
    .then(expiration => { 
        if (expiration !== null) {
            console.log(`"${expiration.itemName}" was retrieved, based on its ID.`);
            res.json(expiration);
        } else {
            res.status(404).json({ Error: 'status code 404: the requested resource was not able to be found on the server' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'status code 400: a client error caused the server to not be able to process the request' });
    });

});


// UPDATE controller ************************************
app.put('/expirations/:_id', (req, res) => {
    expirations.updateExpirations(
        req.params._id, 
        req.body.itemName, 
        req.body.quantity, 
        req.body.date
    )
    .then(expiration => {
        console.log(`"${expiration.itemName}" was updated.`);
        res.json(expiration);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'status code 400: a client error caused the server to not be able to process the request' });
    }); 
});


// DELETE Controller ******************************
app.delete('/expirations/:_id', (req, res) => {
    expirations.deleteExpirationsById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} expiration was deleted.`);
                res.status(200).send({ Success: 'Good job, the request succeeded, and so the response body now has the necessary information.' });
            } else {
                res.status(404).json({ Error: 'status code 404: the requested resource was not able to be found on the server' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'An error has occured. This may be a client or server-side error. If it is a server-side error, we will try and resolve the issue as soon as we can.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});