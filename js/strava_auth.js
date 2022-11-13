const CLIENT_ID = 97031;
document.addEventListener('DOMContentLoaded', async function () {
  let params = (new URL(document.location)).searchParams;
  let code = params.get('code');
  let data = {
    'client_id': CLIENT_ID,
    'client_secret': '4a3241e7324cdae3408a6028cd70dab9994ef8c1',
    'code': code,
    'grant_type': 'authorization_code'
  };

  const response = await fetch("https://www.strava.com/oauth/token", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}, false);

function stravaAuth() {
  window.open("https://www.strava.com/oauth/authorize?client_id=" + CLIENT_ID + "&response_type=code&redirect_uri=" + window.location.href + "&approval_prompt=force");
}