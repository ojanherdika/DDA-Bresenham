// generate table
const xSize = 50;
const ySize = 50;
const green = "#00ff00";
let container = document.querySelector('.table-container');
let tableContent = "<table>";
for (let row=ySize; row>=1; row--) {
    tableContent += "<tr>";
    for(let col=1; col<=xSize; col++) {
        tableContent += `<td class="pixel" id="${col},${row}"></td>`;
    }
    tableContent += "</tr>";
}
tableContent += "</table>";
container.innerHTML += tableContent;

const fillPixel = (elem, color) => {
  elem.style.background = color;
}


function dda(){
  var x1 = parseInt(document.getElementById("x1").value);
  var y1 = parseInt(document.getElementById("y1").value);
  var x2 = parseInt(document.getElementById("x2").value);
  var y2 = parseInt(document.getElementById("y2").value);

  var dx = x2 - x1;
  var dy = y2 - y1;

  var steps;

  if (dy > dx) {
      steps = Math.abs(dy);
  } else {
      steps = Math.abs(dx);
  }

  var xIncr = dx / steps;
  var yIncr = dy / steps;

  var i;
  var x = x1;
  var y = y1;
  for(i=0; i<steps; i++){
    elem = document.getElementById(`${Math.round(x)},${Math.round(y)}`);
    fillPixel(elem,green);
    
    Math.round(x);
    Math.round(y);
    x += xIncr;
    y += yIncr;
  }
}

function bressenham(){
  var x0 = parseInt(document.getElementById("x1").value);
  var y0 = parseInt(document.getElementById("y1").value);
  var x1 = parseInt(document.getElementById("x2").value);
  var y1 = parseInt(document.getElementById("y2").value);

  var dx = Math.abs(x1 - x0);
  var dy = Math.abs(y1 - y0);

  var sx = (x0 < x1) ? 1 : -1;
  var sy = (y0 < y1) ? 1 : -1;

  var err = dx - dy;

  while(true) {
    elem = document.getElementById(`${Math.round(x0)},${Math.round(y0)}`);
    fillPixel(elem,green);

    if ((x0 === x1) && (y0 === y1)) break;
    
    var e2 = 2*err;
    
    if (e2 > -dy) {
      err -= dy; x0  += sx; 
    }
    if (e2 < dx) {
      err += dx; y0  += sy; 
    }
  }
}

function reset(){
  location.reload();
}


