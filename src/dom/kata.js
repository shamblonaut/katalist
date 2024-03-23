import { createActionItem, createActionCard } from "./action";

function openKataPage(kata) {
  const kataPage = document.querySelector(".kata");
  kataPage.classList.remove("hidden");
  kataPage.style.left = "100vw";
  kataPage.style.transform = "translateX(-100vw)";

  const goBackButton = document.querySelector(".go-back-btn");
  goBackButton.removeEventListener("click", closeKataPage);
  goBackButton.addEventListener("click", closeKataPage);

  const kataName = document.querySelector(".kata-name");
  kataName.textContent = kata.getName();

  const newActionButton = document.querySelector(".new-action-btn");
  newActionButton.addEventListener("click", () => { createActionCard(kata.addAction("", "", "low", new Date()), kata, 0, true) });

  const completionMeter = document.querySelector(".completion-meter");
  completionMeter.style.backgroundColor = kata.getColor();

  const actionList = document.querySelector(".action-list");
  kata.getActions().forEach((action, index) => actionList.appendChild(createActionItem(action, kata, index)));
}

async function closeKataPage() {
  const actionList = document.querySelector(".action-list");
  while(actionList.hasChildNodes()) {
    actionList.removeChild(actionList.firstChild);
  }
  
  const kataPage = document.querySelector(".kata");
  kataPage.style.transform = "translateX(100vw)";
  await new Promise(r => setTimeout(r, 200));
  kataPage.style.left = "";
  kataPage.classList.add("hidden");
  kataPage.style.transform = "";
}

export { openKataPage, closeKataPage };