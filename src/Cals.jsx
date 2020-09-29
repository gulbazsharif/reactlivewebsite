

function add (a, b) {
    let sum=a+b;
    return sum;
}

function sub (a, b) {
    let sub=a-b;
    return sub;
}
function div (a, b) {
    let div=a/b;
    div=div.toFixed(2); 
    return div;
}
function mult (a, b) {
    let mul=a*b;
    return mul;
} 


export {add, sub, div, mult};