import voicedPhonemes, {schwaVowels, vowels, specialConsonants, stopConsonants} from './phonemes.mjs';


function getBabyNamesWithStats(babyNames) {
  let updatedBabyNames = babyNames;
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
  const endingPhoneme = getEndingPhoneme(phonemes);
  const endingPhonemeStress = getEndingPhonemeStress(phonemes);
  const isEndingPhonemeStressed = endingPhonemeStress === 1;
  return schwaVowels.includes(endingPhoneme) && !isEndingPhonemeStressed;
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
  const beginningPhoneme = getBeginningPhoneme(phonemes);
  return voicedPhonemes.includes(beginningPhoneme);
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
  const endingPhoneme = getEndingPhoneme(phonemes);
  return vowels.includes(endingPhoneme);
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
  const endingPhoneme = getEndingPhoneme(phonemes);
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
  const endingPhoneme = getEndingPhoneme(phonemes);
  return stopConsonants.includes(endingPhoneme);
}


function getEndingPhoneme(phonemes) {
  return phonemes[phonemes.length - 1].phoneme;
}
function getEndingPhonemeStress(phonemes) {
  return phonemes[phonemes.length - 1].stress;
}

function getBeginningPhoneme(phonemes) {
  return phonemes[0].phoneme;
}

export default getBabyNamesWithStats;
