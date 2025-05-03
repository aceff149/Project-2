const apiKey = "gszswiwDpZti4BXeNMSmGw067FXI6H5d";


const searchGIFs = async (query) => {
  const url = 'https://api.giphy.com/v1/gifs/search?api_key=${gszswiwDpZti4BXeNMSmGw067FXI6H5d&q}=${searchTerm}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips'
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayGIFs(data.data);
  } catch (error) {
    console.error("Error fetching GIFs:", error);
  }
};

const displayGIFs = (gifArray) => {
  const gifContainer = document.querySelector("#gif-container");
  gifContainer.innerHTML = "";
  gifArray.forEach((gif) => {
    const img = document.createElement("img");
    img.src = gif.images.fixed_height.url;
    img.alt = gif.title;
    img.style.margin = "5px";
    gifContainer.appendChild(img);
  });
};

document.querySelector("#Searchbutton").addEventListener("click", async () => {
  const query = document.querySelector("#search-input").ariaValueMax.trim();
  if (!query) {
    alert("Enter Search Term");
    return;
  }
  console.log("Search Button Clicked!")
})