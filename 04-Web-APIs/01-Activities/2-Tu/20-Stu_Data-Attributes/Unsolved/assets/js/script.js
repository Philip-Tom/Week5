var container = document.querySelector(".container");

    var state = element.getAttribute("data-state");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function
  if (element.matches(".box")){
    state = element.getAttribute("data-state");

    if(state === "hidden"){
      element.textContent = element.dataset.number;
      element.dataset.state = "visible";

    } else {
      element.textContent = "";
      element.setAttribute('data-state', "hidden");
      
    }
  }
});
