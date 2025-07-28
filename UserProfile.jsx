// Name: Mukwaya Lwere
// Class: CS 81 JavaScript
// Module 9 Assignment 9B: Custom Profile Component 
// Date: 07/27/2025

// main.jsx
// Using inline CSS for layout and design, this React component generates a straightforward, styled user profile card that shows a circular image, a name, and a brief bio.
// For ease of customization, the profile data is kept inside the component as variables.
// This version includes dark mode support and a hover effect on the card.

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Main() {
  // Store the user's name as a variable
  const name = "Mukwaya Lwere";

  // Store a short bio or description about the user
  const bio = "A creative front-end developer and React enthusiast.";

  // URL of the user profile image (placeholder from Unsplash)
  const imageUrl = "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80";

  // Add state for dark mode - default off
  const [darkMode, setDarkMode] = useState(false);

  // Set hover state for the card
  const [isHovered, setIsHovered] = useState(false);

  // Inline styles for the main container div to center content and add a card-like appearance,
  // adjusting appearance based on dark mode and hover state
  const containerStyle = {
    display: 'flex',              // use flexbox for layout
    flexDirection: 'column',      // stack children vertically
    alignItems: 'center',         // center children horizontally
    maxWidth: '300px',            // limit width of the card
    margin: '20px auto',          // vertical margin and center horizontally
    padding: '20px',              // spacing inside the card
    border: '2px solid',
    borderColor: darkMode ? '#555' : '#ddd',
    borderRadius: '10px',         // rounded corners for smooth edges
    boxShadow: isHovered
      ? `0 6px 12px ${darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`
      : '0 4px 6px rgba(0,0,0,0.1)',  // shadow intensifies on hover
    fontFamily: 'Arial, sans-serif',  // clean readable font
    backgroundColor: darkMode ? '#222' : '#fff',
    color: darkMode ? '#eee' : '#000',
    transition: 'box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease',
    cursor: 'pointer',
  };

  // Styles for the profile image to make it circular and nicely sized, with border that adapts to mode
  const imageStyle = {
    width: '150px',              // fixed width for image
    height: '150px',             // fixed height for image (square)
    borderRadius: '50%',         // makes the image perfectly circular
    objectFit: 'cover',          // image covers whole area without distortion
    marginBottom: '15px',        // space below the image
    border: darkMode ? '2px solid #eee' : '2px solid #333',
    transition: 'border-color 0.3s ease',
  };

  // Styles for the user's name heading
  const nameStyle = {
    fontSize: '1.5rem',          // large font size for name
    margin: '0 0 10px',          // bottom margin for spacing
    fontWeight: 'bold',          // bold text to stand out
  };

  // Styles for the bio paragraph text, color changes with dark mode
  const bioStyle = {
    fontSize: '1rem',            // normal font size for paragraph
    textAlign: 'center',         // center-align the bio text
    color: darkMode ? '#ccc' : '#555',
  };

  return (
    <>
      {/* Button to toggle dark mode */}
      <div style={{ textAlign: 'center', marginBottom: '15px' }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: '8px 16px',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: darkMode ? '#bb86fc' : '#6200ee',
            color: '#fff',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
          aria-pressed={darkMode}
          aria-label="Toggle dark mode"
        >
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>

      {/* Profile card container */}
      <div
        style={containerStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="User profile card"
      >
        {/* Profile image shown with alt text and defined imageStyle */}
        <img src={imageUrl} alt={`${name}'s profile`} style={imageStyle} />

        {/* User's name displayed in a heading with styling */}
        <h1 style={nameStyle}>{name}</h1>

        {/* User's bio displayed in a paragraph with styling */}
        <p style={bioStyle}>{bio}</p>
      </div>
    </>
  );
}

// Render the Main component into the DOM element with id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

export default Main;
