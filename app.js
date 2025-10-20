// Change this to your GitHub username
const username = 'YOUR_GITHUB_USERNAME';
const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&direction=desc`;

const container = document.getElementById('repos-container');
const loadingMessage = document.getElementById('loading-message');

// Async function to fetch and display repos
async function fetchRepos() {
    try {
        // Fetch data from the GitHub API
        const response = await fetch(apiUrl);
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const repos = await response.json();

        // Clear the "Loading..." message
        loadingMessage.style.display = 'none';

        // Loop through each repository
        repos.forEach(repo => {
            // Create a "card" element for the repo
            const repoCard = document.createElement('div');
            repoCard.classList.add('repo-card');

            // Create the HTML content for the card
            repoCard.innerHTML = `
                <h3>
                    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
                        ${repo.name}
                    </a>
                </h3>
                <p>${repo.description || 'No description provided.'}</p>
                <div class="repo-stats">
                    <span>${repo.language || 'N/A'}</span>
                    <span>⭐ ${repo.stargazers_count}</span>
                    <span> forks: ${repo.forks_count}</span>
                </div>
            `;
            
            // Add the new card to the container
            container.appendChild(repoCard);
        });

    } catch (error) {
        // Handle any errors
        loadingMessage.textContent = `Failed to load projects: ${error.message}`;
        console.error('Error fetching repos:', error);
    }
}

// Call the function to run it
fetchRepos();