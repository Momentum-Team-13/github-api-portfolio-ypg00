// Global Variables
const gitHubUserName = 'ypg00';

const profile = document.getElementById('profile');
const gitHubProfileUrl = `https://api.github.com/users/${gitHubUserName}`;
const gitHubReposURL = `https://api.github.com/users/${gitHubUserName}/repos`;
let data;

console.log(`gitHubProfileUrl: ${gitHubProfileUrl}`);
console.log(`gitHubReposUrl: ${gitHubReposURL}`);

const importObjects = ['avatar_url', 'name', 'location', 'html_url', 'login'];
console.log(`importObjects: ${importObjects}`);

createGitHubProfilePage(gitHubUserName);

function createGitHubProfilePage(gitHubUserName) {
  
  // fetch(GET) request with GitHub's API
  fetch(gitHubProfileUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
  })
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log(`API fetch was successful. Data: ${data}`);
        createProfile(data);
      });
}
  // Creating HTML elements

function createProfile (data) {

  // Profile pic
  let pic = document.createElement('img');
  pic.id = `${importObjects[0]}`;
  pic.src = data[importObjects[0]];
  profile.appendChild(pic);

  // Creating HTML elements (<div>), variables, ids, and appendingChild for the majority of content
  // createDivs(importObjects.slice(1));
  console.log(`importObjects.slice(1): ${importObjects.slice(1)}`)
  console.log(`line 45: data: ${data[importObjects.slice(1)]}`);

  console.log(`data[importObjects[1]]: ${data[importObjects[1]])}`; 

  for (let d of data[`${importObjects.slice(1)}`]) {
    console.log(`d: ${d}`);
    d = document.createElement('div');
    // d.id = `${importObjects[d]}`;
    console.log(`id: ${d.id}`);
    profile.appendChild(importObjects[d]);
  }


}


// Supporting functions

// Creating a div element + id + append

// function createDivs(keys) {
//   console.log(`keys: ${keys}`);
//   for (let key of keys) {
//     let key = document.createElement('div');
//     key.id = data[importObjects.slice(1)];  
//     console.log(`key.id ${key.id}`)
//     console.log(`key: ${importObject}`);
//     profile.appendChild(key);
//   }
// } 

    

    
// // Profile Pic
// let pic = document.createElement('img');
// pic.id = 'pic';
// pic.src = d.avatar_url;
// profile.appendChild(pic);

// // Name
// let name =  document.createElement('div');
// name.id = 'name';
// name.innerText = d.name;
// profile.appendChild(name);

// // Location
// let gLocation = document.createElement('div');
// gLocation.id = 'location';
// gLocation.innerHTML = `<strong>Location:</strong> ${d.location}`;
// profile.appendChild(gLocation);

// // GitHub URL
// let gURL = document.createElement('div');
// gURL.id = 'url';
// gURL.innerHTML = `<strong>GitHub URL:</strong> <a href=${d.html_url}>${d.html_url.slice(8)}</a>`;
// profile.appendChild(gURL);

// // GitHub Username
// let gUserName = document.createElement('div');
// gUserName.id = 'userName';
// gUserName.innerHTML = `<strong>GitHub Username:</strong> ${d.login}`;
// profile.appendChild(gUserName);

  