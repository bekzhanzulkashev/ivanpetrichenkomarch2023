"use strict";

// if (4 == 7) {
//     console.log('Ok!');
// } else {
//     console.log('Not right!');
// }

// const num = 600;
// if (num < 49){
//     console.log('Error');
// } else if (num > 100){
//     console.log('Too big');
// } else {
//     console.log('Right');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

const num = 49;
switch (num){
    case 49:
        console.log('Errorgali');
    break;
    case 100:
        console.log('Error');
    break;
    case 50:
        console.log('Right');
    break;
    default:
        console.log('Not this case');
    break;
}