import "./css/style.css";

import { createKata } from "./kata"

import { displayKataList } from "./dom/home";

const katas = [];

const personalKata = createKata("Personal", "#007FFF");
personalKata.addAction("Action 1 for Personal", "", "low", new Date(2024, 2, 12));
personalKata.addAction("Action 2 for Personal", "", "low", new Date(2024, 2, 12));
personalKata.addAction("Action 3 for Personal", "", "low", new Date(2024, 2, 12));
personalKata.addAction("Action 4 for Personal", "", "low", new Date(2024, 2, 12));
personalKata.addAction("Action 5 for Personal", "", "low", new Date(2024, 2, 12));
katas.push(personalKata);

const schoolKata = createKata("School", "#00FF00");
schoolKata.addAction("Action 1 for School", "", "medium", new Date(2024, 2, 12));
schoolKata.addAction("Action 2 for School", "", "medium", new Date(2024, 2, 12));
schoolKata.addAction("Action 3 for School", "", "medium", new Date(2024, 2, 12));
schoolKata.addAction("Action 4 for School", "", "medium", new Date(2024, 2, 12));
schoolKata.addAction("Action 5 for School", "", "medium", new Date(2024, 2, 12));
katas.push(schoolKata);

const workKata = createKata("Work", "#FF00FF");
workKata.addAction("Action 1 for Work", "", "high", new Date(2024, 2, 12));
workKata.addAction("Action 2 for Work", "", "high", new Date(2024, 2, 12));
workKata.addAction("Action 3 for Work", "", "high", new Date(2024, 2, 12));
workKata.addAction("Action 4 for Work", "", "high", new Date(2024, 2, 12));
workKata.addAction("Action 5 for Work", "", "high", new Date(2024, 2, 12));
katas.push(workKata);


displayKataList(katas);