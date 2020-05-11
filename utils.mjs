import voicedPhonemes, {schwaVowels, vowels, specialConsonants, stopConsonants} from './phonemes.mjs';


function getBabyNamesWithStats(babyNames) {
  let updatedBabyNames = babyNames;
  updatedBabyNames = getBabyNamesWithVoicedPhonemesCount(updatedBabyNames);
  updatedBabyNames = getBabyNamesWithStressMap(updatedBabyNames);
  updatedBabyNames = getBabyNamesWithEndsInUnstressedSchwa(updatedBabyNames);
  updatedBabyNames = getBabyNamesWithEndsWithVowel(updatedBabyNames);
  updatedBabyNames = getBabyNamesWithEndsWithSpecialConsonant(updatedBabyNames);
  updatedBabyNames = getBabyNamesWithEndsWithStopConsonant(updatedBabyNames);
  updatedBabyNames = getBabyNamesWithBeginsWithVoicedPhoneme(updatedBabyNames);
  updatedBabyNames = getBabyNamesWithSyllableCount(updatedBabyNames);
  updatedBabyNames = getBabyNamesWithMasculinityScore(updatedBabyNames);
  return updatedBabyNames;
}

//MasculinityScore
function getBabyNamesWithMasculinityScore(babyNames) {
  return babyNames.map(getBabyNameWithMasculinityScore);
}
function getBabyNameWithMasculinityScore(babyName) {
  const masculinityScore = getMasculinityScore(babyName);
  return {
    ...babyName,
    masculinityScore
  }
}
function getMasculinityScore(babyName) {
  let masculinityScore = 0;

  //From
  //https://www.mentalfloss.com/article/57175/why-have-baby-names-become-increasingly-female-sounding
  // If the accent is on the second or later syllable
  if(!babyName.isStressOnFirstSyllable) {
    masculinityScore = masculinityScore + 2;
  }
  // If the accent is on the first of three or more syllables
  if(babyName.isStressOnFirstSyllable && babyName.syllableCount > 2) {
    masculinityScore = masculinityScore + 1;
  }
  //If the accent is on the first of two syllables and the name has six or more phonemes.
  if(babyName.isStressOnFirstSyllable && babyName.syllableCount === 2 && babyName.phonemesCount > 5) {
    masculinityScore = masculinityScore + 1;
  }
  //If the name has one syllable
  if(babyName.syllableCount === 1) {
    masculinityScore = masculinityScore - 1;
  }
  //If the last phoneme is an unstressed schwa-like (‘uh’ or ‘ah’) sound
  if(babyName.endsInUnstressedSchwa) {
    masculinityScore = masculinityScore + 1;
  }
  //If the last phoneme ends in vowel
  if(babyName.endsInVowel) {
    masculinityScore = masculinityScore + 1;
  }
  //If the last phoneme is a s, z, f, v, th, ch, zh, or dzh
  if(babyName.endsWithSpecialConsonant) {
    masculinityScore = masculinityScore - 1;
  }
  //If the last phoneme is a stop consonant
  if(babyName.endsWithStopConsonant) {
    masculinityScore = masculinityScore - 2;
  }
  //Not on chart but adding this from other research
  if(babyName.beginsWithVoicedPhoneme) {
    masculinityScore = masculinityScore - 1;
  }
  return masculinityScore;
}



//SyllableCount
function getBabyNamesWithSyllableCount(babyNames) {
  return babyNames.map(getBabyNameWithSyllableCount);
}
function getBabyNameWithSyllableCount(babyName) {
  const syllableCount = getSyllableCount(babyName.syllables);
  return {
    ...babyName,
    syllableCount
  }
}
function getSyllableCount(syllables) {
  return syllables.length; // There will only be a char at 2 if the phoneme includes a stress marking
}


