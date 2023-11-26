// Change the values and operators below to test your algorithm meets all conditions

var x = 30;

var expression1 = (x > 25); // 

var expression2 = (x < 50); // 

// Write Your JavaScript Code Here
if (expression1 && expression2){
    console.log('true','true');
}

if (!expression1 && expression2) {
    console.log('false','true');
}


if (expression1 && !expression2) {
    console.log('true','false');
}

if (!expression1 && !expression2) {
    console.log('false','false');
}

// true and true
// false and true
// true and false
// false and false

