const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen






}


const vervang = (template, parameter, data) => {

    /*   TESTS
       let templateText = "Geachte [voornaam] [familieNaam],\n\n";
       templateText += "Gelieve dringend uw factuur met nummer [factuurNummer] te betalen aub. Voor deze herinnering rekenen wij [schandaligeHerinneringskost] aan op uw volgende factuur.\n\n"; templateText += "Energieke groeten,\n";
       templateText += "Uw leverancier";

       let result;
       result = vervang(templateText, "voornaam", "Jan");
       result = vervang(result, "familieNaam", "Janssens");
       result = vervang(result, "factuurNummer", "2334793232");
       result = vervang(result, "schandaligeHerinneringskost", "5,73Eur");
       console.log(result);
   */

    //Zolang we een bepaalde parameter vinden
    //Doe een replace

    let templateText = "Geachte [voornaam] [familieNaam] [voornaam]";
    let data = "Nikolaas"
    let parameter = "voornaam";
    let txtTussenParameters = "";
    let indexVorigeParameter = 0;
    let indexHuidigeParameter = 0;
    let result ="";

    while(templateText.indexOf(parameter, indexVorigeParameter) != -1){

        //Toevoegen vierkante haken
        parameter = "[" + parameter + "]";

        //Zoeken van volgende occurence van de parameter vertrekkende van de laatst gevonden positie van parameter
        indexHuidigeParameter = templateText.indexOf(parameter, indexVorigeParameter);

        //Tekst tussen de 2 parameters nemen.

        if(indexVorigeParameter === 0){
            txtTussenParameters = templateText.slice(indexVorigeParameter, indexHuidigeParameter);
        }
        else {
            txtTussenParameters = templateText.slice(indexVorigeParameter + parameter.length, indexHuidigeParameter);
        }

        //Vervangen van tekst

        result = result + txtTussenParameters + data;

        //Beginnen zoeken in volgende iteratie op plaats waar huidige parameter is gevonden.
        indexVorigeParameter = indexHuidigeParameter + 1;

    }

    console.log(result);

}





window.addEventListener("load", setup);