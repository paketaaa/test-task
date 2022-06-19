document.addEventListener('DOMContentLoaded', () => {
   const cards = document.querySelectorAll(".card")
   const buttons = document.querySelectorAll(".card-legend__button")

   cards.forEach(function(card){
      card.addEventListener("click", function(){
         if (!(card.classList.contains("card--disabled"))) {
            card.classList.toggle("card--clicked")
         }
      })
   })


   buttons.forEach(function(button){
      button.addEventListener("click", function(){
         this.closest(".card-wrapper").querySelector(".card").click()
      })
   })
});