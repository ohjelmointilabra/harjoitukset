function tulostaToisto(){
    let vastausTeksti = "";
    let laskuri = 0;
    for(let i = 1; i <= 10; i ++){
        laskuri += 3;
        vastausTeksti += "Muuttujan arvo laskentakierroksella " + i + " on " + laskuri + ".<br>"
    }
    document.getElementById("toisto-vastaus").innerHTML = vastausTeksti;
}