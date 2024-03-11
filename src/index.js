import './css/style.css';

import { createKata } from './kata'
import displayKata from './dom/kata'
import displayProjects from './dom/nav';

const projects = [];

const kata = createKata('Personal', 'azure');
kata.addAction('Action 1', '', 1, new Date(2024, 2, 12));
kata.addAction('Action 2', '', 1, new Date(2024, 2, 12));
kata.addAction('Action 3', '', 1, new Date(2024, 2, 12));
kata.addAction('Action 4', '', 1, new Date(2024, 2, 12));
kata.addAction('Action 5', '', 1, new Date(2024, 2, 12));

projects.push(kata);
projects.push(kata);
projects.push(kata);
projects.push(kata);

displayProjects(projects);
displayKata(kata);