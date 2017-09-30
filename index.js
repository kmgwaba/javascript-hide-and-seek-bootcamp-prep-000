function getFirstSelector(selector){
return document.querySelector(selector)

}

function nestedTarget(){
   document.querySelector("div.target")
   return nested
}

function deepestChild(){
// get the grand-node
  var node =  document.getElementById("grand-node")
// get the first child of the grand node
var child = node.children[0]
// get the first child of the first child
// etc until the there are no children
// return the deepest
while (child){
  node = child
  child = node.children[0]

}
return node

}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++){
    lis[i].innerHTML= parseInt(lis[i].innerHTML) + n, 10
  }
  return  lis
}
