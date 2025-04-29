async function fetchdata() {
    let searchTerm = document.getElementById("type").value;
    if (searchTerm == "") searchTerm = "";
    let response = await fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
    );
    let giphyJson = await response.json()
    let arrPictures = giphyJson.data;

    let container = document.getElementsById("images")
    container.innerHTML = "";

    for (let index =0; index < arrPictures.length; index++) {
        let img = document.createElement("img");
        img.src = arrPictures[index].images.original.url;
        container.append(img);
        console.log(arrPictures[index].images.original.url);
    }
fetchdata();

document.getElementById("Search").addEventListener("click", fetchPictures);