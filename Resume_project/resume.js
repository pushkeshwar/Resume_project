var navbar=document.querySelectorAll('.nav-menu a');
var scrollinterval;
for(var i=0;i<navbar.length;i++){
    navbar[i].addEventListener("click",function(event){
        event.preventDefault();
        var targetsectionid=this.textContent.trim().toLowerCase();
       // console.log(targetsectionid);
       var targetsection=document.getElementById(targetsectionid);
       scrollinterval=setInterval(scrollvertically,50,targetsection);
    });
}

 function scrollvertically(targetsection){
    var cordinates=targetsection.getBoundingClientRect();
        if(cordinates.top<=0){
            clearInterval(scrollinterval);
            return;
        }
        window.scrollBy(0,50);
 }


var ProgressBars=document.getElementsByClassName('skill-progress2');
// console.log(ProgressBars);
var BarsContainer=document.getElementById('skill-body');
window.addEventListener('scroll',checkscroll);
var AnimationDone=false;


function InitialiseBar(){
    for(let bar of ProgressBars){
        bar.style.width=0+'%';
    }
}

InitialiseBar();

function checkscroll(){
    var BarsContainerCordinates=BarsContainer.getBoundingClientRect();
    if( AnimationDone==false && BarsContainerCordinates.top<=window.innerHeight){
     AnimationDone=true;
     console.log(" bar-body");
         fillbars();
    }
}

function fillbars(){
     for(let bar of ProgressBars){
        let targetwidth=bar.getAttribute('data-progress-value');
        // console.log(targetwidth);
        // console.log(bar.style.width);
        let initialwidth=0;
        var StopProgress=setInterval(function(){
            if(bar.style.width>=targetwidth){
                clearInterval(StopProgress);
                return;
            }
            // console.log("yes");
            initialwidth+=5;
            bar.style.width=initialwidth+'%';
            console.log(bar.style.width);
            // console.log(initialwidth);
        },50);
     }
}
