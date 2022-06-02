const gitHubUrl = 'https://api.github.com/users/ypg00';

fetch(gitHubUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
})
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log('You have been successfully subscribed', data)
    });

let key = '';
const gProfile = document.getElementById('profile');

let gName =  document.createElement('div')
gName.id = 'name';
key = 'name';
gName.innerText = 'yayay'; // call the function with key in bracket notation
gProfile.appendChild(gName);


function createProfileElement (key) {
    return data[key];
}