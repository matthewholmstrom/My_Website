import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Nav() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/">HomePage</Link>
        <Link to = "../ExpirationsPage">Expirations</Link>
     
        <Link to = "../TopicsPage">Topics</Link>
        <Link to = "../GalleryPage">Gallery</Link>


    </nav> 

    

  );
}

export default Nav; 
