<<<<<<< Updated upstream
=======
let searchFetch;
function searchSongs(value) {
  //added searchFetch to get the value each time this function is called !
  searchFetch="";
  searchFetch=fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${value}`,{
  method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc",
    },
  });

  fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${value}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc",
    },
  })
    .then((response) => response.json())
    .then((parsedJSON) => {
      let data = parsedJSON.data;
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
        let tracksQuerry = data;
>>>>>>> Stashed changes

function searchSongs()
 {
  let input =document.querySelector('.search-container .form-control').value.toLowerCase()
   fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${input.toLowerCase()}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
			"x-rapidapi-key": "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc"
				}
		})
		.then(response => response.json()).then(parsedJSON => { 
        let data=parsedJSON.data
        let section = document.querySelector('.search-results-section')
        let containers= document.querySelectorAll('.search-results-section .container-fluid')
        let songsSection = document.querySelector('.songs-search')
        let artistsSection = document.querySelector('.artists-search')
        let albumSection = document.querySelector('.albums-search')
        let defaultSearch = document.querySelector('.search-default')
        artistsSection.innerHTML=""
        albumSection.innerHTML=""
        songsSection.innerHTML=""
        if(defaultSearch!=null){
        defaultSearch.remove()}
        let tracksQuerry = data;
        const albumQuerry = data.filter(element => 
            element.album.title.toLowerCase().includes(`${input.toLowerCase()}`))
            
            containers.forEach(element => {
              element.classList.toggle('d-none')
              
            });
           
            tracksQuerry.forEach((element, index) => {
                if(index < 8) {
                  
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
                                </div>`
                songsSection.innerHTML += content
                }
          
            })
        const artistQuerry = data.filter(element => 
            element.artist.name.toLowerCase().includes(`${input.toLowerCase()}`))
            
        artistQuerry.forEach((element,index) => {
          if(index < 8) {
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
                            </div>`
              artistsSection.innerHTML+=content
          }
            })
        albumQuerry.forEach((element,index)=> {
          if(index < 8) {
          let content = `<div class="col mb-3">
          <div class="d-flex">
            <img src="${element.album.cover_small}" alt="" style="max-height: 5rem;">
            <div class="d-flex flex-column pl-2">
              <span>${element.title}</span>
              <a href="">
                <small>${element.artist.name}</small>
              </a>
            </div>
          </div>
        </div>`
        albumSection.innerHTML += content;

<<<<<<< Updated upstream
          }
        
        })
            console.log(tracksQuerry,albumQuerry,artistQuerry)
    })   
  }
        
=======
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
>>>>>>> Stashed changes
