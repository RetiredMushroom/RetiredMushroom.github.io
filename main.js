var audio1 = document.getElementById("audiorev-in-out")
var audio2 = document.getElementById("audiorevspin")

function play1() {
    audio1.play()
}
function stop1() {
    audio1.stop()
}
document.getElementById("revspace").addEventListener('mouseover',play1)
document.getElementById("revspace").addEventListener('mouseout',stop1)
