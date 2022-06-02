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
      //call function here
    });

function responseData (data) {

}