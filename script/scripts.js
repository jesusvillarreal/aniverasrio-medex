// Accordion
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});







// aaa

// function _class(name){
//     return document.getElementsByClassName(name);
//   }
  
//   let tabPanes = _class("tab-header")[0].getElementsByTagName("div");
  
//   for(let i=0;i<tabPanes.length;i++){
//     tabPanes[i].addEventListener("click",function(){
//       _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
//       tabPanes[i].classList.add("active");
      
//       _class("tab-indicator")[0].style.top = `calc(80px + ${i*50}px)`;
      
//       _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
//       _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
      
//     });
//   }



  
// JS de empresas - acordeon de examenes ocupacionales
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// let slider = document.querySelector(".slider")
// let sliderIndividual = document.querySelectorAll(".slider-item")
// let contador = 1;
// let width = sliderIndividual[0].clientWidth;
// let intervalo = 3000;

// window.addEventListener("resize", function () {
//   let width = sliderIndividual[0].clientWidth;
// })

// setInterval (function (){
//   slides();
// }, intervalo);

// function slides() {
//   slider.style.transform = "translate("+(-width * contador)+"px)";
//   slider.style.transition = "transform .7s"
//   contador ++;

//   if (contador == sliderIndividual.length){
//     setTimeout(function() {
//       slider.style.transform = "translate(0px)";
//       slider.style.transition = "transform .7s";
//       contador = 1; 
//     },1500)
//   }
// }

// modal 

const buttonOpen = document.getElementById('open-modal')
const buttonClose = document.getElementById('close-modal')
const modal = document.getElementById('modal')
const toggleActiveModal = () => modal.classList.toggle('active')

buttonClose.addEventListener('click', toggleActiveModal)
buttonOpen.addEventListener('click', toggleActiveModal)


