function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function (myResolve, myReject) {
  async function fetchAlbums() {
    const url = "https://jsonplaceholder.typicode.com/albums";

    try {
      const response = await fetch(url);
      const albums = await response.json();
      const filteredAlbums = albums.filter((album) => album.title);
      const transformedAlbums = filteredAlbums.map((album) => ({
        id: album.id,
        title: album.title,
        userId: album.userId,
      }));

      myResolve(transformedAlbums);
    } catch (error) {
      myReject("Error fetching albums: " + error.message);
    }
  }

  fetchAlbums();
});

myPromise.then(
  function (value) {
    const albumsHTML = value
      .map(
        (album) =>
          `<p>ID: ${album.id}, Title: ${album.title}, UserID: ${album.userId}</p>`
      )
      .join("");
    myDisplayer(albumsHTML);
  },
  function (error) {
    myDisplayer(error);
  }
);
