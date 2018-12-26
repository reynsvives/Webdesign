const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

   let btnSubstring = document.getElementById("btnSubstring");
   btnSubstring.addEventListener("click", ExecuteSubstring);

}
window.addEventListener("load", setup);

const ExecuteSubstring = () => {

    let inputString = document.getElementById("inputString");
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    let output = inputString.value.substring(from, to);

    document.getElementById("output").innerText = output;
}

