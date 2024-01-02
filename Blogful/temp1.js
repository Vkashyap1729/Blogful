// Sample JSON data
const jsonData = [
    {
        "img_link": "https://placekitten.com/635/892",
        "tag_name": "idea",
        "author_data": {
            "full_name": "Kyle Mckenzie",
            "job_title": "Teacher, music",
            "read_time": "33 minutes",
            "date": "2023-05-23"
        },
        "title": "Lorem Ipsum 1",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, asperiores!lorem15"
    },
    {
        "img_link": "https://placekitten.com/635/892",
        "tag_name": "idea",
        "author_data": {
            "full_name": "Kyle Mckenzie",
            "job_title": "Teacher, music",
            "read_time": "33 minutes",
            "date": "2023-05-23"
        },
        "title": "Lorem Ipsum 1",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, asperiores!lorem15"
    },
    {
        "img_link": "https://placekitten.com/635/892",
        "tag_name": "idea",
        "author_data": {
            "full_name": "Kyle Mckenzie",
            "job_title": "Teacher, music",
            "read_time": "33 minutes",
            "date": "2023-05-23"
        },
        "title": "Lorem Ipsum 1",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, asperiores!lorem15"
    },
    {
        "img_link": "https://placekitten.com/635/892",
        "tag_name": "idea",
        "author_data": {
            "full_name": "Kyle Mckenzie",
            "job_title": "Teacher, music",
            "read_time": "33 minutes",
            "date": "2023-05-23"
        },
        "title": "Lorem Ipsum 1",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, asperiores!lorem15"
    },  
    {
        "img_link": "https://placekitten.com/635/892",
        "tag_name": "idea",
        "author_data": {
            "full_name": "Kyle Mckenzie",
            "job_title": "Teacher, music",
            "read_time": "33 minutes",
            "date": "2023-05-23"
        },
        "title": "Lorem Ipsum 1",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, asperiores!lorem15"
    },  
    {
        "img_link": "https://placekitten.com/635/892",
        "tag_name": "idea",
        "author_data": {
            "full_name": "Kyle Mckenzie",
            "job_title": "Teacher, music",
            "read_time": "33 minutes",
            "date": "2023-05-23"
        },
        "title": "Lorem Ipsum 1",
        "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, asperiores!lorem15"
    },  
    // Add more data objects as needed
];
console.log(jsonData[0])
// Function to create a card element
function createCard(data) {
    const card = document.createElement("div");
    card.classList.add("card", "col-sm-6");

    card.innerHTML = `
        <div class="sub-body-main-image">
            <img src="${data.img_link}" alt="" class="img-fluid">
        </div>
        <div class="card-body">
            <div>
                <a href="#" class="btn btn-primary">${data.tag_name}</a>
                <p class="main-text">${data.author_data.full_name} | ${data.author_data.job_title} | ${data.author_data.read_time} | ${data.author_data.date}</p>
            </div>
        </div>
        <div class="card-footer">
            <div>
                <h2>${data.title}</h2>
                <p>${data.content}</p>
            </div>
        </div>
    `;

    return card;
}

// Function to display data in cards
function displayData() {
    const container = document.getElementById("card-container");

    jsonData.forEach(data => {
        const card = createCard(data);
        container.appendChild(card);
    });
}

// Call the displayData function when the page loads
document.addEventListener("DOMContentLoaded", displayData);
