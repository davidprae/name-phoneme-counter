const rawBabyNameText = `
Ada|EY1 D AH0
Adabelle|AE1 D AH0 B AH0 L
Adalace|AE1 D AH0 L AH0 S
Aisley|AY1 Z L IY0
Alana|AA0 L AE1 N AH0
Alia|AH0 L Y1 AH0
Alice|AE1 L IH0 S
Amalia|AH0 M AA1 L Y AH0
Amelia|AH0 M IY1 L Y AH0
Anastasia|AE0 N AH0 S T EY1 ZH AH0
Annalisa|AE2 N AE0 L IY1 S AH0
Antonia|AE0 N T OW1 N IY0 AH0
Aria|AA1 R IY0 AH0
Astrid|AE1 S T R IH0 D
Augusta|AH0 G AH1 S T AH0
Aurelia|AH0 R AY1 L Y0 AH0
Bailey|B EY1 L IY0
Baxter|B AE1 K S T ER0
Berkley|B ER1 K L IY0
Bernadette|B ER0 N AH0 D EH1 T
Beverly|B EH1 V ER0 L IY0
Bexley|B EH1 K S L IY0
Bloom|B L UW1 M
Bridgette|B R IH1 JH IH0 T
Brijit|B R IH1 JH IH0 T
Camilla|K AH0 M IH1 L AH0
Camille|K AH0 M IY1 L
Celeste|S AH0 L EH1 S T
Chandler|CH AE1 N D L ER0
Clark|K L AA1 R K
Claudia|K L AO1 D IY0 AH0
Daphne|D AE1 F N IY0
Debtina|D EH0 B T IY1 N AH0
Delilah|D AH0 L AY1 L AH0
Elaine|IH0 L EY1 N
Elizadae|IH0 L AY1 Z AH0 D EY0
Evelyn|EH1 V AH0 L AH0 N
Fiona|F IY0 OW1 N AH0
Francis|F R AE1 N S AH0 S
Genevieve|JH EH1 N AH0 V IY2 V
Harmony|HH AA1 R M AH0 N IY0
Harper|HH AA1 R P ER0
Harriett|HH EH1 R IY0 AH0 T
Havoc|HH AE1 V AH0 K
Helena|HH EH1 L AH0 N AH0
Ila|IY1 L AH0
Ira|AY1 R AH0
Irene|AY0 R IY1 N
Iris|AY1 R AH0 S
Isabelle|IH1 Z AH0 B EH2 L
Janet|JH AE1 N AH0 T
Janie|JH EY1 N IY0
Janine|JH AH0 N IY1 N
Jesalyn|JH EH1 Z AH0 L IH0 N
Joplin|JH AA1 P L IH0 N
Joyce|JH OY1 S
Julia|JH UW1 L Y AH0
Juniper|JH UW1 N AH0 P ER0
Kaisley|K EY1 Z L IY0
Kryslyn|K R IH1 S AH0 L IH0 N
Krystian|K R IH1 S CH AH0 N
Lia|L IY1 AH0
Liliane|L IH0 L IY0 AE1 N
Lina|L IY1 N AH0
Livia|L IH1 V IY0 AH0
Love|L AH1 V
Lucia|L UW1 SH AH0
Lucina|L UW0 S AH1 N AH0
Lydia|L IH1 D IY0 AH0
Madeline|M AE1 D AH0 L IH0 N
Maren|M AE1 R AH0 N
Margot|M AA1 R G OW0
Marian|M AA1 R IY0 AH0 N
Marin|M EH1 R IH0 N
Matilda|M AH0 T IH1 L D AH0
Maya|M AY1 AH0
Melanie|M EH1 L AH0 N IY0
Melissa|M AH0 L IH1 S AH0
Melody|M EH1 L AH0 D IY0
Mia|M IY1 AH0
Monica|M AA1 N IH0 K AH0
Nadine|N AH0 D IY1 N
Naomi|N EY0 OW1 M IY0
Nia|N IY1 AH0
Octavia|AA0 K T EY1 V IY0 AH0
Paisley|P EY1 Z L IY0
Pearl|P ER1 L
Penelope|P AH0 N EH1 L AH0 P IY0
Phoebe|F IY1 B IY0
Rose|R OW1 Z
Rosemary|R OW1 Z M EH2 R IY0
Ruth|R UW1 TH
Sabina|S AH0 B IY1 N AH0
Sabrina|S AH0 B R IY1 N AH0
Skylar|S K AY1 L AH0 R
Slay|S L EY1
Sylvia|S IH1 L V IY0 AH0
Vana|V AE1 N AH0
`;

function getFilteredBabyNameEntries(babyNameEntries) {
  return babyNameEntries.filter(babyNameEntry => babyNameEntry);
}

function getCleanBabyNamesEntries(rawBabyNameText) {
  const babyNameEntries = rawBabyNameText.split('\n');
  const filteredBabyNameEntries = getFilteredBabyNameEntries(babyNameEntries);
  return filteredBabyNameEntries.map(babyNameEntry => {
    return getCleanBabyNameEntry(babyNameEntry);
  });
}

function getCleanBabyNameEntry(babyNameEntry) {
  const babyEntryPiecesArray = babyNameEntry.split('|');
  const name = babyEntryPiecesArray[0];
  const phonemes = babyEntryPiecesArray[1] && babyEntryPiecesArray[1].split(' ');

  return name ? {
    name,
    phonemes
  } : null;
}


export default () => getCleanBabyNamesEntries(rawBabyNameText);
