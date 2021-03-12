function getAlbums() {
  fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/412/albums')
    .then((res) => res.json())
    .then((res) => {
      renderData(res)
    })
    .catch((err) => console.error(err))
}

function renderData(data) {
  const collection = data
  const items = collection.data
  const selected = document.querySelector('#homecards')
  selected.innerHTML = ''
  items.forEach((element) => {
    selected.innerHTML += card(element)
  })
}

function card(data) {
  console.log(data)
  return /*html*/ `
  <div class="card mr-3 mt-1" style="border: 0px">
  <img
    src="${data.cover}"
    class="card-img-top"
    alt="..."
  />
  <div class="overlay"></div>
  <div class="card-body">
    <p class="card-text text-center">${data.title}</p>
  </div>
  <div
    class="container-fluid d-flex justify-content-between align-items-center icons"
  >
    <i class="far fa-heart" onclick="like(event)"></i>
    <a href="artist.html"
      ><i class="fas fa-play-circle fa-2x"></i
    ></a>
    <div class="dropdown">
      <button
        class="btn m-0 p-0"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="fas fa-ellipsis-h"></i>
      </button>
      <div
        class="dropdown-menu"
        aria-labelledby="dropdownMenuButton"
      >
        <a class="dropdown-item" href="album.html"
          >Go to Playlist Radio</a
        >
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Report</a>
        <a class="dropdown-item" href="#"
          >Save to your library</a
        >
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#"
          >Create Similar Playlist</a
        >
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Share</a>
      </div>
    </div>
  </div>
</div>
  `
}

window.onload = function () {
  getAlbums()
}
