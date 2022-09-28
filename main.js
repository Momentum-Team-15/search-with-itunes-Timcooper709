console.log("hello world"); 
const url = 'https://proxy-itunes-api.glitch.me/search?term=jack+johnson'

const dataContainer = document.querySelector("#data_container")
dataContainer.id = "data"





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










