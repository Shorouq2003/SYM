let menu = document.querySelector('menu-icon');
let nav1ist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    nav1ist.classList.toggle('open');
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    nav1ist.classList.remove('open');

}
