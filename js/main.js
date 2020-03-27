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

  if (dy > dx) {
      steps = Math.abs(dy);
  } else {
      steps = Math.abs(dx);
  }

  xIncr = dx / steps;
  yIncr = dy / steps;
  
  console.log("success");

  var i, x, y;
  for(i=0; i<steps; i++){
    // document.getElementById(`${Math.round(x)},${Math.round(y)}`).style.background=green;
    // fillPixel(elem,green);
    
    Math.round(x);
    Math.round(y);
    x += xIncr;
    y += yIncr;
    console.log(x);
    console.log(y);
  }
  


}

function bressenham(){
  var x1 = document.getElementById("x1").value;
  var y1 = document.getElementById("y1").value;
  var x2 = document.getElementById("x2").value;
  var y2 = document.getElementById("y2").value;

  var dx = x2 - x1;
  var dy = y2 - y1;

  var param = (2 * dy) - dx;

  var i; 
  var x = x1; 
  var y = y1;
  for (i=0; i<dx; i++){
    if (param < 0){
      x = x + 1;
      y = y;
      param = param + (2 * dy);
    }
    else{
      x = x + 1;
      y = y + 1;
      param = param + ((2 * dy) - (2 * dx));
    }
    console.log(x);
    console.log(y);
    console.log(param);
  }
  


}


