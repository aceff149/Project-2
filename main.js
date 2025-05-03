const apiKey = "gszswiwDpZti4BXeNMSmGw067FXI6H5d";

const searchGIFs = async (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${"gszswiwDpZti4BXeNMSmGw067FXI6H5d"}&q=${query}&limit=25`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayGIFs(data.data); 
    } catch (error) {
        console.error("Error Fetching GIFs:", error);
    }
};

const displayGIFs = (gifArray) => {
    const gifContainer = document.querySelector("#gif-container");
    gifContainer.innerHTML = "";
    gifArray.forEach((gif) => {
        const img = document.createElement("img");
        img.src = gif.images.fixed_height.url;
        img.alt = gif.title;
        img.style.margin = "10px";
        gifContainer.appendChild(img);
    });
};

document.querySelector("#search-button").addEventListener("click", async () => {
    const query = document.querySelector("#search-input").value.trim();
    if (!query) {
        alert("Please Enter Search Term");
        return;
    }
    console.log("Search Button Clicked!");
    await searchGIFs(query);
});

window.addEventListener("DOMContentLoaded", async () => {
    try {
        const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25`;
        const response = await fetch(url);
        const data = await response.json();
        displayGIFs(data.data); 
    } catch (error) {
        console.error("Error Fetching Trending GIFs:", error);
    }
});