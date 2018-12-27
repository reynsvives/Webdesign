const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

    let myString = "de Gisteren zat de jongen op de stoep en at de helft van de appel de."
    let IndexOfVorigeDe = 0;
    let IndexOfHuidigeDe =0;
    let TxtVoorDe = "";
    let newTxt = "";

    while(myString.indexOf("de", IndexOfVorigeDe) != -1) {

        IndexOfHuidigeDe = myString.indexOf("de", IndexOfVorigeDe);

        if(IndexOfVorigeDe === 0){
            TxtVoorDe = myString.slice(IndexOfVorigeDe, IndexOfHuidigeDe);
        }
        else{
            TxtVoorDe = myString.slice(IndexOfVorigeDe + 1, IndexOfHuidigeDe);
        }

        newTxt = newTxt + TxtVoorDe + "het";

        IndexOfVorigeDe = IndexOfHuidigeDe + 1;

        //Zoek index van "de"
        //Neem stuk tekst vlak voor "de" en sla dit op.
        //plak "het" achter het stuk tekst dat werd opgeslagen.
        //Zoeken volgende "de" door te starten op index vorige "de".
        //Neem het stuk tekst vanaf vorige "de" tot volgende "de"

    }

    //Toevoegen van het stuk tekst na de laatst gevonden "de".`

    newTxt = newTxt + " " + myString.slice(IndexOfVorigeDe + 2, myString.length);

    console.log(newTxt);


}
window.addEventListener("load", setup);