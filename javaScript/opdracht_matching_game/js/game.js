
const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen


    //Ophalen src van de image uit de DOM tree en aanpassen

    let listOfDiv = document.querySelectorAll(".divPainting");

    let cardsClicked = 0;
    let firstCard; //eerste getrokken kaart
    let secondCard; //tweede getrokken kaart
    let firstCardElement; //referentie naar element in DOM tree van eerste kaart
    let secondCardElement; //referentie naar element in DOM tree van eerste kaart

    //Functie selectCard die de geselecteerde kaart omdraait en de vergelijking doet

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
                //Omdraaien van de eerste kaart
                firstCard = srcPainting;
                firstCardElement = cardElement;
                console.log(firstCardElement);
            }

            console.log(cardsClicked);

            if(cardsClicked === 2)
            {

                //Omdraaien van de tweede kaart
                secondCard = srcPainting;
                secondCardElement = cardElement;

                if(firstCardElement === secondCardElement)
                {
                    console.log(firstCardElement);
                    console.log(secondCardElement);
                    alert("U heeft twee keer op dezelfde kaart geklikt ! Kies een andere kaart...");
                    //Teller terug op 1 zetten want er moet nog een tweede verschillende kaart gekozen worden
                    cardsClicked = 1;
                }
                else
                {
                    //Vergelijk de kaarten

                    if(firstCard !== secondCard)
                    {
                        //Terugzetten van het vraagteken als kaarten niet gelijk zijn.
                        firstCardElement.setAttribute("src", "../img/vraagteken.png");
                        secondCardElement.setAttribute("src", "../img/vraagteken.png");
                    }

                    //Aantal getrokken kaarten terug op 0 zetten
                    cardsClicked = 0;
                }
            }
        }
        //Foutboodschap indien te veel kaarten worden omgedraaid
        else
        {
            alert("U heeft te veel kaarten geklikt: " + cardsClicked);
        }

    }

    //Schud kaarten button programmeren

    const shuffleCards = () =>
    {

        //Array waarin we de nieuw gekozen waarden voor de src naar de image zullen bewaren

        let imgShuffled = [];
        let listOfCurrentImg = [];

        //Huidige images opzoeken
        let imgCurrent = document.querySelectorAll(".divPainting img");

        //Alle links naar de images ophalen en in een array steken

        for(let i = 0; i < 12; i++)
        {
            //De src van de image uit de node list halen en opslaan de array listOfCurrentImg
            listOfCurrentImg[i] = imgCurrent[i].getAttribute("srcPainting");

            //Tegelijk draaien we de kaart ook weer om naar het vraagteken

            imgCurrent[i].setAttribute("src", "../img/vraagteken.png");
        }

        //Shuffelen van de array
            //We trekken telkens een getal tussen 0 en lengte van de resterende array
            //We verwijderen het element uit de array en slaan het op array imgShuffled
            //We gebruiken de splice() methode die het verwijderde element terug geeft

        for(let i = 0; i < 12; i++)
        {

            //Creëer random getal tussen indexnummers 0 en lengte resterende array

            let randomNumber = Math.floor(Math.random() * (listOfCurrentImg.length - 1));

            let removedImg = listOfCurrentImg.splice(randomNumber, 1);
            imgShuffled[i] = removedImg;

        }


        //Nu de kaarten geschud zijn, de kaarten terug in de DOM tree stoppen

        for(let i = 0; i < 12; i++)
        {
            imgCurrent[i].setAttribute("srcPainting", imgShuffled[i]);
        }

    }

    //Event listeners aan de divs hangen.

    for (let i = 0; i < listOfDiv.length; i++)
    {

        //Event Listeners toevoegen voor elke kaart

        listOfDiv[i].addEventListener("click", selectCard);

    }

    //Event listener aan de button hangen voor het schudden van de kaarten

    let btnNewGame = document.querySelector("#newGame");

    btnNewGame.addEventListener("click", shuffleCards);


}
window.addEventListener("load", setup);