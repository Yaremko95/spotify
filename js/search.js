
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
        let defaultSearch = document.querySelector('.search-default')
        if(defaultSearch!=null){
        defaultSearch.remove()}
        let tracksQuerry = data;
        const albumQuerry = data.filter(element => 
            element.album.title.toLowerCase().includes(`money`))
            
            containers.forEach(element => {
              element.classList.toggle('d-none')
              
            });
           
           
            songsSection.innerHTML=""
            tracksQuerry.forEach((element, index) => {
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
                songsSection.innerHTML += content
                }
          
            })
        const artistQuerry = data.filter(element => 
            element.artist.name.toLowerCase().includes(`${input.toLowerCase()}`))
            
        artistQuerry.forEach(element => {
              let content = `<div class="col mb-3">
                              <div class="d-flex align-items-center">
                                <div class="rounded-circle" style="overflow: hidden;">
                                  <img src="" alt="" style="max-height: 5rem;">
                                </div>
                                <div class="d-flex flex-column pl-2">
                                  <a href="" style="color: whitesmoke;">
                                    <span>artist</span>
                                  </a>
                                </div>
                              </div>
                            </div>`
              artistsSection.innerHTML+=content
                            console.log(element.artist.name)
            })
            console.log(tracksQuerry,albumQuerry,artistQuerry)
    })   
  }
        