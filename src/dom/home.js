import { katalist, saveKatalist } from "../katalist";

import { openKataPage } from "./kata";
import { editKataPopup, newKataPopup } from "./popup";

import moreIcon from "../../assets/icons/more-vertical.svg";
import penIcon from "../../assets/icons/edit-3.svg";
import trashIcon from "../../assets/icons/trash.svg";

function createKataListItem(kata) {
  const listItem = document.createElement("li");
  listItem.classList.add("kata-list-item");

  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.backgroundColor = kata.color;
  listItem.appendChild(circle);

  const kataName = document.createElement("p");
  kataName.classList.add("kata-list-item-name");
  kataName.textContent = kata.name;
  listItem.appendChild(kataName);

  const kataOptionsButton = document.createElement("button");
  kataOptionsButton.classList.add("kata-options-btn");
  const kataOptionsIcon = document.createElement("img");
  kataOptionsIcon.src = moreIcon;
  kataOptionsButton.appendChild(kataOptionsIcon);
  listItem.appendChild(kataOptionsButton);

  kataOptionsButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const existingPopup = document.querySelector(".kata-options-list");
    if (existingPopup) {
      const parent = existingPopup.parentNode;
      parent.removeChild(existingPopup);

      if (parent === listItem) return;
    }

    const optionsList = document.createElement("div");
    optionsList.classList.add("kata-options-list");

    const editOption = document.createElement("button");
    editOption.classList.add("kata-option");
    editOption.classList.add("kata-edit-option-btn");

    const editIcon = document.createElement("img");
    editIcon.src = penIcon;
    editOption.appendChild(editIcon);

    const editOptionText = document.createElement("p");
    editOptionText.classList.add("kata-edit-option-txt");
    editOptionText.textContent = "Edit";
    editOption.appendChild(editOptionText);

    editOption.addEventListener("click", (event) => {
      event.stopPropagation();
      editKataPopup(
        Array.prototype.indexOf.call(listItem.parentNode.childNodes, listItem)
      );
    });

    optionsList.appendChild(editOption);

    const deleteOption = document.createElement("button");
    deleteOption.classList.add("kata-option");
    deleteOption.classList.add("kata-edit-option-btn");

    const deleteIcon = document.createElement("img");
    deleteIcon.src = trashIcon;
    deleteOption.appendChild(deleteIcon);

    const deleteOptionText = document.createElement("p");
    deleteOptionText.classList.add("kata-edit-option-txt");
    deleteOptionText.textContent = "Delete";
    deleteOption.appendChild(deleteOptionText);

    deleteOption.addEventListener("click", (event) => {
      const kataList = document.querySelector(".kata-list");
      const index = Array.prototype.indexOf.call(kataList.childNodes, listItem);
      kataList.removeChild(kataList.childNodes[index]);
      katalist.splice(index, 1);
      saveKatalist();
      event.stopPropagation();
    });

    optionsList.appendChild(deleteOption);
    listItem.appendChild(optionsList);
  });

  window.addEventListener("click", () => {
    const existingPopup = document.querySelector(".kata-options-list");
    if (existingPopup) existingPopup.parentNode.removeChild(existingPopup);
  });

  listItem.addEventListener("click", () => {
    openKataPage(kata);
  });

  return listItem;
}

function displayKataList() {
  const kataList = document.querySelector(".kata-list");
  katalist.forEach((kata) => {
    kataList.appendChild(createKataListItem(kata));
  });

  const kataPlusButton = document.querySelector(".kata-plus-btn");
  kataPlusButton.addEventListener("click", () => {
    newKataPopup();
  });
}

export { displayKataList, createKataListItem };
