const addZodiacToPerson = () => {
  try {
    // log(randomPersonData);
    let personToMatch = randomPersonData.filter((person) => {
      let birthdayFinal = getBirthdayFinal(person);

      if (
        person.age >= 18 &&
        ((birthdayFinal >= 321 && birthdayFinal <= 331) ||
          (birthdayFinal >= 401 && birthdayFinal <= 420))
      ) {
        person.zodiac = "Aries";
        // log(`${person.name}'s zodiac sign is ${person.zodiac}.`);
      } else if (
        person.age >= 18 &&
        ((birthdayFinal >= 421 && birthdayFinal <= 431) ||
          (birthdayFinal >= 501 && birthdayFinal <= 520))
      ) {
        person.zodiac = "Taurus";
        // log(`${person.name}'s zodiac sign is ${person.zodiac}.`);
      } else if (
        person.age >= 18 &&
        ((birthdayFinal >= 521 && birthdayFinal <= 531) ||
          (birthdayFinal >= 601 && birthdayFinal <= 621))
      ) {
        person.zodiac = "Gemini";
        // log(`${person.name}'s zodiac sign is ${person.zodiac}.`);
      } else if (
        person.age >= 18 &&
        ((birthdayFinal >= 622 && birthdayFinal <= 631) ||
          (birthdayFinal >= 701 && birthdayFinal <= 722))
      ) {
        person.zodiac = "Cancer";
        // log(`${person.name}'s zodiac sign is ${person.zodiac}.`);
      } else if (
        person.age >= 18 &&
        ((birthdayFinal >= 723 && birthdayFinal <= 731) ||
          (birthdayFinal >= 801 && birthdayFinal <= 823))
      ) {
        person.zodiac = "Lion";
        // log(`${person.name}'s zodiac sign is ${person.zodiac}.`);
      } else if (
        person.age >= 18 &&
        ((birthdayFinal >= 824 && birthdayFinal <= 0831) ||
          (birthdayFinal >= 901 && birthdayFinal <= 922))
      ) {
        person.zodiac = "Virgo";
        // log(`${person.name}'s zodiac sign is ${person.zodiac}.`);
      } else if (
        person.age >= 18 &&
        ((birthdayFinal >= 923 && birthdayFinal <= 931) ||
          (birthdayFinal >= 1001 && birthdayFinal <= 1023))
      ) {
        person.zodiac = "Libra";
        // log(`${person.name}'s zodiac sign is ${person.zodiac}.`);
      } else if (
        person.age >= 18 &&
        ((birthdayFinal >= 1024 && birthdayFinal <= 1031) ||
          (birthdayFinal >= 1101 && birthdayFinal <= 1122))
      ) {
        person.zodiac = "Scorpio";
        // log(`${person.name}'s zodiac sign is ${person.zodiac}.`);
      } else if (
        person.age >= 18 &&
        ((birthdayFinal >= 1123 && birthdayFinal <= 1131) ||
          (birthdayFinal >= 1201 && birthdayFinal <= 1221))
      ) {
        person.zodiac = "Sagittarius";
        // log(`${person.name}'s zodiac sign is ${person.zodiac}.`);
      } else if (
        person.age >= 18 &&
        ((birthdayFinal >= 1222 && birthdayFinal <= 1231) ||
          (birthdayFinal >= 101 && birthdayFinal <= 120))
      ) {
        person.zodiac = "Capricorn";
        // log(`${person.name}'s zodiac sign is ${person.zodiac}.`);
      } else if (
        person.age >= 18 &&
        ((birthdayFinal >= 121 && birthdayFinal <= 131) ||
          (birthdayFinal >= 201 && birthdayFinal <= 219))
      ) {
        person.zodiac = "Aquarius";
        // log(`${person.name}'s zodiac sign is ${person.zodiac}.`);
      } else if (
        person.age >= 18 &&
        ((birthdayFinal >= 220 && birthdayFinal <= 231) ||
          (birthdayFinal >= 301 && birthdayFinal <= 320))
      ) {
        person.zodiac = "Pisces";
        // log(`${person.name}'s zodiac sign is ${person.zodiac}.`);
      } else {
        person.zodiac = "Pokémon";
      }
    });
    // log(randomPersonData);
    const photoUrls = randomPersonData.map((person) => {
      return person.photo;
    });
    //
    for (i = 0; i < randomPersonData.length; i++) {
      //ul container:
      const personToMatchContainer = document.createElement("ul");
      personToMatchContainer.classList.add("match-ul");
      //name:
      const personToMatchName = document.createElement("li");
      personToMatchName.innerHTML =
        randomPersonData[i].name + " " + randomPersonData[i].surname;
      personToMatchName.classList.add("listElement");
      //photo:
      const personToMatchImg = document.createElement("img");
      personToMatchImg.src = photoUrls[i];
      personToMatchImg.classList.add("img");
      //age:
      const personToMatchAge = document.createElement("li");
      personToMatchAge.innerHTML = randomPersonData[i].age;
      personToMatchAge.classList.add("listElement");
      //region:
      const personToMatchRegion = document.createElement("li");
      personToMatchRegion.innerHTML = randomPersonData[i].region;
      personToMatchRegion.classList.add("listElement");
      //zodiac:
      const personToMatchZodiac = document.createElement("li");
      personToMatchZodiac.innerHTML = randomPersonData[i].zodiac;
      personToMatchZodiac.classList.add("listElement");
      //button:
      const personToMatchButtons = document.createElement("button");
      // const buttonTxt =
      personToMatchButtons.innerHTML = `Find Match for ${randomPersonData[i].name} ${randomPersonData[i].surname}`;
      personToMatchButtons.classList.add("match-btn");
      personToMatchButtons.namevalue = randomPersonData[i].name;
      personToMatchButtons.surnamevalue = randomPersonData[i].surname;
      personToMatchButtons.zodiacvalue = randomPersonData[i].zodiac;
      //append children
      parentOfList.appendChild(personToMatchContainer);
      personToMatchContainer.appendChild(personToMatchImg);
      personToMatchContainer.appendChild(personToMatchName);
      personToMatchContainer.appendChild(personToMatchAge);
      personToMatchContainer.appendChild(personToMatchRegion);
      personToMatchContainer.appendChild(personToMatchZodiac);
      personToMatchContainer.appendChild(personToMatchButtons);
     
    }
  } catch (error) {
    log(error);
  }
};

// addZodiacToPerson();
