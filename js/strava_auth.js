const CLIENT_ID = 97031;
const STRAVA_OAUTH = "https://www.strava.com/oauth/authorize";
const STRAVA_API = "https://www.strava.com/api/v3";

function stravaAuth() {
  var auth_url = new URL(STRAVA_OAUTH);
  auth_url.searchParams.set('client_id', CLIENT_ID);
  auth_url.searchParams.set('response_type', 'code');
  auth_url.searchParams.set('redirect_uri', window.location.href);
  auth_url.searchParams.set('approval_prompt', 'force');
  auth_url.searchParams.set('scope', 'read,activity:read');
  window.open(auth_url);
}

document.addEventListener('DOMContentLoaded', async function () {
  let params = (new URL(document.location)).searchParams;
  let code = params.get('code');
  let data = {
    'client_id': CLIENT_ID,
    'client_secret': '4a3241e7324cdae3408a6028cd70dab9994ef8c1',
    'code': code,
    'grant_type': 'authorization_code'
  };

  var headers = new Headers();
  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json');

  var requestOptions = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  };

  const response = await fetch('https://www.strava.com/oauth/token', requestOptions)
    .then((response) => response.json())
    .then((data) => LogSuccess(data))
    .catch((error) => console.error('Error:', error));
}, false);

async function LogSuccess(data) {
  let athlete_data = data;
  console.log('Success:', athlete_data);

  fetch_activities(athlete_data);
}

async function fetch_activities(athlete_data) {
  var headers = new Headers();
  headers.append('Authorization', 'Bearer ' + athlete_data['access_token']);

  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  var activities_url = new URL('/athlete/activities', STRAVA_API);
  activities_url.searchParams.set('before', '');
  activities_url.searchParams.set('after', '');
  activities_url.searchParams.set('page', '');
  activities_url.searchParams.set('per_page', '');
  const response = await fetch(activities_url, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('error', error));
}