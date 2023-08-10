//-----------------------------STRING--------------------------------------------------
//[1]
// let b = new String(a);
// console.log(a === b); //both a and b are not equal
// When using the == operator, x and y are equal:
// When using the === operator, x and y are not equal:

//[2]:string methods------------------------------------------

// String length
// String slice()

// let a = "vipulvijay";
// console.log(a.slice(-5, -1));

// String substring()
// String substr()//second parameter is length

// String replace()
// let a = "vipul";
// a.replace('vi', 'bi');
// console.log(a.replace('vi', 'bi'));
// //the changes are in new string ,not in orginal string

// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()

// String padStart()
// let a = "vi";
// console.log(a.padStart(6, 'j'));

// String padEnd()
// String charAt()
// String charCodeAt()
// String split()

//[3] String searching methods-------------------------------------------------------------------

// String indexOf()
//return first match index
// let a = "vipul vijay ghadi";
// console.log(a.indexOf('viul'));

//Both indexOf(), and lastIndexOf() return -1 if the text is not found:

// Did You Notice ?
//     The two methods, indexOf() and search(), are equal ?

//     They accept the same arguments(parameters), and
// return the same value ?

//     The two methods are NOT equal.These are the differences :

//     The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values(regular expressions).


// String lastIndexOf()
// String search()
let a = "hi bhau i am hitesh hirekar";
let itr = a.matchAll("hi");
console.log();
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()