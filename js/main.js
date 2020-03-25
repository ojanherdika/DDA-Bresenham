// generate table
const xSize = 50;
const ySize = 50;
let container = document.querySelector('.table-container');
let tableContent = "<table>";
for (let row=ySize; row>=1; row--) {
    tableContent += "<tr>";
    for(let col=1; col<=xSize; col++) {
        tableContent += '<td class="pixel" id="${col},${row}""></td>';
    }
    tableContent += "</tr>";
}
tableContent += "</table>";
container.innerHTML += tableContent;

const fillPixel = (elem, color) => {
  elem.style.background = color;
}


function dda(){
  var x1 = document.getElementById("x1").value;
  var y1 = document.getElementById("y1").value;
  var x2 = document.getElementById("x2").value;
  var y2 = document.getElementById("y2").value;
  
  dx = x2 - x1;
  dy = y2 - y1;

  if (dy > dx) {
      steps = Math.abs(dy);
  } else {
      steps = Math.abs(dx);
  }

  xIncr = dx / steps;
  yIncr = dy / steps;

  var i,x,y;
  for(i=0; i<steps; i++){
    Math.round(x);
    Math.round(y);
    x += xIncr;
    y += yIncr;
    
  }
  


}

function bressenham(){
  var x1 = document.getElementById("x1").value;
  var y1 = document.getElementById("y1").value;
  var x2 = document.getElementById("x2").value;
  var y2 = document.getElementById("y2").value;


}


