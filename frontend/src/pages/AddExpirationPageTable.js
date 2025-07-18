import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddExpirationPageTable = () => {

    const [itemName, setItemName]       = useState('');
    const [quantity, setQuantity]         = useState('');
    const [date, setDate] = useState('');
    
    const redirect = useNavigate();

    const addExpiration = async () => {
        const newExpiration = { itemName, quantity, date };
        const response = await fetch('/expirations', {
            method: 'post',
            body: JSON.stringify(newExpiration),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Good job, you succesfully added an item and its expiration date.`);
        } else {
            alert(`Sorry, unfortunately an item and its expiration date could not be added. = ${response.status}`);
        }
        redirect("/ExpirationsPage");
    };


    return (
        <>
        <article>
            <h2>Add items and their expiration dates.</h2>
            <p>This page is for adding, deleting, and updating items and their expiration dates.</p>
            
            <table id="expirations">
                <caption>Which items are you adding?</caption>
                <thead>
                    <tr>
                        <th>Name of item</th>
                        <th>Quantity</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="itemName">Name of item</label>
                        <input
                            type="text"
                            placeholder=" Enter item name"
                            value={itemName}
                            onChange={e => setItemName(e.target.value)} 
                            id="itemName" />
                    </td>

                    <td><label for="quantity">Quantity of item</label>
                        <input
                            type="number"
                            value={quantity}
                            placeholder="Enter quantity of item"
                            onChange={e => setQuantity(e.target.value)} 
                            id="quantity" />
                    </td>

                    <td><label for="date">Date after 2000-01-01</label>
                        <input
                            type="date"
                            placeholder="Enter date of expiration"
                            value={date}
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>

                    <td>
                    <label for="submit">Submit</label>
                        <button
                            type="submit"
                            onClick={addExpiration}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddExpirationPageTable;