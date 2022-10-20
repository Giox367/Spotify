function openNav() {
  document.getElementById("sidebar-right").style.width = "220px";
}

function closeNav() {
  document.getElementById("sidebar-right").style.width = "0";
}
function dropDotMenu() {
  document.getElementById("dotMenu").classList.toggle("show");
}
function openSubMenu() {
  document.getElementById("sub-list").classList.toggle("show");
}

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
  //"https://striveschool-api.herokuapp.com/api/deezer/album/98745",
];

window.onload = async () => {
  let albums = await getAlbums(albumListURL);

  displayFirstAlbum(albums[0]);
  displayFavoritesAlbums(albums.slice(1, 7));
  displayAllOtherAlbums(albums.slice(7));
};

async function getAlbums(urls) {
  let albums = [];

  for await (let url of urls) {
    let album = await getAlbum(url);
    if (album) albums.push(album);
  }

  return albums;
}

async function getAlbum(url) {
  console.info(`leggo l'album ${url}`);

  try {
    let response = await fetch(url);
    console.info(`...${response.status}`);
    let album = await response.json();

    return album;
  } catch (error) {
    console.error(`Failed to load Album at URL: ${url}, ${error}`);
    return undefined;
  }
}

function displayFirstAlbum(album) {
  let firstAlbumContainer = document.getElementById("first");

  firstAlbumContainer.innerHTML = `
  <div class="row">
  
      <div class="col">
          <a class="btn" href="/album.html?id=${album.id}"><img src="${album.cover_medium}"></a>
          </div>
          <div class="col">
              <div>${album.title}</div>

              <div >
                  <p> Ascolta album</p>
              </div>
              <div>
                <button class="btn " type="button"">
                  <img src="./node_modules/bootstrap-icons/icons/play-circle-fill.svg">
                </button>
                <button class="btn " type="button" >
                  <img src="./node_modules/bootstrap-icons/icons/heart-fill.svg">
                </button>
                <button class="btn " type="button">
                  <img src="./node_modules/bootstrap-icons/icons/three-dots.svg">
                </button>
              </div>
          </div>
        </div>`;
}

function displayFavoritesAlbums(albums) {
  let display = document.querySelector("#second > .row");

  albums.forEach((album) => {
    display.innerHTML += `
    <div class="col-4">
    <div class="card mb-1" style="max-width: 540px;">
      <div class="row">
        <div class="col-md-4">

            <a class="btn" href="/album.html?id=${album.id}"><img src="${album.cover_small}"></a>
          
            </div>
            <div class="col-md-8">
              <div class="card-body">
            <div>
                <p>${album.title}</p>
            
          </div>
          </div>
          </div>
          </div>`;
  });
}

function displayAllOtherAlbums(albums) {
  let display = document.querySelector("#third > .row");
  albums.forEach((album) => {
    display.innerHTML += `<div class="col-4">
            <div class="card">
                <a class="btn" href="/album.html?id=${album.id}"><img src="${album.cover_medium}"></a>
            
            <div class="card-body">
                <h6>${album.title}</h6>
                <p>${album.artist.name}
                </p>
            </div>
            </div>
        </div>`;
  });
}
