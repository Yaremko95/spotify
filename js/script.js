

const initialDefinitions = () => {
  let searchInput = document.getElementById("search-artist");
  searchInput.onkeyup = function (e) {
    let value = searchInput.value;
    setTimeout(() => {
      searchSongs(value);
    }, 500);
  };
};
window.onload = initialDefinitions;
