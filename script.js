console.log("all working..")
let bur = document.querySelector('.burger');
let cont = document.querySelector('.container');
let nav1 = document.querySelector('.navbar_lst');
let nav2 = document.querySelector('.navbar_2st');
let searchbtn = document.querySelector('.search_btn');
let cross = document.querySelector('.cross')

bur.addEventListener('click', function () {
    nav1.classList.toggle('visib-nav-resp');
    nav2.classList.toggle('visib-nav-resp');
    searchbtn.classList.toggle('visib-nav-resp');
    cont.classList.toggle('ht-nav-resp');
});

bur.addEventListener('click', function () {
    bur.classList.toggle('cross')
    console.log("all working..")
});

let search = document.getElementById('search')
let search_btn = document.getElementById('search_btn')
search.addEventListener("input", function() {
    let inputval = search.value.toUpperCase();
    let items = document.getElementsByClassName('ss2')
    Array.from(items).forEach(function(element) {
        let textm = element.getElementsByClassName("bigtxt")[0].innerText && element.getElementsByClassName("smalltxt")[0].innerText
        if(textm.includes(inputval)){
            element.style.display="contents"
        
        }
        else{
            element.style.display="none"
       
        }

    })
    
    // console.log("okk", inputval)
    // console.log("okk", items)
    // console.log("okk", element)
    // console.log("okk", textm)


})
    



