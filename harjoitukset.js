
// JAVASCRIPT PERUSTEET
    // 2 + '2' ??
    // tietotyypeistä
function tulostaPerusteet1(){
    let ekaNumero = 5;
    let tokaNumero = 10;
    let vastaus = ekaNumero + tokaNumero;
}
document.getElementById("perusteet-vastaus").innerHTML = vastaus;

// Mitä tulostuu html-elementin sisään, minkä id on "perusteet-vastaus"?

function tulostaPerusteet2(){
    let n = 2;
    let s = "2";
    document.getElementById("perusteet-vastaus").innerHTML = n + n + s;
}

// Mitä tulostuu html-elementin sisään, minkä id on "perusteet-vastaus"?

// EHTOLAUSEET



// TOISTORAKENNE
function tulostaToisto(){
    let vastausTeksti = "";
    let laskuri = 0;
    for(let i = 1; i <= 10; i++){
        laskuri += 3;
        vastausTeksti += "Laskentakierros: " + i + ". Laskurin arvo: " + laskuri + ".<br>"
        console.log("i = " + i + " | laskuri = " + laskuri)
    }
    document.getElementById("toisto-vastaus").innerHTML = vastausTeksti;
}

// Kuinka monta laskentakierrosta toistorakenteessa suoritetaan?

// Mikä on muuttujan 'laskuri' arvo 3. laskentakierroksella?

// For-toistorakenteessa käytetään apumuuttujaa. Mikä on apumuuttujan arvon lisäämiseen käytetty operaattori?

// BONUS: Kirjoita rivin 13 sijoituslause toisella tavalla.

function teeJotain(){
    // jotain
}