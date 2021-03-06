import _ from 'lodash';
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
      year: 2017
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


const babyNamesSortedByMasculinityScore = _.sortBy(babyNamesWithStats, (bn) => bn.masculinityScore);
babyNamesSortedByMasculinityScore.map(bn => {
  console.log(bn.name, bn.masculinityScore);
})

// getBabyNamesWithPopularity(babyNamesWithStats)
//   .then(data => {
//     // const presentableBabyNames = getPresentableBabyNames(data);
//     // const babyNamesSortedByRank = _.sortBy(presentableBabyNames, (bn) => bn.usageStats.rank);
//
//     // Just copy/pasting output from console to the two text file
//
//     // babyNamesSortedByRank.map(bn => {
//     //   console.log(bn.name, bn.usageStats.rank);
//     // })
//
//   })
//   .catch(error => console.warn('getBabyNamesWithPopularity error', error));

function getPresentableBabyNames(babyNames) {
  return babyNames.map(babyName => {
    return {
      name: babyName.name,
      masculinityScore: babyName.masculinityScore,
      usageStats: babyName.usageStats || 'No data'
    }
  })
}

