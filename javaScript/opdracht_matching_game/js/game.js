
const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen


    //Ophalen src van de image uit de DOM tree en aanpassen

    let listOfDiv = document.querySelectorAll(".divPainting");

    let cardsClicked = 0;
    let firstCard; //eerste getrokken kaart
    let secondCard; //tweede getrokken kaart
    let firstCardElement; //referentie naar element in DOM tree van eerste kaart
    let secondCardElement; //referentie naar element in DOM tree van eerste kaart

    //Functie selectCard die de geselecteerde kaart omdraait
    const selectCard = (event) =>
    {
        //Er mogen maximum 2 kaarten getoond worden per keer.
        if(cardsClicked < 2)
        {

            let cardElement;
            let srcPainting;

            //Ophalen link naar afbeelding van geklikte element
            cardElement = event.currentTarget; //Geeft altijd de div terug voor het kaartelement
            cardElement = cardElement.querySelector("div img"); //Geeft mij steeds de image in het kaart element
            srcPainting = cardElement.getAttribute("srcPainting");

            //Toekennen link aan src attribuut
            cardElement.setAttribute("src", srcPainting);

            //Ophogen aantal kaarten

            cardsClicked += 1;

            //Als het de eerste kaart is, de src opslaan in firstCard
            //Als het de tweede kaart is, de src opslaan in secondCard
            //Deze variabelen hebben we nodig om te checken of de afbeeldingen
                //hetzelfde zijn

            if(cardsClicked === 1)
            {
                firstCard = srcPainting;
                firstCardElement = cardElement;
            }

            if(cardsClicked === 2)
            {
                secondCard = srcPainting;
                secondCardElement = cardElement;

                //Aantal getrokken kaarten terug op 0 zetten
                cardsClicked = 0;

                //Vergelijk de kaarten

                if(firstCard !== secondCard)
                {
                    //Terugzetten van het vraagteken als kaarten niet gelijk zijn.
                    firstCardElement.setAttribute("src", "../img/vraagteken.png");
                    secondCardElement.setAttribute("src", "../img/vraagteken.png");
                }
                else
                {//Als de kaarten correct zijn, dan geven we dat een groene rand met ene bepaalde timer

                    firstCardElement.style.borderRadius = "0.5";

                }
            }

        }
        //Foutboodschap indien te veel kaarten worden omgedraaid
        else
        {
            alert("U heeft te veel kaarten geklikt: " + cardsClicked);
        }

    }


    for (let i = 0; i < listOfDiv.length; i++)
    {

        //Event Listeners toevoegen voor elke kaart

        listOfDiv[i].addEventListener("click", selectCard);

        /*
        //opslaan link van het schilderij zodat we de link van de afbeelding kunnen vervangen
        let srcPainting = listOfImg[i].getAttribute("srcPainting");
        listOfImg[i].setAttribute("src", srcPainting);
        */
    }

}
window.addEventListener("load", setup);