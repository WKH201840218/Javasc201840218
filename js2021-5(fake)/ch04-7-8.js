let output = ""

for(let a = 0; a < 10; a++) {
    for(let b = 0; b > 10-a; b++) {
        output += "";
    }
for(let b = 0; b < a+1; a++) {
            output += "*";
}
for(let b = 1; a < a+1; b++) {
        output += "*";
    }
    output += "\n";
}
console.log(output);





// for(let i = 0; i < 10; i++) {
//     for (let j = 0; j < i+1; j++) {
//         output += "*";
//     }
//     output += "\n";
// }
// output += "\n"; 
// console.log(output);

// *
// **
// ***

// ***
// **
// *