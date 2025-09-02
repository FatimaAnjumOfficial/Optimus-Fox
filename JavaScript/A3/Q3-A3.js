/* Write a function called fetchUsers that uses the JSONPlaceholder API (https://jsonplaceholder.typicode.com)
to fetch a list of users and returns a promise that resolves to an array of user objects. Use the fetch method
to make the API call and the json method to parse the response. Use the filter method to filter out the users
that do not have an email address. Use the reduce method to calculate the total number of users that have a
phone number listed. Write code to test this function by calling it and logging the result. */

async function fetchUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(url); // Fetch users
    const users = await response.json();

    const filteredUsers = users.filter((user) => user.email);

    const usersWithPhoneNumberCount = filteredUsers.reduce((count, user) => {
      //count = initial value
      //user = accumulator
      if (user.phone) {
        return count + 1;
      } else {
        return count;
      }
    }, 0); //reduce method has an initial value and an accumulator. The reduce method applies a function to
    //each element of an array, accumulating a single result. It takes an initial value and iterates
    //over the array, updating the accumulator with each element's result.

    return filteredUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

fetchUsers()
  .then((users) => {
    console.log("Users:", users); //users data
    console.log("Number of users with phone numbers: ", users.length); //users' count or no of users
  })
  .catch((error) => console.error("Error in testing:", error));
