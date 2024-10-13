var audio1 = document.getElementById("audiorev-in-out");
var audio2 = document.getElementById("audiocspin");
var rdeg = 0;

function play1() {
    audio1.play()
}
function scrollR(){
    document.getElementById("revdiv").addEventListener("wheel", scrollRmove)
}
function scrollRmove(event){
    if (event.deltaY < 0){
        audio2.play()
        rdeg += 60
        document.getElementById("revcimg").style.transform = "rotate("+rdeg+"deg)";
    }
    else if (event.deltaY > 0){
        audio2.play()
        rdeg -= 60
        document.getElementById("revcimg").style.transform = "rotate("+rdeg+"deg)";
    }

    if (rdeg == 360 || rdeg == -360){
        rdeg = 0
    }
}

function scrollRstop(){
    document.getElementById("revdiv").removeEventListener('wheel',scrollRmove);
}

function pageSwitch() {
    document.getElementById("revdiv").addEventListener('click', function (){
        if (rdeg == 0){
            document.location.href = 'index.html'
        }
        else if (rdeg == 60){
            document.location.href = 'projects.html'
        }
    })
}

function disableScroll(){
    document.body.style.overflow = "hidden";
}
function enableScroll(){
    document.body.style.overflow = "auto";
}

document.getElementById("revspace").addEventListener('mouseover',play1);
document.getElementById("revdiv").addEventListener('mouseover', scrollR);
document.getElementById("revdiv").addEventListener('mouseout',scrollRstop);
document.getElementById("revdiv").addEventListener('mouseover', disableScroll);
document.getElementById("revdiv").addEventListener('mouseout', enableScroll);

document.getElementById("revdiv").addEventListener('mouseover', pageSwitch);
