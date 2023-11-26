// isEqual using function declaration
function isEqual(x, y) {
  if (x === y) {
    console.log('4: They are equal in type and value', x === y);
  } else if (x == y) {
    console.log('6: They are equal in value', x == y);
  } else {
    console.log('8: They are not equal');
  }
  return;
}

// Logs "They are equal in type and value"
isEqual(10, 10);

// Logs "They are equal in value"
isEqual('10', 10);

// isEqualTakeTwo using function expression 
var isEqualTakeTwo = function (x, y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
};

// Logs "They are not equal"
isEqualTakeTwo(10, true);
