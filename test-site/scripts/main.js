let my_iamge = document.querySelector('img')
my_iamge.onclick = function(){
    let my_src = my_iamge.getAttribute('src');
    if(my_src == 'images/cartoon1.ico'){
        my_iamge.setAttribute('src','images/cartoon2.ico')
    }else{
        my_iamge.setAttribute('src','images/cartoon1.ico')
    }
}

let my_button = document.querySelector('button')
let my_heading = document.querySelector('h1')

function set_user_name(){
    let my_name = prompt('Please enter your name')
    if(!my_name){
        set_user_name()
    }else{
        localStorage.setItem('name',my_name)
        my_heading.textContent = "Mozilla is cool" + my_name
    }
}

if(!localStorage.getItem('name')){
    set_user_name()
}else{
    let stored_name = localStorage.getItem('name')
    my_heading.textContent = 'Mozilla is cool ' + stored_name
}

my_button.onclick = function(){
    set_user_name()
}