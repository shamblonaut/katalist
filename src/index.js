import "./css/style.css";

import { katalist, loadKatalist, saveKatalist } from "./katalist";
import { createKata, addAction } from "./kata";

import { displayKataList } from "./dom/home";

if (loadKatalist() === false) {
  // Default kata for first session
  const personalKata = createKata("First Steps", "#8ED5E9");
  addAction(
    "Create new kata",
    "Start your self-improvement journey by creating a new kata on the home page.",
    "urgent",
    new Date(),
    personalKata
  );
  addAction(
    "Customize kata",
    "Go back to the home page and click on the more icon next to a kata. Change the name and color of the kata according to your preferences.",
    "medium",
    new Date(),
    personalKata
  );
  addAction(
    "Add new action",
    "Click on the plus buttom up top to insert a new task to the list to keep track of upcoming items.",
    "high",
    new Date(),
    personalKata
  );
  addAction(
    "Remove action",
    "Click on the delete button to delete a task from the list if it's no longer needed.",
    "medium",
    new Date(),
    personalKata
  );
  addAction(
    "Edit action details",
    "Update the title, description, due date, or priority of an existing task by clicking on the edit button. Don't forget to save your changes!",
    "medium",
    new Date(),
    personalKata
  );
  addAction(
    "Expand action to see details",
    "Well, you just did! 😃",
    "high",
    new Date(),
    personalKata
  );
  addAction(
    "Mark action as completed",
    "Check off a task once it's done to mark it as completed.",
    "low",
    new Date(),
    personalKata
  );
  katalist.push(personalKata);
  saveKatalist();
}

displayKataList();
