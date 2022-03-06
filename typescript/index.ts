let obj = {
  name: "dante",
  age: 24
}


console.log(obj)

let fullname: string;
fullname = "danteedmonson";


function add(n1: number, n2: number) {
  return n1 + n2;
}

const result = add(4, 5);
console.log(result)

// race is an optional property to the user object being passed to userInfo
function userInfo(user:{name: string; id: number; age: number; race?: string}) {
  // if we want to use the race proprty, make sure it exist
  if(user.race !== undefined) {
    console.log(`the user is ${user.race}`)
  }
}

// array type annotation
let ages: number[]; 
ages = [1,2,6,34,87,34,76,93,34];


function printID(id: number | string) {
  if(typeof id == 'string')
    console.log(id.toUpperCase());
  else
    console.log(id);
}

