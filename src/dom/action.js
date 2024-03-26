import { format } from "date-fns";

import { saveKatalist } from "../katalist";
import { getCompletionPercentage, prependAction, removeAction } from "../kata";

import alertIcon from "../../assets/icons/alert-triangle.svg";
import bookmarkIcon from "../../assets/icons/bookmark.svg";
import arrowDownIcon from "../../assets/icons/chevron-down.svg";
import arrowUpIcon from "../../assets/icons/chevron-up.svg";
import editIcon from "../../assets/icons/edit.svg";
import saveIcon from "../../assets/icons/save.svg";
import trashIcon from "../../assets/icons/trash.svg";

function createActionItem(action, kata, index) {
  const actionItem = document.createElement("li");
  actionItem.classList.add("action-item");

  actionItem.addEventListener("click", (event) => event.stopPropagation());

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "done";
  checkbox.classList.add("checkbox");
  actionItem.appendChild(checkbox);

  if (action.completed) {
    checkbox.checked = true;
    actionItem.classList.add("completed");
  }

  checkbox.addEventListener("click", () => {
    actionItem.classList.toggle("completed");
    action.completed = checkbox.checked;
    saveKatalist();

    const completionMeter = document.querySelector(".completion-meter");
    completionMeter.style.width = `${getCompletionPercentage(kata)}%`;
  });

  const actionTitle = document.createElement("p");
  actionTitle.classList.add("action-title");
  actionTitle.textContent = action.title;
  actionItem.appendChild(actionTitle);

  const priorityFlag = document.createElement("img");
  priorityFlag.classList.add("priority-flag");
  priorityFlag.src = action.priority === "urgent" ? alertIcon : bookmarkIcon;
  priorityFlag.classList.add("priority-flag");
  priorityFlag.classList.add(`flag-${action.priority}`);
  actionItem.appendChild(priorityFlag);

  const expandButton = document.createElement("button");
  expandButton.classList.add("expand-button");
  const expandIcon = document.createElement("img");
  expandIcon.src = arrowDownIcon;
  expandIcon.alt = "Expand";
  expandButton.appendChild(expandIcon);
  actionItem.appendChild(expandButton);

  expandButton.addEventListener("click", () =>
    toggleActionDisplayMode(actionItem, action, kata, index)
  );

  return actionItem;
}

function toggleActionDisplayMode(element, action, kata, index) {
  const actionList = document.querySelector(".action-list");

  if (element.classList.contains("action-item")) {
    actionList.replaceChild(createActionCard(action, kata, index), element);
  } else if (element.classList.contains("action-card")) {
    actionList.replaceChild(createActionItem(action, kata, index), element);
  }
}

