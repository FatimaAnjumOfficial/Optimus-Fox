/* Write a function called fetchAlbums that uses the JSONPlaceholder API (https://jsonplaceholder.typicode.com)
to fetch a list of albums and returns a promise that resolves to an array of album objects. Use the fetch
method to make the API call and the json method to parse the response. Use the filter method to filter out the
albums that do not have a title. Use the map method to transform the remaining albums into a simpler format.
Write code to test this function by calling it and logging the result. */

console.log(" ");
console.log("-----------By using chain method------------");
console.log(" ");

function fetchAlbums() {
  const url = "https://jsonplaceholder.typicode.com/albums";

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const albumsWithTitles = data.filter((album) => album.title);

      const simplifiedAlbums = albumsWithTitles.map((album) => ({
        id: album.id,
        title: album.title,
      }));

      return simplifiedAlbums;
    })
    .catch((error) => {
      console.error("Error fetching albums:", error);
      return []; // Return empty array if  error
    });
}

fetchAlbums()
  .then((albums) => {
    console.log("Filtered and simplified albums:", albums);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/*
console.log(" ");
console.log("-----------By using async/await------------");
console.log(" ");

async function fetchAlbums()
{
    const url = 'https://jsonplaceholder.typicode.com/albums';
    
    try
    {
        const response = await fetch(url);
        const albums = await response.json();
        const filteredAlbums = albums.filter(album => album.title);
        const transformedAlbums = filteredAlbums.map(album => ({
            id: album.id,
            title: album.title,
            userId: album.userId
        }));
        
        return transformedAlbums;
    }
    catch (error)
    {
        console.error('Error fetching albums:', error);
        throw error; //controler provides a default handler
    }
}

fetchAlbums()
    .then(albums => {
        console.log('Fetched Albums:', albums);
    })
    .catch(error => {
        console.error('Error:', error);
    });*/
