let prev = document.getElementById('prev');
let next = document.getElementById('next');
let image = document.querySelector('.images');
let items = document.querySelectorAll('.images .item');
let contents = document.querySelectorAll('.content .item');

let rotate = 0;
let active = parseInt(localStorage.getItem('semanaActiva')) || 0;
localStorage.removeItem('semanaActiva'); // opcional: borra el dato después de usarlo
let countItem = Math.min(items.length, contents.length); // Para que no haya desfase
let rotateAdd = 360 / items.length;

function nextSlider(){
    active = active + 1 > countItem - 1 ? 0 : active + 1;
    rotate = rotate + rotateAdd; 
    show();
}
function prevSlider(){
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    rotate = rotate - rotateAdd; 
    show();     
     
}
function show(){
    image.style.setProperty("--rotate", rotate + 'deg');
    image.style.setProperty("--rotate", rotate + 'deg');
    contents.forEach((content, key) => {
        if(key == active){
            content.classList.add('active');
        }else{
            content.classList.remove('active');
        }
    })
}
next.onclick = nextSlider;
prev.onclick = prevSlider;
// const autoNext = setInterval(nextSlider, 3000);

function irAEjercicio(semanaIndex, url) {
    localStorage.setItem('semanaActiva', semanaIndex);
    window.location.href = url;
}
show();

