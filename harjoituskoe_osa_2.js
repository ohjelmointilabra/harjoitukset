// TAULUKKO
function tulostaTaulukko(){
    let numerot1 = [12, 34, 54, 2, 16];
    numerot1 = [15, 24, 3, 45]
    
    document.getElementById("taulukko-vastaus").innerHTML = "Numerot 1: " + numerot1;
    document.getElementById("taulukko-vastaus").innerHTML = "Numerot 1: " + numerot1[2];
    
    /*let numero3 = numerot1.at(-2);
    document.getElementById("taulukko-vastaus").innerHTML = numero3*/

    const numerot2 = [2, 44, 67, 32, 1];
    numerot2 = [53, 34, 55, 8]
    
    document.getElementById("taulukko-vastaus").innerHTML = "Numerot 2: " + numerot2;
}

// 10. Mikä on taulukon 'numerot1' pituus?

// 11. Millä numerolla viittaat listan ensimmäiseen alkioon?

// 12. Millä metodilla lisäät uuden alkion taulukon loppuun?

// BONUS 2. Miksi taulukkoa 'numerot2' ei tulosteta? Miten korjaat virheen? 

// OLIO
function naytaObjekti(){
    let auto1 = {
        merkki: "Honda",
        malli: "Civic",
        vuosi: 2002,
        vari: "punainen"
    }
    let auto2 = {
        merkki: "Toyota",
        malli: "Corola",
        vuosi: 2011,
    }

    let autot = [];
    
    document.getElementById("objekti-vastaus").innerHTML = auto1;

}

// 13. Miksi koodin tulostuksessa näkyy [object Object]?

// 14. Miten lisätään uusi 'vari' -ominaisuus auto2:seen? Kirjoita vastaus objekti-vastaus2 -elementiin

// 15. Miten lisätään auto1 ja auto2 'autot'-taulukkoon?

//FUNKTIO

function tulostaParametriFunktio(){
    let sivu1 = 12;
    let sivu2 = 9;
    let pintaAla = laskeSuorakulmionPintaAla(sivu1, sivu2);
    document.getElementById("funktio-vastaus").innerHTML = pintaAla;
}

// 16. Luo uusi funktio, jotta funktio tulostaParametriFunktio() toimisi. (Vihje: Suorakulmion pinta-ala lasketaan kanta * korkeus)
