const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

    let btnParseText = document.getElementById("parseText");

    btnParseText.addEventListener("click", parse);
}

const parse = () => {
    let inputField = document.getElementById("inputField");
    let inputValue = inputField.value;
    let newString = ""


    for(let i = 0; i < inputValue.length; i++){

        if(inputValue.charAt(i)===" "){
            newString = newString;
        } else {
            newString = newString + inputValue.charAt(i) + " ";
        }

    }

    console.log(newString);

}

window.addEventListener("load", setup);