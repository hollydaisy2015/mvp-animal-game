function renderPets() {
  const div = document.getElementById("pet-list");
  div.innerHTML = "";

  pets.forEach(p => {
    const el = document.createElement("div");
    el.className = "pet";
    el.innerHTML = `
      <strong>${p.name}</strong> (${p.rarity})<br>
      <button onclick="selectPet('${p.id}')">Select</button>
    `;
    div.appendChild(el);
  });
}

function renderEggs() {
  const div = document.getElementById("egg-list");
  div.innerHTML = "";

  eggs.forEach(e => {
    const el = document.createElement("div");
    el.className = "egg";

    const ready = e.isReadyToHatch();

    el.innerHTML = `
      <strong>Egg (${e.rarity})</strong><br>
      ${ready ? "<button onclick=\"hatchEgg('" + e.id + "')\">Hatch</button>" : "Hatching..."}
    `;

    div.appendChild(el);
  });
}

let firstSelection = null;
function selectPet(id) {
  const pet = pets.find(p => p.id === id);

  if (!firstSelection) {
    firstSelection = pet;
    alert("Selected first parent: " + pet.name);
    return;
  }

  // Second parent selected
  breedPets(firstSelection, pet);
  alert("Egg created!");

  firstSelection = null;
  renderEggs();
}
