const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

    let btnBereken = document.getElementById("btnBereken");
    btnBereken.addEventListener("click", berekenTotaal);

}

const berekenTotaal = () => {


    let prices = document.getElementsByClassName("prijs");
    let btw = document.getElementsByClassName("btw");
    let aantal = document.getElementsByClassName("aantal");
    let resultaat = document.getElementsByClassName("resultaat");
    let eindTotaal = 0;

    for(let i = 0; i < prices.length; i++){

        let price_i = parseFloat(prices[i].innerText);
        let btw_i = parseFloat(btw[i].innerText) / 100;
        let aantal_i = parseInt(aantal[i].value);

        let resultaat_i = (price_i * (1 + btw_i) * aantal_i).toFixed(2);
        resultaat_i = parseFloat(resultaat_i);
        resultaat[i].innerHTML = resultaat_i;

        eindTotaal = eindTotaal + resultaat_i;
    }

    //Weergeven van het eindtotaal
    document.getElementById("eindTotaal").innerText = eindTotaal;

}


window.addEventListener("load", setup);