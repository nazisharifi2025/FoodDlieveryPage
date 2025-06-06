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
