const voicedConsonants = [
  'B',
  'D',
  'G',
  'JH',
  'L',
  'M',
  'N',
  'NG',
  'NX', // dupe of NG
  'R',
  'ZH',
  'DH',
  'V',
  'Wd',
  'Y',
  'Z'
];


const vowels = [
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


const voicedPhonemes = [
  ...voicedConsonants,
  ...vowels
];

export default voicedPhonemes;
