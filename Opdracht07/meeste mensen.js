const showRegionWithMostPeople = async () => {
  parentOfList.innerHTML = "De meeste mensen wonen in:";
  try {
    let regions = randomPersonData
      .filter((person) => {
        return person.region;
      })
      .map((person) => {
        return person.region;
      });
    // console.log(regions);
    // const sortedRegions = regions.sort();
    // console.log(sortedRegions);
    let regionsCount = {};
regions.forEach(function(x) {
    regionsCount[x] = (regionsCount[x] || 0) + 1;
    //   const sortedRegions = regionsCount.sort();
    // console.log(regionsCount);
    // console.log(`${regionsCount.region}`);
}
);
// console.log(regionsCount);
let regionsCountArray = Object.entries(regionsCount).sort((a,b) => b[1]-a[1])
// const Slovakia = regionsCount[0];
// console.log(Slovakia);

    for (i = 0; i < regionsCountArray.length; i++) {
      const regionCountedInList = document.createElement("li");
      regionCountedInList.innerHTML = regionsCountArray[i];
      regionCountedInList.classList.add("listElement");
      parentOfList.appendChild(regionCountedInList);
    }
  } catch (err) {
    console.log(err);
  }
};


