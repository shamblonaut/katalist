export default function displayAction(action, kata, index) {
  const actionCard = document.createElement('li');
  actionCard.classList.add('action-card');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('click', () => {
    console.log("Hello?");
    kata.removeAction(index);
  });
  actionCard.appendChild(checkbox);

  const title = document.createElement('p');
  title.classList.add('action-title');
  title.textContent = action.getTitle();
  actionCard.appendChild(title);

  const dropdown = document.createElement('button');
  dropdown.classList.add('dropdown-btn');
  const dropdownImage = document.createElement('img');
  dropdownImage.src = '../../assets/icons/chevron-down.svg';
  dropdown.appendChild(dropdownImage);
  actionCard.appendChild(dropdown);

  return actionCard;
}