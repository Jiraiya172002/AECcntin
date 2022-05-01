console.log("all working..")
let bur = document.querySelector('.burger');
let cont = document.querySelector('.container');
let nav1 = document.querySelector('.navbar_lst');
let nav2 = document.querySelector('.navbar_2st');
let search = document.querySelector('.search_btn');

bur.addEventListener('click', function(){
    nav1.classList.toggle('visib-nav-resp');
    nav2.classList.toggle('visib-nav-resp');
    search.classList.toggle('visib-nav-resp');
    cont.classList.toggle('ht-nav-resp');
});






