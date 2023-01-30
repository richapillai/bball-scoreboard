homePtEl = document.getElementById("home-pts")
guestPtEl = document.getElementById("guest-pts")

let homePts=0
let guestPts=0

function plus_one_home(){
    homePts+=1
    homePtEl.textContent=homePts
}

function plus_two_home(){
    homePts+=2
    homePtEl.textContent=homePts
}

function plus_three_home(){
    homePts+=3
    homePtEl.textContent=homePts
}

function plus_one_guest(){
    guestPts+=1
    guestPtEl.textContent=guestPts
}

function plus_two_guest(){
    guestPts+=2
    guestPtEl.textContent=guestPts
}

function plus_three_guest(){
    guestPts+=3
    guestPtEl.textContent=guestPts
}



