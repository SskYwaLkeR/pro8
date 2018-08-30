var a = document.querySelector('#btn');

var b = document.querySelector('.card');

var c = document.querySelector('.image');

var d = document.querySelector('.content')

a.addEventListener('click', function(){

    d.classList.toggle('hidden3');
    c.classList.toggle('hidden');
    b.classList.toggle('hidden2');
    

});