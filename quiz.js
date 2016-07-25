// adding variables to elements obtained from the Dom

var height = document.getElementById("height");
var character = document.getElementById("char");
var button = document.getElementById("but");
// adding event listener to the button calling to run the first function
button.addEventListener("click", checkTree);

// this function checks to make sure that values are entered
// used ! to signify "not" and && for "and" to open prompt box if there is no height or character value
function checkTree(){
  if (!height.value && ! character.value){
    alert("please enter values in both boxes");
    // if height does not have a value
  }   else if (!height.value){
    alert("enter height");
    // if there is no character value
  }   else if (!character.value){
    alert("enter character");
  }   else {
    // stating the value of the tree variable
  var tree = {
    height: height.value,
    character: character.value
  }
  // calls the function printTree
  printTree(tree);
  }
}
// adding the even listen to the enter key to run checkTree as defined above if text is entered in the active element
addEventListener("keydown", function(event){
  if(event.keyCode === 13 && (height === document.activeElement || character === document.activeElement))
  {
    checkTree();
  }
});


function printTree(tree){
  // defining the variables for height and character
  var H = tree.height;
  var C = tree.character;
  // to begin the tree i has to be equal to one
  for (var i=1; i <= H; i++){
    // to center the tree each time the loop runs
    var numSpaces = H-i;
    // to produce the correct number of characters each time the loop runs
    var numChar = (2*i)-1;
// to console log the number of spaces and characters
    console.log(" ".repeat(numSpaces) + C.repeat(numChar));
  }

}





