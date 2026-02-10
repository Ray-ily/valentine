// Load text
document.getElementById("mainTitle").innerHTML = TEXT.mainTitle;
document.getElementById("mainSubtitle").innerHTML = TEXT.mainSubtitle;
document.getElementById("yesBtn").innerHTML = TEXT.yesButton;
document.getElementById("noBtn").innerHTML = TEXT.noButton;

document.getElementById("noTitle").innerHTML = TEXT.noScreenTitle;
document.getElementById("noText").innerHTML = TEXT.noScreenText;

document.getElementById("yesTitle").innerHTML = TEXT.yesScreenTitle;
document.getElementById("yesText").innerHTML = TEXT.yesScreenText;

// Logic
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const main = document.getElementById("main");
const noScreen = document.getElementById("noScreen");
const yesScreen = document.getElementById("yesScreen");

let noCount = 0;

noBtn.addEventListener("click", () => {
  noCount++;

  if (noCount <= 2) {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  } else {
    main.classList.add("hidden");
    noScreen.classList.remove("hidden");
  }
});

yesBtn.addEventListener("click", () => {
  main.classList.add("hidden");
  yesScreen.classList.remove("hidden");
});
