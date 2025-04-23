function tulostaToisto(){
    let vastausTeksti = "";
    let laskuri = 0;
    for(let i = 1; i <= 10; i ++){
        laskuri += 3;
        vastausTeksti += "Laskentakierros: " + i + ". Laskurin arvo: " + laskuri + ".<br>"
        console.log("i = " + i + " | laskuri = " + laskuri)
    }
    document.getElementById("toisto-vastaus").innerHTML = vastausTeksti;
}

function teeJotain(){
    // jotain
}