let arrayFetch = [
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
  "https://striveschool-api.herokuapp.com/api/deezer/album/98745",
];

function randFetch() {
  let fetchIndex = Math.floor(Math.random() * arrayFetch.length);
  return fetchIndex;
}

let arrayFetchIter = [];
let resArray = [];
let arrayFetchLast = [];

window.onload = async function () {
  await getFetchThird(); //1 Al caricamento della pagina faccio una fetch all'API
};

async function callFetch() {
  let fetchRequest = await fetch(arrayFetch[randFetch()]);
  let response = await fetchRequest.json();
  return response; //arrayFetch,
}

async function getFetchThird() {
  for (let element of arrayFetch) {
    console.log(element);
    element = await callFetch();
    arrayFetchLast.push(element);
    fetchDisplayAll(arrayFetchLast);
  }
}

async function fetchDisplayAll(arrayFetchLast) {
  let display = document.querySelector(".container > #third");

  for (const res of arrayFetchLast) {
    display.innerHTML += `<div class="raw">
          <div>
              <img src="${res.cover_medium}">
          </div>
          <div>
              <div>${res.title}</div>
              <div>
              </div>
          </div>
      </div>`;
  }
}
