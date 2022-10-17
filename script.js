window.onload = () => firstApi();

async function firstApi() {
  await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/75621062").json;
}







