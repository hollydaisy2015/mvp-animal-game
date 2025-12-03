// Pet rarities
const RARITY = {
  COMMON: "common",
  RARE: "rare",
  LEGENDARY: "legendary",
};

// Predefined pets used in MVP
const PET_TYPES = [
  { name: "Shiba Inu", rarity: RARITY.COMMON, asset: "assets/pets/shiba.png" },
  { name: "Tiger", rarity: RARITY.RARE, asset: "assets/pets/tiger.png" },
  { name: "Unicorn", rarity: RARITY.LEGENDARY, asset: "assets/pets/unicorn.png" },
];

// Pet class
class Pet {
  constructor(type) {
    this.id = crypto.randomUUID();
    this.name = type.name;
    this.rarity = type.rarity;
    this.asset = type.asset;
  }
}
