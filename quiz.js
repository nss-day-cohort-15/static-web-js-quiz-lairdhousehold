
// this button starts the function
var button = document.getElementById("but");
button.addEventListener("click", function() {
    var tree= {
      height : "",
      char : ""
    };
    // this converts these into a value
tree.height = document.getElementById ("height").value;
tree.char = document.getElementById ("char").value;
// this below sets up alerts
function checkTree (){
  // body...


if( ParseInt(tree.height) ==="" || tree.char==="")

  alert('Please enter valid information');
}
// this below builds the tree
for (var i = 0; i < tree.height; i++){
var treeSeed =" ".repeat(tree.height - i);
treeSeed += tree.character.repeat((2*i) + 1);
    console.log(treeSeed);





