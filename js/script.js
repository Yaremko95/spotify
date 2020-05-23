

const initialDefinitions = () => {
  let searchInput = document.getElementById("search-artist");
  searchInput.onkeyup = function (e) {
    let value = searchInput.value;
    setTimeout(() => {
      loadSearcData(value);
    }, 500);
  };
};
window.onload = initialDefinitions;



let filteredTracks = []
let filteredAlbums =[]
let filteredArtists =[]


 loadSearcData =(value) => {
  let containers = document.querySelectorAll(
    ".search-results-section .container-fluid"
  );
  let defaultSearch = document.querySelector(".search-default");
  if (defaultSearch != null) {
    defaultSearch.remove();
  }
  containers.forEach((element) => {
    element.classList.remove("d-none");
  });

      filteredArtists=[];
      filteredAlbums=[]
      filteredTracks=[]
      fetchArtists(value, index=0)
     fetchTracks(value, index=0)
     fetchAlbums(value, index=0)
}



const fetchTracks=(value, index) => {
  let songsSection = document.querySelector(".songs-search");
  songsSection.innerHTML = "";

  fetch(`https://deezerdevs-deezer.p.rapidapi.com/search/track/title?q=${value}&index=${index}`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc",
        },
      })
        .then((response) => response.json())
        .then((json) => {
         
           filteredTracks =_.concat(filteredTracks,  json.data.filter(track=>track.title.toLowerCase().includes(`${value}`)))
           console.log(filteredTracks)
           console.log(Math.floor(json.total/25))
          if (filteredTracks.length<8 && index < json.total) {
            fetchTracks(value, index+=25)
          } else {
            _.chunk(filteredTracks,8)[0].forEach(track => {
            let content = `
                      <div class="col mb-3">
                      <div class="d-flex">
                        <img src="${track.album.cover_small}" alt="" style="max-height: 5rem;">
                        <div class="d-flex flex-column pl-2">
                          <span>${track.title}</span>
                          <a href="albums.html?artist=${track.artist.name}">
                            <small>${track.artist.name}</small>
                          </a>
                        </div>
                      </div>
                    </div>
            `;
            songsSection.innerHTML += content;
          })
          }

          
        })
}

const fetchAlbums=(value, index) => {
 
  let albumSection = document.querySelector(".albums-search");
  albumSection.innerHTML = "";
 
  fetch(`https://deezerdevs-deezer.p.rapidapi.com/search/album?q=${value}&index=${index}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      
      //console.log(json.data)
       filteredAlbums= _.concat(filteredAlbums, json.data.filter(album => album.title.toLowerCase().includes(`${value}`)))
       if(filteredAlbums.length<8 && index < json.total) {
         fetchAlbums(value, index+=25)
       } else {
            _.chunk(filteredAlbums, 8)[0].forEach(album =>{
            let content = `<div class="col mb-3">
                            <div class="d-flex">
                              <img src="${album.cover_small}" alt="" style="max-height: 5rem;">
                              <div class="d-flex flex-column pl-2">
                                <span>${album.title}</span>
                                <a href="">
                                  <small>${album.artist.name}</small>
                                </a>
                              </div>
                            </div>
                          </div>`;
                  albumSection.innerHTML += content;
          })
       }
    })
}


const fetchArtists = (value, index) => {
  let artistsSection = document.querySelector(".artists-search");
  artistsSection.innerHTML = "";
 
  fetch(`https://deezerdevs-deezer.p.rapidapi.com/search/artist?q=${value}&index=${index}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc",
    },
  })
    .then((response) => response.json())
    .then((json) => {
     
      //console.log(_.chunk(json.data, 8)[0])
      //console.log(json.data)
      filteredArtists= _.concat(filteredArtists, json.data)
      if(filteredArtists.length <8 && index < json.total ) {
        fetchArtists(value, index+=25)
      } else {
             _.chunk(json.data, 8)[0].forEach(artist => {
        let content =`
                           <div class="col mb-3">
                              <div class="d-flex align-items-center">
                                <div class="rounded-circle" style="overflow: hidden;">
                                  <img src="${artist.picture_small}" alt="" style="max-height: 5rem;">
                                </div>
                                <div class="d-flex flex-column pl-2">
                                  <a href="" style="color: whitesmoke;">
                                    <span>${artist.name}</span>
                                  </a>
                                </div>
                              </div>
                            </div>`
          artistsSection.innerHTML+=content;   
      });
    }
    })
}