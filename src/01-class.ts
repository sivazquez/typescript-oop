export class MyDate{
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number){
        this.year = year;
        this.month = month;
        this.day = day;
    }

    printFormat(): string{
        return `${this.day}/${this.month}/${this.year}`;
    }

    add(amount: number, type: 'days' | 'months' | 'years'): string{
        if(type === 'days'){
            this.day += amount;
        }
        if(type === 'months'){
            this.month += amount;
        }
        if(type === 'years'){
            this.year += amount;
        }
        return `${this.day}/${this.month}/${this.year}`;
    }
}

//const myDateOne = new MyDate(1987,9,10);
//console.log(myDateOne);