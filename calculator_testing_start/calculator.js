const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
}

const multiply = function(a, b){
    return a * b;
}

const divide = function(a, b){
    return a / b;
}

const modulus = function(a, b){
    return a % b;
}

// const even = function(a){
//     if(a % 2 === 0){
//         return `is even`;
//     } else {
//         return `is not even`;
//     }
// }

// const odd = function(a){
//     if(a % 2 !== 0){
//         return `is odd`;
//     } else {
//         return `is not odd`;
//     }
// }

//DRY Function

const oddOrEven = function(a){
    if(a % 2 === 0){
        return `is even`;
    } else {
        return `is odd`;
    }
}




module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    oddOrEven
};
