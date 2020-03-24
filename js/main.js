function dda(){
  var x1 = document.getElementById("x1").value;
  var y1 = document.getElementById("y1").value;
  var x2 = document.getElementById("x2").value;
  var y2 = document.getElementById("y2").value;
  
  dx = x2 - x1;
  dy = y2 - y1;

  if (dx > dy) {
      steps = Math.abs(dx);
  } else {
      steps = Math.abs(dy);
  }

  xIncr = dx / steps;
  yIncr = dy / steps;

  var i,
  for (i=0; i<x1; i++){

  }

}

function bressenham(){
  var x1 = document.getElementById("x1").value;
  var y1 = document.getElementById("y1").value;
  var x2 = document.getElementById("x2").value;
  var y2 = document.getElementById("y2").value;


}



let container = document.querySelector('.table-container')
let tableContent = "<table>"
for (let row=ySize; row>=0; row--) {
    tableContent += "<tr>";
    for(let col=0; col<=xSize; col++) {
        tableContent += `<td class="pixel" id="${col},${row}" onclick="select(${col}, ${row})"></td>`;
    }
    tableContent += "</tr>";
}
tableContent += "</table>";
container.innerHTML += tableContent;