const body = document.getElementById("body");
const mode = document.getElementById("mode");
const text = document.getElementById("text");
const img = document.getElementById("img");
const img2 = document.getElementById("img2");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const nav = document.getElementById("nav");
const serves = document.getElementById("serves");
const serves1 = document.getElementById("serves1");
const serves2 = document.getElementById("serves2");
const serves3 = document.getElementById("serves3");
const nave = document.getElementById("nave");
const menu = document.getElementById("menu");
const close = document.getElementById("close");
const navbar = document.getElementById("navbar");
// const dark = document.querySelector("button.bg-amber-100");
menu.addEventListener("click", () => {
  navbar.classList.remove("-left-[100%]");
  navbar.classList.add("left-0");
});
close.addEventListener("click", () => {
  navbar.classList.add("-left-[100%]");
  navbar.classList.remove("left-0");
});
mode.addEventListener("click", () => {
  const divs = document.querySelectorAll(".change");
  if (body.classList.contains("bg-greenC")) {
    body.classList.remove("bg-greenC");
    body.classList.remove("text-amber-100");
    body.classList.add("text-greenC");
    body.classList.add("bg-amber-100");
    text.classList.add("text-greenC");
    img.classList.add("border-amber-100");
    img.classList.remove("border-greenC");
    img2.classList.add("border-amber-100");
    img2.classList.remove("border-greenC");
    div1.classList.remove("outline-greenC");
    div1.classList.add("outline-amber-100");
    div1.classList.remove("bg-amber-100");
    div1.classList.add("bg-greenC");
    div1.classList.remove("text-greenC");
    div1.classList.add("text-amber-100");
    div2.classList.remove("bg-amber-100");
    div2.classList.add("bg-greenC");
    serves.classList.add("text-greenC");
    serves.classList.remove("text-amber-100");
    serves1.classList.remove("bg-amber-100");
    serves1.classList.add("bg-greenC");
    serves2.classList.remove("bg-amber-100");
    serves2.classList.add("bg-greenC");
    serves3.classList.remove("bg-amber-100");
    serves3.classList.add("bg-greenC");
    serves3.classList.remove("text-greenC");
    serves3.classList.add("text-amber-100");
    serves2.classList.remove("text-greenC");
    serves2.classList.add("text-amber-100");
    serves1.classList.remove("text-greenC");
    serves1.classList.add("text-amber-100");
    mode.classList.remove("bg-amber-100");
    mode.classList.add("bg-greenC");
    mode.classList.add("text-amber-100");
    mode.classList.remove("text-greenC");
    nav.classList.add("bg-amber-100");
    nav.classList.remove("bg-greenC");
    nav.classList.remove("text-amber-100");
    nav.classList.add("text-greenC");
    nave.classList.add("bg-amber-100");
    nave.classList.remove("bg-greenC");
    nave.classList.add("shadow-greenC");
    nave.classList.remove("shadow-amber-100");
    divs.forEach((item) => {
      item.classList.remove("bg-amber-100");
      item.classList.add("bg-greenC");
      item.classList.remove("text-greenC");
      item.classList.add("text-amber-100");
      if (item.classList.contains("text-greenC")) {
        item.classList.remove("text-greenC");
        item.classList.add("text-amber-100");
      }
    });
  } else {
    body.classList.add("bg-greenC");
    body.classList.add("text-amber-100");
    body.classList.remove("text-greenC");
    body.classList.remove("bg-amber-100");
    text.classList.remove("text-greenC");
    img.classList.remove("border-amber-100");
    img.classList.add("border-greenC");
    img2.classList.remove("border-amber-100");
    img2.classList.add("border-greenC");
    div1.classList.add("outline-greenC");
    div1.classList.remove("outline-amber-100");
    div1.classList.add("bg-amber-100");
    div1.classList.remove("bg-greenC");
    div1.classList.add("text-greenC");
    div1.classList.remove("text-amber-100");
    div2.classList.add("bg-amber-100");
    div2.classList.remove("bg-greenC");
    serves.classList.remove("text-greenC");
    serves.classList.add("text-amber-100");
    serves1.classList.add("bg-amber-100");
    serves1.classList.remove("bg-greenC");
    serves2.classList.add("bg-amber-100");
    serves2.classList.remove("bg-greenC");
    serves3.classList.add("bg-amber-100");
    serves3.classList.remove("bg-greenC");
    serves3.classList.add("text-greenC");
    serves3.classList.remove("text-amber-100");
    serves2.classList.add("text-greenC");
    serves2.classList.remove("text-amber-100");
    serves1.classList.add("text-greenC");
    serves1.classList.remove("text-amber-100");
    mode.classList.add("bg-amber-100");
    mode.classList.remove("bg-greenC");
    mode.classList.remove("text-amber-100");
    mode.classList.add("text-greenC");
    nav.classList.remove("bg-amber-100");
    nav.classList.add("bg-greenC");
    nave.classList.remove("bg-amber-100");
    nave.classList.add("bg-greenC");
    nav.classList.add("text-amber-100");
    nav.classList.remove("text-greenC");
    nave.classList.remove("shadow-greenC");
    nave.classList.add("shadow-amber-100");
    divs.forEach((item) => {
      item.classList.add("bg-amber-100");
      item.classList.remove("bg-greenC");
      item.classList.add("text-greenC");
      item.classList.remove("text-amber-100");
    });
  }
});

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

