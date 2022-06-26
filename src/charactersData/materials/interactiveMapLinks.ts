import {BossMaterials, BossSkillMaterial, Flower, Gem, Materials, Rocks} from './materialNames';

export const materialLink = {
  [Flower.WINDWHEEL_ASTER]: '2?shown_types=43&center=-86.05,-488.44&zoom=-0.50',
  [Flower.PHILANEMO_MUSHROOM]: '2?shown_types=39&center=196.25,31.00&zoom=1.00',
  [Flower.QINGXIN]: '2?shown_types=32&center=1508.12,-1842.55&zoom=0.50',
  [Flower.VALBERRY]: '2?shown_types=29&center=-449.86,524.14&zoom=0.50',
  [Flower.SMALL_LAMP_GRASS]: '2?shown_types=33&center=-34.50,97.00&zoom=0.00',
  [Flower.GLAZE_LILY]: '2?shown_types=38&center=2840.25,-1133.50&zoom=1.00',
  [Flower.CALLA_LILY]: '2?shown_types=31&center=-15.50,78.00&zoom=0.00',
  [Flower.SILK_FLOWER]: '2?shown_types=36&center=1342.25,-1146.00&zoom=1.00',
  [Flower.JUEYUN_CHILI]: '2?shown_types=30&center=1416.20,-2106.30&zoom=0.50',
  [Flower.DANDELION_SEED]: '2?shown_types=37&center=114.77,112.60&zoom=-0.50',
  [Flower.AMAKUMO_FRUIT]: '2?shown_types=228&center=6951.59,3605.93&zoom=0.00',
  [Flower.WOLFHOOK]: '2?shown_types=41&center=251.25,-322.50&zoom=1.00',
  [Flower.CECILIA]: '2?shown_types=35&center=-212.92,967.15&zoom=0.50',
  [Flower.VIOLETGRASS]: '2?shown_types=34&center=1509.18,-976.34&zoom=-0.50',
  [Flower.SEA_GANODERMA]: '2?shown_types=185&center=5622.00,1888.00&zoom=-1.00',
  [Flower.SAKURA_BLOOM]: '2?shown_types=199&center=4980.02,3566.82&zoom=0.50',
  [Flower.NAKU_WEED]: '2?shown_types=197&center=6819.20,3300.94&zoom=0.50',
  [Flower.DENDROBIUM]: '2?shown_types=198&center=5811.50,1922.00&zoom=0.00',
  [Rocks.NOCTILUCOUS_JADE]: '2?shown_types=42&center=1222.10,-782.60&zoom=-0.50',
  [Rocks.COR_LAPIS]: '2?shown_types=40&center=1633.63,-1379.40&zoom=-0.50',
  [Rocks.CRYSTAL_MARROW]: '2?shown_types=211&center=6043.50,1679.00&zoom=0.00',
  [Rocks.SANGO_PEARL]: '2?shown_types=227&center=6089.75,48.50&zoom=1.00',
  [Rocks.STARCONCH]: '2?shown_types=78&center=2005.50,-341.00&zoom=0.00',
  [Gem.GEO.PRITHIVA_TOPAZ_GEMSTONE]: '2?shown_types=138,318&center=5354.69,1168.91&zoom=-3.00',
  [Gem.GEO.PRITHIVA_TOPAZ_CHUNK]: '2?shown_types=138,318&center=5354.69,1168.91&zoom=-3.00',
  [Gem.GEO.PRITHIVA_TOPAZ_FRAGMENT]: '2?shown_types=138,318&center=5354.69,1168.91&zoom=-3.00',
  [Gem.GEO.PRITHIVA_TOPAZ_SLIVER]: '2?shown_types=138,318&center=5354.69,1168.91&zoom=-3.00',
  [Gem.ANEMO.VAYUDA_TURQUOISE_GEMSTONE]: '2?shown_types=132&center=-585.00,553.50&zoom=1.00',
  [Gem.ANEMO.VAYUDA_TURQUOISE_CHUNK]: '2?shown_types=132&center=-585.00,553.50&zoom=1.00',
  [Gem.ANEMO.VAYUDA_TURQUOISE_FRAGMENT]: '2?shown_types=132&center=-585.00,553.50&zoom=1.00',
  [Gem.ANEMO.VAYUDA_TURQUOISE_SLIVER]: '2?shown_types=132&center=-585.00,553.50&zoom=1.00',
  [Gem.CRYO.SHIVADA_JADE_GEMSTONE]: '2?shown_types=133,181&center=563.07,114.01&zoom=-0.50',
  [Gem.CRYO.SHIVADA_JADE_CHUNK]: '2?shown_types=133,181&center=563.07,114.01&zoom=-0.50',
  [Gem.CRYO.SHIVADA_JADE_FRAGMENT]: '2?shown_types=133,181&center=563.07,114.01&zoom=-0.50',
  [Gem.CRYO.SHIVADA_JADE_SLIVER]: '2?shown_types=133,181&center=563.07,114.01&zoom=-0.50',
  [Gem.ELECTRO.VAJRADA_AMETHYST_GEMSTONE]: '2?shown_types=135,263&center=3415.00,1300.00&zoom=-3.00',
  [Gem.ELECTRO.VAJRADA_AMETHYST_CHUNK]: '2?shown_types=135,263&center=3415.00,1300.00&zoom=-3.00',
  [Gem.ELECTRO.VAJRADA_AMETHYST_FRAGMENT]: '2?shown_types=135,263&center=3415.00,1300.00&zoom=-3.00',
  [Gem.ELECTRO.VAJRADA_AMETHYST_SLIVER]: '2?shown_types=135,263&center=3415.00,1300.00&zoom=-3.00',
  [Gem.HYDRO.VARUNADA_LAZURITE_GEMSTONE]: '2?shown_types=262,136&center=3415.00,1300.00&zoom=-3.00',
  [Gem.HYDRO.VARUNADA_LAZURITE_CHUNK]: '2?shown_types=262,136&center=3415.00,1300.00&zoom=-3.00',
  [Gem.HYDRO.VARUNADA_LAZURITE_FRAGMENT]: '2?shown_types=262,136&center=3415.00,1300.00&zoom=-3.00',
  [Gem.HYDRO.VARUNADA_LAZURITE_SLIVER]: '2?shown_types=262,136&center=3415.00,1300.00&zoom=-3.00',
  [Gem.PYRO.AGNIDUS_AGATE_GEMSTONE]: '2?shown_types=203,137&center=3415.00,1300.00&zoom=-3.00',
  [Gem.PYRO.AGNIDUS_AGATE_CHUNK]: '2?shown_types=203,137&center=3415.00,1300.00&zoom=-3.00',
  [Gem.PYRO.AGNIDUS_AGATE_FRAGMENT]: '2?shown_types=203,137&center=3415.00,1300.00&zoom=-3.00',
  [Gem.PYRO.AGNIDUS_AGATE_SLIVER]: '2?shown_types=203,137&center=3415.00,1300.00&zoom=-3.00',
  [Materials.TREASURE_HOARDER_INSIGNIA]: '2?shown_types=58&center=2542.97,-1297.37&zoom=-0.50',
  [Materials.SILVER_RAVEN_INSIGNIA]: '2?shown_types=58&center=2542.97,-1297.37&zoom=-0.50',
  [Materials.GOLDEN_RAVEN_INSIGNIA]: '2?shown_types=58&center=2542.97,-1297.37&zoom=-0.50',
  [Materials.WHOPPERFLOWER_NECTAR]: '2?shown_types=48,213,47&center=967.54,-478.54&zoom=-0.50',
  [Materials.SHIMMERING_NECTAR]: '2?shown_types=48,213,47&center=967.54,-478.54&zoom=-0.50',
  [Materials.ENERGY_NECTAR]: '2?shown_types=48,213,47&center=967.54,-478.54&zoom=-0.50',
  [Materials.SLIME_CONDENSATE]: '2?shown_types=59&center=128.91,56.03&zoom=-0.50',
  [Materials.SLIME_SECRETIONS]: '2?shown_types=59&center=128.91,56.03&zoom=-0.50',
  [Materials.SLIME_CONCENTRATE]: '2?shown_types=59&center=128.91,56.03&zoom=-0.50',
  [Materials.DAMAGED_MASK]: '2?shown_types=55,57,56,149,19,20,21,255,53,152,207&center=822.00,-1042.00&zoom=-1.00',
  [Materials.STAINED_MASK]: '2?shown_types=55,57,56,149,19,20,21,255,53,152,207&center=822.00,-1042.00&zoom=-1.00',
  [Materials.OMINOUS_MASK]: '2?shown_types=55,57,56,149,19,20,21,255,53,152,207&center=822.00,-1042.00&zoom=-1.00',
  [Materials.FIRM_ARROWHEAD]: '2?shown_types=56&center=-70.50,-62.00&zoom=0.00',
  [Materials.SHARP_ARROWHEAD]: '2?shown_types=56&center=-70.50,-62.00&zoom=0.00',
  [Materials.WEATHERED_ARROWHEAD]: '2?shown_types=56&center=-70.50,-62.00&zoom=0.00',
  [Materials.RECRUITS_INSIGNIA]: '2?shown_types=54,25,26&center=1370.59,-765.63&zoom=-0.50',
  [Materials.SERGEANTS_INSIGNIA]: '2?shown_types=54,25,26&center=1370.59,-765.63&zoom=-0.50',
  [Materials.LIEUTENANTS_INSIGNIA]: '2?shown_types=54,25,26&center=1370.59,-765.63&zoom=-0.50',
  [Materials.DIVINING_SCROLL]: '2?shown_types=57&center=-24.50,20.00&zoom=0.00',
  [Materials.SEALED_SCROLL]: '2?shown_types=57&center=-24.50,20.00&zoom=0.00',
  [Materials.FORBIDDEN_CURSE_SCROLL]: '2?shown_types=57&center=-24.50,20.00&zoom=0.00',
  [Materials.OLD_HANDGUARD]: '2?shown_types=209&center=5904.50,1849.00&zoom=0.00',
  [Materials.KAGEUCHI_HANDGUARD]: '2?shown_types=209&center=5904.50,1849.00&zoom=0.00',
  [Materials.FAMED_HANDGUARD]: '2?shown_types=209&center=5904.50,1849.00&zoom=0.00',
  [Materials.SPECTRAL_HUSK]: '2?shown_types=229&center=6968.50,3476.00&zoom=0.00',
  [Materials.SPECTRAL_HEART]: '2?shown_types=229&center=6968.50,3476.00&zoom=0.00',
  [Materials.SPECTRAL_NUCLEUS]: '2?shown_types=229&center=6968.50,3476.00&zoom=0.00',
  lightning_prism: '2?shown_types=135&center=1037.75,1209.00&zoom=1.00',
  everflame_seed: '2?shown_types=137&center=2172.00,-1700.50&zoom=1.00',
  cleansing_heart: '2?shown_types=136&center=538.50,-1024.00&zoom=1.00',
  juvenile_jade: '2?shown_types=157&center=2122.50,-2233.00&zoom=1.00',
  basalt_pillar: '2?shown_types=138&center=2275.50,106.50&zoom=1.00',
  hoarfrost_core: '2?shown_types=133&center=226.50,927.50&zoom=1.00',
  hurricane_seed: '2?shown_types=132&center=-585.00,553.50&zoom=1.00',
  storm_beads: '2?shown_types=263&center=7030.50,3510.50&zoom=1.00',
  marionette_core: '2?shown_types=183&center=6270.50,1589.50&zoom=1.00',
  crystalline_bloom: '2?shown_types=181&center=1149.00,-199.00&zoom=1.00',
  perpetual_heart: '2?shown_types=204&center=4446.00,3721.50&zoom=1.00',
  dew_of_repudiation: '2?shown_types=262&center=5879.50,216.50&zoom=1.00',
  smoldering_pearl: '2?shown_types=203&center=5363.00,2430.00&zoom=1.00',
  fluorescent_fungus: '2?shown_types=266&center=8602.96,1826.00&zoom=-1.00',
  riftborn_regalia: '2?shown_types=318&center=8663.00,1892.00&zoom=-1.00',
  onikabuto: '2?shown_types=196&center=5861.00,2708.00&zoom=-1.00',
  dragonheirs_false_fin: '7?shown_types=2,333&center=-1.00,199.00&zoom=-2.00',
  runic_fang: '9?shown_types=352&center=2.00,30.00&zoom=-2.00'
}

