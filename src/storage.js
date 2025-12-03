function saveGame() {
  localStorage.setItem("pets", JSON.stringify(pets));
  localStorage.setItem("eggs", JSON.stringify(eggs));
}

function loadGame() {
  const p = JSON.parse(localStorage.getItem("pets") || "[]");
  const e = JSON.parse(localStorage.getItem("eggs") || "[]");

  pets.length = 0;
  eggs.length = 0;

  p.forEach(raw => pets.push(Object.assign(new Pet({}), raw)));
  e.forEach(raw => eggs.push(Object.assign(new Egg(), raw)));
}
