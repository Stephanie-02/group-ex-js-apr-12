let data = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

function isPrime(num) {
  if (num == 2 || num == 3) return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0) return false;
  return true;
}

function doubleArray(arr) {
  return arr.map((number) => number*2);
}

 var result = doubleArray(data);
 console.log(result);

 function onlyPrimes(arr) {
  return arr.filter((el) => isPrime(el));
 }

 var primes = onlyPrimes(data);
 console.log(primes);

 function convertArr(arr){
  let convertedArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newObj = {
      number: arr[i],
      isPrime: isPrime(arr[i]),
    }
    convertedArr.push(newObj);
  }
  return convertedArr;
 }

 var converted = convertArr(primes);
 console.log(converted);

 function highestPrime(arr) {
  let sortedArr = arr.sort((a, b) => b.number-a.number);
  let highestnr = sortedArr[sortedArr.length-1];
  return highestnr;
 }

 var biggest = highestPrime (converted);
 console.log(biggest);

 function lowHigh(arr){
  return arr.sort((a, b) => a.number-b.number);
 }

 var sortFrom =lowHigh (converted);
 console.log(sortFrom);