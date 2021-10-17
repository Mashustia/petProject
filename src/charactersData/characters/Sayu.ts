import {Vision} from '../../const/consts';
import {BossMaterials, Rocks, Gem, Materials, MORA, Books, BossSkillMaterial, CROWN_OF_INSIGHT} from '../materialNames';

const Sayu = {
  name: 'Sayu',
  vision: Vision.ANEMO,
  ascension_materials: {
    20: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_SLIVER, count: 1 },
      { material: Rocks.CRYSTAL_MARROW, count: 3 },
      { material: Materials.WHOPPERFLOWER_NECTAR, count: 3 },
      { material: MORA, count: 20000 },
    ],
    40: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_FRAGMENT, count: 3 },
      { material: BossMaterials.MARIONETTE_CORE, count: 2 },
      { material: Rocks.CRYSTAL_MARROW, count: 10 },
      { material: Materials.WHOPPERFLOWER_NECTAR, count: 15 },
      { material: MORA, count: 40000 },
    ],
    50: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_FRAGMENT, count: 6 },
      { material: BossMaterials.MARIONETTE_CORE, count: 4 },
      { material: Rocks.CRYSTAL_MARROW, count: 20 },
      { material: Materials.SHIMMERING_NECTAR, count: 12 },
      { material: MORA, count: 60000 },
    ],
    60: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_CHUNK, count: 3 },
      { material: BossMaterials.MARIONETTE_CORE, count: 8 },
      { material: Rocks.CRYSTAL_MARROW, count: 30 },
      { material: Materials.SHIMMERING_NECTAR, count: 18 },
      { material: MORA, count: 80000 },
    ],
    70: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_CHUNK, count: 6 },
      { material: BossMaterials.MARIONETTE_CORE, count: 12 },
      { material: Rocks.CRYSTAL_MARROW, count: 45 },
      { material: Materials.ENERGY_NECTAR, count: 12 },
      { material: MORA, count: 100000 },
    ],
    80: [
      { material: Gem.ANEMO.VAYUDA_TURQUOISE_GEMSTONE, count: 6 },
      { material: BossMaterials.MARIONETTE_CORE, count: 20 },
      { material: Rocks.CRYSTAL_MARROW, count: 60 },
      { material: Materials.ENERGY_NECTAR, count: 24 },
      { material: MORA, count: 120000 },
    ]
  },
  rarity: 4,
  talent_materials: {
    2: [
      {material: Books.TEACHINGS_OF_LIGHT, count: 3},
      {material: Materials.WHOPPERFLOWER_NECTAR, count: 6},
      {material: MORA, count: 12500}
    ],
    3: [
      {material: Books.GUIDE_TO_LIGHT, count: 2},
      {material: Materials.SHIMMERING_NECTAR, count: 3},
      {material: MORA, count: 17500}
    ],
    4: [
      {material: Books.GUIDE_TO_LIGHT, count: 4},
      {material: Materials.SHIMMERING_NECTAR, count: 4},
      {material: MORA, count: 25000}
    ],
    5: [
      {material: Books.GUIDE_TO_LIGHT, count: 6},
      {material: Materials.SHIMMERING_NECTAR, count: 6},
      {material: MORA, count: 30000}
    ],
    6: [
      {material: Books.GUIDE_TO_LIGHT, count: 9},
      {material: Materials.SHIMMERING_NECTAR, count: 9},
      {material: MORA, count: 37500}
    ],
    7: [
      {material: Books.PHILOSOPHIES_OF_LIGHT, count: 4},
      {material: Materials.ENERGY_NECTAR, count: 4},
      {material: BossSkillMaterial.GILDED_SCALE, count: 1},
      {material: MORA, count: 120000}
    ],
    8: [
      {material: Books.PHILOSOPHIES_OF_LIGHT, count: 6},
      {material: Materials.ENERGY_NECTAR, count: 6},
      {material: BossSkillMaterial.GILDED_SCALE, count: 1},
      {material: MORA, count: 260000}
    ],
    9: [
      {material: Books.PHILOSOPHIES_OF_LIGHT, count: 12},
      {material: Materials.ENERGY_NECTAR, count: 9},
      {material: BossSkillMaterial.GILDED_SCALE, count: 2},
      {material: MORA, count: 450000}
    ],
    10: [
      {material: Books.PHILOSOPHIES_OF_LIGHT, count: 16},
      {material: Materials.ENERGY_NECTAR, count: 12},
      {material: BossSkillMaterial.GILDED_SCALE, count: 2},
      {material: CROWN_OF_INSIGHT, count: 1},
      {material: MORA, count: 700000}
    ]
  }
}

export default Sayu
