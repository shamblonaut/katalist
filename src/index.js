import "./css/style.css";

import { katalist, loadKatalist, saveKatalist } from "./katalist";
import { createKata, addAction } from "./kata";

import { displayKataList } from "./dom/home";

if (loadKatalist() === false) {
  // Default kata for first session
  const personalKata = createKata("Personal", "#007FFF");
  addAction(
    "Action 1 for Personal (a really long prefix)",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "low",
    new Date(2024, 2, 12),
    personalKata
  );
  addAction(
    "Action 2 for Personal",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "low",
    new Date(2024, 2, 12),
    personalKata
  );
  addAction(
    "Action 3 for Personal",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "low",
    new Date(2024, 2, 12),
    personalKata
  );
  addAction(
    "Action 4 for Personal",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "low",
    new Date(2024, 2, 12),
    personalKata
  );
  addAction(
    "Action 5 for Personal",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "low",
    new Date(2024, 2, 12),
    personalKata
  );
  katalist.push(personalKata);
  saveKatalist();
}

displayKataList();
