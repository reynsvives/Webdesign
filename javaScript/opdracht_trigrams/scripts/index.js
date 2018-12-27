const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

    let myString = 'plezier';
    let begin = 0;

    //lengte = 9
    //max index = 8

    while(begin <= myString.length - 3){

        console.log(myString.slice(begin, begin + 3));
        begin += 1;

    }

}
window.addEventListener("load", setup);