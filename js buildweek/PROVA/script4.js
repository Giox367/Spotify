// let fetch = "https://striveschool-api.herokuapp.com/api/deezer/album/75621062";
let arrayFetchAlbum = [];
let resAlbum = [];

window.onload = async function () {
  await getFetchAlbum();
};

async function callFetch() {
  let fetchAlbum = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/75621062");
  // let fetchRequest = await fetch(arrayFetch[randFetch()]);
  let response = await fetchAlbum.json();
  return response; //arrayFetch,
}
//fetcho un album e lo parso

async function getFetchAlbum() {
  let response = await callFetch();
  arrayFetchAlbum.push(response);
  fetchDisplayAlbum(arrayFetchAlbum);
}

function fetchDisplayAlbum(arrayFetchAlbum) {
  let displayAlbum = document.querySelector(".container > #album");
  for (let index = 0; index < arrayFetchAlbum.length; index++) {
    let res = arrayFetchAlbum[index];
    resAlbum.push(res);
    console.log(res);
    /*
     let arrayTracks =resAlbum.map((tracks) => {
       return
        `<div class="track-album">
            <div class="track-title">tracks.data.title</div>
            <div class="track-rank">tracks.data.rank</div>
            <div class="track-duration">tracks.data.duration</div>

        </div>
        return tracks.data.title;
     }
    }*/

    displayAlbum.innerHTML = `
        <div class="d-flex">
            <div class="album-img">
                <img src="${res.cover_medium}"
            </div>
            <div class="album-info">
            <h2 class="title"> ${res.title}</h2>
            <p class="artist">${res.artist.name} * ${res.release_date} * ${res.nb_tracks}</p>
        </div>
        <div class="button-group">
            <button class="btn " type="button">
                <img src="./node_modules/bootstrap-icons/icons/play-circle-fill.svg">
            </button>
            <button class="btn " type="button" >
                <img src="./node_modules/bootstrap-icons/icons/heart-fill.svg">
            </button>
            <button class="btn " type="button">
                <img src="./node_modules/bootstrap-icons/icons/three-dots.svg">
            </button>
        </div>
        <div class="tracks">
            <div>
                ${res.tracks.data.map((track) => {
                  return `<div class="track-album">
                     <div class="track-title">${track.title}</div>
                     <div class="track-rank">${track.rank}</div>
                     <div class="track-duration">${track.duration}</div>
         
                 </div>`;
                })}
            </div>
        </div>
    `;
  }
}
