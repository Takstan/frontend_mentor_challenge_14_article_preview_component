const btnShare = document.querySelector(".btn-share");
const icons = document.querySelector(".btn-share__icons");

btnShare.addEventListener("click", () => {
  icons.classList.toggle("active");

  btnShare.classList.toggle("active");
});
