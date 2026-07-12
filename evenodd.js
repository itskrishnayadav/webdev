function isEvenOdd (number){
    if (number % 2 === 0){
        return `the number ${number} is even`;

    }else{
        return `the number ${number} is odd`;
    }
}

console.log(isEvenOdd(4));
console.log(isEvenOdd(5));
console.log(isEvenOdd(6));
console.log(isEvenOdd(101));
console.log(isEvenOdd(106));