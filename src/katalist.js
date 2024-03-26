let katalist = [];

function loadKatalist() {
  if (localStorage.getItem("katalist") === null) return false;
  katalist = JSON.parse(localStorage.getItem("katalist"));
}

function saveKatalist() {
  localStorage.setItem("katalist", JSON.stringify(katalist));
}

export { katalist, loadKatalist, saveKatalist };