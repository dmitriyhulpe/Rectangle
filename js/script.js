let rectangle = document.querySelector('#rectangle');

let x = 0, y = 0, X = 0, Y = 0;

function rectangleCalc() {
    let Xmin = Math.min(x, X);
    let Xmax = Math.max(x, X);

    let Ymin = Math.min(y, Y);
    let Ymax = Math.max(y, Y);

    rectangle.style.left = Xmin + 'px';
    rectangle.style.top = Ymin + 'px';
    rectangle.style.width = Xmax - Xmin + 'px';
    rectangle.style.height = Ymax - Ymin + 'px';
}

onmousedown = function(event) {
    rectangle.hidden = 0;
    x = event.clientX;
    y = event.clientY;
    rectangleCalc();
};

onmousemove = function(event) {
    X = event.clientX;
    Y = event.clientY;
    rectangleCalc();
};

onmouseup = function(event) {
    rectangle.hidden = 1;
};