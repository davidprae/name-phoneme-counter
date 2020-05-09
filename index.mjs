import getBabyNames from './babynames.mjs';
import voicedPhonemes from './phonemes.mjs';

const babyNames = getBabyNames();

function getBabyNamesWithVoicedPhonemesCount(babyNames) {
  return babyNames.map(babyName => getBabyNameWithVoicedPhonemesCount(babyName));
}

function getBabyNameWithVoicedPhonemesCount(babyName) {
  const phonemes = babyName.phonemes;
  const totalPhonemeCount = phonemes.length;
  const voicedPhonemeCount = getVoicedPhonemeCount(phonemes);
  const voicelessPhonemeCount = totalPhonemeCount - voicedPhonemeCount;
  return {
    ...babyName,
    voicedPhonemeCount,
    voicelessPhonemeCount
  }
}

function createGetVoicedPhonemeCount(voicedPhonemes) {
  return phonemes => {
    return phonemes.reduce((accumulator, currentValue) => {
      if(voicedPhonemes.includes(currentValue)) {
        return accumulator + 1;
      }
      return accumulator;
    }, 0)
  }
}
const getVoicedPhonemeCount = createGetVoicedPhonemeCount(voicedPhonemes);

const babyNamesWithVoicedPhonemesCount = getBabyNamesWithVoicedPhonemesCount(babyNames);

console.log(babyNamesWithVoicedPhonemesCount)
