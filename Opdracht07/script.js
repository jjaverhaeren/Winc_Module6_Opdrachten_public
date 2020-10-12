// randomPersonData
const log = console.log;

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}

let randomPersonData = randomPerson.sort(compare);
// log(randomPersonData);

const buttons = document.getElementsByClassName("button");
const parentOfList = document.getElementById("list");

const listShown = document.getElementById("list");

// const clearList = () => {
//   while (listShown.firstChild) {
//     listShown.removeChild(listShown.firstChild);
//   }
// };

const regionBtnsBtns = document.getElementById("region-btns-container");

const clearRegionBtns = () => {
  while (regionBtnsBtns.firstChild) {
    regionBtnsBtns.removeChild(regionBtnsBtns.firstChild);
  }
};

const clearInfo = () => {
  const infoH3 = document.getElementById("info");
  infoH3.innerHTML = "";
};

const personToMatchList = document.getElementById("match-ul");

const clearList = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};
