//ultima pagina artista

//--------------------

//dobbiamo stampare a schermo

//--------------------

let arrayFetchArtist;
let resTracks = [];
// https://striveschool-api.herokuapp.com/api/deezer/artist/412
window.onload = async () => {
  getFetchArtist();
  fetchDisplayArtist();
};

async function callFetch() {
  let httpArtist = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/412");
  let resArtist = await httpArtist.json();
  return resArtist;
}
async function getFetchArtist() {
  let resArtist = await callFetch();

  let httpTrack = await fetch(resArtist.tracklist);
  let tracks = await httpTrack.json();
  console.log(tracks);
  // tracks.data.forEach(() =>
  for (let i = 0; i < tracks.data.length; i++) {
    let div = document.querySelector(".canzone");
    div.innerHTML += `<div><img src=${resArtist.picture_small}><p>${tracks.data[i].title}</p></div>`;
  }
}

async function fetchDisplayArtist() {
  let res = await callFetch();
  let fetchDisplayArtist = document.querySelector(".row");
  fetchDisplayArtist.innerHTML = `<div><img src=${res.picture_big}></div>
   <h1>${res.name}</h1>`;
}
