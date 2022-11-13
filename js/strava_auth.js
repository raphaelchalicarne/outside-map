function stravaAuth() {
  window.open("https://www.strava.com/oauth/authorize?client_id=97031&response_type=code&redirect_uri=" + window.location.href + "exchange_token&approval_prompt=force&scope=read");
}