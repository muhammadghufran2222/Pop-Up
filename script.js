const openPopupBtn = document.querySelector(".open-popup");
const ClosePopupBtn = document.querySelector("#close-popup");
const blur = document.querySelector(".blur");
const popUp = document.querySelector(".hide");

openPopupBtn.addEventListener("click", function () {
  document.body.classList.add("show-popup");
  popUp.style.display = "flex";
  blur.style.display = "block";
});

ClosePopupBtn.addEventListener("click", function () {
  document.body.classList.remove("show-popup");
  setTimeout(function () {
    popUp.style.display = "none";
    blur.style.display = "none";
  }, 500);
});
