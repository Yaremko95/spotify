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
          element.classList.toggle("d-none");
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
        });
      } else {
        //update ui
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
