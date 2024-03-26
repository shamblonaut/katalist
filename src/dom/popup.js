import { katalist, saveKatalist } from "../katalist";
import { createKata } from "../kata";
import { createKataListItem } from "./home";

import crossIcon from "../../assets/icons/x.svg";

function newKataPopup() {
  const popupContainer = document.createElement("div");
  popupContainer.classList.add("popup-container");
  document.body.appendChild(popupContainer);

  const popup = document.createElement("form");
  popup.classList.add("popup");
  popupContainer.appendChild(popup);

  popup.addEventListener("keydown", (event) => {
    if (event.key == "Enter") event.preventDefault();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key == "Escape" && document.querySelector(".popup") != undefined)
      closePopup();
  });

  const popupHeader = document.createElement("div");
  popupHeader.classList.add("popup-header");

  const popupPrompt = document.createElement("p");
  popupPrompt.classList.add("popup-prompt");
  popupPrompt.textContent = "New Kata";
  popupHeader.appendChild(popupPrompt);

  const closePopupButton = document.createElement("button");
  closePopupButton.type = "button";
  closePopupButton.classList.add("close-popup-btn");
  closePopupButton.addEventListener("click", closePopup);
  popupHeader.appendChild(closePopupButton);

  const closePopupIcon = document.createElement("img");
  closePopupIcon.src = crossIcon;
  closePopupIcon.alt = "Close Popup";
  closePopupButton.appendChild(closePopupIcon);

  popup.appendChild(popupHeader);

  const popupFields = document.createElement("div");
  popupFields.classList.add("popup-fields");
  popup.appendChild(popupFields);

  const nameField = document.createElement("div");
  nameField.classList.add("field", "name-field");
  popupFields.appendChild(nameField);

  const nameLabel = document.createElement("label");
  nameLabel.for = "name";
  nameLabel.textContent = "Name";
  nameField.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.classList.add("name-input");
  nameInput.name = "name";
  nameField.appendChild(nameInput);

  const colorField = document.createElement("div");
  colorField.classList.add("field", "color-field");
  popupFields.appendChild(colorField);

  const colorLabel = document.createElement("label");
  colorLabel.for = "color";
  colorLabel.textContent = "Color";
  colorField.appendChild(colorLabel);

  const colorInput = document.createElement("input");
  colorInput.classList.add("color-input");
  colorInput.type = "color";
  colorInput.name = "color";
  colorField.appendChild(colorInput);

  const createButton = document.createElement("button");
  createButton.classList.add("popup-submit-btn");
  createButton.type = "button";
  createButton.textContent = "Create";
  popup.appendChild(createButton);

  createButton.addEventListener("click", () => {
    const kataList = document.querySelector(".kata-list");
    const newKata = createKata(nameInput.value, colorInput.value);
    katalist.push(newKata);
    saveKatalist();
    kataList.appendChild(createKataListItem(newKata));
    closePopup();
  });
}

function editKataPopup(index) {
  const popupContainer = document.createElement("div");
  popupContainer.classList.add("popup-container");
  document.body.appendChild(popupContainer);

  const popup = document.createElement("form");
  popup.classList.add("popup");
  popupContainer.appendChild(popup);

  popup.addEventListener("keydown", (event) => {
    if (event.key == "Enter") event.preventDefault();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key == "Escape" && document.querySelector(".popup") != undefined)
      closePopup();
  });

  const popupHeader = document.createElement("div");
  popupHeader.classList.add("popup-header");

  const popupPrompt = document.createElement("p");
  popupPrompt.classList.add("popup-prompt");
  popupPrompt.textContent = "Edit Kata";
  popupHeader.appendChild(popupPrompt);

  const closePopupButton = document.createElement("button");
  closePopupButton.type = "button";
  closePopupButton.classList.add("close-popup-btn");
  closePopupButton.addEventListener("click", closePopup);
  popupHeader.appendChild(closePopupButton);

  const closePopupIcon = document.createElement("img");
  closePopupIcon.src = crossIcon;
  closePopupIcon.alt = "Close Popup";
  closePopupButton.appendChild(closePopupIcon);

  popup.appendChild(popupHeader);

  const popupFields = document.createElement("div");
  popupFields.classList.add("popup-fields");
  popup.appendChild(popupFields);

  const nameField = document.createElement("div");
  nameField.classList.add("field", "name-field");
  popupFields.appendChild(nameField);

  const nameLabel = document.createElement("label");
  nameLabel.for = "name";
  nameLabel.textContent = "Name";
  nameField.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.classList.add("name-input");
  nameInput.name = "name";
  nameInput.value = katalist[index].name;
  nameField.appendChild(nameInput);

  const colorField = document.createElement("div");
  colorField.classList.add("field", "color-field");
  popupFields.appendChild(colorField);

  const colorLabel = document.createElement("label");
  colorLabel.for = "color";
  colorLabel.textContent = "Color";
  colorField.appendChild(colorLabel);

  const colorInput = document.createElement("input");
  colorInput.classList.add("color-input");
  colorInput.type = "color";
  colorInput.name = "color";
  colorInput.value = katalist[index].color;
  colorField.appendChild(colorInput);

  const saveButton = document.createElement("button");
  saveButton.classList.add("popup-submit-btn");
  saveButton.type = "button";
  saveButton.textContent = "Save Changes";
  popup.appendChild(saveButton);

  saveButton.addEventListener("click", () => {
    const kataList = document.querySelector(".kata-list");
    katalist[index].name = nameInput.value;
    katalist[index].color = colorInput.value;
    kataList.replaceChild(
      createKataListItem(katalist[index]),
      kataList.childNodes[index]
    );

    saveKatalist();
    closePopup();
  });
}

function closePopup() {
  const popupContainer = document.querySelector(".popup-container");
  document.body.removeChild(popupContainer);
}

export { newKataPopup, editKataPopup };
