import { createKata } from "../kata";
import { createKataListItem } from "./home";

function newKataPopup(katas) {
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

  const formHeader = document.createElement("div");
  formHeader.classList.add("form-header");

  const formPrompt = document.createElement("p");
  formPrompt.classList.add("form-prompt");
  formPrompt.textContent ="Create new Kata";
  formHeader.appendChild(formPrompt);

  const closePopupButton = document.createElement("button");
  closePopupButton.type = "button";
  closePopupButton.classList.add("close-popup-btn");
  closePopupButton.addEventListener("click", closePopup);
  formHeader.appendChild(closePopupButton);

  const closePopupIcon = document.createElement("img");
  closePopupIcon.src = "../../assets/icons/x.svg";
  closePopupIcon.alt = "Close Popup";
  closePopupButton.appendChild(closePopupIcon);

  popup.appendChild(formHeader);

  const nameField = document.createElement("div");
  nameField.classList.add("name-field");
  popup.appendChild(nameField);

  const nameLabel = document.createElement("label");
  nameLabel.for = "name";
  nameLabel.textContent = "Name";
  nameField.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.classList.add("name-input");
  nameInput.name = "name";
  nameField.appendChild(nameInput);

  const colorField = document.createElement("div");
  colorField.classList.add("color-field");
  popup.appendChild(colorField);

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
  createButton.classList.add("new-kata-form-btn");
  createButton.type = "button";
  createButton.textContent = "Create";
  popup.appendChild(createButton);

  createButton.addEventListener("click", () => {
    const kataList = document.querySelector(".kata-list");
    const newKata = createKata(nameInput.value, colorInput.value);
    katas.push(newKata);
    kataList.appendChild(createKataListItem(newKata, katas));
    closePopup();
  });
}

function editKataPopup(katas, index) {
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

  const formHeader = document.createElement("div");
  formHeader.classList.add("form-header");

  const formPrompt = document.createElement("p");
  formPrompt.classList.add("form-prompt");
  formPrompt.textContent ="Edit Kata";
  formHeader.appendChild(formPrompt);

  const closePopupButton = document.createElement("button");
  closePopupButton.type = "button";
  closePopupButton.classList.add("close-popup-btn");
  closePopupButton.addEventListener("click", closePopup);
  formHeader.appendChild(closePopupButton);

  const closePopupIcon = document.createElement("img");
  closePopupIcon.src = "../../assets/icons/x.svg";
  closePopupIcon.alt = "Close Popup";
  closePopupButton.appendChild(closePopupIcon);

  popup.appendChild(formHeader);

  const nameField = document.createElement("div");
  nameField.classList.add("name-field");
  popup.appendChild(nameField);

  const nameLabel = document.createElement("label");
  nameLabel.for = "name";
  nameLabel.textContent = "Name";
  nameField.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.classList.add("name-input");
  nameInput.name = "name";
  nameField.appendChild(nameInput);

  const colorField = document.createElement("div");
  colorField.classList.add("color-field");
  popup.appendChild(colorField);

  const colorLabel = document.createElement("label");
  colorLabel.for = "color";
  colorLabel.textContent = "Color";
  colorField.appendChild(colorLabel);

  const colorInput = document.createElement("input");
  colorInput.classList.add("color-input");
  colorInput.type = "color";
  colorInput.name = "color";
  colorField.appendChild(colorInput);

  const saveButton = document.createElement("button");
  saveButton.classList.add("new-kata-form-btn");
  saveButton.type = "button";
  saveButton.textContent = "Save Changes";
  popup.appendChild(saveButton);

  saveButton.addEventListener("click", () => {
    const kataList = document.querySelector(".kata-list");
    katas[index].setName(nameInput.value);
    katas[index].setColor(colorInput.value);
    kataList.replaceChild(createKataListItem(katas[index]), kataList.childNodes[index]);
    closePopup();
    console.log(katas);
  });
}

function closePopup() {
  const popupContainer = document.querySelector(".popup-container");
  document.body.removeChild(popupContainer);
}

export { newKataPopup, editKataPopup };
