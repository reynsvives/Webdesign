const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen


    function validateForm ()
    {

        //Variabele om errors bij te houden

        let numberOfErrors = 0;

        //Check voornaam

        let voornaam = document.getElementById("voornaam");

        if(voornaam.value.length > 30)
        {
            voornaam.style.borderColor = "red";
            let voornaamSpan = document.querySelector("#voornaam + span");
            voornaamSpan.innerText = "max 30 karakters !";
            numberOfErrors += 1;
        }

        //Check familienaam

        let familienaam = document.getElementById("familienaam");

        if(familienaam.value === '' || familienaam.value === ' ')
        {
            familienaam.style.borderColor = "red";
            let familienaamSpan = document.querySelector("#familienaam + span");
            familienaamSpan.innerText = "Het veld is verplicht !";
            numberOfErrors += 1;
        }

        if(familienaam.value.length > 50)
        {
            familienaam.style.borderColor = "red";
            let familienaamSpan = document.querySelector("#familienaam + span");
            familienaamSpan.innerText = "Max 50 karakters";
            numberOfErrors += 1;
        }

        //Check geboortedatum

        let geboortedatum = document.getElementById("geboortedatum");

        let regex = "^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$"

        if(geboortedatum.value.match(regex))
        {
            alert("geboortedatum niet correct !");
        }

    }

    //Event listener toevoegen aan de validatie button

    let btnValidate = document.getElementById("btnValidate");
    btnValidate.addEventListener("click", validateForm);

}
window.addEventListener("load", setup);