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

let randFetch = Math.floor(Math.random() * arrayFetch.length);
let randValue = arrayFetch[randFetch];
let arrayFetchIter = [];

console.log(randValue);
window.onload = function () {
  getFetchAll(); //1 Al caricamento della pagina faccio una fetch all'API
};

async function getFetchAll() {
  console.log(randValue);

  //2 creo una variabile che contega la rispota dell'api
  let fetchRequest = await fetch(randValue); //qui ho un "oggetto" html

  console.log(fetchRequest);
  //essendo che mi serve una risposta in json la devo far "interpretare"
  let response = await fetchRequest.json(); //ora ho un file json
  console.log(response);
  arrayFetchIter.push(response);
  //3 La mostro a schermo
  fetchDisplay(arrayFetchIter);
}

//3 La mostro a schermo
function fetchDisplay(arrayFetchIter) {
  //prendo la fetch request e la stampo sul container
  let display = document.querySelector("#first");
  //svuoto il contetnuto per la funzione di ricerca che implementerò
  //   display.innerHTML = "";
  console.log(arrayFetchIter);
  for (const res of arrayFetchIter) {
    display.innerHTML = `<div class=" d-flex ">
            <div>
                <img src="${res.cover_medium}">
            </div>
            <div>
                <div>${res.title}</div>
                <div>
                  <div>${res.artist.name}</div> 
                </div>
                <div>
                    <div> Ascolta album</div>
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
}
