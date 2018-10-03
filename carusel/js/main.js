let images = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg", "img/06.jpg", "img/07.jpg", "img/08.jpg", "img/09.jpg", "img/10.jpg"];

// let col = document.querySelector(".col-md-2");
let row = document.querySelector(".row");
let btn = document.getElementById("btnNext");
// btn.addEventListener("click", function () {
//     let nextCol=document.createElement("div");
//     nextCol.classList.add("col-md-2");
//     nextCol.classList.add("red");
//     row.appendChild(nextCol);
//     let firstCol=document.querySelector(".col-md-2:first-child");
//     row.removeChild(firstCol);
// })
let position = 0;

let colPos = 0;
images.forEach(function (value, index) {
    let col = document.createElement("div");
    row.appendChild(col);
    col.classList.add("col-md-2");
    colPos+= 190;
    col.style.left=colPos+"px";
    console.log(colPos,col.style.left)
});