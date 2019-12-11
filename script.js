var nineInput = document.querySelector(".nineAM");
var tenInput = document.querySelector(".tenAM");
var elevenInput = document.querySelector(".elevenAM");
var twelveInput = document.querySelector(".twelvePM");
var oneInput = document.querySelector(".onePM");
var twoInput = document.querySelector(".twoPM");
var threeInput = document.querySelector(".threePM");
var fourInput = document.querySelector(".fourPM");
var fiveInput = document.querySelector(".fivePM");

$(document).ready(function() {
    nineInput.value = localStorage.getItem("9");
    tenInput.value = localStorage.getItem("10");
    elevenInput.value = localStorage.getItem("11");
    twelveInput.value = localStorage.getItem("12");
    oneInput.value = localStorage.getItem("1");
    twoInput.value = localStorage.getItem("2");
    threeInput.value = localStorage.getItem("3");
    fourInput.value = localStorage.getItem("4");
    fiveInput.value =localStorage.getItem("5");

    
    
    
    });


function save(){
    localStorage.setItem("9", nineInput.value)
    localStorage.setItem("10", tenInput.value)
    localStorage.setItem("11", elevenInput.value)
    localStorage.setItem("12", twelveInput.value)
    localStorage.setItem("1", oneInput.value)
    localStorage.setItem("2", twoInput.value)
    localStorage.setItem("3", threeInput.value)
    localStorage.setItem("4", fourInput.value)
    localStorage.setItem("5", fiveInput.value)
}


$(".input-group-text").on("click", save);
    
