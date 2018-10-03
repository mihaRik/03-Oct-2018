let images = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg", "img/06.jpg"];
let col, item, img;
img = document.querySelector(".item>img");

images.forEach(function (value, index) {
    createImg(value);
    createItem();
    createCol();
    document.querySelector(".container>.row").appendChild(col);
    img.addEventListener("click", function () {
        createBigImg(value);
        creatBigimgItem();
        createOverlay();
        createImgLeft();
        createImgRight();
        imgLeft.addEventListener("click", function () {
            index--;
            if (index < 0) {
                index = (images.length - 1);
            }
            bigImg.src = images[index];
        })
        imgRight.addEventListener("click", function () {
            index++;
            if (index > images.length - 1) {
                index = 0;
            }
            bigImg.src = images[index];
        })
    })
});
function createCol() {
    col = document.createElement("div");
    col.classList.add("col-md-4");
    col.classList.add("mx-auto");
    col.classList.add("my-4");
    col.appendChild(item);
}
function createItem() {
    item = document.createElement("div");
    item.className = "item";
    item.appendChild(img);
}
function createImg(imgSrc) {
    img = document.createElement("img");
    img.className = "img-fluid";
    img.src = imgSrc;
}
function createOverlay() {
    overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);
    overlay.addEventListener("click", function () {
        document.body.removeChild(overlay);
        document.body.removeChild(bigImgItem);
    })
}
function createBigImg(bigImgSrc) {
    bigImg = document.createElement("img");
    bigImg.className = "img-fluid";
    bigImg.src = bigImgSrc;
}
function creatBigimgItem() {
    bigImgItem = document.createElement("div");
    document.body.appendChild(bigImgItem);
    bigImgItem.className = "bigImgItem";
    bigImgItem.appendChild(bigImg);
}
function createImgLeft() {
    imgLeft = document.createElement("div");
    imgLeft.className = "imgLeft";
    bigImgItem.appendChild(imgLeft);
    iconLeft = document.createElement("i");
    iconLeft.className = "fas fa-angle-left";
    imgLeft.appendChild(iconLeft);
}
function createImgRight() {
    imgRight = document.createElement("div");
    imgRight.className = "imgRight";
    bigImgItem.appendChild(imgRight);
    iconRight = document.createElement("i");
    iconRight.className = "fas fa-angle-right";
    imgRight.appendChild(iconRight);
}
