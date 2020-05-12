import _ from 'lodash';
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
Helen|HH EH1 L AH0 N
Leona|L IY1 OW0 N AH0
Nancy|N AE1 N S IY0
Carol|K AE1 R AH0 L
Carole|K AE1 R AH0 L
Mary|M EH1 R IY0
Olive|AA1 L AH0 V
Dorothea|D AO2 R AH0 TH IY1 AH0
Rebecca|R AH0 B EH1 K AH0
Frances|F R AE1 N S IH0 S
Ann|AE1 N
Marjorie|M AA1 R JH ER0 IY0
Lily|L IH1 L IY0
Virginia|ER0 JH IH1 N Y AH0
`;

const babyNames = [
  {"name":"Ada","phonemes2":[{"phoneme":"EY","stress":1},{"phoneme":"D","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["EY"],["D","AH"]]},
  {"name":"Adabelle","phonemes2":[{"phoneme":"AE","stress":1},{"phoneme":"D","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"B","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1}],"syllables":[["AE"],["D","AH"],["B","AH","L"]]},
  {"name":"Adalace","phonemes2":[{"phoneme":"AE","stress":1},{"phoneme":"D","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"S","stress":-1}],"syllables":[["AE"],["D","AH"],["L","AH","S"]]},
  {"name":"Aisley","phonemes2":[{"phoneme":"AY","stress":1},{"phoneme":"Z","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["AY","Z"],["L","IY"]]},
  {"name":"Alana","phonemes2":[{"phoneme":"AA","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["AA"],["L","AE"],["N","AH"]]},
  {"name":"Alia","phonemes2":[{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"Y","stress":1},{"phoneme":"AH","stress":0}],"syllables":[["AH"],["L","Y","AH"]]},
  {"name":"Alice","phonemes2":[{"phoneme":"AE","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"S","stress":-1}],"syllables":[["AE"],["L","IH","S"]]},
  {"name":"Amalia","phonemes2":[{"phoneme":"AH","stress":0},{"phoneme":"M","stress":-1},{"phoneme":"AA","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"Y","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["AH"],["M","AA","L"],["Y","AH"]]},
  {"name":"Amelia","phonemes2":[{"phoneme":"AH","stress":0},{"phoneme":"M","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"Y","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["AH"],["M","IY","L"],["Y","AH"]]},
  {"name":"Anastasia","phonemes2":[{"phoneme":"AE","stress":0},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"S","stress":-1},{"phoneme":"T","stress":-1},{"phoneme":"EY","stress":1},{"phoneme":"ZH","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["AE"],["N","AH","S"],["T","EY"],["ZH","AH"]]},
  {"name":"Annalisa","phonemes2":[{"phoneme":"AE","stress":2},{"phoneme":"N","stress":-1},{"phoneme":"AE","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"S","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["AE"],["N","AE"],["L","IY"],["S","AH"]]},
  {"name":"Antonia","phonemes2":[{"phoneme":"AE","stress":0},{"phoneme":"N","stress":-1},{"phoneme":"T","stress":-1},{"phoneme":"OW","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"AH","stress":0}],"syllables":[["AE","N"],["T","OW"],["N","IY"],["AH"]]},
  {"name":"Aria","phonemes2":[{"phoneme":"AA","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"AH","stress":0}],"syllables":[["AA"],["R","IY"],["AH"]]},
  {"name":"Astrid","phonemes2":[{"phoneme":"AE","stress":1},{"phoneme":"S","stress":-1},{"phoneme":"T","stress":-1},{"phoneme":"R","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"D","stress":-1}],"syllables":[["AE","S","T"],["R","IH","D"]]},
  {"name":"Augusta","phonemes2":[{"phoneme":"AH","stress":0},{"phoneme":"G","stress":-1},{"phoneme":"AH","stress":1},{"phoneme":"S","stress":-1},{"phoneme":"T","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["AH"],["G","AH","S"],["T","AH"]]},
  {"name":"Aurelia","phonemes2":[{"phoneme":"AH","stress":0},{"phoneme":"R","stress":-1},{"phoneme":"AY","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"Y","stress":0},{"phoneme":"AH","stress":0}],"syllables":[["AH"],["R","AY"],["L","Y","AH"]]},
  {"name":"Bailey","phonemes2":[{"phoneme":"B","stress":-1},{"phoneme":"EY","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["B","EY"],["L","IY"]]},
  {"name":"Baxter","phonemes2":[{"phoneme":"B","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"K","stress":-1},{"phoneme":"S","stress":-1},{"phoneme":"T","stress":-1},{"phoneme":"ER","stress":0}],"syllables":[["B","AE","K","S"],["T","ER"]]},
  {"name":"Berkley","phonemes2":[{"phoneme":"B","stress":-1},{"phoneme":"ER","stress":1},{"phoneme":"K","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["B","ER","K"],["L","IY"]]},
  {"name":"Bernadette","phonemes2":[{"phoneme":"B","stress":-1},{"phoneme":"ER","stress":0},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"D","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"T","stress":-1}],"syllables":[["B","ER"],["N","AH"],["D","EH","T"]]},
  {"name":"Beverly","phonemes2":[{"phoneme":"B","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"V","stress":-1},{"phoneme":"ER","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["B","EH"],["V","ER"],["L","IY"]]},
  {"name":"Bexley","phonemes2":[{"phoneme":"B","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"K","stress":-1},{"phoneme":"S","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["B","EH","K","S"],["L","IY"]]},
  {"name":"Bloom","phonemes2":[{"phoneme":"B","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"UW","stress":1},{"phoneme":"M","stress":-1}],"syllables":[["B","L","UW","M"]]},
  {"name":"Bridgette","phonemes2":[{"phoneme":"B","stress":-1},{"phoneme":"R","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"JH","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"T","stress":-1}],"syllables":[["B","R","IH"],["JH","IH","T"]]},
  {"name":"Brijit","phonemes2":[{"phoneme":"B","stress":-1},{"phoneme":"R","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"JH","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"T","stress":-1}],"syllables":[["B","R","IH"],["JH","IH","T"]]},
  {"name":"Camilla","phonemes2":[{"phoneme":"K","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"M","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["K","AH"],["M","IH"],["L","AH"]]},
  {"name":"Camille","phonemes2":[{"phoneme":"K","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"M","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"L","stress":-1}],"syllables":[["K","AH"],["M","IY","L"]]},
  {"name":"Celeste","phonemes2":[{"phoneme":"S","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"S","stress":-1},{"phoneme":"T","stress":-1}],"syllables":[["S","AH"],["L","EH","S","T"]]},
  {"name":"Chandler","phonemes2":[{"phoneme":"CH","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"D","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"ER","stress":0}],"syllables":[["CH","AE","N","D"],["L","ER"]]},
  {"name":"Clark","phonemes2":[{"phoneme":"K","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"AA","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"K","stress":-1}],"syllables":[["K","L","AA","R","K"]]},
  {"name":"Claudia","phonemes2":[{"phoneme":"K","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"AO","stress":1},{"phoneme":"D","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"AH","stress":0}],"syllables":[["K","L","AO"],["D","IY"],["AH"]]},
  {"name":"Daphne","phonemes2":[{"phoneme":"D","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"F","stress":-1},{"phoneme":"N","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["D","AE","F"],["N","IY"]]},
  {"name":"Debtina","phonemes2":[{"phoneme":"D","stress":-1},{"phoneme":"EH","stress":0},{"phoneme":"B","stress":-1},{"phoneme":"T","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["D","EH","B"],["T","IY"],["N","AH"]]},
  {"name":"Delilah","phonemes2":[{"phoneme":"D","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"AY","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["D","AH"],["L","AY"],["L","AH"]]},
  {"name":"Elaine","phonemes2":[{"phoneme":"IH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"EY","stress":1},{"phoneme":"N","stress":-1}],"syllables":[["IH"],["L","EY","N"]]},
  {"name":"Elizadae","phonemes2":[{"phoneme":"IH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"AY","stress":1},{"phoneme":"Z","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"D","stress":-1},{"phoneme":"EY","stress":0}],"syllables":[["IH"],["L","AY"],["Z","AH"],["D","EY"]]},
  {"name":"Evelyn","phonemes2":[{"phoneme":"EH","stress":1},{"phoneme":"V","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["EH"],["V","AH"],["L","AH","N"]]},
  {"name":"Fiona","phonemes2":[{"phoneme":"F","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"OW","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["F","IY"],["OW"],["N","AH"]]},
  {"name":"Francis","phonemes2":[{"phoneme":"F","stress":-1},{"phoneme":"R","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"S","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"S","stress":-1}],"syllables":[["F","R","AE","N"],["S","AH","S"]]},
  {"name":"Genevieve","phonemes2":[{"phoneme":"JH","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"V","stress":-1},{"phoneme":"IY","stress":2},{"phoneme":"V","stress":-1}],"syllables":[["JH","EH"],["N","AH"],["V","IY","V"]]},
  {"name":"Harmony","phonemes2":[{"phoneme":"HH","stress":-1},{"phoneme":"AA","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"M","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["HH","AA","R"],["M","AH"],["N","IY"]]},
  {"name":"Harper","phonemes2":[{"phoneme":"HH","stress":-1},{"phoneme":"AA","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"P","stress":-1},{"phoneme":"ER","stress":0}],"syllables":[["HH","AA","R"],["P","ER"]]},
  {"name":"Harriett","phonemes2":[{"phoneme":"HH","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"AH","stress":0},{"phoneme":"T","stress":-1}],"syllables":[["HH","EH"],["R","IY"],["AH","T"]]},
  {"name":"Havoc","phonemes2":[{"phoneme":"HH","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"V","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"K","stress":-1}],"syllables":[["HH","AE"],["V","AH","K"]]},
  {"name":"Helena","phonemes2":[{"phoneme":"HH","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["HH","EH"],["L","AH"],["N","AH"]]},
  {"name":"Ila","phonemes2":[{"phoneme":"IY","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["IY"],["L","AH"]]},
  {"name":"Ira","phonemes2":[{"phoneme":"AY","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["AY"],["R","AH"]]},
  {"name":"Irene","phonemes2":[{"phoneme":"AY","stress":0},{"phoneme":"R","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"N","stress":-1}],"syllables":[["AY"],["R","IY","N"]]},
  {"name":"Iris","phonemes2":[{"phoneme":"AY","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"S","stress":-1}],"syllables":[["AY"],["R","AH","S"]]},
  {"name":"Isabelle","phonemes2":[{"phoneme":"IH","stress":1},{"phoneme":"Z","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"B","stress":-1},{"phoneme":"EH","stress":2},{"phoneme":"L","stress":-1}],"syllables":[["IH"],["Z","AH"],["B","EH","L"]]},
  {"name":"Janet","phonemes2":[{"phoneme":"JH","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"T","stress":-1}],"syllables":[["JH","AE"],["N","AH","T"]]},
  {"name":"Janie","phonemes2":[{"phoneme":"JH","stress":-1},{"phoneme":"EY","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["JH","EY"],["N","IY"]]},
  {"name":"Janine","phonemes2":[{"phoneme":"JH","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"N","stress":-1}],"syllables":[["JH","AH"],["N","IY","N"]]},
  {"name":"Jesalyn","phonemes2":[{"phoneme":"JH","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"Z","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["JH","EH"],["Z","AH"],["L","IH","N"]]},
  {"name":"Joplin","phonemes2":[{"phoneme":"JH","stress":-1},{"phoneme":"AA","stress":1},{"phoneme":"P","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["JH","AA","P"],["L","IH","N"]]},
  {"name":"Joyce","phonemes2":[{"phoneme":"JH","stress":-1},{"phoneme":"OY","stress":1},{"phoneme":"S","stress":-1}],"syllables":[["JH","OY","S"]]},
  {"name":"Julia","phonemes2":[{"phoneme":"JH","stress":-1},{"phoneme":"UW","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"Y","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["JH","UW","L"],["Y","AH"]]},
  {"name":"Juniper","phonemes2":[{"phoneme":"JH","stress":-1},{"phoneme":"UW","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"P","stress":-1},{"phoneme":"ER","stress":0}],"syllables":[["JH","UW"],["N","AH"],["P","ER"]]},
  {"name":"Kaisley","phonemes2":[{"phoneme":"K","stress":-1},{"phoneme":"EY","stress":1},{"phoneme":"Z","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["K","EY","Z"],["L","IY"]]},
  {"name":"Kryslyn","phonemes2":[{"phoneme":"K","stress":-1},{"phoneme":"R","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"S","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["K","R","IH"],["S","AH"],["L","IH","N"]]},
  {"name":"Krystian","phonemes2":[{"phoneme":"K","stress":-1},{"phoneme":"R","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"S","stress":-1},{"phoneme":"CH","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["K","R","IH","S"],["CH","AH","N"]]},
  {"name":"Lia","phonemes2":[{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"AH","stress":0}],"syllables":[["L","IY"],["AH"]]},
  {"name":"Liliane","phonemes2":[{"phoneme":"L","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"AE","stress":1},{"phoneme":"N","stress":-1}],"syllables":[["L","IH"],["L","IY"],["AE","N"]]},
  {"name":"Lina","phonemes2":[{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["L","IY"],["N","AH"]]},
  {"name":"Livia","phonemes2":[{"phoneme":"L","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"V","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"AH","stress":0}],"syllables":[["L","IH"],["V","IY"],["AH"]]},
  {"name":"Love","phonemes2":[{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":1},{"phoneme":"V","stress":-1}],"syllables":[["L","AH","V"]]},
  {"name":"Lucia","phonemes2":[{"phoneme":"L","stress":-1},{"phoneme":"UW","stress":1},{"phoneme":"SH","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["L","UW"],["SH","AH"]]},
  {"name":"Lucina","phonemes2":[{"phoneme":"L","stress":-1},{"phoneme":"UW","stress":0},{"phoneme":"S","stress":-1},{"phoneme":"AH","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["L","UW"],["S","AH"],["N","AH"]]},
  {"name":"Lydia","phonemes2":[{"phoneme":"L","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"D","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"AH","stress":0}],"syllables":[["L","IH"],["D","IY"],["AH"]]},
  {"name":"Madeline","phonemes2":[{"phoneme":"M","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"D","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["M","AE"],["D","AH"],["L","IH","N"]]},
  {"name":"Maren","phonemes2":[{"phoneme":"M","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["M","AE"],["R","AH","N"]]},
  {"name":"Margot","phonemes2":[{"phoneme":"M","stress":-1},{"phoneme":"AA","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"G","stress":-1},{"phoneme":"OW","stress":0}],"syllables":[["M","AA","R"],["G","OW"]]},
  {"name":"Marian","phonemes2":[{"phoneme":"M","stress":-1},{"phoneme":"AA","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["M","AA"],["R","IY"],["AH","N"]]},
  {"name":"Marin","phonemes2":[{"phoneme":"M","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["M","EH"],["R","IH","N"]]},
  {"name":"Matilda","phonemes2":[{"phoneme":"M","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"T","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"D","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["M","AH"],["T","IH","L"],["D","AH"]]},
  {"name":"Maya","phonemes2":[{"phoneme":"M","stress":-1},{"phoneme":"AY","stress":1},{"phoneme":"AH","stress":0}],"syllables":[["M","AY"],["AH"]]},
  {"name":"Melanie","phonemes2":[{"phoneme":"M","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["M","EH"],["L","AH"],["N","IY"]]},
  {"name":"Melissa","phonemes2":[{"phoneme":"M","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"S","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["M","AH"],["L","IH"],["S","AH"]]},
  {"name":"Melody","phonemes2":[{"phoneme":"M","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"D","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["M","EH"],["L","AH"],["D","IY"]]},
  {"name":"Mia","phonemes2":[{"phoneme":"M","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"AH","stress":0}],"syllables":[["M","IY"],["AH"]]},
  {"name":"Monica","phonemes2":[{"phoneme":"M","stress":-1},{"phoneme":"AA","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"K","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["M","AA"],["N","IH"],["K","AH"]]},
  {"name":"Nadine","phonemes2":[{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"D","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"N","stress":-1}],"syllables":[["N","AH"],["D","IY","N"]]},
  {"name":"Naomi","phonemes2":[{"phoneme":"N","stress":-1},{"phoneme":"EY","stress":0},{"phoneme":"OW","stress":1},{"phoneme":"M","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["N","EY"],["OW"],["M","IY"]]},
  {"name":"Nia","phonemes2":[{"phoneme":"N","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"AH","stress":0}],"syllables":[["N","IY"],["AH"]]},
  {"name":"Octavia","phonemes2":[{"phoneme":"AA","stress":0},{"phoneme":"K","stress":-1},{"phoneme":"T","stress":-1},{"phoneme":"EY","stress":1},{"phoneme":"V","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"AH","stress":0}],"syllables":[["AA","K"],["T","EY"],["V","IY"],["AH"]]},
  {"name":"Paisley","phonemes2":[{"phoneme":"P","stress":-1},{"phoneme":"EY","stress":1},{"phoneme":"Z","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["P","EY","Z"],["L","IY"]]},
  {"name":"Pearl","phonemes2":[{"phoneme":"P","stress":-1},{"phoneme":"ER","stress":1},{"phoneme":"L","stress":-1}],"syllables":[["P","ER","L"]]},
  {"name":"Penelope","phonemes2":[{"phoneme":"P","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"P","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["P","AH"],["N","EH"],["L","AH"],["P","IY"]]},
  {"name":"Phoebe","phonemes2":[{"phoneme":"F","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"B","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["F","IY"],["B","IY"]]},
  {"name":"Rose","phonemes2":[{"phoneme":"R","stress":-1},{"phoneme":"OW","stress":1},{"phoneme":"Z","stress":-1}],"syllables":[["R","OW","Z"]]},
  {"name":"Rosemary","phonemes2":[{"phoneme":"R","stress":-1},{"phoneme":"OW","stress":1},{"phoneme":"Z","stress":-1},{"phoneme":"M","stress":-1},{"phoneme":"EH","stress":2},{"phoneme":"R","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["R","OW","Z"],["M","EH"],["R","IY"]]},
  {"name":"Ruth","phonemes2":[{"phoneme":"R","stress":-1},{"phoneme":"UW","stress":1},{"phoneme":"TH","stress":-1}],"syllables":[["R","UW","TH"]]},
  {"name":"Sabina","phonemes2":[{"phoneme":"S","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"B","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["S","AH"],["B","IY"],["N","AH"]]},
  {"name":"Sabrina","phonemes2":[{"phoneme":"S","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"B","stress":-1},{"phoneme":"R","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["S","AH","B"],["R","IY"],["N","AH"]]},
  {"name":"Skylar","phonemes2":[{"phoneme":"S","stress":-1},{"phoneme":"K","stress":-1},{"phoneme":"AY","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"R","stress":-1}],"syllables":[["S","K","AY"],["L","AH","R"]]},
  {"name":"Slay","phonemes2":[{"phoneme":"S","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"EY","stress":1}],"syllables":[["S","L","EY"]]},
  {"name":"Sylvia","phonemes2":[{"phoneme":"S","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"V","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"AH","stress":0}],"syllables":[["S","IH","L"],["V","IY"],["AH"]]},
  {"name":"Vana","phonemes2":[{"phoneme":"V","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["V","AE"],["N","AH"]]},
  {"name":"Helen","phonemes2":[{"phoneme":"HH","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["HH","EH"],["L","AH","N"]]},
  {"name":"Leona","phonemes2":[{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"OW","stress":0},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["L","IY"],["OW"],["N","AH"]]},
  {"name":"Nancy","phonemes2":[{"phoneme":"N","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"S","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["N","AE","N"],["S","IY"]]},
  {"name":"Carol","phonemes2":[{"phoneme":"K","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1}],"syllables":[["K","AE"],["R","AH","L"]]},
  {"name":"Carole","phonemes2":[{"phoneme":"K","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1}],"syllables":[["K","AE"],["R","AH","L"]]},
  {"name":"Mary","phonemes2":[{"phoneme":"M","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["M","EH"],["R","IY"]]},
  {"name":"Olive","phonemes2":[{"phoneme":"AA","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"V","stress":-1}],"syllables":[["AA"],["L","AH","V"]]},
  {"name":"Dorothea","phonemes2":[{"phoneme":"D","stress":-1},{"phoneme":"AO","stress":2},{"phoneme":"R","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"TH","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"AH","stress":0}],"syllables":[["D","AO"],["R","AH"],["TH","IY"],["AH"]]},
  {"name":"Rebecca","phonemes2":[{"phoneme":"R","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"B","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"K","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["R","AH"],["B","EH"],["K","AH"]]},
  {"name":"Frances","phonemes2":[{"phoneme":"F","stress":-1},{"phoneme":"R","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"S","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"S","stress":-1}],"syllables":[["F","R","AE","N"],["S","IH","S"]]},
  {"name":"Ann","phonemes2":[{"phoneme":"AE","stress":1},{"phoneme":"N","stress":-1}],"syllables":[["AE","N"]]},
  {"name":"Marjorie","phonemes2":[{"phoneme":"M","stress":-1},{"phoneme":"AA","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"JH","stress":-1},{"phoneme":"ER","stress":0},{"phoneme":"IY","stress":0}],"syllables":[["M","AA","R"],["JH","ER"],["IY"]]},
  {"name":"Lily","phonemes2":[{"phoneme":"L","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["L","IH"],["L","IY"]]},
  {"name":"Virginia","phonemes2":[{"phoneme":"","stress":-1},{"phoneme":"ER","stress":0},{"phoneme":"JH","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"Y","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["","ER"],["JH","IH","N"],["Y","AH"]]}
];

function getFilteredBabyNameEntries(babyNameEntries) {
  return babyNameEntries.filter((babyNameEntry) => babyNameEntry);
}

function getCleanBabyNamesEntries(rawBabyNameText) {
  const babyNameEntries = rawBabyNameText.split("\n");
  const filteredBabyNameEntries = getFilteredBabyNameEntries(babyNameEntries);
  return filteredBabyNameEntries.map((babyNameEntry) => {
    return getCleanBabyNameEntry(babyNameEntry);
  });
}

function getCleanBabyNameEntry(babyNameEntry) {
  const babyEntryPiecesArray = babyNameEntry.split("|");
  const name = babyEntryPiecesArray[0];
  const phonemes =
    babyEntryPiecesArray[1] && babyEntryPiecesArray[1].split(" ");
  const phonemesCount = phonemes.length;

  const nameInBabyName = _.find(babyNames, {name:name});
  const phonemes2 = nameInBabyName.phonemes2;
  const syllables = nameInBabyName.syllables;

  const isStressOnFirstSyllable = getIsStressOnFirstSyllable(phonemes2, syllables);

  return name
    ? {
        name,
        phonemes,
        phonemesCount,
        phonemes2,
        syllables,
        isStressOnFirstSyllable
      }
    : null;
}

function getIsStressOnFirstSyllable(phonemes2, syllables) {
  const firstSyllableLength = syllables[0].length;
  let isStressOnFirstSyllable = false;
  for(let i = 0; i < firstSyllableLength; i++) {
    isStressOnFirstSyllable = phonemes2[i].stress === 1;
    if(isStressOnFirstSyllable) break;
  }
  return isStressOnFirstSyllable;
}

export default () => getCleanBabyNamesEntries(rawBabyNameText);
