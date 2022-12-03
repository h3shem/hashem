let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let Nouvil = document.querySelector('.Nouvil');
window.onscroll=function(){
    
    let value= scrollY;
    console.log(value);
    Nouvil.style.fontSize = value + 'px';
    stars.style.left=value + 'px';
    moon.style.top=value*4 + 'px';
    mountains3.style.top=value*2 + 'px';
    mountains4.style.top=value*1.5 + 'px';
    river.style.top=value + 'px';
    boat.style.left=value*3 + 'px';
    if(scrollY>=67){
        Nouvil.style.fontSize = 67 + 'px';   
        Nouvil.style.position = 'fixed';   
    }
    if(scrollY>=400){
      
        Nouvil.style.display= 'none';   
    }
    else{
        Nouvil.style.display = 'block'; 
    }

    if(scrollY>=78){
    document.querySelector('.main').style.background ='linear-gradient(#015e62 , #7d7dff)';
        
    }
    else{
        document.querySelector('.main').style.background ='linear-gradient(-45deg,#2c0023 , #0e0007)';

    }
    
}
