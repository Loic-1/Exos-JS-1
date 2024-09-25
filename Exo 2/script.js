const square_1 = document.getElementById("square_1");
const square_2 = document.getElementById("square_2");
const square_3 = document.getElementById("square_3");
const square_4 = document.getElementById("square_4");

var verif = false;

square_1.addEventListener("click", () => {
    verif = verif == true ? false : true;
    // alert(verif);
    square_1.style.transition = "2s";
    square_1.style.backgroundColor = verif == false ? "cadetblue" : "red";
    square_1.style.transform = verif == false ? "rotate(0deg) scale(1)" : "rotate(360deg) scale(0.9)";
});

square_2.addEventListener("click", () => {
    verif = verif == true ? false : true;
    // alert(verif);
    square_2.style.transition = "2s";
    square_2.style.backgroundColor = verif == false ? "cadetblue" : "red";
    square_2.style.transform = verif == false ? "rotate(0deg) scale(1)" : "rotate(360deg) scale(0.9)";
});

square_3.addEventListener("click", () => {
    verif = verif == true ? false : true;
    // alert(verif);
    square_3.style.transition = "2s";
    square_3.style.backgroundColor = verif == false ? "cadetblue" : "red";
    square_3.style.transform = verif == false ? "rotate(0deg) scale(1)" : "rotate(360deg) scale(0.9)";
});

square_4.addEventListener("click", () => {
    verif = verif == true ? false : true;
    // alert(verif);
    square_4.style.transition = "2s";
    square_4.style.backgroundColor = verif == false ? "cadetblue" : "red";
    square_4.style.transform = verif == false ? "rotate(0deg) scale(1)" : "rotate(360deg) scale(0.9)";
});