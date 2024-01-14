const marks =60;
let grade;

if(marks >= 90){
    grade ='a';
}else if(marks >= 70 && marks <+ 90){
    grade = 'b';
}else if(marks >= 50 && marks <70){
    grade = 'c';
} else {
    grade = 'f';
}

console.log(grade)