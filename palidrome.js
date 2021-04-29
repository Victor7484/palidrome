//  wow ===> wow ===> true

// man  ====>nam ===> false 

const reverseString = (str)=>str.split("").reverse().join("");

const checkPalidromes = (str )=>reverseString(str) === str;

console.log(checkPalidromes("wow"));

console.log(checkPalidromes("man"));

// git init ===> start a new git repository locally

// git add ===> stage changes

// git commit -m "<commit message>"


// got to github.com aand create a repo with a name <name> (palidrome)

//  git remote add <name> <url>   ====>> configure remote repository

// git push <name>
