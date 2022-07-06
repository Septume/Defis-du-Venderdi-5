let pocket = document.querySelector("body > section > div.ecran_contour > h2 > span");
pocket .innerHTML = 'bisounours'

let nintendo = document.querySelector("body > section > div.nintendo > h3");
nintendo .innerHTML = 'Kalevin Corp'
nintendo.style.left = "calc(50% - 60px)";


// let lumière = document.querySelector("body > section > div.ecran_contour > div.on");

let onoff = document.querySelector("body > div");
onoff[0].addEventListener('click', function(e){
    this.style.transform = "translateX(20='px')";
    // lumière.style.background-color = "white";
}



let ecran = document.querySelector("body > section > div.ecran_contour > div.on");