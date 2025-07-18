import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ExpirationList from '../components/ExpirationList';
import { Link } from 'react-router-dom';

import { IoIosAddCircle } from "react-icons/io";
import { HiPlus } from "react-icons/hi2";


function ExpirationsPage({ setExpiration }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [expirations, setExpirations] = useState([]);

    // RETRIEVE the entire list of expirations
    const loadExpirations = async () => {
        const response = await fetch('/expirations');
        const expirations = await response.json();
        setExpirations(expirations);
    } 
    

    // UPDATE a single expiration
    const onEditExpiration = async expiration => {
        setExpiration(expiration);
        redirect("/update");
    }


    // DELETE a single expiration  
    const onDeleteExpiration = async _id => {
        const response = await fetch(`/expirations/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/expirations');
            const expirations = await getResponse.json();
            setExpirations(expirations);
        } else {
            console.error(`Sorry, unfortunately an item and its expiration date could not be deleted. = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the expirations
    useEffect(() => {
        loadExpirations(); 
    }, []);

    // DISPLAY the expirations
    return (
        <>
            <h2>List of items, quantities, and expiration dates</h2>
            <p>This page is a log of items, quantities, and expiration dates. The user
                can add, edit, or remove things from the log.
            </p>
            <Link to="/create"><IoIosAddCircle /> Add Item </Link>
            <ExpirationList 
                expirations={expirations} 
                onEdit={onEditExpiration} 
                onDelete={onDeleteExpiration} 
            />
        </>
    );
}

export default ExpirationsPage;