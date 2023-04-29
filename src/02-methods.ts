import { MyDate } from "./01-class";

const firstDate = new MyDate(2023,4,25);

console.log('Fecha con formato:',firstDate.printFormat());
console.log('Suma de fechas:',firstDate.add(1,'days'));
console.log('Suma de fechas:',firstDate.add(1,"months"));
