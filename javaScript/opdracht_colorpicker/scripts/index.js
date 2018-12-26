const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen


    //Get the values of the three sliders

    let sliderRedValue = document.getElementById("red").value;
    let sliderGreenValue = document.getElementById("green").value;
    let sliderBlueValue = document.getElementById("blue").value;

    //Replace the innerText of the span elements with the values of the sliders

    document.getElementById("SliderValueRed").innerText = sliderRedValue;
    document.getElementById("SliderValueGreen").innerText = sliderGreenValue;
    document.getElementById("SliderValueBlue").innerText = sliderBlueValue;

    //Solution is not completely correct because we had to add event listeners for all sliders using
        // a for loop. See solution of the teacher.
    addEventListener("change", printColors);
    addEventListener("input", printColors);
};

const printColors = () => {

    //Get the values of the three sliders

    let sliderRedValue = document.getElementById("red").value;
    let sliderGreenValue = document.getElementById("green").value;
    let sliderBlueValue = document.getElementById("blue").value;

    //Replace the innerText of the span elements with the values of the sliders

    document.getElementById("SliderValueRed").innerText = sliderRedValue;
    document.getElementById("SliderValueGreen").innerText = sliderGreenValue;
    document.getElementById("SliderValueBlue").innerText = sliderBlueValue;

    //Change the background color

    let divColor = document.getElementById("divColor");
    divColor.style.backgroundColor = `rgb(${sliderRedValue} , ${sliderGreenValue}, ${sliderBlueValue})`;


}


window.addEventListener("load", setup);