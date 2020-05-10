const voicedConsonants = [
  'B',
  'D',
  'G',
  'JH',
  'L',
  'M',
  'N',
  'NG',
  'NX',
  'R',
  'ZH',
  'DH',
  'V',
  'Wd',
  'Y',
  'Z'
];

export const specialConsonants = [
  'S', //s
  'Z', //z
  'F', //f
  'V', //v
  'TH', //th
  'CH', //ch
  'ZH', //zh
  'JH' //dzh
];

export const stopConsonants = [
  'P', //p
  'B', //b
  'T', //t
  'D', //d
  'K', //k
  'G' //g
];

export const vowels = [
  'AA',
  'AE',
  'AH',
  'AO',
  'AW',
  'AX',
  'AXR',
  'AY',
  'EH',
  'ER',
  'EY',
  'IH',
  'IX',
  'IY',
  'OW',
  'OY',
  'UH',
  'UW',
  'UX'
];

export const schwaVowels = [
  'AA',
  'AH'
];


const voicedPhonemes = [
  ...voicedConsonants,
  ...vowels
];

export default voicedPhonemes;
