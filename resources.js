const resourcesURL =
  "https://powerful-reef-36769.herokuapp.com/api/v1/resources";

$(document).ready(function() {
  populateResources();
});

function populateResources() {
  fetch(resourcesURL)
    .then(response => response.json())
    .then(response => displayResources(response));
}

function cleanupGrid(grid) {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function displayResources(response) {
  const resourcesCount = response.data.length;

  var grid = document.getElementById("resources-grid");
  cleanupGrid(grid);
  for (var i = 0; i < resourcesCount; i++) {
    //make the resource into an object, then pass it into a function that does the tags
    const resource = response.data[i];
    createResourceCard(grid, resource);
  }
}

function createResourceCard(grid, resource) {
  var link = document.createElement("a");
  link.className = "employment-resource__link";
  link.href = resource.attributes.url;

  var card = document.createElement("div");
  card.className = "employment-resource__card";
  link.appendChild(card);

  var logo = document.createElement("img");
  logo.src = resource.attributes.logo;
  logo.className = "employment-resource__logo";
  card.appendChild(logo);

  ["name", "url", "category", "phone", "description"].forEach(attr => {
    var el = document.createElement("div");
    el.className = `employment-resource__${attr}`;
    el.innerText = resource.attributes[attr];
    card.appendChild(el);
  });

  grid.appendChild(link);
}
