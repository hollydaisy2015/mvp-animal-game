class Egg {
  constructor(rarity) {
    this.id = crypto.randomUUID();
    this.rarity = rarity;
    this.hatchTime = 3000; // 3 seconds
    this.createdAt = Date.now();
  }

  isReadyToHatch() {
    return Date.now() - this.createdAt >= this.hatchTime;
  }

  hatch() {
    const options = PET_TYPES.filter(p => p.rarity === this.rarity);
    const chosen = options[Math.floor(Math.random() * options.length)];
    return new Pet(chosen);
  }
}