// TODO: uncomment map link when pins image will work again in embedded map
export const genshinImpactMap = {
  [Flower.WINDWHEEL_ASTER]: 'names=windwheel_aster',
  [Flower.PHILANEMO_MUSHROOM]: 'names=philanemo_mushroom',
  [Flower.QINGXIN]: 'names=qingxin',
  [Flower.VALBERRY]: 'names=valberry',
  [Flower.SMALL_LAMP_GRASS]: 'names=small_lamp_grass',
  [Flower.GLAZE_LILY]: 'names=glaze_lily',
  [Flower.CALLA_LILY]: 'names=calla_lily',
  [Flower.SILK_FLOWER]: 'names=silk_flower',
  [Flower.JUEYUN_CHILI]: 'names=jueyun_chili',
  [Flower.DANDELION_SEED]: 'names=dandelion_seed',
  [Flower.AMAKUMO_FRUIT]: 'names=amakumo_fruit',
  [Flower.WOLFHOOK]: 'names=wolfhook',
  [Flower.CECILIA]: 'names=cecilia',
  [Flower.VIOLETGRASS]: 'names=violetgrass',
  [Flower.SEA_GANODERMA]: 'names=sea_ganoderm',
  [Flower.SAKURA_BLOOM]: 'names=sakura_bloom',
  [Flower.NAKU_WEED]: 'names=naku_weed',
  [Flower.DENDROBIUM]: 'names=dendrobium',
  [Rocks.NOCTILUCOUS_JADE]: 'names=noctilous_jade',
  [Rocks.COR_LAPIS]: 'names=cor_lapis',
  [Rocks.CRYSTAL_MARROW]: 'names=crystal_marrow',
  [Rocks.SANGO_PEARL]: 'names=sango_pearl',
  [Rocks.STARCONCH]: 'names=starconch',
  [Gem.ANEMO.VAYUDA_TURQUOISE_GEMSTONE]: 'names=anemo_hypostasis',
  [Gem.ANEMO.VAYUDA_TURQUOISE_CHUNK]: 'names=anemo_hypostasis',
  [Gem.ANEMO.VAYUDA_TURQUOISE_FRAGMENT]: 'names=anemo_hypostasis',
  [Gem.ANEMO.VAYUDA_TURQUOISE_SLIVER]: 'names=anemo_hypostasis',
  [Gem.CRYO.SHIVADA_JADE_GEMSTONE]: 'names=cryo_hypostasis,cryo_regisvine',
  [Gem.CRYO.SHIVADA_JADE_CHUNK]: 'names=cryo_hypostasis,cryo_regisvine',
  [Gem.CRYO.SHIVADA_JADE_FRAGMENT]: 'names=cryo_hypostasis,cryo_regisvine',
  [Gem.CRYO.SHIVADA_JADE_SLIVER]: 'names=cryo_hypostasis,cryo_regisvine',
  [Gem.ELECTRO.VAJRADA_AMETHYST_GEMSTONE]: 'names=electro_hypostasis,thunder_manifestation',
  [Gem.ELECTRO.VAJRADA_AMETHYST_CHUNK]: 'names=electro_hypostasis,thunder_manifestation',
  [Gem.ELECTRO.VAJRADA_AMETHYST_FRAGMENT]: 'names=electro_hypostasis,thunder_manifestation',
  [Gem.ELECTRO.VAJRADA_AMETHYST_SLIVER]: 'names=electro_hypostasis,thunder_manifestation',
  [Gem.GEO.PRITHIVA_TOPAZ_GEMSTONE]: 'names=geo_hypostasis,golden_wolflord',
  [Gem.GEO.PRITHIVA_TOPAZ_CHUNK]: 'names=geo_hypostasis,golden_wolflord',
  [Gem.GEO.PRITHIVA_TOPAZ_FRAGMENT]: 'names=geo_hypostasis,golden_wolflord',
  [Gem.GEO.PRITHIVA_TOPAZ_SLIVER]: 'names=geo_hypostasis,golden_wolflord',
  [Gem.HYDRO.VARUNADA_LAZURITE_GEMSTONE]: 'names=hydro_hypostasis,oceanid',
  [Gem.HYDRO.VARUNADA_LAZURITE_CHUNK]: 'names=hydro_hypostasis,oceanid',
  [Gem.HYDRO.VARUNADA_LAZURITE_FRAGMENT]: 'names=hydro_hypostasis,oceanid',
  [Gem.HYDRO.VARUNADA_LAZURITE_SLIVER]: 'names=hydro_hypostasis,oceanid',
  [Gem.PYRO.AGNIDUS_AGATE_GEMSTONE]: 'names=pyro_hypostasis,pyro_regisvine',
  [Gem.PYRO.AGNIDUS_AGATE_CHUNK]: 'names=pyro_hypostasis,pyro_regisvine',
  [Gem.PYRO.AGNIDUS_AGATE_FRAGMENT]: 'names=pyro_hypostasis,pyro_regisvine',
  [Gem.PYRO.AGNIDUS_AGATE_SLIVER]: 'names=pyro_hypostasis,pyro_regisvine',
  [Materials.TREASURE_HOARDER_INSIGNIA]: 'names=treasure_hoarder',
  [Materials.SILVER_RAVEN_INSIGNIA]: 'names=treasure_hoarder',
  [Materials.GOLDEN_RAVEN_INSIGNIA]: 'names=treasure_hoarder',
  [Materials.WHOPPERFLOWER_NECTAR]: 'names=pyro_whopperflower,cryo_whopperflower,electro_whopperflower',
  [Materials.SHIMMERING_NECTAR]: 'names=pyro_whopperflower,cryo_whopperflower,electro_whopperflower',
  [Materials.ENERGY_NECTAR]: 'names=pyro_whopperflower,cryo_whopperflower,electro_whopperflower',
  [Materials.SLIME_CONDENSATE]: 'names=slime',
  [Materials.SLIME_SECRETIONS]: 'names=slime',
  [Materials.SLIME_CONCENTRATE]: 'names=slime',
  [Materials.DAMAGED_MASK]: 'names=hilichurl,samachurl,mitachurl',
  [Materials.STAINED_MASK]: 'names=hilichurl,samachurl,mitachurl',
  [Materials.OMINOUS_MASK]: 'names=hilichurl,samachurl,mitachurl',
  // firm_arrowhead: 'names=',
  // sharp_arrowhead: 'names=',
  // weathered_arrowhead: 'names=',
  [Materials.RECRUITS_INSIGNIA]: 'names=fatui_skirmisher',
  [Materials.SERGEANTS_INSIGNIA]: 'names=fatui_skirmisher',
  [Materials.LIEUTENANTS_INSIGNIA]: 'names=fatui_skirmisher',
  [Materials.DIVINING_SCROLL]: 'names=samachurl',
  [Materials.SEALED_SCROLL]: 'names=samachurl',
  [Materials.FORBIDDEN_CURSE_SCROLL]: 'names=samachurl',
  [Materials.OLD_HANDGUARD]: 'names=nobushi',
  [Materials.KAGEUCHI_HANDGUARD]: 'names=nobushi',
  [Materials.FAMED_HANDGUARD]: 'names=nobushi',
  [Materials.SPECTRAL_HUSK]: 'names=specter',
  [Materials.SPECTRAL_HEART]: 'names=specter',
  [Materials.SPECTRAL_NUCLEUS]: 'names=specter',
  onikabuto: 'names=onikabuto',
  [Flower.FLUORESCENT_FUNGUS]: 'names=fluorescent_fungus',
  [BossMaterials.RUNIC_FANG]: 'names=ruin_serpent',
  [BossMaterials.HURRICANE_SEED]: 'names=anemo_hypostasis',
  [BossMaterials.MARIONETTE_CORE]: 'names=maguu_kenki',
  [BossMaterials.JUVENILE_JADE]: 'names=primo_geovishap',
  [BossMaterials.CRYSTALLINE_BLOOM]: 'names=cryo_hypostasis',
  [BossMaterials.HOARFROST_CORE]: 'names=cryo_regisvine',
  [BossMaterials.PERPETUAL_HEART]: 'names=perpetual_mechanical_array',
  [BossMaterials.DRAGONHEIRS_FALSE_FIN]: 'names=bathysmal_vishap_herd',
  [BossMaterials.LIGHTNING_PRISM]: 'names=electro_hypostasis',
  [BossMaterials.STORM_BEADS]: 'names=thunder_manifestation',
  [BossMaterials.BASALT_PILLAR]: 'names=geo_hypostasis',
  [BossMaterials.RIFTBORN_REGALIA]: 'names=golden_wolflord',
  [BossMaterials.CLEANSING_HEART]: 'names=oceanid',
  [BossMaterials.DEW_OF_REPUDIATION]: 'names=hydro_hypostasis',
  [BossMaterials.EVERFLAME_SEED]: 'names=pyro_regisvine',
  [BossMaterials.SMOLDERING_PEARL]: 'names=pyro_hypostasis',
  [BossSkillMaterial.SPIRIT_LOCKET_OF_BOREAS]: 'names=lupus_boreas_dominator_of_wolves',
  [BossSkillMaterial.RING_OF_BOREAS]: 'names=lupus_boreas_dominator_of_wolves',
  [BossSkillMaterial.TAIL_OF_BOREAS]: 'names=lupus_boreas_dominator_of_wolves',
}
