// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Nav from './components/Nav';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 


import HomePage from './pages/HomePage';

import ExpirationsPage from './pages/ExpirationsPage';
 
import TopicsPage from './pages/TopicsPage';

import EditPage from './pages/EditPage'; 

import CreatePage from './pages/CreatePage';


import GalleryPage from './pages/GalleryPage';











// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:


// If your schema requires SHORT data input, then use the TABLE design.
import EditExpirationPageTable from './pages/EditExpirationPageTable';
import AddExpirationPageTable from './pages/AddExpirationPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [expiration, setExpirationToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            
            <h1>Matt Holmstrom <img src="./android-chrome-192x192.png" alt="Matthew Holmstrom's web page." /></h1>
            
            <p> This website contains a homepage which states my career goals and information about the
               technologies used to build this site. The website contains an Expirations page, which allows users to  
             keep a log of perishable item names, the quantity of items, and the expiration date for the items. The
             Topics page contains information about some of the major concepts that I learned about in CS 290. The Topics
             page also contains information about HTML page layout tags. The gallery page displays photos of some of my
             past Computer Science projects, my hobbies, and places I've traveled to.</p>
          </header>

          <Nav />

          <main>
            <section>
              <article>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    
                    <Route path="/" element={< HomePage />} />

                    <Route path="/TopicsPage" element={<TopicsPage />} />

                    <Route path="/GalleryPage" element={<GalleryPage />} />
                    
                    
                    <Route path="/ExpirationsPage" element={<ExpirationsPage setExpiration={setExpirationToEdit}/>} />
                 
                    {/* Use these if your schema requires LONG data input: */}
                    <Route path="/create" element={<AddExpirationPageTable />} /> 
                    <Route path="/update" element={<EditExpirationPageTable expirationToEdit={expiration} />} />

                  


                     <Route path="./pages/EditPage" element={<EditPage params />} />

                     <Route path="./pages/CreatePage" element={<CreatePage />} />

                    

                     
                </Routes>
                </article>
              </section>
          </main>

          <footer>
          <p>&copy; 2024 Matt Holmstrom</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;