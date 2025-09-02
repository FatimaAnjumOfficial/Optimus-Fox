/* 5: Write a function called fetchTodos that uses the JSONPlaceholder API (https://jsonplaceholder.typicode.com)
to fetch a list of todos and returns a promise that resolves to an array of todo objects. Use the fetch method
to make the API call and the json method to parse the response. Use the filter method to filter out the todos
that are already completed. Use the map method to transform the remaining todos into a simpler format. Write
code to test this function by calling it and logging the result. */

function fetchTodos() {
  const url = "https://jsonplaceholder.typicode.com/todos";

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const incompleteTodos = data.filter((todo) => !todo.completed);

      const simplifiedTodos = incompleteTodos.map((todo) => ({
        id: todo.id,
        title: todo.title,
        userId: todo.userId,
      }));

      return simplifiedTodos;
    })
    .catch((error) => {
      console.error("Error fetching todos:", error);
      return [];
    });
}

fetchTodos()
  .then((todos) => {
    console.log("Filtered and simplified todos:", todos);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
