async function fetchPictures() {
    let response - await fetch ("https://api.giphy.com/v1/gifs/search?api_key=gszswiwDpZti4BXeNMSmGw067FXI6H5d&q=Books&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips")
console.log (response)

let jsonGiphy - await (response.json())

console.log (jsonGiphy)
console.log (jsonGiphy.data)
console.log (jsonGiphy.meta)
console.log (jsonGiphy.pagination)

    
}

fetchPictures {}