function createActionCard(action, kata, index, newCard = false) {
  const actionCard = document.createElement("li");
  actionCard.classList.add("action-card");
  actionCard.style.background = `linear-gradient(135deg, ${kata.color}40, #00000000)`;

  const actionStatus = document.createElement("div");
  actionStatus.classList.add("action-status");
  actionCard.appendChild(actionStatus);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "done";
  checkbox.classList.add("checkbox");
  actionStatus.appendChild(checkbox);

  if (action.completed) {
    checkbox.checked = true;
    actionCard.classList.add("completed");
  }

  checkbox.addEventListener("click", () => {
    actionCard.classList.toggle("completed");
    action.completed = checkbox.checked;
    saveKatalist();

    const completionMeter = document.querySelector(".completion-meter");
    completionMeter.style.width = `${getCompletionPercentage(kata)}%`;
  });

  const priorityFlag = document.createElement("img");
  priorityFlag.classList.add("priority-flag");
  priorityFlag.src = action.priority === "urgent" ? alertIcon : bookmarkIcon;
  priorityFlag.classList.add("priority-flag");
  priorityFlag.classList.add(`flag-${action.priority}`);
  actionStatus.appendChild(priorityFlag);

  const actionDetails = document.createElement("div");
  actionDetails.classList.add("action-details");

  const actionTitleValue = document.createElement("p");
  actionTitleValue.classList.add("action-title");
  actionTitleValue.textContent = action.title;
  actionDetails.appendChild(actionTitleValue);

  const actionDescription = document.createElement("div");
  actionDescription.classList.add("action-description", "action-detail");

  const actionDescriptionValue = document.createElement("p");
  actionDescriptionValue.classList.add("action-description-value");
  actionDescriptionValue.textContent = action.description;
  actionDescription.appendChild(actionDescriptionValue);

  actionDetails.appendChild(actionDescription);

  const actionDueDate = document.createElement("div");
  actionDueDate.classList.add("action-due-date", "action-detail");

  const dueDateLabel = document.createElement("label");
  dueDateLabel.classList.add("action-due-date-label");
  dueDateLabel.textContent = "Due Date: ";
  dueDateLabel.for = "due-date";
  actionDueDate.appendChild(dueDateLabel);

  const dueDateValue = document.createElement("p");
  dueDateValue.classList.add("action-due-date-value");
  dueDateValue.textContent = format(action.dueDate, "dd-MM-yyyy");
  actionDueDate.appendChild(dueDateValue);

  actionDetails.appendChild(actionDueDate);

  const actionPriority = document.createElement("div");
  actionPriority.classList.add("action-priority", "action-detail");

  const priorityLabel = document.createElement("label");
  priorityLabel.classList.add("action-priority-label");
  priorityLabel.textContent = "Priority: ";
  priorityLabel.for = "priority";
  actionPriority.appendChild(priorityLabel);

  const priorityValue = document.createElement("p");
  priorityValue.classList.add("action-priority-value");
  const priorityValueString = action.priority;
  priorityValue.textContent = priorityValueString.replace(
    priorityValueString[0],
    priorityValueString[0].toUpperCase()
  );
  actionPriority.appendChild(priorityValue);

  actionDetails.appendChild(actionPriority);

  actionCard.appendChild(actionDetails);

  const actionActions = document.createElement("div");
  actionActions.classList.add("action-actions");

  const closeCardButton = document.createElement("button");
  closeCardButton.classList.add("close-card-button");
  const closeCardIcon = document.createElement("img");
  closeCardIcon.src = arrowUpIcon;
  closeCardIcon.alt = "Close";
  closeCardButton.appendChild(closeCardIcon);
  actionActions.appendChild(closeCardButton);

  closeCardButton.addEventListener("click", () =>
    toggleActionDisplayMode(actionCard, action, kata, index)
  );

  const editCardButton = document.createElement("button");
  editCardButton.classList.add("edit-card-button");
  const editCardIcon = document.createElement("img");
  editCardIcon.src = editIcon;
  editCardIcon.alt = "Edit";
  editCardButton.appendChild(editCardIcon);
  actionActions.appendChild(editCardButton);

  const editCard = (newCard) => {
    const actionTitleInput = document.createElement("input");
    actionTitleInput.classList.add("action-title-input", "action-detail");
    actionTitleInput.placeholder = "Action";
    actionTitleInput.value = action.title;
    actionDetails.replaceChild(actionTitleInput, actionTitleValue);

    const actionDescriptionInput = document.createElement("input");
    actionDescriptionInput.classList.add("action-description-input");
    actionDescriptionInput.placeholder = "Description";
    actionDescriptionInput.value = action.description;
    actionDescription.replaceChild(
      actionDescriptionInput,
      actionDescriptionValue
    );

    const actionDueDateInput = document.createElement("input");
    actionDueDateInput.classList.add("action-due-date-input");
    actionDueDateInput.type = "date";
    actionDueDateInput.value = format(action.dueDate, "yyyy-MM-dd");
    actionDueDate.replaceChild(actionDueDateInput, dueDateValue);

    const actionPrioritySelect = document.createElement("select");
    actionPrioritySelect.classList.add("action-priority-input");
    actionPrioritySelect.name = "priority";
    actionPriority.replaceChild(actionPrioritySelect, priorityValue);

    const lowPriorityOption = document.createElement("option");
    lowPriorityOption.value = "low";
    lowPriorityOption.text = "Low";
    actionPrioritySelect.appendChild(lowPriorityOption);

    const mediumPriorityOption = document.createElement("option");
    mediumPriorityOption.value = "medium";
    mediumPriorityOption.text = "Medium";
    actionPrioritySelect.appendChild(mediumPriorityOption);

    const highPriorityOption = document.createElement("option");
    highPriorityOption.value = "high";
    highPriorityOption.text = "High";
    actionPrioritySelect.appendChild(highPriorityOption);

    const urgentPriorityOption = document.createElement("option");
    urgentPriorityOption.value = "urgent";
    urgentPriorityOption.text = "Urgent";
    actionPrioritySelect.appendChild(urgentPriorityOption);

    switch (action.priority) {
      case "low":
        lowPriorityOption.selected = true;
        break;
      case "medium":
        mediumPriorityOption.selected = true;
        break;
      case "high":
        highPriorityOption.selected = true;
        break;
      case "urgent":
        urgentPriorityOption.selected = true;
        break;
    }

    const saveCardButton = document.createElement("button");
    saveCardButton.classList.add("save-card-button");
    const saveCardIcon = document.createElement("img");
    saveCardIcon.src = saveIcon;
    saveCardIcon.alt = "Save";
    saveCardButton.appendChild(saveCardIcon);
    actionActions.appendChild(saveCardButton);

    saveCardButton.addEventListener("click", () => {
      if (actionTitleInput.value.trim() === "") {
        alert("Please enter a title for the action");
        return;
      }

      action.title = actionTitleInput.value;
      action.description = actionDescriptionInput.value;
      action.dueDate = actionDueDateInput.value
        ? actionDueDateInput.value
        : action.dueDate;
      action.priority = actionPrioritySelect.value;
      if (newCard) prependAction(action, kata);
      saveKatalist();

      closeCardButton.style.display = "";

      const actionList = document.querySelector(".action-list");
      actionList.replaceChild(
        createActionCard(action, kata, index),
        actionCard
      );
    });

    actionActions.replaceChild(saveCardButton, editCardButton);
    closeCardButton.style.display = "none";
  };

  editCardButton.addEventListener("click", () => editCard(false));

  const removeCardButton = document.createElement("button");
  removeCardButton.classList.add("remove-card-button");
  const removeCardIcon = document.createElement("img");
  removeCardIcon.src = trashIcon;
  removeCardIcon.alt = "Remove";
  removeCardButton.appendChild(removeCardIcon);
  actionActions.appendChild(removeCardButton);

  removeCardButton.addEventListener("click", () => {
    const actionList = document.querySelector(".action-list");
    actionList.removeChild(actionCard);
    removeAction(index, kata);
  });

  actionCard.appendChild(actionActions);

  if (newCard) {
    const actionList = document.querySelector(".action-list");
    actionList.insertBefore(actionCard, actionList.firstChild);
    editCard(true);
  }

  return actionCard;
}

export { createActionItem, createActionCard };
