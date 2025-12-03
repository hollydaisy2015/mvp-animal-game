function breedPets(petA, petB) {
  const rarities = [RARITY.COMMON, RARITY.RARE, RARITY.LEGENDARY];

  // egg rarity is influenced by max parent rarity
  const maxIndex = Math.max(
    rarities.indexOf(petA.rarity),
    rarities.indexOf(petB.rarity)
  );

  // roll between 0 and max rarity
  const resultRarity = rarities[Math.floor(Math.random() * (maxIndex + 1))];

  const egg = new Egg(resultRarity);
  eggs.push(egg);
  saveGame();
}
