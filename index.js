function reset(){
  document.getElementById("label").textContent = "0";
}

function inc(){

  const index = document.getElementById("label");
  let newindex = Number(index.textContent);


  newindex += 1;

  index.textContent = newindex;

}

function dec(){
  const label = document.getElementById("label");
  let newNum = Number(label.textContent);
  newNum -= 1 ;
  label.textContent = newNum ;
}

