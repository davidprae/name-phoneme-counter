import _ from 'lodash';

// This output is produced via running babynames.txt through this project https://github.com/jimkang/phonemenon#modules
// `cat babynames.txt  | node phonemize-syllablize.js phoneme-groups-with-syllables.json`
const babyNames = [
  {"word":"Ada","phonemes":[{"phoneme":"EY","stress":1},{"phoneme":"D","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["EY"],["D","AH"]]},
  {"word":"Adabelle","phonemes":[{"phoneme":"AE","stress":1},{"phoneme":"D","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"B","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1}],"syllables":[["AE"],["D","AH"],["B","AH","L"]]},
  {"word":"Adalace","phonemes":[{"phoneme":"AE","stress":1},{"phoneme":"D","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"S","stress":-1}],"syllables":[["AE"],["D","AH"],["L","AH","S"]]},
  {"word":"Aisley","phonemes":[{"phoneme":"AY","stress":1},{"phoneme":"Z","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["AY","Z"],["L","IY"]]},
  {"word":"Alana","phonemes":[{"phoneme":"AA","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["AA"],["L","AE"],["N","AH"]]},
  {"word":"Alia","phonemes":[{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"Y","stress":1},{"phoneme":"AH","stress":0}],"syllables":[["AH"],["L","Y","AH"]]},
  {"word":"Alice","phonemes":[{"phoneme":"AE","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"S","stress":-1}],"syllables":[["AE"],["L","IH","S"]]},
  {"word":"Amalia","phonemes":[{"phoneme":"AH","stress":0},{"phoneme":"M","stress":-1},{"phoneme":"AA","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"Y","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["AH"],["M","AA","L"],["Y","AH"]]},
  {"word":"Amelia","phonemes":[{"phoneme":"AH","stress":0},{"phoneme":"M","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"Y","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["AH"],["M","IY","L"],["Y","AH"]]},
  {"word":"Anastasia","phonemes":[{"phoneme":"AE","stress":0},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"S","stress":-1},{"phoneme":"T","stress":-1},{"phoneme":"EY","stress":1},{"phoneme":"ZH","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["AE"],["N","AH","S"],["T","EY"],["ZH","AH"]]},
  {"word":"Annalisa","phonemes":[{"phoneme":"AE","stress":2},{"phoneme":"N","stress":-1},{"phoneme":"AE","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"S","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["AE"],["N","AE"],["L","IY"],["S","AH"]]},
  {"word":"Antonia","phonemes":[{"phoneme":"AE","stress":0},{"phoneme":"N","stress":-1},{"phoneme":"T","stress":-1},{"phoneme":"OW","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"AH","stress":0}],"syllables":[["AE","N"],["T","OW"],["N","IY"],["AH"]]},
  {"word":"Aria","phonemes":[{"phoneme":"AA","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"AH","stress":0}],"syllables":[["AA"],["R","IY"],["AH"]]},
  {"word":"Astrid","phonemes":[{"phoneme":"AE","stress":1},{"phoneme":"S","stress":-1},{"phoneme":"T","stress":-1},{"phoneme":"R","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"D","stress":-1}],"syllables":[["AE","S","T"],["R","IH","D"]]},
  {"word":"Augusta","phonemes":[{"phoneme":"AH","stress":0},{"phoneme":"G","stress":-1},{"phoneme":"AH","stress":1},{"phoneme":"S","stress":-1},{"phoneme":"T","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["AH"],["G","AH","S"],["T","AH"]]},
  {"word":"Aurelia","phonemes":[{"phoneme":"AH","stress":0},{"phoneme":"R","stress":-1},{"phoneme":"AY","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"Y","stress":0},{"phoneme":"AH","stress":0}],"syllables":[["AH"],["R","AY"],["L","Y","AH"]]},
  {"word":"Bailey","phonemes":[{"phoneme":"B","stress":-1},{"phoneme":"EY","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["B","EY"],["L","IY"]]},
  {"word":"Baxter","phonemes":[{"phoneme":"B","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"K","stress":-1},{"phoneme":"S","stress":-1},{"phoneme":"T","stress":-1},{"phoneme":"ER","stress":0}],"syllables":[["B","AE","K","S"],["T","ER"]]},
  {"word":"Berkley","phonemes":[{"phoneme":"B","stress":-1},{"phoneme":"ER","stress":1},{"phoneme":"K","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["B","ER","K"],["L","IY"]]},
  {"word":"Bernadette","phonemes":[{"phoneme":"B","stress":-1},{"phoneme":"ER","stress":0},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"D","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"T","stress":-1}],"syllables":[["B","ER"],["N","AH"],["D","EH","T"]]},
  {"word":"Beverly","phonemes":[{"phoneme":"B","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"V","stress":-1},{"phoneme":"ER","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["B","EH"],["V","ER"],["L","IY"]]},
  {"word":"Bexley","phonemes":[{"phoneme":"B","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"K","stress":-1},{"phoneme":"S","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["B","EH","K","S"],["L","IY"]]},
  {"word":"Bloom","phonemes":[{"phoneme":"B","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"UW","stress":1},{"phoneme":"M","stress":-1}],"syllables":[["B","L","UW","M"]]},
  {"word":"Bridgette","phonemes":[{"phoneme":"B","stress":-1},{"phoneme":"R","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"JH","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"T","stress":-1}],"syllables":[["B","R","IH"],["JH","IH","T"]]},
  {"word":"Brijit","phonemes":[{"phoneme":"B","stress":-1},{"phoneme":"R","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"JH","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"T","stress":-1}],"syllables":[["B","R","IH"],["JH","IH","T"]]},
  {"word":"Camilla","phonemes":[{"phoneme":"K","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"M","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["K","AH"],["M","IH"],["L","AH"]]},
  {"word":"Camille","phonemes":[{"phoneme":"K","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"M","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"L","stress":-1}],"syllables":[["K","AH"],["M","IY","L"]]},
  {"word":"Celeste","phonemes":[{"phoneme":"S","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"S","stress":-1},{"phoneme":"T","stress":-1}],"syllables":[["S","AH"],["L","EH","S","T"]]},
  {"word":"Chandler","phonemes":[{"phoneme":"CH","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"D","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"ER","stress":0}],"syllables":[["CH","AE","N","D"],["L","ER"]]},
  {"word":"Clark","phonemes":[{"phoneme":"K","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"AA","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"K","stress":-1}],"syllables":[["K","L","AA","R","K"]]},
  {"word":"Claudia","phonemes":[{"phoneme":"K","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"AO","stress":1},{"phoneme":"D","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"AH","stress":0}],"syllables":[["K","L","AO"],["D","IY"],["AH"]]},
  {"word":"Daphne","phonemes":[{"phoneme":"D","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"F","stress":-1},{"phoneme":"N","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["D","AE","F"],["N","IY"]]},
  {"word":"Debtina","phonemes":[{"phoneme":"D","stress":-1},{"phoneme":"EH","stress":0},{"phoneme":"B","stress":-1},{"phoneme":"T","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["D","EH","B"],["T","IY"],["N","AH"]]},
  {"word":"Delilah","phonemes":[{"phoneme":"D","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"AY","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["D","AH"],["L","AY"],["L","AH"]]},
  {"word":"Elaine","phonemes":[{"phoneme":"IH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"EY","stress":1},{"phoneme":"N","stress":-1}],"syllables":[["IH"],["L","EY","N"]]},
  {"word":"Elizadae","phonemes":[{"phoneme":"IH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"AY","stress":1},{"phoneme":"Z","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"D","stress":-1},{"phoneme":"EY","stress":0}],"syllables":[["IH"],["L","AY"],["Z","AH"],["D","EY"]]},
  {"word":"Evelyn","phonemes":[{"phoneme":"EH","stress":1},{"phoneme":"V","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["EH"],["V","AH"],["L","AH","N"]]},
  {"word":"Fiona","phonemes":[{"phoneme":"F","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"OW","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["F","IY"],["OW"],["N","AH"]]},
  {"word":"Francis","phonemes":[{"phoneme":"F","stress":-1},{"phoneme":"R","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"S","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"S","stress":-1}],"syllables":[["F","R","AE","N"],["S","AH","S"]]},
  {"word":"Genevieve","phonemes":[{"phoneme":"JH","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"V","stress":-1},{"phoneme":"IY","stress":2},{"phoneme":"V","stress":-1}],"syllables":[["JH","EH"],["N","AH"],["V","IY","V"]]},
  {"word":"Harmony","phonemes":[{"phoneme":"HH","stress":-1},{"phoneme":"AA","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"M","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["HH","AA","R"],["M","AH"],["N","IY"]]},
  {"word":"Harper","phonemes":[{"phoneme":"HH","stress":-1},{"phoneme":"AA","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"P","stress":-1},{"phoneme":"ER","stress":0}],"syllables":[["HH","AA","R"],["P","ER"]]},
  {"word":"Harriett","phonemes":[{"phoneme":"HH","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"AH","stress":0},{"phoneme":"T","stress":-1}],"syllables":[["HH","EH"],["R","IY"],["AH","T"]]},
  {"word":"Havoc","phonemes":[{"phoneme":"HH","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"V","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"K","stress":-1}],"syllables":[["HH","AE"],["V","AH","K"]]},
  {"word":"Helena","phonemes":[{"phoneme":"HH","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["HH","EH"],["L","AH"],["N","AH"]]},
  {"word":"Ila","phonemes":[{"phoneme":"IY","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["IY"],["L","AH"]]},
  {"word":"Ira","phonemes":[{"phoneme":"AY","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["AY"],["R","AH"]]},
  {"word":"Irene","phonemes":[{"phoneme":"AY","stress":0},{"phoneme":"R","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"N","stress":-1}],"syllables":[["AY"],["R","IY","N"]]},
  {"word":"Iris","phonemes":[{"phoneme":"AY","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"S","stress":-1}],"syllables":[["AY"],["R","AH","S"]]},
  {"word":"Isabelle","phonemes":[{"phoneme":"IH","stress":1},{"phoneme":"Z","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"B","stress":-1},{"phoneme":"EH","stress":2},{"phoneme":"L","stress":-1}],"syllables":[["IH"],["Z","AH"],["B","EH","L"]]},
  {"word":"Janet","phonemes":[{"phoneme":"JH","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"T","stress":-1}],"syllables":[["JH","AE"],["N","AH","T"]]},
  {"word":"Janie","phonemes":[{"phoneme":"JH","stress":-1},{"phoneme":"EY","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["JH","EY"],["N","IY"]]},
  {"word":"Janine","phonemes":[{"phoneme":"JH","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"N","stress":-1}],"syllables":[["JH","AH"],["N","IY","N"]]},
  {"word":"Jesalyn","phonemes":[{"phoneme":"JH","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"Z","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["JH","EH"],["Z","AH"],["L","IH","N"]]},
  {"word":"Joplin","phonemes":[{"phoneme":"JH","stress":-1},{"phoneme":"AA","stress":1},{"phoneme":"P","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["JH","AA","P"],["L","IH","N"]]},
  {"word":"Joyce","phonemes":[{"phoneme":"JH","stress":-1},{"phoneme":"OY","stress":1},{"phoneme":"S","stress":-1}],"syllables":[["JH","OY","S"]]},
  {"word":"Julia","phonemes":[{"phoneme":"JH","stress":-1},{"phoneme":"UW","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"Y","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["JH","UW","L"],["Y","AH"]]},
  {"word":"Juniper","phonemes":[{"phoneme":"JH","stress":-1},{"phoneme":"UW","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"P","stress":-1},{"phoneme":"ER","stress":0}],"syllables":[["JH","UW"],["N","AH"],["P","ER"]]},
  {"word":"Kaisley","phonemes":[{"phoneme":"K","stress":-1},{"phoneme":"EY","stress":1},{"phoneme":"Z","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["K","EY","Z"],["L","IY"]]},
  {"word":"Kryslyn","phonemes":[{"phoneme":"K","stress":-1},{"phoneme":"R","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"S","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["K","R","IH"],["S","AH"],["L","IH","N"]]},
  {"word":"Krystian","phonemes":[{"phoneme":"K","stress":-1},{"phoneme":"R","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"S","stress":-1},{"phoneme":"CH","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["K","R","IH","S"],["CH","AH","N"]]},
  {"word":"Lia","phonemes":[{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"AH","stress":0}],"syllables":[["L","IY"],["AH"]]},
  {"word":"Liliane","phonemes":[{"phoneme":"L","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"AE","stress":1},{"phoneme":"N","stress":-1}],"syllables":[["L","IH"],["L","IY"],["AE","N"]]},
  {"word":"Lina","phonemes":[{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["L","IY"],["N","AH"]]},
  {"word":"Livia","phonemes":[{"phoneme":"L","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"V","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"AH","stress":0}],"syllables":[["L","IH"],["V","IY"],["AH"]]},
  {"word":"Love","phonemes":[{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":1},{"phoneme":"V","stress":-1}],"syllables":[["L","AH","V"]]},
  {"word":"Lucia","phonemes":[{"phoneme":"L","stress":-1},{"phoneme":"UW","stress":1},{"phoneme":"SH","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["L","UW"],["SH","AH"]]},
  {"word":"Lucina","phonemes":[{"phoneme":"L","stress":-1},{"phoneme":"UW","stress":0},{"phoneme":"S","stress":-1},{"phoneme":"AH","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["L","UW"],["S","AH"],["N","AH"]]},
  {"word":"Lydia","phonemes":[{"phoneme":"L","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"D","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"AH","stress":0}],"syllables":[["L","IH"],["D","IY"],["AH"]]},
  {"word":"Madeline","phonemes":[{"phoneme":"M","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"D","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["M","AE"],["D","AH"],["L","IH","N"]]},
  {"word":"Maren","phonemes":[{"phoneme":"M","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["M","AE"],["R","AH","N"]]},
  {"word":"Margot","phonemes":[{"phoneme":"M","stress":-1},{"phoneme":"AA","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"G","stress":-1},{"phoneme":"OW","stress":0}],"syllables":[["M","AA","R"],["G","OW"]]},
  {"word":"Marian","phonemes":[{"phoneme":"M","stress":-1},{"phoneme":"AA","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["M","AA"],["R","IY"],["AH","N"]]},
  {"word":"Marin","phonemes":[{"phoneme":"M","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["M","EH"],["R","IH","N"]]},
  {"word":"Matilda","phonemes":[{"phoneme":"M","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"T","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"D","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["M","AH"],["T","IH","L"],["D","AH"]]},
  {"word":"Maya","phonemes":[{"phoneme":"M","stress":-1},{"phoneme":"AY","stress":1},{"phoneme":"AH","stress":0}],"syllables":[["M","AY"],["AH"]]},
  {"word":"Melanie","phonemes":[{"phoneme":"M","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["M","EH"],["L","AH"],["N","IY"]]},
  {"word":"Melissa","phonemes":[{"phoneme":"M","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"S","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["M","AH"],["L","IH"],["S","AH"]]},
  {"word":"Melody","phonemes":[{"phoneme":"M","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"D","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["M","EH"],["L","AH"],["D","IY"]]},
  {"word":"Mia","phonemes":[{"phoneme":"M","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"AH","stress":0}],"syllables":[["M","IY"],["AH"]]},
  {"word":"Monica","phonemes":[{"phoneme":"M","stress":-1},{"phoneme":"AA","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"K","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["M","AA"],["N","IH"],["K","AH"]]},
  {"word":"Nadine","phonemes":[{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"D","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"N","stress":-1}],"syllables":[["N","AH"],["D","IY","N"]]},
  {"word":"Naomi","phonemes":[{"phoneme":"N","stress":-1},{"phoneme":"EY","stress":0},{"phoneme":"OW","stress":1},{"phoneme":"M","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["N","EY"],["OW"],["M","IY"]]},
  {"word":"Nia","phonemes":[{"phoneme":"N","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"AH","stress":0}],"syllables":[["N","IY"],["AH"]]},
  {"word":"Octavia","phonemes":[{"phoneme":"AA","stress":0},{"phoneme":"K","stress":-1},{"phoneme":"T","stress":-1},{"phoneme":"EY","stress":1},{"phoneme":"V","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"AH","stress":0}],"syllables":[["AA","K"],["T","EY"],["V","IY"],["AH"]]},
  {"word":"Paisley","phonemes":[{"phoneme":"P","stress":-1},{"phoneme":"EY","stress":1},{"phoneme":"Z","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["P","EY","Z"],["L","IY"]]},
  {"word":"Pearl","phonemes":[{"phoneme":"P","stress":-1},{"phoneme":"ER","stress":1},{"phoneme":"L","stress":-1}],"syllables":[["P","ER","L"]]},
  {"word":"Penelope","phonemes":[{"phoneme":"P","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"P","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["P","AH"],["N","EH"],["L","AH"],["P","IY"]]},
  {"word":"Phoebe","phonemes":[{"phoneme":"F","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"B","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["F","IY"],["B","IY"]]},
  {"word":"Rose","phonemes":[{"phoneme":"R","stress":-1},{"phoneme":"OW","stress":1},{"phoneme":"Z","stress":-1}],"syllables":[["R","OW","Z"]]},
  {"word":"Rosemary","phonemes":[{"phoneme":"R","stress":-1},{"phoneme":"OW","stress":1},{"phoneme":"Z","stress":-1},{"phoneme":"M","stress":-1},{"phoneme":"EH","stress":2},{"phoneme":"R","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["R","OW","Z"],["M","EH"],["R","IY"]]},
  {"word":"Ruth","phonemes":[{"phoneme":"R","stress":-1},{"phoneme":"UW","stress":1},{"phoneme":"TH","stress":-1}],"syllables":[["R","UW","TH"]]},
  {"word":"Sabina","phonemes":[{"phoneme":"S","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"B","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["S","AH"],["B","IY"],["N","AH"]]},
  {"word":"Sabrina","phonemes":[{"phoneme":"S","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"B","stress":-1},{"phoneme":"R","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["S","AH","B"],["R","IY"],["N","AH"]]},
  {"word":"Skylar","phonemes":[{"phoneme":"S","stress":-1},{"phoneme":"K","stress":-1},{"phoneme":"AY","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"R","stress":-1}],"syllables":[["S","K","AY"],["L","AH","R"]]},
  {"word":"Slay","phonemes":[{"phoneme":"S","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"EY","stress":1}],"syllables":[["S","L","EY"]]},
  {"word":"Sylvia","phonemes":[{"phoneme":"S","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"V","stress":-1},{"phoneme":"IY","stress":0},{"phoneme":"AH","stress":0}],"syllables":[["S","IH","L"],["V","IY"],["AH"]]},
  {"word":"Vana","phonemes":[{"phoneme":"V","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["V","AE"],["N","AH"]]},
  {"word":"Helen","phonemes":[{"phoneme":"HH","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["HH","EH"],["L","AH","N"]]},
  {"word":"Leona","phonemes":[{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"OW","stress":0},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["L","IY"],["OW"],["N","AH"]]},
  {"word":"Nancy","phonemes":[{"phoneme":"N","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"S","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["N","AE","N"],["S","IY"]]},
  {"word":"Carol","phonemes":[{"phoneme":"K","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1}],"syllables":[["K","AE"],["R","AH","L"]]},
  {"word":"Carole","phonemes":[{"phoneme":"K","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1}],"syllables":[["K","AE"],["R","AH","L"]]},
  {"word":"Mary","phonemes":[{"phoneme":"M","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["M","EH"],["R","IY"]]},
  {"word":"Olive","phonemes":[{"phoneme":"AA","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"V","stress":-1}],"syllables":[["AA"],["L","AH","V"]]},
  {"word":"Dorothea","phonemes":[{"phoneme":"D","stress":-1},{"phoneme":"AO","stress":2},{"phoneme":"R","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"TH","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"AH","stress":0}],"syllables":[["D","AO"],["R","AH"],["TH","IY"],["AH"]]},
  {"word":"Rebecca","phonemes":[{"phoneme":"R","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"B","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"K","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["R","AH"],["B","EH"],["K","AH"]]},
  {"word":"Frances","phonemes":[{"phoneme":"F","stress":-1},{"phoneme":"R","stress":-1},{"phoneme":"AE","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"S","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"S","stress":-1}],"syllables":[["F","R","AE","N"],["S","IH","S"]]},
  {"word":"Ann","phonemes":[{"phoneme":"AE","stress":1},{"phoneme":"N","stress":-1}],"syllables":[["AE","N"]]},
  {"word":"Marjorie","phonemes":[{"phoneme":"M","stress":-1},{"phoneme":"AA","stress":1},{"phoneme":"R","stress":-1},{"phoneme":"JH","stress":-1},{"phoneme":"ER","stress":0},{"phoneme":"IY","stress":0}],"syllables":[["M","AA","R"],["JH","ER"],["IY"]]},
  {"word":"Lily","phonemes":[{"phoneme":"L","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["L","IH"],["L","IY"]]},
  {"word":"Virginia","phonemes":[{"phoneme":"","stress":-1},{"phoneme":"ER","stress":0},{"phoneme":"JH","stress":-1},{"phoneme":"IH","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"Y","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["","ER"],["JH","IH","N"],["Y","AH"]]},
  {"word":"Grace","phonemes":[{"phoneme":"G","stress":-1},{"phoneme":"R","stress":-1},{"phoneme":"EY","stress":1},{"phoneme":"S","stress":-1}],"syllables":[["G","R","EY","S"]]},
  {"word":"Chloe","phonemes":[{"phoneme":"K","stress":-1},{"phoneme":"L","stress":-1},{"phoneme":"OW","stress":1},{"phoneme":"IY","stress":0}],"syllables":[["K","L","OW"],["IY"]]},
  {"word":"Rosalie","phonemes":[{"phoneme":"R","stress":-1},{"phoneme":"OW","stress":1},{"phoneme":"Z","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["R","OW"],["Z","AH"],["L","IY"]]},
  {"word":"Leona","phonemes":[{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"OW","stress":0},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["L","IY"],["OW"],["N","AH"]]},
  {"word":"Autumn","phonemes":[{"phoneme":"AO","stress":1},{"phoneme":"T","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"M","stress":-1}],"syllables":[["AO"],["T","AH","M"]]},
  {"word":"Bellamy","phonemes":[{"phoneme":"B","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"M","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["B","EH"],["L","AH"],["M","IY"]]},
  {"word":"Joni","phonemes":[{"phoneme":"JH","stress":-1},{"phoneme":"OW","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["JH","OW"],["N","IY"]]},
  {"word":"Angelique","phonemes":[{"phoneme":"AE","stress":2},{"phoneme":"N","stress":-1},{"phoneme":"JH","stress":-1},{"phoneme":"EH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"K","stress":-1}],"syllables":[["AE","N"],["JH","EH"],["L","IY","K"]]},
  {"word":"Michalina","phonemes":[{"phoneme":"M","stress":-1},{"phoneme":"AH","stress":2},{"phoneme":"CH","stress":-1},{"phoneme":"AE","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"IY","stress":1},{"phoneme":"N","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["M","AH"],["CH","AE"],["L","IY"],["N","AH"]]},
  {"word":"Francesca","phonemes":[{"phoneme":"F","stress":-1},{"phoneme":"R","stress":-1},{"phoneme":"AE","stress":0},{"phoneme":"N","stress":-1},{"phoneme":"CH","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"S","stress":-1},{"phoneme":"K","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["F","R","AE","N"],["CH","EH","S"],["K","AH"]]},
  {"word":"Stella","phonemes":[{"phoneme":"S","stress":-1},{"phoneme":"T","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["S","T","EH"],["L","AH"]]},
  {"word":"Ruby","phonemes":[{"phoneme":"R","stress":-1},{"phoneme":"UW","stress":1},{"phoneme":"B","stress":-1},{"phoneme":"IY","stress":0}],"syllables":[["R","UW"],["B","IY"]]},
  {"word":"Bella","phonemes":[{"phoneme":"B","stress":-1},{"phoneme":"EH","stress":1},{"phoneme":"L","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["B","EH"],["L","AH"]]},
  {"word":"Zoe","phonemes":[{"phoneme":"Z","stress":-1},{"phoneme":"OW","stress":1},{"phoneme":"IY","stress":0}],"syllables":[["Z","OW"],["IY"]]},
  {"word":"Faith","phonemes":[{"phoneme":"F","stress":-1},{"phoneme":"EY","stress":1},{"phoneme":"TH","stress":-1}],"syllables":[["F","EY","TH"]]},
  {"word":"Thalia","phonemes":[{"phoneme":"T","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"L","stress":-1},{"phoneme":"Y","stress":-1},{"phoneme":"AH","stress":0}],"syllables":[["T","AH","L"],["Y","AH"]]},
  {"word":"Addison","phonemes":[{"phoneme":"AE","stress":1},{"phoneme":"D","stress":-1},{"phoneme":"IH","stress":0},{"phoneme":"S","stress":-1},{"phoneme":"AH","stress":0},{"phoneme":"N","stress":-1}],"syllables":[["AE"],["D","IH"],["S","AH","N"]]},
];

function getCleanBabyNamesEntries(babyNameEntries) {
  const sortedBabyNameEntries = _.sortBy(babyNameEntries, babyName => babyName.word)
  return sortedBabyNameEntries.map((babyNameEntry) => {
    return getCleanBabyNameEntry(babyNameEntry);
  });
}

function getCleanBabyNameEntry(babyNameEntry) {
  const name = babyNameEntry.word;
  const phonemes = babyNameEntry.phonemes;
  const phonemesCount = phonemes.length;
  const syllables = babyNameEntry.syllables;
  const isStressOnFirstSyllable = getIsStressOnFirstSyllable(phonemes, syllables);

  return name
    ? {
        name,
        phonemesCount,
        phonemes,
        syllables,
        isStressOnFirstSyllable
      }
    : null;
}

function getIsStressOnFirstSyllable(phonemes, syllables) {
  const firstSyllableLength = syllables[0].length;
  let isStressOnFirstSyllable = false;
  for(let i = 0; i < firstSyllableLength; i++) {
    isStressOnFirstSyllable = phonemes[i].stress === 1;
    if(isStressOnFirstSyllable) break;
  }
  return isStressOnFirstSyllable;
}

export default () => getCleanBabyNamesEntries(babyNames);
