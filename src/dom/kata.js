import { createActionItem, createActionCard } from "./action";

async function openKataPage(kata) {
  const kataPage = document.querySelector(".kata");
  kataPage.style.transform = "translateX(-100vw)";

  const homePage = document.querySelector(".home");
  homePage.style.transform = "translateX(-100vw)";

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
  const kataPage = document.querySelector(".kata");
  kataPage.style.transform = "";

  const homePage = document.querySelector(".home");
  homePage.style.transform = "";
  await new Promise(r => setTimeout(r, 250));

  const actionList = document.querySelector(".action-list");
  while(actionList.hasChildNodes()) {
    actionList.removeChild(actionList.firstChild);
  }
}

export { openKataPage, closeKataPage };