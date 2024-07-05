function sumOfTripledEvens(arr) {
  return arr
    .filter((e) => e % 2 === 0)
    .map((num) => num * 3)
    .reduce((sum, acc) => {
      return sum + acc;
    });
}

console.log(sumOfTripledEvens([1, 2, 3, 4, 4, 5, 6, 67, 8, 6, 4, 24]));
const palindromes = function (str) {
  return (
    str
      .split("")
      .map((i) => i.toLowerCase())
      .filter((i) => !i.match(/\W/g))
      .reverse()
      .join(" ") ==
    str
      .split("")
      .map((i) => i.toLowerCase())
      .filter((i) => !i.match(/\W/g))
      .join(" ")
  );
};

const fibonacci = function (num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};
const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();

  people.forEach((person) => {
    if (!person.yearOfDeath) {
      person.age = currentYear - person.yearOfBirth;
    } else {
      person.age = person.yearOfDeath - person.yearOfBirth;
    }
  });

  const oldestPerson = people.reduce((oldest, person) => {
    return (oldest.age || 0) > person.age ? oldest : person;
  });

  return oldestPerson;
};

console.log(findTheOldest(people));
