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
  fetchDisplayArtist.innerHTML = `<div><img src=${res.picture_big}></div>
   <h1>${res.name}</h1>`;
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
    div.innerHTML += `<div><img src=${resArtist.picture_small}>
    <div><p>${tracks.data[i].title}</p></div>
    <div>${tracks.data[i].rank}</div>
    <div>${tracks.data[i].duration}</div>
    </div>`;
  }
}
