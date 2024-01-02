let jsonData = [] 
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
fetchData()
console.log("my name is" ,jsonData)




