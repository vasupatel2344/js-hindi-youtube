
let primes = [2, 347865, 5, 7];
console.log(primes.length);

let prime = primes[primes.length - 4];

console.log(prime);


function fact(x) {           //  ??
    if (x > 1) return x * fact(x - 1);
    else return 1;
}

let facts = fact(5);
console.log(facts);



let x = 2, y = 3;
let z = (x > 3) || (y < 3);

console.log(z);

