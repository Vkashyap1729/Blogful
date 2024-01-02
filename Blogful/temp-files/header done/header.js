// Dummy JSON data
let jsonData = [];

async function fetchData() {
    try {
        const response = await fetch('Assets/data.json');
        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        jsonData = await response.json();
        console.log('Fetched JSON data:', jsonData);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchData();

// Event listener for input changes
const searchInput = document.getElementById('searchInput');
const suggestionContainer = document.getElementById('suggestionContainer');

searchInput.addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();

    // Display suggestions if search value is not empty, otherwise hide suggestions
    if (searchValue.trim() !== '') {
        const suggestions = getMatchingSuggestions(searchValue);
        displaySuggestions(suggestions);
        suggestionContainer.style.display = 'block';
    } else {
        suggestionContainer.style.display = 'none';
    }
});

// Handle focusing on search input
searchInput.addEventListener('focus', function () {
    const searchValue = this.value.toLowerCase();

    // Display suggestions if search value is not empty, otherwise hide suggestions
    if (searchValue.trim() !== '') {
        const suggestions = getMatchingSuggestions(searchValue);
        displaySuggestions(suggestions);
        suggestionContainer.style.display = 'block';
    }
});

// Function to filter suggestions based on search value
function getMatchingSuggestions(searchValue) {
    return jsonData.filter(entry => {
        // Check if the searchValue exists in any key of the entry
        for (const key in entry) {
            if (String(entry[key]).toLowerCase().includes(searchValue)) {
                return true;
            }
        }
        return false;
    });
}

// Function to display suggestions in the list
function displaySuggestions(suggestions) {
    const suggestionList = document.getElementById('suggestionList');

    // Clear previous suggestions
    suggestionList.innerHTML = '';

    // Display new suggestions
    suggestions.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = item.title;
        suggestionList.appendChild(listItem);
    });
}

// Event listener to handle suggestion selection
suggestionContainer.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        const selectedValue = event.target.textContent;
        // Perform action with the selected value, e.g., navigate to a page or perform a search
        console.log("Selected Value:", selectedValue);
        // Clear the search input and hide suggestions
        searchInput.value = '';
        suggestionContainer.style.display = 'none';
    }
});