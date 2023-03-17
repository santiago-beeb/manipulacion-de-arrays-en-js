//some valida si un elemento cumple una condicion
const numbers = [1, 2, 3, 4];

let conFor = false;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {
    conFor = true;
    break;
  }
}
console.log("🚀 ~ file: 07-some.js:5 ~ conFor:", conFor);

//si hay un numero par retornar true
const conSome = numbers.some((item) => item % 2 === 0);
console.log("🚀 ~ file: 07-some.js:8 ~ conSome:", conSome);

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

const areIntervalsOverLapping = require("date-fns/areIntervalsOverlapping");

const isOverLap = (newDate) => {
  return dates.some((date) => {
    return areIntervalsOverLapping(
      {
        start: date.startDate,
        end: date.endDate,
      },
      { start: newDate.startDate, end: newDate.endDate }
    );
  });
};

//no se sobre ponen las fechas

console.log(
  "🚀 ~ file: 07-some.js:45 ~ isOverLap ~ isOverLap:",
  isOverLap(newAppointment)
);
