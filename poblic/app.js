const body = document.getElementById("body");
const mode = document.getElementById("mode");
mode.addEventListener("click", () => {
  console.log("hi");
});
// const dark = document.querySelector("button.bg-amber-100");
// mode.addEventListener("click", () => {
//   console.log("hi");
//   if (body.classList.contains("bg-greenC")) {
//     body.classList.remove("bg-greenC");
//     body.classList.remove("text-amber-100");
//     body.classList.add("text-greenC");
//     body.classList.add("bg-amber-100");
//   } else {
//     body.classList.add("bg-greenC");
//     body.classList.add("text-amber-100");
//     body.classList.remove("text-greenC");
//     body.classList.remove("bg-amber-100");
//   }
// });

const observer = new IntersectionObserver((entres) => {
  entres.forEach(
    (entre) => {
      if (entre.isIntersecting) {
        entre.target.classList.add("animate-fade-up-show");
      } else {
        entre.target.classList.remove("animate-fade-up-show");
      }
    },
    {
      threshold: 0.6,
    }
  );
});
const items = document.querySelectorAll(".scroll-animate");
for (let i = 0; i < items.length; i++) {
  observer.observe(items[i]);
}
