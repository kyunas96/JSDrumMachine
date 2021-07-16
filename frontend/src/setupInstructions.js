export default function(){
  const instructionsModal = document.getElementById("instructions-modal");
  const instructionsReveal = document.getElementById("instructions-reveal");
  const instructionsHide = document.getElementById("instructions-hide");

  instructionsReveal.addEventListener("click", () => {
    instructionsModal.classList.toggle("hidden");
  })

  instructionsHide.addEventListener("click", () => {
    instructionsModal.classList.toggle("hidden");
  })

}