// class Person {
//     constructor() {
//         this.hungry = true;
//     }
//     speak() {
//         console.log('Hello!')
//     }
//     eat() {
//         console.log('Eating');
//         this.hungry = false;
//     }
// }
// class WorkPerson extends Person {
//     work() {
//         console.log('working');
//     }
// }
// let yevhen  = new WorkPerson();
// let stas = new WorkPerson();
// yevhen.eat();
// stas.eat();
// stas.work();
// yevhen.work();
// console.log(yevhen.hungry);
// console.log(stas.hungry);
//Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
class Worker {
    constructor(name,surname,rate,days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate*this.days;
    }
}
let yevhen = new Worker('yevhen','prokopiv',200,30);
let stas = new Worker('stas','prokopiv',500,30);
let sum = yevhen.getSalary() + stas.getSalary();
console.log(sum);

