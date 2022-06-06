// Global Variables
const profile = document.getElementById('profile');
const gitHubUserName = 'ypg00';
const gitHubProfileUrl = `https://api.github.com/users/${gitHubUserName}`;
const gitHubReposURL = `https://api.github.com/users/${gitHubUserName}/repos`;

let importObjects = ['avatar_url', 'name', 'location', 'html_url', 'login']

createGitHubProfilePage();

// Main function that uses API fetches to create both sections of the GitHub Profile Page
function createGitHubProfilePage() {
  
  // fetch(GET) request to get GitHub user data
  fetch(gitHubProfileUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(`API fetch was successful. Data: ${data}`);
      createProfile(data);
    });
  
  // fetch(Get) request to get GitHub repo data
  fetch(gitHubReposURL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (repos) {
      console.log(`API fetch was successful. Repos: ${repos}`);
      // createRepos(repos);
      haza(repos);
    });

}

// Creating the GitHub user profile section
function createProfile(data) {

  // Profile pic
  let pic = document.createElement('img');
  pic.id = 'avatar_url';
  pic.src = data.avatar_url;
  profile.appendChild(pic);

  // Name
  let name =  document.createElement('div');
  name.id = 'name';
  name.innerText = data.name;
  profile.appendChild(name);

  // Location
  let location = document.createElement('div');
  location.id = 'location';
  location.innerHTML = `<strong>Location:</strong> ${data.location}`;
  profile.appendChild(location);

  // GitHub URL
  let gitHubURL = document.createElement('div');
  gitHubURL.id = 'url';
  gitHubURL.innerHTML = `<strong>GitHub URL:</strong> <a href=${data.html_url}>${data.html_url.slice(8)}</a>`;
  profile.appendChild(gitHubURL);

  // GitHub Username
  let userName = document.createElement('div');
  userName.id = 'userName';
  userName.innerHTML = `<strong>GitHub Username:</strong> ${data.login}`;
  profile.appendChild(userName);

}

// Creating the Repos section
function createRepos(repos) {
  // GitHub Repos Element
  let reposSection = document.createElement('div');
  reposSection.id = 'repos';
  profile.appendChild(reposSection);

  // GitHub Repos header
  let reposHeader = document.createElement('h2');
  reposHeader.id = 'reposHeader';
  reposHeader.innerText = 'GitHub Repos';
  reposSection.appendChild(reposHeader);

  // GitHub Repo List
  for (let i = 0; i < repos.length; i++) {
    let repoElement = document.createElement('div');
    repoElement.id = repos[i].name;
    repoElement.innerHTML = `<a href=${repos[i].html_url}>${repos[i].name}</a>`;
    reposSection.appendChild(repoElement);
  }
}



// An alternative function to create Repo List Section
// function createRepos(repos) {

//   // GitHub Repos Element
//   let reposSection = document.createElement('div');
//   reposSection.id = 'repos';
//   profile.appendChild(reposSection);

//   // GitHub Repos header
//   let reposHeader = document.createElement('h2');
//   reposHeader.id = 'reposHeader';
//   reposHeader.innerText = 'GitHub Repos';
//   reposSection.appendChild(reposHeader);

//   // Repos list
//   let reposList = document.createElement('div');
//   reposList.id = 'reposList';
//   let repoString = '';
//   for (i = 0; i < repos.length; i++) {
//     repoString += `<a href=${repos[i].html_url}>${repos[i].name}</a><br>`;
//   }
//   reposList.innerHTML = repoString;
//   reposSection.appendChild(reposList);
//   console.log(`repoString = ${repoString}`);

// }