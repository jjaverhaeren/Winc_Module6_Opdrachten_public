// Subopdracht: gemiddelde leeftijd
// Als we op de knop voor deze opdracht drukken komt er een lijst met knoppen te staan. De opdracht-knoppen blijven ook staan.
// Elk van de nieuwe knoppen heeft als naam een land ("Nederland" bijvoorbeeld).
// Als we dan op één van de landknoppen drukken zien we ergens in de pagina een zin verschijnen met de tekst "De gemiddelde persoon in {land} is {jaar} oud".
// Om die zin te kunnen laten zien moeten we de gemiddelde leeftijd voor dat land berekenen.
// Rond de gemiddelde leeftijd af naar hele cijfers ( 18.4999 → 18 en 18.5 → 19).

//Get an array of all regions (distinct):
const distinctRegions = () => {
  let onlyRegions = [];
  for (let i = 0; i < randomPersonData.length; i++) {
    const regionAndAge = randomPersonData[i].region;
    log(regionAndAge);
    onlyRegions.push(regionAndAge);
  }
  onlyRegions.sort();
  const onlyDistinctRegions = [...new Set(onlyRegions)];
  return onlyDistinctRegions;
};

// distinctRegions();

//get an array of all ages per region
//! region is now hardcoded - index of onlyDistinctRegions.
const getAgesToSum = () => {
  const onlyDistinctRegions = distinctRegions();
  let regionAndAgeArray = [];

  for (let i = 0; i < randomPersonData.length; i++) {
    const regionAndAge = [randomPersonData[i].region, randomPersonData[i].age];

    regionAndAgeArray.push(regionAndAge);
    log(regionAndAgeArray);
  }

  const regionAndAgeSorted = regionAndAgeArray.sort();
  // log(regionAndAgeSorted);

  let agesToSum = [];
  for (let i = 0; i < regionAndAgeSorted.length; i++) {
    if (regionAndAgeSorted[i][0] === onlyDistinctRegions[3]) {
      agesToSum.push(regionAndAgeSorted[i][1]);
      return agesToSum;
    }
  }
};
// // log(agesToSum);
// //calculate average age per region
const calcAverages = () => {
  const onlyDistinctRegions = distinctRegions();
  const agesToSum = getAgesToSum();
  function sum(total, num) {
    return total + num;
  }
  let agesSummed = agesToSum.reduce(sum);
  const average = Math.round(agesSummed / agesToSum.length);
  return average;
};

//show info of average age per region in h3 element
//! region shown in h3 element is now hardcoded - index of onlyDistinctRegions.
const showInfoOnH3 = () => {
  const onlyDistinctRegions = distinctRegions();
  const average = calcAverage();
  const infoH3 = document.getElementById("info");
  infoH3.innerHTML = `The average age in ${onlyDistinctRegions[3]} is ${average}`;
};

//Final function
const AverageAge = () => {
  try {
    const onlyDistinctRegions = distinctRegions();
    const agesToSum = getAgesToSum();
    const average = calcAverage();
    showInfoOnH3();
  } catch (err) {
    console.log(err);
  }
};

// AverageAge();
const onlyDistinctRegions = distinctRegions();
let array1 = onlyDistinctRegions;
let array2 =[];

onlyDistinctRegions.sort();
for ( let i = 0; i < array1.length; i++) {
  array2.push(array1[i]);
}
log(array2);

// let array2 = [
//   ["Austria", 23],
//   ["Austria", 27],
//   ["Belgium", 26],
//   ["Netherlands", 36],
//   ["Belgium", 39],
//   ["Netherlands", 34],
//   ["Zambia", 34],
//   ["Zambia", 26],
//   ["Zambia", 30],
// ];

let getAgesArray = () => {
  for (let j = 0; j < array1.length; j++)
    for (let i = 0; i < array2.length; i++) {
      if (array1[j] === array2[i][0]) {
       array1[j].push(array2[i][1]);
      } 
    }

    //add for loop to make array1[i][0] the value of the regionbuttons.
    // log(array1);
    for (let i = 0; i < array1.length; i++) {
      // log(array1[i][0]);
      array1.shift();
    }
    // log(array1);
    const  calcAverage = (acc, current) => {
      return acc + current;
    };
    for (let i = 0; i < array1.length; i++) {
    let totalAge = array1.reduce(calcAverage);
    let result = Math.round(totalAge / array1.length);
    log(`The average age in ${array2[i]} is ${result}`);
    }
};

getAgesArray();

//
const setAverageAgeTitle = () => {
  parentOfList.innerHTML = "Gemiddelde Leeftijd:";
};

const showRegionBtns = () => {
  const onlyDistinctRegions = distinctRegions();
  for (i = 0; i < onlyDistinctRegions.length; i++) {
    const regionBtnsParent = document.getElementById("region-btns-container");
    const regionBtn = document.createElement("button");
    regionBtn.innerHTML = `${onlyDistinctRegions[i]}`;
    regionBtn.classList.add("region-btn");
    regionBtn.value = i;
    regionBtnsParent.appendChild(regionBtn);
  }
};
