let fb = document.getElementById("face") 
let ig = document.getElementById("insta")
let tt = document.getElementById("tiktok")

let erFaceKLikket = false
let erInstaKLikket = false
let erTiktokKlikket = false

function showFace() {
    
    if (erFaceKLikket == false) {

        console.log("face klikket")
        erFaceKLikket = true 
        fb.style.display = "block"
        ig.style.display = "none"
        tt.style.display = "none"

    } else {

        fb.style.display = "none"
        erFaceKLikket = false
    }
}

function showInsta() {
    if (erInstaKLikket == false) {

        console.log("insta klikket")
        erInstaKLikket = true
        ig.style.display = "block"
        fb.style.display = "none"
        tt.style.display = "none"
    } else {
        ig.style.display = "none"
        erInstaKLikket = false
    }
}

function showTiktok() {
    if (erTiktokKlikket == false) {

        console.log("tiktok klikket")
        erTiktokKlikket = true
        tt.style.display = "block"
        ig.style.display = "none"
        fb.style.display = "none"

    } else {
        
        tt.style.display = "none"
        erTiktokKlikket = false
    }
}