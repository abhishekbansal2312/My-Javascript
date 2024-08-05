function check(str) {
    let checkp=str.replace(/[^p]/g,"").length;
    let checkt=str.replace(/[^t]/g,"").length;
    return checkp==checkt;

}

console.log(check("paattpss"));
