function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
window.onload = function () {
    let balls = document.getElementsByClassName("ball");   /*получить все элементы с ball*/
    for(let i = 0; i < 10; i++) {
        balls[i].style.border = "7px solid" + getRandomColor();  /* размер зрачка и его цвет*/
    }
}
window.onclick = function () {
    document.getElementById('body').style.background = getRandomColor();    /*меняет цвет при нажатии*/
}
let balls = document.getElementsByClassName("ball");
document.onmousemove = function(){                         /*используется для определения перемещения курсора мыши в любом направлении экрана*/
    let x = event.clientX * 100 / window.innerWidth + "%";        /*event.clientx Выводит горизонтальный координаты курсора мыши при нажатии кнопки мыши на элемент*/
    let y = event.clientY * 100 / window.innerHeight + "%";       /*event.clienty Выводит вертикальные координаты курсора мыши при нажатии кнопки мыши на элемент*/
    for(let i = 0; i < 10; i++){                                 /* window.innerWidth and window.innerHeigth Получает высоту и ширину текущего фрейма:*/
        balls[i].style.left      = x;
        balls[i].style.top = y;
        balls[i].style.transform = "translate(-"+x+",-"+y+")";
    }
}
