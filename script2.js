let snackhut = document.getElementById('snack_hut');
let canteen = document.getElementById('cant_teen');
console.log(snackhut)
console.log(canteen)
snackhut.addEventListener('click', function(){
    location.href = 'snacker.html'
    console.log('working')
});
canteen.addEventListener('click', function(){
    location.href = 'canteen.html'
    console.log('working')
});
