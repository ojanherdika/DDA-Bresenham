function print(s) { document.getElementById('out').innerHTML += s; }
function println(s) { document.getElementById('out').innerHTML += s + '\n'; }

var size = 5,
    i, j;

for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
        print("*");
    }
    println("");
}