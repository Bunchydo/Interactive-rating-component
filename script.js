let generalButtonDesign = document.querySelectorAll(".general-button-design");

let mainContainer = document.querySelector(".main-container")

let submitRowFifth = document.getElementById("submitButton")

let buttonOne = document.getElementById("buttonOne")
let buttonTwo = document.getElementById("buttonTwo")
let buttonThree = document.getElementById("buttonThree")
let buttonFour = document.getElementById("buttonFour")
let buttonFive = document.getElementById("buttonFive")


let primaryColor = "#262F38";
let secondaryColor = "#FC7613"


let thankYouSection = document.querySelector(".thank-you-section")

let selectedButton = null;
let selectionNumber = document.querySelector(".selection-number");

// generalButtonDesign.forEach(function(button){
// button.addEventListener("click", function(){
//     button.style.color = "#2E3033"
// })

// })

submitRowFifth.addEventListener("click",function(){


})

const buttons = [buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive];

function resetButtons() {
    buttons.forEach(button => {
        button.style.backgroundColor = primaryColor;
        button.style.color = "#9EA7B0";
        submitRowFifth.style.backgroundColor = "#262B31"

    });
}   

buttons.forEach((button, index) => {
    button.addEventListener("click", function() {
        resetButtons();
        button.style.backgroundColor = secondaryColor;
        button.style.color = "#262B31";
        submitRowFifth.style.backgroundColor = "white"

        selectedButton = button;
        selectionNumber.textContent = `You selected ${index + 1} out of 5`;
        
    });
});

submitRowFifth.addEventListener("click",function(){
    if(selectedButton){
        thankYouSection.style.display = "flex";
        mainContainer.style.display = "none"
    }
    else{ alert("Please select a rating before submitting")}
})


