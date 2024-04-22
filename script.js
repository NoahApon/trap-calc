document.getElementById("calculate").addEventListener("click", calculation);

function calculation () {
var height = +document.getElementById("height").value;
var top = +document.getElementById("top").value;
var bottom = +document.getElementById("bottom").value;
var areaTrapezoid = (top + bottom) / 2 * height;
var areaTrapezoid = areaTrapezoid.tofixed(1);
document.getElementById("Output").innerHTML = areaTrapezoid;
}