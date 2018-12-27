
const funGemeente = () => {

    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

    let stopPrompt = false;
    let index = 0;

    while(stopPrompt===false){

        let inputGemeente = window.prompt("Geef een gemeente op");

        if(inputGemeente != null && inputGemeente != "stop"){

            let selectGemeente = document.getElementById("selectGemeente");

            //creëer de string voor de innerHTML

            let option = '<option value=' + inputGemeente + '>' + inputGemeente +'</option>';

            selectGemeente.innerHTML = selectGemeente.innerHTML + option;

            index += 1 //index updaten

        }
        else {
            stopPrompt = true;
        }
    }

}

funGemeente();




//window.addEventListener("load", setup);

