//Задание 1

// const name = "Генератор защитного поля";
// let price = 1000;

// console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);

// price = 2000;

// console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);

// //Задание 2

// const total = 100;
// const ordered = 50;
// const result =
//   total > ordered
//     ? "На складе недостаточно товаров"
//     : "Заказ оформлен, с вами свяжется менеджер";
// console.log(result);

// Вариант решения 2

// if (total > ordered) {
//   console.log("На складе недостаточно товаров!");
// } else {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// }

// Задание 3

// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;

// const logIn = prompt("Введите пароль");
// if (logIn === null) {
//   message = "Отменено пользователем!";
// } else if (logIn === ADMIN_PASSWORD) {
//   message = "Добро пожаловать!";
// }

// console.log(message);

// Задание 4

// const credits = 23580;
// const pricePerDroid = 3000;
// let theRemainderFunds;
// let totalPrice;

// const buy = prompt("Какое количество дроидов купить ?");
// if (buy === null) {
//   totalPrice = "Отменено пользователем!";
// } else if ((totalPrice = pricePerDroid * buy)) {
// }

// theRemainderFunds = credits - totalPrice;

// if (totalPrice > credits) {
//   totalPrice = "Недостаточно средств на счету!";
// } else if (totalPrice < credits) {
//   totalPrice = `Вы купили ${buy} дроидов, на счету осталось ${theRemainderFunds} кредитов.`;
// }

// theRemainderFunds = credits - totalPrice;

// console.log(totalPrice);

// Задание 5

// let cost;
// let count;
// let country = prompt("Введите страну доставки");

// switch (country.toLowerCase()) {
//   case "китай":
//     cost = 100;
//     country = "Китай";
//     console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
//     break;

//   case "чили":
//     cost = 250;
//     country = "Чили";
//     console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
//     break;

//   case "австралия":
//     cost = 170;
//     country = "Австралия";
//     console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
//     break;

//   case "индия":
//     cost = 80;
//     country = "Индия";
//     console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
//     break;

//   case "ямайка":
//     cost = 120;
//     country = "Ямайка";
//     console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
//     break;

//   default:
//     alert("В вашей стране доставка не доступна");
// }
