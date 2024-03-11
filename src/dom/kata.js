import displayAction from "./action";

export default function displayKata(kata) {
  const kataRegion = document.querySelector('.kata');

  const kataName = document.createElement('div');
  kataName.classList.add('kata-name');
  kataName.textContent = kata.getName();
  kataRegion.appendChild(kataName);

  const actionList = document.createElement('ul');
  kata.getActions().forEach((action, index) => {
    actionList.appendChild(displayAction(action, kata, index));
  });
  kataRegion.appendChild(actionList);
}