//VoicedPhonemesCount
function getBabyNamesWithVoicedPhonemesCount(babyNames) {
  return babyNames.map(getBabyNameWithVoicedPhonemesCount);
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


//StressMap
function getBabyNamesWithStressMap(babyNames) {
  return babyNames.map(getBabyNameWithStressMap);
}
function getBabyNameWithStressMap(babyName) {
  const stressMap = getStressMapFromPhonemes(babyName.phonemes);
  return {
    ...babyName,
    stressMap
  }
}
function getStressMapFromPhonemes(phonemes) {
  return phonemes.map(phoneme => phoneme.charAt(2) || '_'); // There will only be a char at 2 if the phoneme includes a stress marking
}


//EndsInUnstressedSchwa
function getBabyNamesWithEndsInUnstressedSchwa(babyNames) {
  return babyNames.map(getBabyNameWithEndsInUnstressedSchwa);
}
function getBabyNameWithEndsInUnstressedSchwa(babyName) {
  const endsInUnstressedSchwa = getEndsInUnstressedSchwa(babyName.phonemes);
  return {
    ...babyName,
    endsInUnstressedSchwa
  }
}
function getEndsInUnstressedSchwa(phonemes) {
  const endingPhoneme = phonemes[phonemes.length - 1];
  const isEndingPhonemeStressed = endingPhoneme.slice(2, 3) === '1'; // Remove stress marker
  const endingPhonemeWithoutStressMark = endingPhoneme.slice(0, 2); // Remove stress marker
  return schwaVowels.includes(endingPhonemeWithoutStressMark) && !isEndingPhonemeStressed;
}

//BeginsWithVoicedPhoneme
function getBabyNamesWithBeginsWithVoicedPhoneme(babyNames) {
  return babyNames.map(getBabyNameWithBeginsWithVoicedPhoneme);
}
function getBabyNameWithBeginsWithVoicedPhoneme(babyName) {
  const beginsWithVoicedPhoneme = getBeginsWithVoicedPhoneme(babyName.phonemes);
  return {
    ...babyName,
    beginsWithVoicedPhoneme
  }
}
function getBeginsWithVoicedPhoneme(phonemes) {
  const beginningPhoneme = phonemes[0];
  const beginningPhonemeWithoutStressMark = beginningPhoneme.slice(0, 2); // Remove stress marker
  return voicedPhonemes.includes(beginningPhonemeWithoutStressMark);
}

//EndsWithVowel
function getBabyNamesWithEndsWithVowel(babyNames) {
  return babyNames.map(getBabyNameWithEndsWithVowel);
}
function getBabyNameWithEndsWithVowel(babyName) {
  const endsInVowel = getEndsWithVowel(babyName.phonemes);
  return {
    ...babyName,
    endsInVowel
  }
}
function getEndsWithVowel(phonemes) {
  const endingPhoneme = phonemes[phonemes.length - 1];
  const endingPhonemeWithoutStressMark = endingPhoneme.slice(0, 2); // Remove stress marker
  return vowels.includes(endingPhonemeWithoutStressMark);
}

//EndsWithSpecialConsonant
function getBabyNamesWithEndsWithSpecialConsonant(babyNames) {
  return babyNames.map(getBabyNameWithEndsWithSpecialConsonant);
}
function getBabyNameWithEndsWithSpecialConsonant(babyName) {
  const endsWithSpecialConsonant = getEndsWithSpecialConsonant(babyName.phonemes);
  return {
    ...babyName,
    endsWithSpecialConsonant
  }
}
function getEndsWithSpecialConsonant(phonemes) {
  const endingPhoneme = phonemes[phonemes.length - 1];
  return specialConsonants.includes(endingPhoneme);
}

//WithStopConsonant
function getBabyNamesWithEndsWithStopConsonant(babyNames) {
  return babyNames.map(getBabyNameWithEndsWithStopConsonant);
}
function getBabyNameWithEndsWithStopConsonant(babyName) {
  const endsWithStopConsonant = getEndsWithStopConsonant(babyName.phonemes);
  return {
    ...babyName,
    endsWithStopConsonant
  }
}
function getEndsWithStopConsonant(phonemes) {
  const endingPhoneme = phonemes[phonemes.length - 1];
  return stopConsonants.includes(endingPhoneme);
}


export default getBabyNamesWithStats;
