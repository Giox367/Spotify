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
  await getFetchSecond(); //1 Al caricamento della pagina faccio una fetch all'API
  // await fetchDisplayAll();
};

async function callFetch() {
  let fetchRequest = await fetch(arrayFetch[randFetch()]);
  let response = await fetchRequest.json();
  //   if (index > -1) {
  //     arrayFetch.splice(fetchRequest, 1);
  //   }
  console.log(arrayFetch);
  return response;
}

async function getFetchSecond() {
  let responseA = await callFetch();
  let responseB = await callFetch();
  let responseC = await callFetch();
  let responseD = await callFetch();
  let responseE = await callFetch();
  let responseF = await callFetch();

  arrayFetchIter.push(responseA, responseB, responseC, responseD, responseE, responseF);
  fetchDisplayCard(arrayFetchIter);
}

function fetchDisplayCard(arrayFetchIter) {
  //prendo la fetch request e la stampo sul container
  let display = document.querySelector(".container > #second");
  //svuoto il contetnuto per la funzione di ricerca che implementerò
  //   display.innerHTML = "";
  console.log(arrayFetchIter);
  for (let index = 0; index < arrayFetchIter.length; index++) {
    let res = arrayFetchIter[index];
    resArray.push(res);
    // for (const iterator of resArray) {
    display.innerHTML += `<div class="raw d-flex">
          <div>
              <img src="${res.cover_small}">
          </div>
          <div>
              <div>${res.title}</div>
          </div>
        </div>`;
    // }
  }
}

// async function getFetchThird(arrayFetch) {
//   for (let index = 0; index < arrayFetch.length; index++) {
//     let element = arrayFetch[index];
//     element = await callFetch();
//     arrayFetchLast.push(element);
//     fetchDisplayAll(arrayFetch);
//   }
// }

// async function fetchDisplayAll(arrayFetch) {
//   let display = document.querySelector(".container > #third");

//   for (const res of arrayFetch) {
//     display.innerHTML += `<div class="raw">
//         <div>
//             <img src="${res.cover_medium}">
//         </div>
//         <div>
//             <div>${res.title}</div>
//             <div>
//             </div>
//         </div>
//     </div>`;
//   }
// }
