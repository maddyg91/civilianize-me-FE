
const delay = ms => new Promise(res => setTimeout(res, ms));
const employmentResourcesURL = 'https://powerful-reef-36769.herokuapp.com/api/v1/resources?category=Employment';
var employmentResourceArray = [];


$(document).ready(function() {
    populateEmploymentResources();
});

function populateEmploymentResources() {
    fetch(employmentResourcesURL)
    .then(response => response.json())
    .then(response => employmentResourceArray.unshift(response));
    
    displayEmploymentResources();
}

async function displayEmploymentResources() {
    await delay(500);
    resourcesCount = employmentResourceArray[0].data.length;

    for(var i = 0; i < resourcesCount; i++) {
        // //create a variable for each resource
        var resource = employmentResourceArray[0].data[i];
        // console.log(resource.attributes.name);
        var newDiv = document.createElement('div');
        newDiv.id = `resource${i}`
        newDiv.className = 'employment-resource';
        $('#resource-list').append(newDiv);
        $(newDiv).text(resource.attributes.name)
    }
}

//testing?