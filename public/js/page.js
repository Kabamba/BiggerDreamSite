const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const menuLinks =  document.querySelectorAll('.menu ul li a');

// Responsive
const toggle = document.querySelector('.toggle');
const tab = document.querySelector('.tab');
const times = document.querySelector('.times');

const navigation = document.querySelector('.navigation');
const ul = document.querySelector('ul');

/** Function */
var onscroll =  e =>{
    if(this.document.documentElement.scrollTop){
        menu.classList.add('backg');
        header.classList.add('backg');
    }else{
        menu.classList.remove('backg');
        header.classList.remove('backg');
    }
}

var hover = function(a){
    let li = a.parentNode;
    let div = a.parentNode.parentNode.parentNode;

     if(li.classList.contains('active')){
         return false;
     }

     div.querySelector('ul .active').classList.remove('active');
    
     li.classList.add('active');
}

for(var i = 0; i < menuLinks.length; i++){
    let link = menuLinks[i];
    link.addEventListener('click', function(e){
        hover(this);
    });
}

let hash = window.location.href;
let a = document.querySelector('.menu ul li a').href;
console.log(a);

// Responsive
var toggleNav = e =>{
    if(navigation.style.maxHeight){
        navigation.style.maxHeight  = null;

    }else{
        navigation.style.maxHeight = navigation.scrollHeight + 'px';
    }

    toggle.classList.toggle('change');

}

var tabClick = e =>{
    if(ul.style.width){
        ul.style.width = null;

    }else{
        ul.style.width = '240px'
    }
}

var timesClick = function(e){
    if(ul.style.width){
        ul.style.width = null;

    }
}


/** Event */
window.addEventListener('scroll', onscroll);
toggle.addEventListener('click', toggleNav);
tab.addEventListener('click', tabClick);
times.addEventListener('click', timesClick);
