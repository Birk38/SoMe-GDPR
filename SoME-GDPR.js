let fb = document.getElementById("face");
let ig = document.getElementById("insta");
let tt = document.getElementById("tiktok");

let erFaceKLikket = false;
let erInstaKLikket = false;
let erTiktokKlikket = false;

let fbi = document.querySelector(".fa-brands.fa-facebook");
let igi = document.querySelector(".fa-brands.fa-instagram");
let tti = document.querySelector(".fa-brands.fa-tiktok");

function showFace() {
  if (erFaceKLikket == false) {
    console.log("face klikket");

    erFaceKLikket = true;
    erInstaKLikket = false;
    erTiktokKlikket = false;

    fb.style.display = "block";
    ig.style.display = "none";
    tt.style.display = "none";

    fbi.classList.add("stor");
    igi.classList.remove("stor");
    tti.classList.remove("stor");
  } else {
    fb.style.display = "none";
    erFaceKLikket = false;

    fbi.classList.remove("stor");
  }
}

function showInsta() {
  if (erInstaKLikket == false) {
    console.log("insta klikket");

    erInstaKLikket = true;
    erFaceKLikket = false;
    erTiktokKlikket = false;

    ig.style.display = "block";
    fb.style.display = "none";
    tt.style.display = "none";

    igi.classList.add("stor");
    fbi.classList.remove("stor");
    tti.classList.remove("stor");
  } else {
    ig.style.display = "none";
    erInstaKLikket = false;

    igi.classList.remove("stor");
  }
}

function showTiktok() {
  if (erTiktokKlikket == false) {
    console.log("tiktok klikket");

    erTiktokKlikket = true;
    erInstaKLikket = false;
    erFaceKLikket = false;

    tt.style.display = "block";
    ig.style.display = "none";
    fb.style.display = "none";

    tti.classList.add("stor");
    igi.classList.remove("stor");
    fbi.classList.remove("stor");
  } else {
    tt.style.display = "none";
    erTiktokKlikket = false;

    tti.classList.remove("stor");
  }
}
