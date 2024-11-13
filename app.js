const gallery = document.querySelector("#gallery");
const btn = document.querySelector(".btn");
const images = document.querySelectorAll(".image");

btn.addEventListener("click", () => {
  if (gallery.classList.contains("grid-layout")) {
    gallery.classList.add("col-layout");
    images.forEach((image) => {
      image.classList.add("mb");
    });
    gallery.classList.remove("grid-layout");
  } else if (gallery.classList.contains("col-layout")) {
    gallery.classList.add("flex-layout");
    images.forEach((image) => {
      image.classList.remove("mb");
      image.style.width = "300px";
      image.style.height = "300px";
    });
    gallery.classList.remove("col-layout");
  } else if (gallery.classList.contains("flex-layout")) {
    gallery.classList.add("grid-layout");
    images.forEach((image) => {
        image.style.width = "100%";
        image.style.height = "auto";
    });
    gallery.classList.remove("flex-layout");
  }
});
