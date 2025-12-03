// Global game state
const pets = [];
const eggs = [];

// First-time starter pet
function giveStarterPet() {
  const starter = new Pet(PET_TYPES[0]); // shiba
  pets.push(starter);
  saveGame();
}

window.onload = () => {
  loadGame();

  if (pets.length === 0) giveStarterPet();

  renderPets();
  renderEggs();

  // Auto-refresh UI every 500ms for egg timers
  setInterval(() => {
    renderEggs();
  }, 500);
};
