//STEENBOK VROUWEN:
const getBirthdayFinal = (person) => {
  let birthdayString = person.birthday.mdy.split("");
  let birthMonth = [];
  birthMonth.push(birthdayString[0]);
  birthMonth.push(birthdayString[1]);
  birthMonth.join("");
  let birthDay = [];
  birthDay.push(birthdayString[3]);
  birthDay.push(birthdayString[4]);
  birthDay.join("");
  let birthdayFinal = birthMonth.concat(birthDay).join("");
  // log(birthdayFinal)
  return birthdayFinal;
};

const showCapricorn = async () => {
  parentOfList.innerHTML = "Steenbok Vrouwen:";
  try {
    let capricorn = randomPersonData
      .filter((person) => {
        //
        let birthdayFinal = getBirthdayFinal(person);
        if (
          person.gender === "female" &&
          person.age > 30 &&
          ((birthdayFinal > 1222 && birthdayFinal < 1231) ||
            (birthdayFinal > 101 && birthdayFinal < 119))
        ) {
          // console.log(person.birthday.mdy);
          return person;
        }
      })

      .map((person) => {
        return `name: ${person.name} ${person.surname}. date of birth: ${person.birthday.dmy}.`;
        // return person.name + " " + person.surname;
      });
    const capriSorted = capricorn.sort();

    for (i = 0; i < capriSorted.length; i++) {
      const capriInList = document.createElement("li");
      capriInList.innerHTML = capriSorted[i];
      capriInList.classList.add("listElement");
      parentOfList.appendChild(capriInList);
    }
  } catch (err) {
    console.log(err);
  }
};

