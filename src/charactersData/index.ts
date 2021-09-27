import {ICharacter} from './types';
import {Vision} from '../const/consts';
import Bennett from './characters/Bennett';
import Beidou from './characters/Beidou';
import Mona from './characters/Mona';
import Xiao from './characters/Xiao';
import Noelle from './characters/Noelle';
import Chongyun from './characters/Chongyun';
import Amber from './characters/Amber';
import Diluc from './characters/Diluc';
import Klee from './characters/Klee';
import Ningguang from './characters/Ningguang';
import Zhongli from './characters/Zhongli';
import Lisa from './characters/Lisa';
import Keqing from './characters/Keqing';
import Fischl from './characters/Fischl';
import Diona from './characters/Diona';
import Barbara from './characters/Barbara';
import Xingqiu from './characters/Xingqiu';
import Xiangling from './characters/Xiangling';

const Jean = {
  name: 'Jean',
  vision: Vision.ANEMO,
  ascension_materials: {},
  rarity: 5
}

const Raiden = {
  name: 'Raiden',
  vision: Vision.ELECTRO,
  ascension_materials: {},
  rarity: 5
}

const CHARACTERS: ICharacter[] = [
  Amber,
  Barbara,
  Bennett,
  Beidou,
  Chongyun,
  Diluc,
  Diona,
  Fischl,
  Jean,
  Klee,
  Keqing,
  Mona,
  Lisa,
  Noelle,
  Ningguang,
  Raiden,
  Xiangling,
  Xingqiu,
  Zhongli,
  Xiao
]

export default CHARACTERS
