//ハンバーガーメニューを開く
const hb_menu = document.querySelector(".hb_menu");
const mo_nav = document.querySelector(".mo_nav");

hb_menu.addEventListener("click", function(){
  mo_nav.classList.toggle("nav_open");
  hb_menu.classList.toggle("hb_menu_open");
});
