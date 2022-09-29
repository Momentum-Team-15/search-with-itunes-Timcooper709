console.log("hello world");
const search = document.createElement('div');

let input = document.createElement('userInput');
input.type = 'text';
search.appendChild(input);

let searchBaseUrl = 'http://itunes.apple.com/search?term=';



const dataContainer = document.querySelector("#data_container")
dataContainer.id = "data"

//adding eventlistener for search
//let userInput = document.querySelector(".searchBox");
//let searchForm = document.querySelector("#search-box");

let searchForm = document.querySelector('#search-form')
searchForm.addEventListener("submit", (event) => {
   event.preventDefault();
   console.log('submitted',)
   let searchBox = document.querySelector('#search-box')
   let searchUrl = `${searchBaseUrl}${searchBox.value}`
   console.log(searchUrl)



});


function getSearchResults(url) {

   fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
   })

      .then(function (response) {
         return response.json()
      })
   

   .then(function (data) {
         for (let music of data.results) {
            console.log(music.trackName)
            let musicDiv = document.createElement("div");
            dataContainer.appendChild(musicDiv);
            musicDiv.id = "data"

            let title = document.createElement("p");
            title.innerText = `${music.trackName}`;
            musicDiv.appendChild(title);

            /*  let picture = document.createElement("img");
               album.innerText = `$(music.picture)`;
               musicDiv.appendChild(picture)
               */


         }
      })
      









   }
