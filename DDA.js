window.onload = function () {
    var canvas = document.querySelector('#canvas');
    var width = window.innerWidth;
    var height = window.innerHeight;

    var ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    var x, y, x1, y1, x2, y2, dx, dy, steps, xIncr, yIncr;

    x1 = parseInt(prompt("Masukan nilai x1", 150));
    y1 = parseInt(prompt("Masukan nilai y1", 150));
    x2 = parseInt(prompt("Masukan nilai x2", 300));
    y2 = parseInt(prompt("Masukan nilai y2", 300));

    dx = x2 - x1;
    dy = y2 - y1;

    if (dx > dy) {
        steps = Math.abs(dx);
    } else {
        steps = Math.abs(dy);
    }

    xIncr = dx / steps;
    yIncr = dy / steps;



    var i = 1;
    x = x1;
    y = y1;

    var time = setInterval(draw, 25);



    function draw() {
        if (i <= steps) {
            putPixel(x, y);
            x = x + xIncr;
            y = y + yIncr;

        } else {
            clearInterval(time);
        }
        i++;
    }

    function putPixel(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2, false);
        ctx.fillStyle = "rgba(225,225,225,0.7)";
        ctx.fill();
        ctx.closePath();
    }

}