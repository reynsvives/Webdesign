const setup = () => {
// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

    const aantalRegels = 5;

    for(i=1; i<=aantalRegels; i++){
        let j = 1
        while(j<=i){
            console.log('*');
            j += 1;
        }

        console.log("\n");
    }

}
window.addEventListener("load", setup);