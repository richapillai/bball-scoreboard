homePtEl = document.getElementById("home-pts")
guestPtEl = document.getElementById("guest-pts")

homeNameEl = document.getElementById("home-name")
guestNameEl = document.getElementById("guest-name")


let homePts=0
let guestPts=0

function plus_one_home(){
    homePts+=1
    homePtEl.textContent=homePts
    showWinner()
}

function plus_two_home(){
    homePts+=2
    homePtEl.textContent=homePts
    showWinner()
}

function plus_three_home(){
    homePts+=3
    homePtEl.textContent=homePts
    showWinner()
}

function plus_one_guest(){
    guestPts+=1
    guestPtEl.textContent=guestPts
    showWinner()
}

function plus_two_guest(){
    guestPts+=2
    guestPtEl.textContent=guestPts
    showWinner()
}

function plus_three_guest(){
    guestPts+=3
    guestPtEl.textContent=guestPts
    showWinner()
}

function showWinner(){
    if (homePts>guestPts) {
        homeNameEl.style.background= "rgb("+hexToRgb("38b000")+")"
        guestNameEl.style.background= "rgb("+hexToRgb("1B244A")+")"
    } else if (homePts<guestPts) {
        homeNameEl.style.background= "rgb("+hexToRgb("1B244A")+")"
        guestNameEl.style.background= "rgb("+hexToRgb("38b000")+")"
    } else {
        homeNameEl.style.background= "rgb("+hexToRgb("fb8500")+")"
        guestNameEl.style.background= "rgb("+hexToRgb("fb8500")+")"
    }
}

function reset(){
    homePts=0
    guestPts=0
    homePtEl.textContent=homePts
    guestPtEl.textContent=guestPts
    homeNameEl.style.background= "rgb("+hexToRgb("1B244A")+")"
    guestNameEl.style.background= "rgb("+hexToRgb("1B244A")+")"
}

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
}