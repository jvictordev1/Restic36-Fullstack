const indicatorLightButtons = document.querySelectorAll("button");

function onIndicatorClick(indicator) {
  const currActive = document.querySelector(".active");
  if (currActive) {
    if (currActive.id === indicator.id) {
      currActive.classList.remove("active");
    } else {
      currActive.classList.toggle("active");
      indicator.classList.toggle("active");
    }
    return;
  }
  indicator.classList.toggle("active");
}
indicatorLightButtons.forEach((b) =>
  b.addEventListener("click", (e) => onIndicatorClick(e.target))
);
