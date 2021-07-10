//Function 1
function addAndMultiply (intOne, intTwo) {
    if (typeof(intOne) == "number" && typeof(intTwo) == "number") {
        var added = intOne + intTwo;
        var multiplied = added * 5;
        return multiplied;
    }else {
        return console.log("Invalid Input");
    }
}

//Test 1 for Function 1
var testAddAndMultOne = addAndMultiply(5, 2);

if (testAddAndMultOne != undefined) {
    console.log(testAddAndMultOne);
}

//Test 2 for Function 1. This test should fail.
var testAddAndMultTwo = addAndMultiply("t", 2);

if (testAddAndMultTwo != undefined) {
    console.log(testAddAndMultTwo);
}

//Test 3 for Function 1
var testAddAndMultThree = addAndMultiply(11, 6);

if (testAddAndMultThree != undefined) {
    console.log(testAddAndMultThree);
}

//Space out separate function tests for readability
console.log();

//Function 2
function checkStringLength (string) {
    if (string.length > 10) {
        return true;
    } else if (string.length <= 10) {
        return false;
    } else {
        return console.log("Invalid Input");
    }
}

//Test 1 for Function 2
var testCheckStringOne = checkStringLength("This is a very long string to check");

if (testCheckStringOne != undefined) {
    console.log(testCheckStringOne);
}

//Test 2 for Function 2
var testCheckStringTwo = checkStringLength("Hello!");

if (testCheckStringTwo != undefined) {
    console.log(testCheckStringTwo);
}

//Test 3 for Function 2 This test should fail.
var testCheckStringThree = checkStringLength(5);

if (testCheckStringThree != undefined) {
    console.log(testCheckStringThree);
}

//Space out separate function tests for readability
console.log();

//Function 3
function returnFirstElement(array) {
    var startsWithPh = array.filter(ar => ar.startsWith("Ph"));
    
    if (startsWithPh.length > 0) {
        return startsWithPh[0];
    } else {
        console.log("There are no words that start with 'Ph'");
    }
}

//Test 1 for Function 3
var testArrayOne = ["Hello", "Phantom", "Cake", "Javascript"];
var checkArrayOne = returnFirstElement(testArrayOne);
if (checkArrayOne != undefined) {
    console.log(checkArrayOne.toString());
}

//Test 2 for Function 3. This test should fail.
var testArrayTwo = ["Apple", "Pizza", "Cake", "Python"];
var checkArrayTwo = returnFirstElement(testArrayTwo);
if (checkArrayTwo != undefined) {
    console.log(checkArrayTwo.toString());
}

//Test 3 for Function 3
var testArrayThree = ["Monkey", "Photograph", "Phillip", "Chair", "Tea"];
var checkArrayThree = returnFirstElement(testArrayThree);
if (checkArrayThree != undefined) {
    console.log(checkArrayThree.toString());
}

