var audio1 = document.getElementById("audiorev-in-out");
var rdeg = 0

function play1() {
    audio1.play()
}
function scrollR(){
    document.getElementById("revdiv").addEventListener("wheel", scrollRmove)
}
function scrollRmove(event){
    if (event.deltaY < 0){
        rdeg += 60
        document.getElementById("revcimg").style.transform = "rotate("+rdeg+"deg)";
    }
    else if (event.deltaY > 0){
        rdeg -= 60
        document.getElementById("revcimg").style.transform = "rotate("+rdeg+"deg)";
    }
}

function scrollRstop(){
    document.getElementById("revdiv").removeEventListener('wheel',scrollRmove);
}

function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
   
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
 };
}

function enableScroll() {
    window.onscroll = function() {};
}

document.getElementById("revspace").addEventListener('mouseover',play1);
document.getElementById("revdiv").addEventListener('mouseover', scrollR);
document.getElementById("revdiv").addEventListener('mouseout',scrollRstop);
document.getElementById("revdiv").addEventListener('mouseover', disableScroll);
document.getElementById("revdiv").addEventListener('mouseout', enableScroll);
