const gProfile = document.getElementById('profile');
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
      createProfileElement(data);
    });

function createProfileElement (d) {
    // Profile Pic
    let gPic = document.createElement('img');
    gPic.id = 'pic';
    gPic.src = d.avatar_url;
    gProfile.appendChild(gPic);

    // Name
    let gName =  document.createElement('div')
    gName.id = 'name';
    gName.innerText = d.name;
    gProfile.appendChild(gName);

    // Location

    // GitHub URL

    // GitHub Username

    // GitHub Repos

}