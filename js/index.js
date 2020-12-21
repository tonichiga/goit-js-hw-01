//Задание 1

// const name = "Генератор защитного поля";
// let price = 1000;

// console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);

// price = 2000;

// console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);

// //Задание 2

// const total = 100;
// const ordered = 50;
// const message =
// total > ordered
//   ? "На складе недостаточно товаров"
//   : "Заказ оформлен, с вами свяжется менеджер";
// console.log(message);

// Вариант решения 2

// if (total > ordered) {
//   console.log("На складе недостаточно товаров!");
// } else {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// }

// Задание 3
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!
// const CANCELED_BY_USER = "Отменено пользователем!";
// const ADMIN_PASSWORD = "jqueryismyjam";
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!'

// let message = prompt("Введите пароль");
// if (logIn === null) {
//   message = CANCELED_BY_USER;
// } else if (logIn === ADMIN_PASSWORD) {
//   message = ACCESS_IS_ALLOWED;
// } else {
//     message = ACCESS_DENIED;
// }

// console.log(message);

// Задание 4
// const orderPieces = 8;
// const ACCESS_DENIED = "Недостаточно средств на счету!";
// const CANCELED_BY_USER = "Отменено пользователем!";
// const credits = 23580;
// const pricePerDroid = 3000;
// let balanceCredit;
// let totalPrice;
// let message;

// if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// } else if ((totalPrice = pricePerDroid * orderPieces)) {
//   message = ACCESS_DENIED;
// }

// balanceCredit = credits - totalPrice;

// if (totalPrice > credits) {
//   totalPrice = ACCESS_DENIED;
// } else if (totalPrice < credits) {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов.`;
// }

// balanceCredit = credits - totalPrice;

// console.log(message);

// Задание 5
// const countryName = "ЯмайкА";

// const CANCELED_BY_USER = "Отменено пользователем!";
// const NO_DELIVERY = "В выбранную страну доставка недоступна.";
// const CHINA = "Китай";
// const AUSTRALIA = "Австралия";
// const INDIA = "Индия";
// const JAMAICA = "Ямайка";
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
//   switch (country) {
//     // Write code under this line
//     case CHINA:
//       price = 100;
//       console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
//       break;

//     case AUSTRALIA:
//       price = 170;
//       console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
//       break;

//     case INDIA:
//       price = 80;
//       console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
//       break;

//     case JAMAICA:
//       price = 120;
//       console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
//       break;

//     default:
//       message = NO_DELIVERY;
//   }
// }
// if (price > 0) {
//   // Write code on this line
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }

// console.log(message);

// Перебор чисел

// let message;
// let max = 10;
// let i;

// for (let i = 0; i < max; i += 1) {
//   if (i % 3 === 0) {
//   }
//   console.log(i);
// }
