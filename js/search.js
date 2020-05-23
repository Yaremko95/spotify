let data; 
let tracksQuerry;
function searchSongs(value) {
  fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${value}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc",
    },
  })
    .then((response) => response.json())
    .then((parsedJSON) => {
       data = parsedJSON.data;

      if (data.length > 0) {
        let section = document.querySelector(".search-results-section");
        let containers = document.querySelectorAll(
          ".search-results-section .container-fluid"
        );
        let songsSection = document.querySelector(".songs-search");
        let artistsSection = document.querySelector(".artists-search");
        let albumSection = document.querySelector(".albums-search");
        let defaultSearch = document.querySelector(".search-default");
        artistsSection.innerHTML = "";
        albumSection.innerHTML = "";
        songsSection.innerHTML = "";
        if (defaultSearch != null) {
          defaultSearch.remove();
        }
         tracksQuerry = data.filter(element => element.title.toLowerCase().includes(`${value}`))

        //let albums = data.map((song) => song.album);
        //console.log(data);
        let albums = data.map((song) => song.album);
        let artists = data.map((song) => song.artist);
        let artist = _.find(artists, function (o) {
          return o.name.toLowerCase().includes(value.toLowerCase());
        });
        getAlbumsOfArtist(artist.id, (error, response) => {
          if (error) {
            console.log(error);
          } else {
            const { data } = response;
            let albums = _.uniqBy(data, "title");
           
            albums.forEach((element, index) => {
              if (index < 8) {
                let content = `<div class="col mb-3">
          <div class="d-flex">
            <img src="${element.cover_small}" alt="" style="max-height: 5rem;">
            <div class="d-flex flex-column pl-2">
              <span>${element.title}</span>
              <a href="">
                <small>${artist.name}</small>
              </a>
            </div>
          </div>
        </div>`;
                albumSection.innerHTML += content;
              }
            });
          }
        });
        //console.log(albums);
        //let uniqAlbums = _.uniqBy(albums, "id");
        //console.log(uniqAlbums);
        // giving you albums that includes query
        const albumQuerry = data.filter((element) =>
          element.album.title.toLowerCase().includes(`${value}`)
        );

        containers.forEach((element) => {
          element.classList.remove("d-none");
        });

        tracksQuerry.forEach((element, index) => {
          if (index < 8) {
            let content = `<div class="col mb-3">
                                  <div class="d-flex">
                                    <img src="${element.album.cover_small}" alt="" style="max-height: 5rem;">
                                    <div class="d-flex flex-column pl-2">
                                      <span>${element.title}</span>
                                      <a href="albums.html?artist=${element.artist.name}">
                                        <small>${element.artist.name}</small>
                                      </a>
                                    </div>
                                  </div>
                                </div>`;
            songsSection.innerHTML += content;
          }
        });
        const artistQuerry = data.filter((element) =>
          element.artist.name.toLowerCase().includes(`${value}`)
        );
        let uniqueArtist = _.uniqBy(artistQuerry, 'artist.name')
        console.log(uniqueArtist)
        uniqueArtist.forEach((element, index) => {
          if (index < 8) {
            let content = `<div class="col mb-3">
                              <div class="d-flex align-items-center">
                                <div class="rounded-circle" style="overflow: hidden;">
                                  <img src="${element.artist.picture_small}" alt="" style="max-height: 5rem;">
                                </div>
                                <div class="d-flex flex-column pl-2">
                                  <a href="" style="color: whitesmoke;">
                                    <span>${element.artist.name}</span>
                                  </a>
                                </div>
                              </div>
                            </div>`;
            artistsSection.innerHTML += content;
          }
        });}

  function getAlbumsOfArtist(id, callback) {
    let albumSection = document.querySelector(".albums-search");
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/artist/${id}/albums`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "6dd0f092dfmshc7c788985801fa3p1b5331jsncbb8c36c49bb",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        callback(undefined, data);
      })
      .catch((err) => {
        callback(err, undefined);
      });
  }
  
  function seeMoreSongs (){
      searchFetch.then(response => response.json()).then(data => data.data).then(songs => {
        let main = document.querySelector('.search-results-section'),
        containers = document.querySelectorAll('.search-results-section .container-fluid')
        
        divRow=document.createElement('div');
        divRow.className="row row-cols-xs-1 row-cols-md-3 row-cols-lg-6"
        containers.forEach((element) => {
          element.classList.toggle("d-none");
        songs.forEach(element => {
  
        let content=`
        <div class="col mb-3 text-center">
          <div class="d-block">
            <img src="${element.album.cover_medium}" alt="" style="max-height: 12rem;">
            <div class="d-flex flex-column pl-2">
              <span>${element.title}</span>
              <a href="albums.html?artist=${element.artist.name}">
                <small>${element.artist.name}</small>
              </a>
            </div>
          </div>
        </div>`;
      divRow.innerHTML+=content
  
      
  
      })
        main.appendChild(divRow)
    })
    
  
      })}
  function seeMoreAlbums (){
    searchFetch.then(response => response.json()).then(data => data.data).then(songs => {
      let main = document.querySelector('.search-results-section'),
      divRow=document.createElement('div');
      divRow.className="row row-cols-xs-1 row-cols-md-3 row-cols-lg-6"
      main.innerHTML=""
      songs.forEach(element => {
  
      let content=`
      <div class="col mb-3 text-center">
        <div class="d-block">
          <img class="rounded-circle" src="${element.album.cover_medium}" alt="" style="max-height: 10rem;">
          <div class="d-flex flex-column pl-2">
            <span>${element.title}</span>
            <a href="albums.html?artist=${element.artist.name}">
              <small>${element.artist.name}</small>
            </a>
          </div>
        </div>
      </div>`;
    divRow.innerHTML+=content
  
    })
      main.appendChild(divRow)
  })
  
  
  
  }
      //console.log(tracksQuerry, albumQuerry, artistQuerry);
    });
}


function getAlbumsOfArtist(id, callback) {
  let albumSection = document.querySelector(".albums-search");
  fetch(`https://deezerdevs-deezer.p.rapidapi.com/artist/${id}/albums`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "6dd0f092dfmshc7c788985801fa3p1b5331jsncbb8c36c49bb",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      callback(undefined, data);
    })
    .catch((err) => {
      callback(err, undefined);
    });
}

function seeMoreSongs (){


    console.log(data)
    let main = document.querySelector('.search-results-section'),
    containers = document.querySelectorAll('.search-results-section .container-fluid')
    containers.forEach((element) => {
      element.classList.add("d-none");
    });
    divRow=document.createElement('div');
    divRow.className="row pr-5"
   
   
      trackquerry.forEach(element => {

    let content=`
                <ul class="w-100">
                <li class="d-flex  mb-3 justify-content-between w-100  border-bottom border-top border-secondary py-3  " style="cursor:pointer">
                  <div class="d-flex flex-column">
                    <span class='song-title'><i class="fa fa-music mr-3" ></i>${element.title}</span>
                    
                  </div>
                    <span class="mr-3">${element.duration/100}</span>
                </li>
              </ul>`
  divRow.innerHTML+=content

  

  })
    main.appendChild(divRow)


}