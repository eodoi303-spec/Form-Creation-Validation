// fetch-data.js

// Define async function to fetch and display user data
async function fetchUserData() {
    // API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select container to display data
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data asynchronously
        const response = await fetch(apiUrl);

        // Convert response to JSON
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element
        const userList = document.createElement('ul');

        // Loop through users and create <li> for each
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle any errors during fetch
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run fetchUserData when DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
