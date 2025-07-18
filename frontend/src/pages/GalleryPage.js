import { React, useState, useEffect } from 'react';




import ImageGallery from 'react-image-gallery';





const images = [
    {
      original : 'images2/arrays-assignment-cs-271.jpg',
      thumbnail: 'images2/arrays-assignment-cs-271.jpg',
      description: `Project from CS271. The project asked to generate, display, sort, count, and work with arrays of random integers
      using assembly language. Photo taken in 2023 by Matt Holmstrom.`,
      originalHeight: '450px',
    }, 

    {
      original : 'images2/hash-map-cs-261-project.png',
      thumbnail: 'images2/hash-map-cs-261-project.png',
      description: `Project from CS261. The project asked to implement two different types of hash maps to handle collisions. Open addressing 
      addressing and separate chaining using singly-linked lists. Photo taken in 2023 by Matt Holmstrom.`,
      originalHeight: '450px',
    }, 


    
    {
      original : 'images2/chess-game-cs-161-project.png',
      thumbnail: 'images2/chess-game-cs-161-project.png',
      description: `Project from CS162. The project asked to implement a version of Chess using Python. The program allows two players
      to compete against each other. The winner is the first player to capture all the other player's pieces of any one type (all the 
      opponent's rooks or 1 queen, for example). Photo taken in 2023 by Matt Holmstrom.`,
      originalHeight: '450px',
    }, 

    {
        original : 'images2/books-stack.jpg',
        thumbnail: 'images2/books-stack.jpg',
        description: `Reading is one of my hobbies. This is a small stack of books that I have read or started reading. Photo taken in 2024 by 
        Matt Holmstrom`,
        originalHeight: '450px',
      }, 

      {
        original : 'images2/stationary-bikes.jpg',
        thumbnail: 'images2/stationary-bikes.jpg',
        description: `Exercising is also one of my hobbies. These are two stationary bikes that I own. Photo taken in 2024 by 
        Matt Holmstrom`,
        originalHeight: '450px',
      }, 

      {
        original : 'images2/matt-holmstrom-yosemite.jpg',
        thumbnail: 'images2/matt-holmstrom-yosemite.jpg',
        description: `This is a photo of me as a kid, hiking Half Dome in Yosemite, California. Photo taken in 2004 by Robert O'boyle.`,
        originalHeight: '450px',
      }, 

      {
        original : 'images2/family-tijuana.jpg',
        thumbnail: 'images2/family-tijuana.jpg',
        description: `One of the places that I have traveled to is Mexico. This is an image of my family in Mexico. Photo taken in 2023 by
        Alba Perea.`,
        originalHeight: '450px',
      }, 
    
    
      {
        original : 'images2/cs-271-debugging-assignment.jpg',
        thumbnail: 'images2/cs-271-debugging-assignment.jpg',
        description: `Debugging assignment from CS271. The project introduced the class to accessing and using the debugger in Visual Studio.
        Photo taken in 2023 by Matt Holmstrom.`,
        originalHeight: '450px',
      }, 

    
      {
        original : 'images2/elliptical-line-art.jpg',
        thumbnail: 'images2/elliptical-line-art.jpg',
        description: `This is line art of the elliptical machine that I use regularly. Photo taken in 2024 by Matt Holmstrom`,
        originalHeight: '450px',
      }, 

      
      {
        original : 'images2/line-art-math-class.jpg',
        thumbnail: 'images2/line-art-math-class.jpg',
        description: `This a line-art of one of the assignments from my math capstone class. Photo taken in 2023 by Matt Holmstrom`,
        originalHeight: '450px',
      }, 
    ]
        

function GalleryPage() {
    return (
       
       <>   

    <h2>Gallery</h2>
    <p>
        This page is a gallery of photos of some of my past Computer Science projects, hobbies, and places that I've traveled
        to. The photos are displayed as a slide show. Click the arrows on the side of the displayed photo, to the photo.
        Click the square outline at the bottom right of the photo, to display the photo using the full screen.
    </p>
    
    <article  >
        


    

    <ImageGallery items={images} />
    

            
 
        
        </article>
        
            
    

</>
);
}
export default GalleryPage;
