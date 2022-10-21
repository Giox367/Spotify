let albumListURL = [
  "https://striveschool-api.herokuapp.com/api/deezer/album/75621062",
  "https://striveschool-api.herokuapp.com/api/deezer/album/555555",
  "https://striveschool-api.herokuapp.com/api/deezer/album/666668",
  "https://striveschool-api.herokuapp.com/api/deezer/album/648912",
  "https://striveschool-api.herokuapp.com/api/deezer/album/678456",
  "https://striveschool-api.herokuapp.com/api/deezer/album/125874",
  "https://striveschool-api.herokuapp.com/api/deezer/album/125121",
  "https://striveschool-api.herokuapp.com/api/deezer/album/125444",
  "https://striveschool-api.herokuapp.com/api/deezer/album/245854",
  "https://striveschool-api.herokuapp.com/api/deezer/album/245454",
  "https://striveschool-api.herokuapp.com/api/deezer/album/245989",
  "https://striveschool-api.herokuapp.com/api/deezer/album/348878",
  "https://striveschool-api.herokuapp.com/api/deezer/album/348888",
  "https://striveschool-api.herokuapp.com/api/deezer/album/445453",
  "https://striveschool-api.herokuapp.com/api/deezer/album/44544",
  "https://striveschool-api.herokuapp.com/api/deezer/album/44547",
  "https://striveschool-api.herokuapp.com/api/deezer/album/44457",
  "https://striveschool-api.herokuapp.com/api/deezer/album/41563",
  "https://striveschool-api.herokuapp.com/api/deezer/album/41567",
  "https://striveschool-api.herokuapp.com/api/deezer/album/41566",
  "https://striveschool-api.herokuapp.com/api/deezer/album/89561",
  "https://striveschool-api.herokuapp.com/api/deezer/album/89562",
  "https://striveschool-api.herokuapp.com/api/deezer/album/89563",
  "https://striveschool-api.herokuapp.com/api/deezer/album/89564",
  "https://striveschool-api.herokuapp.com/api/deezer/album/89566",
  "https://striveschool-api.herokuapp.com/api/deezer/album/89567",
  "https://striveschool-api.herokuapp.com/api/deezer/album/895678",
  "https://striveschool-api.herokuapp.com/api/deezer/album/895679",
  "https://striveschool-api.herokuapp.com/api/deezer/album/98758",
  "https://striveschool-api.herokuapp.com/api/deezer/album/98759",
];

let songlist = document.getElementById("playlist");

async function callFetch() {
  let queryString = new URLSearchParams(window.location.search);
  let id = queryString.get("id");
  console.log(queryString);
  let fetchAlbum = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`);
  let response = await fetchAlbum.json();
  return response; //arrayFetch,
}
