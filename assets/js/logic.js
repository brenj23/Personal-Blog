// Check if there's a saved theme preference in localStorage
let currentTheme = localStorage.getItem('theme');

// Function to toggle between light and dark mode
function toggleTheme() {
    currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    
    // Toggle between light and dark mode classes on the body
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    
    // Save the current theme preference to localStorage
    localStorage.setItem('theme', currentTheme);
    
    // Show/hide sun and moon icons based on the current theme
    if (currentTheme === 'light') {
        hideSunIcon();
        showMoonIcon();
    } else {
        hideMoonIcon();
        showSunIcon();
    }
}

// Function to show the sun icon
function showSunIcon() {
    const sunIcon = document.querySelector('.sun-icon');
    sunIcon.style.display = 'block';
}

// Function to hide the sun icon
function hideSunIcon() {
    const sunIcon = document.querySelector('.sun-icon');
    sunIcon.style.display = 'none';
}

// Function to show the moon icon
function showMoonIcon() {
    const moonIcon = document.querySelector('.moon-icon');
    moonIcon.style.display = 'block';
}

// Function to hide the moon icon
function hideMoonIcon() {
    const moonIcon = document.querySelector('.moon-icon');
    moonIcon.style.display = 'none';
}

// Event listener for the theme toggle switch
document.getElementById('themeToggle').addEventListener('change', toggleTheme);

// Initial setup based on current theme
if (!currentTheme || currentTheme === 'light') {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    showSunIcon();
    hideMoonIcon();
} else {
    document.body.classList.add('dark-mode');
    showMoonIcon();
    hideSunIcon();
}
