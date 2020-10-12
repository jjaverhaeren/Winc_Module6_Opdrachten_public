//CREDITCARDS:
let now = new Date();
let year = now.getFullYear();
const expireYear = year + 1 - 2000;

const showCreditcards = async () => {
  parentOfList.innerHTML = "Oude Creditcards:";
  try {
    let creditcards = randomPersonData
      .filter((person) => {
        if (
          person.credit_card.expiration.includes("/" + expireYear) &&
          person.age >= 18
        ) {
          return person;
        }
      })
      .map((person) => {
        let expireDateString = person.credit_card.expiration.split("");
        if (expireDateString.length === 4) {
          expireDateString.unshift("0");
        }
    
        const newexpireDate = expireDateString.join("");
        // console.log(newexpireDate);
        return `Exp.date: ${newexpireDate}. <br> Card number: ${person.credit_card.number}. <br> Name: ${person.name} ${person.surname}. <br> Phone: ${person.phone}.`;
      });
    const creditcardSorted = creditcards.sort();
    for (i = 0; i < creditcardSorted.length; i++) {
      const creditInList = document.createElement("li");
      creditInList.innerHTML = creditcards[i];
      creditInList.classList.add("listElement");
      parentOfList.appendChild(creditInList);
    }
  } catch (err) {
    console.log(err);
  }
};
