import { openKataPage } from "./kata";
import { editKataPopup, newKataPopup } from "./popup";

function createKataListItem(kata, katas) {
  const listItem = document.createElement("li");
  listItem.classList.add("kata-list-item");

  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.backgroundColor = kata.getColor();
  listItem.appendChild(circle);

  const kataName = document.createElement("p");
  kataName.classList.add("kata-list-item-name");
  kataName.textContent = kata.getName();
  listItem.appendChild(kataName);

  const kataOptionsButton = document.createElement("button");
  kataOptionsButton.classList.add("kata-options");
  const kataOptionsIcon = document.createElement("img");
  kataOptionsIcon.src = "../../assets/icons/more-vertical.svg";
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
    editOption.classList.add("kata-edit-option-btn");
    
    const editIcon = document.createElement("img");
    editIcon.src = "../../assets/icons/edit-3.svg";
    editOption.appendChild(editIcon);

    const editOptionText = document.createElement("p");
    editOptionText.classList.add("kata-edit-option-txt");
    editOptionText.textContent = "Edit";
    editOption.appendChild(editOptionText);
    
    editOption.addEventListener("click", (event) => {
      event.stopPropagation();
      editKataPopup(katas, Array.prototype.indexOf.call(listItem.parentNode.childNodes, listItem));
    });

    optionsList.appendChild(editOption);

    const deleteOption = document.createElement("button");
    deleteOption.classList.add("kata-edit-option-btn");
    
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "../../assets/icons/trash.svg";
    deleteOption.appendChild(deleteIcon);

    const deleteOptionText = document.createElement("p");
    deleteOptionText.classList.add("kata-edit-option-txt");
    deleteOptionText.textContent = "Delete";
    deleteOption.appendChild(deleteOptionText);
    
    deleteOption.addEventListener("click", (event) => {
      const kataList = document.querySelector(".kata-list");
      const index = Array.prototype.indexOf.call(kataList.childNodes, listItem);;
      kataList.removeChild(kataList.childNodes[index]);
      katas.splice(index, 1);
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

function displayKataList(katas) {
  const kataList = document.querySelector(".kata-list");
  katas.forEach((kata, index) => {
    kataList.appendChild(createKataListItem(kata, katas, index));
  });

  const kataPlusButton = document.querySelector(".kata-plus-btn");
  kataPlusButton.addEventListener("click", () => { newKataPopup(katas) });
}

function randomHex() {
  let n = Math.floor(Math.random() * 16);

  if (n > 9) return String.fromCharCode(97 + (n - 10));
  else return n;
}

export { displayKataList, createKataListItem };
