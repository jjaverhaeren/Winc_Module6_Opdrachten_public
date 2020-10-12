const regionNames = randomPersonData.map((person) => {
  return person.region;
});

//LANDENLIJST:
const showCountriesList = async () => {
  parentOfList.innerHTML = "Landenlijst:";
  try {
    let regions = randomPersonData
      .filter((person) => {
        return person.region;
      })
      .map((person) => {
        return person.region;
      });
    // console.log(regions);
    const distinctRegions = [...new Set(regions)].sort();
    // console.log(distinctRegionsSorted);
    for (i = 0; i < distinctRegions.length; i++) {
      const regionInList = document.createElement("li");
      regionInList.innerHTML = distinctRegions[i];
      regionInList.classList.add("listElement");
      parentOfList.appendChild(regionInList);
    }
  } catch (err) {
    console.log(err);
  }
};



