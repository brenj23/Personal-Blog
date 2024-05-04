// logic.js

// Check if there's a saved theme preference in localStorage
const currentTheme = localStorage.getItem('theme');

// If there's no saved theme preference, or if it's light, set the theme to light
if (!currentTheme || currentTheme === 'light') {
    document.body.classList.remove('dark-mode');
} else {
    // If the saved theme is dark, set the theme to dark
    document.body.classList.add('dark-mode');
}

// Function to toggle between light and dark mode
function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    
    // Toggle between light and dark mode classes on the body
    document.body.classList.toggle('dark-mode');
    
    // Save the current theme preference to localStorage
    localStorage.setItem('theme', currentTheme);
}

// Event listener for the theme toggle switch
document.getElementById('themeToggle').addEventListener('change', toggleTheme);


