let targetnumber =8;

let sum = 0;
let currentnumber = 1;

do{
    sum +=currentnumber;
    currentnumber++;
}while(currentnumber <= targetnumber);

console.log('sum of number from 1 to ${targetnumber} : ${sum}');