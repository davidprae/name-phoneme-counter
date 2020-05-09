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
      const updatedValue = currentValue.slice(0, 2); //Remove possible "stress" markings (stress is indicated by a number in the 2 position (0-indexed)
      if(voicedPhonemes.includes(updatedValue)) {
        return accumulator + 1;
      }
      return accumulator;
    }, 0)
  }
}
const getVoicedPhonemeCount = createGetVoicedPhonemeCount(voicedPhonemes);

const babyNamesWithVoicedPhonemesCount = getBabyNamesWithVoicedPhonemesCount(babyNames);

console.log(babyNamesWithVoicedPhonemesCount)
