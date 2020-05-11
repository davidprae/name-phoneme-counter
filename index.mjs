import getBabyNames from "./babynames.mjs";
import usbabynames from "usbabynames";
import getBabyNamesWithStats from './utils.mjs';

const babyNames = getBabyNames();
const babyNamesWithStats = getBabyNamesWithStats(babyNames);

function getBabyNamesWithPopularity(babyNames) {
  return Promise.all(babyNames.map(babyName => {
    const params = {
      name: babyName.name,
      sex: 'F',
      year: 2016
    };
    return usbabynames.get(params)
      .then(data => {
        return {
          ...babyName,
          usageStats: data[0]
        }
      });
  }));
}

getBabyNamesWithPopularity(babyNamesWithStats)
  .then(data => {
    const presentableBabyNames = getPresentableBabyNames(data);
    console.log(presentableBabyNames);
  })
  .catch(error => console.warn('getBabyNamesWithPopularity error', error));

function getPresentableBabyNames(babyNames) {
  return babyNames.map(babyName => {
    return {
      name: babyName.name,
      masculinityScore: babyName.masculinityScore,
      usageStats: babyName.usageStats || 'No data'
    }
  })
}

