let fb = document.getElementById("face") 
let ig = document.getElementById("insta")
let tt = document.getElementById("tiktok")

function showFace() {
    if (fb.style.display == "none") {
        fb.style.display == "block"
        ig.style.display == "none"
        tt.style.display == "none"
    } else {
        fb.style.display == "none"
    }
}

function showInsta() {
    if (ig.style.display == "none") {
        ig.style.display == "block"
        fb.style.display == "none"
        tt.style.display == "none"
    } else {
        ig.style.display == "none"
    }
}

function showTiktok() {
    if (tt.style.display == "none") {
        tt.style.display == "block"
        ig.style.display == "none"
        fb.style.display == "none"
    } else {
        tt.style.display == "none"
    }
}