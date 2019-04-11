// const resourcesIndexURL = 'https://powerful-reef-36769.herokuapp.com/api/v1/resources';
// var allResources = getResources(resourcesIndexURL);

const delay = ms => new Promise(res => setTimeout(res, ms));
const crisisResourcesURL = 'https://powerful-reef-36769.herokuapp.com/api/v1/resources?category=Crisis';
var crisisResourcesArray = [];
var chatroom_url = "";

$(document).ready(function() {
    populateVclInfo();
    listenForChatroomThenOpen();
});

function populateVclInfo() {
    fetch(crisisResourcesURL)
    .then(response => response.json())
    .then(response => crisisResourcesArray.unshift(response));

    loadVCLInfo();
}

async function loadVCLInfo() {
    await delay(2000);

    var veteransCrisisLine = crisisResourcesArray[0].data[0];
    $('#vcl-phone').text(`Speak over the phone: ${veteransCrisisLine.attributes.phone}`);
    chatroom_url += veteransCrisisLine.attributes.url;
}

function listenForChatroomThenOpen () {
    document.querySelector('.btn--crisis-chat').onclick = function() {
        window.open(chatroom_url);
    }
}