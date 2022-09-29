console.log("hello")

const musicContainer = document.querySelector("#page_container");
let musicResults = document.getElementById("music_container");
const playAudio = document.querySelector("#audioplayer")
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
                itunesDiv.id = "musiccard"
                let picture = document.createElement("img");
                let artist = document.createElement("p");
                let song = document.createElement("p");
                
                picture.src = `${data.artworkUrl60}`;
                artist.innerText = `${data.artistName}`;
                itunesDiv.appendChild(picture);
                itunesDiv.appendChild(artist);
                itunesDiv.setAttribute("data-preview", data.previewUrl);
                song.innerText = `${data.trackName}`;
                itunesDiv.appendChild(song);
                
                musicResults.appendChild(itunesDiv);
                itunesDiv.addEventListener("click", (event) => {
                    playAudio.src = `${data.previewUrl}`
                })
                
            }
        }


