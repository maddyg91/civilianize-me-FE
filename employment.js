
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
    await delay(1500);
    resourcesCount = employmentResourceArray[0].data.length;

    for(var i = 0; i < resourcesCount; i++) {
        //make the resource into an object, then pass it into a function that does the tags
        var resource = employmentResourceArray[0].data[i];
        createResourceCard(resource, i);
    }
}

function createResourceCard(resource, i) {
    link = document.createElement('a');
    link.className = "employment-resource__link";
    link.href = resource.attributes.url;
    link.target = '_blank'
    $('.employment-resources-grid').append(link);

    card = document.createElement('div');
    card.className = 'employment-resource__card';
    $(link).append(card)

    logo = document.createElement('img');
    logo.src = resource.attributes.logo;
    logo.className = 'employment-resource__logo';
    $(card).append(logo)

    newName = document.createElement('div');
    newName.className = 'employment-resource__name';
    $(card).append(newName)

    description = document.createElement('div');
    description.className = 'employment-resource__description'
    $(card).append(description)

    $(newName).text(resource.attributes.name);
    $(description).text(resource.attributes.description);
}