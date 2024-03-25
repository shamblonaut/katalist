import "./css/style.css";

import { createKata } from "./kata";

import { displayKataList } from "./dom/home";

const katas = [];

const personalKata = createKata("Personal", "#007FFF");
personalKata.addAction(
  "Action 1 for Personal (a really long prefix)",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "low",
  new Date(2024, 2, 12)
);
personalKata.addAction(
  "Action 2 for Personal",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "low",
  new Date(2024, 2, 12)
);
personalKata.addAction(
  "Action 3 for Personal",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "low",
  new Date(2024, 2, 12)
);
personalKata.addAction(
  "Action 4 for Personal",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "low",
  new Date(2024, 2, 12)
);
personalKata.addAction(
  "Action 5 for Personal",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "low",
  new Date(2024, 2, 12)
);
katas.push(personalKata);

const schoolKata = createKata("School", "#00FF00");
schoolKata.addAction(
  "Action 1 for School",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "medium",
  new Date(2024, 2, 12)
);
schoolKata.addAction(
  "Action 2 for School",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "medium",
  new Date(2024, 2, 12)
);
schoolKata.addAction(
  "Action 3 for School",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "medium",
  new Date(2024, 2, 12)
);
schoolKata.addAction(
  "Action 4 for School",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "medium",
  new Date(2024, 2, 12)
);
schoolKata.addAction(
  "Action 5 for School",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "medium",
  new Date(2024, 2, 12)
);
katas.push(schoolKata);

const workKata = createKata("Work", "#FF00FF");
workKata.addAction(
  "Action 1 for Work",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "high",
  new Date(2024, 2, 12)
);
workKata.addAction(
  "Action 2 for Work",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "high",
  new Date(2024, 2, 12)
);
workKata.addAction(
  "Action 3 for Work",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "high",
  new Date(2024, 2, 12)
);
workKata.addAction(
  "Action 4 for Work",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "high",
  new Date(2024, 2, 12)
);
workKata.addAction(
  "Action 5 for Work",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "high",
  new Date(2024, 2, 12)
);
katas.push(workKata);

displayKataList(katas);
