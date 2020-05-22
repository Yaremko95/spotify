fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=money`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
			"x-rapidapi-key": "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc"
				}
		})
		.then(response => response.json()).then(parsedJSON => { 
        let data=parsedJSON.data
        
        let tracksQuerry = data;
        const albumQuerry = data.filter(element => 
            element.album.title.toLowerCase().includes(`money`))
            albumQuerry.forEach(element => {
            })
        const artistQuerry = data.filter(element => 
            element.artist.name.toLowerCase().includes(`money`))
            artistQuerry.forEach(element => {
                console.log(element.artist.name)
            })
            console.log(tracksQuerry,albumQuerry,artistQuerry)
    })   
    
        