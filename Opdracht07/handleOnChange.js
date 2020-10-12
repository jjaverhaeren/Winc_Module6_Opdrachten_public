const handleOnChangeEvent = (e) => {
  let target = e.target;

  switch (target.value) {
    case "Landenlijst":
      clearList(listShown);
      clearRegionBtns();
      clearInfo();
      showCountriesList();
      break;
    case "Steenbok Vrouwen":
      clearList(listShown);
      clearRegionBtns();
      clearInfo();
      showCapricorn();
      break;
    case "Ouwe Creditcards":
      clearList(listShown);
      clearRegionBtns();
      clearInfo();
      showCreditcards();
      break;
    case "Meeste Mensen":
      clearList(listShown);
      clearRegionBtns();
      clearInfo();
      showRegionWithMostPeople();
      break;
    case "Gemiddelde Leeftijd":
      clearList(listShown);
      setAverageAgeTitle();
      clearRegionBtns();
      clearInfo();
      showRegionBtns();
      assignOnClickEvent();
      break;
    case "Matchmaking":
      clearList(listShown);
      clearInfo();
      clearRegionBtns();
      addZodiacToPerson();
      addClickEventToMatchBtn();
      break;
    default:
  }
};

const buttonsArray = Array.from(buttons);
buttonsArray.forEach((button) =>
  button.addEventListener("click", handleOnChangeEvent)
);
// const buttons = document.getElementsByClassName("button"); button declared in script.js:3

const handleOnClickEventInfo = (e) => {
  let target = e.target.value;
  clearInfo();
  AverageAge();
};

const assignOnClickEvent = () => {
  const regionBtns = document.getElementsByClassName("region-btn");
  // log(regionBtns);
  const regionBtn = Array.from(regionBtns);
  // log(regionBtn)
  regionBtn.forEach((btn) =>
    btn.addEventListener("click", handleOnClickEventInfo)
  );
  // (btn.onclick = AverageAge());
};

// const handleOnClickShowMatches = (e) => {
//   let target = e.target;
//   let btnValue = e.target.value;
//   clearList(parentOfList);
//   const matchesFound = randomPersonData.sort((person) => {
//     if (person.zodiac === btnValue) {
//       const matchesToShow = document.createElement("li");
//       matchesToShow.innerHTML = `${person.name} ${person.surname} is a match!`;
//       matchesToShow.classList.add("listElement");
//       parentOfList.appendChild(matchesToShow);
//       // log(`${person.name} ${person.surname} is a great match!`);
//     }
//   });
// };

const handleOnClickShowMatches = (e) => {
  let target = e.target;
  let btnNameValue = e.target.namevalue;
  let btnSurnameValue = e.target.surnamevalue;
  let btnZodiacValue = e.target.zodiacvalue;

  clearList(parentOfList);
  const personWithMatches = document.createElement("h1");
  personWithMatches.innerHTML = `${btnNameValue} ${btnSurnameValue}, <br> these are your matches!`;
  parentOfList.appendChild(personWithMatches);
  const matchesFound = randomPersonData.sort((person) => {
    if (
      person.zodiac === btnZodiacValue &&
      person.name !== btnNameValue &&
      person.surname !== btnSurnameValue
    ) {
      const matchesToShow = document.createElement("li");
      matchesToShow.innerHTML = `${person.name} ${person.surname} from ${person.region}, age ${person.age}.`;
      matchesToShow.classList.add("listElement");

      parentOfList.appendChild(matchesToShow);
      // log(`${person.name} ${person.surname} is a great match!`);
    }
  });
};

const personToMatchButtons = document.getElementsByClassName("match-btn");

const addClickEventToMatchBtn = () => {
  personToMatchButton = Array.from(personToMatchButtons);
  personToMatchButton.forEach((matchBtn) => {
    matchBtn.addEventListener("click", handleOnClickShowMatches);
  });
};
