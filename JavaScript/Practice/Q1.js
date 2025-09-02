/* Question # 1 Define a function named uniqueObjects that takes array of objects and returns their unique array of objects. For example:

input: [
{id:1,name:"abubakar",role:"engineering manager"},
{id:2,name:"maham",role:"developer"},
{id:3,name:"shawal",role:"developer"},
{id:1,name:"abubakar",role:"engineering manager"},
]
 
output: [
{id:1,name:"abubakar",role:"engineering manager"},
{id:2,name:"maham",role:"developer"},
{id:3,name:"shawal",role:"developer"},
]
 
You will use id ( key ) to filter out the unique values. */

function uniqueObjects(input)
{
    const map = new Map();
    input.forEach(obj => { map.set(obj.id, obj); });
    return Array.from(map.values());
}

const input = [
    {id: 1, name: "abubakar", role: "engineering manager"},
    {id: 2, name: "maham", role: "developer"},
    {id: 3, name: "shawal", role: "developer"},
    {id: 1, name: "abubakar", role: "engineering manager"}
];

const result = uniqueObjects(input);
console.log(result);
