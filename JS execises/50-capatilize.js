let string = "the quick brown fox";

function capitalize(string) {   
    let str=string.split(" ");
    let newStr=[];
    for(let i=0;i<str.length;i++){
        newStr.push(str[i].charAt(0).toUpperCase()+str[i].slice(1));
    }
    console.log(newStr.join(" "));

}

capitalize(string); // Output: "The Quick Brown Fox"