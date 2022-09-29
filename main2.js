console.log("hello")

const musicContainer = document.querySelector("#page_container");
let musicResults = document.getElementById("music_container");

let input = document.getElementById("Band_Name");
let form = document.getElementById("form");

form.addEventListener('submit', (event) => {
    let search = input.value;
    let url = `https://itunes.apple.com/search?term=${search}&limit=25`;
    event.preventDefault();



fetch(url)

    .then(function (response) {
        return response.json()
    })

    .then(function (itunesData) {
        buildResults(itunesData.results);


    })


})


function buildResults(musicArray) {
            for (let data of musicArray) {
                let itunesDiv = document.createElement("div");
                let picture = document.createElement("img");
                let artist = document.createElement("p");
                // let song = document.createElement("p");

                picture.src = `${data.artworkUrl60}`;
                artist.innerText = `${data.artistName}`;
                itunesDiv.appendChild(picture);
                itunesDiv.appendChild(artist);

                musicResults.appendChild(itunesDiv);

            }
        }

