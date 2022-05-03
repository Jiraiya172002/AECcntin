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
    let items = document.getElementsByClassName('item')
    console.log(items)
    Array.from(items).forEach(function(element) {
        let match1 = element.getElementsByTagName("p")[0].innerText.toUpperCase() 
        let match2 = element.getElementsByTagName("p")[1].innerText.toUpperCase() 
        // console.log(textm)
        if(match1.includes(inputval) || match2.includes(inputval)){
            element.style.display="flex"
        
        }
        else{
            element.style.display="none"
       
        }

    })


})
    



