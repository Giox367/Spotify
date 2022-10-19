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
        <div class="card mb-3 d-flex" >
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${res.cover_medium}" class="img-fluid rounded-start" alt="...">
                </div>
                    <div class="col-md-8">
                        <div class="card-body">
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
                        </div>
                    </div>
                </div>
        
            </div>
            <div class="tracks">
            <div>
                ${res.tracks.data.map((track) => {
                  return `<div class="track-album row">
                     <div class="track-title col-4 text-center">${track.title}</div>
                     <div class="track-rank col-4 text-center">${track.rank}</div>
                     <div class="track-duration col-4 text-center">${track.duration}</div>
            
                 </div>`;
                })}
            </div>
        </div>`;
  }
}
