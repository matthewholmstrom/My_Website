import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditExpirationPageTable = ({ expirationToEdit }) => {
 
    const [itemName, setItemName]       = useState(expirationToEdit.itemName);
    const [quantity, setQuantity]         = useState(expirationToEdit.quantity);
    const [date, setDate] = useState(expirationToEdit.date.slice(0,10));
    
    const redirect = useNavigate();

    const editExpiration = async () => {
        const response = await fetch(`/expirations/${expirationToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                itemName: itemName, 
                quantity: quantity, 
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Good job, you succesfully updated an item and its expiration date.`);
        } else {
            const errMessage = await response.json();
            alert(`Sorry, unfortunately an item and its expiration date could not be updated. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/ExpirationsPage");
    }

    return (
        <>
        <article>
            <h2>Edit an expiration date</h2>
            <p>This page is for adding, deleting, and updating items and their expiration dates.</p>
            <table id="expirations">
                <caption>Which items are you adding?</caption>
                <thead>
                    <tr>
                        <th>ItemName</th>
                        <th>Quantity</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="itemName">Expiration itemName</label>
                        <input
                            type="text"
                            placeholder="Enter item name"
                            value={itemName}
                            onChange={e => setItemName(e.target.value)} 
                            id="itemName" />
                    </td>

                    <td><label for="quantity">Quantity released</label>
                        <input
                            type="number"
                            value={quantity}
                            placeholder="Quantity of the item"
                            onChange={e => setQuantity(e.target.value)} 
                            id="quantity" />
                    </td>

                    <td><label for="date">Date</label>
                        <input
                            type="text"
                            placeholder=" Date of the expiration"
                            value={date}
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={editExpiration}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditExpirationPageTable;