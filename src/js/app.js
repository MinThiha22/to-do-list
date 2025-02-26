const toggleButton = document.querySelector(".js-toggle");

toggleButton.addEventListener("change", () => {
  localStorage.setItem("toggleState", toggleButton.checked);
  if (toggleButton.checked) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});
