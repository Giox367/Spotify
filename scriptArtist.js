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

//ultima pagina artista

//--------------------

//dobbiamo stampare a schermo

//--------------------

let arrayFetchArtist;
let resTracks = [];
// https://striveschool-api.herokuapp.com/api/deezer/artist/412
window.onload = async () => {
  fetchDisplayArtist();
  getFetchArtist();
};

async function callFetch() {
  let queryString = new URLSearchParams(window.location.search);
  let id = queryString.get("id");
  console.log(queryString);
  let httpArtist = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`);
  // let httpArtist = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/412");
  let resArtist = await httpArtist.json();
  return resArtist;
}

async function fetchDisplayArtist() {
  let res = await callFetch();
  let fetchDisplayArtist = document.getElementById("artistDisplay");
  fetchDisplayArtist.innerHTML = `<div class="mb-3" id="artist-background"style="background-image:url(${res.picture_big});">
   <div class="artist-title"><h2>${res.name}</h2>
   <p>${res.nb_fan} ascoltatori mensili</p></div>
   </div>`;
}
async function getFetchArtist() {
  let resArtist = await callFetch();
  console.log(resArtist);
  let httpTrack = await fetch(resArtist.tracklist);
  let tracks = await httpTrack.json();
  console.log(tracks);
  // tracks.data.forEach(() =>
  for (let i = 0; i < tracks.data.length; i++) {
    let div = document.getElementById("song-track");
    div.innerHTML += `<div class="track-album row"><div class="track-img col-3 text-center"><img src=${resArtist.picture_small}>
    <p>${tracks.data[i].title}</p></div>
    <div class="track-rank col-3 text-center">${tracks.data[i].rank}</div>
    <div class="track-duration col-3 text-center">${tracks.data[i].duration}</div>
    </div>`;
  }
}
