/* Question # 2 Define a function named longestWord that takes string and returns  longest word. For example:
input : "This is Optimusfox js internship class"
 
output : "Optimusfox */

function longestWord(str)
{
    const words = str.split(" ");
    let longest = "";
  
    words.forEach(word => {
        if (word.length > longest.length)
        {
            longest = word;
        }
    });
    
    return longest;
}

const inputString = "This is Optimusfox js internship class";
const longest = longestWord(inputString);
console.log(longest);
