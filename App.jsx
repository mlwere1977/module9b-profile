// App.jsx
// This is the primary app component that controls how our contact cards and profile are laid out overall.
// In addition to handling the dark mode toggle state, it applies basic styling, such as dynamic colors depending on the dark mode setting, and passes data as props to child components.

import React, { useState } from 'react';
import UserProfile from './UserProfile';
import ContactCard from './ContactCard';

function App() {
  // To determine whether dark mode is on or off, we first create a piece of state.
  // Dark mode is initially off (false).
  const [darkMode, setDarkMode] = useState(false);

  // We would like to show these sample user data values on our contact cards and profile.
   // It's simple to update or pass them to components as props when they're kept here.
  const userName = "Mukwaya Lwere";
  const userBio = "A creative front-end developer and React enthusiast.";
  const userImage = "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80";
  const userEmail = "mukwaya.lwere@example.com";
  const userPhone = "+1 (555) 123-4567";

 // Specify the app's primary container style.
//  Here, styles provide light/dark themes by dynamically changing according to the darkMode state.
  const appStyle = {
    minHeight: '100vh',                         // Make sure it fills the full viewport height
    backgroundColor: darkMode ? '#121212' : '#f9f9f9',  // Dark or light background color
    color: darkMode ? '#eee' : '#111',          // Text color changes for readability
    padding: '20px',                            // Some padding around the content
    transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition between themes
  };

  // The dark mode toggle button's style also varies in color based on the mode.
  const buttonStyle = {
    cursor: 'pointer',                          // Show pointer cursor to signal it is clickable
    padding: '10px 20px',                       // Comfortable padding for the button size
    margin: '10px auto',                        // Vertical margin and centered horizontally
    display: 'block',                           // Make the button fill horizontally but still centered
    borderRadius: '5px',                        // Rounded corners to look modern and soft
    border: 'none',                            // Remove default border for a clean button look
    backgroundColor: darkMode ? '#bb86fc' : '#6200ee',  // Purple hues depending on theme
    color: '#fff',                             // White text for contrast
    fontWeight: 'bold',                        // Bold font to stand out as a clickable element
  };

  return (
    // The main container applies our dynamic appStyle for background and text colors
    <div style={appStyle}>
      
      {/* 
        // The user can turn on and off dark mode with this button. 
        // It causes re-rendering and style changes by updating the darkMode state.
      */}
      <button
        onClick={() => setDarkMode(!darkMode)}    // Flip darkMode true/false on each click
        style={buttonStyle}                       // Apply dynamic button styles
        aria-pressed={darkMode}                   // Accessibility: indicate toggle state
        aria-label="Toggle dark mode"             // Accessibility: describes button's purpose
      >
        {/* Show text based on current dark mode state to guide users */}
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>

      {/* Render the user profile card, passing all relevant data and dark mode setting */}
      <UserProfile
        name={userName}
        bio={userBio}
        imageUrl={userImage}
        darkMode={darkMode}
      />

      {/* Render the contact card with email, phone, and dark mode styling */}
      <ContactCard
        email={userEmail}
        phone={userPhone}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
