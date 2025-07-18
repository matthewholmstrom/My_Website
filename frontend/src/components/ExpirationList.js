import React from 'react';
import Expiration from './Expiration';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function ExpirationList({ expirations, onDelete, onEdit }) {
    return (
        <table id="expirations">
            <caption>Edit, Add, or delete items and their expiration dates</caption>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {expirations.map((expiration, i) => 
                    <Expiration 
                        expiration={expiration} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default ExpirationList;
