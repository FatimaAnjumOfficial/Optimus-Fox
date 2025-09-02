/* Define a function named fetchPosts that uses the JSONPlaceholder API (https://jsonplaceholder.typicode.com)
to fetch a list of posts and returns a promise that resolves to an array of post objects. Use the axios library
to make the API call and the data property to parse the response. Use the filter method to filter out the posts
that do not have a title. Use the sort method to sort the remaining posts by their ID in ascending order. Write
code to test this function by calling it and logging the result.*/

const axios = require("axios");
async function fetchPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await axios.get(url);
    const posts = response.data;
    const filteredPosts = posts.filter((post) => post.title);
    const sortedFilteredPosts = filteredPosts.sort((a, b) => a.id - b.id);

    return sortedFilteredPosts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

fetchPosts()
  .then((posts) => console.log("Posts:", posts))
  .catch((error) => console.error("Error in test:", error));
