let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

let colorPicker = document.getElementById("color");
let weightSilder = document.getElementById("weight");
let weightSpan = document.getElementById("weightValue");

let color = 'black';
let weight = 10;
let isMouseDown = false;

ctx.lineWidth = weight;

colorPicker.addEventListener("change", function () {
    color = colorPicker.value;
});

setInterval(() => weightSpan.innerHTML = weightSilder.value, 0)

cvs.addEventListener('mousedown', function () {
    isMouseDown = true;
});

cvs.addEventListener('mouseup', function () {
    isMouseDown = false;
    ctx.beginPath();
});

cvs.addEventListener('mousemove', function (event) {
    if (isMouseDown) {
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(event.clientX, event.clientY, weight / 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(event.clientX, event.clientY);
    }
});

weightSilder.addEventListener('change', function(){
    weight = weightSilder.value;
    ctx.lineWidth = weight;
})

function fill() {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, cvs.width, cvs.height);
}

function clear_btn() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

