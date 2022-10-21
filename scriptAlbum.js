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

// let fetch = "https://striveschool-api.herokuapp.com/api/deezer/album/75621062";
let arrayFetchAlbum = [];
let resAlbum = [];

window.onload = async () => {
  await getFetchAlbum();
};

async function callFetch() {
  let queryString = new URLSearchParams(window.location.search);
  let id = queryString.get("id");
  console.log(queryString);
  let fetchAlbum = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`);
  let response = await fetchAlbum.json();
  return response; //arrayFetch,
}

async function getFetchAlbum() {
  let response = await callFetch();
  arrayFetchAlbum.push(response);
  fetchDisplayAlbum(arrayFetchAlbum);
}

function fetchDisplayAlbum(arrayFetchAlbum) {
  let displayAlbum = document.getElementById("albumDisplay");
  for (let index = 0; index < arrayFetchAlbum.length; index++) {
    let res = arrayFetchAlbum[index];
    resAlbum.push(res);
    console.log(res);

    displayAlbum.innerHTML = `
        <div class="card mb-3 d-flex" >
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${res.cover_medium}" class="img-fluid rounded-start" alt="...">
                </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h2 class="title"> ${res.title}</h2>
                            <a class="btn" href="/artist.html?id=${res.artist.id}"><p class="artist">${res.artist.name} * ${res.release_date} * ${res.nb_tracks}</p></a>
                        </div>
                        <div class="button-group" style="position: relative;
                        top: 4rem;
                        left: 5%">
                        <button class="btn" style="color: #1db954; font-size:3rem" type="button">

                        <svg class="green-round-btn" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              </svg>
                            </button>
                            <button class="btn " type="button" >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                              </svg>
                            </button>
                            <button class="btn " type="button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                              </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        
            </div>
            <div id="track-of-album" class="tracks">
            <div>
            <div class="track-album row">
                     <div class="track-title col-4 text-center"><p>TITOLO</p></div>
                     <div class="track-rank col-4 text-center"><p>RIPRODUZIONI</p></div>
                     <div class="track-duration col-4 text-center"><p>DURATA</p></div>

                 </div>
                ${res.tracks.data
                  .map((track) => {
                    return `<div class="track-album row">
                     <div class="track-title col-4 text-center">${track.title}</div>
                     <div class="track-rank col-4 text-center">${track.rank}</div>
                     <div class="track-duration col-4 text-center">${track.duration}</div>
            
                 </div>`;
                  })
                  .join("")}
            </div>
        </div>`;
  }
}
