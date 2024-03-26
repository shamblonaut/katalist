let katalist = [];

function loadKatalist() {
  if (!localStorage.getItem("katalist")) return false;
  katalist = JSON.parse(localStorage.getItem("katalist"));
}

function saveKatalist() {
  console.log(katalist);
  localStorage.setItem("katalist", JSON.stringify(katalist));
}

export { katalist, loadKatalist, saveKatalist };