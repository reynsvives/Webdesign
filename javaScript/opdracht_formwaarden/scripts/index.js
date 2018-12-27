const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

    let btnResultaat = document.getElementById("btnResultaat");

    btnResultaat.addEventListener("click", showResult);

}

const showResult = () => {

    //resultaat roker of niet

    let isCheckedValue = document.getElementById("isRoker").checked;

    if(isCheckedValue){
        console.log("is een roker");
    } else {
        console.log("is geen roker");
    }

    //checken radio buttons voor moedertaal

    let moedertaalOptions = document.getElementsByName("inputMoedertaal");

    for(let i = 0; i < moedertaalOptions.length; i++){
        if(moedertaalOptions[i].checked){
            console.log("moedertaal: " + moedertaalOptions[i].value);
        }
    }

    //index van geselecteerd item nemen

    let buurlandOpties = document.getElementById("selectBuurland").options;
    let buurlandIndex = buurlandOpties.selectedIndex;

    //opzoeken van de waarde voor de geslecteerde index

    let buurland = buurlandOpties[buurlandIndex].text;
    console.log(buurland);

    //Bestelling

        //verzamelen van de opties
    let bestellingOpties = document.getElementById("selectBestelling").options;

        //nagaan welke opties geslecteerd zijn

    let outputBestelling = 'bestelling bestaat uit: ';

    for(let i = 0; i<bestellingOpties.length; i++){

        if(bestellingOpties[i].selected){
            outputBestelling += bestellingOpties[i].text + ' ';
        }
    }
    console.log(outputBestelling);
}

window.addEventListener("load", setup);