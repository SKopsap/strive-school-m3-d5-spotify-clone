const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

//select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();

  //add border to current tab
  this.classList.add("tab-border");
  //grab content item from the dom
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  //add show class
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

//listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));

const makeAlbum = document.querySelector("#benim-album");

const createAlbum = (deneme) => {
  const div = document.createElement("div");

  div.classList.add("col-lg-2");
  div.innerHTML = `
                          <a href="/album.html">
                            <div class="card border-0">
                             <img src="${deneme.cover}" alt="..."/>
                             <div class="card-body">
                               <p class="card-text">${deneme.title}</p>
                               <p class="text-center">Queen</p>
                             </div>
                          </div>
                        </a>
                  `;
  makeAlbum.appendChild(div);
};

let album = [];

const getAlbum = () => {
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/412/albums`)
    .then((response) => response.json())
    .then((bal) => {
      console.log(bal.data);
      album = bal.data;
      bal.data.forEach((item) => createAlbum(item));
    });
};

console.log(album);

window.onload = function () {
  getAlbum();
};
