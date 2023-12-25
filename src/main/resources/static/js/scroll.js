let bg = document.getElementById("bg");
let rajini = document.getElementById("rajini");
let gleft = document.getElementById("gleft");
let gright = document.getElementById("gright");
let y19 = document.getElementById("y19");
let y75 = document.getElementById("y75");

let update=true;
window.addEventListener('scroll', ()=>{
    let v = window.scrollY;

    var position1 = bg.getBoundingClientRect();
    var position2 = rajini.getBoundingClientRect();
    console.log(Math.round(position1.bottom) +" "+Math.round(position2.bottom) +" "+v)

    if(Math.round(position1.bottom) > Math.round(position2.bottom)){
        console.log(gleft.style.bottom +" "+bg.style.bottom);
        gleft.style.left = -1.5 * v +'px';
        gright.style.right = -1.5 * v +'px';
        rajini.style.bottom =-1*v +'px';
        gleft.style.bottom =-1*v +'px';
        gright.style.bottom =-1*v +'px';
        // rajini.style.left = 43 - v*0.02 +'%';
        rajini.style.width = 15 + v*0.02 +'%';
        rajini.style.height = 70 + v*0.04 +'%';
        y19.style.top = -1.5 * v +'px';
        y75.style.top = -1.5 * v +'px';
    }
    else if(v<position2.bottom )
    {

        console.log("here")
        rajini.style.bottom = -v +'px';
        // rajini.style.left = 43+ v*0.3 +'%';

    }
});