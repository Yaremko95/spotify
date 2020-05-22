fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=money`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
			"x-rapidapi-key": "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc"
				}
		})
		.then(response => response.json()).then(parsedJSON => { 
        let data=parsedJSON.data
        
        const firstQuerry = data.filter(element => 
            element.title.toLowerCase().includes(`money`))
            firstQuerry.forEach(element => {
            })
        const secondQuerry = data.filter(element => 
            element.album.title.toLowerCase().includes(`money`))
            secondQuerry.forEach(element => {
            })
        const thirdQuerry = data.filter(element => 
            element.artist.name.toLowerCase().includes(`cardi b`))
            thirdQuerry.forEach(element => {
                console.log(element.artist.name)
            })
            console.log(firstQuerry,secondQuerry,thirdQuerry)
    })   
    
        