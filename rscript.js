let search = document.getElementById('search')
let search_btn = document.getElementById('search_btn')
search.addEventListener("input", function() {
    let inputval = search.value.toUpperCase();
    let items = document.getElementsByClassName('item')
    console.log(items)
    Array.from(items).forEach(function(element) {
        let match1 = element.getElementsByTagName("p")[0].innerText.toUpperCase() 
        // console.log(textm)
        if(match1.includes(inputval)){
            element.style.display="flow-root"
        
        }
        else{
            element.style.display="none"
       
        }

    })


})