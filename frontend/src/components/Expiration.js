import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.  <HiMiniTrash />, <HiArrowPathRoundedSquare />

import { MdDeleteForever, MdEdit } from 'react-icons/md';

import { HiMiniTrash } from "react-icons/hi2";

import { HiArrowPathRoundedSquare } from "react-icons/hi2";








function Expiration({ expiration, onEdit, onDelete }) {
    return (
        <tr>
            <td>{expiration.itemName}</td>
            <td>{expiration.quantity}</td>
            <td>{expiration.date.slice(0,10)}</td>

            {/* Update these icons to something that matches your style. */}
            <td>< HiMiniTrash onClick={() => onDelete(expiration._id)} /></td>
            <td><HiArrowPathRoundedSquare onClick={() => onEdit(expiration)} /></td>
        </tr>
    );
}

export default Expiration;