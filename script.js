
const form = document.getElementById("search-form");
const searchForm = document.getElementById("btn");

const BASE_URL = "https://pixabay.com/api/videos//";
const API_KEY = "43075611-f828b1df5d00f37b38eab2fb3";

function videoSearch() {
    let searchWord = document.getElementById("search").value;

    fetch(`${BASE_URL}?key=${API_KEY}&q=${searchWord}`)
      .then((data) => data.json())
        .then((res) => {
            const hitsNumber = Math.round(Math.random() * (20 - 1) + 1);
          const firstVideo = res.hits[hitsNumber].videos.small.url;
          const video = `
            <video
              width="400"
              height="300"
              controls="controls"
              src="${firstVideo}"
              </video >
          `;
            document.getElementById("result").innerHTML = video;
        })
        .finally(() => {
            form.reset();
        });
}

searchForm.addEventListener("click", (e) => {
  e.preventDefault();
  videoSearch();
});