const square_1 = document.getElementById("square_1");

var verif = false;

square_1.addEventListener("click", () => {
    verif = verif == true ? false : true;
    // alert(verif);
    var change_1 = true;
    if (change_1) {
        square_1.innerText = verif == false ? "O" : "X";
        change_1 = false;
    }
    else {
        //rien
    }
});