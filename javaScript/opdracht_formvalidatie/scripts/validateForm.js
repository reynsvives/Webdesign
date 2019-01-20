const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen


    function validateForm ()
    {

        //Variabele om errors bij te houden

        let numberOfErrors = 0;

        //Check voornaam

        let voornaam = document.getElementById("voornaam");
        let voornaamSpan = document.querySelector("#voornaam + span");

        if(voornaam.value.length > 30)
        {
            voornaam.style.borderColor = "red";
            voornaamSpan.innerText = "max 30 karakters !";
            voornaamSpan.color = "red";
            numberOfErrors += 1;
        }
        else //terugzetten van de kleur als er geen fout meer is.
        {
            resetStyle(voornaam, voornaamSpan, numberOfErrors);

        }

        //Check familienaam

        let familienaam = document.getElementById("familienaam");
        let familienaamSpan = document.querySelector("#familienaam + span");

        if(familienaam.value === '' || familienaam.value === ' ')
        {
            familienaam.style.borderColor = "red";
            familienaamSpan.innerText = "Het veld is verplicht !";
            familienaamSpan.style.color = "red";
            numberOfErrors += 1;
        }
        else
        {
            if(familienaam.value.length > 50)
            {
                familienaam.style.borderColor = "red";
                familienaamSpan.innerText = "Max 50 karakters";
                familienaamSpan.style.color = "red";
                numberOfErrors += 1;
            }
            else //terugzetten van de kleur als er geen fout meer is.
            {
                resetStyle(familienaam, familienaamSpan, numberOfErrors);
            }
        }



        //Check geboortedatum

        let geboortedatum = document.getElementById("geboortedatum");
        let geboortedatumSpan = document.querySelector("#geboortedatum + span");


        //Gebruik regex expressie. Bemerk dat de expressie tussen twee slashes moet staan.

        let regex = /^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/;

        //We gebruiken de test() method die we aanroepen over een regex expressie
        //Zie https://www.w3schools.com/js/js_regexp.asp
        //Check dat geboortedatum niet leeg is en dan niet aan het patroon voldoet

        if(geboortedatum.value !== '' && regex.test(geboortedatum.value) === false)
        {
            numberOfErrors += 1;
            geboortedatum.style.borderColor = "red";
            geboortedatumSpan.innerText = "Formaat is niet YYYY-MM-DD !";
            geboortedatumSpan.style.color = "red";
        }
        else
        {
            //Check of geboortedatum leeg is

            if(geboortedatum.value === '')
            {
                numberOfErrors += 1;
                geboortedatum.style.borderColor = "red";
                geboortedatumSpan.innerText = "Geboortedatum is een verplicht veld !";
                geboortedatumSpan.style.color = "red";
            }
            else
            {
                resetStyle(geboortedatum, geboortedatumSpan, numberOfErrors);
            }
        }

        //Check e-mail

        let email = document.getElementById("email");
        let emailSpan = document.querySelector("#email + span");

        //Regex voor mail geplukt van https://emailregex.com/

        regexMail =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        //Check email tegen regexMail

        if(regexMail.test(email.value) === false)
        {
            numberOfErrors += 1;
            email.style.borderColor = "red";
            emailSpan.innerText = "Geen geldig email adres !";
            emailSpan.style.color = "red";
        }

        else
        {
            //Check of email ingevuld is

            if(email.value === '' || email.value === ' ')
            {
                numberOfErrors += 1;
                emailSpan.innerText = "Verplicht veld !";
                emailSpan.style.color = "red";
                email.style.borderColor = "red";
            }
            else
            {
                resetStyle(email, emailSpan, numberOfErrors);
            }
        }

        //Check aantal kinderen

        let aantalKinderen = document.querySelector("#aantalKinderen");
        let aantalKinderenSpan = document.querySelector("#aantalKinderen + span");

        if(aantalKinderen.value < 0)
        {
            numberOfErrors += 1;
            aantalKinderen.style.borderColor = "red";
            aantalKinderenSpan.innerText = "is geen positief getal";
            aantalKinderenSpan.style.color = "red";
        }
        else
        {
            if(aantalKinderen.value > 99)
            {
                numberOfErrors += 1;
                aantalKinderen.style.borderColor = "red";
                aantalKinderenSpan.innerText = "te hoog aantal";
                aantalKinderenSpan.style.color = "red";
            }
            else
            {
                resetStyle(aantalKinderen, aantalKinderenSpan, numberOfErrors);
            }
        }

        //Geef alert als het formulier volledig correct is

        if(numberOfErrors === 0)
        {
            alert("formulier correct ingevuld !")
        }
    }

    //Functie om formulier stijl te resetten als data correct is ingevoerd.

    function resetStyle(element, elementSpan, numberOfErrors)
    {
        element.style.borderColor = "";
        elementSpan.innerText = "";

        if(numberOfErrors > 0)
        {
            //Vermonder aantal fouten als een veld correct is ingevuld
            numberOfErrors +- 1;

        }

    }


    //Event listener toevoegen aan de validatie button

    let btnValidate = document.getElementById("btnValidate");
    btnValidate.addEventListener("click", validateForm);

}

window.addEventListener("load", setup);