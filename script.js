/**
 * Exercise #1
 * Function firstFunction
 * @param first - string
 * @param second - string
 * 
 * Ana and Maria are playing with letter tiles
 * and Maria is trying to make the same word Ana has.
 * for example: Ana has 'eecoff' and Maria has 'coffee'.
 * 
 * Maria wants to know how many tiles she needs to move, but there's a catch:
 * The only move she can make is drop the first letter and add it at the end.
 * 
 * Create a function that receives 2 strings and returns the number of moves needed.
 * if there's no possibilties, return -1.
 */

// examples
//console.log(firstFunction('computer', 'putercom')); // should return 5
//console.log(firstFunction('ternetin', 'internet')); // should return 2
//console.log(firstFunction('planet', 'tenalp')); // should return -1



function firstFunction(first, second) {
    let swaps = 0;
    
    while(first != second && (swaps < second.length + 1)) {
        second = swapChars(second);
        swaps++;
    }
    return((swaps < second.length + 1) ? swaps : -1);
}

function swapChars(str) {
    return str.slice(1) + str.slice(0,1);
}


/** -------------------------------------------- */

/**
 * Exercise #2
 * Function secondFunction
 * @param string - string
 * 
 * Create a function that receives sequence of numbers as a string
 * and returns another string with the same numbers,
 * but sorted by the sum of its caracthers.
 * If 2 numbers are of the same value, sort them as strings.
 * 
 */

// examples
console.log(secondFunction("280 456 1111 99 1000")); // should return "1000 1111 280 456 99"
console.log(secondFunction("74 56 65 100 99 180 68 86 90")); //should return 100 180 90 56 65 74 68 86 99
//console.log(digitalSumSort("74 56 65 100 99 180 68 86 90"));

// Comment from Tomas:
// In the second function-call, the projected return value seems a bit off. 180 and 90 got the same 
// digit sum, so its sorted going high -> low, but in the following numbers (56, 65, 74 etc) it 
// is sorted going low -> high. 

function secondFunction(string) {
    // create an array of the input string
    return string.split(" ")
    .map(n => {
        // create new array with both original values and digit sums
        return [digitSum(n), n];
    })
    .sort((a,b) => {
        // sort numbers either by original value or digit sum
        return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
    })
    .map(n => {
        // returns sorted array with original values
        return n[1];
    })
    // convert array to string again
    .join(" ");
}

function digitSum(n) {
    var s = 0;
    while (n) {
        s += n % 10;
        n = Math.floor(n/10)
    }
    return s;
  }

  



/** -------------------------------------------- */

/**
 * Exercise #3
 * Function thirdFunction
 * @param Routes - array[]
 * 
 * Samantha travels a lot.
 * She found a group of plane tickets in her shelf, but she
 * can't exactly remember the order of the cities she visited.
 *
 * Create a function that receives an array of origin-destination tickets
 * and return the entire trip, ordered by city visited.
 * 
 */
  
// examples
thirdFunction([
  ["MNL", "TAG"],
  ["CEB", "TAC"],
  ["TAG", "CEB"],
  ["TAC", "BOR"]
]) // should return "MNL, TAG, CEB, TAC, BOR"

thirdFunction([
  ["Chicago", "Winnipeg"],
  ["Halifax", "Montreal"],
  ["Montreal", "Toronto"],
  ["Toronto", "Chicago"],
  ["Winnipeg", "Seattle"]
]) // should return "Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle"

thirdFunction([
  ["USA","BRA"],
  ["JPN","PHL"],
  ["BRA","UAE"],
  ["UAE","JPN"]
]) // should return "USA, BRA, UAE, JPN, PHL"



function thirdFunction(routes) {
    
    trip = routes[0];

    while(trip.length < (routes.length + 1)) {
        routes.map(route => {
            if(trip.find(r => r == route[0]) && !(trip.find(r => r == route[1]))){
                trip.push(route[1]);
            }
            if(trip.find(r => r == route[1]) && !(trip.find(r => r == route[0]))) {
                trip.unshift(route[0]);
            }
        });
    }
    return trip;
}