// about us
const textType = document.getElementById("textType");
let index = 0;
let type = "با هم در مهربانی، در حال تغییر زندگی‌ها";
const h1 = document.createElement("h1");
textType.append(h1);
setInterval(() => {
  h1.textContent += type[index];
  index++;
  if (index > type.length) {
    index = 0;
    h1.textContent = "";
  }
}, 200);
const clickMe = document.getElementById("clickMe");
const hieght = document.getElementById("hieght");
const Answers = document.getElementById("Answers");
const clickMe2 = document.getElementById("clickMe2");
const hieght2 = document.getElementById("hieght2");
const Answers2 = document.getElementById("Answers2");
const clickMe3 = document.getElementById("clickMe3");
const hieght3 = document.getElementById("hieght3");
const Answers3 = document.getElementById("Answers3");
const clickMe4 = document.getElementById("clickMe4");
const hieght4 = document.getElementById("hieght4");
const Answers4 = document.getElementById("Answers4");
const clickMe5 = document.getElementById("clickMe5");
const hieght5 = document.getElementById("hieght5");
const Answers5 = document.getElementById("Answers5");
clickMe.addEventListener("click", () => {
  if (hieght.classList.contains("h-14")) {
    hieght.classList.remove("h-14");
    hieght.classList.add("h-40");
    clickMe.classList.add("div-p");
    clickMe.classList.add("text-greenC");
    Answers.classList.remove("hidden");
    // clickme-2
    hieght2.classList.add("h-14");
    hieght2.classList.remove("h-40");
    clickMe2.classList.remove("div-p");
    clickMe2.classList.remove("text-greenC");
    Answers2.classList.add("hidden");
    // clickme3
    hieght3.classList.add("h-14");
    hieght3.classList.remove("h-40");
    clickMe3.classList.remove("div-p");
    clickMe3.classList.remove("text-greenC");
    Answers3.classList.add("hidden");
    // clickme4
    hieght4.classList.add("h-14");
    hieght4.classList.remove("h-40");
    clickMe4.classList.remove("div-p");
    clickMe4.classList.remove("text-greenC");
    Answers4.classList.add("hidden");
    // clickme5
    hieght5.classList.add("h-14");
    hieght5.classList.remove("h-40");
    clickMe5.classList.remove("div-p");
    clickMe5.classList.remove("text-greenC");
    Answers5.classList.add("hidden");
  } else {
    hieght.classList.add("h-14");
    hieght.classList.remove("h-40");
    clickMe.classList.remove("div-p");
    clickMe.classList.remove("text-greenC");
    Answers.classList.add("hidden");
  }
});
clickMe2.addEventListener("click", () => {
  if (hieght2.classList.contains("h-14")) {
    hieght2.classList.remove("h-14");
    hieght2.classList.add("h-40");
    clickMe2.classList.add("div-p");
    clickMe2.classList.add("text-greenC");
    Answers2.classList.remove("hidden");
    // clickme1
    hieght.classList.add("h-14");
    hieght.classList.remove("h-40");
    clickMe.classList.remove("div-p");
    clickMe.classList.remove("text-greenC");
    Answers.classList.add("hidden");
    // clickme 3
    hieght3.classList.add("h-14");
    hieght3.classList.remove("h-40");
    clickMe3.classList.remove("div-p");
    clickMe3.classList.remove("text-greenC");
    Answers3.classList.add("hidden");
    // clickme4
    hieght4.classList.add("h-14");
    hieght4.classList.remove("h-40");
    clickMe4.classList.remove("div-p");
    clickMe4.classList.remove("text-greenC");
    Answers4.classList.add("hidden");
    // clickme5
    hieght5.classList.add("h-14");
    hieght5.classList.remove("h-40");
    clickMe5.classList.remove("div-p");
    clickMe5.classList.remove("text-greenC");
    Answers5.classList.add("hidden");
  } else {
    hieght2.classList.add("h-14");
    hieght2.classList.remove("h-40");
    clickMe2.classList.remove("div-p");
    clickMe2.classList.remove("text-greenC");
    Answers2.classList.add("hidden");
  }
});
clickMe3.addEventListener("click", () => {
  if (hieght3.classList.contains("h-14")) {
    hieght3.classList.remove("h-14");
    hieght3.classList.add("h-40");
    clickMe3.classList.add("div-p");
    clickMe3.classList.add("text-greenC");
    Answers3.classList.remove("hidden");
    // clickme1
    hieght.classList.add("h-14");
    hieght.classList.remove("h-40");
    clickMe.classList.remove("div-p");
    clickMe.classList.remove("text-greenC");
    Answers.classList.add("hidden");
    // clickme2
    hieght2.classList.add("h-14");
    hieght2.classList.remove("h-40");
    clickMe2.classList.remove("div-p");
    clickMe2.classList.remove("text-greenC");
    Answers2.classList.add("hidden");
    // clickme4
    hieght4.classList.add("h-14");
    hieght4.classList.remove("h-40");
    clickMe4.classList.remove("div-p");
    clickMe4.classList.remove("text-greenC");
    Answers4.classList.add("hidden");
    // clickme 5
    hieght5.classList.add("h-14");
    hieght5.classList.remove("h-40");
    clickMe5.classList.remove("div-p");
    clickMe5.classList.remove("text-greenC");
    Answers5.classList.add("hidden");
  } else {
    hieght3.classList.add("h-14");
    hieght3.classList.remove("h-40");
    clickMe3.classList.remove("div-p");
    clickMe3.classList.remove("text-greenC");
    Answers3.classList.add("hidden");
  }
});
clickMe4.addEventListener("click", () => {
  if (hieght4.classList.contains("h-14")) {
    hieght4.classList.remove("h-14");
    hieght4.classList.add("h-40");
    clickMe4.classList.add("div-p");
    clickMe4.classList.add("text-greenC");
    Answers4.classList.remove("hidden");
    // clickme1
    hieght.classList.add("h-14");
    hieght.classList.remove("h-40");
    clickMe.classList.remove("div-p");
    clickMe.classList.remove("text-greenC");
    Answers.classList.add("hidden");
    // clickme2
    hieght2.classList.add("h-14");
    hieght2.classList.remove("h-40");
    clickMe2.classList.remove("div-p");
    clickMe2.classList.remove("text-greenC");
    Answers2.classList.add("hidden");
    // clickme3
    hieght3.classList.add("h-14");
    hieght3.classList.remove("h-40");
    clickMe3.classList.remove("div-p");
    clickMe3.classList.remove("text-greenC");
    Answers3.classList.add("hidden");
    // clickme5
    hieght5.classList.add("h-14");
    hieght5.classList.remove("h-40");
    clickMe5.classList.remove("div-p");
    clickMe5.classList.remove("text-greenC");
    Answers5.classList.add("hidden");
  } else {
    hieght4.classList.add("h-14");
    hieght4.classList.remove("h-40");
    clickMe4.classList.remove("div-p");
    clickMe4.classList.remove("text-greenC");
    Answers4.classList.add("hidden");
  }
});
// clickme5
clickMe5.addEventListener("click", () => {
  if (hieght5.classList.contains("h-14")) {
    hieght5.classList.remove("h-14");
    hieght5.classList.add("h-40");
    clickMe5.classList.add("div-p");
    clickMe5.classList.add("text-greenC");
    Answers5.classList.remove("hidden");
    // clickme1
    hieght.classList.add("h-14");
    hieght.classList.remove("h-40");
    clickMe.classList.remove("div-p");
    clickMe.classList.remove("text-greenC");
    Answers.classList.add("hidden");
    // clickme2
    hieght2.classList.add("h-14");
    hieght2.classList.remove("h-40");
    clickMe2.classList.remove("div-p");
    clickMe2.classList.remove("text-greenC");
    Answers2.classList.add("hidden");
    // clickme3
    hieght3.classList.add("h-14");
    hieght3.classList.remove("h-40");
    clickMe3.classList.remove("div-p");
    clickMe3.classList.remove("text-greenC");
    Answers3.classList.add("hidden");
  } else {
    hieght5.classList.add("h-14");
    hieght5.classList.remove("h-40");
    clickMe5.classList.remove("div-p");
    clickMe5.classList.remove("text-greenC");
    Answers5.classList.add("hidden");
  }
});
