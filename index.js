async function getGifs(query) {
    document.getElementById("divGiphy").innerHTML=""
    let searchTerm =
    document.getElementById("searchPhrase").value.trim()
        if (searchTerm == "") return;
        try {
            let response = await fetch
            ('https://api.giphy.com/v1/gifs/search?api_key=&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips')
            let jsonGiphy = await response.json()
            let dataGiphy = jsonGiphy.data

            dataGiphy.forEach(element => {
                let newImage = document.createElement ("img")
                newImage.src = element.images.original.url
                document.getElementById("divGiphy").append(newImage)
            })
        }

  }
  
  catch (error) {
    console.error(error);
  }

fetchdata();