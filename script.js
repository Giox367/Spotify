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
  
      <div class="col-3">
          <a class="btn" href="/album.html?id=${album.id}"><img src="${album.cover_medium}"></a>
          </div>
          <div id="annuncio" class="col-7 offset-2 ">
          <p>Album</p>
              <h2>${album.title}</h2>

              <div >
                  <p> Ascolta album</p>
              </div>
              <div class="banner-button">
                <button class="btn-green-pillow" type="button"">
                  Play
                </button>
                <button class="btn-pillow " type="button" >
                  Salva
                </button>
                <button class="btn" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
              </svg>
                </button>
              </div>
          </div>
        </div>`;
}

function displayFavoritesAlbums(albums) {
  let display = document.querySelector("#second > .row");

  albums.forEach((album) => {
    display.innerHTML += `<div class="col-xs-6 col-sm-6 col-lg-6 col-xl-4">
    <div class="card mb-1 bg-dark">
      <div class="row">
        <div class="col-3 col-md-4">

            <a class="btn" href="/album.html?id=${album.id}"><img src="${album.cover_small}"></a>
          
            </div>
            <div class="col-9 col-md-8">
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
    display.innerHTML += `<div class="col-sm-12 col-lg-6 col-xl-4">
    <div class="card m-1">
        <a class="btn" href="/album.html?id=${album.id}"><img style="border-radius:0.8rem" src="${album.cover_medium}"></a>
    
    <div class="card-body  text-center">
        <h6>${album.title}</h6>
        <p>${album.artist.name}
        </p>
    </div>
    </div>
</div>`;
  });
}
