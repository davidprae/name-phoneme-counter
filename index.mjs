import getBabyNames from "./babynames.mjs";
import usbabynames from "us-baby-names";
import getBabyNamesWithStats from './utils.mjs';

const babyNames = getBabyNames();
const babyNamesWithStats = getBabyNamesWithStats(babyNames);

const babyNamesWithPopularity = babyNamesWithStats.map((bn) => {
  const popularity = (() => {
    const popData = usbabynames.byName[bn.name];
    if (popData) {
      return popData[popData.length - 1];
    } else {
      return null;
    }
  })();
  return { ...bn, popularity: popularity };
});

console.log(babyNamesWithPopularity);
